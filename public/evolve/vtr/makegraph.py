#Make a java script graph file
_pass = {
    'ALA':'A',
    'ASX':'B',
    'CYS':'C',
    'ASP':'D',
    'GLU':'E',
    'PHE':'F',
    'GLY':'G',
    'HIS':'H',
    'ILE':'I',
    'LYS':'K',
    'LEU':'L',
    'MET':'M',
    'ASN':'N',
    'PRO':'P',
    'GLN':'Q',
    'ARG':'R',
    'SER':'S',
    'THR':'T',
    'VAL':'V',
    'TRP':'W',
    'TYR':'Y',
    'GLX':'Z'}

import vtr.OSfunct as OSfunct

def makegraph(gtype,name,x,y,label,_max,outname,title,y2=[],label2=""):
    text = '''
var myChart'''+gtype+''' = 0;
function draw'''+name+'''(){
    if (window.myChart'''+gtype+''' != 0){
        window.myChart'''+gtype+'''.destroy();
    }
    var ctx = document.getElementById("mychart'''+gtype+'''");
    if (ctx){
        ctx = ctx.getContext('2d');
        window.myChart'''+gtype+''' = new Chart(ctx, {
            type:\''''
    stack = text + gtype + "',"
    text = '''
        data: {
                labels: ['''
    stack += text
    for i in x:
        stack += '"'+str(i)+'",'
    stack = stack[0:-1]+'''],
                datasets: [{
                    label: "'''+label+'''",
                    data: ['''
    for i in y:
        stack += str(round(i,2))+","
    stack = stack[0:-1]+'''],
                    backgroundColor: ['''
    for i in x:
        stack += '''                'rgba(249, 249, 0, 0.2)','''
    stack+='''
                    ],
                    borderColor: ['''
    for i in x:
        stack += '''                'rgba(180, 180, 0, 1)','''
    stack += '''
                    ],
                    borderWidth: 1
                }'''
    if len(y2) != 0:
        stack += ''',{
        label: \"'''+label2+'''\",
        data: ['''
        for i in y2:
            stack += str(round(i,2))+","
        stack = stack[0:-1]+'''],
            backgroundColor: ['''
        for i in x:
            stack += '''                'rgba(110, 0, 110, 0.2)','''
        stack += '''
            ],
            borderColor: ['''
        for i in x:
            stack += '''                'rgba(110, 0, 110, 1)','''
        stack+='''
            ],
            borderWidth: 1
        }'''
    stack+=''']
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [{
                        ticks: {
                            max: '''+str(_max)+''',
                            beginAtZero: true
                        }
                    }]
                },
                title: {
                    display: true,
                    position: 'top',
                    text:["'''+title+'''"],
                    fontSize: 14
                },
            }
        });
    }
}'''
    data = open(outname,'w')
    data.write(stack)
    data.close()


