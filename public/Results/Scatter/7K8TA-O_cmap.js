
var myChart7K8TA_O = 0;
var ctx = document.getElementById('7K8TA-O').getContext('2d');
if (window.myChart7K8TA_O != 0){
    window.myChart7K8TA_O.destroy();
}
window.myChart7K8TA_O = new Chart(ctx, {
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
            data: [{x: 473, y: 56},
                {x: 480, y: 58},
                {x: 481, y: 56},
                {x: 481, y: 58},
                {x: 481, y: 58},
                {x: 492, y: 97},
                {x: 493, y: 97},
                {x: 493, y: 98},
                {x: 505, y: 100},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            text:["7K8TA-O"],
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
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});