#This program recieve a PDB format file and create a protein object
residues = ["ALA","ARG","ASN","ASP","CYS","GLN","GLY","GLU","HIS","ILE","LEU","LYS","MET","PHE","PRO","SER","THR","TRP","TYR","VAL","HID","HIE"]
aminoacids = {"ALA":"A",
"ASX":"B",
"CYS":"C",
"ASP":"D",
"GLU":"E",
"PHE":"F",
"GLY":"G",
"HIS":"H",
"ILE":"I",
"LYS":"K",
"LEU":"L",
"MET":"M",
"ASN":"N",
"PRO":"P",
"GLN":"Q",
"ARG":"R",
"SER":"S",
"THR":"T",
"VAL":"V",
"TRP":"W",
"TYR":"Y",
"GLX":"Z"}

aminoacids_reverse = {}
for key in aminoacids:
    aminoacids_reverse[aminoacids[key]] = key

import os
from shutil import copyfile
from subprocess import run
from modeling import modeling

class Protein:
    def __init__(self, file):

        with open(file,'r') as reader:
            lines = reader.readlines()
            
            self.warnings = []
            self.title = ""
            data = {}
            self.idPDB = ''
            self.header = ''
            self.date = ''

            for line in lines:
                if line[0:3] == "END":
                    break

                #find header
                if line[0:6] == 'HEADER':
                    self.idPDB = line[62:66]
                    self.header = line[10:50].strip()
                    self.date = line[50:59].rstrip()
                elif line[0:5] == 'TITLE':
                    self.title += line[10:80].rstrip()
                elif line[0:4] == 'ATOM':
                    if line[26] != ' ':
                        continue

                    if line[16] != 'A' and  line[16] != ' ':
                        continue

                    if line[12] == 'H':
                        continue
                        
                    if line[13] == 'H':
                        continue

                    chain = line[21]
                    if chain not in data.keys():
                        data[chain] = {}

                    resi = line[17:20] + '-' + line[22:26].strip()
                    if resi not in data[chain].keys():
                        data[chain][resi] = [line]
                    else:
                        data[chain][resi].append(line)
                    if resi[0:3] not in residues:
                        self.warnings.append(resi)

            self.chains = [Chain(e,data[e]) for e in data]


    def size(self):
        size = 0
        for i in self.chains:
            for e in i.residues:
                size += len(e.atoms)
        return size
    def resnum(self):
        size=0
        for i in self.chains:
            size += len(i.residues)
        return size

class Chain:
    def __init__(self, id, dict):
        self.id = id
        self.residues = [Residue(e, dict[e]) for e in dict]
    def ressize(self):
        return (max([i.parameter for i in self.residues]))

class Residue:
    def __init__(self, key, atoms):
        key = key.split('-')
        self.id = key[0]
        try:
            self.parameter = int(key[-1])
        except:
            print(key)
        self.atoms = [Atom(line,self.id) for line in atoms]

class Atom:
    def __init__(self, line, parent):
        self.parent = parent
        self.id = int(line[6:11])
        self.type = line[13:17]
        self.x = float(line[30:38])
        self.y = float(line[38:46])
        self.z = float(line[46:54])
        self.occupancy = float(line[54:60])
        self.b_factor = float(line[60:66])


class Sequence:
    def __init__(self, file):
        self.file = file
        with open(file,'r') as reader:
            lines = reader.readlines()
            
            self.title = ""
            data = {}
            self.idPDB = file[file.rfind('/')+1:-4]
            self.header = ''
            self.date = ''
            self.title += ''

            for line in lines:
                if line[0:3] == "END":
                    break

                #find header
                if line[0:6] == 'HEADER':
                    self.header = line[10:50].strip()
                    self.date = line[50:59].rstrip()
                elif line[0:5] == 'TITLE':
                    self.title += line[10:80].rstrip()
                elif line[0:4] == 'ATOM':
                    if line[26] != ' ':
                        continue

                    if line[16] != 'A' and  line[16] != ' ':
                        continue

                    chain = line[21]
                    if chain not in data.keys():
                        data[chain] = {}

                    data[chain][int(line[22:26])] = aminoacids[line[17:20]]
            
            self.sequence = data
            
    def mutate(self, chain, pos, target):
        feedback = {}

        if chain in self.sequence.keys():
            if pos in self.sequence[chain].keys():
                self.sequence[chain][pos] = target
            else:
                feedback[chain] = str(pos)+target
        else:
            feedback[chain] = str(pos)+target

        return feedback


