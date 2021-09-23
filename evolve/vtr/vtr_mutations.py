from vtr.VTR_Geometric import Match
import sys

def get_chains(file):

    with open(file, 'r') as data:
        lines = data.readlines()
    
    chains = set()

    for line in lines:
        if line[0:4] == 'ATOM':
            chains.add(line[21:22])

    return chains
        

def vtr_mutations(data):
    path = data[0]

    invalid = []

    original = path+'/Data/'+data[1]
    mutated = path+'/Data/'+data[2]

    chains = data[3]

    valid_chains1 = list(get_chains(original)) #Define as cadeias validas
    valid_chains2 = list(get_chains(mutated))#Define as cadeias validas

    for chain1,chain2 in chains:

        if chain1 in valid_chains1 and chain2 in valid_chains2:

            Match(original,mutated,chain11=chain1,chain12=chain2,
                chain21=chain1,chain22=chain2,target=path)

        else:
            invalid.append([chain1,chain2])
        
    return invalid