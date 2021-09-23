import sys
sys.path.append('/home/liase/.local/lib/python3.6/site-packages')
sys.path.append('/usr/local/lib')
import plotly.graph_objects as go

def graph(data_chain,data_geral,dr,name_arch,pairs):
    chain_list=[]
    for it in data_geral:
        if(it in data_chain):
            point=it.find(':')
            chain_list.append(it[point+1:])

    chainSpike=[]
    chainAntibody=[]
    
    dat=[]
    date=[]
    number1=[]
    number2=[]
    
    for name in data_geral:
        point=name.find(':')
        chainSpike.append(name[point+1:])
        chainAntibody.append(name[:point])
    for i in chainSpike:
        space=i.find(' ')
        number1.append(int(i[space+1:]))
    for i in chainAntibody:
        space=i.find(' ')
        number2.append(int(i[space+1:]))
    number1=sorted(set(number1))
    number2=sorted(set(number2))
    lst1=[]
    lst2=[]
    chainSpike=set(chainSpike)
    chainAntibody=set(chainAntibody)
    for i in number1:
        for j in chainSpike:
            space=j.find(' ')
            if(int(j[space+1:])==i):
                lst1.append(j)
    chainSpike=lst1
    for i in number2:
        for j in chainAntibody:
            if(int(j[space+1:])==i):
                lst2.append(j)
    chainAntibody=lst2
    for i in range(len(chainAntibody)):
            for j in range(len(chainSpike)):
                name=chainAntibody[i]+':'+chainSpike[j]
                if(name in data_geral):
                    date.append(data_geral[name])
                else:
                    date.append(None)
            
            dat.append(date[:])
            date.clear()
    if("AB-Brazil"in name_arch):
        layout = go.Layout(
            yaxis={'title':'Antibody'},
            xaxis={'title':''})
    else:
        layout = go.Layout(
            yaxis={'title':'ACE2'},
            xaxis={'title':''})
    fig = go.Figure(data=go.Heatmap(
                        z=dat,
                        x=chainSpike,
                        y=chainAntibody,
                        colorscale=["red","blue"]),
                        layout=layout)              
    for nm in chain_list:
        fig.add_shape(type="line",
            x0=nm,
            y0=chainAntibody[-1],
            x1=nm,
            y1=chainAntibody[0],
            line=dict(color="#481d24",width=2)
        )
    fig.write_html(dr+name_arch+"_"+pairs[0]+pairs[1]+'.html')
    # fig.show()
    