class Alignment:
    def __init__(self,sequences = []):

        self.sequences = []
        for sequence in sequences[0:2]:
            
            if type(sequence) is Sequence:
                self.sequences.append(sequence)

            elif type(sequence) is str:
                if os.path.exists(sequence):
                    self.sequences.append(Sequence(sequence))

    def build(self,folder,output):
        if self.sequences[0].sequence.keys() != self.sequences[0].sequence.keys():
            return 'Cannot build .ali in different chains'

        export0 = '>P1;'+self.sequences[0].idPDB+'\n'
        export0 += 'structure:'+self.sequences[0].idPDB+':.:.:.:.::::\n'
        export1 = '>P1;'+self.sequences[1].idPDB+'\n'
        export1 += 'sequence:'+self.sequences[1].idPDB+':.:.:.:.::::\n'

        for chain in self.sequences[0].sequence:
            for res in self.sequences[0].sequence[chain]:

                target0 = self.sequences[0].sequence[chain][res]

                target1 = self.sequences[1].sequence[chain][res]

                if target0 == target1 or target0 == '-' or target1 == '-':
                    export0 += target0
                    export1 += target1
                
                else:
                    export0 += target0 + '-'
                    export1 += '-' + target1

            export0+='/'
            export1+='/'
        
        
        with open(output,'w') as wrt:
            wrt.write(export0[:-1]+'*\n')
            wrt.write(export1[:-1]+'*\n')
        
        self.ali = output
        
        clear = []
        with open(self.sequences[0].file,'r') as reader:
            lines = reader.readlines()

            for line in lines:
                if line[0:4] == 'ATOM':
                    if line[26] == ' ':
                        clear.append(line)
                else:
                    clear.append(line)
        
        with open(self.sequences[0].file[:-4]+'.pdb','w') as wrt:
            wrt.writelines(clear)


        chains = list(self.sequences[0].sequence.keys())
        renum = [str(list(self.sequences[0].sequence[e].keys())[0]) for e in chains]
        self.par = output[:output.rfind('.')] + '.par'
        with open(self.par, 'w') as wrt:
            wrt.write(self.ali+'\n')
            wrt.write(self.sequences[0].idPDB+'\n')
            wrt.write(self.sequences[1].idPDB+'\n')

            wrt.write(','.join(chains)+'\n')
            wrt.write(','.join(renum)+'\n')
            wrt.write(folder + '\n')

    
    def model(self, output):
        modeling(self.par)


        name = self.sequences[1].idPDB
        if os.path.exists(output+'temp'):
            os.remove(output+'temp')
        os.rename(name+'.B99990001.pdb',output+'temp')

        os.remove(name+'.D00000001')
        os.remove(name+'.ini')
        os.remove(name+'.sch')
        os.remove(name+'.rsr')
        os.remove(name+'.V99990001')

        
        header = []
        footer = []
        before = True
        with open(output+'temp','r') as reader:
            lines = reader.readlines()
            data = {}
            for line in lines:
                if line[0:4] == 'ATOM':
                    before = False
                    chain = line[21]
                    if chain not in data.keys():
                        data[chain] = {}

                    resi = line[17:20] + '-' + line[22:26].strip()
                    if resi not in data[chain].keys():
                        data[chain][resi] = [line]
                    else:
                        data[chain][resi].append(line)
                elif before:
                    header.append(line)
                else:
                    footer.append(line)
                
        backup = {}
        for chain in self.sequences[1].sequence:
            backup[chain] = {}
            for res in self.sequences[1].sequence[chain]:
                if self.sequences[1].sequence[chain][res] != '-':
                    backup[chain][res] = self.sequences[1].sequence[chain][res]
                
        for chain in backup:
            for res,residue in zip(backup[chain].keys(),data[chain].keys()):
                for line in range(len(data[chain][residue])):
                    data[chain][residue][line] = data[chain][residue][line][:22] + \
                        ''.join([' ' for i in range(0,4-len(str(res)))])+str(res)+\
                            data[chain][residue][line][26:]
        
        with open(output,'w') as wrt:

            wrt.writelines(header)
            for chain in data:
                for residue in data[chain]:
                    wrt.writelines(data[chain][residue])
            wrt.writelines(footer)

        return 0