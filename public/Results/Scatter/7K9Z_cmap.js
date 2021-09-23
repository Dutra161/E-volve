
var myChart7K9Z = 0;
var ctx = document.getElementById('7K9Z').getContext('2d');
if (window.myChart7K9Z != 0){
    window.myChart7K9Z.destroy();
}
window.myChart7K9Z = new Chart(ctx, {
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
            data: [{x: 471, y: 96},
                {x: 471, y: 96},
                {x: 471, y: 96},
                {x: 471, y: 96},
                {x: 471, y: 96},
                {x: 471, y: 96},
                {x: 471, y: 96},
                {x: 471, y: 96},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 467, y: 98},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 482, y: 32},
                {x: 346, y: 64},
                {x: 469, y: 96},
                {x: 471, y: 96},
                {x: 471, y: 96},
                {x: 470, y: 97},
                {x: 469, y: 98},
                {x: 355, y: 0},
                {x: 357, y: 0},
                {x: 357, y: 27},
                {x: 357, y: 27},
                {x: 465, y: 30},
                {x: 466, y: 32},
                {x: 466, y: 92},
                {x: 475, y: 32},
                {x: 487, y: 91},
                {x: 477, y: 92},
                {x: 477, y: 92},
                {x: 487, y: 92},
                {x: 478, y: 94},
                {x: 486, y: 94},
                {x: 484, y: 52},
                {x: 484, y: 54},
                {x: 484, y: 54},
                {x: 486, y: 58},
                {x: 489, y: 95},
                {x: 487, y: 97},
                {x: 487, y: 97},
                {x: 489, y: 97},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 489, y: 32},
                {x: 486, y: 47},
                {x: 489, y: 50},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 452, y: 52},
                {x: 470, y: 52},
                {x: 490, y: 52},
                {x: 490, y: 52},
                {x: 492, y: 52},
                {x: 490, y: 53},
                {x: 490, y: 53},
                {x: 490, y: 53},
                {x: 490, y: 53},
                {x: 490, y: 53},
                {x: 452, y: 54},
                {x: 452, y: 54},
                {x: 452, y: 54},
                {x: 452, y: 54},
                {x: 452, y: 54},
                {x: 452, y: 54},
                {x: 452, y: 54},
                {x: 452, y: 54},
                {x: 452, y: 54},
                {x: 490, y: 54},
                {x: 490, y: 54},
                {x: 490, y: 54},
                {x: 490, y: 54},
                {x: 490, y: 54},
                {x: 492, y: 54},
                {x: 492, y: 54},
                {x: 450, y: 56},
                {x: 452, y: 56},
                {x: 452, y: 56},
                {x: 452, y: 56},
                {x: 468, y: 94},
                {x: 468, y: 94},
                {x: 468, y: 94},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 94},
                {x: 486, y: 96},
                {x: 486, y: 96},
                {x: 486, y: 96},
                {x: 486, y: 96},
                {x: 486, y: 96},
                {x: 486, y: 96},
                {x: 493, y: 31},
                {x: 456, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 486, y: 47},
                {x: 486, y: 47},
                {x: 486, y: 47},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 486, y: 50},
                {x: 486, y: 50},
                {x: 489, y: 50},
                {x: 489, y: 50},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7K9Z Superpose"],
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
                    case 482:
                        label += "7K9ZEHE 482G - ";
                        break;
                    case 452:
                        label += "7K9ZEHE 452L - ";
                        break;
                    case 470:
                        label += "7K9ZEHE 470T - ";
                        break;
                    case 490:
                        label += "7K9ZEHE 490F - ";
                        break;
                    case 490:
                        label += "7K9ZEHE 490F - ";
                        break;
                    case 492:
                        label += "7K9ZEHE 492L - ";
                        break;
                    case 490:
                        label += "7K9ZEHE 490F - ";
                        break;
                    case 490:
                        label += "7K9ZEHE 490F - ";
                        break;
                    case 490:
                        label += "7K9ZEHE 490F - ";
                        break;
                    case 490:
                        label += "7K9ZEHE 490F - ";
                        break;
                    case 490:
                        label += "7K9ZEHE 490F - ";
                        break;
                    case 452:
                        label += "7K9ZEHE 452L - ";
                        break;
                    case 452:
                        label += "7K9ZEHE 452L - ";
                        break;
                    case 452:
                        label += "7K9ZEHE 452L - ";
                        break;
                    case 452:
                        label += "7K9ZEHE 452L - ";
                        break;
                    case 452:
                        label += "7K9ZEHE 452L - ";
                        break;
                    case 452:
                        label += "7K9ZEHE 452L - ";
                        break;
                    case 452:
                        label += "7K9ZEHE 452L - ";
                        break;
                    case 452:
                        label += "7K9ZEHE 452L - ";
                        break;
                    case 452:
                        label += "7K9ZEHE 452L - ";
                        break;
                    case 490:
                        label += "7K9ZEHE 490F - ";
                        break;
                    case 490:
                        label += "7K9ZEHE 490F - ";
                        break;
                    case 490:
                        label += "7K9ZEHE 490F - ";
                        break;
                    case 490:
                        label += "7K9ZEHE 490F - ";
                        break;
                    case 490:
                        label += "7K9ZEHE 490F - ";
                        break;
                    case 492:
                        label += "7K9ZEHE 492L - ";
                        break;
                    case 492:
                        label += "7K9ZEHE 492L - ";
                        break;
                    case 450:
                        label += "7K9ZEHE 450N - ";
                        break;
                    case 452:
                        label += "7K9ZEHE 452L - ";
                        break;
                    case 452:
                        label += "7K9ZEHE 452L - ";
                        break;
                    case 452:
                        label += "7K9ZEHE 452L - ";
                        break;
                    case 346:
                        label += "7K9ZEHE 346R - ";
                        break;
                    case 469:
                        label += "7K9ZEHE 469S - ";
                        break;
                    case 471:
                        label += "7K9ZEHE 471E - ";
                        break;
                    case 471:
                        label += "7K9ZEHE 471E - ";
                        break;
                    case 471:
                        label += "7K9ZEHE 471E - ";
                        break;
                    case 471:
                        label += "7K9ZEHE 471E - ";
                        break;
                    case 471:
                        label += "7K9ZEHE 471E - ";
                        break;
                    case 471:
                        label += "7K9ZEHE 471E - ";
                        break;
                    case 471:
                        label += "7K9ZEHE 471E - ";
                        break;
                    case 471:
                        label += "7K9ZEHE 471E - ";
                        break;
                    case 470:
                        label += "7K9ZEHE 470T - ";
                        break;
                    case 467:
                        label += "7K9ZEHE 467D - ";
                        break;
                    case 469:
                        label += "7K9ZEHE 469S - ";
                        break;
                    case 355:
                        label += "7K9ZELE 355R - ";
                        break;
                    case 357:
                        label += "7K9ZELE 357R - ";
                        break;
                    case 357:
                        label += "7K9ZELE 357R - ";
                        break;
                    case 357:
                        label += "7K9ZELE 357R - ";
                        break;
                    case 465:
                        label += "7K9ZELE 465E - ";
                        break;
                    case 466:
                        label += "7K9ZELE 466R - ";
                        break;
                    case 466:
                        label += "7K9ZELE 466R - ";
                        break;
                    case 468:
                        label += "7K9ZELE 468I - ";
                        break;
                    case 468:
                        label += "7K9ZELE 468I - ";
                        break;
                    case 468:
                        label += "7K9ZELE 468I - ";
                        break;
                    case 475:
                        label += "7K9ZEAE 475A - ";
                        break;
                    case 486:
                        label += "7K9ZEAE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEAE 486F - ";
                        break;
                    case 487:
                        label += "7K9ZEAE 487N - ";
                        break;
                    case 477:
                        label += "7K9ZEAE 477S - ";
                        break;
                    case 477:
                        label += "7K9ZEAE 477S - ";
                        break;
                    case 487:
                        label += "7K9ZEAE 487N - ";
                        break;
                    case 478:
                        label += "7K9ZEAE 478T - ";
                        break;
                    case 486:
                        label += "7K9ZEAE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEAE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEAE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEAE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEAE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEAE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEAE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEAE 486F - ";
                        break;
                    case 493:
                        label += "7K9ZEBE 493Q - ";
                        break;
                    case 456:
                        label += "7K9ZEBE 456F - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 484:
                        label += "7K9ZEBE 484E - ";
                        break;
                    case 484:
                        label += "7K9ZEBE 484E - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 484:
                        label += "7K9ZEBE 484E - ";
                        break;
                    case 484:
                        label += "7K9ZEBE 484E - ";
                        break;
                    case 484:
                        label += "7K9ZEBE 484E - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 487:
                        label += "7K9ZEBE 487N - ";
                        break;
                    case 487:
                        label += "7K9ZEBE 487N - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;}
                switch (labely){
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 52:
                        label += "H 52I\n";
                        break;
                    case 52:
                        label += "H 52I\n";
                        break;
                    case 52:
                        label += "H 52I\n";
                        break;
                    case 52:
                        label += "H 52I\n";
                        break;
                    case 52:
                        label += "H 52I\n";
                        break;
                    case 53:
                        label += "H 53M\n";
                        break;
                    case 53:
                        label += "H 53M\n";
                        break;
                    case 53:
                        label += "H 53M\n";
                        break;
                    case 53:
                        label += "H 53M\n";
                        break;
                    case 53:
                        label += "H 53M\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 54:
                        label += "H 54F\n";
                        break;
                    case 56:
                        label += "H 56T\n";
                        break;
                    case 56:
                        label += "H 56T\n";
                        break;
                    case 56:
                        label += "H 56T\n";
                        break;
                    case 56:
                        label += "H 56T\n";
                        break;
                    case 64:
                        label += "H 64Q\n";
                        break;
                    case 96:
                        label += "H 96R\n";
                        break;
                    case 96:
                        label += "H 96R\n";
                        break;
                    case 96:
                        label += "H 96R\n";
                        break;
                    case 96:
                        label += "H 96R\n";
                        break;
                    case 96:
                        label += "H 96R\n";
                        break;
                    case 96:
                        label += "H 96R\n";
                        break;
                    case 96:
                        label += "H 96R\n";
                        break;
                    case 96:
                        label += "H 96R\n";
                        break;
                    case 96:
                        label += "H 96R\n";
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
                    case 0:
                        label += "L 0S\n";
                        break;
                    case 0:
                        label += "L 0S\n";
                        break;
                    case 27:
                        label += "L 27Q\n";
                        break;
                    case 27:
                        label += "L 27Q\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 32:
                        label += "L 32N\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 94:
                        label += "L 94F\n";
                        break;
                    case 94:
                        label += "L 94F\n";
                        break;
                    case 94:
                        label += "L 94F\n";
                        break;
                    case 32:
                        label += "A 32Y\n";
                        break;
                    case 91:
                        label += "A 91Y\n";
                        break;
                    case 91:
                        label += "A 91Y\n";
                        break;
                    case 91:
                        label += "A 91Y\n";
                        break;
                    case 92:
                        label += "A 92Y\n";
                        break;
                    case 92:
                        label += "A 92Y\n";
                        break;
                    case 92:
                        label += "A 92Y\n";
                        break;
                    case 94:
                        label += "A 94T\n";
                        break;
                    case 94:
                        label += "A 94T\n";
                        break;
                    case 94:
                        label += "A 94T\n";
                        break;
                    case 96:
                        label += "A 96P\n";
                        break;
                    case 96:
                        label += "A 96P\n";
                        break;
                    case 96:
                        label += "A 96P\n";
                        break;
                    case 96:
                        label += "A 96P\n";
                        break;
                    case 96:
                        label += "A 96P\n";
                        break;
                    case 96:
                        label += "A 96P\n";
                        break;
                    case 31:
                        label += "B 31T\n";
                        break;
                    case 32:
                        label += "B 32Y\n";
                        break;
                    case 32:
                        label += "B 32Y\n";
                        break;
                    case 32:
                        label += "B 32Y\n";
                        break;
                    case 32:
                        label += "B 32Y\n";
                        break;
                    case 47:
                        label += "B 47W\n";
                        break;
                    case 47:
                        label += "B 47W\n";
                        break;
                    case 47:
                        label += "B 47W\n";
                        break;
                    case 47:
                        label += "B 47W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 52:
                        label += "B 52S\n";
                        break;
                    case 54:
                        label += "B 54S\n";
                        break;
                    case 54:
                        label += "B 54S\n";
                        break;
                    case 58:
                        label += "B 58D\n";
                        break;
                    case 95:
                        label += "B 95D\n";
                        break;
                    case 97:
                        label += "B 97R\n";
                        break;
                    case 97:
                        label += "B 97R\n";
                        break;
                    case 97:
                        label += "B 97R\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});