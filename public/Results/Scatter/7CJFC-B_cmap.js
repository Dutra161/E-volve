
var myChart7CJFC_B = 0;
var ctx = document.getElementById('7CJFC-B').getContext('2d');
if (window.myChart7CJFC_B != 0){
    window.myChart7CJFC_B.destroy();
}
window.myChart7CJFC_B = new Chart(ctx, {
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
            data: [{x: 500, y: 28},
                {x: 502, y: 28},
                {x: 496, y: 30},
                {x: 498, y: 30},
                {x: 501, y: 30},
                {x: 501, y: 30},
                {x: 501, y: 30},
                {x: 495, y: 32},
                {x: 498, y: 67},
                {x: 498, y: 67},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 505, y: 92},
                {x: 505, y: 93},
                {x: 505, y: 93},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 505, y: 2},
                {x: 505, y: 29},
                {x: 505, y: 29},
                {x: 505, y: 29},
                {x: 449, y: 32},
                {x: 449, y: 32},
                {x: 505, y: 92},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CJFC-B"],
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
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 500:
                        label += "7CJFCBC 500T - ";
                        break;
                    case 502:
                        label += "7CJFCBC 502G - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 496:
                        label += "7CJFCBC 496G - ";
                        break;
                    case 498:
                        label += "7CJFCBC 498Q - ";
                        break;
                    case 501:
                        label += "7CJFCBC 501N - ";
                        break;
                    case 501:
                        label += "7CJFCBC 501N - ";
                        break;
                    case 501:
                        label += "7CJFCBC 501N - ";
                        break;
                    case 449:
                        label += "7CJFCBC 449Y - ";
                        break;
                    case 449:
                        label += "7CJFCBC 449Y - ";
                        break;
                    case 495:
                        label += "7CJFCBC 495Y - ";
                        break;
                    case 498:
                        label += "7CJFCBC 498Q - ";
                        break;
                    case 498:
                        label += "7CJFCBC 498Q - ";
                        break;
                    case 403:
                        label += "7CJFCBC 403R - ";
                        break;
                    case 403:
                        label += "7CJFCBC 403R - ";
                        break;
                    case 403:
                        label += "7CJFCBC 403R - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;}
                switch (labely){
                    case 2:
                        label += "B 2I\n";
                        break;
                    case 28:
                        label += "B 28G\n";
                        break;
                    case 28:
                        label += "B 28G\n";
                        break;
                    case 29:
                        label += "B 29I\n";
                        break;
                    case 29:
                        label += "B 29I\n";
                        break;
                    case 29:
                        label += "B 29I\n";
                        break;
                    case 30:
                        label += "B 30S\n";
                        break;
                    case 30:
                        label += "B 30S\n";
                        break;
                    case 30:
                        label += "B 30S\n";
                        break;
                    case 30:
                        label += "B 30S\n";
                        break;
                    case 30:
                        label += "B 30S\n";
                        break;
                    case 32:
                        label += "B 32W\n";
                        break;
                    case 32:
                        label += "B 32W\n";
                        break;
                    case 32:
                        label += "B 32W\n";
                        break;
                    case 67:
                        label += "B 67S\n";
                        break;
                    case 67:
                        label += "B 67S\n";
                        break;
                    case 92:
                        label += "B 92N\n";
                        break;
                    case 92:
                        label += "B 92N\n";
                        break;
                    case 92:
                        label += "B 92N\n";
                        break;
                    case 92:
                        label += "B 92N\n";
                        break;
                    case 92:
                        label += "B 92N\n";
                        break;
                    case 93:
                        label += "B 93S\n";
                        break;
                    case 93:
                        label += "B 93S\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});