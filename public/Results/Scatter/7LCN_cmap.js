
var myChart7LCN = 0;
var ctx = document.getElementById('7LCN').getContext('2d');
if (window.myChart7LCN != 0){
    window.myChart7LCN.destroy();
}
window.myChart7LCN = new Chart(ctx, {
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
            data: [{x: 146, y: 31},
                {x: 146, y: 31},
                {x: 146, y: 31},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 146, y: 31},
                {x: 146, y: 31},
                {x: 146, y: 106},
                {x: 146, y: 106},
                {x: 148, y: 54},
                {x: 149, y: 30},
                {x: 149, y: 53},
                {x: 148, y: 53},
                {x: 149, y: 30},
                {x: 149, y: 31},
                {x: 244, y: 105},
                {x: 245, y: 106},
                {x: 146, y: 31},
                {x: 146, y: 31},
                {x: 149, y: 30},
                {x: 149, y: 31},
                {x: 244, y: 105},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 145, y: 27},
                {x: 145, y: 102},
                {x: 157, y: 27},
                {x: 145, y: 102},
                {x: 146, y: 108},
                {x: 157, y: 27},
                {x: 145, y: 102},
                {x: 157, y: 27},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 143, y: 104},
                {x: 143, y: 105},
                {x: 143, y: 105},
                {x: 143, y: 105},
                {x: 145, y: 27},
                {x: 145, y: 27},
                {x: 145, y: 31},
                {x: 145, y: 31},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 146, y: 53},
                {x: 152, y: 28},
                {x: 152, y: 30},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 244, y: 104},
                {x: 244, y: 104},
                {x: 244, y: 104},
                {x: 244, y: 104},
                {x: 244, y: 104},
                {x: 244, y: 104},
                {x: 244, y: 104},
                {x: 245, y: 105},
                {x: 140, y: 104},
                {x: 140, y: 104},
                {x: 140, y: 104},
                {x: 143, y: 104},
                {x: 143, y: 104},
                {x: 145, y: 31},
                {x: 145, y: 31},
                {x: 145, y: 31},
                {x: 145, y: 31},
                {x: 145, y: 31},
                {x: 145, y: 31},
                {x: 145, y: 31},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 148, y: 51},
                {x: 148, y: 51},
                {x: 149, y: 30},
                {x: 149, y: 51},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 28},
                {x: 157, y: 28},
                {x: 157, y: 102},
                {x: 157, y: 102},
                {x: 157, y: 102},
                {x: 157, y: 104},
                {x: 244, y: 104},
                {x: 244, y: 104},
                {x: 244, y: 104},
                {x: 244, y: 104},
                {x: 244, y: 104},
                {x: 244, y: 105},
                {x: 244, y: 105},
                {x: 245, y: 105},
                {x: 140, y: 27},
                {x: 140, y: 104},
                {x: 140, y: 104},
                {x: 143, y: 104},
                {x: 143, y: 104},
                {x: 145, y: 31},
                {x: 145, y: 31},
                {x: 145, y: 31},
                {x: 145, y: 31},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 104},
                {x: 149, y: 30},
                {x: 152, y: 28},
                {x: 152, y: 28},
                {x: 152, y: 30},
                {x: 152, y: 30},
                {x: 152, y: 30},
                {x: 152, y: 30},
                {x: 154, y: 28},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 157, y: 27},
                {x: 244, y: 104},
                {x: 244, y: 104},
                {x: 244, y: 104},
                {x: 244, y: 105},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7LCN Superpose"],
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
                    case 143:
                        label += "7LCNABA 143V - ";
                        break;
                    case 143:
                        label += "7LCNABA 143V - ";
                        break;
                    case 143:
                        label += "7LCNABA 143V - ";
                        break;
                    case 143:
                        label += "7LCNABA 143V - ";
                        break;
                    case 145:
                        label += "7LCNABA 145Y - ";
                        break;
                    case 145:
                        label += "7LCNABA 145Y - ";
                        break;
                    case 145:
                        label += "7LCNABA 145Y - ";
                        break;
                    case 145:
                        label += "7LCNABA 145Y - ";
                        break;
                    case 145:
                        label += "7LCNABA 145Y - ";
                        break;
                    case 145:
                        label += "7LCNABA 145Y - ";
                        break;
                    case 145:
                        label += "7LCNABA 145Y - ";
                        break;
                    case 145:
                        label += "7LCNABA 145Y - ";
                        break;
                    case 145:
                        label += "7LCNABA 145Y - ";
                        break;
                    case 145:
                        label += "7LCNABA 145Y - ";
                        break;
                    case 146:
                        label += "7LCNABA 146H - ";
                        break;
                    case 146:
                        label += "7LCNABA 146H - ";
                        break;
                    case 146:
                        label += "7LCNABA 146H - ";
                        break;
                    case 146:
                        label += "7LCNABA 146H - ";
                        break;
                    case 146:
                        label += "7LCNABA 146H - ";
                        break;
                    case 146:
                        label += "7LCNABA 146H - ";
                        break;
                    case 146:
                        label += "7LCNABA 146H - ";
                        break;
                    case 148:
                        label += "7LCNABA 148N - ";
                        break;
                    case 149:
                        label += "7LCNABA 149N - ";
                        break;
                    case 149:
                        label += "7LCNABA 149N - ";
                        break;
                    case 152:
                        label += "7LCNABA 152W - ";
                        break;
                    case 152:
                        label += "7LCNABA 152W - ";
                        break;
                    case 157:
                        label += "7LCNABA 157F - ";
                        break;
                    case 157:
                        label += "7LCNABA 157F - ";
                        break;
                    case 157:
                        label += "7LCNABA 157F - ";
                        break;
                    case 157:
                        label += "7LCNABA 157F - ";
                        break;
                    case 157:
                        label += "7LCNABA 157F - ";
                        break;
                    case 157:
                        label += "7LCNABA 157F - ";
                        break;
                    case 157:
                        label += "7LCNABA 157F - ";
                        break;
                    case 157:
                        label += "7LCNABA 157F - ";
                        break;
                    case 157:
                        label += "7LCNABA 157F - ";
                        break;
                    case 157:
                        label += "7LCNABA 157F - ";
                        break;
                    case 244:
                        label += "7LCNABA 244L - ";
                        break;
                    case 244:
                        label += "7LCNABA 244L - ";
                        break;
                    case 244:
                        label += "7LCNABA 244L - ";
                        break;
                    case 244:
                        label += "7LCNABA 244L - ";
                        break;
                    case 244:
                        label += "7LCNABA 244L - ";
                        break;
                    case 244:
                        label += "7LCNABA 244L - ";
                        break;
                    case 244:
                        label += "7LCNABA 244L - ";
                        break;
                    case 245:
                        label += "7LCNABA 245H - ";
                        break;
                    case 140:
                        label += "7LCNCHC 140F - ";
                        break;
                    case 140:
                        label += "7LCNCHC 140F - ";
                        break;
                    case 140:
                        label += "7LCNCHC 140F - ";
                        break;
                    case 143:
                        label += "7LCNCHC 143V - ";
                        break;
                    case 143:
                        label += "7LCNCHC 143V - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 145:
                        label += "7LCNCHC 145Y - ";
                        break;
                    case 146:
                        label += "7LCNCHC 146H - ";
                        break;
                    case 148:
                        label += "7LCNCHC 148N - ";
                        break;
                    case 148:
                        label += "7LCNCHC 148N - ";
                        break;
                    case 148:
                        label += "7LCNCHC 148N - ";
                        break;
                    case 149:
                        label += "7LCNCHC 149N - ";
                        break;
                    case 149:
                        label += "7LCNCHC 149N - ";
                        break;
                    case 149:
                        label += "7LCNCHC 149N - ";
                        break;
                    case 149:
                        label += "7LCNCHC 149N - ";
                        break;
                    case 157:
                        label += "7LCNCHC 157F - ";
                        break;
                    case 157:
                        label += "7LCNCHC 157F - ";
                        break;
                    case 157:
                        label += "7LCNCHC 157F - ";
                        break;
                    case 157:
                        label += "7LCNCHC 157F - ";
                        break;
                    case 157:
                        label += "7LCNCHC 157F - ";
                        break;
                    case 157:
                        label += "7LCNCHC 157F - ";
                        break;
                    case 157:
                        label += "7LCNCHC 157F - ";
                        break;
                    case 157:
                        label += "7LCNCHC 157F - ";
                        break;
                    case 157:
                        label += "7LCNCHC 157F - ";
                        break;
                    case 157:
                        label += "7LCNCHC 157F - ";
                        break;
                    case 244:
                        label += "7LCNCHC 244L - ";
                        break;
                    case 244:
                        label += "7LCNCHC 244L - ";
                        break;
                    case 244:
                        label += "7LCNCHC 244L - ";
                        break;
                    case 244:
                        label += "7LCNCHC 244L - ";
                        break;
                    case 244:
                        label += "7LCNCHC 244L - ";
                        break;
                    case 244:
                        label += "7LCNCHC 244L - ";
                        break;
                    case 244:
                        label += "7LCNCHC 244L - ";
                        break;
                    case 244:
                        label += "7LCNCHC 244L - ";
                        break;
                    case 245:
                        label += "7LCNCHC 245H - ";
                        break;
                    case 245:
                        label += "7LCNCHC 245H - ";
                        break;
                    case 140:
                        label += "7LCNKMK 140F - ";
                        break;
                    case 140:
                        label += "7LCNKMK 140F - ";
                        break;
                    case 140:
                        label += "7LCNKMK 140F - ";
                        break;
                    case 143:
                        label += "7LCNKMK 143V - ";
                        break;
                    case 143:
                        label += "7LCNKMK 143V - ";
                        break;
                    case 145:
                        label += "7LCNKMK 145Y - ";
                        break;
                    case 145:
                        label += "7LCNKMK 145Y - ";
                        break;
                    case 145:
                        label += "7LCNKMK 145Y - ";
                        break;
                    case 145:
                        label += "7LCNKMK 145Y - ";
                        break;
                    case 145:
                        label += "7LCNKMK 145Y - ";
                        break;
                    case 145:
                        label += "7LCNKMK 145Y - ";
                        break;
                    case 145:
                        label += "7LCNKMK 145Y - ";
                        break;
                    case 145:
                        label += "7LCNKMK 145Y - ";
                        break;
                    case 145:
                        label += "7LCNKMK 145Y - ";
                        break;
                    case 145:
                        label += "7LCNKMK 145Y - ";
                        break;
                    case 145:
                        label += "7LCNKMK 145Y - ";
                        break;
                    case 145:
                        label += "7LCNKMK 145Y - ";
                        break;
                    case 145:
                        label += "7LCNKMK 145Y - ";
                        break;
                    case 146:
                        label += "7LCNKMK 146H - ";
                        break;
                    case 146:
                        label += "7LCNKMK 146H - ";
                        break;
                    case 146:
                        label += "7LCNKMK 146H - ";
                        break;
                    case 149:
                        label += "7LCNKMK 149N - ";
                        break;
                    case 149:
                        label += "7LCNKMK 149N - ";
                        break;
                    case 149:
                        label += "7LCNKMK 149N - ";
                        break;
                    case 152:
                        label += "7LCNKMK 152W - ";
                        break;
                    case 152:
                        label += "7LCNKMK 152W - ";
                        break;
                    case 152:
                        label += "7LCNKMK 152W - ";
                        break;
                    case 152:
                        label += "7LCNKMK 152W - ";
                        break;
                    case 152:
                        label += "7LCNKMK 152W - ";
                        break;
                    case 152:
                        label += "7LCNKMK 152W - ";
                        break;
                    case 154:
                        label += "7LCNKMK 154E - ";
                        break;
                    case 157:
                        label += "7LCNKMK 157F - ";
                        break;
                    case 157:
                        label += "7LCNKMK 157F - ";
                        break;
                    case 157:
                        label += "7LCNKMK 157F - ";
                        break;
                    case 157:
                        label += "7LCNKMK 157F - ";
                        break;
                    case 157:
                        label += "7LCNKMK 157F - ";
                        break;
                    case 157:
                        label += "7LCNKMK 157F - ";
                        break;
                    case 157:
                        label += "7LCNKMK 157F - ";
                        break;
                    case 157:
                        label += "7LCNKMK 157F - ";
                        break;
                    case 157:
                        label += "7LCNKMK 157F - ";
                        break;
                    case 244:
                        label += "7LCNKMK 244L - ";
                        break;
                    case 244:
                        label += "7LCNKMK 244L - ";
                        break;
                    case 244:
                        label += "7LCNKMK 244L - ";
                        break;
                    case 244:
                        label += "7LCNKMK 244L - ";
                        break;
                    case 244:
                        label += "7LCNKMK 244L - ";
                        break;}
                switch (labely){
                    case 104:
                        label += "B 104V\n";
                        break;
                    case 105:
                        label += "B 105V\n";
                        break;
                    case 105:
                        label += "B 105V\n";
                        break;
                    case 105:
                        label += "B 105V\n";
                        break;
                    case 27:
                        label += "B 27Y\n";
                        break;
                    case 27:
                        label += "B 27Y\n";
                        break;
                    case 27:
                        label += "B 27Y\n";
                        break;
                    case 31:
                        label += "B 31E\n";
                        break;
                    case 31:
                        label += "B 31E\n";
                        break;
                    case 102:
                        label += "B 102F\n";
                        break;
                    case 102:
                        label += "B 102F\n";
                        break;
                    case 102:
                        label += "B 102F\n";
                        break;
                    case 102:
                        label += "B 102F\n";
                        break;
                    case 102:
                        label += "B 102F\n";
                        break;
                    case 31:
                        label += "B 31E\n";
                        break;
                    case 31:
                        label += "B 31E\n";
                        break;
                    case 31:
                        label += "B 31E\n";
                        break;
                    case 31:
                        label += "B 31E\n";
                        break;
                    case 53:
                        label += "B 53P\n";
                        break;
                    case 106:
                        label += "B 106T\n";
                        break;
                    case 106:
                        label += "B 106T\n";
                        break;
                    case 54:
                        label += "B 54E\n";
                        break;
                    case 30:
                        label += "B 30P\n";
                        break;
                    case 53:
                        label += "B 53P\n";
                        break;
                    case 28:
                        label += "B 28T\n";
                        break;
                    case 30:
                        label += "B 30P\n";
                        break;
                    case 27:
                        label += "B 27Y\n";
                        break;
                    case 27:
                        label += "B 27Y\n";
                        break;
                    case 27:
                        label += "B 27Y\n";
                        break;
                    case 27:
                        label += "B 27Y\n";
                        break;
                    case 27:
                        label += "B 27Y\n";
                        break;
                    case 27:
                        label += "B 27Y\n";
                        break;
                    case 27:
                        label += "B 27Y\n";
                        break;
                    case 27:
                        label += "B 27Y\n";
                        break;
                    case 27:
                        label += "B 27Y\n";
                        break;
                    case 27:
                        label += "B 27Y\n";
                        break;
                    case 104:
                        label += "B 104V\n";
                        break;
                    case 104:
                        label += "B 104V\n";
                        break;
                    case 104:
                        label += "B 104V\n";
                        break;
                    case 104:
                        label += "B 104V\n";
                        break;
                    case 104:
                        label += "B 104V\n";
                        break;
                    case 104:
                        label += "B 104V\n";
                        break;
                    case 104:
                        label += "B 104V\n";
                        break;
                    case 105:
                        label += "B 105V\n";
                        break;
                    case 104:
                        label += "H 104V\n";
                        break;
                    case 104:
                        label += "H 104V\n";
                        break;
                    case 104:
                        label += "H 104V\n";
                        break;
                    case 104:
                        label += "H 104V\n";
                        break;
                    case 104:
                        label += "H 104V\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 102:
                        label += "H 102F\n";
                        break;
                    case 102:
                        label += "H 102F\n";
                        break;
                    case 102:
                        label += "H 102F\n";
                        break;
                    case 102:
                        label += "H 102F\n";
                        break;
                    case 102:
                        label += "H 102F\n";
                        break;
                    case 102:
                        label += "H 102F\n";
                        break;
                    case 102:
                        label += "H 102F\n";
                        break;
                    case 108:
                        label += "H 108W\n";
                        break;
                    case 51:
                        label += "H 51F\n";
                        break;
                    case 51:
                        label += "H 51F\n";
                        break;
                    case 53:
                        label += "H 53P\n";
                        break;
                    case 30:
                        label += "H 30P\n";
                        break;
                    case 30:
                        label += "H 30P\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 51:
                        label += "H 51F\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 102:
                        label += "H 102F\n";
                        break;
                    case 102:
                        label += "H 102F\n";
                        break;
                    case 102:
                        label += "H 102F\n";
                        break;
                    case 104:
                        label += "H 104V\n";
                        break;
                    case 104:
                        label += "H 104V\n";
                        break;
                    case 104:
                        label += "H 104V\n";
                        break;
                    case 104:
                        label += "H 104V\n";
                        break;
                    case 104:
                        label += "H 104V\n";
                        break;
                    case 104:
                        label += "H 104V\n";
                        break;
                    case 105:
                        label += "H 105V\n";
                        break;
                    case 105:
                        label += "H 105V\n";
                        break;
                    case 105:
                        label += "H 105V\n";
                        break;
                    case 105:
                        label += "H 105V\n";
                        break;
                    case 106:
                        label += "H 106T\n";
                        break;
                    case 27:
                        label += "M 27Y\n";
                        break;
                    case 104:
                        label += "M 104V\n";
                        break;
                    case 104:
                        label += "M 104V\n";
                        break;
                    case 104:
                        label += "M 104V\n";
                        break;
                    case 104:
                        label += "M 104V\n";
                        break;
                    case 31:
                        label += "M 31E\n";
                        break;
                    case 31:
                        label += "M 31E\n";
                        break;
                    case 31:
                        label += "M 31E\n";
                        break;
                    case 31:
                        label += "M 31E\n";
                        break;
                    case 102:
                        label += "M 102F\n";
                        break;
                    case 102:
                        label += "M 102F\n";
                        break;
                    case 102:
                        label += "M 102F\n";
                        break;
                    case 102:
                        label += "M 102F\n";
                        break;
                    case 102:
                        label += "M 102F\n";
                        break;
                    case 102:
                        label += "M 102F\n";
                        break;
                    case 102:
                        label += "M 102F\n";
                        break;
                    case 102:
                        label += "M 102F\n";
                        break;
                    case 104:
                        label += "M 104V\n";
                        break;
                    case 31:
                        label += "M 31E\n";
                        break;
                    case 31:
                        label += "M 31E\n";
                        break;
                    case 31:
                        label += "M 31E\n";
                        break;
                    case 30:
                        label += "M 30P\n";
                        break;
                    case 30:
                        label += "M 30P\n";
                        break;
                    case 31:
                        label += "M 31E\n";
                        break;
                    case 28:
                        label += "M 28T\n";
                        break;
                    case 28:
                        label += "M 28T\n";
                        break;
                    case 30:
                        label += "M 30P\n";
                        break;
                    case 30:
                        label += "M 30P\n";
                        break;
                    case 30:
                        label += "M 30P\n";
                        break;
                    case 30:
                        label += "M 30P\n";
                        break;
                    case 28:
                        label += "M 28T\n";
                        break;
                    case 27:
                        label += "M 27Y\n";
                        break;
                    case 27:
                        label += "M 27Y\n";
                        break;
                    case 27:
                        label += "M 27Y\n";
                        break;
                    case 27:
                        label += "M 27Y\n";
                        break;
                    case 27:
                        label += "M 27Y\n";
                        break;
                    case 27:
                        label += "M 27Y\n";
                        break;
                    case 27:
                        label += "M 27Y\n";
                        break;
                    case 27:
                        label += "M 27Y\n";
                        break;
                    case 27:
                        label += "M 27Y\n";
                        break;
                    case 104:
                        label += "M 104V\n";
                        break;
                    case 104:
                        label += "M 104V\n";
                        break;
                    case 104:
                        label += "M 104V\n";
                        break;
                    case 105:
                        label += "M 105V\n";
                        break;
                    case 105:
                        label += "M 105V\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});