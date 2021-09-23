
var myChart6ZFO = 0;
var ctx = document.getElementById('6ZFO').getContext('2d');
if (window.myChart6ZFO != 0){
    window.myChart6ZFO.destroy();
}
window.myChart6ZFO = new Chart(ctx, {
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
            data: [{x: 386, y: 33},
                {x: 386, y: 99},
                {x: 386, y: 99},
                {x: 386, y: 33},
                {x: 386, y: 99},
                {x: 386, y: 99},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 369, y: 57},
                {x: 375, y: 65},
                {x: 383, y: 104},
                {x: 383, y: 104},
                {x: 383, y: 106},
                {x: 385, y: 33},
                {x: 385, y: 106},
                {x: 385, y: 106},
                {x: 386, y: 99},
                {x: 386, y: 103},
                {x: 386, y: 105},
                {x: 388, y: 53},
                {x: 379, y: 94},
                {x: 381, y: 32},
                {x: 381, y: 92},
                {x: 382, y: 94},
                {x: 383, y: 94},
                {x: 383, y: 94},
                {x: 412, y: 27},
                {x: 427, y: 92},
                {x: 429, y: 92},
                {x: 429, y: 92},
                {x: 369, y: 57},
                {x: 375, y: 65},
                {x: 383, y: 104},
                {x: 383, y: 104},
                {x: 383, y: 106},
                {x: 385, y: 33},
                {x: 385, y: 33},
                {x: 385, y: 106},
                {x: 385, y: 106},
                {x: 386, y: 99},
                {x: 386, y: 103},
                {x: 386, y: 105},
                {x: 388, y: 53},
                {x: 379, y: 94},
                {x: 379, y: 94},
                {x: 381, y: 32},
                {x: 381, y: 92},
                {x: 382, y: 94},
                {x: 383, y: 94},
                {x: 412, y: 27},
                {x: 427, y: 92},
                {x: 429, y: 92},
                {x: 429, y: 92},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 377, y: 59},
                {x: 380, y: 92},
                {x: 377, y: 59},
                {x: 380, y: 92},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 369, y: 57},
                {x: 377, y: 59},
                {x: 377, y: 59},
                {x: 377, y: 59},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 385, y: 57},
                {x: 385, y: 59},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 517, y: 104},
                {x: 517, y: 104},
                {x: 377, y: 95},
                {x: 377, y: 95},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 384, y: 95},
                {x: 384, y: 95},
                {x: 384, y: 95},
                {x: 412, y: 92},
                {x: 377, y: 59},
                {x: 377, y: 59},
                {x: 377, y: 59},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 385, y: 57},
                {x: 385, y: 59},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 517, y: 104},
                {x: 517, y: 104},
                {x: 377, y: 95},
                {x: 377, y: 95},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 384, y: 95},
                {x: 412, y: 92},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6ZFO Superpose"],
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
                        label += "6ZFOABA 369Y - ";
                        break;
                    case 369:
                        label += "6ZFOABA 369Y - ";
                        break;
                    case 375:
                        label += "6ZFOABA 375S - ";
                        break;
                    case 377:
                        label += "6ZFOABA 377F - ";
                        break;
                    case 377:
                        label += "6ZFOABA 377F - ";
                        break;
                    case 377:
                        label += "6ZFOABA 377F - ";
                        break;
                    case 377:
                        label += "6ZFOABA 377F - ";
                        break;
                    case 382:
                        label += "6ZFOABA 382V - ";
                        break;
                    case 382:
                        label += "6ZFOABA 382V - ";
                        break;
                    case 383:
                        label += "6ZFOABA 383S - ";
                        break;
                    case 383:
                        label += "6ZFOABA 383S - ";
                        break;
                    case 383:
                        label += "6ZFOABA 383S - ";
                        break;
                    case 384:
                        label += "6ZFOABA 384P - ";
                        break;
                    case 384:
                        label += "6ZFOABA 384P - ";
                        break;
                    case 384:
                        label += "6ZFOABA 384P - ";
                        break;
                    case 385:
                        label += "6ZFOABA 385T - ";
                        break;
                    case 385:
                        label += "6ZFOABA 385T - ";
                        break;
                    case 385:
                        label += "6ZFOABA 385T - ";
                        break;
                    case 385:
                        label += "6ZFOABA 385T - ";
                        break;
                    case 385:
                        label += "6ZFOABA 385T - ";
                        break;
                    case 386:
                        label += "6ZFOABA 386K - ";
                        break;
                    case 386:
                        label += "6ZFOABA 386K - ";
                        break;
                    case 386:
                        label += "6ZFOABA 386K - ";
                        break;
                    case 386:
                        label += "6ZFOABA 386K - ";
                        break;
                    case 386:
                        label += "6ZFOABA 386K - ";
                        break;
                    case 388:
                        label += "6ZFOABA 388N - ";
                        break;
                    case 390:
                        label += "6ZFOABA 390L - ";
                        break;
                    case 390:
                        label += "6ZFOABA 390L - ";
                        break;
                    case 390:
                        label += "6ZFOABA 390L - ";
                        break;
                    case 390:
                        label += "6ZFOABA 390L - ";
                        break;
                    case 390:
                        label += "6ZFOABA 390L - ";
                        break;
                    case 390:
                        label += "6ZFOABA 390L - ";
                        break;
                    case 390:
                        label += "6ZFOABA 390L - ";
                        break;
                    case 390:
                        label += "6ZFOABA 390L - ";
                        break;
                    case 392:
                        label += "6ZFOABA 392F - ";
                        break;
                    case 392:
                        label += "6ZFOABA 392F - ";
                        break;
                    case 392:
                        label += "6ZFOABA 392F - ";
                        break;
                    case 392:
                        label += "6ZFOABA 392F - ";
                        break;
                    case 392:
                        label += "6ZFOABA 392F - ";
                        break;
                    case 392:
                        label += "6ZFOABA 392F - ";
                        break;
                    case 517:
                        label += "6ZFOABA 517L - ";
                        break;
                    case 517:
                        label += "6ZFOABA 517L - ";
                        break;
                    case 377:
                        label += "6ZFOACA 377F - ";
                        break;
                    case 377:
                        label += "6ZFOACA 377F - ";
                        break;
                    case 379:
                        label += "6ZFOACA 379C - ";
                        break;
                    case 380:
                        label += "6ZFOACA 380Y - ";
                        break;
                    case 380:
                        label += "6ZFOACA 380Y - ";
                        break;
                    case 380:
                        label += "6ZFOACA 380Y - ";
                        break;
                    case 380:
                        label += "6ZFOACA 380Y - ";
                        break;
                    case 380:
                        label += "6ZFOACA 380Y - ";
                        break;
                    case 380:
                        label += "6ZFOACA 380Y - ";
                        break;
                    case 380:
                        label += "6ZFOACA 380Y - ";
                        break;
                    case 381:
                        label += "6ZFOACA 381G - ";
                        break;
                    case 381:
                        label += "6ZFOACA 381G - ";
                        break;
                    case 382:
                        label += "6ZFOACA 382V - ";
                        break;
                    case 383:
                        label += "6ZFOACA 383S - ";
                        break;
                    case 383:
                        label += "6ZFOACA 383S - ";
                        break;
                    case 384:
                        label += "6ZFOACA 384P - ";
                        break;
                    case 384:
                        label += "6ZFOACA 384P - ";
                        break;
                    case 384:
                        label += "6ZFOACA 384P - ";
                        break;
                    case 412:
                        label += "6ZFOACA 412P - ";
                        break;
                    case 412:
                        label += "6ZFOACA 412P - ";
                        break;
                    case 427:
                        label += "6ZFOACA 427D - ";
                        break;
                    case 429:
                        label += "6ZFOACA 429F - ";
                        break;
                    case 429:
                        label += "6ZFOACA 429F - ";
                        break;
                    case 369:
                        label += "6ZFOEHE 369Y - ";
                        break;
                    case 375:
                        label += "6ZFOEHE 375S - ";
                        break;
                    case 377:
                        label += "6ZFOEHE 377F - ";
                        break;
                    case 377:
                        label += "6ZFOEHE 377F - ";
                        break;
                    case 377:
                        label += "6ZFOEHE 377F - ";
                        break;
                    case 377:
                        label += "6ZFOEHE 377F - ";
                        break;
                    case 382:
                        label += "6ZFOEHE 382V - ";
                        break;
                    case 382:
                        label += "6ZFOEHE 382V - ";
                        break;
                    case 383:
                        label += "6ZFOEHE 383S - ";
                        break;
                    case 383:
                        label += "6ZFOEHE 383S - ";
                        break;
                    case 383:
                        label += "6ZFOEHE 383S - ";
                        break;
                    case 384:
                        label += "6ZFOEHE 384P - ";
                        break;
                    case 384:
                        label += "6ZFOEHE 384P - ";
                        break;
                    case 384:
                        label += "6ZFOEHE 384P - ";
                        break;
                    case 384:
                        label += "6ZFOEHE 384P - ";
                        break;
                    case 384:
                        label += "6ZFOEHE 384P - ";
                        break;
                    case 384:
                        label += "6ZFOEHE 384P - ";
                        break;
                    case 385:
                        label += "6ZFOEHE 385T - ";
                        break;
                    case 385:
                        label += "6ZFOEHE 385T - ";
                        break;
                    case 385:
                        label += "6ZFOEHE 385T - ";
                        break;
                    case 385:
                        label += "6ZFOEHE 385T - ";
                        break;
                    case 385:
                        label += "6ZFOEHE 385T - ";
                        break;
                    case 385:
                        label += "6ZFOEHE 385T - ";
                        break;
                    case 386:
                        label += "6ZFOEHE 386K - ";
                        break;
                    case 386:
                        label += "6ZFOEHE 386K - ";
                        break;
                    case 386:
                        label += "6ZFOEHE 386K - ";
                        break;
                    case 386:
                        label += "6ZFOEHE 386K - ";
                        break;
                    case 386:
                        label += "6ZFOEHE 386K - ";
                        break;
                    case 388:
                        label += "6ZFOEHE 388N - ";
                        break;
                    case 390:
                        label += "6ZFOEHE 390L - ";
                        break;
                    case 390:
                        label += "6ZFOEHE 390L - ";
                        break;
                    case 390:
                        label += "6ZFOEHE 390L - ";
                        break;
                    case 390:
                        label += "6ZFOEHE 390L - ";
                        break;
                    case 390:
                        label += "6ZFOEHE 390L - ";
                        break;
                    case 392:
                        label += "6ZFOEHE 392F - ";
                        break;
                    case 392:
                        label += "6ZFOEHE 392F - ";
                        break;
                    case 392:
                        label += "6ZFOEHE 392F - ";
                        break;
                    case 392:
                        label += "6ZFOEHE 392F - ";
                        break;
                    case 392:
                        label += "6ZFOEHE 392F - ";
                        break;
                    case 392:
                        label += "6ZFOEHE 392F - ";
                        break;
                    case 517:
                        label += "6ZFOEHE 517L - ";
                        break;
                    case 517:
                        label += "6ZFOEHE 517L - ";
                        break;
                    case 377:
                        label += "6ZFOELE 377F - ";
                        break;
                    case 377:
                        label += "6ZFOELE 377F - ";
                        break;
                    case 379:
                        label += "6ZFOELE 379C - ";
                        break;
                    case 379:
                        label += "6ZFOELE 379C - ";
                        break;
                    case 380:
                        label += "6ZFOELE 380Y - ";
                        break;
                    case 380:
                        label += "6ZFOELE 380Y - ";
                        break;
                    case 380:
                        label += "6ZFOELE 380Y - ";
                        break;
                    case 380:
                        label += "6ZFOELE 380Y - ";
                        break;
                    case 380:
                        label += "6ZFOELE 380Y - ";
                        break;
                    case 381:
                        label += "6ZFOELE 381G - ";
                        break;
                    case 381:
                        label += "6ZFOELE 381G - ";
                        break;
                    case 382:
                        label += "6ZFOELE 382V - ";
                        break;
                    case 383:
                        label += "6ZFOELE 383S - ";
                        break;
                    case 384:
                        label += "6ZFOELE 384P - ";
                        break;
                    case 412:
                        label += "6ZFOELE 412P - ";
                        break;
                    case 412:
                        label += "6ZFOELE 412P - ";
                        break;
                    case 427:
                        label += "6ZFOELE 427D - ";
                        break;
                    case 429:
                        label += "6ZFOELE 429F - ";
                        break;
                    case 429:
                        label += "6ZFOELE 429F - ";
                        break;}
                switch (labely){
                    case 57:
                        label += "B 57N\n";
                        break;
                    case 57:
                        label += "B 57N\n";
                        break;
                    case 65:
                        label += "B 65K\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 106:
                        label += "B 106Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 33:
                        label += "B 33D\n";
                        break;
                    case 57:
                        label += "B 57N\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 106:
                        label += "B 106Y\n";
                        break;
                    case 106:
                        label += "B 106Y\n";
                        break;
                    case 33:
                        label += "B 33D\n";
                        break;
                    case 99:
                        label += "B 99D\n";
                        break;
                    case 99:
                        label += "B 99D\n";
                        break;
                    case 103:
                        label += "B 103L\n";
                        break;
                    case 105:
                        label += "B 105V\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 95:
                        label += "C 95L\n";
                        break;
                    case 95:
                        label += "C 95L\n";
                        break;
                    case 94:
                        label += "C 94T\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 32:
                        label += "C 32Y\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 94:
                        label += "C 94T\n";
                        break;
                    case 94:
                        label += "C 94T\n";
                        break;
                    case 94:
                        label += "C 94T\n";
                        break;
                    case 95:
                        label += "C 95L\n";
                        break;
                    case 95:
                        label += "C 95L\n";
                        break;
                    case 95:
                        label += "C 95L\n";
                        break;
                    case 27:
                        label += "C 27Q\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 57:
                        label += "H 57N\n";
                        break;
                    case 65:
                        label += "H 65K\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 106:
                        label += "H 106Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 33:
                        label += "H 33D\n";
                        break;
                    case 33:
                        label += "H 33D\n";
                        break;
                    case 57:
                        label += "H 57N\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 106:
                        label += "H 106Y\n";
                        break;
                    case 106:
                        label += "H 106Y\n";
                        break;
                    case 33:
                        label += "H 33D\n";
                        break;
                    case 99:
                        label += "H 99D\n";
                        break;
                    case 99:
                        label += "H 99D\n";
                        break;
                    case 103:
                        label += "H 103L\n";
                        break;
                    case 105:
                        label += "H 105V\n";
                        break;
                    case 53:
                        label += "H 53Y\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 95:
                        label += "L 95L\n";
                        break;
                    case 95:
                        label += "L 95L\n";
                        break;
                    case 94:
                        label += "L 94T\n";
                        break;
                    case 94:
                        label += "L 94T\n";
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
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 94:
                        label += "L 94T\n";
                        break;
                    case 94:
                        label += "L 94T\n";
                        break;
                    case 95:
                        label += "L 95L\n";
                        break;
                    case 27:
                        label += "L 27Q\n";
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
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});