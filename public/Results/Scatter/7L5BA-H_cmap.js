
var myChart7L5BA_H = 0;
var ctx = document.getElementById('7L5BA-H').getContext('2d');
if (window.myChart7L5BA_H != 0){
    window.myChart7L5BA_H.destroy();
}
window.myChart7L5BA_H = new Chart(ctx, {
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
            data: [{x: 484, y: 56},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 449, y: 27},
                {x: 449, y: 29},
                {x: 449, y: 77},
                {x: 484, y: 33},
                {x: 484, y: 59},
                {x: 494, y: 30},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 449, y: 29},
                {x: 449, y: 29},
                {x: 449, y: 30},
                {x: 449, y: 30},
                {x: 449, y: 30},
                {x: 449, y: 30},
                {x: 452, y: 54},
                {x: 483, y: 59},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 490, y: 52},
                {x: 490, y: 54},
                {x: 490, y: 54},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7L5BA-H"],
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
                        label += "7L5BAHA 449Y - ";
                        break;
                    case 449:
                        label += "7L5BAHA 449Y - ";
                        break;
                    case 449:
                        label += "7L5BAHA 449Y - ";
                        break;
                    case 449:
                        label += "7L5BAHA 449Y - ";
                        break;
                    case 449:
                        label += "7L5BAHA 449Y - ";
                        break;
                    case 449:
                        label += "7L5BAHA 449Y - ";
                        break;
                    case 449:
                        label += "7L5BAHA 449Y - ";
                        break;
                    case 449:
                        label += "7L5BAHA 449Y - ";
                        break;
                    case 449:
                        label += "7L5BAHA 449Y - ";
                        break;
                    case 452:
                        label += "7L5BAHA 452L - ";
                        break;
                    case 483:
                        label += "7L5BAHA 483V - ";
                        break;
                    case 484:
                        label += "7L5BAHA 484E - ";
                        break;
                    case 484:
                        label += "7L5BAHA 484E - ";
                        break;
                    case 484:
                        label += "7L5BAHA 484E - ";
                        break;
                    case 484:
                        label += "7L5BAHA 484E - ";
                        break;
                    case 484:
                        label += "7L5BAHA 484E - ";
                        break;
                    case 484:
                        label += "7L5BAHA 484E - ";
                        break;
                    case 484:
                        label += "7L5BAHA 484E - ";
                        break;
                    case 490:
                        label += "7L5BAHA 490F - ";
                        break;
                    case 490:
                        label += "7L5BAHA 490F - ";
                        break;
                    case 490:
                        label += "7L5BAHA 490F - ";
                        break;
                    case 494:
                        label += "7L5BAHA 494S - ";
                        break;}
                switch (labely){
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 29:
                        label += "H 29F\n";
                        break;
                    case 29:
                        label += "H 29F\n";
                        break;
                    case 29:
                        label += "H 29F\n";
                        break;
                    case 30:
                        label += "H 30T\n";
                        break;
                    case 30:
                        label += "H 30T\n";
                        break;
                    case 30:
                        label += "H 30T\n";
                        break;
                    case 30:
                        label += "H 30T\n";
                        break;
                    case 77:
                        label += "H 77S\n";
                        break;
                    case 54:
                        label += "H 54I\n";
                        break;
                    case 59:
                        label += "H 59N\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 50:
                        label += "H 50W\n";
                        break;
                    case 50:
                        label += "H 50W\n";
                        break;
                    case 50:
                        label += "H 50W\n";
                        break;
                    case 50:
                        label += "H 50W\n";
                        break;
                    case 56:
                        label += "H 56D\n";
                        break;
                    case 59:
                        label += "H 59N\n";
                        break;
                    case 52:
                        label += "H 52N\n";
                        break;
                    case 54:
                        label += "H 54I\n";
                        break;
                    case 54:
                        label += "H 54I\n";
                        break;
                    case 30:
                        label += "H 30T\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});