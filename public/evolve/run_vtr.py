import os
import shutil
import sys

sys.path.append('public/evolve')
sys.path.append('public/evolve/vtr')


import json
from vtr.vtr_mutations import vtr_mutations
from vtr.OSfunct import mkdir

#input: folder

def vtr_evolve(path):

    if not os.path.exists(path+'/vtr'):
        os.mkdir(path+'/vtr')

    if not os.path.exists(path+'/vtr/Data'):
        os.mkdir(path+'/vtr/Data')

    pdbs = os.listdir(path+'/pdbs')

    mutated = ""
    original = ''

    for data in pdbs:
        if data[-8:] == '_mut.pdb':
            shutil.copyfile(path+'/pdbs/'+data, path+'/vtr/Data/'+data)
            mutated = data

        if data[-7:] == '_or.pdb':
            shutil.copyfile(path+'/pdbs/'+data, path+'/vtr/Data/'+data[:-7]+'.pdb')
            original = data[:-7]+'.pdb'

    with open(path+'/selected.json','r') as reader:
        work = json.load(reader)


    mkdir(path+'/vtr')

    data = []
    for ids in work:      
        data = [path+'/vtr',original,mutated,work[ids]]

    invalid = vtr_mutations(data)

    return invalid



invalid_chains = vtr_evolve('public/projects/Gamma')
invalid_chains = vtr_evolve('public/projects/Beta')
'''invalid_chains = vtr_evolve('public/projects/Beta2')
invalid_chains = vtr_evolve('public/projects/Beta3')
invalid_chains = vtr_evolve('public/projects/Beta4')'''
