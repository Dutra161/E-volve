import json
import os
import sys
sys.path.append('public/evolve')
sys.path.append('public/evolve/vtr')
from datetime import date, timedelta
from shutil import rmtree

from model_pipe import model_pipe

from mutate_sub import mutate
from vtr_evolve import vtr_evolve

from time import ctime, strftime, strptime, time
import traceback
from mapping import map_graph
from subprocess import run, PIPE

import requests
from tools import *

def callevolve(folder):
    log = open(folder+'/execution.log','w')

    log.write('Cleaning Projects...\n')
    clear_projects()
    log.write('Success')
    start = time()



    started = open(folder+'/started','w')
    started.close()

    #Select modelling way
    log.write('Loading inputs...\n')
    mutations = json.load(open(folder+'/mutations_file.json','r'))
    deletion = not TorF(mutations)
    
    log.write('Success\n')
    log.write('Searching Homology\n')
    '''try:
        homology = detect_homology(folder,protein_file)
    except:
        with open(folder+'/log','w') as wrt:
            wrt.write(traceback.format_exc())
        return 1'''
    log.write('Success\n')
    print(deletion)

    log.write('Trying to Model ...\n')
    if deletion:
        #Use complete modelling, evolve.model_pipe.py
        try:
            model_pipe(folder)
        except:
            with open(folder+'/log','w') as wrt:
                wrt.write(traceback.format_exc())
            return 1
        method = 'Modeller standard fast model'
    else:
        try:
            mutate(folder)
        except:
            with open(folder+'/log','w') as wrt:
                wrt.write(traceback.format_exc())
            return 1
        method = 'Modeller mutate.py script'
    print(method)
    log.write('Success\n')
    log.write('Executing VTR...\n')

    try:
        vtr_evolve(folder)
    except:
        with open(folder+'/log','w') as wrt:
            wrt.write(traceback.format_exc())
        return 1
    log.write('Success\n')



    log.write('Writing parameters...\n')
    resume = {
        'time' : round(time() - start,4),
        'method' : method,
        'mutations' : [],
        'interactions' : [],
        #'sars-cov-homology' : homology
    }

    invalid = json.load(open(folder+'/warnings.log','r'))
    for chain in mutations:
        if chain in invalid.keys():
            for mutation in mutations[chain]:
                if mutation in invalid[chain]:
                    resume['mutations'].append((chain,mutation,'no'))
                else:
                    resume['mutations'].append((chain,mutation,'yes'))
        else:
            for mutation in mutations[chain]:
                resume['mutations'].append((chain,mutation,'yes'))

    with open(folder+'/selected.json','r') as wrt:
        selection = json.load(wrt)
        protein = list(selection.keys())[0][0:-4]

    for chain1,chain2 in selection[protein+'.pdb']:
        if os.path.exists(folder+'/vtr/Logs/'+protein+'x'+protein+'_mut-'+chain1+chain2+chain1+chain2+'2Log.txt'):
            with open(folder+'/vtr/Logs/'+protein+'x'+protein+'_mut-'+chain1+chain2+chain1+chain2+'2Log.txt','r', encoding="utf-8") as holder:
                line = holder.readline()
                if line[line.find(',')+1:line.find(',')+2] == 0:
                    resume['interactions'].append([chain1,chain2])
        else:
            resume['interactions'].append([chain1,chain2])



    with open(folder+'/resume.json','w') as wrt:
        json.dump(resume,wrt)
    log.write('Success\n')
    #grafico
    log.write('Building Graphs...\n')
    '''if(resume['sars-cov-homology']['has']=='yes'):
        try:
            map_graph(folder)
        except:
            with open(folder+'/log','w') as wrt:
                wrt.write(traceback.format_exc())
            return 1'''
    log.write('Success\n')
    log.close()
    finished = open(folder+'/done','w')
    finished.close()


#
# main(sys.argv[1])