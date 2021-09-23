
var myChartP0DTC2A_E = 0;
var ctx = document.getElementById('P0DTC2A-E').getContext('2d');
if (window.myChartP0DTC2A_E != 0){
    window.myChartP0DTC2A_E.destroy();
}
window.myChartP0DTC2A_E = new Chart(ctx, {
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
            data: [{x: 403, y: 59},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 403, y: 53},
                {x: 403, y: 58},
                {x: 403, y: 58},
                {x: 417, y: 56},
                {x: 417, y: 57},
                {x: 453, y: 53},
                {x: 473, y: 32},
                {x: 474, y: 32},
                {x: 474, y: 32},
                {x: 475, y: 32},
                {x: 487, y: 96},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 95},
                {x: 489, y: 95},
                {x: 489, y: 95},
                {x: 489, y: 96},
                {x: 496, y: 60},
                {x: 501, y: 60},
                {x: 505, y: 59},
                {x: 505, y: 59},
                {x: 505, y: 64},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 456, y: 32},
                {x: 489, y: 32},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 405, y: 58},
                {x: 455, y: 53},
                {x: 455, y: 53},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 475, y: 32},
                {x: 475, y: 32},
                {x: 475, y: 32},
                {x: 486, y: 98},
                {x: 486, y: 98},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 505, y: 58},
                {x: 505, y: 58},
                {x: 505, y: 64},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["P0DTC2A-E"],
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
                        label += "P0DTC2AEA 403R - ";
                        break;
                    case 403:
                        label += "P0DTC2AEA 403R - ";
                        break;
                    case 403:
                        label += "P0DTC2AEA 403R - ";
                        break;
                    case 403:
                        label += "P0DTC2AEA 403R - ";
                        break;
                    case 405:
                        label += "P0DTC2AEA 405D - ";
                        break;
                    case 417:
                        label += "P0DTC2AEA 417K - ";
                        break;
                    case 417:
                        label += "P0DTC2AEA 417K - ";
                        break;
                    case 453:
                        label += "P0DTC2AEA 453Y - ";
                        break;
                    case 455:
                        label += "P0DTC2AEA 455L - ";
                        break;
                    case 455:
                        label += "P0DTC2AEA 455L - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 473:
                        label += "P0DTC2AEA 473Y - ";
                        break;
                    case 474:
                        label += "P0DTC2AEA 474Q - ";
                        break;
                    case 474:
                        label += "P0DTC2AEA 474Q - ";
                        break;
                    case 475:
                        label += "P0DTC2AEA 475A - ";
                        break;
                    case 475:
                        label += "P0DTC2AEA 475A - ";
                        break;
                    case 475:
                        label += "P0DTC2AEA 475A - ";
                        break;
                    case 475:
                        label += "P0DTC2AEA 475A - ";
                        break;
                    case 486:
                        label += "P0DTC2AEA 486F - ";
                        break;
                    case 486:
                        label += "P0DTC2AEA 486F - ";
                        break;
                    case 487:
                        label += "P0DTC2AEA 487N - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 496:
                        label += "P0DTC2AEA 496G - ";
                        break;
                    case 501:
                        label += "P0DTC2AEA 501N - ";
                        break;
                    case 505:
                        label += "P0DTC2AEA 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2AEA 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2AEA 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2AEA 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2AEA 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2AEA 505Y - ";
                        break;}
                switch (labely){
                    case 53:
                        label += "E 53Y\n";
                        break;
                    case 58:
                        label += "E 58L\n";
                        break;
                    case 58:
                        label += "E 58L\n";
                        break;
                    case 59:
                        label += "E 59E\n";
                        break;
                    case 58:
                        label += "E 58L\n";
                        break;
                    case 56:
                        label += "E 56S\n";
                        break;
                    case 57:
                        label += "E 57N\n";
                        break;
                    case 53:
                        label += "E 53Y\n";
                        break;
                    case 53:
                        label += "E 53Y\n";
                        break;
                    case 53:
                        label += "E 53Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 98:
                        label += "E 98D\n";
                        break;
                    case 98:
                        label += "E 98D\n";
                        break;
                    case 96:
                        label += "E 96N\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 95:
                        label += "E 95N\n";
                        break;
                    case 95:
                        label += "E 95N\n";
                        break;
                    case 95:
                        label += "E 95N\n";
                        break;
                    case 96:
                        label += "E 96N\n";
                        break;
                    case 60:
                        label += "E 60S\n";
                        break;
                    case 60:
                        label += "E 60S\n";
                        break;
                    case 58:
                        label += "E 58L\n";
                        break;
                    case 58:
                        label += "E 58L\n";
                        break;
                    case 59:
                        label += "E 59E\n";
                        break;
                    case 59:
                        label += "E 59E\n";
                        break;
                    case 64:
                        label += "E 64A\n";
                        break;
                    case 64:
                        label += "E 64A\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});