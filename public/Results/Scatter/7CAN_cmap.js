
var myChart7CAN = 0;
var ctx = document.getElementById('7CAN').getContext('2d');
if (window.myChart7CAN != 0){
    window.myChart7CAN.destroy();
}
window.myChart7CAN = new Chart(ctx, {
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
            data: [{x: 484, y: 59},
                {x: 484, y: 59},
                {x: 484, y: 59},
                {x: 484, y: 59},
                {x: 484, y: 59},
                {x: 484, y: 59},
                {x: 484, y: 59},
                {x: 484, y: 65},
                {x: 417, y: 101},
                {x: 417, y: 101},
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
            data: [{x: 494, y: 32},
                {x: 486, y: 33},
                {x: 486, y: 33},
                {x: 488, y: 33},
                {x: 489, y: 33},
                {x: 490, y: 52},
                {x: 490, y: 52},
                {x: 449, y: 54},
                {x: 494, y: 54},
                {x: 488, y: 59},
                {x: 484, y: 60},
                {x: 486, y: 60},
                {x: 483, y: 65},
                {x: 493, y: 99},
                {x: 493, y: 100},
                {x: 453, y: 101},
                {x: 403, y: 103},
                {x: 453, y: 103},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 37},
                {x: 490, y: 56},
                {x: 489, y: 99},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 28},
                {x: 449, y: 28},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 32},
                {x: 449, y: 32},
                {x: 449, y: 32},
                {x: 486, y: 35},
                {x: 486, y: 35},
                {x: 486, y: 35},
                {x: 486, y: 35},
                {x: 486, y: 37},
                {x: 486, y: 37},
                {x: 486, y: 37},
                {x: 486, y: 37},
                {x: 486, y: 50},
                {x: 486, y: 50},
                {x: 490, y: 52},
                {x: 490, y: 52},
                {x: 490, y: 56},
                {x: 490, y: 56},
                {x: 490, y: 56},
                {x: 490, y: 56},
                {x: 455, y: 99},
                {x: 455, y: 99},
                {x: 456, y: 99},
                {x: 456, y: 99},
                {x: 489, y: 99},
                {x: 455, y: 101},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CAN Superpose"],
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
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 494:
                        label += "7CANBAB 494S - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 488:
                        label += "7CANBAB 488C - ";
                        break;
                    case 489:
                        label += "7CANBAB 489Y - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 490:
                        label += "7CANBAB 490F - ";
                        break;
                    case 490:
                        label += "7CANBAB 490F - ";
                        break;
                    case 490:
                        label += "7CANBAB 490F - ";
                        break;
                    case 490:
                        label += "7CANBAB 490F - ";
                        break;
                    case 449:
                        label += "7CANBAB 449Y - ";
                        break;
                    case 494:
                        label += "7CANBAB 494S - ";
                        break;
                    case 490:
                        label += "7CANBAB 490F - ";
                        break;
                    case 490:
                        label += "7CANBAB 490F - ";
                        break;
                    case 490:
                        label += "7CANBAB 490F - ";
                        break;
                    case 490:
                        label += "7CANBAB 490F - ";
                        break;
                    case 490:
                        label += "7CANBAB 490F - ";
                        break;
                    case 484:
                        label += "7CANBAB 484E - ";
                        break;
                    case 484:
                        label += "7CANBAB 484E - ";
                        break;
                    case 484:
                        label += "7CANBAB 484E - ";
                        break;
                    case 484:
                        label += "7CANBAB 484E - ";
                        break;
                    case 484:
                        label += "7CANBAB 484E - ";
                        break;
                    case 484:
                        label += "7CANBAB 484E - ";
                        break;
                    case 484:
                        label += "7CANBAB 484E - ";
                        break;
                    case 488:
                        label += "7CANBAB 488C - ";
                        break;
                    case 484:
                        label += "7CANBAB 484E - ";
                        break;
                    case 486:
                        label += "7CANBAB 486F - ";
                        break;
                    case 483:
                        label += "7CANBAB 483V - ";
                        break;
                    case 484:
                        label += "7CANBAB 484E - ";
                        break;
                    case 455:
                        label += "7CANBAB 455L - ";
                        break;
                    case 455:
                        label += "7CANBAB 455L - ";
                        break;
                    case 456:
                        label += "7CANBAB 456F - ";
                        break;
                    case 456:
                        label += "7CANBAB 456F - ";
                        break;
                    case 489:
                        label += "7CANBAB 489Y - ";
                        break;
                    case 489:
                        label += "7CANBAB 489Y - ";
                        break;
                    case 493:
                        label += "7CANBAB 493Q - ";
                        break;
                    case 493:
                        label += "7CANBAB 493Q - ";
                        break;
                    case 417:
                        label += "7CANBAB 417K - ";
                        break;
                    case 417:
                        label += "7CANBAB 417K - ";
                        break;
                    case 453:
                        label += "7CANBAB 453Y - ";
                        break;
                    case 455:
                        label += "7CANBAB 455L - ";
                        break;
                    case 403:
                        label += "7CANBAB 403R - ";
                        break;
                    case 453:
                        label += "7CANBAB 453Y - ";
                        break;}
                switch (labely){
                    case 28:
                        label += "A 28P\n";
                        break;
                    case 28:
                        label += "A 28P\n";
                        break;
                    case 31:
                        label += "A 31V\n";
                        break;
                    case 31:
                        label += "A 31V\n";
                        break;
                    case 31:
                        label += "A 31V\n";
                        break;
                    case 31:
                        label += "A 31V\n";
                        break;
                    case 31:
                        label += "A 31V\n";
                        break;
                    case 31:
                        label += "A 31V\n";
                        break;
                    case 31:
                        label += "A 31V\n";
                        break;
                    case 31:
                        label += "A 31V\n";
                        break;
                    case 31:
                        label += "A 31V\n";
                        break;
                    case 31:
                        label += "A 31V\n";
                        break;
                    case 31:
                        label += "A 31V\n";
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
                        label += "A 33R\n";
                        break;
                    case 33:
                        label += "A 33R\n";
                        break;
                    case 33:
                        label += "A 33R\n";
                        break;
                    case 33:
                        label += "A 33R\n";
                        break;
                    case 35:
                        label += "A 35E\n";
                        break;
                    case 35:
                        label += "A 35E\n";
                        break;
                    case 35:
                        label += "A 35E\n";
                        break;
                    case 35:
                        label += "A 35E\n";
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
                    case 37:
                        label += "A 37Y\n";
                        break;
                    case 37:
                        label += "A 37Y\n";
                        break;
                    case 50:
                        label += "A 50A\n";
                        break;
                    case 50:
                        label += "A 50A\n";
                        break;
                    case 52:
                        label += "A 52E\n";
                        break;
                    case 52:
                        label += "A 52E\n";
                        break;
                    case 52:
                        label += "A 52E\n";
                        break;
                    case 52:
                        label += "A 52E\n";
                        break;
                    case 54:
                        label += "A 54Y\n";
                        break;
                    case 54:
                        label += "A 54Y\n";
                        break;
                    case 56:
                        label += "A 56H\n";
                        break;
                    case 56:
                        label += "A 56H\n";
                        break;
                    case 56:
                        label += "A 56H\n";
                        break;
                    case 56:
                        label += "A 56H\n";
                        break;
                    case 56:
                        label += "A 56H\n";
                        break;
                    case 59:
                        label += "A 59R\n";
                        break;
                    case 59:
                        label += "A 59R\n";
                        break;
                    case 59:
                        label += "A 59R\n";
                        break;
                    case 59:
                        label += "A 59R\n";
                        break;
                    case 59:
                        label += "A 59R\n";
                        break;
                    case 59:
                        label += "A 59R\n";
                        break;
                    case 59:
                        label += "A 59R\n";
                        break;
                    case 59:
                        label += "A 59R\n";
                        break;
                    case 60:
                        label += "A 60Y\n";
                        break;
                    case 60:
                        label += "A 60Y\n";
                        break;
                    case 65:
                        label += "A 65K\n";
                        break;
                    case 65:
                        label += "A 65K\n";
                        break;
                    case 99:
                        label += "A 99Y\n";
                        break;
                    case 99:
                        label += "A 99Y\n";
                        break;
                    case 99:
                        label += "A 99Y\n";
                        break;
                    case 99:
                        label += "A 99Y\n";
                        break;
                    case 99:
                        label += "A 99Y\n";
                        break;
                    case 99:
                        label += "A 99Y\n";
                        break;
                    case 99:
                        label += "A 99Y\n";
                        break;
                    case 100:
                        label += "A 100D\n";
                        break;
                    case 101:
                        label += "A 101D\n";
                        break;
                    case 101:
                        label += "A 101D\n";
                        break;
                    case 101:
                        label += "A 101D\n";
                        break;
                    case 101:
                        label += "A 101D\n";
                        break;
                    case 103:
                        label += "A 103Q\n";
                        break;
                    case 103:
                        label += "A 103Q\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});