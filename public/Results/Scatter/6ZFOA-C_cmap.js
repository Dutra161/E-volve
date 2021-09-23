
var myChart6ZFOA_C = 0;
var ctx = document.getElementById('6ZFOA-C').getContext('2d');
if (window.myChart6ZFOA_C != 0){
    window.myChart6ZFOA_C.destroy();
}
window.myChart6ZFOA_C = new Chart(ctx, {
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
            data: [{x: 379, y: 94},
                {x: 381, y: 32},
                {x: 381, y: 92},
                {x: 382, y: 94},
                {x: 383, y: 94},
                {x: 383, y: 94},
                {x: 412, y: 27},
                {x: 427, y: 92},
                {x: 429, y: 92},
                {x: 429, y: 92},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 377, y: 95},
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
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6ZFOA-C"],
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
                        break;}
                switch (labely){
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
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});