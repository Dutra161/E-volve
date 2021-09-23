
var myChart7CAIA_E = 0;
var ctx = document.getElementById('7CAIA-E').getContext('2d');
if (window.myChart7CAIA_E != 0){
    window.myChart7CAIA_E.destroy();
}
window.myChart7CAIA_E = new Chart(ctx, {
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
            data: [{x: 408, y: 102},
                {x: 408, y: 102},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 405, y: 102},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 376, y: 50},
                {x: 376, y: 105},
                {x: 377, y: 50},
                {x: 378, y: 57},
                {x: 380, y: 101},
                {x: 383, y: 56},
                {x: 405, y: 104},
                {x: 408, y: 102},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [],
            backgroundColor: ['rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 369, y: 62},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 376, y: 103},
                {x: 376, y: 103},
                {x: 378, y: 33},
                {x: 378, y: 50},
                {x: 380, y: 55},
                {x: 380, y: 55},
                {x: 380, y: 101},
                {x: 385, y: 60},
                {x: 407, y: 103},
                {x: 411, y: 101},
                {x: 412, y: 54},
                {x: 412, y: 54},
                {x: 412, y: 54},
                {x: 412, y: 54},
                {x: 412, y: 54},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CAIA-E"],
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
                    case 369:
                        label += "7CAIAEA 369Y - ";
                        break;
                    case 369:
                        label += "7CAIAEA 369Y - ";
                        break;
                    case 369:
                        label += "7CAIAEA 369Y - ";
                        break;
                    case 369:
                        label += "7CAIAEA 369Y - ";
                        break;
                    case 369:
                        label += "7CAIAEA 369Y - ";
                        break;
                    case 376:
                        label += "7CAIAEA 376T - ";
                        break;
                    case 376:
                        label += "7CAIAEA 376T - ";
                        break;
                    case 376:
                        label += "7CAIAEA 376T - ";
                        break;
                    case 376:
                        label += "7CAIAEA 376T - ";
                        break;
                    case 377:
                        label += "7CAIAEA 377F - ";
                        break;
                    case 378:
                        label += "7CAIAEA 378K - ";
                        break;
                    case 378:
                        label += "7CAIAEA 378K - ";
                        break;
                    case 378:
                        label += "7CAIAEA 378K - ";
                        break;
                    case 380:
                        label += "7CAIAEA 380Y - ";
                        break;
                    case 380:
                        label += "7CAIAEA 380Y - ";
                        break;
                    case 380:
                        label += "7CAIAEA 380Y - ";
                        break;
                    case 380:
                        label += "7CAIAEA 380Y - ";
                        break;
                    case 383:
                        label += "7CAIAEA 383S - ";
                        break;
                    case 385:
                        label += "7CAIAEA 385T - ";
                        break;
                    case 405:
                        label += "7CAIAEA 405D - ";
                        break;
                    case 405:
                        label += "7CAIAEA 405D - ";
                        break;
                    case 407:
                        label += "7CAIAEA 407V - ";
                        break;
                    case 408:
                        label += "7CAIAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAIAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAIAEA 408R - ";
                        break;
                    case 411:
                        label += "7CAIAEA 411A - ";
                        break;
                    case 412:
                        label += "7CAIAEA 412P - ";
                        break;
                    case 412:
                        label += "7CAIAEA 412P - ";
                        break;
                    case 412:
                        label += "7CAIAEA 412P - ";
                        break;
                    case 412:
                        label += "7CAIAEA 412P - ";
                        break;
                    case 412:
                        label += "7CAIAEA 412P - ";
                        break;}
                switch (labely){
                    case 62:
                        label += "E 62L\n";
                        break;
                    case 62:
                        label += "E 62L\n";
                        break;
                    case 62:
                        label += "E 62L\n";
                        break;
                    case 62:
                        label += "E 62L\n";
                        break;
                    case 62:
                        label += "E 62L\n";
                        break;
                    case 50:
                        label += "E 50Y\n";
                        break;
                    case 103:
                        label += "E 103P\n";
                        break;
                    case 103:
                        label += "E 103P\n";
                        break;
                    case 105:
                        label += "E 105Y\n";
                        break;
                    case 50:
                        label += "E 50Y\n";
                        break;
                    case 33:
                        label += "E 33Y\n";
                        break;
                    case 50:
                        label += "E 50Y\n";
                        break;
                    case 57:
                        label += "E 57G\n";
                        break;
                    case 55:
                        label += "E 55N\n";
                        break;
                    case 55:
                        label += "E 55N\n";
                        break;
                    case 101:
                        label += "E 101Y\n";
                        break;
                    case 101:
                        label += "E 101Y\n";
                        break;
                    case 56:
                        label += "E 56G\n";
                        break;
                    case 60:
                        label += "E 60D\n";
                        break;
                    case 102:
                        label += "E 102D\n";
                        break;
                    case 104:
                        label += "E 104Y\n";
                        break;
                    case 103:
                        label += "E 103P\n";
                        break;
                    case 102:
                        label += "E 102D\n";
                        break;
                    case 102:
                        label += "E 102D\n";
                        break;
                    case 102:
                        label += "E 102D\n";
                        break;
                    case 101:
                        label += "E 101Y\n";
                        break;
                    case 54:
                        label += "E 54F\n";
                        break;
                    case 54:
                        label += "E 54F\n";
                        break;
                    case 54:
                        label += "E 54F\n";
                        break;
                    case 54:
                        label += "E 54F\n";
                        break;
                    case 54:
                        label += "E 54F\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});