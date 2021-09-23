import os
import json
def mapping(dir):
    path="./"+dir+"/"
    
    
    try_division=["yes","no"]
    type=[
                    "Hydrophobic",
                    "Attractive",
                    "Repulsive",
                    "Hydrogen Bonds",
                    "Disulphide Bonds",
                    "Aromatic Stacking"]
    type_resume={
        "Hydrophobic":"H",
        "Attractive":"A",
        "Repulsive":"R",
        "Hydrogen Bonds":"B",
        "Disulphide Bonds":"D",
        "Aromatic Stacking":"S"
    }
    name_map=path[8:]
    position_bar=name_map.find("/")
    name_map=name_map[:position_bar]
    directory=os.listdir('public/update/'+path)
    print(directory)
    for division in try_division:
        print(division)
        rotate_ct=[]
        dic_contacts={}
        name_arch=[]

        dic_types={
            "Hydrophobic":{},
            "Attractive":{},
            "Repulsive":{},
            "Hydrogen Bonds":{},
            "Disulphide Bonds":{},
            "Aromatic Stacking":{}
        }
        for dic in directory:
            dic_name='public/update/'+path+dic+"/vtr/Results/Contacts/"
            directory_arch=os.listdir(dic_name)
            for i in directory_arch:
                if("rotate" in i):
                    if("Contacts" in i):
                        rotate_ct.append(i)
                        name_arch.append(i[13:17])

        if('AB-Brazil' in path):
            with open("public/update/spikes.log","r") as f:
                map_geral= json.load(f)

        for i in rotate_ct:
            
            for dic in directory:
                if os.path.isfile("public/update/"+path+dic+"/vtr/Results/Contacts/"+i):
                    
                    archive= open("public/update/"+path+dic+"/vtr/Results/Contacts/"+i,"r")


                    lines=archive.read()
                    lines=lines.split('\n')
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

                                formatting_spk.append(arch[it][hyphen+1:vs])
                                formatting_or.append(arch[it][vs+2:])
                        else:
                                formatting_cts.append(arch[it])
                    
                    
                    for j in range(len(formatting_spk)):
                        line_spk=formatting_spk[j].split(' ')
                        while('' in line_spk):
                            line_spk.remove('')
                        if(line_spk==[]):
                            continue
                        line_or=formatting_or[j].split(' ')
                        while('' in line_or):
                            line_or.remove('')
                        if(line_or==[]):
                            continue
                        if('AB-Brazil' in path):
                            pdb=map_geral[i[13:17]]
                            if(line_spk[0] in pdb[0]):
                                spk=line_spk[1]
                                number1=line_spk[2]
                                
                                contact=line_or[1]
                                number2=line_or[2]
                                name=contact+' '+number2+':'+spk+' '+number1
                            else:
                                spk=line_spk[1]
                                number1=line_spk[2]
                                
                                contact=line_or[1]
                                number2=line_or[2]
                                name=spk+' '+number1+':'+contact+' '+number2
                        else:
                            spk=line_spk[1]
                            number1=line_spk[2]
                            
                            contact=line_or[1]
                            number2=line_or[2]
                            name=spk+' '+number1+':'+contact+' '+number2


                        if(division=='no'):
                            if(name in dic_contacts.keys()):
                                    dic_contacts[name]= dic_contacts[name] + 1
                            else:
                                    dic_contacts[name]=1
                        else:
                            list_contacts=[]
                            list_cts=[]
                            separator= formatting_cts[j].find('-')
                            types_contacts=formatting_cts[j][separator+1:len(formatting_cts[j])-2]
                            
                            list_contacts=types_contacts.split(',')
                            for lts in list_contacts:
                                list_cts.append(lts[1:])
                            list_contacts=list_cts
                            
                            for tp in type:
                                for k in list_contacts:
                                    if(tp==k):
                                        if(name in dic_types[tp].keys()):
                                            dic_types[tp][name]= dic_types[tp][name]+1
                                        else:
                                            dic_types[tp][name]=1
                                        
                    archive.close()
                    break
        if(division=='no'):
            keys=[]
            values=[]
            arch_write=open("public/update/Contacts_map-"+name_map+"_G.json","w")
            arch_write.write("{\n")
            for key,value in dic_contacts.items():
                keys.append(key)
                values.append(value)
            tam=len(values)
            for it in range(len(keys)):
                if(it==tam-1):
                    arch_write.write('\"'+keys[it]+'\":'+str(values[it])+"\n")
                else:
                    arch_write.write('\"'+keys[it]+'\":'+str(values[it])+",\n")
            arch_write.write("}")
            arch_write.close()
        else:
            for nm,dic in dic_types.items():
                if(dic=={}):
                    continue
                keys=[]
                values=[]
                arch_write=open("public/update/Contacts_map-"+name_map+"_"+type_resume[nm]+".json","w")
                arch_write.write("{\n")
                for key,value in dic.items():
                    keys.append(key)
                    values.append(value)
                tam=len(values)
                for it in range(len(keys)):
                    if(it==tam-1):
                        arch_write.write('\"'+keys[it]+'\":'+str(values[it])+"\n")
                    else:
                        arch_write.write('\"'+keys[it]+'\":'+str(values[it])+",\n")
                arch_write.write("}")
                arch_write.close()
