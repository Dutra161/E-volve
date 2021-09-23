import os
from requests import get
import json
from datetime import date
import csv
from time import sleep
from shutil import copy, copyfile, rmtree

terms = ['spike','rbd','surface','s glycoprotein']


def separate_spike(data,output):
    dictionary = {}
    for id in data:
        
        try:
            fasta = get('https://www.rcsb.org/fasta/entry/'+id+'/display').text.split('\n')
        except:
            sleep(10)
            try:
                fasta = get('https://www.rcsb.org/fasta/entry/'+id+'/display').text.split('\n')
            except:
                continue
        if fasta[0][0] != '>':
            continue
        elif 'Severe acute respiratory syndrome coronavirus' not in '\n'.join(fasta):
            continue

        headers = [e for e in fasta if '>' in e]
        dictionary[id] = [[],[]]
        for header in headers:
            i = 1
            for term in terms: 
                if term in header.split('|')[2].lower():
                    i = 0
                    
            chains = header.split('|')[1].replace('Chain ','').replace('Chains ','').replace(' ','').split(',')
            for j in range(0,len(chains)):
                if '[auth' in chains[j]:
                    chains[j] = chains[j].split('[auth')[-1].replace(']','')
            dictionary[id][i].extend(chains)

    with open(output,'w') as wrt:
        json.dump(dictionary,wrt)

    matrix = [['ID','Spike Chains','Antibody/ACE2 Chains','Collection date']]
    for id in dictionary:
        chain1,chain2 = dictionary[id]
        matrix.append([id,','.join(chain1),','.join(chain2),date.today().strftime("%m/%d/%y")])
    print(matrix)
    with open(output[0:-4]+'csv', 'w', newline='') as csvfile:
        spamwriter = csv.writer(csvfile, delimiter=',')
        spamwriter.writerows(matrix)
    
    return dictionary


def mkdir(path, spikes, mutation_file, basedir):
    with open(mutation_file,'r') as rd:
        mutations = rd.read().split(',')
    
    mutations = [i[1:] for i in mutations]
    output = []

    for spike in spikes:
        place = path+'/'+spike+'/'

        if os.path.exists(place):
            rmtree(place)
        os.mkdir(place)
        
        l = []
        spk, ab = spikes[spike]
        for i in spk:
            for j in ab:
                l.append([i,j])

        selection = {path[path.rfind('/')+1:].replace('-','')+spike+'.pdb':l}
        mutation = {}
        for spk in spikes[spike][0]:
            mutation[spk] = mutations



        with open(place+'selected.json','w') as wrt:
            json.dump(selection,wrt)
        
        with open(place+'mutations_file.json','w') as wrt:
            json.dump(mutation,wrt)

        os.mkdir(place+'pdbs/')

        copyfile(basedir+'spikes/'+spike+'.pdb',place+'pdbs/'+path[path.rfind('/')+1:].replace('-','')+spike+".pdb")

        output.append(place[:-1])

    return output
