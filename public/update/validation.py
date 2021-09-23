from requests import get
from time import sleep

def input_validation(basedir, input_file):
    with open(input_file,'r') as reader:
        try:
            ids = reader.read().replace(' ','').replace('\n','').split(',')
        except:
            return False

    copy = ids[:]
    old_data = open(basedir+'data/spikes','r').read().split(', ')

    for id in ids:
        if id in old_data:
            copy.remove(id)
            continue
        
        elif len(id) != 4:
            copy.remove(id)
            continue

    ids = copy
    
    return ids


#A = input_validation('data/new-spikes')

#print(A)
