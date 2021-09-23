# coding: utf-8
#V1.2
#Contacts match by geometric propertie, VMD(Vector Medium Distance)
#Some entry changes
#Write a plot .pml file
#Match skill improved and refined
#Most detailed analisys avaiable(by residue and color scale)
#Most Graphic detail and execution stats
#More run options(Chain filter)

import sys
import vtr.structure as structure
import vtr.Contacts as Contacts
import vtr.OSfunct as OSfunct
import vtr.Plot as Plot
import time
import vtr.VTR_Functions as vtr
import vtr.PymolGen as py
import os
import json
import traceback
from shutil import move

class Match:
    def __init__(self, _protein1, _protein2, *args, **kwargs):
    #parameters -------------------------------------------------------------------------------------------------------------------------
        self.rtt_protein = 0
        self.stc_protein = 0
        self.rtt_contacts = []
        self.stc_contacts = []
        self.matches = []
        self.rtt_dismatches = []
        self.stc_dismatches = []
        self.RMSD = False
        self.VTR = False
        self.mAVD = False
        self.number = 0
        self.time = 0
        self.type = ''
        self.chains = ''
        self.warnings = ''
        self.cutoff = 0
        start = time.time()
        _cutoff = kwargs.get('cutoff', '2')
        self.cutoff = _cutoff
        __type = kwargs.get('mtype', 'x').lower()
        _chain11 = kwargs.get('chain11', '/').upper()
        _chain12 = kwargs.get('chain12', '/').upper()
        _chain21 = kwargs.get('chain21', '/').upper()
        _chain22 = kwargs.get('chain22', '/').upper()
        _target = kwargs.get('target')
        self.chains = _chain11 + '-' + _chain12 + ' ' + _chain21 + '-' + _chain22
        protein1 = _protein1
        protein2 = _protein2
        _type = '-'

        
        if "d" == __type:
            _type += 'd'

        if not (_chain11 == '/' and _chain12 == '/' and _chain21 == '/' and _chain22 == '/'):
            if _chain11 != '/':
                _type += _chain11
            else:
                _type += '*'
            if _chain12 != '/':
                _type += _chain12
            else:
                _type += '*'
            if _chain21 != '/':
                _type += _chain21
            else:
                _type += '*' 
            if _chain22 != '/':    
                _type += _chain22
            else:
                _type += '*'
        _type += _cutoff

        self.type = _type

        outname = _target+"/Logs/"+protein1[protein1.rfind("/")+1:-4]+"x"+protein2[protein2.rfind("/")+1:-4]+_type+"Log.txt"
        
        try:
            

        #build aligned protein and contacts list --------------------------------------------------------------------------------------------
            
            path = OSfunct.TMAlign(_target,protein1,protein2)

            rtt_name = _target+"/Data/" + path + protein1[protein1.rfind("/"):-4] + "_rotate.pdb"
            rtt_protein = structure.Protein(rtt_name)
            stc_protein = structure.Protein(protein2)

            '''for chain in range(len(stc_protein.chains)):
                if stc_protein.chains[chain].id == 'A':
                    for res in range(len(stc_protein.chains[chain].residues)):
                        if stc_protein.chains[chain].residues[res].parameter == 376:
                            for atom in stc_protein.chains[chain].residues[res].atoms:
                                print(atom.id,atom.type)


                                
            for chain in range(len(rtt_protein.chains)):
                if rtt_protein.chains[chain].id == 'A':
                    for res in range(len(rtt_protein.chains[chain].residues)):
                        if rtt_protein.chains[chain].residues[res].parameter == 376:
                            for atom in rtt_protein.chains[chain].residues[res].atoms:
                                print(atom.id,atom.type)'''

            self.rtt_protein = rtt_protein
            self.stc_protein = stc_protein

            if 'd' in _type:
                rtt_contacts = Contacts.contacts(_target,rtt_protein,protein1[protein1.rfind("/")+1:-4] + "_rotate",_chain11,_chain12,'d')
                stc_contacts = Contacts.contacts(_target,stc_protein,protein2[protein2.rfind("/")+1:-4],_chain21,_chain22,'d')
            else:
                rtt_contacts = Contacts.contacts(_target,rtt_protein,protein1[protein1.rfind("/")+1:-4] + "_rotate",_chain11,_chain12)
                stc_contacts = Contacts.contacts(_target,stc_protein,protein2[protein2.rfind("/")+1:-4],_chain21,_chain22)
            
            if rtt_contacts == [] or stc_contacts == []:
                return

            with open('public/evolve/contact_cutoff.json','r') as reader:
                cutoff = json.load(reader)

            rtt_contacts = [e for e in rtt_contacts if e.validation]
            for cnt in rtt_contacts:
                for tye in cnt.contacts:
                    #print(self.contacts,cutoff[type])
                    if cnt.distance > cutoff[tye]:
                        #out
                        cnt.contacts.remove(tye)
                
            self.rtt_contacts = rtt_contacts
            self.stc_contacts = stc_contacts

        #match contacts ---------------------------------------------------------------------------------------------------------------------
            matches,rtt_dismatches,stc_dismatches = vtr.match_contacts(rtt_contacts,stc_contacts,int(_cutoff))

            rtt_cnts = [m.rtt_contact for m in matches]
            rtt_cnts.extend(rtt_dismatches)

            stc_cnts = [m.stc_contact for m in matches]
            stc_cnts.extend(stc_dismatches)

            #statistics here, avoid false positives
            Contacts.statistics(self.rtt_protein.resnum(), rtt_cnts, protein1[0:-4].replace('/Data/','/Results/Contacts/')+'_rotate_'+_chain11+_chain12)
            Contacts.statistics(self.stc_protein.resnum(), stc_cnts, protein2[0:-4].replace('/Data/','/Results/Contacts/')+'_'+_chain21+_chain22)

            

            self.matches = matches
            self.rtt_dismatches = rtt_dismatches
            self.stc_dismatches = stc_dismatches
            end = time.time()

        #write output -----------------------------------------------------------------------------------------------------------------------
            vtr.write_dismatch(_target,protein1,protein2,rtt_dismatches,stc_dismatches,_type)
            open(_target+"/Logs/"+protein1[protein1.rfind("/")+1:-4]+"_x_"+protein2[protein2.rfind("/")+1:-4]+_type+"_executionlog.txt",'w').close()
            out = open(outname, 'w', encoding='utf-8')
            out.write(str(self.counter()) + " main matches found,")
            result = str(len(matches)) + " matches in total" + "\n"
            self.number = len(matches)
            out.write(result)
            out.write("Execution time: " + str(round(end-start,0))+" seconds\n")
            self.time = end-start
            if (0 == len(matches)):
                out.write("\n")
                out.write("\n")
                out.write("\n")
                out.write(protein1[protein1.rfind("/")+1:]+"\n")
                out.write(_chain11+"\n")
                out.write(_chain12+"\n")
                out.write(protein2[protein2.rfind("/")+1:]+"\n")
                out.write(_chain21+"\n")
                out.write(_chain22+"\n")
                out.write(str(_cutoff)+"\n")

                if "d" in _type:
                    out.write("Detection of structural contacts in \u03B1-helices ON")
                else:
                    out.write("Detection of structural contacts in \u03B1-helices OFF")
                out.close()
                
                sys.exit()
            out.write("Match RMSD = "+str(round(vtr.RMSD(matches, rtt_protein, stc_protein),2)) + "\n")
            self.RMSD = vtr.RMSD(matches, rtt_protein, stc_protein)
            VTR, mean_AVD = vtr.VTR(matches, rtt_contacts, stc_contacts ,len(rtt_dismatches),len(stc_dismatches),int(_cutoff))
            out.write("VTR = "+str(round(VTR,2)) + "\n")
            self.VTR = VTR
            out.write("Average AVD = "+str(round(mean_AVD,2)) + " \u212b\n")
            self.mAVD = mean_AVD
            out.write(protein1[protein1.rfind("/")+1:]+"\n")
            out.write(_chain11+"\n")
            out.write(_chain12+"\n")
            out.write(protein2[protein2.rfind("/")+1:]+"\n")
            out.write(_chain21+"\n")
            out.write(_chain22+"\n")
            out.write(_cutoff+"\n")

            if "d" in _type:
                out.write("Detection of structural contacts in \u03B1-helices ON")
            else:
                out.write("Detection of structural contacts in \u03B1-helices OFF")
            out.close()
            
            vtr.writer(_target,protein1,protein2,rtt_protein,stc_protein,rtt_contacts,stc_contacts,matches,_type)

        #make plots -------------------------------------------------------------------------------------------------------------------------
            folder = Plot.multi_ploter(_target,rtt_name, protein2, matches, _type,_target)
            Plot.header(_target,rtt_name,protein2,folder,_target)
            folder = py.detailed_ploter(_target,rtt_name, protein2, matches,rtt_dismatches,stc_dismatches, int(_cutoff), _type)
            py.multi_ploter(_target,rtt_name, protein2, matches, int(_cutoff), folder)
            #OSfunct.gift(_target,rtt_name,protein2,folder)

        #make graphs ------------------------------------------------------------------------------------------------------------------------
            folder = OSfunct.create_dir(_target+"/Graphs",rtt_name,protein2,_type)
            vtr.contact_map(_target,rtt_cnts, rtt_dismatches, matches, folder, protein1[protein1.rfind("/")+1:-4])
            vtr.contact_map(_target,stc_cnts, stc_dismatches, matches, folder, protein2[protein2.rfind("/")+1:-4])
            vtr.freq_VMD(_target,matches,int(_cutoff),folder,protein1[protein1.rfind("/")+1:-4],protein2[protein2.rfind("/")+1:-4])

        #write recent parameters ------------------------------------------------------------------------------------------------------------
            if len(rtt_protein.warnings) != 0:
                self.warnings += 'Itens ['
                for e in rtt_protein.warnings:
                    self.warnings += e + ', '
                self.warnings += '] from protein 1 not involved in the contact calculation \n'
            if len(stc_protein.warnings) != 0:
                self.warnings += 'Itens ['
                for e in stc_protein.warnings:
                    self.warnings += e + ', '
                self.warnings += '] from protein 2 not involved in the contact calculation'
            warn = open(_target+'/Logs/'+protein1[protein1.rfind("/")+1:-4]+'_x_'+protein2[protein2.rfind("/")+1:-4]+_type+'_warnings.txt','w')
            if self.warnings != '':
                warn.write(self.warnings)
            
            open(_target+"/Logs/"+protein1[protein1.rfind("/")+1:-4]+"_x_"+\
                protein2[protein2.rfind("/")+1:-4]+_type+"_executionlog.txt",'w').close()
            
        except SystemExit:
            a = 0
        except:
            traceback.print_exc(file=open(_target+'/error_logs'+protein1[protein1.rfind("/")+1:-4]+"x"+protein2[protein2.rfind("/")+1:-4]+_type,'w'))
    def to_csv(self,_list, outname):
        out = open(outname, 'w')
        stack = ''''''
        for i in _list:
            if type(i) is Contacts.Contact:
                stack+=i.chain1.id + ',' + i.residue1.id + str(i.residue1.parameter) + ',' + i.atom1.type.strip() + ','
                stack+=i.chain2.id + ',' + i.residue2.id + str(i.residue2.parameter) + ',' + i.atom2.type.strip() + ',' 
                stack+=str(round(i.distance,2)) + ','
                for x in i.contacts:
                    stack += x + ' '
                stack += '''
'''
            elif type(i) is vtr.match:
                stack+=i.rtt_contact.chain1.id + ',' + i.rtt_contact.residue1.id + str(i.rtt_contact.residue1.parameter) + ',' + i.rtt_contact.atom1.type.strip() + ','
                stack+=i.rtt_contact.chain2.id + ',' + i.rtt_contact.residue2.id + str(i.rtt_contact.residue2.parameter) + ',' + i.rtt_contact.atom2.type.strip() + ',' 
                stack+=str(round(i.rtt_contact.distance,2)) + ','
                for x in i.rtt_contact.contacts:
                    stack += x + ' '
                stack += ','
                stack+=i.stc_contact.chain1.id + ',' + i.stc_contact.residue1.id + str(i.stc_contact.residue1.parameter) + ',' + i.stc_contact.atom1.type.strip() + ','
                stack+=i.stc_contact.chain2.id + ',' + i.stc_contact.residue2.id + str(i.stc_contact.residue2.parameter) + ',' + i.stc_contact.atom2.type.strip() + ',' 
                stack+=str(round(i.stc_contact.distance,2)) + ','
                for x in i.stc_contact.contacts:
                    stack += x + ' '
                stack += ','
                stack += str(round(i.VMD(),2)) + '''
'''
            else:
                print('Incorrect input(Must be a list of Contacts or vtr.matches)')
                return False
        out.write(stack)
    def counter(self):
        lista = self.matches.copy()
        for i in self.matches:
            if len(i.rtt_contact.contacts) == 1 and len(i.stc_contact.contacts) == 1:
                if i.rtt_contact.contacts[0] == 'Hydrophobic' and i.stc_contact.contacts[0] == 'Hydrophobic':
                    lista.remove(i)
        return len(lista)

#match = Match(sys.argv[1], sys.argv[2], cutoff = sys.argv[3], chain11 = sys.argv[4], chain12 = sys.argv[5], chain21 = sys.argv[6], chain22 = sys.argv[7], mtype = sys.argv[8])
