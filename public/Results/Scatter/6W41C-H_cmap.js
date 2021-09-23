
var myChart6W41C_H = 0;
var ctx = document.getElementById('6W41C-H').getContext('2d');
if (window.myChart6W41C_H != 0){
    window.myChart6W41C_H.destroy();
}
window.myChart6W41C_H = new Chart(ctx, {
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
            data: [{x: 378, y: 54},
                {x: 378, y: 54},
                {x: 378, y: 56},
                {x: 378, y: 56},
                {x: 386, y: 101},
                {x: 386, y: 101},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 377, y: 52},
                {x: 377, y: 52},
                {x: 378, y: 52},
                {x: 378, y: 54},
                {x: 378, y: 54},
                {x: 378, y: 56},
                {x: 379, y: 98},
                {x: 380, y: 99},
                {x: 382, y: 100},
                {x: 383, y: 100},
                {x: 386, y: 101},
                {x: 386, y: 101},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 377, y: 30},
                {x: 377, y: 30},
                {x: 384, y: 31},
                {x: 378, y: 33},
                {x: 378, y: 33},
                {x: 378, y: 52},
                {x: 378, y: 52},
                {x: 378, y: 52},
                {x: 378, y: 52},
                {x: 378, y: 52},
                {x: 380, y: 98},
                {x: 380, y: 98},
                {x: 380, y: 98},
                {x: 380, y: 98},
                {x: 380, y: 98},
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
            text:["6W41C-H"],
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
                    case 377:
                        label += "6W41CHC 377F - ";
                        break;
                    case 377:
                        label += "6W41CHC 377F - ";
                        break;
                    case 384:
                        label += "6W41CHC 384P - ";
                        break;
                    case 378:
                        label += "6W41CHC 378K - ";
                        break;
                    case 378:
                        label += "6W41CHC 378K - ";
                        break;
                    case 377:
                        label += "6W41CHC 377F - ";
                        break;
                    case 377:
                        label += "6W41CHC 377F - ";
                        break;
                    case 378:
                        label += "6W41CHC 378K - ";
                        break;
                    case 378:
                        label += "6W41CHC 378K - ";
                        break;
                    case 378:
                        label += "6W41CHC 378K - ";
                        break;
                    case 378:
                        label += "6W41CHC 378K - ";
                        break;
                    case 378:
                        label += "6W41CHC 378K - ";
                        break;
                    case 378:
                        label += "6W41CHC 378K - ";
                        break;
                    case 378:
                        label += "6W41CHC 378K - ";
                        break;
                    case 378:
                        label += "6W41CHC 378K - ";
                        break;
                    case 378:
                        label += "6W41CHC 378K - ";
                        break;
                    case 378:
                        label += "6W41CHC 378K - ";
                        break;
                    case 379:
                        label += "6W41CHC 379C - ";
                        break;
                    case 380:
                        label += "6W41CHC 380Y - ";
                        break;
                    case 380:
                        label += "6W41CHC 380Y - ";
                        break;
                    case 380:
                        label += "6W41CHC 380Y - ";
                        break;
                    case 380:
                        label += "6W41CHC 380Y - ";
                        break;
                    case 380:
                        label += "6W41CHC 380Y - ";
                        break;
                    case 380:
                        label += "6W41CHC 380Y - ";
                        break;
                    case 382:
                        label += "6W41CHC 382V - ";
                        break;
                    case 383:
                        label += "6W41CHC 383S - ";
                        break;
                    case 386:
                        label += "6W41CHC 386K - ";
                        break;
                    case 386:
                        label += "6W41CHC 386K - ";
                        break;}
                switch (labely){
                    case 30:
                        label += "H 30I\n";
                        break;
                    case 30:
                        label += "H 30I\n";
                        break;
                    case 31:
                        label += "H 31T\n";
                        break;
                    case 33:
                        label += "H 33W\n";
                        break;
                    case 33:
                        label += "H 33W\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 54:
                        label += "H 54D\n";
                        break;
                    case 54:
                        label += "H 54D\n";
                        break;
                    case 56:
                        label += "H 56E\n";
                        break;
                    case 56:
                        label += "H 56E\n";
                        break;
                    case 98:
                        label += "H 98I\n";
                        break;
                    case 98:
                        label += "H 98I\n";
                        break;
                    case 98:
                        label += "H 98I\n";
                        break;
                    case 98:
                        label += "H 98I\n";
                        break;
                    case 98:
                        label += "H 98I\n";
                        break;
                    case 98:
                        label += "H 98I\n";
                        break;
                    case 99:
                        label += "H 99S\n";
                        break;
                    case 100:
                        label += "H 100T\n";
                        break;
                    case 100:
                        label += "H 100T\n";
                        break;
                    case 101:
                        label += "H 101D\n";
                        break;
                    case 101:
                        label += "H 101D\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});