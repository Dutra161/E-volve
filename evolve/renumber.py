def renumber_pdb(file, outfile, start):
    with open(file,'r') as reader:
        lines = reader.readlines()

    connect = {'     ':'     '}
    n = start
    output = []
    for line in lines:
        if line.startswith('ATOM') or line.startswith('HETATM'):
            output.append(line[:6] + str(n).rjust(5) + line[11:])
            connect[line[6:11]] = n
            n+=1
        
        elif line.startswith('MODEL'):
            n = start
            output.append(line)

        elif line.startswith('MODEL'):
            n = start
            output.append(line)

        elif line.startswith('ANISOU'):
            output.append(line[:6] + str(n-1).rjust(5) + line[11:])

        elif line.startswith('TER'):
            output.append(line[:6] + str(n).rjust(5) + line[11:])

        elif line.startswith('CONECT'):
            atoms = [line[i] for i in [slice(6,11),slice(11,16),slice(16,21),slice(21,26),slice(26,31)]]
            #print(''.join([str(connect[a]).rjust(5) for a in atoms]))
            output.append(line[:6] + ''.join([str(connect[a]).rjust(5) for a in atoms]) + line[31:])
        
        else:
            output.append(line)
    
    with open(outfile,'w') as wrt:
        wrt.write(''.join(output))