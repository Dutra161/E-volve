
var myChart7CHCR_A = 0;
var ctx = document.getElementById('7CHCR-A').getContext('2d');
if (window.myChart7CHCR_A != 0){
    window.myChart7CHCR_A.destroy();
}
window.myChart7CHCR_A = new Chart(ctx, {
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
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 484, y: 106},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 346, y: 75},
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
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 452, y: 28},
                {x: 452, y: 30},
                {x: 452, y: 31},
                {x: 452, y: 31},
                {x: 483, y: 105},
                {x: 490, y: 31},
                {x: 490, y: 31},
                {x: 490, y: 102},
                {x: 490, y: 102},
                {x: 490, y: 102},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CHCR-A"],
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
                        break;}
                switch (labely){
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
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});