
var myChart7CWUA_O = 0;
var ctx = document.getElementById('7CWUA-O').getContext('2d');
if (window.myChart7CWUA_O != 0){
    window.myChart7CWUA_O.destroy();
}
window.myChart7CWUA_O = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            pointStyle:'star',
            label: 'Mutations on spike',
            radius: 6,
            data: [
                {x:138,y:225},{x:614,y:225},{x:484,y:225},{x:655,y:225},{x:417,y:225},{x:18,y:225},
                {x:501,y:225},{x:26,y:225},{x:190,y:225},{x:20,y:225},{x:1027,y:225},{x:1176,y:225}
            ],
            backgroundColor: ['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)','rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)','rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)','rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)','rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)','rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.5)'],
            borderColor: ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)','rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)','rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)','rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)','rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)','rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)'],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Disulphide Bonds',
            data: [],
            backgroundColor: ['rgba(250, 243, 87, 0.5)',],
            borderColor: ['rgba(250, 243, 87, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Attractive',
            data: [{x: 484, y: 35},
                {x: 484, y: 35},
                {x: 484, y: 35},
                {x: 484, y: 35},
                {x: 484, y: 98},
                {x: 484, y: 98},
                {x: 484, y: 98},
                {x: 484, y: 98},
                {x: 484, y: 98},
                {x: 484, y: 98},
                {x: 484, y: 99},
                {x: 484, y: 99},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [],
            backgroundColor: ['rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 470, y: 31},
                {x: 470, y: 31},
                {x: 481, y: 57},
                {x: 484, y: 35},
                {x: 492, y: 104},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 490, y: 32},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 455, y: 103},
                {x: 455, y: 103},
                {x: 456, y: 103},
                {x: 470, y: 54},
                {x: 471, y: 54},
                {x: 483, y: 50},
                {x: 483, y: 50},
                {x: 483, y: 50},
                {x: 483, y: 59},
                {x: 483, y: 59},
                {x: 484, y: 101},
                {x: 484, y: 101},
                {x: 489, y: 102},
                {x: 489, y: 102},
                {x: 489, y: 102},
                {x: 489, y: 103},
                {x: 489, y: 103},
                {x: 489, y: 103},
                {x: 489, y: 103},
                {x: 490, y: 32},
                {x: 490, y: 32},
                {x: 490, y: 32},
                {x: 490, y: 32},
                {x: 490, y: 32},
                {x: 490, y: 32},
                {x: 490, y: 103},
                {x: 490, y: 103},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CWUA-O"],
            fontSize: 14
    	},
        scales: {
            yAxes: [{
                gridlines: {
                    color : 'rgba(200, 200, 200, 0.01)',
                },
                ticks: {
                    max: 450,
                    beginAtZero: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Antibody'
                }
            }],
            xAxes: [{
                gridlines: {
                    color : 'rgba(200, 200, 200, 0.01)',
                },
                ticks: {
                    max: 1150,
                    beginAtZero: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Spike'
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
                    
                    switch (labelx){
                    case 455:
                        label += "7CWUAOA 455L - ";
                        break;
                    case 455:
                        label += "7CWUAOA 455L - ";
                        break;
                    case 456:
                        label += "7CWUAOA 456F - ";
                        break;
                    case 470:
                        label += "7CWUAOA 470T - ";
                        break;
                    case 470:
                        label += "7CWUAOA 470T - ";
                        break;
                    case 470:
                        label += "7CWUAOA 470T - ";
                        break;
                    case 471:
                        label += "7CWUAOA 471E - ";
                        break;
                    case 481:
                        label += "7CWUAOA 481N - ";
                        break;
                    case 483:
                        label += "7CWUAOA 483V - ";
                        break;
                    case 483:
                        label += "7CWUAOA 483V - ";
                        break;
                    case 483:
                        label += "7CWUAOA 483V - ";
                        break;
                    case 483:
                        label += "7CWUAOA 483V - ";
                        break;
                    case 483:
                        label += "7CWUAOA 483V - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 484:
                        label += "7CWUAOA 484E - ";
                        break;
                    case 489:
                        label += "7CWUAOA 489Y - ";
                        break;
                    case 489:
                        label += "7CWUAOA 489Y - ";
                        break;
                    case 489:
                        label += "7CWUAOA 489Y - ";
                        break;
                    case 489:
                        label += "7CWUAOA 489Y - ";
                        break;
                    case 489:
                        label += "7CWUAOA 489Y - ";
                        break;
                    case 489:
                        label += "7CWUAOA 489Y - ";
                        break;
                    case 489:
                        label += "7CWUAOA 489Y - ";
                        break;
                    case 490:
                        label += "7CWUAOA 490F - ";
                        break;
                    case 490:
                        label += "7CWUAOA 490F - ";
                        break;
                    case 490:
                        label += "7CWUAOA 490F - ";
                        break;
                    case 490:
                        label += "7CWUAOA 490F - ";
                        break;
                    case 490:
                        label += "7CWUAOA 490F - ";
                        break;
                    case 490:
                        label += "7CWUAOA 490F - ";
                        break;
                    case 490:
                        label += "7CWUAOA 490F - ";
                        break;
                    case 490:
                        label += "7CWUAOA 490F - ";
                        break;
                    case 490:
                        label += "7CWUAOA 490F - ";
                        break;
                    case 492:
                        label += "7CWUAOA 492L - ";
                        break;}
                switch (labely){
                    case 103:
                        label += "O 103M\n";
                        break;
                    case 103:
                        label += "O 103M\n";
                        break;
                    case 103:
                        label += "O 103M\n";
                        break;
                    case 31:
                        label += "O 31S\n";
                        break;
                    case 31:
                        label += "O 31S\n";
                        break;
                    case 54:
                        label += "O 54D\n";
                        break;
                    case 54:
                        label += "O 54D\n";
                        break;
                    case 57:
                        label += "O 57N\n";
                        break;
                    case 50:
                        label += "O 50V\n";
                        break;
                    case 50:
                        label += "O 50V\n";
                        break;
                    case 50:
                        label += "O 50V\n";
                        break;
                    case 59:
                        label += "O 59Y\n";
                        break;
                    case 59:
                        label += "O 59Y\n";
                        break;
                    case 35:
                        label += "O 35H\n";
                        break;
                    case 35:
                        label += "O 35H\n";
                        break;
                    case 35:
                        label += "O 35H\n";
                        break;
                    case 35:
                        label += "O 35H\n";
                        break;
                    case 98:
                        label += "O 98R\n";
                        break;
                    case 98:
                        label += "O 98R\n";
                        break;
                    case 98:
                        label += "O 98R\n";
                        break;
                    case 98:
                        label += "O 98R\n";
                        break;
                    case 98:
                        label += "O 98R\n";
                        break;
                    case 98:
                        label += "O 98R\n";
                        break;
                    case 99:
                        label += "O 99H\n";
                        break;
                    case 99:
                        label += "O 99H\n";
                        break;
                    case 101:
                        label += "O 101T\n";
                        break;
                    case 101:
                        label += "O 101T\n";
                        break;
                    case 102:
                        label += "O 102L\n";
                        break;
                    case 102:
                        label += "O 102L\n";
                        break;
                    case 102:
                        label += "O 102L\n";
                        break;
                    case 103:
                        label += "O 103M\n";
                        break;
                    case 103:
                        label += "O 103M\n";
                        break;
                    case 103:
                        label += "O 103M\n";
                        break;
                    case 103:
                        label += "O 103M\n";
                        break;
                    case 32:
                        label += "O 32Y\n";
                        break;
                    case 32:
                        label += "O 32Y\n";
                        break;
                    case 32:
                        label += "O 32Y\n";
                        break;
                    case 32:
                        label += "O 32Y\n";
                        break;
                    case 32:
                        label += "O 32Y\n";
                        break;
                    case 32:
                        label += "O 32Y\n";
                        break;
                    case 32:
                        label += "O 32Y\n";
                        break;
                    case 103:
                        label += "O 103M\n";
                        break;
                    case 103:
                        label += "O 103M\n";
                        break;
                    case 104:
                        label += "O 104N\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});