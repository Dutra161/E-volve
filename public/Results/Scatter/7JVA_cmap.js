
var myChart7JVA = 0;
var ctx = document.getElementById('7JVA').getContext('2d');
if (window.myChart7JVA != 0){
    window.myChart7JVA.destroy();
}
window.myChart7JVA = new Chart(ctx, {
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
            data: [{x: 378, y: 52},
                {x: 378, y: 52},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 370, y: 33},
                {x: 370, y: 53},
                {x: 372, y: 59},
                {x: 371, y: 103},
                {x: 371, y: 103},
                {x: 374, y: 103},
                {x: 374, y: 103},
                {x: 408, y: 28},
                {x: 376, y: 31},
                {x: 377, y: 31},
                {x: 375, y: 32},
                {x: 377, y: 32},
                {x: 379, y: 33},
                {x: 379, y: 33},
                {x: 383, y: 51},
                {x: 383, y: 51},
                {x: 378, y: 52},
                {x: 378, y: 52},
                {x: 414, y: 69},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 369, y: 101},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 370, y: 33},
                {x: 372, y: 59},
                {x: 372, y: 59},
                {x: 369, y: 100},
                {x: 369, y: 100},
                {x: 369, y: 100},
                {x: 369, y: 100},
                {x: 385, y: 100},
                {x: 385, y: 100},
                {x: 385, y: 100},
                {x: 369, y: 101},
                {x: 369, y: 101},
                {x: 369, y: 101},
                {x: 369, y: 101},
                {x: 369, y: 101},
                {x: 369, y: 101},
                {x: 369, y: 101},
                {x: 377, y: 101},
                {x: 377, y: 101},
                {x: 377, y: 101},
                {x: 377, y: 101},
                {x: 384, y: 101},
                {x: 384, y: 101},
                {x: 384, y: 101},
                {x: 384, y: 101},
                {x: 384, y: 101},
                {x: 384, y: 101},
                {x: 384, y: 101},
                {x: 384, y: 101},
                {x: 385, y: 101},
                {x: 372, y: 102},
                {x: 384, y: 33},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7JVA Superpose"],
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
                    case 370:
                        label += "7JVAAHA 370N - ";
                        break;
                    case 370:
                        label += "7JVAAHA 370N - ";
                        break;
                    case 370:
                        label += "7JVAAHA 370N - ";
                        break;
                    case 372:
                        label += "7JVAAHA 372A - ";
                        break;
                    case 372:
                        label += "7JVAAHA 372A - ";
                        break;
                    case 372:
                        label += "7JVAAHA 372A - ";
                        break;
                    case 369:
                        label += "7JVAAHA 369Y - ";
                        break;
                    case 369:
                        label += "7JVAAHA 369Y - ";
                        break;
                    case 369:
                        label += "7JVAAHA 369Y - ";
                        break;
                    case 369:
                        label += "7JVAAHA 369Y - ";
                        break;
                    case 385:
                        label += "7JVAAHA 385T - ";
                        break;
                    case 385:
                        label += "7JVAAHA 385T - ";
                        break;
                    case 385:
                        label += "7JVAAHA 385T - ";
                        break;
                    case 369:
                        label += "7JVAAHA 369Y - ";
                        break;
                    case 369:
                        label += "7JVAAHA 369Y - ";
                        break;
                    case 369:
                        label += "7JVAAHA 369Y - ";
                        break;
                    case 369:
                        label += "7JVAAHA 369Y - ";
                        break;
                    case 369:
                        label += "7JVAAHA 369Y - ";
                        break;
                    case 369:
                        label += "7JVAAHA 369Y - ";
                        break;
                    case 369:
                        label += "7JVAAHA 369Y - ";
                        break;
                    case 369:
                        label += "7JVAAHA 369Y - ";
                        break;
                    case 377:
                        label += "7JVAAHA 377F - ";
                        break;
                    case 377:
                        label += "7JVAAHA 377F - ";
                        break;
                    case 377:
                        label += "7JVAAHA 377F - ";
                        break;
                    case 377:
                        label += "7JVAAHA 377F - ";
                        break;
                    case 384:
                        label += "7JVAAHA 384P - ";
                        break;
                    case 384:
                        label += "7JVAAHA 384P - ";
                        break;
                    case 384:
                        label += "7JVAAHA 384P - ";
                        break;
                    case 384:
                        label += "7JVAAHA 384P - ";
                        break;
                    case 384:
                        label += "7JVAAHA 384P - ";
                        break;
                    case 384:
                        label += "7JVAAHA 384P - ";
                        break;
                    case 384:
                        label += "7JVAAHA 384P - ";
                        break;
                    case 384:
                        label += "7JVAAHA 384P - ";
                        break;
                    case 385:
                        label += "7JVAAHA 385T - ";
                        break;
                    case 372:
                        label += "7JVAAHA 372A - ";
                        break;
                    case 371:
                        label += "7JVAAHA 371S - ";
                        break;
                    case 371:
                        label += "7JVAAHA 371S - ";
                        break;
                    case 374:
                        label += "7JVAAHA 374F - ";
                        break;
                    case 374:
                        label += "7JVAAHA 374F - ";
                        break;
                    case 408:
                        label += "7JVAALA 408R - ";
                        break;
                    case 376:
                        label += "7JVAALA 376T - ";
                        break;
                    case 377:
                        label += "7JVAALA 377F - ";
                        break;
                    case 375:
                        label += "7JVAALA 375S - ";
                        break;
                    case 377:
                        label += "7JVAALA 377F - ";
                        break;
                    case 379:
                        label += "7JVAALA 379C - ";
                        break;
                    case 379:
                        label += "7JVAALA 379C - ";
                        break;
                    case 384:
                        label += "7JVAALA 384P - ";
                        break;
                    case 383:
                        label += "7JVAALA 383S - ";
                        break;
                    case 383:
                        label += "7JVAALA 383S - ";
                        break;
                    case 378:
                        label += "7JVAALA 378K - ";
                        break;
                    case 378:
                        label += "7JVAALA 378K - ";
                        break;
                    case 414:
                        label += "7JVAALA 414Q - ";
                        break;}
                switch (labely){
                    case 33:
                        label += "H 33W\n";
                        break;
                    case 33:
                        label += "H 33W\n";
                        break;
                    case 53:
                        label += "H 53Q\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 100:
                        label += "H 100W\n";
                        break;
                    case 100:
                        label += "H 100W\n";
                        break;
                    case 100:
                        label += "H 100W\n";
                        break;
                    case 100:
                        label += "H 100W\n";
                        break;
                    case 100:
                        label += "H 100W\n";
                        break;
                    case 100:
                        label += "H 100W\n";
                        break;
                    case 100:
                        label += "H 100W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 101:
                        label += "H 101W\n";
                        break;
                    case 102:
                        label += "H 102L\n";
                        break;
                    case 103:
                        label += "H 103R\n";
                        break;
                    case 103:
                        label += "H 103R\n";
                        break;
                    case 103:
                        label += "H 103R\n";
                        break;
                    case 103:
                        label += "H 103R\n";
                        break;
                    case 28:
                        label += "L 28S\n";
                        break;
                    case 31:
                        label += "L 31S\n";
                        break;
                    case 31:
                        label += "L 31S\n";
                        break;
                    case 32:
                        label += "L 32N\n";
                        break;
                    case 32:
                        label += "L 32N\n";
                        break;
                    case 33:
                        label += "L 33Y\n";
                        break;
                    case 33:
                        label += "L 33Y\n";
                        break;
                    case 33:
                        label += "L 33Y\n";
                        break;
                    case 51:
                        label += "L 51E\n";
                        break;
                    case 51:
                        label += "L 51E\n";
                        break;
                    case 52:
                        label += "L 52D\n";
                        break;
                    case 52:
                        label += "L 52D\n";
                        break;
                    case 69:
                        label += "L 69S\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});