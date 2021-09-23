
var myChart7L3N = 0;
var ctx = document.getElementById('7L3N').getContext('2d');
if (window.myChart7L3N != 0){
    window.myChart7L3N.destroy();
}
window.myChart7L3N = new Chart(ctx, {
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
            data: [{x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 403, y: 104},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 453, y: 104},
                {x: 482, y: 59},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 485, y: 110},
                {x: 485, y: 110},
                {x: 488, y: 110},
                {x: 493, y: 104},
                {x: 494, y: 31},
                {x: 494, y: 31},
                {x: 494, y: 102},
                {x: 494, y: 104},
                {x: 494, y: 104},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 486, y: 92},
                {x: 439, y: 107},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 490, y: 101},
                {x: 486, y: 32},
                {x: 486, y: 92},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 31},
                {x: 452, y: 54},
                {x: 452, y: 54},
                {x: 452, y: 54},
                {x: 452, y: 55},
                {x: 452, y: 55},
                {x: 452, y: 55},
                {x: 456, y: 103},
                {x: 456, y: 103},
                {x: 483, y: 47},
                {x: 483, y: 47},
                {x: 483, y: 59},
                {x: 484, y: 110},
                {x: 484, y: 110},
                {x: 484, y: 110},
                {x: 484, y: 110},
                {x: 484, y: 110},
                {x: 489, y: 103},
                {x: 490, y: 52},
                {x: 490, y: 52},
                {x: 490, y: 52},
                {x: 490, y: 55},
                {x: 490, y: 55},
                {x: 490, y: 101},
                {x: 490, y: 101},
                {x: 490, y: 101},
                {x: 490, y: 101},
                {x: 490, y: 101},
                {x: 490, y: 101},
                {x: 490, y: 101},
                {x: 490, y: 101},
                {x: 492, y: 55},
                {x: 492, y: 55},
                {x: 493, y: 102},
                {x: 493, y: 102},
                {x: 493, y: 104},
                {x: 481, y: 94},
                {x: 483, y: 94},
                {x: 483, y: 94},
                {x: 486, y: 32},
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
                {x: 440, y: 107},
                {x: 440, y: 107},
                {x: 440, y: 107},
                {x: 440, y: 107},
                {x: 440, y: 107},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7L3N Superpose"],
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
                        label += "7L3NBDB 403R - ";
                        break;
                    case 449:
                        label += "7L3NBDB 449Y - ";
                        break;
                    case 452:
                        label += "7L3NBDB 452L - ";
                        break;
                    case 452:
                        label += "7L3NBDB 452L - ";
                        break;
                    case 452:
                        label += "7L3NBDB 452L - ";
                        break;
                    case 452:
                        label += "7L3NBDB 452L - ";
                        break;
                    case 452:
                        label += "7L3NBDB 452L - ";
                        break;
                    case 452:
                        label += "7L3NBDB 452L - ";
                        break;
                    case 453:
                        label += "7L3NBDB 453Y - ";
                        break;
                    case 456:
                        label += "7L3NBDB 456F - ";
                        break;
                    case 456:
                        label += "7L3NBDB 456F - ";
                        break;
                    case 482:
                        label += "7L3NBDB 482G - ";
                        break;
                    case 483:
                        label += "7L3NBDB 483V - ";
                        break;
                    case 483:
                        label += "7L3NBDB 483V - ";
                        break;
                    case 483:
                        label += "7L3NBDB 483V - ";
                        break;
                    case 484:
                        label += "7L3NBDB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBDB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBDB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBDB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBDB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBDB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBDB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBDB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBDB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBDB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBDB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBDB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBDB 484E - ";
                        break;
                    case 485:
                        label += "7L3NBDB 485G - ";
                        break;
                    case 485:
                        label += "7L3NBDB 485G - ";
                        break;
                    case 488:
                        label += "7L3NBDB 488C - ";
                        break;
                    case 489:
                        label += "7L3NBDB 489Y - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 490:
                        label += "7L3NBDB 490F - ";
                        break;
                    case 492:
                        label += "7L3NBDB 492L - ";
                        break;
                    case 492:
                        label += "7L3NBDB 492L - ";
                        break;
                    case 493:
                        label += "7L3NBDB 493Q - ";
                        break;
                    case 493:
                        label += "7L3NBDB 493Q - ";
                        break;
                    case 493:
                        label += "7L3NBDB 493Q - ";
                        break;
                    case 493:
                        label += "7L3NBDB 493Q - ";
                        break;
                    case 494:
                        label += "7L3NBDB 494S - ";
                        break;
                    case 494:
                        label += "7L3NBDB 494S - ";
                        break;
                    case 494:
                        label += "7L3NBDB 494S - ";
                        break;
                    case 494:
                        label += "7L3NBDB 494S - ";
                        break;
                    case 494:
                        label += "7L3NBDB 494S - ";
                        break;
                    case 481:
                        label += "7L3NBEB 481N - ";
                        break;
                    case 483:
                        label += "7L3NBEB 483V - ";
                        break;
                    case 483:
                        label += "7L3NBEB 483V - ";
                        break;
                    case 484:
                        label += "7L3NBEB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBEB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBEB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBEB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBEB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBEB 484E - ";
                        break;
                    case 484:
                        label += "7L3NBEB 484E - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 486:
                        label += "7L3NBEB 486F - ";
                        break;
                    case 439:
                        label += "7L3NCDC 439N - ";
                        break;
                    case 440:
                        label += "7L3NCDC 440N - ";
                        break;
                    case 440:
                        label += "7L3NCDC 440N - ";
                        break;
                    case 440:
                        label += "7L3NCDC 440N - ";
                        break;
                    case 440:
                        label += "7L3NCDC 440N - ";
                        break;
                    case 440:
                        label += "7L3NCDC 440N - ";
                        break;}
                switch (labely){
                    case 104:
                        label += "D 104R\n";
                        break;
                    case 31:
                        label += "D 31N\n";
                        break;
                    case 54:
                        label += "D 54I\n";
                        break;
                    case 54:
                        label += "D 54I\n";
                        break;
                    case 54:
                        label += "D 54I\n";
                        break;
                    case 55:
                        label += "D 55L\n";
                        break;
                    case 55:
                        label += "D 55L\n";
                        break;
                    case 55:
                        label += "D 55L\n";
                        break;
                    case 104:
                        label += "D 104R\n";
                        break;
                    case 103:
                        label += "D 103A\n";
                        break;
                    case 103:
                        label += "D 103A\n";
                        break;
                    case 59:
                        label += "D 59N\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 59:
                        label += "D 59N\n";
                        break;
                    case 50:
                        label += "D 50R\n";
                        break;
                    case 50:
                        label += "D 50R\n";
                        break;
                    case 50:
                        label += "D 50R\n";
                        break;
                    case 50:
                        label += "D 50R\n";
                        break;
                    case 50:
                        label += "D 50R\n";
                        break;
                    case 50:
                        label += "D 50R\n";
                        break;
                    case 50:
                        label += "D 50R\n";
                        break;
                    case 50:
                        label += "D 50R\n";
                        break;
                    case 110:
                        label += "D 110Y\n";
                        break;
                    case 110:
                        label += "D 110Y\n";
                        break;
                    case 110:
                        label += "D 110Y\n";
                        break;
                    case 110:
                        label += "D 110Y\n";
                        break;
                    case 110:
                        label += "D 110Y\n";
                        break;
                    case 110:
                        label += "D 110Y\n";
                        break;
                    case 110:
                        label += "D 110Y\n";
                        break;
                    case 110:
                        label += "D 110Y\n";
                        break;
                    case 103:
                        label += "D 103A\n";
                        break;
                    case 52:
                        label += "D 52I\n";
                        break;
                    case 52:
                        label += "D 52I\n";
                        break;
                    case 52:
                        label += "D 52I\n";
                        break;
                    case 55:
                        label += "D 55L\n";
                        break;
                    case 55:
                        label += "D 55L\n";
                        break;
                    case 101:
                        label += "D 101Y\n";
                        break;
                    case 101:
                        label += "D 101Y\n";
                        break;
                    case 101:
                        label += "D 101Y\n";
                        break;
                    case 101:
                        label += "D 101Y\n";
                        break;
                    case 101:
                        label += "D 101Y\n";
                        break;
                    case 101:
                        label += "D 101Y\n";
                        break;
                    case 101:
                        label += "D 101Y\n";
                        break;
                    case 101:
                        label += "D 101Y\n";
                        break;
                    case 101:
                        label += "D 101Y\n";
                        break;
                    case 55:
                        label += "D 55L\n";
                        break;
                    case 55:
                        label += "D 55L\n";
                        break;
                    case 102:
                        label += "D 102E\n";
                        break;
                    case 102:
                        label += "D 102E\n";
                        break;
                    case 104:
                        label += "D 104R\n";
                        break;
                    case 104:
                        label += "D 104R\n";
                        break;
                    case 31:
                        label += "D 31N\n";
                        break;
                    case 31:
                        label += "D 31N\n";
                        break;
                    case 102:
                        label += "D 102E\n";
                        break;
                    case 104:
                        label += "D 104R\n";
                        break;
                    case 104:
                        label += "D 104R\n";
                        break;
                    case 94:
                        label += "E 94T\n";
                        break;
                    case 94:
                        label += "E 94T\n";
                        break;
                    case 94:
                        label += "E 94T\n";
                        break;
                    case 96:
                        label += "E 96R\n";
                        break;
                    case 96:
                        label += "E 96R\n";
                        break;
                    case 96:
                        label += "E 96R\n";
                        break;
                    case 96:
                        label += "E 96R\n";
                        break;
                    case 96:
                        label += "E 96R\n";
                        break;
                    case 96:
                        label += "E 96R\n";
                        break;
                    case 96:
                        label += "E 96R\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 92:
                        label += "E 92Y\n";
                        break;
                    case 92:
                        label += "E 92Y\n";
                        break;
                    case 92:
                        label += "E 92Y\n";
                        break;
                    case 92:
                        label += "E 92Y\n";
                        break;
                    case 92:
                        label += "E 92Y\n";
                        break;
                    case 92:
                        label += "E 92Y\n";
                        break;
                    case 92:
                        label += "E 92Y\n";
                        break;
                    case 92:
                        label += "E 92Y\n";
                        break;
                    case 92:
                        label += "E 92Y\n";
                        break;
                    case 92:
                        label += "E 92Y\n";
                        break;
                    case 92:
                        label += "E 92Y\n";
                        break;
                    case 92:
                        label += "E 92Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});