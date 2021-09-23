# -*- coding: utf-8 -*-
"""
Created on Mon Feb 22 11:11:12 2021

@author: gabri
"""

def pdbIsolation(archive_pdb,output,isolation=()):
    records=[]
    list_isolation=[]
    archive= open(archive_pdb,'r')
    
    archive_pdb=archive_pdb.replace('.pdb','')
    records=archive.readlines()
    
    archive.close()
    for record in records:
        if(isolation):
            if(-1!=record.find('ENDMDL')):
                break
                
            if(record[0:4]=="ATOM"):
                if(record[21:22] in isolation):
                    list_isolation.append(record)
                    
            if(record[0:3]=='TER'):
                if(record[21:22] in isolation):
                    list_isolation.append(record)
        else:
            print('no selected chain')
            break
        
    if(isolation):      
        text= open(output,'w')       
        text.writelines(list_isolation)
        text.write('END\n')
        text.close()
        
