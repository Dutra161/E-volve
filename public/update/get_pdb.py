from requests import get
import os
import sys

def get_pdb(pdb, basedir):
    pdb_file = get('https://files.rcsb.org/view/' + pdb + '.pdb').text
    if (pdb_file[:6] == 'HEADER'):
        if not os.path.exists(basedir+'spikes'):
            os.mkdir(basedir+'spikes')
        open(basedir+'spikes/' + pdb + '.pdb','w').write(pdb_file)
        return pdb