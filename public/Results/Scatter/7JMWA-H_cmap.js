
var myChart7JMWA_H = 0;
var ctx = document.getElementById('7JMWA-H').getContext('2d');
if (window.myChart7JMWA_H != 0){
    window.myChart7JMWA_H.destroy();
}
window.myChart7JMWA_H = new Chart(ctx, {
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
            data: [{x: 379, y: 100},
                {x: 379, y: 100},
                {x: 412, y: 32},
                {x: 413, y: 32},
                {x: 414, y: 101},
                {x: 414, y: 101},
                {x: 427, y: 28},
                {x: 427, y: 31},
                {x: 427, y: 32},
                {x: 427, y: 97},
                {x: 427, y: 97},
                {x: 428, y: 31},
                {x: 429, y: 97},
                {x: 429, y: 97},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 378, y: 99},
                {x: 378, y: 99},
                {x: 378, y: 99},
                {x: 378, y: 99},
                {x: 378, y: 99},
                {x: 378, y: 99},
                {x: 378, y: 99},
                {x: 378, y: 99},
                {x: 378, y: 99},
                {x: 378, y: 99},
                {x: 378, y: 99},
                {x: 379, y: 100},
                {x: 380, y: 97},
                {x: 380, y: 97},
                {x: 380, y: 99},
                {x: 380, y: 99},
                {x: 412, y: 97},
                {x: 427, y: 28},
                {x: 427, y: 32},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7JMWA-H"],
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
                        label += "7JMWAHA 378K - ";
                        break;
                    case 378:
                        label += "7JMWAHA 378K - ";
                        break;
                    case 378:
                        label += "7JMWAHA 378K - ";
                        break;
                    case 378:
                        label += "7JMWAHA 378K - ";
                        break;
                    case 378:
                        label += "7JMWAHA 378K - ";
                        break;
                    case 378:
                        label += "7JMWAHA 378K - ";
                        break;
                    case 378:
                        label += "7JMWAHA 378K - ";
                        break;
                    case 378:
                        label += "7JMWAHA 378K - ";
                        break;
                    case 378:
                        label += "7JMWAHA 378K - ";
                        break;
                    case 378:
                        label += "7JMWAHA 378K - ";
                        break;
                    case 378:
                        label += "7JMWAHA 378K - ";
                        break;
                    case 379:
                        label += "7JMWAHA 379C - ";
                        break;
                    case 379:
                        label += "7JMWAHA 379C - ";
                        break;
                    case 379:
                        label += "7JMWAHA 379C - ";
                        break;
                    case 380:
                        label += "7JMWAHA 380Y - ";
                        break;
                    case 380:
                        label += "7JMWAHA 380Y - ";
                        break;
                    case 380:
                        label += "7JMWAHA 380Y - ";
                        break;
                    case 380:
                        label += "7JMWAHA 380Y - ";
                        break;
                    case 412:
                        label += "7JMWAHA 412P - ";
                        break;
                    case 412:
                        label += "7JMWAHA 412P - ";
                        break;
                    case 413:
                        label += "7JMWAHA 413G - ";
                        break;
                    case 414:
                        label += "7JMWAHA 414Q - ";
                        break;
                    case 414:
                        label += "7JMWAHA 414Q - ";
                        break;
                    case 427:
                        label += "7JMWAHA 427D - ";
                        break;
                    case 427:
                        label += "7JMWAHA 427D - ";
                        break;
                    case 427:
                        label += "7JMWAHA 427D - ";
                        break;
                    case 427:
                        label += "7JMWAHA 427D - ";
                        break;
                    case 427:
                        label += "7JMWAHA 427D - ";
                        break;
                    case 427:
                        label += "7JMWAHA 427D - ";
                        break;
                    case 427:
                        label += "7JMWAHA 427D - ";
                        break;
                    case 428:
                        label += "7JMWAHA 428D - ";
                        break;
                    case 429:
                        label += "7JMWAHA 429F - ";
                        break;
                    case 429:
                        label += "7JMWAHA 429F - ";
                        break;}
                switch (labely){
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 101:
                        label += "H 101Q\n";
                        break;
                    case 101:
                        label += "H 101Q\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});