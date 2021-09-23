
var myChart7L0NR_A = 0;
var ctx = document.getElementById('7L0NR-A').getContext('2d');
if (window.myChart7L0NR_A != 0){
    window.myChart7L0NR_A.destroy();
}
window.myChart7L0NR_A = new Chart(ctx, {
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
            data: [{x: 356, y: 108},
                {x: 356, y: 108},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 331, y: 26},
                {x: 331, y: 27},
                {x: 331, y: 29},
                {x: 333, y: 30},
                {x: 339, y: 100},
                {x: 343, y: 100},
                {x: 340, y: 104},
                {x: 340, y: 104},
                {x: 335, y: 105},
                {x: 340, y: 105},
                {x: 340, y: 105},
                {x: 340, y: 106},
                {x: 356, y: 108},
                {x: 356, y: 108},
                {x: 345, y: 109},
                {x: 343, y: 111},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 335, y: 28},
                {x: 335, y: 28},
                {x: 335, y: 28},
                {x: 335, y: 28},
                {x: 335, y: 28},
                {x: 331, y: 77},
                {x: 343, y: 100},
                {x: 337, y: 105},
                {x: 337, y: 105},
                {x: 337, y: 105},
                {x: 337, y: 105},
                {x: 337, y: 105},
                {x: 337, y: 105},
                {x: 337, y: 105},
                {x: 337, y: 105},
                {x: 337, y: 105},
                {x: 361, y: 105},
                {x: 361, y: 105},
                {x: 337, y: 106},
                {x: 337, y: 106},
                {x: 337, y: 106},
                {x: 340, y: 106},
                {x: 341, y: 106},
                {x: 356, y: 106},
                {x: 356, y: 106},
                {x: 356, y: 106},
                {x: 356, y: 106},
                {x: 356, y: 106},
                {x: 356, y: 106},
                {x: 356, y: 106},
                {x: 356, y: 106},
                {x: 356, y: 106},
                {x: 356, y: 106},
                {x: 356, y: 106},
                {x: 356, y: 106},
                {x: 356, y: 106},
                {x: 356, y: 106},
                {x: 358, y: 106},
                {x: 340, y: 110},
                {x: 340, y: 110},
                {x: 441, y: 111},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7L0NR-A"],
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
                    case 331:
                        label += "7L0NRAR 331N - ";
                        break;
                    case 331:
                        label += "7L0NRAR 331N - ";
                        break;
                    case 335:
                        label += "7L0NRAR 335L - ";
                        break;
                    case 335:
                        label += "7L0NRAR 335L - ";
                        break;
                    case 335:
                        label += "7L0NRAR 335L - ";
                        break;
                    case 335:
                        label += "7L0NRAR 335L - ";
                        break;
                    case 335:
                        label += "7L0NRAR 335L - ";
                        break;
                    case 331:
                        label += "7L0NRAR 331N - ";
                        break;
                    case 333:
                        label += "7L0NRAR 333T - ";
                        break;
                    case 331:
                        label += "7L0NRAR 331N - ";
                        break;
                    case 339:
                        label += "7L0NRAR 339G - ";
                        break;
                    case 343:
                        label += "7L0NRAR 343N - ";
                        break;
                    case 343:
                        label += "7L0NRAR 343N - ";
                        break;
                    case 340:
                        label += "7L0NRAR 340E - ";
                        break;
                    case 340:
                        label += "7L0NRAR 340E - ";
                        break;
                    case 335:
                        label += "7L0NRAR 335L - ";
                        break;
                    case 337:
                        label += "7L0NRAR 337P - ";
                        break;
                    case 337:
                        label += "7L0NRAR 337P - ";
                        break;
                    case 337:
                        label += "7L0NRAR 337P - ";
                        break;
                    case 337:
                        label += "7L0NRAR 337P - ";
                        break;
                    case 337:
                        label += "7L0NRAR 337P - ";
                        break;
                    case 337:
                        label += "7L0NRAR 337P - ";
                        break;
                    case 337:
                        label += "7L0NRAR 337P - ";
                        break;
                    case 337:
                        label += "7L0NRAR 337P - ";
                        break;
                    case 337:
                        label += "7L0NRAR 337P - ";
                        break;
                    case 340:
                        label += "7L0NRAR 340E - ";
                        break;
                    case 340:
                        label += "7L0NRAR 340E - ";
                        break;
                    case 361:
                        label += "7L0NRAR 361C - ";
                        break;
                    case 361:
                        label += "7L0NRAR 361C - ";
                        break;
                    case 337:
                        label += "7L0NRAR 337P - ";
                        break;
                    case 337:
                        label += "7L0NRAR 337P - ";
                        break;
                    case 337:
                        label += "7L0NRAR 337P - ";
                        break;
                    case 340:
                        label += "7L0NRAR 340E - ";
                        break;
                    case 340:
                        label += "7L0NRAR 340E - ";
                        break;
                    case 341:
                        label += "7L0NRAR 341V - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 358:
                        label += "7L0NRAR 358I - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 356:
                        label += "7L0NRAR 356K - ";
                        break;
                    case 345:
                        label += "7L0NRAR 345T - ";
                        break;
                    case 340:
                        label += "7L0NRAR 340E - ";
                        break;
                    case 340:
                        label += "7L0NRAR 340E - ";
                        break;
                    case 343:
                        label += "7L0NRAR 343N - ";
                        break;
                    case 441:
                        label += "7L0NRAR 441L - ";
                        break;}
                switch (labely){
                    case 26:
                        label += "A 26G\n";
                        break;
                    case 27:
                        label += "A 27Y\n";
                        break;
                    case 28:
                        label += "A 28P\n";
                        break;
                    case 28:
                        label += "A 28P\n";
                        break;
                    case 28:
                        label += "A 28P\n";
                        break;
                    case 28:
                        label += "A 28P\n";
                        break;
                    case 28:
                        label += "A 28P\n";
                        break;
                    case 29:
                        label += "A 29F\n";
                        break;
                    case 30:
                        label += "A 30T\n";
                        break;
                    case 77:
                        label += "A 77T\n";
                        break;
                    case 100:
                        label += "A 100Y\n";
                        break;
                    case 100:
                        label += "A 100Y\n";
                        break;
                    case 100:
                        label += "A 100Y\n";
                        break;
                    case 104:
                        label += "A 104A\n";
                        break;
                    case 104:
                        label += "A 104A\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 105:
                        label += "A 105W\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 106:
                        label += "A 106F\n";
                        break;
                    case 108:
                        label += "A 108E\n";
                        break;
                    case 108:
                        label += "A 108E\n";
                        break;
                    case 109:
                        label += "A 109S\n";
                        break;
                    case 110:
                        label += "A 110L\n";
                        break;
                    case 110:
                        label += "A 110L\n";
                        break;
                    case 111:
                        label += "A 111I\n";
                        break;
                    case 111:
                        label += "A 111I\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});