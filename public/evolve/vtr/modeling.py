# Comparative modeling by the AutoModel class
#
# Demonstrates how to build multi-chain models
#
from modeller import *
from modeller.automodel import *    # Load the AutoModel class
import sys

log.verbose()

class MyModel(AutoModel):
    def special_patches(self, aln):
        # Rename both chains and renumber the residues in each
        self.rename_segments(segment_ids=chains,
                             renumber_residues=renum)
        # Another way to label individual chains:
        for i in range(0,len(chains)):
          self.chains[i].name = chains[i]

def modeling(par_file):
    
    global chains
    global renum

    with open(par_file,'r') as reader:
        lines = reader.readlines()
        print(lines)
        folder = lines[5][:-1]
        ali = lines[0][:-1]
        know = lines[1][:-1]
        target = lines[2][:-1]
        chains = lines[3][:-1].split(',')
        renum = [int(i) for i in lines[4][:-1].split(',')]

    env = Environ()
    # directories for input atom files
    env.io.atom_files_directory = ['.',  folder+'/pdbs']

    # Be sure to use 'MyModel' rather than 'AutoModel' here!
    a = MyModel(env,
                alnfile  = ali ,     # alignment filename
                knowns   = know,              # codes of the templates
                sequence = target)              # code of the target

    a.starting_model= 1                # index of the first model
    a.ending_model  = 1                # index of the last model
                                    # (determines how many models to calculate)
    a.very_fast()

    a.make()    

