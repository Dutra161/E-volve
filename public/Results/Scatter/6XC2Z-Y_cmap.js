
var myChart6XC2Z_Y = 0;
var ctx = document.getElementById('6XC2Z-Y').getContext('2d');
if (window.myChart6XC2Z_Y != 0){
    window.myChart6XC2Z_Y.destroy();
}
window.myChart6XC2Z_Y = new Chart(ctx, {
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
            data: [{x: 417, y: 97},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 403, y: 92},
                {x: 403, y: 92},
                {x: 408, y: 94},
                {x: 408, y: 94},
                {x: 453, y: 92},
                {x: 494, y: 32},
                {x: 496, y: 30},
                {x: 496, y: 32},
                {x: 498, y: 30},
                {x: 498, y: 30},
                {x: 498, y: 67},
                {x: 498, y: 67},
                {x: 500, y: 28},
                {x: 501, y: 28},
                {x: 501, y: 30},
                {x: 501, y: 30},
                {x: 502, y: 28},
                {x: 505, y: 90},
                {x: 505, y: 91},
                {x: 505, y: 92},
                {x: 505, y: 93},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 505, y: 32},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 405, y: 94},
                {x: 405, y: 94},
                {x: 505, y: 29},
                {x: 505, y: 29},
                {x: 505, y: 29},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6XC2Z-Y"],
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
                    case 403:
                        label += "6XC2ZYZ 403R - ";
                        break;
                    case 403:
                        label += "6XC2ZYZ 403R - ";
                        break;
                    case 405:
                        label += "6XC2ZYZ 405D - ";
                        break;
                    case 405:
                        label += "6XC2ZYZ 405D - ";
                        break;
                    case 408:
                        label += "6XC2ZYZ 408R - ";
                        break;
                    case 408:
                        label += "6XC2ZYZ 408R - ";
                        break;
                    case 417:
                        label += "6XC2ZYZ 417K - ";
                        break;
                    case 453:
                        label += "6XC2ZYZ 453Y - ";
                        break;
                    case 494:
                        label += "6XC2ZYZ 494S - ";
                        break;
                    case 496:
                        label += "6XC2ZYZ 496G - ";
                        break;
                    case 496:
                        label += "6XC2ZYZ 496G - ";
                        break;
                    case 498:
                        label += "6XC2ZYZ 498Q - ";
                        break;
                    case 498:
                        label += "6XC2ZYZ 498Q - ";
                        break;
                    case 498:
                        label += "6XC2ZYZ 498Q - ";
                        break;
                    case 498:
                        label += "6XC2ZYZ 498Q - ";
                        break;
                    case 500:
                        label += "6XC2ZYZ 500T - ";
                        break;
                    case 501:
                        label += "6XC2ZYZ 501N - ";
                        break;
                    case 501:
                        label += "6XC2ZYZ 501N - ";
                        break;
                    case 501:
                        label += "6XC2ZYZ 501N - ";
                        break;
                    case 502:
                        label += "6XC2ZYZ 502G - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;}
                switch (labely){
                    case 92:
                        label += "Y 92N\n";
                        break;
                    case 92:
                        label += "Y 92N\n";
                        break;
                    case 94:
                        label += "Y 94Y\n";
                        break;
                    case 94:
                        label += "Y 94Y\n";
                        break;
                    case 94:
                        label += "Y 94Y\n";
                        break;
                    case 94:
                        label += "Y 94Y\n";
                        break;
                    case 97:
                        label += "Y 97K\n";
                        break;
                    case 92:
                        label += "Y 92N\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 30:
                        label += "Y 30S\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 30:
                        label += "Y 30S\n";
                        break;
                    case 30:
                        label += "Y 30S\n";
                        break;
                    case 67:
                        label += "Y 67S\n";
                        break;
                    case 67:
                        label += "Y 67S\n";
                        break;
                    case 28:
                        label += "Y 28G\n";
                        break;
                    case 28:
                        label += "Y 28G\n";
                        break;
                    case 30:
                        label += "Y 30S\n";
                        break;
                    case 30:
                        label += "Y 30S\n";
                        break;
                    case 28:
                        label += "Y 28G\n";
                        break;
                    case 29:
                        label += "Y 29I\n";
                        break;
                    case 29:
                        label += "Y 29I\n";
                        break;
                    case 29:
                        label += "Y 29I\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 90:
                        label += "Y 90Q\n";
                        break;
                    case 91:
                        label += "Y 91L\n";
                        break;
                    case 92:
                        label += "Y 92N\n";
                        break;
                    case 93:
                        label += "Y 93S\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});