
var myChart7CWSO_N = 0;
var ctx = document.getElementById('7CWSO-N').getContext('2d');
if (window.myChart7CWSO_N != 0){
    window.myChart7CWSO_N.destroy();
}
window.myChart7CWSO_N = new Chart(ctx, {
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
            data: [{x: 246, y: 32},
                {x: 246, y: 32},
                {x: 246, y: 32},
                {x: 246, y: 32},
                {x: 246, y: 32},
                {x: 246, y: 32},
                {x: 246, y: 32},
                {x: 246, y: 32},
                {x: 150, y: 55},
                {x: 150, y: 55},
                {x: 147, y: 73},
                {x: 147, y: 73},
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
            data: [{x: 256, y: 1},
                {x: 246, y: 27},
                {x: 256, y: 27},
                {x: 247, y: 28},
                {x: 147, y: 31},
                {x: 145, y: 32},
                {x: 246, y: 32},
                {x: 248, y: 32},
                {x: 248, y: 32},
                {x: 147, y: 33},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 248, y: 28},
                {x: 145, y: 103},
                {x: 152, y: 103},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 246, y: 28},
                {x: 246, y: 28},
                {x: 248, y: 28},
                {x: 248, y: 28},
                {x: 248, y: 28},
                {x: 248, y: 28},
                {x: 144, y: 29},
                {x: 144, y: 29},
                {x: 144, y: 32},
                {x: 248, y: 33},
                {x: 248, y: 33},
                {x: 147, y: 52},
                {x: 147, y: 52},
                {x: 147, y: 52},
                {x: 147, y: 52},
                {x: 147, y: 52},
                {x: 147, y: 52},
                {x: 248, y: 101},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 147, y: 102},
                {x: 147, y: 102},
                {x: 147, y: 102},
                {x: 147, y: 102},
                {x: 147, y: 102},
                {x: 145, y: 103},
                {x: 145, y: 103},
                {x: 145, y: 103},
                {x: 145, y: 103},
                {x: 145, y: 103},
                {x: 145, y: 103},
                {x: 145, y: 103},
                {x: 145, y: 103},
                {x: 145, y: 103},
                {x: 145, y: 103},
                {x: 152, y: 103},
                {x: 152, y: 103},
                {x: 152, y: 103},
                {x: 152, y: 103},
                {x: 152, y: 103},
                {x: 152, y: 103},
                {x: 249, y: 110},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CWSO-N"],
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
                    case 256:
                        label += "7CWSONO 256S - ";
                        break;
                    case 246:
                        label += "7CWSONO 246R - ";
                        break;
                    case 256:
                        label += "7CWSONO 256S - ";
                        break;
                    case 246:
                        label += "7CWSONO 246R - ";
                        break;
                    case 246:
                        label += "7CWSONO 246R - ";
                        break;
                    case 247:
                        label += "7CWSONO 247S - ";
                        break;
                    case 248:
                        label += "7CWSONO 248Y - ";
                        break;
                    case 248:
                        label += "7CWSONO 248Y - ";
                        break;
                    case 248:
                        label += "7CWSONO 248Y - ";
                        break;
                    case 248:
                        label += "7CWSONO 248Y - ";
                        break;
                    case 248:
                        label += "7CWSONO 248Y - ";
                        break;
                    case 144:
                        label += "7CWSONO 144Y - ";
                        break;
                    case 144:
                        label += "7CWSONO 144Y - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 144:
                        label += "7CWSONO 144Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 246:
                        label += "7CWSONO 246R - ";
                        break;
                    case 246:
                        label += "7CWSONO 246R - ";
                        break;
                    case 246:
                        label += "7CWSONO 246R - ";
                        break;
                    case 246:
                        label += "7CWSONO 246R - ";
                        break;
                    case 246:
                        label += "7CWSONO 246R - ";
                        break;
                    case 246:
                        label += "7CWSONO 246R - ";
                        break;
                    case 246:
                        label += "7CWSONO 246R - ";
                        break;
                    case 246:
                        label += "7CWSONO 246R - ";
                        break;
                    case 248:
                        label += "7CWSONO 248Y - ";
                        break;
                    case 248:
                        label += "7CWSONO 248Y - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 248:
                        label += "7CWSONO 248Y - ";
                        break;
                    case 248:
                        label += "7CWSONO 248Y - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 150:
                        label += "7CWSONO 150K - ";
                        break;
                    case 150:
                        label += "7CWSONO 150K - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 248:
                        label += "7CWSONO 248Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 147:
                        label += "7CWSONO 147K - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 145:
                        label += "7CWSONO 145Y - ";
                        break;
                    case 152:
                        label += "7CWSONO 152W - ";
                        break;
                    case 152:
                        label += "7CWSONO 152W - ";
                        break;
                    case 152:
                        label += "7CWSONO 152W - ";
                        break;
                    case 152:
                        label += "7CWSONO 152W - ";
                        break;
                    case 152:
                        label += "7CWSONO 152W - ";
                        break;
                    case 152:
                        label += "7CWSONO 152W - ";
                        break;
                    case 152:
                        label += "7CWSONO 152W - ";
                        break;
                    case 249:
                        label += "7CWSONO 249L - ";
                        break;}
                switch (labely){
                    case 1:
                        label += "N 1E\n";
                        break;
                    case 27:
                        label += "N 27G\n";
                        break;
                    case 27:
                        label += "N 27G\n";
                        break;
                    case 28:
                        label += "N 28Y\n";
                        break;
                    case 28:
                        label += "N 28Y\n";
                        break;
                    case 28:
                        label += "N 28Y\n";
                        break;
                    case 28:
                        label += "N 28Y\n";
                        break;
                    case 28:
                        label += "N 28Y\n";
                        break;
                    case 28:
                        label += "N 28Y\n";
                        break;
                    case 28:
                        label += "N 28Y\n";
                        break;
                    case 28:
                        label += "N 28Y\n";
                        break;
                    case 29:
                        label += "N 29T\n";
                        break;
                    case 29:
                        label += "N 29T\n";
                        break;
                    case 31:
                        label += "N 31P\n";
                        break;
                    case 32:
                        label += "N 32E\n";
                        break;
                    case 32:
                        label += "N 32E\n";
                        break;
                    case 32:
                        label += "N 32E\n";
                        break;
                    case 32:
                        label += "N 32E\n";
                        break;
                    case 32:
                        label += "N 32E\n";
                        break;
                    case 32:
                        label += "N 32E\n";
                        break;
                    case 32:
                        label += "N 32E\n";
                        break;
                    case 32:
                        label += "N 32E\n";
                        break;
                    case 32:
                        label += "N 32E\n";
                        break;
                    case 32:
                        label += "N 32E\n";
                        break;
                    case 32:
                        label += "N 32E\n";
                        break;
                    case 32:
                        label += "N 32E\n";
                        break;
                    case 33:
                        label += "N 33V\n";
                        break;
                    case 33:
                        label += "N 33V\n";
                        break;
                    case 33:
                        label += "N 33V\n";
                        break;
                    case 52:
                        label += "N 52F\n";
                        break;
                    case 52:
                        label += "N 52F\n";
                        break;
                    case 52:
                        label += "N 52F\n";
                        break;
                    case 52:
                        label += "N 52F\n";
                        break;
                    case 52:
                        label += "N 52F\n";
                        break;
                    case 52:
                        label += "N 52F\n";
                        break;
                    case 55:
                        label += "N 55E\n";
                        break;
                    case 55:
                        label += "N 55E\n";
                        break;
                    case 73:
                        label += "N 73E\n";
                        break;
                    case 73:
                        label += "N 73E\n";
                        break;
                    case 101:
                        label += "N 101T\n";
                        break;
                    case 102:
                        label += "N 102P\n";
                        break;
                    case 102:
                        label += "N 102P\n";
                        break;
                    case 102:
                        label += "N 102P\n";
                        break;
                    case 102:
                        label += "N 102P\n";
                        break;
                    case 102:
                        label += "N 102P\n";
                        break;
                    case 102:
                        label += "N 102P\n";
                        break;
                    case 102:
                        label += "N 102P\n";
                        break;
                    case 102:
                        label += "N 102P\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 103:
                        label += "N 103F\n";
                        break;
                    case 110:
                        label += "N 110D\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});