
var myChart7A5RB_M = 0;
var ctx = document.getElementById('7A5RB-M').getContext('2d');
if (window.myChart7A5RB_M != 0){
    window.myChart7A5RB_M.destroy();
}
window.myChart7A5RB_M = new Chart(ctx, {
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
            data: [{x: 386, y: 61},
                {x: 386, y: 61},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 44, y: 83},
                {x: 45, y: 16},
                {x: 381, y: 38},
                {x: 429, y: 31},
                {x: 429, y: 31},
                {x: 430, y: 33},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 42, y: 67},
                {x: 42, y: 67},
                {x: 42, y: 85},
                {x: 43, y: 15},
                {x: 43, y: 15},
                {x: 390, y: 56},
                {x: 390, y: 56},
                {x: 428, y: 31},
                {x: 430, y: 31},
                {x: 430, y: 31},
                {x: 430, y: 34},
                {x: 430, y: 34},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7A5RB-M"],
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
                    case 42:
                        label += "7A5RBMB 42V - ";
                        break;
                    case 42:
                        label += "7A5RBMB 42V - ";
                        break;
                    case 42:
                        label += "7A5RBMB 42V - ";
                        break;
                    case 43:
                        label += "7A5RBMB 43F - ";
                        break;
                    case 43:
                        label += "7A5RBMB 43F - ";
                        break;
                    case 44:
                        label += "7A5RBMB 44R - ";
                        break;
                    case 45:
                        label += "7A5RBMB 45S - ";
                        break;
                    case 381:
                        label += "7A5RBMB 381G - ";
                        break;
                    case 386:
                        label += "7A5RBMB 386K - ";
                        break;
                    case 386:
                        label += "7A5RBMB 386K - ";
                        break;
                    case 390:
                        label += "7A5RBMB 390L - ";
                        break;
                    case 390:
                        label += "7A5RBMB 390L - ";
                        break;
                    case 428:
                        label += "7A5RBMB 428D - ";
                        break;
                    case 429:
                        label += "7A5RBMB 429F - ";
                        break;
                    case 429:
                        label += "7A5RBMB 429F - ";
                        break;
                    case 430:
                        label += "7A5RBMB 430T - ";
                        break;
                    case 430:
                        label += "7A5RBMB 430T - ";
                        break;
                    case 430:
                        label += "7A5RBMB 430T - ";
                        break;
                    case 430:
                        label += "7A5RBMB 430T - ";
                        break;
                    case 430:
                        label += "7A5RBMB 430T - ";
                        break;}
                switch (labely){
                    case 67:
                        label += "M 67R\n";
                        break;
                    case 67:
                        label += "M 67R\n";
                        break;
                    case 85:
                        label += "M 85Q\n";
                        break;
                    case 15:
                        label += "M 15L\n";
                        break;
                    case 15:
                        label += "M 15L\n";
                        break;
                    case 83:
                        label += "M 83S\n";
                        break;
                    case 16:
                        label += "M 16G\n";
                        break;
                    case 38:
                        label += "M 38Y\n";
                        break;
                    case 61:
                        label += "M 61E\n";
                        break;
                    case 61:
                        label += "M 61E\n";
                        break;
                    case 56:
                        label += "M 56W\n";
                        break;
                    case 56:
                        label += "M 56W\n";
                        break;
                    case 31:
                        label += "M 31Y\n";
                        break;
                    case 31:
                        label += "M 31Y\n";
                        break;
                    case 31:
                        label += "M 31Y\n";
                        break;
                    case 31:
                        label += "M 31Y\n";
                        break;
                    case 31:
                        label += "M 31Y\n";
                        break;
                    case 33:
                        label += "M 33S\n";
                        break;
                    case 34:
                        label += "M 34I\n";
                        break;
                    case 34:
                        label += "M 34I\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});