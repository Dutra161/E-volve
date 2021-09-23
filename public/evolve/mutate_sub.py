from subprocess import run
import sys
from shutil import copyfile
import json
import os
from mutate import mutate_sub
from renumber import renumber_pdb

#input: folder

sufix = '_mut'
from subprocess import run
def merge_atoms(ref, target):
    ref_text = open(ref,'r').readlines()
    target_text = open(target,'r').readlines()
    
    header = []
    footer = []
    before = True
    data = {}
    for line in target_text:
        if line[0:4] == 'ATOM':
            before = False
            chain = line[21]
            if chain not in data.keys():
                data[chain] = {}

            resi = line[17:20] + '-' + line[22:26].strip()
            if resi not in data[chain].keys():
                data[chain][resi] = {line[11:29]:[line[:11],line[29:]]}
            else:
                data[chain][resi][line[11:29]] = [line[:11],line[29:]]
        elif before:
            header.append(line)
        else:
            footer.append(line)

    reference = {}
    for line in ref_text:
        if line[0:4] == 'ATOM':
            chain = line[21]
            if chain not in reference.keys():
                reference[chain] = {}

            resi = line[17:20] + '-' + line[22:26].strip()
            if resi not in reference[chain].keys():
                reference[chain][resi] = {line[11:29]:[line[:11],line[29:]]}
            else:
                reference[chain][resi][line[11:29]] = [line[:11],line[29:]]
    
    output = data.copy()
    for key in output:
        output[key] = data[key].copy()
        for res in output[key]:
            output[key][res] = data[key][res].copy()


    for key in data:
        for res in data[key]:
            if res in reference[key].keys():
                for line in data[key][res]:
                    if line not in reference[key][res].keys():
                        output[key][res].pop(line)

    with open(target,'w') as wrt:
        wrt.writelines(header)

        for key in output:
            for res in output[key]:
                for line in output[key][res]:
                    wrt.write(output[key][res][line][0])
                    wrt.write(line)
                    wrt.write(output[key][res][line][1])

        wrt.writelines(footer)
    
    renumber_pdb(target,target,1)



def apply_mutations(data):

    
    temp = {
        'ALA':'A',
        'ASX':'B',
        'CYS':'C',
        'ASP':'D',
        'GLU':'E',
        'PHE':'F',
        'GLY':'G',
        'HIS':'H',
        'ILE':'I',
        'LYS':'K',
        'LEU':'L',
        'MET':'M',
        'ASN':'N',
        'PRO':'P',
        'GLN':'Q',
        'ARG':'R',
        'SER':'S',
        'THR':'T',
        'VAL':'V',
        'TRP':'W',
        'TYR':'Y',
        'GLX':'Z'}
    folder = data[2]
    file = data[0]
    mutations = data[1]
    invalid = {}
    name = file
    for chain,res,res_name in mutations:
        try:
            mutate_sub(name,res,res_name,chain)
        except:
            if chain in invalid.keys():
                invalid[chain].append(res+temp[res_name])
            else:
                invalid[chain] = [res+temp[res_name]]   
        else:
            
            if os.path.exists(file[:-4]+sufix+'.pdb'):
                os.remove(file[:-4]+sufix+'.pdb')
            os.rename(name+res_name+res+'.pdb',file[:-4]+sufix+'.pdb')
            name = file[:-4]+sufix+'.pdb'
    
    with open(folder + '/warnings.log','w') as wrt:
        json.dump(invalid,wrt)

    if len(invalid) != len(mutations):
        merge_atoms(file[:-4]+'.pdb',file[:-4]+sufix+'.pdb')
    else:
        #não tem nada
        with open(folder + '/warnings.log','a') as wrt:
            
            wrt.write('\n Nenhuma das mutações é possível...')

        open(folder + '/no_mut.log','w').close()
            

def mutate(folder):

    with open('public/evolve/aminoacids','r') as reader:
        temp = json.load(reader)
    aminoacids = {}

    for key in temp:
        aminoacids[temp[key]] = key


    mutations = json.load(open(folder+'/mutations_file.json','r'))
    pdb = os.listdir(folder+'/pdbs/')[0]
    copyfile(folder+'/pdbs/'+pdb,folder+'/pdbs/'+pdb[:-4]+'_or.pdb')
    to_mutate = [folder+'/pdbs/'+pdb,[],folder]

    for chain in mutations:
        for mut in mutations[chain]:
            to_mutate[1].append((chain,mut[:-1],aminoacids[mut[-1]]))

    apply_mutations(to_mutate)