# coding: utf-8
import vtr.OSfunct as OSfunct
import os

def colorscale(VMD, cutoff, out):
    #return a rgb code color between blue and red, based on cutoff and VMD, bigger the VMD, bluest the color
    Redest = [255,0,0]
    Bluest = [0,0,255]
    R = (((-255)/cutoff)*VMD)+255
    G = 0
    B = (((255)/cutoff)*VMD)
    if out == 'l':
        color = [int(R),int(G),int(B)]
    elif out == 't':
        color = (float(B)/255,float(G),float(R)/255)
    return(color)

def header(path,rtt_path,stc_path,folder,target):
    #create a visualization of the protein superposition, write a html file
    pmlname = path+"/Data/"+folder+"/header.js"
    pml = open(pmlname,'w')
    text = '''
    function callheader(colorscheme){
    var p1 = "'''+target[target.find('public'):]+'''/Data/''' + rtt_path[rtt_path.rfind("/")+1:-11] + "x" + stc_path[stc_path.rfind("/")+1:-4] + "_align/" + rtt_path[rtt_path.rfind("/")+1:] + '''";
    var p2 = "'''+target[target.find('public'):]+'''/Data/'''+stc_path[stc_path.rfind("/")+1:] + '''";

    header(p1,p2,colorscheme);
    }'''
    pml.write(text)

    
