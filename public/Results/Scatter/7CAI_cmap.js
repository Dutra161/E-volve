
var myChart7CAI = 0;
var ctx = document.getElementById('7CAI').getContext('2d');
if (window.myChart7CAI != 0){
    window.myChart7CAI.destroy();
}
window.myChart7CAI = new Chart(ctx, {
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
                {x: 408, y: 102},
                {x: 408, y: 102},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 405, y: 102},
                {x: 405, y: 102},
                {x: 405, y: 102},
                {x: 405, y: 102},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 373, y: 93},
                {x: 374, y: 92},
                {x: 374, y: 93},
                {x: 375, y: 91},
                {x: 437, y: 29},
                {x: 376, y: 50},
                {x: 376, y: 105},
                {x: 377, y: 50},
                {x: 378, y: 57},
                {x: 380, y: 101},
                {x: 383, y: 56},
                {x: 405, y: 104},
                {x: 408, y: 102},
                {x: 372, y: 27},
                {x: 374, y: 92},
                {x: 374, y: 93},
                {x: 375, y: 91},
                {x: 375, y: 92},
                {x: 375, y: 93},
                {x: 437, y: 29},
                {x: 376, y: 50},
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
                {x: 478, y: 71},
                {x: 479, y: 19},
                {x: 481, y: 19},
                {x: 484, y: 75},
                {x: 485, y: 75},
                {x: 486, y: 73},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 369, y: 93},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 369, y: 93},
                {x: 369, y: 93},
                {x: 369, y: 93},
                {x: 369, y: 93},
                {x: 372, y: 92},
                {x: 372, y: 92},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 376, y: 103},
                {x: 376, y: 103},
                {x: 378, y: 33},
                {x: 378, y: 50},
                {x: 380, y: 55},
                {x: 380, y: 55},
                {x: 380, y: 101},
                {x: 385, y: 60},
                {x: 407, y: 103},
                {x: 411, y: 101},
                {x: 412, y: 54},
                {x: 412, y: 54},
                {x: 412, y: 54},
                {x: 412, y: 54},
                {x: 412, y: 54},
                {x: 369, y: 93},
                {x: 372, y: 26},
                {x: 437, y: 92},
                {x: 503, y: 31},
                {x: 503, y: 31},
                {x: 369, y: 62},
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
                {x: 478, y: 71},
                {x: 478, y: 82},
                {x: 479, y: 19},
                {x: 479, y: 19},
                {x: 483, y: 76},
                {x: 483, y: 76},
                {x: 483, y: 76},
                {x: 486, y: 71},
                {x: 486, y: 71},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CAI Superpose"],
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
                        label += "7CAIADA 369Y - ";
                        break;
                    case 369:
                        label += "7CAIADA 369Y - ";
                        break;
                    case 369:
                        label += "7CAIADA 369Y - ";
                        break;
                    case 369:
                        label += "7CAIADA 369Y - ";
                        break;
                    case 369:
                        label += "7CAIADA 369Y - ";
                        break;
                    case 372:
                        label += "7CAIADA 372A - ";
                        break;
                    case 372:
                        label += "7CAIADA 372A - ";
                        break;
                    case 373:
                        label += "7CAIADA 373S - ";
                        break;
                    case 374:
                        label += "7CAIADA 374F - ";
                        break;
                    case 374:
                        label += "7CAIADA 374F - ";
                        break;
                    case 375:
                        label += "7CAIADA 375S - ";
                        break;
                    case 437:
                        label += "7CAIADA 437N - ";
                        break;
                    case 369:
                        label += "7CAIAEA 369Y - ";
                        break;
                    case 369:
                        label += "7CAIAEA 369Y - ";
                        break;
                    case 369:
                        label += "7CAIAEA 369Y - ";
                        break;
                    case 369:
                        label += "7CAIAEA 369Y - ";
                        break;
                    case 369:
                        label += "7CAIAEA 369Y - ";
                        break;
                    case 376:
                        label += "7CAIAEA 376T - ";
                        break;
                    case 376:
                        label += "7CAIAEA 376T - ";
                        break;
                    case 376:
                        label += "7CAIAEA 376T - ";
                        break;
                    case 376:
                        label += "7CAIAEA 376T - ";
                        break;
                    case 377:
                        label += "7CAIAEA 377F - ";
                        break;
                    case 378:
                        label += "7CAIAEA 378K - ";
                        break;
                    case 378:
                        label += "7CAIAEA 378K - ";
                        break;
                    case 378:
                        label += "7CAIAEA 378K - ";
                        break;
                    case 380:
                        label += "7CAIAEA 380Y - ";
                        break;
                    case 380:
                        label += "7CAIAEA 380Y - ";
                        break;
                    case 380:
                        label += "7CAIAEA 380Y - ";
                        break;
                    case 380:
                        label += "7CAIAEA 380Y - ";
                        break;
                    case 383:
                        label += "7CAIAEA 383S - ";
                        break;
                    case 385:
                        label += "7CAIAEA 385T - ";
                        break;
                    case 405:
                        label += "7CAIAEA 405D - ";
                        break;
                    case 405:
                        label += "7CAIAEA 405D - ";
                        break;
                    case 407:
                        label += "7CAIAEA 407V - ";
                        break;
                    case 408:
                        label += "7CAIAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAIAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAIAEA 408R - ";
                        break;
                    case 411:
                        label += "7CAIAEA 411A - ";
                        break;
                    case 412:
                        label += "7CAIAEA 412P - ";
                        break;
                    case 412:
                        label += "7CAIAEA 412P - ";
                        break;
                    case 412:
                        label += "7CAIAEA 412P - ";
                        break;
                    case 412:
                        label += "7CAIAEA 412P - ";
                        break;
                    case 412:
                        label += "7CAIAEA 412P - ";
                        break;
                    case 369:
                        label += "7CAIBFB 369Y - ";
                        break;
                    case 372:
                        label += "7CAIBFB 372A - ";
                        break;
                    case 372:
                        label += "7CAIBFB 372A - ";
                        break;
                    case 374:
                        label += "7CAIBFB 374F - ";
                        break;
                    case 374:
                        label += "7CAIBFB 374F - ";
                        break;
                    case 375:
                        label += "7CAIBFB 375S - ";
                        break;
                    case 375:
                        label += "7CAIBFB 375S - ";
                        break;
                    case 375:
                        label += "7CAIBFB 375S - ";
                        break;
                    case 437:
                        label += "7CAIBFB 437N - ";
                        break;
                    case 437:
                        label += "7CAIBFB 437N - ";
                        break;
                    case 503:
                        label += "7CAIBFB 503V - ";
                        break;
                    case 503:
                        label += "7CAIBFB 503V - ";
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
                        break;
                    case 478:
                        label += "7CAICGC 478T - ";
                        break;
                    case 478:
                        label += "7CAICGC 478T - ";
                        break;
                    case 478:
                        label += "7CAICGC 478T - ";
                        break;
                    case 479:
                        label += "7CAICGC 479P - ";
                        break;
                    case 479:
                        label += "7CAICGC 479P - ";
                        break;
                    case 479:
                        label += "7CAICGC 479P - ";
                        break;
                    case 481:
                        label += "7CAICGC 481N - ";
                        break;
                    case 483:
                        label += "7CAICGC 483V - ";
                        break;
                    case 483:
                        label += "7CAICGC 483V - ";
                        break;
                    case 483:
                        label += "7CAICGC 483V - ";
                        break;
                    case 484:
                        label += "7CAICGC 484E - ";
                        break;
                    case 485:
                        label += "7CAICGC 485G - ";
                        break;
                    case 486:
                        label += "7CAICGC 486F - ";
                        break;
                    case 486:
                        label += "7CAICGC 486F - ";
                        break;
                    case 486:
                        label += "7CAICGC 486F - ";
                        break;}
                switch (labely){
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 92:
                        label += "D 92F\n";
                        break;
                    case 92:
                        label += "D 92F\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 92:
                        label += "D 92F\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 91:
                        label += "D 91N\n";
                        break;
                    case 29:
                        label += "D 29S\n";
                        break;
                    case 62:
                        label += "E 62L\n";
                        break;
                    case 62:
                        label += "E 62L\n";
                        break;
                    case 62:
                        label += "E 62L\n";
                        break;
                    case 62:
                        label += "E 62L\n";
                        break;
                    case 62:
                        label += "E 62L\n";
                        break;
                    case 50:
                        label += "E 50Y\n";
                        break;
                    case 103:
                        label += "E 103P\n";
                        break;
                    case 103:
                        label += "E 103P\n";
                        break;
                    case 105:
                        label += "E 105Y\n";
                        break;
                    case 50:
                        label += "E 50Y\n";
                        break;
                    case 33:
                        label += "E 33Y\n";
                        break;
                    case 50:
                        label += "E 50Y\n";
                        break;
                    case 57:
                        label += "E 57G\n";
                        break;
                    case 55:
                        label += "E 55N\n";
                        break;
                    case 55:
                        label += "E 55N\n";
                        break;
                    case 101:
                        label += "E 101Y\n";
                        break;
                    case 101:
                        label += "E 101Y\n";
                        break;
                    case 56:
                        label += "E 56G\n";
                        break;
                    case 60:
                        label += "E 60D\n";
                        break;
                    case 102:
                        label += "E 102D\n";
                        break;
                    case 104:
                        label += "E 104Y\n";
                        break;
                    case 103:
                        label += "E 103P\n";
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
                    case 101:
                        label += "E 101Y\n";
                        break;
                    case 54:
                        label += "E 54F\n";
                        break;
                    case 54:
                        label += "E 54F\n";
                        break;
                    case 54:
                        label += "E 54F\n";
                        break;
                    case 54:
                        label += "E 54F\n";
                        break;
                    case 54:
                        label += "E 54F\n";
                        break;
                    case 93:
                        label += "F 93W\n";
                        break;
                    case 26:
                        label += "F 26Q\n";
                        break;
                    case 27:
                        label += "F 27S\n";
                        break;
                    case 92:
                        label += "F 92F\n";
                        break;
                    case 93:
                        label += "F 93W\n";
                        break;
                    case 91:
                        label += "F 91N\n";
                        break;
                    case 92:
                        label += "F 92F\n";
                        break;
                    case 93:
                        label += "F 93W\n";
                        break;
                    case 29:
                        label += "F 29S\n";
                        break;
                    case 92:
                        label += "F 92F\n";
                        break;
                    case 31:
                        label += "F 31N\n";
                        break;
                    case 31:
                        label += "F 31N\n";
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
                    case 71:
                        label += "G 71T\n";
                        break;
                    case 71:
                        label += "G 71T\n";
                        break;
                    case 82:
                        label += "G 82E\n";
                        break;
                    case 19:
                        label += "G 19K\n";
                        break;
                    case 19:
                        label += "G 19K\n";
                        break;
                    case 19:
                        label += "G 19K\n";
                        break;
                    case 19:
                        label += "G 19K\n";
                        break;
                    case 76:
                        label += "G 76T\n";
                        break;
                    case 76:
                        label += "G 76T\n";
                        break;
                    case 76:
                        label += "G 76T\n";
                        break;
                    case 75:
                        label += "G 75S\n";
                        break;
                    case 75:
                        label += "G 75S\n";
                        break;
                    case 71:
                        label += "G 71T\n";
                        break;
                    case 71:
                        label += "G 71T\n";
                        break;
                    case 73:
                        label += "G 73D\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});