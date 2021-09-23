
var myChart7CAIB_G = 0;
var ctx = document.getElementById('7CAIB-G').getContext('2d');
if (window.myChart7CAIB_G != 0){
    window.myChart7CAIB_G.destroy();
}
window.myChart7CAIB_G = new Chart(ctx, {
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
            data: [{x: 408, y: 102},
                {x: 408, y: 102},
                {x: 408, y: 102},
                {x: 408, y: 102},
                {x: 408, y: 102},
                {x: 408, y: 102},
                {x: 408, y: 102},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 405, y: 102},
                {x: 405, y: 102},
                {x: 405, y: 102},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 376, y: 50},
                {x: 376, y: 105},
                {x: 377, y: 50},
                {x: 378, y: 57},
                {x: 379, y: 58},
                {x: 380, y: 57},
                {x: 385, y: 65},
                {x: 405, y: 104},
                {x: 405, y: 104},
                {x: 408, y: 102},
                {x: 414, y: 101},
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
            data: [{x: 369, y: 62},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 376, y: 103},
                {x: 378, y: 50},
                {x: 380, y: 55},
                {x: 380, y: 55},
                {x: 384, y: 60},
                {x: 385, y: 62},
                {x: 385, y: 65},
                {x: 385, y: 65},
                {x: 408, y: 101},
                {x: 408, y: 101},
                {x: 408, y: 101},
                {x: 408, y: 102},
                {x: 414, y: 101},
                {x: 508, y: 103},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CAIB-G"],
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
                    case 369:
                        label += "7CAIBGB 369Y - ";
                        break;
                    case 369:
                        label += "7CAIBGB 369Y - ";
                        break;
                    case 369:
                        label += "7CAIBGB 369Y - ";
                        break;
                    case 369:
                        label += "7CAIBGB 369Y - ";
                        break;
                    case 376:
                        label += "7CAIBGB 376T - ";
                        break;
                    case 376:
                        label += "7CAIBGB 376T - ";
                        break;
                    case 376:
                        label += "7CAIBGB 376T - ";
                        break;
                    case 377:
                        label += "7CAIBGB 377F - ";
                        break;
                    case 378:
                        label += "7CAIBGB 378K - ";
                        break;
                    case 378:
                        label += "7CAIBGB 378K - ";
                        break;
                    case 379:
                        label += "7CAIBGB 379C - ";
                        break;
                    case 380:
                        label += "7CAIBGB 380Y - ";
                        break;
                    case 380:
                        label += "7CAIBGB 380Y - ";
                        break;
                    case 380:
                        label += "7CAIBGB 380Y - ";
                        break;
                    case 384:
                        label += "7CAIBGB 384P - ";
                        break;
                    case 385:
                        label += "7CAIBGB 385T - ";
                        break;
                    case 385:
                        label += "7CAIBGB 385T - ";
                        break;
                    case 385:
                        label += "7CAIBGB 385T - ";
                        break;
                    case 385:
                        label += "7CAIBGB 385T - ";
                        break;
                    case 405:
                        label += "7CAIBGB 405D - ";
                        break;
                    case 405:
                        label += "7CAIBGB 405D - ";
                        break;
                    case 405:
                        label += "7CAIBGB 405D - ";
                        break;
                    case 405:
                        label += "7CAIBGB 405D - ";
                        break;
                    case 405:
                        label += "7CAIBGB 405D - ";
                        break;
                    case 408:
                        label += "7CAIBGB 408R - ";
                        break;
                    case 408:
                        label += "7CAIBGB 408R - ";
                        break;
                    case 408:
                        label += "7CAIBGB 408R - ";
                        break;
                    case 408:
                        label += "7CAIBGB 408R - ";
                        break;
                    case 408:
                        label += "7CAIBGB 408R - ";
                        break;
                    case 408:
                        label += "7CAIBGB 408R - ";
                        break;
                    case 408:
                        label += "7CAIBGB 408R - ";
                        break;
                    case 408:
                        label += "7CAIBGB 408R - ";
                        break;
                    case 408:
                        label += "7CAIBGB 408R - ";
                        break;
                    case 408:
                        label += "7CAIBGB 408R - ";
                        break;
                    case 408:
                        label += "7CAIBGB 408R - ";
                        break;
                    case 414:
                        label += "7CAIBGB 414Q - ";
                        break;
                    case 414:
                        label += "7CAIBGB 414Q - ";
                        break;
                    case 508:
                        label += "7CAIBGB 508Y - ";
                        break;}
                switch (labely){
                    case 62:
                        label += "G 62L\n";
                        break;
                    case 62:
                        label += "G 62L\n";
                        break;
                    case 62:
                        label += "G 62L\n";
                        break;
                    case 62:
                        label += "G 62L\n";
                        break;
                    case 50:
                        label += "G 50Y\n";
                        break;
                    case 103:
                        label += "G 103P\n";
                        break;
                    case 105:
                        label += "G 105Y\n";
                        break;
                    case 50:
                        label += "G 50Y\n";
                        break;
                    case 50:
                        label += "G 50Y\n";
                        break;
                    case 57:
                        label += "G 57G\n";
                        break;
                    case 58:
                        label += "G 58T\n";
                        break;
                    case 55:
                        label += "G 55N\n";
                        break;
                    case 55:
                        label += "G 55N\n";
                        break;
                    case 57:
                        label += "G 57G\n";
                        break;
                    case 60:
                        label += "G 60D\n";
                        break;
                    case 62:
                        label += "G 62L\n";
                        break;
                    case 65:
                        label += "G 65K\n";
                        break;
                    case 65:
                        label += "G 65K\n";
                        break;
                    case 65:
                        label += "G 65K\n";
                        break;
                    case 102:
                        label += "G 102D\n";
                        break;
                    case 102:
                        label += "G 102D\n";
                        break;
                    case 102:
                        label += "G 102D\n";
                        break;
                    case 104:
                        label += "G 104Y\n";
                        break;
                    case 104:
                        label += "G 104Y\n";
                        break;
                    case 101:
                        label += "G 101Y\n";
                        break;
                    case 101:
                        label += "G 101Y\n";
                        break;
                    case 101:
                        label += "G 101Y\n";
                        break;
                    case 102:
                        label += "G 102D\n";
                        break;
                    case 102:
                        label += "G 102D\n";
                        break;
                    case 102:
                        label += "G 102D\n";
                        break;
                    case 102:
                        label += "G 102D\n";
                        break;
                    case 102:
                        label += "G 102D\n";
                        break;
                    case 102:
                        label += "G 102D\n";
                        break;
                    case 102:
                        label += "G 102D\n";
                        break;
                    case 102:
                        label += "G 102D\n";
                        break;
                    case 101:
                        label += "G 101Y\n";
                        break;
                    case 101:
                        label += "G 101Y\n";
                        break;
                    case 103:
                        label += "G 103P\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});