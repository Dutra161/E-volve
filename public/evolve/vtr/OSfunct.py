#Contain the Operational System's functions

import os
import time
from datetime import datetime
import shutil
from zipfile import ZipFile
from os.path import basename
from subprocess import run

def mkdir(path):
    if not os.path.exists(path+"/Results"):
        os.mkdir(path+"/Results")

    if not os.path.exists(path+"/Results/Contacts"):
        os.mkdir(path+"/Results/Contacts")

    if not os.path.exists(path+"/Results/Matches"):
        os.mkdir(path+"/Results/Matches")

    if not os.path.exists(path+"/Results/Dismatches"):
        os.mkdir(path+"/Results/Dismatches")

    if not os.path.exists(path+"/Plots"):
        os.mkdir(path+"/Plots")
        
    if not os.path.exists(path+"/Logs"):
        os.mkdir(path+"/Logs")

    if not os.path.exists(path+"/Graphs"):
        os.mkdir(path+"/Graphs")

def TMAlign(root,protein1,protein2):
    #Delete existing alignments and create new
    if (not(os.path.exists("public/evolve/vtr/tmalign"))):
        run("g++ public/evolve/vtr/TMAlign.cpp -o public/evolve/vtr/tmalign")
        print("TMAlign compilado!")

    
    path = protein1[protein1.rfind("/")+1:-4] + "x" + protein2[protein2.rfind("/")+1:-4] + "_align"

    if os.path.exists(root+"/Data/" + path):
        shutil.rmtree(root+"/Data/" + path)
    os.mkdir(root+"/Data/" + path)
    callalign = "public/evolve/vtr/tmalign " + protein1 + " " + protein2 + " -o " + root+"/Data/" + path + "/" + protein1[protein1.rfind("/")+1:-4]
    print(callalign)
    run(callalign, shell=True)
    return(path)

def create_dir(location,rtt_path,stc_path,_type):
    #create a directory in location
    folder = rtt_path[rtt_path.rfind("/")+1:rtt_path.rfind("_")] + "_x_" + stc_path[stc_path.rfind("/")+1:-4] + _type
    if (os.path.exists(location + "/" + folder)):
        shutil.rmtree(location + "/" + folder)
    os.mkdir(location + "/" + folder)
    return(folder)

    
def gift(target,protein1,protein2,folder):

    start = time.time()
    #compact Pymol files
    
    shutil.copyfile(protein1, target+"/Plots/"+folder+protein1[protein1.rfind('/'):])
    shutil.copyfile(protein2, target+"/Plots/"+folder+protein2[protein2.rfind('/'):])

    if os.path.exists(target+'/Plots/'+folder+'/gift.zip'):
        os.remove(target+'/Plots/'+folder+'/gift.zip')

    os.system('zip -r '+target+'/Plots/'+folder+'/gift.zip '+target+'/Plots/'+folder+'')
    #os.rename(target+'/Plots/'+folder+'gift.zip',target+'/Plots/'+folder+'/gift.zip')

    print(time.time() - start)