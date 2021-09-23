
var myChart7LD1C_N = 0;
var ctx = document.getElementById('7LD1C-N').getContext('2d');
if (window.myChart7LD1C_N != 0){
    window.myChart7LD1C_N.destroy();
}
window.myChart7LD1C_N = new Chart(ctx, {
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
            data: [{x: 405, y: 118},
                {x: 405, y: 118},
                {x: 408, y: 50},
                {x: 408, y: 117},
                {x: 408, y: 117},
                {x: 409, y: 50},
                {x: 414, y: 50},
                {x: 414, y: 50},
                {x: 415, y: 51},
                {x: 415, y: 52},
                {x: 416, y: 51},
                {x: 505, y: 20},
                {x: 505, y: 21},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 408, y: 50},
                {x: 408, y: 50},
                {x: 408, y: 50},
                {x: 409, y: 50},
                {x: 503, y: 119},
                {x: 503, y: 119},
                {x: 505, y: 20},
                {x: 505, y: 120},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7LD1C-N"],
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
                    case 405:
                        label += "7LD1CNC 405D - ";
                        break;
                    case 405:
                        label += "7LD1CNC 405D - ";
                        break;
                    case 408:
                        label += "7LD1CNC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CNC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CNC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CNC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CNC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CNC 408R - ";
                        break;
                    case 409:
                        label += "7LD1CNC 409Q - ";
                        break;
                    case 409:
                        label += "7LD1CNC 409Q - ";
                        break;
                    case 414:
                        label += "7LD1CNC 414Q - ";
                        break;
                    case 414:
                        label += "7LD1CNC 414Q - ";
                        break;
                    case 415:
                        label += "7LD1CNC 415T - ";
                        break;
                    case 415:
                        label += "7LD1CNC 415T - ";
                        break;
                    case 416:
                        label += "7LD1CNC 416G - ";
                        break;
                    case 503:
                        label += "7LD1CNC 503V - ";
                        break;
                    case 503:
                        label += "7LD1CNC 503V - ";
                        break;
                    case 505:
                        label += "7LD1CNC 505Y - ";
                        break;
                    case 505:
                        label += "7LD1CNC 505Y - ";
                        break;
                    case 505:
                        label += "7LD1CNC 505Y - ";
                        break;
                    case 505:
                        label += "7LD1CNC 505Y - ";
                        break;}
                switch (labely){
                    case 118:
                        label += "N 118S\n";
                        break;
                    case 118:
                        label += "N 118S\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 117:
                        label += "N 117Y\n";
                        break;
                    case 117:
                        label += "N 117Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 51:
                        label += "N 51S\n";
                        break;
                    case 52:
                        label += "N 52S\n";
                        break;
                    case 51:
                        label += "N 51S\n";
                        break;
                    case 119:
                        label += "N 119L\n";
                        break;
                    case 119:
                        label += "N 119L\n";
                        break;
                    case 20:
                        label += "N 20D\n";
                        break;
                    case 20:
                        label += "N 20D\n";
                        break;
                    case 21:
                        label += "N 21I\n";
                        break;
                    case 120:
                        label += "N 120P\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});