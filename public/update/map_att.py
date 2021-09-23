import json
import glob
import os

def heat_att():
    arch=os.listdir('public/update')
    print(arch)
    nameJson=[]
    for i in arch:
        if("Contacts" in i ):
            nameJson.append(i)
    print(nameJson)
    for nmj in nameJson:
        with open("public/update/"+nmj,"r") as f:
                map_add=json.load(f)
        with open("public/data1/"+nmj,"r") as f:
                map_origin=json.load(f)
        for name_add in map_add:
            if name_add in map_origin:
                map_origin[name_add] = map_origin[name_add] + map_add[name_add]
            else:
                map_origin[name_add] = map_add[name_add]
        with open("public/data1/"+nmj,"w") as f:
            json.dump(map_origin ,f)