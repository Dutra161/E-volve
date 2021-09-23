
var myChart6ZDGE_G = 0;
var ctx = document.getElementById('6ZDGE-G').getContext('2d');
if (window.myChart6ZDGE_G != 0){
    window.myChart6ZDGE_G.destroy();
}
window.myChart6ZDGE_G = new Chart(ctx, {
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
            data: [{x: 462, y: 146},
                {x: 466, y: 190},
                {x: 466, y: 190},
                {x: 466, y: 190},
                {x: 466, y: 190},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 355, y: 152},
                {x: 355, y: 153},
                {x: 396, y: 153},
                {x: 464, y: 155},
                {x: 466, y: 155},
                {x: 466, y: 157},
                {x: 466, y: 190},
                {x: 516, y: 153},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 353, y: 154},
                {x: 353, y: 154},
                {x: 353, y: 154},
                {x: 396, y: 153},
                {x: 464, y: 155},
                {x: 465, y: 155},
                {x: 465, y: 155},
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
            text:["6ZDGE-G"],
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
                    case 353:
                        label += "6ZDGEGE 353W - ";
                        break;
                    case 353:
                        label += "6ZDGEGE 353W - ";
                        break;
                    case 353:
                        label += "6ZDGEGE 353W - ";
                        break;
                    case 355:
                        label += "6ZDGEGE 355R - ";
                        break;
                    case 355:
                        label += "6ZDGEGE 355R - ";
                        break;
                    case 396:
                        label += "6ZDGEGE 396Y - ";
                        break;
                    case 396:
                        label += "6ZDGEGE 396Y - ";
                        break;
                    case 462:
                        label += "6ZDGEGE 462K - ";
                        break;
                    case 464:
                        label += "6ZDGEGE 464F - ";
                        break;
                    case 464:
                        label += "6ZDGEGE 464F - ";
                        break;
                    case 465:
                        label += "6ZDGEGE 465E - ";
                        break;
                    case 465:
                        label += "6ZDGEGE 465E - ";
                        break;
                    case 466:
                        label += "6ZDGEGE 466R - ";
                        break;
                    case 466:
                        label += "6ZDGEGE 466R - ";
                        break;
                    case 466:
                        label += "6ZDGEGE 466R - ";
                        break;
                    case 466:
                        label += "6ZDGEGE 466R - ";
                        break;
                    case 466:
                        label += "6ZDGEGE 466R - ";
                        break;
                    case 466:
                        label += "6ZDGEGE 466R - ";
                        break;
                    case 516:
                        label += "6ZDGEGE 516E - ";
                        break;}
                switch (labely){
                    case 154:
                        label += "G 154A\n";
                        break;
                    case 154:
                        label += "G 154A\n";
                        break;
                    case 154:
                        label += "G 154A\n";
                        break;
                    case 152:
                        label += "G 152D\n";
                        break;
                    case 153:
                        label += "G 153N\n";
                        break;
                    case 153:
                        label += "G 153N\n";
                        break;
                    case 153:
                        label += "G 153N\n";
                        break;
                    case 146:
                        label += "G 146K\n";
                        break;
                    case 155:
                        label += "G 155L\n";
                        break;
                    case 155:
                        label += "G 155L\n";
                        break;
                    case 155:
                        label += "G 155L\n";
                        break;
                    case 155:
                        label += "G 155L\n";
                        break;
                    case 155:
                        label += "G 155L\n";
                        break;
                    case 157:
                        label += "G 157S\n";
                        break;
                    case 190:
                        label += "G 190H\n";
                        break;
                    case 190:
                        label += "G 190H\n";
                        break;
                    case 190:
                        label += "G 190H\n";
                        break;
                    case 190:
                        label += "G 190H\n";
                        break;
                    case 153:
                        label += "G 153N\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});