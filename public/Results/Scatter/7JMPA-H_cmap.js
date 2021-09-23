
var myChart7JMPA_H = 0;
var ctx = document.getElementById('7JMPA-H').getContext('2d');
if (window.myChart7JMPA_H != 0){
    window.myChart7JMPA_H.destroy();
}
window.myChart7JMPA_H = new Chart(ctx, {
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
            data: [{x: 449, y: 73},
                {x: 449, y: 74},
                {x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 54},
                {x: 484, y: 54},
                {x: 484, y: 55},
                {x: 484, y: 56},
                {x: 484, y: 56},
                {x: 484, y: 58},
                {x: 486, y: 52},
                {x: 493, y: 30},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 489, y: 33},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 73},
                {x: 449, y: 73},
                {x: 449, y: 73},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 489, y: 33},
                {x: 489, y: 33},
                {x: 489, y: 33},
                {x: 489, y: 33},
                {x: 489, y: 52},
                {x: 489, y: 52},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7JMPA-H"],
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
                    case 449:
                        label += "7JMPAHA 449Y - ";
                        break;
                    case 449:
                        label += "7JMPAHA 449Y - ";
                        break;
                    case 449:
                        label += "7JMPAHA 449Y - ";
                        break;
                    case 449:
                        label += "7JMPAHA 449Y - ";
                        break;
                    case 449:
                        label += "7JMPAHA 449Y - ";
                        break;
                    case 484:
                        label += "7JMPAHA 484E - ";
                        break;
                    case 484:
                        label += "7JMPAHA 484E - ";
                        break;
                    case 484:
                        label += "7JMPAHA 484E - ";
                        break;
                    case 484:
                        label += "7JMPAHA 484E - ";
                        break;
                    case 484:
                        label += "7JMPAHA 484E - ";
                        break;
                    case 484:
                        label += "7JMPAHA 484E - ";
                        break;
                    case 484:
                        label += "7JMPAHA 484E - ";
                        break;
                    case 484:
                        label += "7JMPAHA 484E - ";
                        break;
                    case 484:
                        label += "7JMPAHA 484E - ";
                        break;
                    case 484:
                        label += "7JMPAHA 484E - ";
                        break;
                    case 486:
                        label += "7JMPAHA 486F - ";
                        break;
                    case 489:
                        label += "7JMPAHA 489Y - ";
                        break;
                    case 489:
                        label += "7JMPAHA 489Y - ";
                        break;
                    case 489:
                        label += "7JMPAHA 489Y - ";
                        break;
                    case 489:
                        label += "7JMPAHA 489Y - ";
                        break;
                    case 489:
                        label += "7JMPAHA 489Y - ";
                        break;
                    case 489:
                        label += "7JMPAHA 489Y - ";
                        break;
                    case 489:
                        label += "7JMPAHA 489Y - ";
                        break;
                    case 493:
                        label += "7JMPAHA 493Q - ";
                        break;}
                switch (labely){
                    case 73:
                        label += "H 73N\n";
                        break;
                    case 73:
                        label += "H 73N\n";
                        break;
                    case 73:
                        label += "H 73N\n";
                        break;
                    case 73:
                        label += "H 73N\n";
                        break;
                    case 74:
                        label += "H 74S\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 53:
                        label += "H 53T\n";
                        break;
                    case 53:
                        label += "H 53T\n";
                        break;
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 55:
                        label += "H 55G\n";
                        break;
                    case 56:
                        label += "H 56T\n";
                        break;
                    case 56:
                        label += "H 56T\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 30:
                        label += "H 30S\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});