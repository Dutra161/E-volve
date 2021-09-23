
var myChart7CHH = 0;
var ctx = document.getElementById('7CHH').getContext('2d');
if (window.myChart7CHH != 0){
    window.myChart7CHH.destroy();
}
window.myChart7CHH = new Chart(ctx, {
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
            data: [{x: 484, y: 100},
                {x: 484, y: 100},
                {x: 484, y: 100},
                {x: 484, y: 100},
                {x: 484, y: 100},
                {x: 484, y: 100},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 100},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 100},
                {x: 484, y: 100},
                {x: 484, y: 100},
                {x: 484, y: 100},
                {x: 484, y: 100},
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
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 484, y: 106},
                {x: 346, y: 76},
                {x: 484, y: 106},
                {x: 484, y: 106},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 449, y: 26},
                {x: 482, y: 104},
                {x: 482, y: 105},
                {x: 482, y: 106},
                {x: 484, y: 100},
                {x: 484, y: 100},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 106},
                {x: 449, y: 26},
                {x: 450, y: 30},
                {x: 482, y: 104},
                {x: 482, y: 105},
                {x: 482, y: 106},
                {x: 484, y: 100},
                {x: 484, y: 100},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 450, y: 75},
                {x: 450, y: 77},
                {x: 482, y: 104},
                {x: 482, y: 105},
                {x: 482, y: 106},
                {x: 484, y: 100},
                {x: 484, y: 100},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 479, y: 35},
                {x: 481, y: 33},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 449, y: 28},
                {x: 452, y: 31},
                {x: 483, y: 105},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 483, y: 37},
                {x: 449, y: 28},
                {x: 449, y: 28},
                {x: 483, y: 105},
                {x: 490, y: 31},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 481, y: 33},
                {x: 452, y: 28},
                {x: 452, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 481, y: 33},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CHH Superpose"],
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
                        label += "7CHHADA 449Y - ";
                        break;
                    case 449:
                        label += "7CHHADA 449Y - ";
                        break;
                    case 452:
                        label += "7CHHADA 452L - ";
                        break;
                    case 482:
                        label += "7CHHADA 482G - ";
                        break;
                    case 482:
                        label += "7CHHADA 482G - ";
                        break;
                    case 482:
                        label += "7CHHADA 482G - ";
                        break;
                    case 483:
                        label += "7CHHADA 483V - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 484:
                        label += "7CHHADA 484E - ";
                        break;
                    case 490:
                        label += "7CHHADA 490F - ";
                        break;
                    case 490:
                        label += "7CHHADA 490F - ";
                        break;
                    case 490:
                        label += "7CHHADA 490F - ";
                        break;
                    case 483:
                        label += "7CHHAEA 483V - ";
                        break;
                    case 346:
                        label += "7CHHBGB 346R - ";
                        break;
                    case 449:
                        label += "7CHHBGB 449Y - ";
                        break;
                    case 449:
                        label += "7CHHBGB 449Y - ";
                        break;
                    case 449:
                        label += "7CHHBGB 449Y - ";
                        break;
                    case 450:
                        label += "7CHHBGB 450N - ";
                        break;
                    case 482:
                        label += "7CHHBGB 482G - ";
                        break;
                    case 482:
                        label += "7CHHBGB 482G - ";
                        break;
                    case 482:
                        label += "7CHHBGB 482G - ";
                        break;
                    case 483:
                        label += "7CHHBGB 483V - ";
                        break;
                    case 484:
                        label += "7CHHBGB 484E - ";
                        break;
                    case 484:
                        label += "7CHHBGB 484E - ";
                        break;
                    case 484:
                        label += "7CHHBGB 484E - ";
                        break;
                    case 484:
                        label += "7CHHBGB 484E - ";
                        break;
                    case 484:
                        label += "7CHHBGB 484E - ";
                        break;
                    case 484:
                        label += "7CHHBGB 484E - ";
                        break;
                    case 484:
                        label += "7CHHBGB 484E - ";
                        break;
                    case 484:
                        label += "7CHHBGB 484E - ";
                        break;
                    case 484:
                        label += "7CHHBGB 484E - ";
                        break;
                    case 484:
                        label += "7CHHBGB 484E - ";
                        break;
                    case 484:
                        label += "7CHHBGB 484E - ";
                        break;
                    case 484:
                        label += "7CHHBGB 484E - ";
                        break;
                    case 490:
                        label += "7CHHBGB 490F - ";
                        break;
                    case 490:
                        label += "7CHHBGB 490F - ";
                        break;
                    case 490:
                        label += "7CHHBGB 490F - ";
                        break;
                    case 490:
                        label += "7CHHBGB 490F - ";
                        break;
                    case 481:
                        label += "7CHHBHB 481N - ";
                        break;
                    case 450:
                        label += "7CHHCJC 450N - ";
                        break;
                    case 450:
                        label += "7CHHCJC 450N - ";
                        break;
                    case 452:
                        label += "7CHHCJC 452L - ";
                        break;
                    case 452:
                        label += "7CHHCJC 452L - ";
                        break;
                    case 482:
                        label += "7CHHCJC 482G - ";
                        break;
                    case 482:
                        label += "7CHHCJC 482G - ";
                        break;
                    case 482:
                        label += "7CHHCJC 482G - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 484:
                        label += "7CHHCJC 484E - ";
                        break;
                    case 490:
                        label += "7CHHCJC 490F - ";
                        break;
                    case 490:
                        label += "7CHHCJC 490F - ";
                        break;
                    case 490:
                        label += "7CHHCJC 490F - ";
                        break;
                    case 490:
                        label += "7CHHCJC 490F - ";
                        break;
                    case 490:
                        label += "7CHHCJC 490F - ";
                        break;
                    case 490:
                        label += "7CHHCJC 490F - ";
                        break;
                    case 490:
                        label += "7CHHCJC 490F - ";
                        break;
                    case 490:
                        label += "7CHHCJC 490F - ";
                        break;
                    case 490:
                        label += "7CHHCJC 490F - ";
                        break;
                    case 490:
                        label += "7CHHCJC 490F - ";
                        break;
                    case 479:
                        label += "7CHHCKC 479P - ";
                        break;
                    case 481:
                        label += "7CHHCKC 481N - ";
                        break;
                    case 481:
                        label += "7CHHCKC 481N - ";
                        break;}
                switch (labely){
                    case 26:
                        label += "D 26G\n";
                        break;
                    case 28:
                        label += "D 28A\n";
                        break;
                    case 31:
                        label += "D 31T\n";
                        break;
                    case 104:
                        label += "D 104L\n";
                        break;
                    case 105:
                        label += "D 105Y\n";
                        break;
                    case 106:
                        label += "D 106D\n";
                        break;
                    case 105:
                        label += "D 105Y\n";
                        break;
                    case 100:
                        label += "D 100R\n";
                        break;
                    case 100:
                        label += "D 100R\n";
                        break;
                    case 100:
                        label += "D 100R\n";
                        break;
                    case 100:
                        label += "D 100R\n";
                        break;
                    case 100:
                        label += "D 100R\n";
                        break;
                    case 100:
                        label += "D 100R\n";
                        break;
                    case 100:
                        label += "D 100R\n";
                        break;
                    case 100:
                        label += "D 100R\n";
                        break;
                    case 102:
                        label += "D 102R\n";
                        break;
                    case 102:
                        label += "D 102R\n";
                        break;
                    case 102:
                        label += "D 102R\n";
                        break;
                    case 102:
                        label += "D 102R\n";
                        break;
                    case 102:
                        label += "D 102R\n";
                        break;
                    case 102:
                        label += "D 102R\n";
                        break;
                    case 102:
                        label += "D 102R\n";
                        break;
                    case 102:
                        label += "D 102R\n";
                        break;
                    case 106:
                        label += "D 106D\n";
                        break;
                    case 106:
                        label += "D 106D\n";
                        break;
                    case 102:
                        label += "D 102R\n";
                        break;
                    case 102:
                        label += "D 102R\n";
                        break;
                    case 102:
                        label += "D 102R\n";
                        break;
                    case 37:
                        label += "E 37Y\n";
                        break;
                    case 76:
                        label += "G 76K\n";
                        break;
                    case 26:
                        label += "G 26G\n";
                        break;
                    case 28:
                        label += "G 28A\n";
                        break;
                    case 28:
                        label += "G 28A\n";
                        break;
                    case 30:
                        label += "G 30T\n";
                        break;
                    case 104:
                        label += "G 104L\n";
                        break;
                    case 105:
                        label += "G 105Y\n";
                        break;
                    case 106:
                        label += "G 106D\n";
                        break;
                    case 105:
                        label += "G 105Y\n";
                        break;
                    case 100:
                        label += "G 100R\n";
                        break;
                    case 100:
                        label += "G 100R\n";
                        break;
                    case 100:
                        label += "G 100R\n";
                        break;
                    case 102:
                        label += "G 102R\n";
                        break;
                    case 102:
                        label += "G 102R\n";
                        break;
                    case 102:
                        label += "G 102R\n";
                        break;
                    case 102:
                        label += "G 102R\n";
                        break;
                    case 102:
                        label += "G 102R\n";
                        break;
                    case 102:
                        label += "G 102R\n";
                        break;
                    case 102:
                        label += "G 102R\n";
                        break;
                    case 102:
                        label += "G 102R\n";
                        break;
                    case 106:
                        label += "G 106D\n";
                        break;
                    case 31:
                        label += "G 31T\n";
                        break;
                    case 102:
                        label += "G 102R\n";
                        break;
                    case 102:
                        label += "G 102R\n";
                        break;
                    case 102:
                        label += "G 102R\n";
                        break;
                    case 33:
                        label += "H 33N\n";
                        break;
                    case 75:
                        label += "J 75S\n";
                        break;
                    case 77:
                        label += "J 77N\n";
                        break;
                    case 28:
                        label += "J 28A\n";
                        break;
                    case 31:
                        label += "J 31T\n";
                        break;
                    case 104:
                        label += "J 104L\n";
                        break;
                    case 105:
                        label += "J 105Y\n";
                        break;
                    case 106:
                        label += "J 106D\n";
                        break;
                    case 100:
                        label += "J 100R\n";
                        break;
                    case 100:
                        label += "J 100R\n";
                        break;
                    case 100:
                        label += "J 100R\n";
                        break;
                    case 100:
                        label += "J 100R\n";
                        break;
                    case 100:
                        label += "J 100R\n";
                        break;
                    case 100:
                        label += "J 100R\n";
                        break;
                    case 100:
                        label += "J 100R\n";
                        break;
                    case 100:
                        label += "J 100R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 106:
                        label += "J 106D\n";
                        break;
                    case 31:
                        label += "J 31T\n";
                        break;
                    case 31:
                        label += "J 31T\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 102:
                        label += "J 102R\n";
                        break;
                    case 35:
                        label += "K 35Y\n";
                        break;
                    case 33:
                        label += "K 33N\n";
                        break;
                    case 33:
                        label += "K 33N\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});