def makescatter(contacts,dismatches,conservations,title,name,outname):
    colors = []
    border = []
    text = '''
var myChart'''+name.replace('-','_')+''' = 0;
function draw'''+name.replace('-','_')+'''all(){
var ctx = document.getElementById(\''''+name+'''\').getContext('2d');
if (window.myChart'''+name.replace('-','_')+''' != 0){
    window.myChart'''+name.replace('-','_')+'''.destroy();
}
window.myChart'''+name.replace('-','_')+''' = new Chart(ctx, {
    type: \'scatter\',
    data: {
        datasets: [{
            pointStyle:'rect',
            label: 'Disulphide Bonds',
            data: ['''
    #set Disulphide Bonds
    colors = []
    border = []
    for contact in contacts:
        for typ in contact.contacts:
            if typ == 'Disulphide Bonds':
                colors.append("'rgba(250, 243, 87, 0.5)',")
                border.append("'rgba(250, 243, 87, 1)',")
                text += '''{x: ''' + str(contact.residue1.parameter)
                text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                '''
    text += '''],
            backgroundColor: ['rgba(250, 243, 87, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(250, 243, 87, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Attractive',
            data: ['''
    #set Attractive
    colors = []
    border = []
    for contact in contacts:
        for typ in contact.contacts:
            if typ == 'Attractive':
                colors.append("'rgba(240, 98, 145, 0.5)',")
                border.append("'rgba(240, 98, 145, 1)',")
                text += '''{x: ''' + str(contact.residue1.parameter)
                text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                '''
    text += '''],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(240, 98, 145, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: ['''
    #set Repulsive
    colors = []
    border = []
    for contact in contacts:
        for typ in contact.contacts:
            if typ == 'Repulsive':
                colors.append("'rgba(0, 224, 255, 0.5)',")
                border.append("'rgba(0, 224, 255, 1)',")
                text += '''{x: ''' + str(contact.residue1.parameter)
                text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                '''
    text += '''],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(0, 224, 255, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: ['''
    #set Hydrogen Bonds
    colors = []
    border = []
    for contact in contacts:
        for typ in contact.contacts:
            if typ == 'Hydrogen Bonds':
                colors.append("'rgba(109, 78, 217, 0.5)',")
                border.append("'rgba(109, 78, 217, 1)',")
                text += '''{x: ''' + str(contact.residue1.parameter)
                text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                '''
    text += '''],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(109, 78, 217, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: ['''
    #set Aromatic Stacking
    colors = []
    border = []
    for contact in contacts:
        for typ in contact.contacts:
            if typ == 'Aromatic Stacking':
                colors.append("'rgba(123, 250, 121, 0.5)',")
                border.append("'rgba(123, 250, 121, 1)',")
                text += '''{x: ''' + str(contact.residue1.parameter)
                text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                '''
    text += '''],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(123, 250, 121, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: ['''
    #set Hydrophobic
    for contact in contacts:
        for typ in contact.contacts:
            if typ == 'Hydrophobic':
                colors.append("'rgba(217, 148, 76, 0.5)',")
                border.append("'rgba(217, 148, 76, 1)',")
                text += '''{x: ''' + str(contact.residue1.parameter)
                text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                '''
    text += '''],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(217, 148, 76, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["'''+title+'''"],
            fontSize: 14
    	},
        scales: {
            yAxes: [{
                gridlines: {
                    color : 'rgba(200, 200, 200, 0.01)',
                },
                ticks: {
                    max: '''+str(contacts[0].chain2.ressize())+''',
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                gridlines: {
                    color : 'rgba(200, 200, 200, 0.01)',
                },
                ticks: {
                    max: '''+str(contacts[0].chain1.ressize())+''',
                    beginAtZero: true,
                }
            }]
        },
        tooltips: {
            callbacks: {
                // Use the footer callback to display the sum of the items showing in the tooltip
                label: function(tooltipItem, data) {
                    var labelx = tooltipItem.xLabel;
                    var labely = tooltipItem.yLabel;
                    var label = '';
                    
                    switch (labelx){'''
    for contact in contacts:
        text += '''
                    case ''' + str(contact.residue1.parameter) + ''':
                        label += "''' + contact.chain1.id + ''' ''' + str(contact.residue1.parameter) + _pass[contact.residue1.id] + ''' - ";
                        break;'''
    text += '''}
                switch (labely){'''
    for contact in contacts:
        text+= '''
                    case ''' + str(contact.residue2.parameter) + ''':
                        label += "''' + contact.chain2.id + ''' ''' + str(contact.residue2.parameter) + _pass[contact.residue2.id] + '''\\n";
                        break;'''
    text+= '''  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});
}
function draw'''+name.replace('-','_')+'''matched(){
var ctx = document.getElementById(\''''+name+'''\').getContext('2d');
if (window.myChart'''+name.replace('-','_')+''' != 0){
    window.myChart'''+name.replace('-','_')+'''.destroy();
}
window.myChart'''+name.replace('-','_')+''' = new Chart(ctx, {
    type: \'scatter\',
    data: {
        datasets: [{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: ['''
    #set Hydrophobic
    colors = []
    border = []
    for contact in contacts:
        if contact not in dismatches:
            for typ in contact.contacts:
                if typ == 'Hydrophobic':
                    colors.append("'rgba(217, 148, 76, 0.5)',")
                    border.append("'rgba(217, 148, 76, 1)',")
                    text += '''{x: ''' + str(contact.residue1.parameter)
                    text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                    '''
    text += '''],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(217, 148, 76, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Attractive',
            data: ['''
    #set Attractive
    colors = []
    border = []
    for contact in contacts:
        if contact not in dismatches:
            for typ in contact.contacts:
                if typ == 'Attractive':
                    colors.append("'rgba(240, 98, 145, 0.5)',")
                    border.append("'rgba(240, 98, 145, 1)',")
                    text += '''{x: ''' + str(contact.residue1.parameter)
                    text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                    '''
    text += '''],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(240, 98, 145, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: ['''
    #set Repulsive
    colors = []
    border = []
    for contact in contacts:
        if contact not in dismatches:
           for typ in contact.contacts:
                if typ == 'Repulsive':
                    colors.append("'rgba(0, 224, 255, 0.5)',")
                    border.append("'rgba(0, 224, 255, 1)',")
                    text += '''{x: ''' + str(contact.residue1.parameter)
                    text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                    '''
    text += '''],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(0, 224, 255, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: ['''
    #set Hydrogen Bonds
    colors = []
    border = []
    for contact in contacts:
        if contact not in dismatches:
            for typ in contact.contacts:
                if typ == 'Hydrogen Bonds':
                    colors.append("'rgba(109, 78, 217, 0.5)',")
                    border.append("'rgba(109, 78, 217, 1)',")
                    text += '''{x: ''' + str(contact.residue1.parameter)
                    text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                    '''
    text += '''],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(109, 78, 217, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: ['''
    #set Aromatic Stacking
    colors = []
    border = []
    for contact in contacts:
        if contact not in dismatches:
            for typ in contact.contacts:
                if typ == 'Aromatic Stacking':
                    colors.append("'rgba(123, 250, 121, 0.5)',")
                    border.append("'rgba(123, 250, 121, 1)',")
                    text += '''{x: ''' + str(contact.residue1.parameter)
                    text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                    '''
    text += '''],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(123, 250, 121, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Disulphide Bonds',
            data: ['''
    #set Disulphide Bonds
    colors = []
    border = []
    for contact in contacts:
        if contact not in dismatches:
            for typ in contact.contacts:
                if typ == 'Disulphide Bonds':
                    colors.append("'rgba(250, 243, 87, 0.5)',")
                    border.append("'rgba(250, 243, 87, 1)',")
                    text += '''{x: ''' + str(contact.residue1.parameter)
                    text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                    '''
    text += '''],
            backgroundColor: ['rgba(250, 243, 87, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(250, 243, 87, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        animation: {
            duration : 0,
        },
        title: {
            display: true,
            position: 'top',
            text:["'''+title+'''"],
            fontSize: 14
    	},
        scales: {
            yAxes: [{
                gridlines: {
                    color : 'rgba(200, 200, 200, 0.01)',
                },
                ticks: {
                    max: '''+str(contacts[0].chain2.ressize())+''',
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                gridlines: {
                    color : 'rgba(200, 200, 200, 0.01)',
                },
                ticks: {
                    max: '''+str(contacts[0].chain1.ressize())+''',
                    beginAtZero: true,
                }
            }]
        },
        tooltips: {
            callbacks: {
                // Use the footer callback to display the sum of the items showing in the tooltip
                label: function(tooltipItem, data) {
                    var labelx = tooltipItem.xLabel;
                    var labely = tooltipItem.yLabel;
                    var label = '';
                    
                    switch (labelx){'''
    for contact in contacts:
        if contact not in dismatches:
            text += '''
                        case ''' + str(contact.residue1.parameter) + ''':
                            label += "''' + contact.chain1.id + ''' ''' + str(contact.residue1.parameter) + _pass[contact.residue1.id] + ''' - ";
                            break;'''
    text += '''}
                switch (labely){'''
    for contact in contacts:
        if contact not in dismatches:
            text+= '''
                        case ''' + str(contact.residue2.parameter) + ''':
                            label += "''' + contact.chain2.id + ''' ''' + str(contact.residue2.parameter) + _pass[contact.residue2.id] + '''\\n";
                            break;'''
    text+= '''  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});
}
function draw'''+name.replace('-','_')+'''nocon(){
var ctx = document.getElementById(\''''+name+'''\').getContext('2d');
if (window.myChart'''+name.replace('-','_')+''' != 0){
    window.myChart'''+name.replace('-','_')+'''.destroy();
}
window.myChart'''+name.replace('-','_')+''' = new Chart(ctx, {
    type: \'scatter\',
    data: {
        datasets: [{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: ['''
    #set Hydrophobic
    colors = []
    border = []
    for contact in conservations:
        for typ in contact.contacts:
            if typ == 'Hydrophobic':
                colors.append("'rgba(217, 148, 76, 0.5)',")
                border.append("'rgba(217, 148, 76, 1)',")
                text += '''{x: ''' + str(contact.residue1.parameter)
                text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                '''
    text += '''],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(217, 148, 76, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Attractive',
            data: ['''
    #set Attractive
    colors = []
    border = []
    for contact in conservations:
        for typ in contact.contacts:
            if typ == 'Attractive':
                colors.append("'rgba(240, 98, 145, 0.5)',")
                border.append("'rgba(240, 98, 145, 1)',")
                text += '''{x: ''' + str(contact.residue1.parameter)
                text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                '''
    text += '''],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(240, 98, 145, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: ['''
    #set Repulsive
    colors = []
    border = []
    for contact in conservations:
        for typ in contact.contacts:
            if typ == 'Repulsive':
                colors.append("'rgba(0, 224, 255, 0.5)',")
                border.append("'rgba(0, 224, 255, 1)',")
                text += '''{x: ''' + str(contact.residue1.parameter)
                text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                '''
    text += '''],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(0, 224, 255, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: ['''
    #set Hydrogen Bonds
    colors = []
    border = []
    for contact in conservations:
        for typ in contact.contacts:
            if typ == 'Hydrogen Bonds':
                colors.append("'rgba(109, 78, 217, 0.5)',")
                border.append("'rgba(109, 78, 217, 1)',")
                text += '''{x: ''' + str(contact.residue1.parameter)
                text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                '''
    text += '''],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(109, 78, 217, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: ['''
    #set Aromatic Stacking
    colors = []
    border = []
    for contact in conservations:
        for typ in contact.contacts:
            if typ == 'Aromatic Stacking':
                colors.append("'rgba(123, 250, 121, 0.5)',")
                border.append("'rgba(123, 250, 121, 1)',")
                text += '''{x: ''' + str(contact.residue1.parameter)
                text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                '''
    text += '''],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(123, 250, 121, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Disulphide Bonds',
            data: ['''
    #set Disulphide Bonds
    colors = []
    border = []
    for contact in conservations:
        for typ in contact.contacts:
            if typ == 'Disulphide Bonds':
                colors.append("'rgba(250, 243, 87, 0.5)',")
                border.append("'rgba(250, 243, 87, 1)',")
                text += '''{x: ''' + str(contact.residue1.parameter)
                text += ''', y: ''' + str(contact.residue2.parameter) + '''},
                '''
    text += '''],
            backgroundColor: ['rgba(250, 243, 87, 0.5)','''
    for color in colors:
        text += color 
    text+='''],
            borderColor: ['rgba(250, 243, 87, 1)','''
    for color in border:
        text += color 
    text += '''],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        animation: {
            duration : 0,
        },
        title: {
            display: true,
            position: 'top',
            text:["'''+title+'''"],
            fontSize: 14
    	},
        scales: {
            yAxes: [{
                gridlines: {
                    color : 'rgba(200, 200, 200, 0.01)',
                },
                ticks: {
                    max: '''+str(contacts[0].chain2.ressize())+''',
                    beginAtZero: true,
                }
            }],
            xAxes: [{
                gridlines: {
                    color : 'rgba(200, 200, 200, 0.01)',
                },
                ticks: {
                    max: '''+str(contacts[0].chain1.ressize())+''',
                    beginAtZero: true,
                }
            }]
        },
        tooltips: {
            callbacks: {
                // Use the footer callback to display the sum of the items showing in the tooltip
                label: function(tooltipItem, data) {
                    var labelx = tooltipItem.xLabel;
                    var labely = tooltipItem.yLabel;
                    var label = '';
                    
                    switch (labelx){'''
    for contact in conservations:
        text += '''
                    case ''' + str(contact.residue1.parameter) + ''':
                        label += "''' + contact.chain1.id + ''' ''' + str(contact.residue1.parameter) + _pass[contact.residue1.id] + ''' - ";
                        break;'''
    text += '''}
                switch (labely){'''
    for contact in contacts:
        text+= '''
                    case ''' + str(contact.residue2.parameter) + ''':
                        label += "''' + contact.chain2.id + ''' ''' + str(contact.residue2.parameter) + _pass[contact.residue2.id] + '''\\n";
                        break;'''
    text+= '''  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});
}'''
    data = open(outname,'w')
    data.write(text)
    data.close()
