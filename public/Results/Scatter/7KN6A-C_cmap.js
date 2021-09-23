
var myChart7KN6A_C = 0;
var ctx = document.getElementById('7KN6A-C').getContext('2d');
if (window.myChart7KN6A_C != 0){
    window.myChart7KN6A_C.destroy();
}
window.myChart7KN6A_C = new Chart(ctx, {
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
            data: [{x: 378, y: 95},
                {x: 378, y: 95},
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
            data: [{x: 369, y: 52},
                {x: 369, y: 58},
                {x: 369, y: 58},
                {x: 371, y: 47},
                {x: 372, y: 47},
                {x: 372, y: 47},
                {x: 374, y: 47},
                {x: 378, y: 95},
                {x: 378, y: 97},
                {x: 378, y: 99},
                {x: 380, y: 99},
                {x: 408, y: 101},
                {x: 408, y: 102},
                {x: 414, y: 97},
                {x: 506, y: 39},
                {x: 506, y: 39},
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
            data: [{x: 372, y: 46},
                {x: 372, y: 46},
                {x: 372, y: 60},
                {x: 437, y: 45},
                {x: 437, y: 45},
                {x: 503, y: 45},
                {x: 503, y: 45},
                {x: 503, y: 91},
                {x: 503, y: 91},
                {x: 503, y: 91},
                {x: 503, y: 91},
                {x: 503, y: 103},
                {x: 503, y: 103},
                {x: 503, y: 103},
                {x: 503, y: 103},
                {x: 503, y: 103},
                {x: 503, y: 103},
                {x: 503, y: 103},
                {x: 508, y: 103},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KN6A-C"],
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
                        label += "7KN6ACA 369Y - ";
                        break;
                    case 369:
                        label += "7KN6ACA 369Y - ";
                        break;
                    case 369:
                        label += "7KN6ACA 369Y - ";
                        break;
                    case 371:
                        label += "7KN6ACA 371S - ";
                        break;
                    case 372:
                        label += "7KN6ACA 372A - ";
                        break;
                    case 372:
                        label += "7KN6ACA 372A - ";
                        break;
                    case 372:
                        label += "7KN6ACA 372A - ";
                        break;
                    case 372:
                        label += "7KN6ACA 372A - ";
                        break;
                    case 372:
                        label += "7KN6ACA 372A - ";
                        break;
                    case 374:
                        label += "7KN6ACA 374F - ";
                        break;
                    case 378:
                        label += "7KN6ACA 378K - ";
                        break;
                    case 378:
                        label += "7KN6ACA 378K - ";
                        break;
                    case 378:
                        label += "7KN6ACA 378K - ";
                        break;
                    case 378:
                        label += "7KN6ACA 378K - ";
                        break;
                    case 380:
                        label += "7KN6ACA 380Y - ";
                        break;
                    case 408:
                        label += "7KN6ACA 408R - ";
                        break;
                    case 408:
                        label += "7KN6ACA 408R - ";
                        break;
                    case 414:
                        label += "7KN6ACA 414Q - ";
                        break;
                    case 437:
                        label += "7KN6ACA 437N - ";
                        break;
                    case 437:
                        label += "7KN6ACA 437N - ";
                        break;
                    case 503:
                        label += "7KN6ACA 503V - ";
                        break;
                    case 503:
                        label += "7KN6ACA 503V - ";
                        break;
                    case 503:
                        label += "7KN6ACA 503V - ";
                        break;
                    case 503:
                        label += "7KN6ACA 503V - ";
                        break;
                    case 503:
                        label += "7KN6ACA 503V - ";
                        break;
                    case 503:
                        label += "7KN6ACA 503V - ";
                        break;
                    case 503:
                        label += "7KN6ACA 503V - ";
                        break;
                    case 503:
                        label += "7KN6ACA 503V - ";
                        break;
                    case 503:
                        label += "7KN6ACA 503V - ";
                        break;
                    case 503:
                        label += "7KN6ACA 503V - ";
                        break;
                    case 503:
                        label += "7KN6ACA 503V - ";
                        break;
                    case 503:
                        label += "7KN6ACA 503V - ";
                        break;
                    case 503:
                        label += "7KN6ACA 503V - ";
                        break;
                    case 506:
                        label += "7KN6ACA 506Q - ";
                        break;
                    case 506:
                        label += "7KN6ACA 506Q - ";
                        break;
                    case 508:
                        label += "7KN6ACA 508Y - ";
                        break;}
                switch (labely){
                    case 52:
                        label += "C 52Y\n";
                        break;
                    case 58:
                        label += "C 58E\n";
                        break;
                    case 58:
                        label += "C 58E\n";
                        break;
                    case 47:
                        label += "C 47W\n";
                        break;
                    case 46:
                        label += "C 46E\n";
                        break;
                    case 46:
                        label += "C 46E\n";
                        break;
                    case 47:
                        label += "C 47W\n";
                        break;
                    case 47:
                        label += "C 47W\n";
                        break;
                    case 60:
                        label += "C 60Q\n";
                        break;
                    case 47:
                        label += "C 47W\n";
                        break;
                    case 95:
                        label += "C 95E\n";
                        break;
                    case 95:
                        label += "C 95E\n";
                        break;
                    case 97:
                        label += "C 97S\n";
                        break;
                    case 99:
                        label += "C 99G\n";
                        break;
                    case 99:
                        label += "C 99G\n";
                        break;
                    case 101:
                        label += "C 101G\n";
                        break;
                    case 102:
                        label += "C 102S\n";
                        break;
                    case 97:
                        label += "C 97S\n";
                        break;
                    case 45:
                        label += "C 45L\n";
                        break;
                    case 45:
                        label += "C 45L\n";
                        break;
                    case 45:
                        label += "C 45L\n";
                        break;
                    case 45:
                        label += "C 45L\n";
                        break;
                    case 91:
                        label += "C 91Y\n";
                        break;
                    case 91:
                        label += "C 91Y\n";
                        break;
                    case 91:
                        label += "C 91Y\n";
                        break;
                    case 91:
                        label += "C 91Y\n";
                        break;
                    case 103:
                        label += "C 103W\n";
                        break;
                    case 103:
                        label += "C 103W\n";
                        break;
                    case 103:
                        label += "C 103W\n";
                        break;
                    case 103:
                        label += "C 103W\n";
                        break;
                    case 103:
                        label += "C 103W\n";
                        break;
                    case 103:
                        label += "C 103W\n";
                        break;
                    case 103:
                        label += "C 103W\n";
                        break;
                    case 39:
                        label += "C 39Q\n";
                        break;
                    case 39:
                        label += "C 39Q\n";
                        break;
                    case 103:
                        label += "C 103W\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});