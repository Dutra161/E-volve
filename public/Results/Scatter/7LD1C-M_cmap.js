
var myChart7LD1C_M = 0;
var ctx = document.getElementById('7LD1C-M').getContext('2d');
if (window.myChart7LD1C_M != 0){
    window.myChart7LD1C_M.destroy();
}
window.myChart7LD1C_M = new Chart(ctx, {
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
            data: [],
            backgroundColor: ['rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)',],
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
            data: [{x: 369, y: 128},
                {x: 371, y: 76},
                {x: 372, y: 76},
                {x: 374, y: 76},
                {x: 376, y: 130},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 379, y: 126},
                {x: 379, y: 126},
                {x: 408, y: 131},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 369, y: 128},
                {x: 377, y: 128},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 369, y: 128},
                {x: 369, y: 128},
                {x: 369, y: 128},
                {x: 369, y: 128},
                {x: 369, y: 128},
                {x: 369, y: 128},
                {x: 376, y: 131},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 378, y: 125},
                {x: 378, y: 125},
                {x: 408, y: 131},
                {x: 408, y: 131},
                {x: 411, y: 125},
                {x: 411, y: 125},
                {x: 503, y: 78},
                {x: 503, y: 78},
                {x: 503, y: 78},
                {x: 503, y: 81},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7LD1C-M"],
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
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 371:
                        label += "7LD1CMC 371S - ";
                        break;
                    case 372:
                        label += "7LD1CMC 372A - ";
                        break;
                    case 374:
                        label += "7LD1CMC 374F - ";
                        break;
                    case 376:
                        label += "7LD1CMC 376T - ";
                        break;
                    case 376:
                        label += "7LD1CMC 376T - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 378:
                        label += "7LD1CMC 378K - ";
                        break;
                    case 378:
                        label += "7LD1CMC 378K - ";
                        break;
                    case 379:
                        label += "7LD1CMC 379C - ";
                        break;
                    case 379:
                        label += "7LD1CMC 379C - ";
                        break;
                    case 408:
                        label += "7LD1CMC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CMC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CMC 408R - ";
                        break;
                    case 411:
                        label += "7LD1CMC 411A - ";
                        break;
                    case 411:
                        label += "7LD1CMC 411A - ";
                        break;
                    case 503:
                        label += "7LD1CMC 503V - ";
                        break;
                    case 503:
                        label += "7LD1CMC 503V - ";
                        break;
                    case 503:
                        label += "7LD1CMC 503V - ";
                        break;
                    case 503:
                        label += "7LD1CMC 503V - ";
                        break;}
                switch (labely){
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 76:
                        label += "M 76N\n";
                        break;
                    case 76:
                        label += "M 76N\n";
                        break;
                    case 76:
                        label += "M 76N\n";
                        break;
                    case 130:
                        label += "M 130L\n";
                        break;
                    case 131:
                        label += "M 131L\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 125:
                        label += "M 125W\n";
                        break;
                    case 125:
                        label += "M 125W\n";
                        break;
                    case 126:
                        label += "M 126S\n";
                        break;
                    case 126:
                        label += "M 126S\n";
                        break;
                    case 131:
                        label += "M 131L\n";
                        break;
                    case 131:
                        label += "M 131L\n";
                        break;
                    case 131:
                        label += "M 131L\n";
                        break;
                    case 125:
                        label += "M 125W\n";
                        break;
                    case 125:
                        label += "M 125W\n";
                        break;
                    case 78:
                        label += "M 78I\n";
                        break;
                    case 78:
                        label += "M 78I\n";
                        break;
                    case 78:
                        label += "M 78I\n";
                        break;
                    case 81:
                        label += "M 81Q\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});