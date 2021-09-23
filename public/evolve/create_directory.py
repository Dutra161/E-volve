import os
import sys
from datetime import date,datetime
import traceback

def compSpyke(nProject,pdb,nPdb):
    dates=date.today()
    dth=datetime.now()
    
    dt=str(dates.day)+str(dates.month)+str(dates.year)[-2:]+str(dth.hour)+str(dth.minute)+str(dth.second)
    #print(dt)
    
    
    os.mkdir('./public/projects/'+nProject+'_'+dt)
    os.mkdir('./public/projects/'+nProject+'_'+dt+'/pdbs')
    os.rename(pdb,'./public/projects/'+nProject+'_'+dt+'/pdbs/'+nPdb+'.pdb')
    
    print(nProject+'_'+dt)



try:
    compSpyke(sys.argv[1],sys.argv[2],sys.argv[3])
except:
    with open(sys.argv[1]+'/log','w') as wrt:
        wrt.write(traceback.format_exc())

