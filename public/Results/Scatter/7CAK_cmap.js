
var myChart7CAK = 0;
var ctx = document.getElementById('7CAK').getContext('2d');
if (window.myChart7CAK != 0){
    window.myChart7CAK.destroy();
}
window.myChart7CAK = new Chart(ctx, {
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
                {x: 408, y: 102},
                {x: 408, y: 102},
                {x: 408, y: 102},
                {x: 408, y: 102},
                {x: 408, y: 102},
                {x: 408, y: 102},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 405, y: 102},
                {x: 405, y: 102},
                {x: 405, y: 102},
                {x: 405, y: 102},
                {x: 405, y: 102},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 373, y: 92},
                {x: 374, y: 92},
                {x: 374, y: 92},
                {x: 374, y: 93},
                {x: 375, y: 91},
                {x: 375, y: 91},
                {x: 375, y: 92},
                {x: 375, y: 92},
                {x: 375, y: 93},
                {x: 375, y: 95},
                {x: 376, y: 50},
                {x: 376, y: 105},
                {x: 377, y: 50},
                {x: 377, y: 50},
                {x: 377, y: 59},
                {x: 378, y: 50},
                {x: 378, y: 56},
                {x: 378, y: 58},
                {x: 378, y: 58},
                {x: 383, y: 69},
                {x: 385, y: 65},
                {x: 405, y: 104},
                {x: 405, y: 104},
                {x: 408, y: 102},
                {x: 408, y: 102},
                {x: 408, y: 102},
                {x: 414, y: 101},
                {x: 414, y: 101},
                {x: 376, y: 50},
                {x: 377, y: 50},
                {x: 377, y: 50},
                {x: 377, y: 59},
                {x: 378, y: 56},
                {x: 378, y: 58},
                {x: 378, y: 58},
                {x: 383, y: 69},
                {x: 385, y: 65},
                {x: 408, y: 102},
                {x: 414, y: 101},
                {x: 375, y: 92},
                {x: 375, y: 93},
                {x: 508, y: 91},
                {x: 376, y: 50},
                {x: 378, y: 56},
                {x: 378, y: 58},
                {x: 378, y: 58},
                {x: 383, y: 69},
                {x: 408, y: 102},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 377, y: 93},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 377, y: 93},
                {x: 377, y: 93},
                {x: 503, y: 31},
                {x: 503, y: 31},
                {x: 365, y: 62},
                {x: 369, y: 62},
                {x: 378, y: 50},
                {x: 384, y: 60},
                {x: 384, y: 60},
                {x: 384, y: 62},
                {x: 384, y: 62},
                {x: 385, y: 62},
                {x: 385, y: 65},
                {x: 385, y: 65},
                {x: 405, y: 103},
                {x: 408, y: 101},
                {x: 408, y: 101},
                {x: 408, y: 102},
                {x: 408, y: 102},
                {x: 372, y: 92},
                {x: 372, y: 92},
                {x: 369, y: 62},
                {x: 384, y: 60},
                {x: 385, y: 62},
                {x: 385, y: 65},
                {x: 408, y: 101},
                {x: 408, y: 101},
                {x: 408, y: 101},
                {x: 503, y: 103},
                {x: 365, y: 62},
                {x: 369, y: 62},
                {x: 385, y: 65},
                {x: 385, y: 65},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CAK Superpose"],
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
                    case 373:
                        label += "7CAKADA 373S - ";
                        break;
                    case 374:
                        label += "7CAKADA 374F - ";
                        break;
                    case 374:
                        label += "7CAKADA 374F - ";
                        break;
                    case 374:
                        label += "7CAKADA 374F - ";
                        break;
                    case 375:
                        label += "7CAKADA 375S - ";
                        break;
                    case 375:
                        label += "7CAKADA 375S - ";
                        break;
                    case 375:
                        label += "7CAKADA 375S - ";
                        break;
                    case 375:
                        label += "7CAKADA 375S - ";
                        break;
                    case 375:
                        label += "7CAKADA 375S - ";
                        break;
                    case 375:
                        label += "7CAKADA 375S - ";
                        break;
                    case 377:
                        label += "7CAKADA 377F - ";
                        break;
                    case 377:
                        label += "7CAKADA 377F - ";
                        break;
                    case 377:
                        label += "7CAKADA 377F - ";
                        break;
                    case 503:
                        label += "7CAKADA 503V - ";
                        break;
                    case 503:
                        label += "7CAKADA 503V - ";
                        break;
                    case 365:
                        label += "7CAKAEA 365Y - ";
                        break;
                    case 369:
                        label += "7CAKAEA 369Y - ";
                        break;
                    case 376:
                        label += "7CAKAEA 376T - ";
                        break;
                    case 376:
                        label += "7CAKAEA 376T - ";
                        break;
                    case 377:
                        label += "7CAKAEA 377F - ";
                        break;
                    case 377:
                        label += "7CAKAEA 377F - ";
                        break;
                    case 377:
                        label += "7CAKAEA 377F - ";
                        break;
                    case 378:
                        label += "7CAKAEA 378K - ";
                        break;
                    case 378:
                        label += "7CAKAEA 378K - ";
                        break;
                    case 378:
                        label += "7CAKAEA 378K - ";
                        break;
                    case 378:
                        label += "7CAKAEA 378K - ";
                        break;
                    case 378:
                        label += "7CAKAEA 378K - ";
                        break;
                    case 383:
                        label += "7CAKAEA 383S - ";
                        break;
                    case 384:
                        label += "7CAKAEA 384P - ";
                        break;
                    case 384:
                        label += "7CAKAEA 384P - ";
                        break;
                    case 384:
                        label += "7CAKAEA 384P - ";
                        break;
                    case 384:
                        label += "7CAKAEA 384P - ";
                        break;
                    case 385:
                        label += "7CAKAEA 385T - ";
                        break;
                    case 385:
                        label += "7CAKAEA 385T - ";
                        break;
                    case 385:
                        label += "7CAKAEA 385T - ";
                        break;
                    case 385:
                        label += "7CAKAEA 385T - ";
                        break;
                    case 405:
                        label += "7CAKAEA 405D - ";
                        break;
                    case 405:
                        label += "7CAKAEA 405D - ";
                        break;
                    case 405:
                        label += "7CAKAEA 405D - ";
                        break;
                    case 405:
                        label += "7CAKAEA 405D - ";
                        break;
                    case 405:
                        label += "7CAKAEA 405D - ";
                        break;
                    case 408:
                        label += "7CAKAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAKAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAKAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAKAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAKAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAKAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAKAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAKAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAKAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAKAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAKAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAKAEA 408R - ";
                        break;
                    case 408:
                        label += "7CAKAEA 408R - ";
                        break;
                    case 414:
                        label += "7CAKAEA 414Q - ";
                        break;
                    case 414:
                        label += "7CAKAEA 414Q - ";
                        break;
                    case 372:
                        label += "7CAKBFB 372A - ";
                        break;
                    case 372:
                        label += "7CAKBFB 372A - ";
                        break;
                    case 369:
                        label += "7CAKBGB 369Y - ";
                        break;
                    case 376:
                        label += "7CAKBGB 376T - ";
                        break;
                    case 377:
                        label += "7CAKBGB 377F - ";
                        break;
                    case 377:
                        label += "7CAKBGB 377F - ";
                        break;
                    case 377:
                        label += "7CAKBGB 377F - ";
                        break;
                    case 378:
                        label += "7CAKBGB 378K - ";
                        break;
                    case 378:
                        label += "7CAKBGB 378K - ";
                        break;
                    case 378:
                        label += "7CAKBGB 378K - ";
                        break;
                    case 383:
                        label += "7CAKBGB 383S - ";
                        break;
                    case 384:
                        label += "7CAKBGB 384P - ";
                        break;
                    case 385:
                        label += "7CAKBGB 385T - ";
                        break;
                    case 385:
                        label += "7CAKBGB 385T - ";
                        break;
                    case 385:
                        label += "7CAKBGB 385T - ";
                        break;
                    case 405:
                        label += "7CAKBGB 405D - ";
                        break;
                    case 405:
                        label += "7CAKBGB 405D - ";
                        break;
                    case 405:
                        label += "7CAKBGB 405D - ";
                        break;
                    case 408:
                        label += "7CAKBGB 408R - ";
                        break;
                    case 408:
                        label += "7CAKBGB 408R - ";
                        break;
                    case 408:
                        label += "7CAKBGB 408R - ";
                        break;
                    case 408:
                        label += "7CAKBGB 408R - ";
                        break;
                    case 414:
                        label += "7CAKBGB 414Q - ";
                        break;
                    case 503:
                        label += "7CAKBGB 503V - ";
                        break;
                    case 375:
                        label += "7CAKCHC 375S - ";
                        break;
                    case 375:
                        label += "7CAKCHC 375S - ";
                        break;
                    case 508:
                        label += "7CAKCHC 508Y - ";
                        break;
                    case 365:
                        label += "7CAKCIC 365Y - ";
                        break;
                    case 369:
                        label += "7CAKCIC 369Y - ";
                        break;
                    case 376:
                        label += "7CAKCIC 376T - ";
                        break;
                    case 378:
                        label += "7CAKCIC 378K - ";
                        break;
                    case 378:
                        label += "7CAKCIC 378K - ";
                        break;
                    case 378:
                        label += "7CAKCIC 378K - ";
                        break;
                    case 383:
                        label += "7CAKCIC 383S - ";
                        break;
                    case 385:
                        label += "7CAKCIC 385T - ";
                        break;
                    case 385:
                        label += "7CAKCIC 385T - ";
                        break;
                    case 408:
                        label += "7CAKCIC 408R - ";
                        break;
                    case 408:
                        label += "7CAKCIC 408R - ";
                        break;
                    case 408:
                        label += "7CAKCIC 408R - ";
                        break;
                    case 408:
                        label += "7CAKCIC 408R - ";
                        break;
                    case 408:
                        label += "7CAKCIC 408R - ";
                        break;
                    case 408:
                        label += "7CAKCIC 408R - ";
                        break;
                    case 408:
                        label += "7CAKCIC 408R - ";
                        break;}
                switch (labely){
                    case 92:
                        label += "D 92F\n";
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
                    case 91:
                        label += "D 91N\n";
                        break;
                    case 91:
                        label += "D 91N\n";
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
                    case 95:
                        label += "D 95Y\n";
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
                    case 31:
                        label += "D 31N\n";
                        break;
                    case 31:
                        label += "D 31N\n";
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
                    case 105:
                        label += "E 105Y\n";
                        break;
                    case 50:
                        label += "E 50Y\n";
                        break;
                    case 50:
                        label += "E 50Y\n";
                        break;
                    case 59:
                        label += "E 59S\n";
                        break;
                    case 50:
                        label += "E 50Y\n";
                        break;
                    case 50:
                        label += "E 50Y\n";
                        break;
                    case 56:
                        label += "E 56G\n";
                        break;
                    case 58:
                        label += "E 58T\n";
                        break;
                    case 58:
                        label += "E 58T\n";
                        break;
                    case 69:
                        label += "E 69T\n";
                        break;
                    case 60:
                        label += "E 60D\n";
                        break;
                    case 60:
                        label += "E 60D\n";
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
                    case 65:
                        label += "E 65K\n";
                        break;
                    case 65:
                        label += "E 65K\n";
                        break;
                    case 65:
                        label += "E 65K\n";
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
                    case 101:
                        label += "E 101Y\n";
                        break;
                    case 101:
                        label += "E 101Y\n";
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
                    case 102:
                        label += "E 102D\n";
                        break;
                    case 101:
                        label += "E 101Y\n";
                        break;
                    case 101:
                        label += "E 101Y\n";
                        break;
                    case 92:
                        label += "F 92F\n";
                        break;
                    case 92:
                        label += "F 92F\n";
                        break;
                    case 62:
                        label += "G 62L\n";
                        break;
                    case 50:
                        label += "G 50Y\n";
                        break;
                    case 50:
                        label += "G 50Y\n";
                        break;
                    case 50:
                        label += "G 50Y\n";
                        break;
                    case 59:
                        label += "G 59S\n";
                        break;
                    case 56:
                        label += "G 56G\n";
                        break;
                    case 58:
                        label += "G 58T\n";
                        break;
                    case 58:
                        label += "G 58T\n";
                        break;
                    case 69:
                        label += "G 69T\n";
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
                    case 101:
                        label += "G 101Y\n";
                        break;
                    case 102:
                        label += "G 102D\n";
                        break;
                    case 101:
                        label += "G 101Y\n";
                        break;
                    case 103:
                        label += "G 103P\n";
                        break;
                    case 92:
                        label += "H 92F\n";
                        break;
                    case 93:
                        label += "H 93W\n";
                        break;
                    case 91:
                        label += "H 91N\n";
                        break;
                    case 62:
                        label += "I 62L\n";
                        break;
                    case 62:
                        label += "I 62L\n";
                        break;
                    case 50:
                        label += "I 50Y\n";
                        break;
                    case 56:
                        label += "I 56G\n";
                        break;
                    case 58:
                        label += "I 58T\n";
                        break;
                    case 58:
                        label += "I 58T\n";
                        break;
                    case 69:
                        label += "I 69T\n";
                        break;
                    case 65:
                        label += "I 65K\n";
                        break;
                    case 65:
                        label += "I 65K\n";
                        break;
                    case 102:
                        label += "I 102D\n";
                        break;
                    case 102:
                        label += "I 102D\n";
                        break;
                    case 102:
                        label += "I 102D\n";
                        break;
                    case 102:
                        label += "I 102D\n";
                        break;
                    case 102:
                        label += "I 102D\n";
                        break;
                    case 102:
                        label += "I 102D\n";
                        break;
                    case 102:
                        label += "I 102D\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});