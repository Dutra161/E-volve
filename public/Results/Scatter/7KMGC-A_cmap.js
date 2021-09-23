
var myChart7KMGC_A = 0;
var ctx = document.getElementById('7KMGC-A').getContext('2d');
if (window.myChart7KMGC_A != 0){
    window.myChart7KMGC_A.destroy();
}
window.myChart7KMGC_A = new Chart(ctx, {
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
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 494, y: 31},
                {x: 482, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 482, y: 59},
                {x: 494, y: 102},
                {x: 494, y: 102},
                {x: 494, y: 102},
                {x: 493, y: 103},
                {x: 493, y: 104},
                {x: 485, y: 110},
                {x: 485, y: 110},
                {x: 488, y: 110},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 490, y: 101},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 483, y: 47},
                {x: 483, y: 47},
                {x: 490, y: 52},
                {x: 490, y: 52},
                {x: 490, y: 52},
                {x: 490, y: 52},
                {x: 490, y: 52},
                {x: 452, y: 55},
                {x: 452, y: 55},
                {x: 452, y: 55},
                {x: 470, y: 55},
                {x: 470, y: 55},
                {x: 490, y: 55},
                {x: 490, y: 55},
                {x: 492, y: 55},
                {x: 470, y: 57},
                {x: 490, y: 57},
                {x: 490, y: 57},
                {x: 483, y: 59},
                {x: 484, y: 101},
                {x: 490, y: 101},
                {x: 490, y: 101},
                {x: 490, y: 101},
                {x: 490, y: 101},
                {x: 490, y: 101},
                {x: 490, y: 101},
                {x: 490, y: 101},
                {x: 455, y: 103},
                {x: 456, y: 103},
                {x: 456, y: 103},
                {x: 484, y: 110},
                {x: 484, y: 110},
                {x: 484, y: 110},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KMGC-A"],
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
                        label += "7KMGCAC 449Y - ";
                        break;
                    case 449:
                        label += "7KMGCAC 449Y - ";
                        break;
                    case 449:
                        label += "7KMGCAC 449Y - ";
                        break;
                    case 449:
                        label += "7KMGCAC 449Y - ";
                        break;
                    case 449:
                        label += "7KMGCAC 449Y - ";
                        break;
                    case 494:
                        label += "7KMGCAC 494S - ";
                        break;
                    case 483:
                        label += "7KMGCAC 483V - ";
                        break;
                    case 483:
                        label += "7KMGCAC 483V - ";
                        break;
                    case 482:
                        label += "7KMGCAC 482G - ";
                        break;
                    case 484:
                        label += "7KMGCAC 484E - ";
                        break;
                    case 484:
                        label += "7KMGCAC 484E - ";
                        break;
                    case 484:
                        label += "7KMGCAC 484E - ";
                        break;
                    case 484:
                        label += "7KMGCAC 484E - ";
                        break;
                    case 484:
                        label += "7KMGCAC 484E - ";
                        break;
                    case 484:
                        label += "7KMGCAC 484E - ";
                        break;
                    case 484:
                        label += "7KMGCAC 484E - ";
                        break;
                    case 484:
                        label += "7KMGCAC 484E - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 452:
                        label += "7KMGCAC 452L - ";
                        break;
                    case 452:
                        label += "7KMGCAC 452L - ";
                        break;
                    case 452:
                        label += "7KMGCAC 452L - ";
                        break;
                    case 470:
                        label += "7KMGCAC 470T - ";
                        break;
                    case 470:
                        label += "7KMGCAC 470T - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 492:
                        label += "7KMGCAC 492L - ";
                        break;
                    case 470:
                        label += "7KMGCAC 470T - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 482:
                        label += "7KMGCAC 482G - ";
                        break;
                    case 483:
                        label += "7KMGCAC 483V - ";
                        break;
                    case 484:
                        label += "7KMGCAC 484E - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 490:
                        label += "7KMGCAC 490F - ";
                        break;
                    case 494:
                        label += "7KMGCAC 494S - ";
                        break;
                    case 494:
                        label += "7KMGCAC 494S - ";
                        break;
                    case 494:
                        label += "7KMGCAC 494S - ";
                        break;
                    case 455:
                        label += "7KMGCAC 455L - ";
                        break;
                    case 456:
                        label += "7KMGCAC 456F - ";
                        break;
                    case 456:
                        label += "7KMGCAC 456F - ";
                        break;
                    case 493:
                        label += "7KMGCAC 493Q - ";
                        break;
                    case 493:
                        label += "7KMGCAC 493Q - ";
                        break;
                    case 484:
                        label += "7KMGCAC 484E - ";
                        break;
                    case 484:
                        label += "7KMGCAC 484E - ";
                        break;
                    case 484:
                        label += "7KMGCAC 484E - ";
                        break;
                    case 485:
                        label += "7KMGCAC 485G - ";
                        break;
                    case 485:
                        label += "7KMGCAC 485G - ";
                        break;
                    case 488:
                        label += "7KMGCAC 488C - ";
                        break;}
                switch (labely){
                    case 31:
                        label += "A 31N\n";
                        break;
                    case 31:
                        label += "A 31N\n";
                        break;
                    case 31:
                        label += "A 31N\n";
                        break;
                    case 31:
                        label += "A 31N\n";
                        break;
                    case 31:
                        label += "A 31N\n";
                        break;
                    case 31:
                        label += "A 31N\n";
                        break;
                    case 47:
                        label += "A 47W\n";
                        break;
                    case 47:
                        label += "A 47W\n";
                        break;
                    case 50:
                        label += "A 50R\n";
                        break;
                    case 50:
                        label += "A 50R\n";
                        break;
                    case 50:
                        label += "A 50R\n";
                        break;
                    case 50:
                        label += "A 50R\n";
                        break;
                    case 50:
                        label += "A 50R\n";
                        break;
                    case 50:
                        label += "A 50R\n";
                        break;
                    case 50:
                        label += "A 50R\n";
                        break;
                    case 50:
                        label += "A 50R\n";
                        break;
                    case 50:
                        label += "A 50R\n";
                        break;
                    case 52:
                        label += "A 52I\n";
                        break;
                    case 52:
                        label += "A 52I\n";
                        break;
                    case 52:
                        label += "A 52I\n";
                        break;
                    case 52:
                        label += "A 52I\n";
                        break;
                    case 52:
                        label += "A 52I\n";
                        break;
                    case 55:
                        label += "A 55L\n";
                        break;
                    case 55:
                        label += "A 55L\n";
                        break;
                    case 55:
                        label += "A 55L\n";
                        break;
                    case 55:
                        label += "A 55L\n";
                        break;
                    case 55:
                        label += "A 55L\n";
                        break;
                    case 55:
                        label += "A 55L\n";
                        break;
                    case 55:
                        label += "A 55L\n";
                        break;
                    case 55:
                        label += "A 55L\n";
                        break;
                    case 57:
                        label += "A 57I\n";
                        break;
                    case 57:
                        label += "A 57I\n";
                        break;
                    case 57:
                        label += "A 57I\n";
                        break;
                    case 59:
                        label += "A 59N\n";
                        break;
                    case 59:
                        label += "A 59N\n";
                        break;
                    case 101:
                        label += "A 101Y\n";
                        break;
                    case 101:
                        label += "A 101Y\n";
                        break;
                    case 101:
                        label += "A 101Y\n";
                        break;
                    case 101:
                        label += "A 101Y\n";
                        break;
                    case 101:
                        label += "A 101Y\n";
                        break;
                    case 101:
                        label += "A 101Y\n";
                        break;
                    case 101:
                        label += "A 101Y\n";
                        break;
                    case 101:
                        label += "A 101Y\n";
                        break;
                    case 101:
                        label += "A 101Y\n";
                        break;
                    case 102:
                        label += "A 102E\n";
                        break;
                    case 102:
                        label += "A 102E\n";
                        break;
                    case 102:
                        label += "A 102E\n";
                        break;
                    case 103:
                        label += "A 103A\n";
                        break;
                    case 103:
                        label += "A 103A\n";
                        break;
                    case 103:
                        label += "A 103A\n";
                        break;
                    case 103:
                        label += "A 103A\n";
                        break;
                    case 104:
                        label += "A 104R\n";
                        break;
                    case 110:
                        label += "A 110Y\n";
                        break;
                    case 110:
                        label += "A 110Y\n";
                        break;
                    case 110:
                        label += "A 110Y\n";
                        break;
                    case 110:
                        label += "A 110Y\n";
                        break;
                    case 110:
                        label += "A 110Y\n";
                        break;
                    case 110:
                        label += "A 110Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});