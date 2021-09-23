
var myChart7K8S = 0;
var ctx = document.getElementById('7K8S').getContext('2d');
if (window.myChart7K8S != 0){
    window.myChart7K8S.destroy();
}
window.myChart7K8S = new Chart(ctx, {
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
            data: [{x: 403, y: 100},
                {x: 484, y: 35},
                {x: 484, y: 35},
                {x: 484, y: 35},
                {x: 484, y: 35},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 403, y: 100},
                {x: 403, y: 100},
                {x: 403, y: 100},
                {x: 403, y: 100},
                {x: 403, y: 100},
                {x: 484, y: 35},
                {x: 484, y: 35},
                {x: 484, y: 35},
                {x: 484, y: 35},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 403, y: 100},
                {x: 484, y: 35},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 484, y: 95},
                {x: 484, y: 95},
                {x: 484, y: 95},
                {x: 484, y: 95},
                {x: 484, y: 95},
                {x: 484, y: 95},
                {x: 484, y: 95},
                {x: 484, y: 95},
                {x: 484, y: 95},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 481, y: 56},
                {x: 481, y: 58},
                {x: 484, y: 35},
                {x: 493, y: 97},
                {x: 493, y: 97},
                {x: 493, y: 98},
                {x: 493, y: 99},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 489, y: 32},
                {x: 493, y: 97},
                {x: 493, y: 97},
                {x: 493, y: 97},
                {x: 493, y: 98},
                {x: 493, y: 99},
                {x: 440, y: 53},
                {x: 484, y: 94},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 485, y: 32},
                {x: 486, y: 32},
                {x: 481, y: 56},
                {x: 481, y: 58},
                {x: 490, y: 97},
                {x: 490, y: 97},
                {x: 493, y: 97},
                {x: 493, y: 97},
                {x: 440, y: 52},
                {x: 440, y: 52},
                {x: 444, y: 63},
                {x: 484, y: 94},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 489, y: 32},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 32},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 32},
                {x: 486, y: 92},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 2},
                {x: 449, y: 2},
                {x: 449, y: 27},
                {x: 449, y: 27},
                {x: 470, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 449, y: 27},
                {x: 470, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 449, y: 2},
                {x: 449, y: 2},
                {x: 449, y: 27},
                {x: 449, y: 27},
                {x: 483, y: 56},
                {x: 484, y: 50},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 31},
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
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7K8S Superpose"],
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
                    case 403:
                        label += "7K8SAHA 403R - ";
                        break;
                    case 449:
                        label += "7K8SAHA 449Y - ";
                        break;
                    case 449:
                        label += "7K8SAHA 449Y - ";
                        break;
                    case 449:
                        label += "7K8SAHA 449Y - ";
                        break;
                    case 449:
                        label += "7K8SAHA 449Y - ";
                        break;
                    case 470:
                        label += "7K8SAHA 470T - ";
                        break;
                    case 481:
                        label += "7K8SAHA 481N - ";
                        break;
                    case 481:
                        label += "7K8SAHA 481N - ";
                        break;
                    case 484:
                        label += "7K8SAHA 484E - ";
                        break;
                    case 484:
                        label += "7K8SAHA 484E - ";
                        break;
                    case 484:
                        label += "7K8SAHA 484E - ";
                        break;
                    case 484:
                        label += "7K8SAHA 484E - ";
                        break;
                    case 484:
                        label += "7K8SAHA 484E - ";
                        break;
                    case 484:
                        label += "7K8SAHA 484E - ";
                        break;
                    case 484:
                        label += "7K8SAHA 484E - ";
                        break;
                    case 484:
                        label += "7K8SAHA 484E - ";
                        break;
                    case 490:
                        label += "7K8SAHA 490F - ";
                        break;
                    case 490:
                        label += "7K8SAHA 490F - ";
                        break;
                    case 490:
                        label += "7K8SAHA 490F - ";
                        break;
                    case 490:
                        label += "7K8SAHA 490F - ";
                        break;
                    case 490:
                        label += "7K8SAHA 490F - ";
                        break;
                    case 490:
                        label += "7K8SAHA 490F - ";
                        break;
                    case 493:
                        label += "7K8SAHA 493Q - ";
                        break;
                    case 493:
                        label += "7K8SAHA 493Q - ";
                        break;
                    case 493:
                        label += "7K8SAHA 493Q - ";
                        break;
                    case 493:
                        label += "7K8SAHA 493Q - ";
                        break;
                    case 484:
                        label += "7K8SALA 484E - ";
                        break;
                    case 484:
                        label += "7K8SALA 484E - ";
                        break;
                    case 484:
                        label += "7K8SALA 484E - ";
                        break;
                    case 484:
                        label += "7K8SALA 484E - ";
                        break;
                    case 484:
                        label += "7K8SALA 484E - ";
                        break;
                    case 484:
                        label += "7K8SALA 484E - ";
                        break;
                    case 484:
                        label += "7K8SALA 484E - ";
                        break;
                    case 486:
                        label += "7K8SALA 486F - ";
                        break;
                    case 486:
                        label += "7K8SALA 486F - ";
                        break;
                    case 486:
                        label += "7K8SALA 486F - ";
                        break;
                    case 486:
                        label += "7K8SALA 486F - ";
                        break;
                    case 486:
                        label += "7K8SALA 486F - ";
                        break;
                    case 486:
                        label += "7K8SALA 486F - ";
                        break;
                    case 486:
                        label += "7K8SALA 486F - ";
                        break;
                    case 486:
                        label += "7K8SALA 486F - ";
                        break;
                    case 489:
                        label += "7K8SALA 489Y - ";
                        break;
                    case 403:
                        label += "7K8SBOB 403R - ";
                        break;
                    case 403:
                        label += "7K8SBOB 403R - ";
                        break;
                    case 403:
                        label += "7K8SBOB 403R - ";
                        break;
                    case 403:
                        label += "7K8SBOB 403R - ";
                        break;
                    case 403:
                        label += "7K8SBOB 403R - ";
                        break;
                    case 449:
                        label += "7K8SBOB 449Y - ";
                        break;
                    case 470:
                        label += "7K8SBOB 470T - ";
                        break;
                    case 484:
                        label += "7K8SBOB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBOB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBOB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBOB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBOB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBOB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBOB 484E - ";
                        break;
                    case 490:
                        label += "7K8SBOB 490F - ";
                        break;
                    case 490:
                        label += "7K8SBOB 490F - ";
                        break;
                    case 490:
                        label += "7K8SBOB 490F - ";
                        break;
                    case 490:
                        label += "7K8SBOB 490F - ";
                        break;
                    case 490:
                        label += "7K8SBOB 490F - ";
                        break;
                    case 493:
                        label += "7K8SBOB 493Q - ";
                        break;
                    case 493:
                        label += "7K8SBOB 493Q - ";
                        break;
                    case 493:
                        label += "7K8SBOB 493Q - ";
                        break;
                    case 493:
                        label += "7K8SBOB 493Q - ";
                        break;
                    case 493:
                        label += "7K8SBOB 493Q - ";
                        break;
                    case 440:
                        label += "7K8SBNB 440N - ";
                        break;
                    case 484:
                        label += "7K8SBPB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBPB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBPB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBPB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBPB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBPB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBPB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBPB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBPB 484E - ";
                        break;
                    case 484:
                        label += "7K8SBPB 484E - ";
                        break;
                    case 485:
                        label += "7K8SBPB 485G - ";
                        break;
                    case 486:
                        label += "7K8SBPB 486F - ";
                        break;
                    case 486:
                        label += "7K8SBPB 486F - ";
                        break;
                    case 486:
                        label += "7K8SBPB 486F - ";
                        break;
                    case 486:
                        label += "7K8SBPB 486F - ";
                        break;
                    case 486:
                        label += "7K8SBPB 486F - ";
                        break;
                    case 486:
                        label += "7K8SBPB 486F - ";
                        break;
                    case 486:
                        label += "7K8SBPB 486F - ";
                        break;
                    case 486:
                        label += "7K8SBPB 486F - ";
                        break;
                    case 486:
                        label += "7K8SBPB 486F - ";
                        break;
                    case 403:
                        label += "7K8SCMC 403R - ";
                        break;
                    case 449:
                        label += "7K8SCMC 449Y - ";
                        break;
                    case 449:
                        label += "7K8SCMC 449Y - ";
                        break;
                    case 449:
                        label += "7K8SCMC 449Y - ";
                        break;
                    case 449:
                        label += "7K8SCMC 449Y - ";
                        break;
                    case 481:
                        label += "7K8SCMC 481N - ";
                        break;
                    case 481:
                        label += "7K8SCMC 481N - ";
                        break;
                    case 483:
                        label += "7K8SCMC 483V - ";
                        break;
                    case 484:
                        label += "7K8SCMC 484E - ";
                        break;
                    case 484:
                        label += "7K8SCMC 484E - ";
                        break;
                    case 484:
                        label += "7K8SCMC 484E - ";
                        break;
                    case 484:
                        label += "7K8SCMC 484E - ";
                        break;
                    case 490:
                        label += "7K8SCMC 490F - ";
                        break;
                    case 490:
                        label += "7K8SCMC 490F - ";
                        break;
                    case 490:
                        label += "7K8SCMC 490F - ";
                        break;
                    case 490:
                        label += "7K8SCMC 490F - ";
                        break;
                    case 490:
                        label += "7K8SCMC 490F - ";
                        break;
                    case 493:
                        label += "7K8SCMC 493Q - ";
                        break;
                    case 493:
                        label += "7K8SCMC 493Q - ";
                        break;
                    case 440:
                        label += "7K8SCLC 440N - ";
                        break;
                    case 440:
                        label += "7K8SCLC 440N - ";
                        break;
                    case 444:
                        label += "7K8SCLC 444K - ";
                        break;
                    case 484:
                        label += "7K8SCNC 484E - ";
                        break;
                    case 484:
                        label += "7K8SCNC 484E - ";
                        break;
                    case 484:
                        label += "7K8SCNC 484E - ";
                        break;
                    case 484:
                        label += "7K8SCNC 484E - ";
                        break;
                    case 484:
                        label += "7K8SCNC 484E - ";
                        break;
                    case 484:
                        label += "7K8SCNC 484E - ";
                        break;
                    case 484:
                        label += "7K8SCNC 484E - ";
                        break;
                    case 484:
                        label += "7K8SCNC 484E - ";
                        break;
                    case 484:
                        label += "7K8SCNC 484E - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 486:
                        label += "7K8SCNC 486F - ";
                        break;
                    case 489:
                        label += "7K8SCNC 489Y - ";
                        break;}
                switch (labely){
                    case 100:
                        label += "H 100D\n";
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
                    case 27:
                        label += "H 27F\n";
                        break;
                    case 31:
                        label += "H 31I\n";
                        break;
                    case 56:
                        label += "H 56N\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 35:
                        label += "H 35H\n";
                        break;
                    case 35:
                        label += "H 35H\n";
                        break;
                    case 35:
                        label += "H 35H\n";
                        break;
                    case 35:
                        label += "H 35H\n";
                        break;
                    case 95:
                        label += "H 95E\n";
                        break;
                    case 95:
                        label += "H 95E\n";
                        break;
                    case 95:
                        label += "H 95E\n";
                        break;
                    case 95:
                        label += "H 95E\n";
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
                    case 98:
                        label += "H 98P\n";
                        break;
                    case 99:
                        label += "H 99S\n";
                        break;
                    case 96:
                        label += "L 96R\n";
                        break;
                    case 96:
                        label += "L 96R\n";
                        break;
                    case 96:
                        label += "L 96R\n";
                        break;
                    case 96:
                        label += "L 96R\n";
                        break;
                    case 96:
                        label += "L 96R\n";
                        break;
                    case 96:
                        label += "L 96R\n";
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
                    case 100:
                        label += "O 100D\n";
                        break;
                    case 100:
                        label += "O 100D\n";
                        break;
                    case 100:
                        label += "O 100D\n";
                        break;
                    case 100:
                        label += "O 100D\n";
                        break;
                    case 100:
                        label += "O 100D\n";
                        break;
                    case 27:
                        label += "O 27F\n";
                        break;
                    case 31:
                        label += "O 31I\n";
                        break;
                    case 35:
                        label += "O 35H\n";
                        break;
                    case 35:
                        label += "O 35H\n";
                        break;
                    case 35:
                        label += "O 35H\n";
                        break;
                    case 35:
                        label += "O 35H\n";
                        break;
                    case 95:
                        label += "O 95E\n";
                        break;
                    case 95:
                        label += "O 95E\n";
                        break;
                    case 95:
                        label += "O 95E\n";
                        break;
                    case 31:
                        label += "O 31I\n";
                        break;
                    case 31:
                        label += "O 31I\n";
                        break;
                    case 31:
                        label += "O 31I\n";
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
                    case 99:
                        label += "O 99S\n";
                        break;
                    case 53:
                        label += "N 53S\n";
                        break;
                    case 94:
                        label += "P 94T\n";
                        break;
                    case 96:
                        label += "P 96R\n";
                        break;
                    case 96:
                        label += "P 96R\n";
                        break;
                    case 96:
                        label += "P 96R\n";
                        break;
                    case 96:
                        label += "P 96R\n";
                        break;
                    case 96:
                        label += "P 96R\n";
                        break;
                    case 96:
                        label += "P 96R\n";
                        break;
                    case 96:
                        label += "P 96R\n";
                        break;
                    case 96:
                        label += "P 96R\n";
                        break;
                    case 96:
                        label += "P 96R\n";
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
                    case 92:
                        label += "P 92Y\n";
                        break;
                    case 92:
                        label += "P 92Y\n";
                        break;
                    case 92:
                        label += "P 92Y\n";
                        break;
                    case 92:
                        label += "P 92Y\n";
                        break;
                    case 92:
                        label += "P 92Y\n";
                        break;
                    case 92:
                        label += "P 92Y\n";
                        break;
                    case 100:
                        label += "M 100D\n";
                        break;
                    case 2:
                        label += "M 2V\n";
                        break;
                    case 2:
                        label += "M 2V\n";
                        break;
                    case 27:
                        label += "M 27F\n";
                        break;
                    case 27:
                        label += "M 27F\n";
                        break;
                    case 56:
                        label += "M 56N\n";
                        break;
                    case 58:
                        label += "M 58Y\n";
                        break;
                    case 56:
                        label += "M 56N\n";
                        break;
                    case 35:
                        label += "M 35H\n";
                        break;
                    case 50:
                        label += "M 50V\n";
                        break;
                    case 95:
                        label += "M 95E\n";
                        break;
                    case 95:
                        label += "M 95E\n";
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
                    case 97:
                        label += "M 97R\n";
                        break;
                    case 97:
                        label += "M 97R\n";
                        break;
                    case 97:
                        label += "M 97R\n";
                        break;
                    case 97:
                        label += "M 97R\n";
                        break;
                    case 52:
                        label += "L 52S\n";
                        break;
                    case 52:
                        label += "L 52S\n";
                        break;
                    case 63:
                        label += "L 63S\n";
                        break;
                    case 94:
                        label += "N 94T\n";
                        break;
                    case 96:
                        label += "N 96R\n";
                        break;
                    case 96:
                        label += "N 96R\n";
                        break;
                    case 96:
                        label += "N 96R\n";
                        break;
                    case 96:
                        label += "N 96R\n";
                        break;
                    case 96:
                        label += "N 96R\n";
                        break;
                    case 96:
                        label += "N 96R\n";
                        break;
                    case 96:
                        label += "N 96R\n";
                        break;
                    case 96:
                        label += "N 96R\n";
                        break;
                    case 32:
                        label += "N 32Y\n";
                        break;
                    case 32:
                        label += "N 32Y\n";
                        break;
                    case 32:
                        label += "N 32Y\n";
                        break;
                    case 32:
                        label += "N 32Y\n";
                        break;
                    case 92:
                        label += "N 92Y\n";
                        break;
                    case 92:
                        label += "N 92Y\n";
                        break;
                    case 92:
                        label += "N 92Y\n";
                        break;
                    case 92:
                        label += "N 92Y\n";
                        break;
                    case 92:
                        label += "N 92Y\n";
                        break;
                    case 92:
                        label += "N 92Y\n";
                        break;
                    case 92:
                        label += "N 92Y\n";
                        break;
                    case 92:
                        label += "N 92Y\n";
                        break;
                    case 92:
                        label += "N 92Y\n";
                        break;
                    case 92:
                        label += "N 92Y\n";
                        break;
                    case 92:
                        label += "N 92Y\n";
                        break;
                    case 92:
                        label += "N 92Y\n";
                        break;
                    case 32:
                        label += "N 32Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});