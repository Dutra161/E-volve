
var myChart7L2CA_H = 0;
var ctx = document.getElementById('7L2CA-H').getContext('2d');
if (window.myChart7L2CA_H != 0){
    window.myChart7L2CA_H.destroy();
}
window.myChart7L2CA_H = new Chart(ctx, {
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
            data: [{x: 147, y: 71},
                {x: 147, y: 71},
                {x: 150, y: 53},
                {x: 150, y: 53},
                {x: 150, y: 54},
                {x: 158, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 147, y: 29},
                {x: 147, y: 30},
                {x: 147, y: 32},
                {x: 147, y: 71},
                {x: 147, y: 71},
                {x: 150, y: 53},
                {x: 150, y: 53},
                {x: 246, y: 26},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 247, y: 27},
                {x: 248, y: 31},
                {x: 248, y: 98},
                {x: 249, y: 27},
                {x: 249, y: 96},
                {x: 249, y: 102},
                {x: 250, y: 1},
                {x: 250, y: 102},
                {x: 251, y: 1},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 248, y: 27},
                {x: 248, y: 96},
                {x: 248, y: 98},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 144, y: 31},
                {x: 144, y: 31},
                {x: 145, y: 97},
                {x: 145, y: 97},
                {x: 146, y: 30},
                {x: 147, y: 51},
                {x: 147, y: 51},
                {x: 147, y: 51},
                {x: 246, y: 27},
                {x: 248, y: 27},
                {x: 248, y: 27},
                {x: 248, y: 27},
                {x: 248, y: 27},
                {x: 248, y: 31},
                {x: 248, y: 31},
                {x: 248, y: 96},
                {x: 248, y: 96},
                {x: 248, y: 96},
                {x: 248, y: 96},
                {x: 248, y: 96},
                {x: 248, y: 96},
                {x: 248, y: 96},
                {x: 248, y: 96},
                {x: 248, y: 96},
                {x: 248, y: 96},
                {x: 248, y: 96},
                {x: 248, y: 96},
                {x: 248, y: 96},
                {x: 248, y: 98},
                {x: 248, y: 98},
                {x: 248, y: 98},
                {x: 248, y: 98},
                {x: 248, y: 98},
                {x: 248, y: 98},
                {x: 248, y: 98},
                {x: 248, y: 98},
                {x: 251, y: 102},
                {x: 251, y: 102},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7L2CA-H"],
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
                    case 144:
                        label += "7L2CAHA 144Y - ";
                        break;
                    case 144:
                        label += "7L2CAHA 144Y - ";
                        break;
                    case 145:
                        label += "7L2CAHA 145Y - ";
                        break;
                    case 145:
                        label += "7L2CAHA 145Y - ";
                        break;
                    case 146:
                        label += "7L2CAHA 146H - ";
                        break;
                    case 147:
                        label += "7L2CAHA 147K - ";
                        break;
                    case 147:
                        label += "7L2CAHA 147K - ";
                        break;
                    case 147:
                        label += "7L2CAHA 147K - ";
                        break;
                    case 147:
                        label += "7L2CAHA 147K - ";
                        break;
                    case 147:
                        label += "7L2CAHA 147K - ";
                        break;
                    case 147:
                        label += "7L2CAHA 147K - ";
                        break;
                    case 147:
                        label += "7L2CAHA 147K - ";
                        break;
                    case 147:
                        label += "7L2CAHA 147K - ";
                        break;
                    case 150:
                        label += "7L2CAHA 150K - ";
                        break;
                    case 150:
                        label += "7L2CAHA 150K - ";
                        break;
                    case 150:
                        label += "7L2CAHA 150K - ";
                        break;
                    case 150:
                        label += "7L2CAHA 150K - ";
                        break;
                    case 158:
                        label += "7L2CAHA 158R - ";
                        break;
                    case 246:
                        label += "7L2CAHA 246R - ";
                        break;
                    case 246:
                        label += "7L2CAHA 246R - ";
                        break;
                    case 246:
                        label += "7L2CAHA 246R - ";
                        break;
                    case 246:
                        label += "7L2CAHA 246R - ";
                        break;
                    case 246:
                        label += "7L2CAHA 246R - ";
                        break;
                    case 246:
                        label += "7L2CAHA 246R - ";
                        break;
                    case 246:
                        label += "7L2CAHA 246R - ";
                        break;
                    case 246:
                        label += "7L2CAHA 246R - ";
                        break;
                    case 246:
                        label += "7L2CAHA 246R - ";
                        break;
                    case 246:
                        label += "7L2CAHA 246R - ";
                        break;
                    case 247:
                        label += "7L2CAHA 247S - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 248:
                        label += "7L2CAHA 248Y - ";
                        break;
                    case 249:
                        label += "7L2CAHA 249L - ";
                        break;
                    case 249:
                        label += "7L2CAHA 249L - ";
                        break;
                    case 249:
                        label += "7L2CAHA 249L - ";
                        break;
                    case 250:
                        label += "7L2CAHA 250T - ";
                        break;
                    case 250:
                        label += "7L2CAHA 250T - ";
                        break;
                    case 251:
                        label += "7L2CAHA 251P - ";
                        break;
                    case 251:
                        label += "7L2CAHA 251P - ";
                        break;
                    case 251:
                        label += "7L2CAHA 251P - ";
                        break;}
                switch (labely){
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 97:
                        label += "H 97A\n";
                        break;
                    case 97:
                        label += "H 97A\n";
                        break;
                    case 30:
                        label += "H 30I\n";
                        break;
                    case 29:
                        label += "H 29L\n";
                        break;
                    case 30:
                        label += "H 30I\n";
                        break;
                    case 32:
                        label += "H 32L\n";
                        break;
                    case 51:
                        label += "H 51F\n";
                        break;
                    case 51:
                        label += "H 51F\n";
                        break;
                    case 51:
                        label += "H 51F\n";
                        break;
                    case 71:
                        label += "H 71E\n";
                        break;
                    case 71:
                        label += "H 71E\n";
                        break;
                    case 53:
                        label += "H 53E\n";
                        break;
                    case 53:
                        label += "H 53E\n";
                        break;
                    case 53:
                        label += "H 53E\n";
                        break;
                    case 54:
                        label += "H 54D\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 26:
                        label += "H 26G\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 98:
                        label += "H 98Y\n";
                        break;
                    case 98:
                        label += "H 98Y\n";
                        break;
                    case 98:
                        label += "H 98Y\n";
                        break;
                    case 98:
                        label += "H 98Y\n";
                        break;
                    case 98:
                        label += "H 98Y\n";
                        break;
                    case 98:
                        label += "H 98Y\n";
                        break;
                    case 98:
                        label += "H 98Y\n";
                        break;
                    case 98:
                        label += "H 98Y\n";
                        break;
                    case 98:
                        label += "H 98Y\n";
                        break;
                    case 98:
                        label += "H 98Y\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 96:
                        label += "H 96W\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 1:
                        label += "H 1Q\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 1:
                        label += "H 1Q\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});