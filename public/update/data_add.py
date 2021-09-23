import shutil
import os
import glob

def data_att(dir_name):
    list_name=["SpikeABAfrica","SpikeABBrazil","SpikeABIndia","SpikeABUK"]
    directory_name=["Data/","Graphs/","Plots/","Logs/","Results/"]
    path="./public/update/"+dir_name+"/"
    directory= os.listdir(path)
    for dir in directory:
        list_arch=[]
        name_Data=glob.glob(path+dir+"/vtr/Data/*")
        for i in name_Data:
            name_arch=i.split("/")
            list_arch.append(name_arch[-1])
        name_Data=list_arch
        list_arch=[]
        for nm in name_Data:
            for lst in list_name:
                if(lst in nm):
                    if("align" in nm):
                        name_align=glob.glob(path+dir+"/vtr/Data/"+nm+"/*")
                        for i in name_align:
                            name_arch=i.split("/")
                            list_arch.append(name_arch[-1])
                        name_align=list_arch
                        list_arch=[]
                        for alig in name_align:
                            if(lst in alig):
                                new_nm=alig.replace(lst,"")
                                
                                old_file = os.path.join(path+dir+"/vtr/Data/"+nm+"/",alig)
                                new_file = os.path.join(path+dir+"/vtr/Data/"+nm+"/",new_nm)
                                os.rename(old_file, new_file)

                    new_nm=nm.replace(lst,"")
                    
                    old_file = os.path.join(path+dir+"/vtr/Data/",nm)
                    new_file = os.path.join(path+dir+"/vtr/Data/",new_nm)
                    os.rename(old_file, new_file)
                    break
        name_Graphs= glob.glob(path+dir+"/vtr/Graphs/*")
        for i in name_Graphs:
            name_arch=i.split("/")
            list_arch.append(name_arch[-1])
        name_Graphs=list_arch
        list_arch=[]
        for nm in name_Graphs:
            for lst in list_name:
                if(lst in nm):
                    name_g=glob.glob(path+dir+"/vtr/Graphs/"+nm+"/*")
                    for i in name_g:
                        name_arch=i.split("/")
                        list_arch.append(name_arch[-1])
                    name_g=list_arch
                    list_arch=[]
                    for grap in name_g:
                        if(lst in grap):
                            new_nm=grap.replace(lst,"")
                            old_file = os.path.join(path+dir+"/vtr/Graphs/"+nm+"/",grap)
                            new_file = os.path.join(path+dir+"/vtr/Graphs/"+nm+"/",new_nm)
                            os.rename(old_file, new_file)

                    new_nm=nm.replace(lst,"")
                    old_file = os.path.join(path+dir+"/vtr/Graphs/",nm)
                    new_file = os.path.join(path+dir+"/vtr/Graphs/",new_nm)
                    os.rename(old_file, new_file)
                    break
        name_Logs=glob.glob(path+dir+"/vtr/Logs/*")
        for i in name_Logs:
            name_arch=i.split("/")
            list_arch.append(name_arch[-1])
        name_Logs=list_arch
        list_arch=[]
        for nm in name_Logs:
            for lst in list_name:
                if(lst in nm):
                    new_nm=nm.replace(lst,"")
                    old_file = os.path.join(path+dir+"/vtr/Logs/",nm)
                    new_file = os.path.join(path+dir+"/vtr/Logs/",new_nm)
                    os.rename(old_file, new_file)
                    break
        name_Plots= glob.glob(path+dir+"/vtr/Plots/*")
        for i in name_Plots:
            name_arch=i.split("/")
            list_arch.append(name_arch[-1])
        name_Plots=list_arch
        list_arch=[]
        for nm in name_Plots:
            for lst in list_name:
                if(lst in nm):
                    name_p=glob.glob(path+dir+"/vtr/Plots/"+nm+"/*")
                    for i in name_p:
                        name_arch=i.split("/")
                        list_arch.append(name_arch[-1])
                    name_p=list_arch
                    list_arch=[]
                    for plot in name_p:
                        if(lst in plot):
                            new_nm=plot.replace(lst,"")
                            old_file = os.path.join(path+dir+"/vtr/Plots/"+nm+"/",plot)
                            new_file = os.path.join(path+dir+"/vtr/Plots/"+nm+"/",new_nm)
                            os.rename(old_file, new_file)

                    new_nm=nm.replace(lst,"")
                    old_file = os.path.join(path+dir+"/vtr/Plots/",nm)
                    new_file = os.path.join(path+dir+"/vtr/Plots/",new_nm)
                    os.rename(old_file, new_file)
                    break
        
        name_Results= glob.glob(path+dir+"/vtr/Results/*")
        for i in name_Results:
            name_arch=i.split("/")
            list_arch.append(name_arch[-1])
        name_Results=list_arch
        list_arch=[]
        for nm in name_Results:
            name_r=glob.glob(path+dir+"/vtr/Results/"+nm+"/*")
            for i in name_r:
                name_arch=i.split("/")
                list_arch.append(name_arch[-1])
            name_r=list_arch
            list_arch=[]
            for lst in list_name:
                for result in name_r:
                    if(lst in result):
                        new_nm=result.replace(lst,"")
                        old_file = os.path.join(path+dir+"/vtr/Results/"+nm+"/",result)
                        new_file = os.path.join(path+dir+"/vtr/Results/"+nm+"/",new_nm)
                       
                        os.rename(old_file, new_file)
                


    for dir in directory:    
        for direct in directory_name:
            if(direct != "Results/"):
                name_Direct=os.listdir(path+dir+"/vtr/"+direct)
                vtr_Direct="./public/data/"+dir_name+'/'+direct
                for name in name_Direct:
                
                    shutil.move(path+dir+"/vtr/"+direct+name,vtr_Direct+name) 
            else:
                name_Direct=os.listdir(path+dir+"/vtr/Results/")
                vtr_Direct="./public/data/"+dir_name+"/Results/"
                for name in name_Direct:
                    name_Direct_results=os.listdir(path+dir+"/vtr/Results/"+name)
                    for results in name_Direct_results:
                        shutil.move(path+dir+"/vtr/Results/"+name+"/"+results,vtr_Direct+name+"/"+results) 