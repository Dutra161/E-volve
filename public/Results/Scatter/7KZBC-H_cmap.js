
var myChart7KZBC_H = 0;
var ctx = document.getElementById('7KZBC-H').getContext('2d');
if (window.myChart7KZBC_H != 0){
    window.myChart7KZBC_H.destroy();
}
window.myChart7KZBC_H = new Chart(ctx, {
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
            data: [{x: 381, y: 52},
                {x: 427, y: 56},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 380, y: 105},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 427, y: 55},
                {x: 380, y: 104},
                {x: 380, y: 104},
                {x: 378, y: 105},
                {x: 378, y: 105},
                {x: 378, y: 105},
                {x: 378, y: 105},
                {x: 378, y: 105},
                {x: 378, y: 105},
                {x: 378, y: 105},
                {x: 378, y: 105},
                {x: 380, y: 105},
                {x: 380, y: 105},
                {x: 380, y: 105},
                {x: 380, y: 105},
                {x: 380, y: 105},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KZBC-H"],
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
                    case 381:
                        label += "7KZBCHC 381G - ";
                        break;
                    case 427:
                        label += "7KZBCHC 427D - ";
                        break;
                    case 427:
                        label += "7KZBCHC 427D - ";
                        break;
                    case 380:
                        label += "7KZBCHC 380Y - ";
                        break;
                    case 380:
                        label += "7KZBCHC 380Y - ";
                        break;
                    case 378:
                        label += "7KZBCHC 378K - ";
                        break;
                    case 378:
                        label += "7KZBCHC 378K - ";
                        break;
                    case 378:
                        label += "7KZBCHC 378K - ";
                        break;
                    case 378:
                        label += "7KZBCHC 378K - ";
                        break;
                    case 378:
                        label += "7KZBCHC 378K - ";
                        break;
                    case 378:
                        label += "7KZBCHC 378K - ";
                        break;
                    case 378:
                        label += "7KZBCHC 378K - ";
                        break;
                    case 378:
                        label += "7KZBCHC 378K - ";
                        break;
                    case 380:
                        label += "7KZBCHC 380Y - ";
                        break;
                    case 380:
                        label += "7KZBCHC 380Y - ";
                        break;
                    case 380:
                        label += "7KZBCHC 380Y - ";
                        break;
                    case 380:
                        label += "7KZBCHC 380Y - ";
                        break;
                    case 380:
                        label += "7KZBCHC 380Y - ";
                        break;
                    case 380:
                        label += "7KZBCHC 380Y - ";
                        break;}
                switch (labely){
                    case 52:
                        label += "H 52R\n";
                        break;
                    case 55:
                        label += "H 55A\n";
                        break;
                    case 56:
                        label += "H 56N\n";
                        break;
                    case 104:
                        label += "H 104P\n";
                        break;
                    case 104:
                        label += "H 104P\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});