
var myChart7CAHA_E = 0;
var ctx = document.getElementById('7CAHA-E').getContext('2d');
if (window.myChart7CAHA_E != 0){
    window.myChart7CAHA_E.destroy();
}
window.myChart7CAHA_E = new Chart(ctx, {
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
            data: [{x: 408, y: 100},
                {x: 378, y: 102},
                {x: 378, y: 102},
                {x: 408, y: 102},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 378, y: 33},
                {x: 378, y: 50},
                {x: 379, y: 58},
                {x: 379, y: 58},
                {x: 377, y: 59},
                {x: 378, y: 102},
                {x: 408, y: 102},
                {x: 405, y: 104},
                {x: 405, y: 104},
                {x: 504, y: 104},
                {x: 376, y: 105},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 412, y: 54},
                {x: 380, y: 55},
                {x: 380, y: 55},
                {x: 412, y: 55},
                {x: 384, y: 62},
                {x: 385, y: 65},
                {x: 385, y: 65},
                {x: 408, y: 102},
                {x: 407, y: 103},
                {x: 503, y: 104},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CAHA-E"],
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
                    case 378:
                        label += "7CAHAEA 378K - ";
                        break;
                    case 378:
                        label += "7CAHAEA 378K - ";
                        break;
                    case 412:
                        label += "7CAHAEA 412P - ";
                        break;
                    case 380:
                        label += "7CAHAEA 380Y - ";
                        break;
                    case 380:
                        label += "7CAHAEA 380Y - ";
                        break;
                    case 412:
                        label += "7CAHAEA 412P - ";
                        break;
                    case 379:
                        label += "7CAHAEA 379C - ";
                        break;
                    case 379:
                        label += "7CAHAEA 379C - ";
                        break;
                    case 377:
                        label += "7CAHAEA 377F - ";
                        break;
                    case 384:
                        label += "7CAHAEA 384P - ";
                        break;
                    case 385:
                        label += "7CAHAEA 385T - ";
                        break;
                    case 385:
                        label += "7CAHAEA 385T - ";
                        break;
                    case 408:
                        label += "7CAHAEA 408R - ";
                        break;
                    case 378:
                        label += "7CAHAEA 378K - ";
                        break;
                    case 378:
                        label += "7CAHAEA 378K - ";
                        break;
                    case 408:
                        label += "7CAHAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAHAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAHAEA 408R - ";
                        break;
                    case 407:
                        label += "7CAHAEA 407V - ";
                        break;
                    case 405:
                        label += "7CAHAEA 405D - ";
                        break;
                    case 405:
                        label += "7CAHAEA 405D - ";
                        break;
                    case 503:
                        label += "7CAHAEA 503V - ";
                        break;
                    case 504:
                        label += "7CAHAEA 504G - ";
                        break;
                    case 376:
                        label += "7CAHAEA 376T - ";
                        break;}
                switch (labely){
                    case 33:
                        label += "E 33Y\n";
                        break;
                    case 50:
                        label += "E 50Y\n";
                        break;
                    case 54:
                        label += "E 54F\n";
                        break;
                    case 55:
                        label += "E 55N\n";
                        break;
                    case 55:
                        label += "E 55N\n";
                        break;
                    case 55:
                        label += "E 55N\n";
                        break;
                    case 58:
                        label += "E 58T\n";
                        break;
                    case 58:
                        label += "E 58T\n";
                        break;
                    case 59:
                        label += "E 59S\n";
                        break;
                    case 62:
                        label += "E 62L\n";
                        break;
                    case 65:
                        label += "E 65K\n";
                        break;
                    case 65:
                        label += "E 65K\n";
                        break;
                    case 100:
                        label += "E 100E\n";
                        break;
                    case 102:
                        label += "E 102D\n";
                        break;
                    case 102:
                        label += "E 102D\n";
                        break;
                    case 102:
                        label += "E 102D\n";
                        break;
                    case 102:
                        label += "E 102D\n";
                        break;
                    case 102:
                        label += "E 102D\n";
                        break;
                    case 103:
                        label += "E 103P\n";
                        break;
                    case 104:
                        label += "E 104Y\n";
                        break;
                    case 104:
                        label += "E 104Y\n";
                        break;
                    case 104:
                        label += "E 104Y\n";
                        break;
                    case 104:
                        label += "E 104Y\n";
                        break;
                    case 105:
                        label += "E 105Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});