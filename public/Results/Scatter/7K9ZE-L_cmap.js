
var myChart7K9ZE_L = 0;
var ctx = document.getElementById('7K9ZE-L').getContext('2d');
if (window.myChart7K9ZE_L != 0){
    window.myChart7K9ZE_L.destroy();
}
window.myChart7K9ZE_L = new Chart(ctx, {
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
            data: [{x: 355, y: 0},
                {x: 357, y: 0},
                {x: 357, y: 27},
                {x: 357, y: 27},
                {x: 465, y: 30},
                {x: 466, y: 32},
                {x: 466, y: 92},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 468, y: 94},
                {x: 468, y: 94},
                {x: 468, y: 94},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7K9ZE-L"],
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
                    case 355:
                        label += "7K9ZELE 355R - ";
                        break;
                    case 357:
                        label += "7K9ZELE 357R - ";
                        break;
                    case 357:
                        label += "7K9ZELE 357R - ";
                        break;
                    case 357:
                        label += "7K9ZELE 357R - ";
                        break;
                    case 465:
                        label += "7K9ZELE 465E - ";
                        break;
                    case 466:
                        label += "7K9ZELE 466R - ";
                        break;
                    case 466:
                        label += "7K9ZELE 466R - ";
                        break;
                    case 468:
                        label += "7K9ZELE 468I - ";
                        break;
                    case 468:
                        label += "7K9ZELE 468I - ";
                        break;
                    case 468:
                        label += "7K9ZELE 468I - ";
                        break;}
                switch (labely){
                    case 0:
                        label += "L 0S\n";
                        break;
                    case 0:
                        label += "L 0S\n";
                        break;
                    case 27:
                        label += "L 27Q\n";
                        break;
                    case 27:
                        label += "L 27Q\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 32:
                        label += "L 32N\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 94:
                        label += "L 94F\n";
                        break;
                    case 94:
                        label += "L 94F\n";
                        break;
                    case 94:
                        label += "L 94F\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});