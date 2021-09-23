#VTR Functions

import vtr.Contacts as Contacts
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy
import vtr.makegraph as mk
import vtr.OSfunct as OSfunct
import math
import json
        
class match:
    def __init__(self,rtt_contact,stc_contact):
        self.rtt_contact = rtt_contact

        self.stc_contact = stc_contact                            


        if (self.rtt_contact.centroid1):
            self.a = self.rtt_contact.centroid1
        else:
            self.a = self.rtt_contact.atom1
        if (self.rtt_contact.centroid2):
            self.b = self.rtt_contact.centroid2
        else:
            self.b = self.rtt_contact.atom2
        if (self.stc_contact.centroid1):
            self.c = self.stc_contact.centroid1
        else:
            self.c = self.stc_contact.atom1
        if (self.stc_contact.centroid2):
            self.d = self.stc_contact.centroid2
        else:
            self.d = self.stc_contact.atom2
    def Vector11(self):
        return (Contacts.adistance(self.a,self.c))
    def Vector12(self):
        return (Contacts.adistance(self.a,self.d))
    def Vector21(self):
        return (Contacts.adistance(self.b,self.c))
    def Vector22(self):
        return (Contacts.adistance(self.b,self.d))
    def VMD(self):
        VMD=[]
        VMD.append(round((self.Vector11() + self.Vector22())/2,5))
        VMD.append(round((self.Vector12() + self.Vector21())/2,5))
        return (min(VMD))           

def minVMD(matches,blacklist,cutoff):
    #Find the lower VMD in the list of possible matches and remove invalid matches from the list
    minVMD = cutoff
    #create a copy of list
    temp_matches = matches[:]
    match = 0
    for i in matches:
        #search for the lower VMD, if members are not in blacklist
        if not((i.rtt_contact in blacklist) or (i.stc_contact in blacklist)):
            if i.VMD() <= minVMD:
                match = i
                minVMD = match.VMD()
        else:
            #remove invalid from list, this improve the eficience of futures searchs
            temp_matches.remove(i)
    return (match,temp_matches)
    
def RMSD(matches, protein1, protein2):
    RMSD = 0
    for i in matches:
        RMSD += (i.VMD()**2)
    RMSD = (RMSD/len(matches))**(1/2)
    return RMSD

def VTR(matches, rtt_contacts, stc_contacts, rtt_dismatches, stc_dismatches, cutoff):
    AVD = 0
    for i in matches:
        AVD += i.VMD()
    VTR = ((AVD/(cutoff*len(matches)))*((rtt_dismatches + stc_dismatches)/(len(rtt_contacts) + len(stc_contacts))))
    return VTR,(AVD/(len(matches)))

def match_contacts(rtt_contacts,stc_contacts,cutoff):
    with open('public/evolve/contact_cutoff.json','r') as reader:
        limit = json.load(reader)
    #try to match contacts by distance only
    all_matches = []
    rtt_dismatches = []
    stc_dismatches = []
    blacklist = []
    matches = []
    for i in rtt_contacts:
        for j in stc_contacts:
            #create a list of possibles contacts
            if i.validation or j.validation:
                _match = match(i,j)
                if _match.VMD() <= cutoff:
                    #remove over contacts(invalid types that not exists in pratical situation)

                    all_matches.append(_match)

    #refine the contacts, serching for the bests                
    control = True
    while control:
        _match,all_matches = minVMD(all_matches, blacklist, cutoff)
        
        if _match != 0:

            blacklist.append(_match.rtt_contact)
            blacklist.append(_match.stc_contact)

            i = _match.rtt_contact
            jlist = _match.stc_contact.contacts[:]
            j = _match.stc_contact
            #if not('Hydrophobic' in jlist or 'Aromatic Stacking' in jlist):
            for tye in jlist:
                
                if (j.residue1.id == i.residue1.id) and (j.residue1.parameter == i.residue1.parameter):
                    if (j.residue2.id == i.residue2.id) and (j.residue2.parameter == i.residue2.parameter):
                        if (j.distance > limit[tye]) and (tye not in i.contacts):
                            _match.stc_contact.contacts.remove(tye)
                            #print('removing : ',tye,' from ', jlist, i.contacts)
                            #print(j.residue1.id, i.residue1.id, _match.VMD())

            matches.append(_match)
            all_matches.remove(_match)
        else:
            control = False
    
    #make the dismatch's lists
    for m in rtt_contacts:
        if not(m in blacklist):
            if m.validation:
                rtt_dismatches.append(m)
    for m in stc_contacts:
        if not(m in blacklist):
            if m.validation:
                stc_dismatches.append(m)
    return (matches,rtt_dismatches,stc_dismatches)

