
var myChart7C8V = 0;
var ctx = document.getElementById('7C8V').getContext('2d');
if (window.myChart7C8V != 0){
    window.myChart7C8V.destroy();
}
window.myChart7C8V = new Chart(ctx, {
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
            data: [],
            backgroundColor: ['rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)',],
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
            data: [{x: 493, y: 31},
                {x: 453, y: 33},
                {x: 453, y: 33},
                {x: 493, y: 33},
                {x: 493, y: 33},
                {x: 494, y: 33},
                {x: 446, y: 37},
                {x: 447, y: 37},
                {x: 493, y: 53},
                {x: 493, y: 53},
                {x: 501, y: 59},
                {x: 501, y: 59},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 449, y: 35},
                {x: 456, y: 54},
                {x: 489, y: 54},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 490, y: 32},
                {x: 490, y: 32},
                {x: 490, y: 32},
                {x: 490, y: 32},
                {x: 490, y: 32},
                {x: 449, y: 35},
                {x: 449, y: 35},
                {x: 449, y: 35},
                {x: 449, y: 35},
                {x: 449, y: 35},
                {x: 449, y: 35},
                {x: 449, y: 35},
                {x: 498, y: 37},
                {x: 445, y: 45},
                {x: 498, y: 47},
                {x: 498, y: 47},
                {x: 455, y: 54},
                {x: 456, y: 54},
                {x: 449, y: 99},
                {x: 449, y: 99},
                {x: 449, y: 99},
                {x: 452, y: 99},
                {x: 452, y: 99},
                {x: 452, y: 99},
                {x: 452, y: 99},
                {x: 452, y: 99},
                {x: 449, y: 103},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7C8V Superpose"],
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
                    case 493:
                        label += "7C8VBAB 493Q - ";
                        break;
                    case 490:
                        label += "7C8VBAB 490F - ";
                        break;
                    case 490:
                        label += "7C8VBAB 490F - ";
                        break;
                    case 490:
                        label += "7C8VBAB 490F - ";
                        break;
                    case 490:
                        label += "7C8VBAB 490F - ";
                        break;
                    case 490:
                        label += "7C8VBAB 490F - ";
                        break;
                    case 453:
                        label += "7C8VBAB 453Y - ";
                        break;
                    case 453:
                        label += "7C8VBAB 453Y - ";
                        break;
                    case 493:
                        label += "7C8VBAB 493Q - ";
                        break;
                    case 493:
                        label += "7C8VBAB 493Q - ";
                        break;
                    case 494:
                        label += "7C8VBAB 494S - ";
                        break;
                    case 449:
                        label += "7C8VBAB 449Y - ";
                        break;
                    case 449:
                        label += "7C8VBAB 449Y - ";
                        break;
                    case 449:
                        label += "7C8VBAB 449Y - ";
                        break;
                    case 449:
                        label += "7C8VBAB 449Y - ";
                        break;
                    case 449:
                        label += "7C8VBAB 449Y - ";
                        break;
                    case 449:
                        label += "7C8VBAB 449Y - ";
                        break;
                    case 449:
                        label += "7C8VBAB 449Y - ";
                        break;
                    case 449:
                        label += "7C8VBAB 449Y - ";
                        break;
                    case 446:
                        label += "7C8VBAB 446G - ";
                        break;
                    case 447:
                        label += "7C8VBAB 447G - ";
                        break;
                    case 498:
                        label += "7C8VBAB 498Q - ";
                        break;
                    case 445:
                        label += "7C8VBAB 445V - ";
                        break;
                    case 498:
                        label += "7C8VBAB 498Q - ";
                        break;
                    case 498:
                        label += "7C8VBAB 498Q - ";
                        break;
                    case 493:
                        label += "7C8VBAB 493Q - ";
                        break;
                    case 493:
                        label += "7C8VBAB 493Q - ";
                        break;
                    case 455:
                        label += "7C8VBAB 455L - ";
                        break;
                    case 456:
                        label += "7C8VBAB 456F - ";
                        break;
                    case 456:
                        label += "7C8VBAB 456F - ";
                        break;
                    case 489:
                        label += "7C8VBAB 489Y - ";
                        break;
                    case 501:
                        label += "7C8VBAB 501N - ";
                        break;
                    case 501:
                        label += "7C8VBAB 501N - ";
                        break;
                    case 449:
                        label += "7C8VBAB 449Y - ";
                        break;
                    case 449:
                        label += "7C8VBAB 449Y - ";
                        break;
                    case 449:
                        label += "7C8VBAB 449Y - ";
                        break;
                    case 452:
                        label += "7C8VBAB 452L - ";
                        break;
                    case 452:
                        label += "7C8VBAB 452L - ";
                        break;
                    case 452:
                        label += "7C8VBAB 452L - ";
                        break;
                    case 452:
                        label += "7C8VBAB 452L - ";
                        break;
                    case 452:
                        label += "7C8VBAB 452L - ";
                        break;
                    case 449:
                        label += "7C8VBAB 449Y - ";
                        break;}
                switch (labely){
                    case 31:
                        label += "A 31S\n";
                        break;
                    case 32:
                        label += "A 32W\n";
                        break;
                    case 32:
                        label += "A 32W\n";
                        break;
                    case 32:
                        label += "A 32W\n";
                        break;
                    case 32:
                        label += "A 32W\n";
                        break;
                    case 32:
                        label += "A 32W\n";
                        break;
                    case 33:
                        label += "A 33N\n";
                        break;
                    case 33:
                        label += "A 33N\n";
                        break;
                    case 33:
                        label += "A 33N\n";
                        break;
                    case 33:
                        label += "A 33N\n";
                        break;
                    case 33:
                        label += "A 33N\n";
                        break;
                    case 35:
                        label += "A 35W\n";
                        break;
                    case 35:
                        label += "A 35W\n";
                        break;
                    case 35:
                        label += "A 35W\n";
                        break;
                    case 35:
                        label += "A 35W\n";
                        break;
                    case 35:
                        label += "A 35W\n";
                        break;
                    case 35:
                        label += "A 35W\n";
                        break;
                    case 35:
                        label += "A 35W\n";
                        break;
                    case 35:
                        label += "A 35W\n";
                        break;
                    case 37:
                        label += "A 37Y\n";
                        break;
                    case 37:
                        label += "A 37Y\n";
                        break;
                    case 37:
                        label += "A 37Y\n";
                        break;
                    case 45:
                        label += "A 45R\n";
                        break;
                    case 47:
                        label += "A 47W\n";
                        break;
                    case 47:
                        label += "A 47W\n";
                        break;
                    case 53:
                        label += "A 53S\n";
                        break;
                    case 53:
                        label += "A 53S\n";
                        break;
                    case 54:
                        label += "A 54H\n";
                        break;
                    case 54:
                        label += "A 54H\n";
                        break;
                    case 54:
                        label += "A 54H\n";
                        break;
                    case 54:
                        label += "A 54H\n";
                        break;
                    case 59:
                        label += "A 59R\n";
                        break;
                    case 59:
                        label += "A 59R\n";
                        break;
                    case 99:
                        label += "A 99W\n";
                        break;
                    case 99:
                        label += "A 99W\n";
                        break;
                    case 99:
                        label += "A 99W\n";
                        break;
                    case 99:
                        label += "A 99W\n";
                        break;
                    case 99:
                        label += "A 99W\n";
                        break;
                    case 99:
                        label += "A 99W\n";
                        break;
                    case 99:
                        label += "A 99W\n";
                        break;
                    case 99:
                        label += "A 99W\n";
                        break;
                    case 103:
                        label += "A 103T\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});