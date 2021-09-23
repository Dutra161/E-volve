
var myChart7K8T = 0;
var ctx = document.getElementById('7K8T').getContext('2d');
if (window.myChart7K8T != 0){
    window.myChart7K8T.destroy();
}
window.myChart7K8T = new Chart(ctx, {
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
            data: [{x: 405, y: 24},
                {x: 405, y: 24},
                {x: 405, y: 24},
                {x: 484, y: 96},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 473, y: 56},
                {x: 480, y: 58},
                {x: 481, y: 56},
                {x: 481, y: 58},
                {x: 481, y: 58},
                {x: 492, y: 97},
                {x: 493, y: 97},
                {x: 493, y: 98},
                {x: 505, y: 100},
                {x: 484, y: 96},
                {x: 485, y: 91},
                {x: 485, y: 92},
                {x: 453, y: 99},
                {x: 481, y: 56},
                {x: 481, y: 56},
                {x: 481, y: 58},
                {x: 492, y: 97},
                {x: 494, y: 32},
                {x: 494, y: 99},
                {x: 375, y: 69},
                {x: 376, y: 67},
                {x: 378, y: 67},
                {x: 408, y: 20},
                {x: 503, y: 24},
                {x: 484, y: 32},
                {x: 481, y: 56},
                {x: 489, y: 97},
                {x: 490, y: 97},
                {x: 490, y: 97},
                {x: 493, y: 97},
                {x: 483, y: 96},
                {x: 486, y: 91},
                {x: 486, y: 92},
                {x: 487, y: 32},
                {x: 440, y: 52},
                {x: 440, y: 52},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 92},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 2},
                {x: 449, y: 2},
                {x: 449, y: 27},
                {x: 449, y: 27},
                {x: 452, y: 31},
                {x: 452, y: 31},
                {x: 481, y: 58},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 493, y: 97},
                {x: 484, y: 94},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 452, y: 31},
                {x: 452, y: 31},
                {x: 452, y: 31},
                {x: 481, y: 56},
                {x: 490, y: 31},
                {x: 408, y: 72},
                {x: 449, y: 2},
                {x: 449, y: 2},
                {x: 449, y: 27},
                {x: 452, y: 28},
                {x: 470, y: 31},
                {x: 483, y: 50},
                {x: 483, y: 50},
                {x: 483, y: 50},
                {x: 483, y: 50},
                {x: 483, y: 58},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 492, y: 31},
                {x: 492, y: 31},
                {x: 492, y: 31},
                {x: 493, y: 97},
                {x: 483, y: 94},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7K8T Superpose"],
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
                    case 449:
                        label += "7K8TAOA 449Y - ";
                        break;
                    case 449:
                        label += "7K8TAOA 449Y - ";
                        break;
                    case 449:
                        label += "7K8TAOA 449Y - ";
                        break;
                    case 449:
                        label += "7K8TAOA 449Y - ";
                        break;
                    case 452:
                        label += "7K8TAOA 452L - ";
                        break;
                    case 452:
                        label += "7K8TAOA 452L - ";
                        break;
                    case 473:
                        label += "7K8TAOA 473Y - ";
                        break;
                    case 480:
                        label += "7K8TAOA 480C - ";
                        break;
                    case 481:
                        label += "7K8TAOA 481N - ";
                        break;
                    case 481:
                        label += "7K8TAOA 481N - ";
                        break;
                    case 481:
                        label += "7K8TAOA 481N - ";
                        break;
                    case 481:
                        label += "7K8TAOA 481N - ";
                        break;
                    case 490:
                        label += "7K8TAOA 490F - ";
                        break;
                    case 490:
                        label += "7K8TAOA 490F - ";
                        break;
                    case 492:
                        label += "7K8TAOA 492L - ";
                        break;
                    case 493:
                        label += "7K8TAOA 493Q - ";
                        break;
                    case 493:
                        label += "7K8TAOA 493Q - ";
                        break;
                    case 493:
                        label += "7K8TAOA 493Q - ";
                        break;
                    case 505:
                        label += "7K8TAOA 505Y - ";
                        break;
                    case 484:
                        label += "7K8TAPA 484E - ";
                        break;
                    case 484:
                        label += "7K8TAPA 484E - ";
                        break;
                    case 485:
                        label += "7K8TAPA 485G - ";
                        break;
                    case 485:
                        label += "7K8TAPA 485G - ";
                        break;
                    case 486:
                        label += "7K8TAPA 486F - ";
                        break;
                    case 486:
                        label += "7K8TAPA 486F - ";
                        break;
                    case 486:
                        label += "7K8TAPA 486F - ";
                        break;
                    case 486:
                        label += "7K8TAPA 486F - ";
                        break;
                    case 486:
                        label += "7K8TAPA 486F - ";
                        break;
                    case 486:
                        label += "7K8TAPA 486F - ";
                        break;
                    case 486:
                        label += "7K8TAPA 486F - ";
                        break;
                    case 486:
                        label += "7K8TAPA 486F - ";
                        break;
                    case 452:
                        label += "7K8TBMB 452L - ";
                        break;
                    case 452:
                        label += "7K8TBMB 452L - ";
                        break;
                    case 452:
                        label += "7K8TBMB 452L - ";
                        break;
                    case 453:
                        label += "7K8TBMB 453Y - ";
                        break;
                    case 481:
                        label += "7K8TBMB 481N - ";
                        break;
                    case 481:
                        label += "7K8TBMB 481N - ";
                        break;
                    case 481:
                        label += "7K8TBMB 481N - ";
                        break;
                    case 481:
                        label += "7K8TBMB 481N - ";
                        break;
                    case 490:
                        label += "7K8TBMB 490F - ";
                        break;
                    case 492:
                        label += "7K8TBMB 492L - ";
                        break;
                    case 494:
                        label += "7K8TBMB 494S - ";
                        break;
                    case 494:
                        label += "7K8TBMB 494S - ";
                        break;
                    case 375:
                        label += "7K8TBLB 375S - ";
                        break;
                    case 376:
                        label += "7K8TBLB 376T - ";
                        break;
                    case 378:
                        label += "7K8TBLB 378K - ";
                        break;
                    case 405:
                        label += "7K8TBLB 405D - ";
                        break;
                    case 405:
                        label += "7K8TBLB 405D - ";
                        break;
                    case 405:
                        label += "7K8TBLB 405D - ";
                        break;
                    case 408:
                        label += "7K8TBLB 408R - ";
                        break;
                    case 408:
                        label += "7K8TBLB 408R - ";
                        break;
                    case 503:
                        label += "7K8TBLB 503V - ";
                        break;
                    case 484:
                        label += "7K8TBNB 484E - ";
                        break;
                    case 484:
                        label += "7K8TBNB 484E - ";
                        break;
                    case 449:
                        label += "7K8TCHC 449Y - ";
                        break;
                    case 449:
                        label += "7K8TCHC 449Y - ";
                        break;
                    case 449:
                        label += "7K8TCHC 449Y - ";
                        break;
                    case 452:
                        label += "7K8TCHC 452L - ";
                        break;
                    case 470:
                        label += "7K8TCHC 470T - ";
                        break;
                    case 481:
                        label += "7K8TCHC 481N - ";
                        break;
                    case 483:
                        label += "7K8TCHC 483V - ";
                        break;
                    case 483:
                        label += "7K8TCHC 483V - ";
                        break;
                    case 483:
                        label += "7K8TCHC 483V - ";
                        break;
                    case 483:
                        label += "7K8TCHC 483V - ";
                        break;
                    case 483:
                        label += "7K8TCHC 483V - ";
                        break;
                    case 489:
                        label += "7K8TCHC 489Y - ";
                        break;
                    case 490:
                        label += "7K8TCHC 490F - ";
                        break;
                    case 490:
                        label += "7K8TCHC 490F - ";
                        break;
                    case 490:
                        label += "7K8TCHC 490F - ";
                        break;
                    case 490:
                        label += "7K8TCHC 490F - ";
                        break;
                    case 490:
                        label += "7K8TCHC 490F - ";
                        break;
                    case 490:
                        label += "7K8TCHC 490F - ";
                        break;
                    case 490:
                        label += "7K8TCHC 490F - ";
                        break;
                    case 490:
                        label += "7K8TCHC 490F - ";
                        break;
                    case 490:
                        label += "7K8TCHC 490F - ";
                        break;
                    case 492:
                        label += "7K8TCHC 492L - ";
                        break;
                    case 492:
                        label += "7K8TCHC 492L - ";
                        break;
                    case 492:
                        label += "7K8TCHC 492L - ";
                        break;
                    case 493:
                        label += "7K8TCHC 493Q - ";
                        break;
                    case 493:
                        label += "7K8TCHC 493Q - ";
                        break;
                    case 483:
                        label += "7K8TCLC 483V - ";
                        break;
                    case 483:
                        label += "7K8TCLC 483V - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 486:
                        label += "7K8TCLC 486F - ";
                        break;
                    case 487:
                        label += "7K8TCLC 487N - ";
                        break;
                    case 440:
                        label += "7K8TCPC 440N - ";
                        break;
                    case 440:
                        label += "7K8TCPC 440N - ";
                        break;}
                switch (labely){
                    case 2:
                        label += "O 2V\n";
                        break;
                    case 2:
                        label += "O 2V\n";
                        break;
                    case 27:
                        label += "O 27F\n";
                        break;
                    case 27:
                        label += "O 27F\n";
                        break;
                    case 31:
                        label += "O 31I\n";
                        break;
                    case 31:
                        label += "O 31I\n";
                        break;
                    case 56:
                        label += "O 56N\n";
                        break;
                    case 58:
                        label += "O 58Y\n";
                        break;
                    case 56:
                        label += "O 56N\n";
                        break;
                    case 58:
                        label += "O 58Y\n";
                        break;
                    case 58:
                        label += "O 58Y\n";
                        break;
                    case 58:
                        label += "O 58Y\n";
                        break;
                    case 31:
                        label += "O 31I\n";
                        break;
                    case 31:
                        label += "O 31I\n";
                        break;
                    case 97:
                        label += "O 97R\n";
                        break;
                    case 97:
                        label += "O 97R\n";
                        break;
                    case 97:
                        label += "O 97R\n";
                        break;
                    case 98:
                        label += "O 98P\n";
                        break;
                    case 100:
                        label += "O 100D\n";
                        break;
                    case 94:
                        label += "P 94T\n";
                        break;
                    case 96:
                        label += "P 96R\n";
                        break;
                    case 91:
                        label += "P 91S\n";
                        break;
                    case 92:
                        label += "P 92Y\n";
                        break;
                    case 32:
                        label += "P 32Y\n";
                        break;
                    case 32:
                        label += "P 32Y\n";
                        break;
                    case 32:
                        label += "P 32Y\n";
                        break;
                    case 32:
                        label += "P 32Y\n";
                        break;
                    case 32:
                        label += "P 32Y\n";
                        break;
                    case 32:
                        label += "P 32Y\n";
                        break;
                    case 32:
                        label += "P 32Y\n";
                        break;
                    case 32:
                        label += "P 32Y\n";
                        break;
                    case 31:
                        label += "M 31I\n";
                        break;
                    case 31:
                        label += "M 31I\n";
                        break;
                    case 31:
                        label += "M 31I\n";
                        break;
                    case 99:
                        label += "M 99S\n";
                        break;
                    case 56:
                        label += "M 56N\n";
                        break;
                    case 56:
                        label += "M 56N\n";
                        break;
                    case 56:
                        label += "M 56N\n";
                        break;
                    case 58:
                        label += "M 58Y\n";
                        break;
                    case 31:
                        label += "M 31I\n";
                        break;
                    case 97:
                        label += "M 97R\n";
                        break;
                    case 32:
                        label += "M 32Y\n";
                        break;
                    case 99:
                        label += "M 99S\n";
                        break;
                    case 69:
                        label += "L 69T\n";
                        break;
                    case 67:
                        label += "L 67S\n";
                        break;
                    case 67:
                        label += "L 67S\n";
                        break;
                    case 24:
                        label += "L 24R\n";
                        break;
                    case 24:
                        label += "L 24R\n";
                        break;
                    case 24:
                        label += "L 24R\n";
                        break;
                    case 20:
                        label += "L 20T\n";
                        break;
                    case 72:
                        label += "L 72T\n";
                        break;
                    case 24:
                        label += "L 24R\n";
                        break;
                    case 32:
                        label += "N 32Y\n";
                        break;
                    case 96:
                        label += "N 96R\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 27:
                        label += "H 27F\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 31:
                        label += "H 31I\n";
                        break;
                    case 56:
                        label += "H 56N\n";
                        break;
                    case 50:
                        label += "H 50V\n";
                        break;
                    case 50:
                        label += "H 50V\n";
                        break;
                    case 50:
                        label += "H 50V\n";
                        break;
                    case 50:
                        label += "H 50V\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 31:
                        label += "H 31I\n";
                        break;
                    case 31:
                        label += "H 31I\n";
                        break;
                    case 31:
                        label += "H 31I\n";
                        break;
                    case 31:
                        label += "H 31I\n";
                        break;
                    case 31:
                        label += "H 31I\n";
                        break;
                    case 31:
                        label += "H 31I\n";
                        break;
                    case 31:
                        label += "H 31I\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 31:
                        label += "H 31I\n";
                        break;
                    case 31:
                        label += "H 31I\n";
                        break;
                    case 31:
                        label += "H 31I\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 94:
                        label += "L 94T\n";
                        break;
                    case 96:
                        label += "L 96R\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 91:
                        label += "L 91S\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 52:
                        label += "P 52S\n";
                        break;
                    case 52:
                        label += "P 52S\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});