def freq_VMD(path,matches,cutoff,folder,protein1,protein2):
    #create histograms for VMD frequency and residues interactions
    x = [round(i,1) for i in numpy.arange(0,float(cutoff+0.1),0.1)]
    VMD_freq = {}
    frequency = []
    for i in x:
        VMD_freq[i] = 0
    for match in matches:
        #create a list of VMDs
        VMD_freq[round(match.VMD(),1)] += 1
    #create lists for histogram 
    
    index = 0
    for i in x:
        frequency.append(VMD_freq[i])

    mk.makegraph('line','vmdfreq',x,frequency,"",max(frequency),(path+'/Graphs/'+folder+'/vmdfreq.js'),'AVD Frequency')

    if True:
        #provide detailed graphic info
        #initiate a frequency distribuition for each reasidue in each protein
        rtt_freq = { "ALA" : [0 for i in range(0,20)],
                     "ARG" : [0 for i in range(0,20)],
                     "ASN" : [0 for i in range(0,20)],
                     "ASP" : [0 for i in range(0,20)],
                     "CYS" : [0 for i in range(0,20)],
                     "GLN" : [0 for i in range(0,20)],
                     "GLY" : [0 for i in range(0,20)],
                     "GLU" : [0 for i in range(0,20)],
                     "HIS" : [0 for i in range(0,20)],
                     "ILE" : [0 for i in range(0,20)],
                     "LEU" : [0 for i in range(0,20)],
                     "LYS" : [0 for i in range(0,20)],
                     "MET" : [0 for i in range(0,20)],
                     "PHE" : [0 for i in range(0,20)],
                     "PRO" : [0 for i in range(0,20)],
                     "SER" : [0 for i in range(0,20)],
                     "THR" : [0 for i in range(0,20)],
                     "TRP" : [0 for i in range(0,20)],
                     "TYR" : [0 for i in range(0,20)],
                     "VAL" : [0 for i in range(0,20)]}
                    
        stc_freq = { "ALA" : [0 for i in range(0,20)],
                     "ARG" : [0 for i in range(0,20)],
                     "ASN" : [0 for i in range(0,20)],
                     "ASP" : [0 for i in range(0,20)],
                     "CYS" : [0 for i in range(0,20)],
                     "GLN" : [0 for i in range(0,20)],
                     "GLY" : [0 for i in range(0,20)],
                     "GLU" : [0 for i in range(0,20)],
                     "HIS" : [0 for i in range(0,20)],
                     "ILE" : [0 for i in range(0,20)],
                     "LEU" : [0 for i in range(0,20)],
                     "LYS" : [0 for i in range(0,20)],
                     "MET" : [0 for i in range(0,20)],
                     "PHE" : [0 for i in range(0,20)],
                     "PRO" : [0 for i in range(0,20)],
                     "SER" : [0 for i in range(0,20)],
                     "THR" : [0 for i in range(0,20)],
                     "TRP" : [0 for i in range(0,20)],
                     "TYR" : [0 for i in range(0,20)],
                     "VAL" : [0 for i in range(0,20)]}

        residues = ["ALA","ARG","ASN","ASP","CYS","GLN","GLY","GLU","HIS","ILE","LEU","LYS","MET","PHE","PRO","SER","THR","TRP","TYR","VAL"]

        x = 1
        #walks the dictionary and the list, counting the frequency of interactions between residues
        for ref in rtt_freq:
            for i in range(0,len(residues)):
                for match in matches:
                    if (match.rtt_contact.residue1.id == ref):
                        if (match.rtt_contact.residue2.id == residues[i]):
                            rtt_freq[ref][i] += 1
                    elif (match.rtt_contact.residue2.id == ref):
                        if (match.rtt_contact.residue1.id == residues[i]):
                            rtt_freq[ref][i] += 1
                    if (match.stc_contact.residue1.id == ref):
                        if (match.stc_contact.residue2.id == residues[i]):
                            stc_freq[ref][i] += 1
                    elif (match.stc_contact.residue2.id == ref):
                        if (match.stc_contact.residue1.id == residues[i]):
                            stc_freq[ref][i] += 1
        _max = 0
        #wals the frequency lists, seraching for the max, for normalization of graphs
        for ref in rtt_freq:
            for index in rtt_freq[ref]:
                if index > _max:
                    _max = index

            for index in stc_freq[ref]:
                if index > _max:
                    _max = index
        #plot graphs
        for ref in rtt_freq:
            mk.makegraph('bar',ref,residues, rtt_freq[ref],protein1, _max, path+'/Graphs/'+folder+'/'+ref+'.js',ref+' Contact Frequency in Matches',stc_freq[ref], protein2)
            x += 1  

#create a scatter graph for contact maps of the contacts
def contact_map(path,contacts,dismatches,matches,folder, pname):
    contact_counter = {}
    #separete contacts
    for contact in contacts:
        key_name = contact.chain1.id + '-' + contact.chain2.id 
        if key_name in contact_counter.keys():
            contact_counter[key_name].append(contact)
        else:
            contact_counter[key_name] = []
            contact_counter[key_name].append(contact)
    
    #create axes
    for key in contact_counter:
        conservations = []
        for match in matches:
            for contact in contact_counter[key]:
                if match.rtt_contact == contact:
                    if match.rtt_contact.contacts != match.stc_contact.contacts:
                        conservations.append(contact)
                elif match.stc_contact == contact:
                    if match.stc_contact.contacts != match.rtt_contact.contacts:
                        conservations.append(contact)
        mk.makescatter(contact_counter[key], dismatches, conservations,pname+' - '+key, pname+key.replace(" ", "0"), path+'/Graphs/'+folder+'/'+pname+key.replace(" ", "0")+'_cmap.js')
    


