from os import remove, listdir
import sys

for file in listdir(sys.argv[1]+'/pdbs'):
    if file[-7:] == '_or.pdb':
        remove(sys.argv[1]+'/pdbs/'+file)
    elif file[-8:] == '_mut.pdb':
        remove(sys.argv[1]+'/pdbs/'+file) 
    elif file[-4:] == '.par':
        remove(sys.argv[1]+'/pdbs/'+file) 
    elif file[-4:] == '.ali':
        remove(sys.argv[1]+'/pdbs/'+file)
    elif len(file) != 8:
        remove(sys.argv[1]+'/pdbs/'+file)
    