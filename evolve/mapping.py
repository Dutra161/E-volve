from genericpath import exists
import os
import json
from shutil import rmtree
import glob
from import_map import graph

def reading_archive(direct,direct_name,type,pairs,spk_chain,mutation):
    name=[]
    dic_contacts={}
    for i in direct_name:
        if('Contacts' in i):
            name.append(i)
    for i in name:
        if(type+'_'+pairs[0]+pairs[1] in i):
            name_contatcs=i
    
    arch1=open(direct+'/vtr/Results/Contacts/'+name_contatcs,'r')
    
    lines=arch1.read()
    lines=lines.split('\n')
    arch1.close()
    arch=lines[3:]

    formatting_spk=[]
    formatting_or=[]
    formatting_cts=[]
    for it in range(len(arch)):
        if(it%2 == 0):
            if(arch[it]==''):
                continue
            else:
                
                hyphen=arch[it].find('-')
                vs=arch[it].find('VS')

                formatting_or.append(arch[it][hyphen+1:vs])
                formatting_spk.append(arch[it][vs+2:])
        else:
                formatting_cts.append(arch[it])

    
    name_dic=""
    for i in range(len(formatting_spk)):
        line_spk=formatting_spk[i].split(' ')
        while('' in line_spk):
            line_spk.remove('')
        if(line_spk==[]):
            continue
        line_or=formatting_or[i].split(' ')
        while('' in line_or):
            line_or.remove('')
        if(line_or==[]):
            continue
        if(line_spk[0] in spk_chain):
            for j in mutation:
                if(j==line_spk[0]):
                    for change in mutation[j]:
                        if(line_spk[2]==change):
                            spk=line_spk[1]
                            number1=line_spk[2]
                            
                            contact=line_or[1]
                            number2=line_or[2]
                            
                            name_dic=contact+' '+number2+':'+spk+' '+number1
                elif(j==line_or[0]):
                    for change in mutation[j]:
                        if(line_or[2]==change):
                            spk=line_spk[1]
                            number1=line_spk[2]
                            contact=line_or[1]
                            number2=line_or[2]
                            name_dic=contact+' '+number2+':'+spk+' '+number1

        else:
            for j in mutation:
                if(j==line_spk[0]):
                    for change in mutation[j]:
                        if(line_spk[2]==change):
                            contact=line_spk[1]
                            number2=line_spk[2]
                            spk=line_or[1]
                            number1=line_or[2]
                            name_dic=contact+' '+number2+':'+spk+' '+number1
                elif(j==line_or[0]):
                    for change in mutation[j]:
                        if(line_or[2]==change):
                            contact=line_spk[1]
                            number2=line_spk[2]
                            spk=line_or[1]
                            number1=line_or[2]
                            name_dic=contact+' '+number2+':'+spk+' '+number1
            
        
        if(name_dic not in dic_contacts.keys() and name_dic != ""):
            dic_contacts[name_dic]=1
    return dic_contacts


def map_graph(direct, invalid_chains):
    maps_geral=[]
    graph_name=[]
    nameJson=glob.glob('public/data/*.json')
    for itJson in range(len(nameJson)):
        scale="public/data\\"
        nameJson[itJson]=nameJson[itJson][len(scale):]
        position_name=nameJson[itJson].find("-")
        size_name=len(nameJson[itJson])
        graph_name.append(nameJson[itJson][position_name+1:size_name-5])
    for nmjson in nameJson:
        with open("public/data/"+nmjson,"r") as f:
            maps_geral.append(json.load(f))

    with open(direct + '/selected.json',"r") as f:
        selected= json.load(f)

    with open(direct + '/resume.json',"r") as f:
        resume= json.load(f)
    with open(direct + '/mutations_file.json',"r") as f:
        mutation= json.load(f)
    for j in mutation:
        list_nb_chain=[]
        for it in mutation[j]:
            if('del' in it):
                nb_chain=it[:len(it)-3]
            else:
                nb_chain=it[:len(it)-1]
            list_nb_chain.append(nb_chain)
        mutation[j]=list_nb_chain
    create_dr=os.path.exists(direct+'/vtr/map')
    direct_name=os.listdir(direct+'/vtr/Results/Contacts/')

    for slc in selected.values(): #Pega as listas de pares de cadeias
        chain_pairs=slc

    for pairs in chain_pairs:

        if pairs in invalid_chains:  #ignora pares invalidos determinados pelo vtr
            continue

        counter_spike=0
        for pair in pairs:
            if(pair in resume['sars-cov-homology']["spike-chains"]):
                counter_spike=counter_spike + 1
        if(counter_spike==2):
            continue
        else:
            
            dic_contacts= reading_archive(direct,direct_name,'rotate',pairs,resume["sars-cov-homology"]["spike-chains"],mutation)
            dr=direct+'/vtr/map/'
            if(create_dr==False):
                os.mkdir(direct+'/vtr/map')
                create_dr=True
            for it in range(len(maps_geral)):
                graph(dic_contacts,maps_geral[it],dr,graph_name[it],pairs)
                
