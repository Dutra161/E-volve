
var myChart6XC3 = 0;
var ctx = document.getElementById('6XC3').getContext('2d');
if (window.myChart6XC3 != 0){
    window.myChart6XC3.destroy();
}
window.myChart6XC3 = new Chart(ctx, {
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
            data: [{x: 386, y: 55},
                {x: 386, y: 55},
                {x: 417, y: 97},
                {x: 417, y: 97},
                {x: 378, y: 54},
                {x: 378, y: 54},
                {x: 378, y: 56},
                {x: 378, y: 56},
                {x: 386, y: 101},
                {x: 386, y: 101},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 381, y: 32},
                {x: 386, y: 55},
                {x: 502, y: 28},
                {x: 496, y: 30},
                {x: 498, y: 30},
                {x: 501, y: 30},
                {x: 494, y: 32},
                {x: 496, y: 32},
                {x: 498, y: 67},
                {x: 498, y: 67},
                {x: 505, y: 90},
                {x: 505, y: 91},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 453, y: 92},
                {x: 505, y: 92},
                {x: 415, y: 94},
                {x: 487, y: 26},
                {x: 475, y: 28},
                {x: 476, y: 28},
                {x: 473, y: 31},
                {x: 475, y: 32},
                {x: 455, y: 33},
                {x: 421, y: 53},
                {x: 421, y: 53},
                {x: 457, y: 53},
                {x: 421, y: 54},
                {x: 460, y: 54},
                {x: 420, y: 56},
                {x: 420, y: 56},
                {x: 487, y: 94},
                {x: 487, y: 94},
                {x: 489, y: 94},
                {x: 417, y: 97},
                {x: 453, y: 97},
                {x: 493, y: 99},
                {x: 370, y: 28},
                {x: 377, y: 52},
                {x: 377, y: 52},
                {x: 378, y: 54},
                {x: 378, y: 54},
                {x: 378, y: 56},
                {x: 383, y: 96},
                {x: 383, y: 96},
                {x: 379, y: 98},
                {x: 381, y: 98},
                {x: 382, y: 100},
                {x: 386, y: 101},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 505, y: 32},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 382, y: 28},
                {x: 392, y: 28},
                {x: 392, y: 28},
                {x: 430, y: 28},
                {x: 386, y: 49},
                {x: 386, y: 49},
                {x: 386, y: 49},
                {x: 386, y: 49},
                {x: 390, y: 50},
                {x: 390, y: 50},
                {x: 505, y: 2},
                {x: 505, y: 29},
                {x: 505, y: 29},
                {x: 505, y: 29},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 405, y: 94},
                {x: 408, y: 94},
                {x: 408, y: 94},
                {x: 409, y: 94},
                {x: 409, y: 94},
                {x: 409, y: 94},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 417, y: 33},
                {x: 421, y: 33},
                {x: 455, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 417, y: 52},
                {x: 421, y: 52},
                {x: 456, y: 96},
                {x: 456, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 455, y: 97},
                {x: 455, y: 97},
                {x: 455, y: 97},
                {x: 455, y: 98},
                {x: 493, y: 98},
                {x: 493, y: 98},
                {x: 456, y: 99},
                {x: 486, y: 102},
                {x: 377, y: 30},
                {x: 377, y: 30},
                {x: 377, y: 30},
                {x: 369, y: 31},
                {x: 377, y: 31},
                {x: 377, y: 31},
                {x: 377, y: 31},
                {x: 377, y: 31},
                {x: 377, y: 31},
                {x: 377, y: 31},
                {x: 377, y: 31},
                {x: 384, y: 31},
                {x: 378, y: 33},
                {x: 378, y: 33},
                {x: 378, y: 52},
                {x: 378, y: 52},
                {x: 378, y: 52},
                {x: 378, y: 52},
                {x: 378, y: 52},
                {x: 378, y: 52},
                {x: 378, y: 52},
                {x: 378, y: 52},
                {x: 380, y: 98},
                {x: 380, y: 98},
                {x: 380, y: 98},
                {x: 380, y: 98},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6XC3 Superpose"],
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
                    case 382:
                        label += "6XC3CLC 382V - ";
                        break;
                    case 392:
                        label += "6XC3CLC 392F - ";
                        break;
                    case 392:
                        label += "6XC3CLC 392F - ";
                        break;
                    case 430:
                        label += "6XC3CLC 430T - ";
                        break;
                    case 381:
                        label += "6XC3CLC 381G - ";
                        break;
                    case 386:
                        label += "6XC3CLC 386K - ";
                        break;
                    case 386:
                        label += "6XC3CLC 386K - ";
                        break;
                    case 386:
                        label += "6XC3CLC 386K - ";
                        break;
                    case 386:
                        label += "6XC3CLC 386K - ";
                        break;
                    case 390:
                        label += "6XC3CLC 390L - ";
                        break;
                    case 390:
                        label += "6XC3CLC 390L - ";
                        break;
                    case 386:
                        label += "6XC3CLC 386K - ";
                        break;
                    case 386:
                        label += "6XC3CLC 386K - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 502:
                        label += "6XC3CAC 502G - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 496:
                        label += "6XC3CAC 496G - ";
                        break;
                    case 498:
                        label += "6XC3CAC 498Q - ";
                        break;
                    case 501:
                        label += "6XC3CAC 501N - ";
                        break;
                    case 494:
                        label += "6XC3CAC 494S - ";
                        break;
                    case 496:
                        label += "6XC3CAC 496G - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 498:
                        label += "6XC3CAC 498Q - ";
                        break;
                    case 498:
                        label += "6XC3CAC 498Q - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 403:
                        label += "6XC3CAC 403R - ";
                        break;
                    case 403:
                        label += "6XC3CAC 403R - ";
                        break;
                    case 453:
                        label += "6XC3CAC 453Y - ";
                        break;
                    case 505:
                        label += "6XC3CAC 505Y - ";
                        break;
                    case 405:
                        label += "6XC3CAC 405D - ";
                        break;
                    case 408:
                        label += "6XC3CAC 408R - ";
                        break;
                    case 408:
                        label += "6XC3CAC 408R - ";
                        break;
                    case 409:
                        label += "6XC3CAC 409Q - ";
                        break;
                    case 409:
                        label += "6XC3CAC 409Q - ";
                        break;
                    case 409:
                        label += "6XC3CAC 409Q - ";
                        break;
                    case 415:
                        label += "6XC3CAC 415T - ";
                        break;
                    case 486:
                        label += "6XC3CBC 486F - ";
                        break;
                    case 486:
                        label += "6XC3CBC 486F - ";
                        break;
                    case 486:
                        label += "6XC3CBC 486F - ";
                        break;
                    case 486:
                        label += "6XC3CBC 486F - ";
                        break;
                    case 486:
                        label += "6XC3CBC 486F - ";
                        break;
                    case 487:
                        label += "6XC3CBC 487N - ";
                        break;
                    case 475:
                        label += "6XC3CBC 475A - ";
                        break;
                    case 476:
                        label += "6XC3CBC 476G - ";
                        break;
                    case 473:
                        label += "6XC3CBC 473Y - ";
                        break;
                    case 475:
                        label += "6XC3CBC 475A - ";
                        break;
                    case 417:
                        label += "6XC3CBC 417K - ";
                        break;
                    case 421:
                        label += "6XC3CBC 421Y - ";
                        break;
                    case 455:
                        label += "6XC3CBC 455L - ";
                        break;
                    case 455:
                        label += "6XC3CBC 455L - ";
                        break;
                    case 456:
                        label += "6XC3CBC 456F - ";
                        break;
                    case 456:
                        label += "6XC3CBC 456F - ";
                        break;
                    case 456:
                        label += "6XC3CBC 456F - ";
                        break;
                    case 417:
                        label += "6XC3CBC 417K - ";
                        break;
                    case 421:
                        label += "6XC3CBC 421Y - ";
                        break;
                    case 421:
                        label += "6XC3CBC 421Y - ";
                        break;
                    case 421:
                        label += "6XC3CBC 421Y - ";
                        break;
                    case 457:
                        label += "6XC3CBC 457R - ";
                        break;
                    case 421:
                        label += "6XC3CBC 421Y - ";
                        break;
                    case 460:
                        label += "6XC3CBC 460N - ";
                        break;
                    case 420:
                        label += "6XC3CBC 420D - ";
                        break;
                    case 420:
                        label += "6XC3CBC 420D - ";
                        break;
                    case 487:
                        label += "6XC3CBC 487N - ";
                        break;
                    case 487:
                        label += "6XC3CBC 487N - ";
                        break;
                    case 489:
                        label += "6XC3CBC 489Y - ";
                        break;
                    case 456:
                        label += "6XC3CBC 456F - ";
                        break;
                    case 456:
                        label += "6XC3CBC 456F - ";
                        break;
                    case 489:
                        label += "6XC3CBC 489Y - ";
                        break;
                    case 489:
                        label += "6XC3CBC 489Y - ";
                        break;
                    case 489:
                        label += "6XC3CBC 489Y - ";
                        break;
                    case 417:
                        label += "6XC3CBC 417K - ";
                        break;
                    case 417:
                        label += "6XC3CBC 417K - ";
                        break;
                    case 453:
                        label += "6XC3CBC 453Y - ";
                        break;
                    case 455:
                        label += "6XC3CBC 455L - ";
                        break;
                    case 455:
                        label += "6XC3CBC 455L - ";
                        break;
                    case 455:
                        label += "6XC3CBC 455L - ";
                        break;
                    case 455:
                        label += "6XC3CBC 455L - ";
                        break;
                    case 493:
                        label += "6XC3CBC 493Q - ";
                        break;
                    case 493:
                        label += "6XC3CBC 493Q - ";
                        break;
                    case 456:
                        label += "6XC3CBC 456F - ";
                        break;
                    case 493:
                        label += "6XC3CBC 493Q - ";
                        break;
                    case 486:
                        label += "6XC3CBC 486F - ";
                        break;
                    case 370:
                        label += "6XC3CHC 370N - ";
                        break;
                    case 377:
                        label += "6XC3CHC 377F - ";
                        break;
                    case 377:
                        label += "6XC3CHC 377F - ";
                        break;
                    case 377:
                        label += "6XC3CHC 377F - ";
                        break;
                    case 369:
                        label += "6XC3CHC 369Y - ";
                        break;
                    case 377:
                        label += "6XC3CHC 377F - ";
                        break;
                    case 377:
                        label += "6XC3CHC 377F - ";
                        break;
                    case 377:
                        label += "6XC3CHC 377F - ";
                        break;
                    case 377:
                        label += "6XC3CHC 377F - ";
                        break;
                    case 377:
                        label += "6XC3CHC 377F - ";
                        break;
                    case 377:
                        label += "6XC3CHC 377F - ";
                        break;
                    case 377:
                        label += "6XC3CHC 377F - ";
                        break;
                    case 384:
                        label += "6XC3CHC 384P - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 377:
                        label += "6XC3CHC 377F - ";
                        break;
                    case 377:
                        label += "6XC3CHC 377F - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 378:
                        label += "6XC3CHC 378K - ";
                        break;
                    case 383:
                        label += "6XC3CHC 383S - ";
                        break;
                    case 383:
                        label += "6XC3CHC 383S - ";
                        break;
                    case 379:
                        label += "6XC3CHC 379C - ";
                        break;
                    case 380:
                        label += "6XC3CHC 380Y - ";
                        break;
                    case 380:
                        label += "6XC3CHC 380Y - ";
                        break;
                    case 380:
                        label += "6XC3CHC 380Y - ";
                        break;
                    case 380:
                        label += "6XC3CHC 380Y - ";
                        break;
                    case 381:
                        label += "6XC3CHC 381G - ";
                        break;
                    case 382:
                        label += "6XC3CHC 382V - ";
                        break;
                    case 386:
                        label += "6XC3CHC 386K - ";
                        break;
                    case 386:
                        label += "6XC3CHC 386K - ";
                        break;}
                switch (labely){
                    case 28:
                        label += "L 28I\n";
                        break;
                    case 28:
                        label += "L 28I\n";
                        break;
                    case 28:
                        label += "L 28I\n";
                        break;
                    case 28:
                        label += "L 28I\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 50:
                        label += "L 50W\n";
                        break;
                    case 50:
                        label += "L 50W\n";
                        break;
                    case 55:
                        label += "L 55E\n";
                        break;
                    case 55:
                        label += "L 55E\n";
                        break;
                    case 2:
                        label += "A 2I\n";
                        break;
                    case 28:
                        label += "A 28G\n";
                        break;
                    case 29:
                        label += "A 29I\n";
                        break;
                    case 29:
                        label += "A 29I\n";
                        break;
                    case 29:
                        label += "A 29I\n";
                        break;
                    case 30:
                        label += "A 30S\n";
                        break;
                    case 30:
                        label += "A 30S\n";
                        break;
                    case 30:
                        label += "A 30S\n";
                        break;
                    case 32:
                        label += "A 32Y\n";
                        break;
                    case 32:
                        label += "A 32Y\n";
                        break;
                    case 32:
                        label += "A 32Y\n";
                        break;
                    case 32:
                        label += "A 32Y\n";
                        break;
                    case 32:
                        label += "A 32Y\n";
                        break;
                    case 32:
                        label += "A 32Y\n";
                        break;
                    case 32:
                        label += "A 32Y\n";
                        break;
                    case 32:
                        label += "A 32Y\n";
                        break;
                    case 32:
                        label += "A 32Y\n";
                        break;
                    case 67:
                        label += "A 67S\n";
                        break;
                    case 67:
                        label += "A 67S\n";
                        break;
                    case 90:
                        label += "A 90Q\n";
                        break;
                    case 91:
                        label += "A 91L\n";
                        break;
                    case 92:
                        label += "A 92N\n";
                        break;
                    case 92:
                        label += "A 92N\n";
                        break;
                    case 92:
                        label += "A 92N\n";
                        break;
                    case 92:
                        label += "A 92N\n";
                        break;
                    case 94:
                        label += "A 94Y\n";
                        break;
                    case 94:
                        label += "A 94Y\n";
                        break;
                    case 94:
                        label += "A 94Y\n";
                        break;
                    case 94:
                        label += "A 94Y\n";
                        break;
                    case 94:
                        label += "A 94Y\n";
                        break;
                    case 94:
                        label += "A 94Y\n";
                        break;
                    case 94:
                        label += "A 94Y\n";
                        break;
                    case 2:
                        label += "B 2V\n";
                        break;
                    case 2:
                        label += "B 2V\n";
                        break;
                    case 2:
                        label += "B 2V\n";
                        break;
                    case 2:
                        label += "B 2V\n";
                        break;
                    case 2:
                        label += "B 2V\n";
                        break;
                    case 26:
                        label += "B 26G\n";
                        break;
                    case 28:
                        label += "B 28T\n";
                        break;
                    case 28:
                        label += "B 28T\n";
                        break;
                    case 31:
                        label += "B 31S\n";
                        break;
                    case 32:
                        label += "B 32N\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 52:
                        label += "B 52Y\n";
                        break;
                    case 52:
                        label += "B 52Y\n";
                        break;
                    case 53:
                        label += "B 53S\n";
                        break;
                    case 53:
                        label += "B 53S\n";
                        break;
                    case 53:
                        label += "B 53S\n";
                        break;
                    case 54:
                        label += "B 54G\n";
                        break;
                    case 54:
                        label += "B 54G\n";
                        break;
                    case 56:
                        label += "B 56S\n";
                        break;
                    case 56:
                        label += "B 56S\n";
                        break;
                    case 94:
                        label += "B 94R\n";
                        break;
                    case 94:
                        label += "B 94R\n";
                        break;
                    case 94:
                        label += "B 94R\n";
                        break;
                    case 96:
                        label += "B 96L\n";
                        break;
                    case 96:
                        label += "B 96L\n";
                        break;
                    case 96:
                        label += "B 96L\n";
                        break;
                    case 96:
                        label += "B 96L\n";
                        break;
                    case 96:
                        label += "B 96L\n";
                        break;
                    case 97:
                        label += "B 97D\n";
                        break;
                    case 97:
                        label += "B 97D\n";
                        break;
                    case 97:
                        label += "B 97D\n";
                        break;
                    case 97:
                        label += "B 97D\n";
                        break;
                    case 97:
                        label += "B 97D\n";
                        break;
                    case 97:
                        label += "B 97D\n";
                        break;
                    case 98:
                        label += "B 98V\n";
                        break;
                    case 98:
                        label += "B 98V\n";
                        break;
                    case 98:
                        label += "B 98V\n";
                        break;
                    case 99:
                        label += "B 99Y\n";
                        break;
                    case 99:
                        label += "B 99Y\n";
                        break;
                    case 102:
                        label += "B 102V\n";
                        break;
                    case 28:
                        label += "H 28G\n";
                        break;
                    case 30:
                        label += "H 30I\n";
                        break;
                    case 30:
                        label += "H 30I\n";
                        break;
                    case 30:
                        label += "H 30I\n";
                        break;
                    case 31:
                        label += "H 31T\n";
                        break;
                    case 31:
                        label += "H 31T\n";
                        break;
                    case 31:
                        label += "H 31T\n";
                        break;
                    case 31:
                        label += "H 31T\n";
                        break;
                    case 31:
                        label += "H 31T\n";
                        break;
                    case 31:
                        label += "H 31T\n";
                        break;
                    case 31:
                        label += "H 31T\n";
                        break;
                    case 31:
                        label += "H 31T\n";
                        break;
                    case 31:
                        label += "H 31T\n";
                        break;
                    case 33:
                        label += "H 33W\n";
                        break;
                    case 33:
                        label += "H 33W\n";
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
                    case 52:
                        label += "H 52Y\n";
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
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 54:
                        label += "H 54D\n";
                        break;
                    case 54:
                        label += "H 54D\n";
                        break;
                    case 56:
                        label += "H 56E\n";
                        break;
                    case 56:
                        label += "H 56E\n";
                        break;
                    case 96:
                        label += "H 96S\n";
                        break;
                    case 96:
                        label += "H 96S\n";
                        break;
                    case 98:
                        label += "H 98I\n";
                        break;
                    case 98:
                        label += "H 98I\n";
                        break;
                    case 98:
                        label += "H 98I\n";
                        break;
                    case 98:
                        label += "H 98I\n";
                        break;
                    case 98:
                        label += "H 98I\n";
                        break;
                    case 98:
                        label += "H 98I\n";
                        break;
                    case 100:
                        label += "H 100T\n";
                        break;
                    case 101:
                        label += "H 101D\n";
                        break;
                    case 101:
                        label += "H 101D\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});