def multi_ploter(path,rtt_path, stc_path, matches, _type, target):
    #create a visualization of a match in 3Dmol, write a html file
    folder = OSfunct.create_dir(path+"/Data",rtt_path,stc_path, _type)
    #reúne os tipos de contato existentes no casamento
    for i in matches:
        contact = ""
        for string in i.rtt_contact.contacts:
            contact += string + " "
        contact += "_"
        for string in i.stc_contact.contacts:
            contact += string + " "
        #escreve o nome do arquivo identificado por proteinas, nome e número dos resíduos participantes, tipo e id dos átomos participantes, tipos de contato envolvidos e VMD do casamento
        pmlname = (path+"/Data/"+folder+"/"+i.rtt_contact.chain1.id+"_"+i.rtt_contact.residue1.id+str(i.rtt_contact.residue1.parameter)+"_"+i.rtt_contact.atom1.type.strip()+"_"+str(i.rtt_contact.atom1.id)+"_"+i.rtt_contact.chain2.id+"_"+i.rtt_contact.residue2.id+str(i.rtt_contact.residue2.parameter)+"_"+i.rtt_contact.atom2.type.strip()+"_"+str(i.rtt_contact.atom2.id)+"_"+i.stc_contact.chain1.id+"_"+i.stc_contact.residue1.id+str(i.stc_contact.residue1.parameter)+"_"+i.stc_contact.atom1.type.strip()+"_"+str(i.stc_contact.atom1.id)+"_"+i.stc_contact.chain2.id+"_"+i.stc_contact.residue2.id+str(i.stc_contact.residue2.parameter)+"_"+i.stc_contact.atom2.type.strip()+"_"+str(i.stc_contact.atom2.id)+"_"+str(round(i.VMD(),2))+"_"+contact+"_.js")
        pml = open(pmlname,'w', encoding='utf-8')
        #escreve o arquivo html
        stack = '''
        function callplot'''+((i.rtt_contact.chain1.id+"_"+i.rtt_contact.residue1.id+str(i.rtt_contact.residue1.parameter)+"_"+i.rtt_contact.atom1.type.strip()+"_"+str(i.rtt_contact.atom1.id)+"_"+i.rtt_contact.chain2.id+"_"+i.rtt_contact.residue2.id+str(i.rtt_contact.residue2.parameter)+"_"+i.rtt_contact.atom2.type.strip()+"_"+str(i.rtt_contact.atom2.id)+"_"+i.stc_contact.chain1.id+"_"+i.stc_contact.residue1.id+str(i.stc_contact.residue1.parameter)+"_"+i.stc_contact.atom1.type.strip()+"_"+str(i.stc_contact.atom1.id)+"_"+i.stc_contact.chain2.id+"_"+i.stc_contact.residue2.id+str(i.stc_contact.residue2.parameter)+"_"+i.stc_contact.atom2.type.strip()+"_"+str(i.stc_contact.atom2.id)+"_"+str(round(i.VMD(),2))+"_"+contact).replace(" ","")).replace(".","_")+'''(){
        '''
        if i.rtt_contact.centroid1:
            stack += '''var rtt_centroid1 = new Centroid('''+str(i.rtt_contact.centroid1.x)+''','''+str(i.rtt_contact.centroid1.y)+''','''+str(i.rtt_contact.centroid1.z)+''');
        '''
        else:
            stack += '''var rtt_centroid1 = false;
        '''
        if i.rtt_contact.centroid2:
            stack += '''var rtt_centroid2 = new Centroid('''+str(i.rtt_contact.centroid2.x)+''','''+str(i.rtt_contact.centroid2.y)+''','''+str(i.rtt_contact.centroid2.z)+''');
        '''
        else:
            stack += '''var rtt_centroid2 = false;
        '''
        if i.stc_contact.centroid1:
            stack += '''var stc_centroid1 = new Centroid('''+str(i.stc_contact.centroid1.x)+''','''+str(i.stc_contact.centroid1.y)+''','''+str(i.stc_contact.centroid1.z)+''');
        '''
        else:
            stack += '''var stc_centroid1 = false;
        '''
        if i.stc_contact.centroid2:
            stack += '''var stc_centroid2 = new Centroid('''+str(i.stc_contact.centroid2.x)+''','''+str(i.stc_contact.centroid2.y)+''','''+str(i.stc_contact.centroid2.z)+''');
        '''
        else:
            stack += '''var stc_centroid2 = false;
        '''
        stack += '''
        var colorsscheme = window.colorscheme;
        var rtt_contact = new Contact(\''''+target[target.find('public'):]+'''/Data/'''+rtt_path[rtt_path.rfind("/")+1:rtt_path.rfind("_")]+"x"+stc_path[stc_path.rfind("/")+1:-4]+"_align/"+rtt_path[rtt_path.rfind("/")+1:]+"','"+i.rtt_contact.chain1.id+"','"+i.rtt_contact.chain2.id+"','"+str(i.rtt_contact.residue1.parameter)+"','"+i.rtt_contact.residue1.id+"','"+str(i.rtt_contact.residue2.parameter)+"','"+i.rtt_contact.residue2.id+"','"+i.rtt_contact.atom1.type.strip()+"','"+i.rtt_contact.atom2.type.strip()+"','"+str(i.rtt_contact.atom1.id)+"','"+str(i.rtt_contact.atom2.id)  
        stack += '''\',rtt_centroid1,rtt_centroid2);
        var stc_contact = new Contact(\''''+target[target.find('public'):]+'''/Data/'''+stc_path[stc_path.rfind("/")+1:]+"','"+i.stc_contact.chain1.id+"','"+i.stc_contact.chain2.id+"','"+str(i.stc_contact.residue1.parameter)+"','"+i.stc_contact.residue1.id+"','"+str(i.stc_contact.residue2.parameter)+"','"+i.stc_contact.residue2.id+"','"+i.stc_contact.atom1.type.strip()+"','"+i.stc_contact.atom2.type.strip()+"','"+str(i.stc_contact.atom1.id)+"','"+str(i.stc_contact.atom2.id)
        stack += '''\',stc_centroid1,stc_centroid2);
        plot(rtt_contact,stc_contact, colorscheme);
        legend("D = '''+str(round(i.rtt_contact.distance,2))+''' \u212b", "D = '''+str(round(i.stc_contact.distance,2))+''' \u212b", "AVD = '''+str(round(i.VMD(),2))+''' \u212b", "'''+rtt_path[rtt_path.rfind("/")+1:rtt_path.rfind("_")]+i.rtt_contact.chain1.id+'-'+i.rtt_contact.chain2.id+'''", "'''+stc_path[stc_path.rfind("/")+1:-4]+i.stc_contact.chain1.id+'-'+i.stc_contact.chain2.id+'''",colorsscheme);
        }'''
        pml.write(stack)
        pml.close()
    return(folder)
