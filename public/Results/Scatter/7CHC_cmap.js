
var myChart7CHC = 0;
var ctx = document.getElementById('7CHC').getContext('2d');
if (window.myChart7CHC != 0){
    window.myChart7CHC.destroy();
}
window.myChart7CHC = new Chart(ctx, {
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
            data: [{x: 417, y: 101},
                {x: 417, y: 101},
                {x: 484, y: 100},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 458, y: 31},
                {x: 458, y: 31},
                {x: 458, y: 31},
                {x: 458, y: 31},
                {x: 484, y: 106},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 477, y: 26},
                {x: 477, y: 26},
                {x: 477, y: 26},
                {x: 477, y: 26},
                {x: 478, y: 26},
                {x: 478, y: 26},
                {x: 487, y: 26},
                {x: 475, y: 28},
                {x: 473, y: 31},
                {x: 475, y: 32},
                {x: 455, y: 33},
                {x: 421, y: 53},
                {x: 421, y: 53},
                {x: 457, y: 53},
                {x: 457, y: 53},
                {x: 421, y: 54},
                {x: 457, y: 54},
                {x: 460, y: 54},
                {x: 420, y: 56},
                {x: 415, y: 58},
                {x: 415, y: 58},
                {x: 416, y: 58},
                {x: 487, y: 97},
                {x: 487, y: 97},
                {x: 489, y: 97},
                {x: 489, y: 97},
                {x: 417, y: 100},
                {x: 417, y: 102},
                {x: 453, y: 102},
                {x: 505, y: 28},
                {x: 501, y: 30},
                {x: 403, y: 92},
                {x: 505, y: 92},
                {x: 346, y: 75},
                {x: 346, y: 75},
                {x: 449, y: 26},
                {x: 450, y: 74},
                {x: 450, y: 75},
                {x: 482, y: 104},
                {x: 482, y: 105},
                {x: 482, y: 106},
                {x: 484, y: 100},
                {x: 484, y: 100},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 106},
                {x: 481, y: 33},
                {x: 481, y: 33},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 456, y: 99},
                {x: 489, y: 99},
                {x: 486, y: 106},
                {x: 505, y: 32},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 486, y: 2},
                {x: 473, y: 31},
                {x: 417, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 417, y: 52},
                {x: 417, y: 52},
                {x: 421, y: 52},
                {x: 455, y: 99},
                {x: 456, y: 99},
                {x: 456, y: 99},
                {x: 456, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 455, y: 102},
                {x: 455, y: 102},
                {x: 486, y: 106},
                {x: 486, y: 106},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 452, y: 28},
                {x: 452, y: 30},
                {x: 452, y: 31},
                {x: 452, y: 31},
                {x: 483, y: 105},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 481, y: 33},
                {x: 481, y: 35},
                {x: 483, y: 55},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CHC Superpose"],
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
                    case 486:
                        label += "7CHCRHR 486F - ";
                        break;
                    case 477:
                        label += "7CHCRHR 477S - ";
                        break;
                    case 477:
                        label += "7CHCRHR 477S - ";
                        break;
                    case 477:
                        label += "7CHCRHR 477S - ";
                        break;
                    case 477:
                        label += "7CHCRHR 477S - ";
                        break;
                    case 478:
                        label += "7CHCRHR 478T - ";
                        break;
                    case 478:
                        label += "7CHCRHR 478T - ";
                        break;
                    case 487:
                        label += "7CHCRHR 487N - ";
                        break;
                    case 475:
                        label += "7CHCRHR 475A - ";
                        break;
                    case 458:
                        label += "7CHCRHR 458K - ";
                        break;
                    case 458:
                        label += "7CHCRHR 458K - ";
                        break;
                    case 458:
                        label += "7CHCRHR 458K - ";
                        break;
                    case 458:
                        label += "7CHCRHR 458K - ";
                        break;
                    case 473:
                        label += "7CHCRHR 473Y - ";
                        break;
                    case 473:
                        label += "7CHCRHR 473Y - ";
                        break;
                    case 475:
                        label += "7CHCRHR 475A - ";
                        break;
                    case 417:
                        label += "7CHCRHR 417K - ";
                        break;
                    case 455:
                        label += "7CHCRHR 455L - ";
                        break;
                    case 456:
                        label += "7CHCRHR 456F - ";
                        break;
                    case 456:
                        label += "7CHCRHR 456F - ";
                        break;
                    case 456:
                        label += "7CHCRHR 456F - ";
                        break;
                    case 417:
                        label += "7CHCRHR 417K - ";
                        break;
                    case 417:
                        label += "7CHCRHR 417K - ";
                        break;
                    case 421:
                        label += "7CHCRHR 421Y - ";
                        break;
                    case 421:
                        label += "7CHCRHR 421Y - ";
                        break;
                    case 421:
                        label += "7CHCRHR 421Y - ";
                        break;
                    case 457:
                        label += "7CHCRHR 457R - ";
                        break;
                    case 457:
                        label += "7CHCRHR 457R - ";
                        break;
                    case 421:
                        label += "7CHCRHR 421Y - ";
                        break;
                    case 457:
                        label += "7CHCRHR 457R - ";
                        break;
                    case 460:
                        label += "7CHCRHR 460N - ";
                        break;
                    case 420:
                        label += "7CHCRHR 420D - ";
                        break;
                    case 415:
                        label += "7CHCRHR 415T - ";
                        break;
                    case 415:
                        label += "7CHCRHR 415T - ";
                        break;
                    case 416:
                        label += "7CHCRHR 416G - ";
                        break;
                    case 487:
                        label += "7CHCRHR 487N - ";
                        break;
                    case 487:
                        label += "7CHCRHR 487N - ";
                        break;
                    case 489:
                        label += "7CHCRHR 489Y - ";
                        break;
                    case 489:
                        label += "7CHCRHR 489Y - ";
                        break;
                    case 455:
                        label += "7CHCRHR 455L - ";
                        break;
                    case 456:
                        label += "7CHCRHR 456F - ";
                        break;
                    case 456:
                        label += "7CHCRHR 456F - ";
                        break;
                    case 456:
                        label += "7CHCRHR 456F - ";
                        break;
                    case 456:
                        label += "7CHCRHR 456F - ";
                        break;
                    case 489:
                        label += "7CHCRHR 489Y - ";
                        break;
                    case 489:
                        label += "7CHCRHR 489Y - ";
                        break;
                    case 489:
                        label += "7CHCRHR 489Y - ";
                        break;
                    case 489:
                        label += "7CHCRHR 489Y - ";
                        break;
                    case 489:
                        label += "7CHCRHR 489Y - ";
                        break;
                    case 489:
                        label += "7CHCRHR 489Y - ";
                        break;
                    case 417:
                        label += "7CHCRHR 417K - ";
                        break;
                    case 417:
                        label += "7CHCRHR 417K - ";
                        break;
                    case 417:
                        label += "7CHCRHR 417K - ";
                        break;
                    case 417:
                        label += "7CHCRHR 417K - ";
                        break;
                    case 453:
                        label += "7CHCRHR 453Y - ";
                        break;
                    case 455:
                        label += "7CHCRHR 455L - ";
                        break;
                    case 455:
                        label += "7CHCRHR 455L - ";
                        break;
                    case 486:
                        label += "7CHCRHR 486F - ";
                        break;
                    case 486:
                        label += "7CHCRHR 486F - ";
                        break;
                    case 486:
                        label += "7CHCRHR 486F - ";
                        break;
                    case 505:
                        label += "7CHCRLR 505Y - ";
                        break;
                    case 501:
                        label += "7CHCRLR 501N - ";
                        break;
                    case 505:
                        label += "7CHCRLR 505Y - ";
                        break;
                    case 505:
                        label += "7CHCRLR 505Y - ";
                        break;
                    case 505:
                        label += "7CHCRLR 505Y - ";
                        break;
                    case 505:
                        label += "7CHCRLR 505Y - ";
                        break;
                    case 505:
                        label += "7CHCRLR 505Y - ";
                        break;
                    case 403:
                        label += "7CHCRLR 403R - ";
                        break;
                    case 505:
                        label += "7CHCRLR 505Y - ";
                        break;
                    case 346:
                        label += "7CHCRAR 346R - ";
                        break;
                    case 346:
                        label += "7CHCRAR 346R - ";
                        break;
                    case 449:
                        label += "7CHCRAR 449Y - ";
                        break;
                    case 450:
                        label += "7CHCRAR 450N - ";
                        break;
                    case 450:
                        label += "7CHCRAR 450N - ";
                        break;
                    case 452:
                        label += "7CHCRAR 452L - ";
                        break;
                    case 452:
                        label += "7CHCRAR 452L - ";
                        break;
                    case 452:
                        label += "7CHCRAR 452L - ";
                        break;
                    case 452:
                        label += "7CHCRAR 452L - ";
                        break;
                    case 482:
                        label += "7CHCRAR 482G - ";
                        break;
                    case 482:
                        label += "7CHCRAR 482G - ";
                        break;
                    case 482:
                        label += "7CHCRAR 482G - ";
                        break;
                    case 483:
                        label += "7CHCRAR 483V - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 484:
                        label += "7CHCRAR 484E - ";
                        break;
                    case 490:
                        label += "7CHCRAR 490F - ";
                        break;
                    case 490:
                        label += "7CHCRAR 490F - ";
                        break;
                    case 490:
                        label += "7CHCRAR 490F - ";
                        break;
                    case 490:
                        label += "7CHCRAR 490F - ";
                        break;
                    case 490:
                        label += "7CHCRAR 490F - ";
                        break;
                    case 481:
                        label += "7CHCRBR 481N - ";
                        break;
                    case 481:
                        label += "7CHCRBR 481N - ";
                        break;
                    case 481:
                        label += "7CHCRBR 481N - ";
                        break;
                    case 481:
                        label += "7CHCRBR 481N - ";
                        break;
                    case 483:
                        label += "7CHCRBR 483V - ";
                        break;}
                switch (labely){
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 26:
                        label += "H 26E\n";
                        break;
                    case 26:
                        label += "H 26E\n";
                        break;
                    case 26:
                        label += "H 26E\n";
                        break;
                    case 26:
                        label += "H 26E\n";
                        break;
                    case 26:
                        label += "H 26E\n";
                        break;
                    case 26:
                        label += "H 26E\n";
                        break;
                    case 26:
                        label += "H 26E\n";
                        break;
                    case 28:
                        label += "H 28I\n";
                        break;
                    case 31:
                        label += "H 31R\n";
                        break;
                    case 31:
                        label += "H 31R\n";
                        break;
                    case 31:
                        label += "H 31R\n";
                        break;
                    case 31:
                        label += "H 31R\n";
                        break;
                    case 31:
                        label += "H 31R\n";
                        break;
                    case 31:
                        label += "H 31R\n";
                        break;
                    case 32:
                        label += "H 32N\n";
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
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
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
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 56:
                        label += "H 56S\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 100:
                        label += "H 100G\n";
                        break;
                    case 101:
                        label += "H 101D\n";
                        break;
                    case 101:
                        label += "H 101D\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 106:
                        label += "H 106Y\n";
                        break;
                    case 106:
                        label += "H 106Y\n";
                        break;
                    case 106:
                        label += "H 106Y\n";
                        break;
                    case 28:
                        label += "L 28G\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 32:
                        label += "L 32F\n";
                        break;
                    case 32:
                        label += "L 32F\n";
                        break;
                    case 32:
                        label += "L 32F\n";
                        break;
                    case 32:
                        label += "L 32F\n";
                        break;
                    case 32:
                        label += "L 32F\n";
                        break;
                    case 92:
                        label += "L 92G\n";
                        break;
                    case 92:
                        label += "L 92G\n";
                        break;
                    case 75:
                        label += "A 75S\n";
                        break;
                    case 75:
                        label += "A 75S\n";
                        break;
                    case 26:
                        label += "A 26G\n";
                        break;
                    case 74:
                        label += "A 74N\n";
                        break;
                    case 75:
                        label += "A 75S\n";
                        break;
                    case 28:
                        label += "A 28A\n";
                        break;
                    case 30:
                        label += "A 30T\n";
                        break;
                    case 31:
                        label += "A 31T\n";
                        break;
                    case 31:
                        label += "A 31T\n";
                        break;
                    case 104:
                        label += "A 104L\n";
                        break;
                    case 105:
                        label += "A 105Y\n";
                        break;
                    case 106:
                        label += "A 106D\n";
                        break;
                    case 105:
                        label += "A 105Y\n";
                        break;
                    case 100:
                        label += "A 100R\n";
                        break;
                    case 100:
                        label += "A 100R\n";
                        break;
                    case 100:
                        label += "A 100R\n";
                        break;
                    case 102:
                        label += "A 102R\n";
                        break;
                    case 102:
                        label += "A 102R\n";
                        break;
                    case 102:
                        label += "A 102R\n";
                        break;
                    case 102:
                        label += "A 102R\n";
                        break;
                    case 102:
                        label += "A 102R\n";
                        break;
                    case 102:
                        label += "A 102R\n";
                        break;
                    case 102:
                        label += "A 102R\n";
                        break;
                    case 102:
                        label += "A 102R\n";
                        break;
                    case 102:
                        label += "A 102R\n";
                        break;
                    case 106:
                        label += "A 106D\n";
                        break;
                    case 106:
                        label += "A 106D\n";
                        break;
                    case 31:
                        label += "A 31T\n";
                        break;
                    case 31:
                        label += "A 31T\n";
                        break;
                    case 102:
                        label += "A 102R\n";
                        break;
                    case 102:
                        label += "A 102R\n";
                        break;
                    case 102:
                        label += "A 102R\n";
                        break;
                    case 33:
                        label += "B 33N\n";
                        break;
                    case 33:
                        label += "B 33N\n";
                        break;
                    case 33:
                        label += "B 33N\n";
                        break;
                    case 35:
                        label += "B 35Y\n";
                        break;
                    case 55:
                        label += "B 55L\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});