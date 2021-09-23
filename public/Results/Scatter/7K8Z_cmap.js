
var myChart7K8Z = 0;
var ctx = document.getElementById('7K8Z').getContext('2d');
if (window.myChart7K8Z != 0){
    window.myChart7K8Z.destroy();
}
window.myChart7K8Z = new Chart(ctx, {
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
            data: [{x: 346, y: 98},
                {x: 438, y: 55},
                {x: 346, y: 91},
                {x: 346, y: 92},
                {x: 346, y: 92},
                {x: 346, y: 92},
                {x: 437, y: 55},
                {x: 438, y: 55},
                {x: 345, y: 92},
                {x: 345, y: 93},
                {x: 345, y: 93},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 440, y: 52},
                {x: 346, y: 32},
                {x: 441, y: 94},
                {x: 440, y: 52},
                {x: 440, y: 52},
                {x: 345, y: 94},
                {x: 345, y: 94},
                {x: 345, y: 94},
                {x: 346, y: 32},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7K8Z Superpose"],
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
                        label += "7K8ZAHA 346R - ";
                        break;
                    case 438:
                        label += "7K8ZAHA 438S - ";
                        break;
                    case 440:
                        label += "7K8ZAHA 440N - ";
                        break;
                    case 346:
                        label += "7K8ZALA 346R - ";
                        break;
                    case 346:
                        label += "7K8ZALA 346R - ";
                        break;
                    case 346:
                        label += "7K8ZALA 346R - ";
                        break;
                    case 346:
                        label += "7K8ZALA 346R - ";
                        break;
                    case 346:
                        label += "7K8ZALA 346R - ";
                        break;
                    case 441:
                        label += "7K8ZALA 441L - ";
                        break;
                    case 437:
                        label += "7K8ZCMC 437N - ";
                        break;
                    case 438:
                        label += "7K8ZCMC 438S - ";
                        break;
                    case 440:
                        label += "7K8ZCMC 440N - ";
                        break;
                    case 440:
                        label += "7K8ZCMC 440N - ";
                        break;
                    case 345:
                        label += "7K8ZCNC 345T - ";
                        break;
                    case 345:
                        label += "7K8ZCNC 345T - ";
                        break;
                    case 345:
                        label += "7K8ZCNC 345T - ";
                        break;
                    case 345:
                        label += "7K8ZCNC 345T - ";
                        break;
                    case 345:
                        label += "7K8ZCNC 345T - ";
                        break;
                    case 345:
                        label += "7K8ZCNC 345T - ";
                        break;
                    case 346:
                        label += "7K8ZCNC 346R - ";
                        break;}
                switch (labely){
                    case 98:
                        label += "H 98Y\n";
                        break;
                    case 55:
                        label += "H 55R\n";
                        break;
                    case 52:
                        label += "H 52P\n";
                        break;
                    case 32:
                        label += "L 32W\n";
                        break;
                    case 91:
                        label += "L 91Y\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 94:
                        label += "L 94Y\n";
                        break;
                    case 55:
                        label += "M 55R\n";
                        break;
                    case 55:
                        label += "M 55R\n";
                        break;
                    case 52:
                        label += "M 52P\n";
                        break;
                    case 52:
                        label += "M 52P\n";
                        break;
                    case 92:
                        label += "N 92N\n";
                        break;
                    case 93:
                        label += "N 93S\n";
                        break;
                    case 93:
                        label += "N 93S\n";
                        break;
                    case 94:
                        label += "N 94Y\n";
                        break;
                    case 94:
                        label += "N 94Y\n";
                        break;
                    case 94:
                        label += "N 94Y\n";
                        break;
                    case 32:
                        label += "N 32W\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});