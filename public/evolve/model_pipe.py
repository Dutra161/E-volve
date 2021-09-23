import sys
#sys.path.append('public/evolve/vtr')

from structure import Sequence,Alignment
from subprocess import check_output

import json
import os
from shutil import copyfile

#input: folder,

def model_pipe(folder):

    sufix = '_mut'

    with open('public/evolve/aminoacids','r') as reader:
        temp = json.load(reader)
    aminoacids = {}

    for key in temp:
        aminoacids[temp[key]] = key
    del temp


    mutations = json.load(open(folder+'/mutations_file.json','r'))

    pdb = os.listdir(folder+'/pdbs/')[0]

    copyfile(folder+'/pdbs/'+pdb,folder+'/pdbs/'+pdb[:-4]+'_or.pdb')

    mutation = Sequence(folder+'/pdbs/'+pdb)
    mutation.idPDB = folder[folder.rfind('/')+1:]+mutation.idPDB
    invalid = {}
    for chain in mutations:
        for mut in mutations[chain]:
            if 'del' in mut:
                feedback = mutation.mutate(chain,int(mut[:-3]),'-')
                
                if feedback != {}:
                    feedback_key = list(feedback.keys())[0]
                    if feedback_key in invalid.keys():
                        invalid[feedback_key].append(feedback[feedback_key])
                    else:
                        invalid[feedback_key] = [feedback[feedback_key]]
            else:
                feedback = mutation.mutate(chain,int(mut[:-1]),mut[-1])
                
                if feedback != {}:
                    feedback_key = list(feedback.keys())[0]
                    if feedback_key in invalid.keys():
                        invalid[feedback_key].append(feedback[feedback_key])
                    else:
                        invalid[feedback_key] = [feedback[feedback_key]]

    with open(folder + '/warnings.log','w') as wrt:
        json.dump(invalid,wrt)
    if json.dumps(invalid) == json.dumps(mutations).replace('del','-'):
        open(folder + '/no_mut.log','w').close()
        sys.exit()

    ali = Alignment([folder+'/pdbs/'+pdb, mutation])
    ali.build(folder,folder+'/pdbs/'+pdb[:-4]+'.ali')
    resp = ali.model(folder+'/pdbs/'+pdb[:-4]+'_mut.pdb')
    print(resp)