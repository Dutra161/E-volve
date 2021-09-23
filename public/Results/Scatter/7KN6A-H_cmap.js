
var myChart7KN6A_H = 0;
var ctx = document.getElementById('7KN6A-H').getContext('2d');
if (window.myChart7KN6A_H != 0){
    window.myChart7KN6A_H.destroy();
}
window.myChart7KN6A_H = new Chart(ctx, {
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
            data: [{x: 417, y: 98},
                {x: 417, y: 98},
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
            data: [{x: 417, y: 97},
                {x: 417, y: 98},
                {x: 420, y: 56},
                {x: 420, y: 56},
                {x: 421, y: 53},
                {x: 421, y: 53},
                {x: 421, y: 54},
                {x: 455, y: 33},
                {x: 457, y: 53},
                {x: 460, y: 54},
                {x: 473, y: 31},
                {x: 475, y: 28},
                {x: 475, y: 28},
                {x: 475, y: 32},
                {x: 476, y: 28},
                {x: 487, y: 26},
                {x: 487, y: 94},
                {x: 487, y: 94},
                {x: 489, y: 94},
                {x: 489, y: 94},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 456, y: 33},
                {x: 456, y: 96},
                {x: 489, y: 96},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 417, y: 52},
                {x: 421, y: 52},
                {x: 455, y: 33},
                {x: 455, y: 96},
                {x: 455, y: 99},
                {x: 455, y: 99},
                {x: 455, y: 99},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 96},
                {x: 456, y: 96},
                {x: 456, y: 96},
                {x: 456, y: 96},
                {x: 456, y: 96},
                {x: 456, y: 96},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 102},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 96},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KN6A-H"],
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
                    case 417:
                        label += "7KN6AHA 417K - ";
                        break;
                    case 417:
                        label += "7KN6AHA 417K - ";
                        break;
                    case 417:
                        label += "7KN6AHA 417K - ";
                        break;
                    case 417:
                        label += "7KN6AHA 417K - ";
                        break;
                    case 420:
                        label += "7KN6AHA 420D - ";
                        break;
                    case 420:
                        label += "7KN6AHA 420D - ";
                        break;
                    case 421:
                        label += "7KN6AHA 421Y - ";
                        break;
                    case 421:
                        label += "7KN6AHA 421Y - ";
                        break;
                    case 421:
                        label += "7KN6AHA 421Y - ";
                        break;
                    case 421:
                        label += "7KN6AHA 421Y - ";
                        break;
                    case 455:
                        label += "7KN6AHA 455L - ";
                        break;
                    case 455:
                        label += "7KN6AHA 455L - ";
                        break;
                    case 455:
                        label += "7KN6AHA 455L - ";
                        break;
                    case 455:
                        label += "7KN6AHA 455L - ";
                        break;
                    case 455:
                        label += "7KN6AHA 455L - ";
                        break;
                    case 455:
                        label += "7KN6AHA 455L - ";
                        break;
                    case 456:
                        label += "7KN6AHA 456F - ";
                        break;
                    case 456:
                        label += "7KN6AHA 456F - ";
                        break;
                    case 456:
                        label += "7KN6AHA 456F - ";
                        break;
                    case 456:
                        label += "7KN6AHA 456F - ";
                        break;
                    case 456:
                        label += "7KN6AHA 456F - ";
                        break;
                    case 456:
                        label += "7KN6AHA 456F - ";
                        break;
                    case 456:
                        label += "7KN6AHA 456F - ";
                        break;
                    case 456:
                        label += "7KN6AHA 456F - ";
                        break;
                    case 456:
                        label += "7KN6AHA 456F - ";
                        break;
                    case 456:
                        label += "7KN6AHA 456F - ";
                        break;
                    case 456:
                        label += "7KN6AHA 456F - ";
                        break;
                    case 456:
                        label += "7KN6AHA 456F - ";
                        break;
                    case 457:
                        label += "7KN6AHA 457R - ";
                        break;
                    case 460:
                        label += "7KN6AHA 460N - ";
                        break;
                    case 473:
                        label += "7KN6AHA 473Y - ";
                        break;
                    case 475:
                        label += "7KN6AHA 475A - ";
                        break;
                    case 475:
                        label += "7KN6AHA 475A - ";
                        break;
                    case 475:
                        label += "7KN6AHA 475A - ";
                        break;
                    case 476:
                        label += "7KN6AHA 476G - ";
                        break;
                    case 486:
                        label += "7KN6AHA 486F - ";
                        break;
                    case 486:
                        label += "7KN6AHA 486F - ";
                        break;
                    case 486:
                        label += "7KN6AHA 486F - ";
                        break;
                    case 486:
                        label += "7KN6AHA 486F - ";
                        break;
                    case 487:
                        label += "7KN6AHA 487N - ";
                        break;
                    case 487:
                        label += "7KN6AHA 487N - ";
                        break;
                    case 487:
                        label += "7KN6AHA 487N - ";
                        break;
                    case 489:
                        label += "7KN6AHA 489Y - ";
                        break;
                    case 489:
                        label += "7KN6AHA 489Y - ";
                        break;
                    case 489:
                        label += "7KN6AHA 489Y - ";
                        break;
                    case 489:
                        label += "7KN6AHA 489Y - ";
                        break;
                    case 489:
                        label += "7KN6AHA 489Y - ";
                        break;
                    case 489:
                        label += "7KN6AHA 489Y - ";
                        break;
                    case 489:
                        label += "7KN6AHA 489Y - ";
                        break;
                    case 489:
                        label += "7KN6AHA 489Y - ";
                        break;
                    case 489:
                        label += "7KN6AHA 489Y - ";
                        break;
                    case 489:
                        label += "7KN6AHA 489Y - ";
                        break;}
                switch (labely){
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 97:
                        label += "H 97G\n";
                        break;
                    case 98:
                        label += "H 98D\n";
                        break;
                    case 98:
                        label += "H 98D\n";
                        break;
                    case 56:
                        label += "H 56S\n";
                        break;
                    case 56:
                        label += "H 56S\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 99:
                        label += "H 99F\n";
                        break;
                    case 99:
                        label += "H 99F\n";
                        break;
                    case 99:
                        label += "H 99F\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 32:
                        label += "H 32N\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 26:
                        label += "H 26G\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;
                    case 96:
                        label += "H 96F\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});