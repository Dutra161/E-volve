import json
import os
import sys
from datetime import date, timedelta
from shutil import rmtree
from time import ctime, strftime, strptime, time
import traceback
from subprocess import run, PIPE
import requests

from pdbIsolation import pdbIsolation
from structure import Protein


def TorF(dic):
    for vl in dic.values():
        for i in vl:
            if("del" in i):
                return False
    return True

# def TMAlign(output,protein1,protein2,folder):
#     #Delete existing alignments and create new
#     if (not(os.path.exists("public/evolve/vtr/tmalign"))):
#         run("g++ public/evolve/vtr/TMAlign.cpp -o public/evolve/vtr/tmalign")
#         print("TMAlign compilado!")

#     if os.path.exists(output):
#         rmtree(output)
#     os.mkdir(output)
#     callalign = "public/evolve/vtr/tmalign " + protein1 + " " + protein2 + " -o " + output + '/' + 'first'
#     #print(callalign)
    
#     process = run(callalign, stdout=PIPE, stderr=PIPE, shell=True)
    
#     output = process.stdout.decode("utf-8")
#     error = process.stderr.decode("utf-8")
#     if error != '':
#         with open(folder+'/log','w') as wrt:
#             wrt.write(error)
#         return 0
    
#     Score = output.split('TM-score= ')[1:3]
#     Score = [float(e.split(' ')[0]) for e in Score]

#     return max(Score)


def detect_homology(folder,protein_file):
    #se for pdb, eu procuro no fasta pelo termo Sars-CoV-2, spike RBD, se encontrar, retorno "yes"
    #ler o arquivo e tentar alinhar cada cadeia
    #caso eu consiga, retornar estrutura com cadeias alinhadas(spikes) e "yes"
    TMScore='-'
    id = protein_file[protein_file.rfind('/')+1:protein_file.rfind('.')]

    spikes = []
    has = 'no'
    if len(id) == 4:
        #is pdb
        fasta = requests.get('https://www.rcsb.org/fasta/entry/'+id+'/display').text.split('\n')
        if fasta[0][0] == '>':
            for line in fasta:
                if len(line) <= 1:
                    continue
                if line[0] == '>':
                    #is header
                    if 'coronavirus 2' in line.lower() or 'sars-cov-2' in line.lower():
                        if 'spike' in line.lower() or 'surface' in line.lower() or 'rbd' in line.lower():
                            #is covid spike
                            has = 'yes'
                            spk=line.split('|')[1].replace('Chain ','').replace('Chains ','').split(',')
                            for j in range(len(spk)):
                                if '[auth' in spk[j]:
                                    spk[j]=spk[j].split('[auth ')[-1].replace(']','')
                            spikes.extend(spk)

    
    if has == 'no':
        #not defined, so we try to align and get the RMSD
        if os.path.exists(folder+'/homology_data'):
            rmtree(folder+'/homology_data')
        os.mkdir(folder+'/homology_data')
        os.mkdir(folder+'/homology_data/fragments')
        os.mkdir(folder+'/homology_data/alignments')

        chains = [e.id for e in Protein(protein_file).chains]

        #isolate chain to detect homology using tmalign
        for chain in chains:
            pdbIsolation(protein_file,folder+'/homology_data/fragments/'+chain+'.pdb',[chain])

            TMScore = TMAlign(folder+'/homology_data/alignments',folder+'/homology_data/fragments/'+chain+'.pdb','public/data/6m0j-E.pdb',folder)
            print(TMScore)
            if float(TMScore) > 0.5:
                has = 'yes'
                spikes.append(chain)

            else:
                TMScore = TMAlign(folder+'/homology_data/alignments',folder+'/homology_data/fragments/'+chain+'.pdb','public/data/6vxx-A.pdb',folder)
                if float(TMScore) > 0.5:
                    has = 'yes'
                    spikes.append(chain)
                else:
                    TMScore = TMAlign(folder+'/homology_data/alignments',
                                      folder+'/homology_data/fragments/'+chain+'.pdb','public/data/7dk3-C.pdb',folder)
                    if float(TMScore) > 0.5:
                        has = 'yes'
                        spikes.append(chain)
    
    homology = {
        'has' : has,
        'spike-chains' : spikes,
        'TMScore' : TMScore
    }
    return homology


def clear_projects():

    cutoff = date.today() - timedelta(days=30)

    protected = open('public/evolve/protected','r').readlines()

    projects = os.listdir('public/projects')
    
    for project in projects:
        if project not in protected:
            path = 'public/projects/'+project
            strtime = strptime(ctime(os.path.getmtime(path)))
            day,month,year = [int(e) for e in strftime('%d,%m,%Y',strtime).split(',')]
            file_date = date(year,month,day)

            if file_date < cutoff:
                rmtree(path)
                print('deleted: ' + path)