def write_dismatch(path,protein1,protein2,rtt_dismatches,stc_dismatches,_type):
    #write the dismatche file
    dis = open(path+'/Results/Dismatches/'+protein1[protein1.rfind("/")+1:-4]+"x"+protein2[protein2.rfind("/")+1:-4]+_type+'.txt','w')
    dis.write(protein1[protein1.rfind("/")+1:-4]+' Unmatched Contacts:\n\n')
    for i in rtt_dismatches:
        dis.write(str(i.number)+' - '+i.chain1.id+" "+i.residue1.id+" "+str(i.residue1.parameter)+" "+i.atom1.type+" VS "+i.chain2.id+" "+i.residue2.id+" "+str(i.residue2.parameter)+" "+i.atom2.type+"\n")
        dis.write("Distance: "+str(i.distance)+" - ")
        for e in i.contacts:
            dis.write(e+", ")
        dis.write("\n")
    
    dis.write("\n\n")
    dis.write(protein2[protein2.rfind("/")+1:-4]+' Unmatched Contacts:\n\n')
    for i in stc_dismatches:
        dis.write(str(i.number)+' - '+i.chain1.id+" "+i.residue1.id+" "+str(i.residue1.parameter)+" "+i.atom1.type+" VS "+i.chain2.id+" "+i.residue2.id+" "+str(i.residue2.parameter)+" "+i.atom2.type+"\n")
        dis.write("Distance: "+str(i.distance)+" - ")
        for e in i.contacts:
            dis.write(e+", ")
        dis.write("\n")
 
def writer(path,protein1,protein2,rtt_protein,stc_protein,rtt_contacts,stc_contacts,matches,_type):
    #write the match file
    outfile = path+"/Results/Matches/" + protein1[protein1.rfind("/")+1:-4] + "x" + protein2[protein2.rfind("/")+1:-4] + _type + ".txt"
    out = open(outfile,'w')
    out.write("Rotate Protein: ")
    out.write(rtt_protein.idPDB)
    out.write("\n")
    out.write(rtt_protein.header)
    out.write("\n\nStatic Protein: ")
    out.write(stc_protein.idPDB)
    out.write("\n")
    out.write(stc_protein.header)
    out.write("\n")
    for i in matches:
        out.write(i.rtt_contact.chain1.id)
        out.write(" ")
        out.write(i.rtt_contact.residue1.id)
        out.write(" ")
        out.write(str(i.rtt_contact.residue1.parameter))
        out.write(" ")
        out.write(i.rtt_contact.atom1.type)
        out.write(" ")
        out.write(str(i.rtt_contact.atom1.id))
        out.write(" ----------- ")
        out.write(i.rtt_contact.chain2.id)
        out.write(" ")
        out.write(i.rtt_contact.residue2.id)
        out.write(" ")
        out.write(str(i.rtt_contact.residue2.parameter))
        out.write(" ")
        out.write(i.rtt_contact.atom2.type)
        out.write(" ")
        out.write(str(i.rtt_contact.atom2.id))
        out.write("\n")
        out.write(i.stc_contact.chain1.id)
        out.write(" ")
        out.write(i.stc_contact.residue1.id)
        out.write(" ")
        out.write(str(i.stc_contact.residue1.parameter))
        out.write(" ")
        out.write(i.stc_contact.atom1.type)
        out.write(" ")
        out.write(str(i.stc_contact.atom1.id))
        out.write(" ----------- ")
        out.write(i.stc_contact.chain2.id)
        out.write(" ")
        out.write(i.stc_contact.residue2.id)
        out.write(" ")
        out.write(str(i.stc_contact.residue2.parameter))
        out.write(" ")
        out.write(i.stc_contact.atom2.type)
        out.write(" ")
        out.write(str(i.stc_contact.atom2.id))
        out.write("\n")
        out.write("AVD: ")
        out.write(str(i.VMD()))
        out.write("            Contact types: ")
        for e in i.rtt_contact.contacts:
            out.write(e)
            out.write(", ")
        out.write(" / ")
        for e in i.stc_contact.contacts:
            out.write(e)
            out.write(", ")    
        out.write("\n\n")
    out.close()

def clearH(file):
    lines = open(file, 'r').readlines()
    clines = [i for i in lines.copy() if i[0:4] == 'ATOM']
    for line in clines:
    
        if line[17:20] == "HID":
            lines[lines.index(line)] = line.replace("HID", "HIS")

        if line[17:20] == "HIE":
            lines[lines.index(line)] = line.replace("HIE", "HIS")


    clines = [i for i in lines.copy() if i[0:4] == 'ATOM']
    for line in clines:

        if line[13] == 'H':
            lines.remove(line)
            
    open(file, 'w').write(''.join(lines))
