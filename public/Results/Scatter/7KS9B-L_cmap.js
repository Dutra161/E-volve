
var myChart7KS9B_L = 0;
var ctx = document.getElementById('7KS9B-L').getContext('2d');
if (window.myChart7KS9B_L != 0){
    window.myChart7KS9B_L.destroy();
}
window.myChart7KS9B_L = new Chart(ctx, {
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
            data: [{x: 403, y: 92},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 417, y: 92},
                {x: 417, y: 92},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 406, y: 92},
                {x: 406, y: 92},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 504, y: 27},
                {x: 500, y: 28},
                {x: 501, y: 28},
                {x: 501, y: 28},
                {x: 502, y: 28},
                {x: 496, y: 30},
                {x: 498, y: 30},
                {x: 498, y: 30},
                {x: 453, y: 32},
                {x: 494, y: 32},
                {x: 495, y: 32},
                {x: 493, y: 50},
                {x: 498, y: 66},
                {x: 505, y: 90},
                {x: 493, y: 91},
                {x: 505, y: 91},
                {x: 403, y: 92},
                {x: 417, y: 92},
                {x: 403, y: 93},
                {x: 403, y: 93},
                {x: 505, y: 93},
                {x: 505, y: 93},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 505, y: 27},
                {x: 505, y: 27},
                {x: 505, y: 29},
                {x: 505, y: 29},
                {x: 505, y: 32},
                {x: 505, y: 32},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KS9B-L"],
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
                    case 504:
                        label += "7KS9BLB 504G - ";
                        break;
                    case 505:
                        label += "7KS9BLB 505Y - ";
                        break;
                    case 505:
                        label += "7KS9BLB 505Y - ";
                        break;
                    case 500:
                        label += "7KS9BLB 500T - ";
                        break;
                    case 501:
                        label += "7KS9BLB 501N - ";
                        break;
                    case 501:
                        label += "7KS9BLB 501N - ";
                        break;
                    case 502:
                        label += "7KS9BLB 502G - ";
                        break;
                    case 505:
                        label += "7KS9BLB 505Y - ";
                        break;
                    case 505:
                        label += "7KS9BLB 505Y - ";
                        break;
                    case 496:
                        label += "7KS9BLB 496G - ";
                        break;
                    case 498:
                        label += "7KS9BLB 498Q - ";
                        break;
                    case 498:
                        label += "7KS9BLB 498Q - ";
                        break;
                    case 453:
                        label += "7KS9BLB 453Y - ";
                        break;
                    case 494:
                        label += "7KS9BLB 494S - ";
                        break;
                    case 495:
                        label += "7KS9BLB 495Y - ";
                        break;
                    case 505:
                        label += "7KS9BLB 505Y - ";
                        break;
                    case 505:
                        label += "7KS9BLB 505Y - ";
                        break;
                    case 493:
                        label += "7KS9BLB 493Q - ";
                        break;
                    case 498:
                        label += "7KS9BLB 498Q - ";
                        break;
                    case 505:
                        label += "7KS9BLB 505Y - ";
                        break;
                    case 493:
                        label += "7KS9BLB 493Q - ";
                        break;
                    case 505:
                        label += "7KS9BLB 505Y - ";
                        break;
                    case 403:
                        label += "7KS9BLB 403R - ";
                        break;
                    case 403:
                        label += "7KS9BLB 403R - ";
                        break;
                    case 403:
                        label += "7KS9BLB 403R - ";
                        break;
                    case 403:
                        label += "7KS9BLB 403R - ";
                        break;
                    case 403:
                        label += "7KS9BLB 403R - ";
                        break;
                    case 403:
                        label += "7KS9BLB 403R - ";
                        break;
                    case 403:
                        label += "7KS9BLB 403R - ";
                        break;
                    case 403:
                        label += "7KS9BLB 403R - ";
                        break;
                    case 403:
                        label += "7KS9BLB 403R - ";
                        break;
                    case 406:
                        label += "7KS9BLB 406E - ";
                        break;
                    case 406:
                        label += "7KS9BLB 406E - ";
                        break;
                    case 417:
                        label += "7KS9BLB 417K - ";
                        break;
                    case 417:
                        label += "7KS9BLB 417K - ";
                        break;
                    case 403:
                        label += "7KS9BLB 403R - ";
                        break;
                    case 403:
                        label += "7KS9BLB 403R - ";
                        break;
                    case 505:
                        label += "7KS9BLB 505Y - ";
                        break;
                    case 505:
                        label += "7KS9BLB 505Y - ";
                        break;}
                switch (labely){
                    case 27:
                        label += "L 27Q\n";
                        break;
                    case 27:
                        label += "L 27Q\n";
                        break;
                    case 27:
                        label += "L 27Q\n";
                        break;
                    case 28:
                        label += "L 28D\n";
                        break;
                    case 28:
                        label += "L 28D\n";
                        break;
                    case 28:
                        label += "L 28D\n";
                        break;
                    case 28:
                        label += "L 28D\n";
                        break;
                    case 29:
                        label += "L 29I\n";
                        break;
                    case 29:
                        label += "L 29I\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 50:
                        label += "L 50D\n";
                        break;
                    case 66:
                        label += "L 66R\n";
                        break;
                    case 90:
                        label += "L 90Q\n";
                        break;
                    case 91:
                        label += "L 91Y\n";
                        break;
                    case 91:
                        label += "L 91Y\n";
                        break;
                    case 92:
                        label += "L 92D\n";
                        break;
                    case 92:
                        label += "L 92D\n";
                        break;
                    case 92:
                        label += "L 92D\n";
                        break;
                    case 92:
                        label += "L 92D\n";
                        break;
                    case 92:
                        label += "L 92D\n";
                        break;
                    case 92:
                        label += "L 92D\n";
                        break;
                    case 92:
                        label += "L 92D\n";
                        break;
                    case 92:
                        label += "L 92D\n";
                        break;
                    case 92:
                        label += "L 92D\n";
                        break;
                    case 92:
                        label += "L 92D\n";
                        break;
                    case 92:
                        label += "L 92D\n";
                        break;
                    case 92:
                        label += "L 92D\n";
                        break;
                    case 92:
                        label += "L 92D\n";
                        break;
                    case 93:
                        label += "L 93N\n";
                        break;
                    case 93:
                        label += "L 93N\n";
                        break;
                    case 93:
                        label += "L 93N\n";
                        break;
                    case 93:
                        label += "L 93N\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});