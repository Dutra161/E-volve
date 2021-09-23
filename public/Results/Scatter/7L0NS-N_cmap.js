
var myChart7L0NS_N = 0;
var ctx = document.getElementById('7L0NS-N').getContext('2d');
if (window.myChart7L0NS_N != 0){
    window.myChart7L0NS_N.destroy();
}
window.myChart7L0NS_N = new Chart(ctx, {
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
            data: [{x: 378, y: 1},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 412, y: 27},
                {x: 413, y: 27},
                {x: 381, y: 32},
                {x: 381, y: 92},
                {x: 427, y: 92},
                {x: 429, y: 92},
                {x: 429, y: 92},
                {x: 379, y: 94},
                {x: 379, y: 94},
                {x: 379, y: 94},
                {x: 382, y: 94},
                {x: 383, y: 97},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 380, y: 92},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 412, y: 92},
                {x: 412, y: 92},
                {x: 378, y: 93},
                {x: 380, y: 93},
                {x: 380, y: 93},
                {x: 380, y: 93},
                {x: 380, y: 93},
                {x: 378, y: 96},
                {x: 378, y: 96},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7L0NS-N"],
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
                    case 378:
                        label += "7L0NSNS 378K - ";
                        break;
                    case 412:
                        label += "7L0NSNS 412P - ";
                        break;
                    case 413:
                        label += "7L0NSNS 413G - ";
                        break;
                    case 381:
                        label += "7L0NSNS 381G - ";
                        break;
                    case 380:
                        label += "7L0NSNS 380Y - ";
                        break;
                    case 380:
                        label += "7L0NSNS 380Y - ";
                        break;
                    case 380:
                        label += "7L0NSNS 380Y - ";
                        break;
                    case 380:
                        label += "7L0NSNS 380Y - ";
                        break;
                    case 380:
                        label += "7L0NSNS 380Y - ";
                        break;
                    case 380:
                        label += "7L0NSNS 380Y - ";
                        break;
                    case 380:
                        label += "7L0NSNS 380Y - ";
                        break;
                    case 381:
                        label += "7L0NSNS 381G - ";
                        break;
                    case 412:
                        label += "7L0NSNS 412P - ";
                        break;
                    case 412:
                        label += "7L0NSNS 412P - ";
                        break;
                    case 427:
                        label += "7L0NSNS 427D - ";
                        break;
                    case 429:
                        label += "7L0NSNS 429F - ";
                        break;
                    case 429:
                        label += "7L0NSNS 429F - ";
                        break;
                    case 378:
                        label += "7L0NSNS 378K - ";
                        break;
                    case 380:
                        label += "7L0NSNS 380Y - ";
                        break;
                    case 380:
                        label += "7L0NSNS 380Y - ";
                        break;
                    case 380:
                        label += "7L0NSNS 380Y - ";
                        break;
                    case 380:
                        label += "7L0NSNS 380Y - ";
                        break;
                    case 379:
                        label += "7L0NSNS 379C - ";
                        break;
                    case 379:
                        label += "7L0NSNS 379C - ";
                        break;
                    case 379:
                        label += "7L0NSNS 379C - ";
                        break;
                    case 382:
                        label += "7L0NSNS 382V - ";
                        break;
                    case 378:
                        label += "7L0NSNS 378K - ";
                        break;
                    case 378:
                        label += "7L0NSNS 378K - ";
                        break;
                    case 383:
                        label += "7L0NSNS 383S - ";
                        break;}
                switch (labely){
                    case 1:
                        label += "N 1D\n";
                        break;
                    case 27:
                        label += "N 27Q\n";
                        break;
                    case 27:
                        label += "N 27Q\n";
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
                    case 92:
                        label += "N 92Y\n";
                        break;
                    case 93:
                        label += "N 93V\n";
                        break;
                    case 93:
                        label += "N 93V\n";
                        break;
                    case 93:
                        label += "N 93V\n";
                        break;
                    case 93:
                        label += "N 93V\n";
                        break;
                    case 93:
                        label += "N 93V\n";
                        break;
                    case 94:
                        label += "N 94S\n";
                        break;
                    case 94:
                        label += "N 94S\n";
                        break;
                    case 94:
                        label += "N 94S\n";
                        break;
                    case 94:
                        label += "N 94S\n";
                        break;
                    case 96:
                        label += "N 96T\n";
                        break;
                    case 96:
                        label += "N 96T\n";
                        break;
                    case 97:
                        label += "N 97Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});