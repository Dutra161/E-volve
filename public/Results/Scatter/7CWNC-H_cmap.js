
var myChart7CWNC_H = 0;
var ctx = document.getElementById('7CWNC-H').getContext('2d');
if (window.myChart7CWNC_H != 0){
    window.myChart7CWNC_H.destroy();
}
window.myChart7CWNC_H = new Chart(ctx, {
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
            data: [{x: 375, y: 50},
                {x: 377, y: 50},
                {x: 377, y: 50},
                {x: 377, y: 59},
                {x: 378, y: 33},
                {x: 378, y: 56},
                {x: 379, y: 58},
                {x: 380, y: 55},
                {x: 380, y: 56},
                {x: 380, y: 56},
                {x: 383, y: 69},
                {x: 386, y: 67},
                {x: 386, y: 69},
                {x: 412, y: 55},
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
            data: [{x: 369, y: 62},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 369, y: 62},
                {x: 380, y: 55},
                {x: 380, y: 55},
                {x: 384, y: 60},
                {x: 385, y: 60},
                {x: 385, y: 62},
                {x: 408, y: 101},
                {x: 408, y: 101},
                {x: 508, y: 103},
                {x: 508, y: 103},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CWNC-H"],
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
                        label += "7CWNCHC 369Y - ";
                        break;
                    case 369:
                        label += "7CWNCHC 369Y - ";
                        break;
                    case 369:
                        label += "7CWNCHC 369Y - ";
                        break;
                    case 369:
                        label += "7CWNCHC 369Y - ";
                        break;
                    case 369:
                        label += "7CWNCHC 369Y - ";
                        break;
                    case 369:
                        label += "7CWNCHC 369Y - ";
                        break;
                    case 369:
                        label += "7CWNCHC 369Y - ";
                        break;
                    case 375:
                        label += "7CWNCHC 375S - ";
                        break;
                    case 377:
                        label += "7CWNCHC 377F - ";
                        break;
                    case 377:
                        label += "7CWNCHC 377F - ";
                        break;
                    case 377:
                        label += "7CWNCHC 377F - ";
                        break;
                    case 378:
                        label += "7CWNCHC 378K - ";
                        break;
                    case 378:
                        label += "7CWNCHC 378K - ";
                        break;
                    case 379:
                        label += "7CWNCHC 379C - ";
                        break;
                    case 380:
                        label += "7CWNCHC 380Y - ";
                        break;
                    case 380:
                        label += "7CWNCHC 380Y - ";
                        break;
                    case 380:
                        label += "7CWNCHC 380Y - ";
                        break;
                    case 380:
                        label += "7CWNCHC 380Y - ";
                        break;
                    case 380:
                        label += "7CWNCHC 380Y - ";
                        break;
                    case 383:
                        label += "7CWNCHC 383S - ";
                        break;
                    case 384:
                        label += "7CWNCHC 384P - ";
                        break;
                    case 385:
                        label += "7CWNCHC 385T - ";
                        break;
                    case 385:
                        label += "7CWNCHC 385T - ";
                        break;
                    case 386:
                        label += "7CWNCHC 386K - ";
                        break;
                    case 386:
                        label += "7CWNCHC 386K - ";
                        break;
                    case 408:
                        label += "7CWNCHC 408R - ";
                        break;
                    case 408:
                        label += "7CWNCHC 408R - ";
                        break;
                    case 412:
                        label += "7CWNCHC 412P - ";
                        break;
                    case 508:
                        label += "7CWNCHC 508Y - ";
                        break;
                    case 508:
                        label += "7CWNCHC 508Y - ";
                        break;}
                switch (labely){
                    case 62:
                        label += "H 62L\n";
                        break;
                    case 62:
                        label += "H 62L\n";
                        break;
                    case 62:
                        label += "H 62L\n";
                        break;
                    case 62:
                        label += "H 62L\n";
                        break;
                    case 62:
                        label += "H 62L\n";
                        break;
                    case 62:
                        label += "H 62L\n";
                        break;
                    case 62:
                        label += "H 62L\n";
                        break;
                    case 50:
                        label += "H 50Y\n";
                        break;
                    case 50:
                        label += "H 50Y\n";
                        break;
                    case 50:
                        label += "H 50Y\n";
                        break;
                    case 59:
                        label += "H 59S\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 56:
                        label += "H 56G\n";
                        break;
                    case 58:
                        label += "H 58T\n";
                        break;
                    case 55:
                        label += "H 55N\n";
                        break;
                    case 55:
                        label += "H 55N\n";
                        break;
                    case 55:
                        label += "H 55N\n";
                        break;
                    case 56:
                        label += "H 56G\n";
                        break;
                    case 56:
                        label += "H 56G\n";
                        break;
                    case 69:
                        label += "H 69T\n";
                        break;
                    case 60:
                        label += "H 60D\n";
                        break;
                    case 60:
                        label += "H 60D\n";
                        break;
                    case 62:
                        label += "H 62L\n";
                        break;
                    case 67:
                        label += "H 67A\n";
                        break;
                    case 69:
                        label += "H 69T\n";
                        break;
                    case 101:
                        label += "H 101Y\n";
                        break;
                    case 101:
                        label += "H 101Y\n";
                        break;
                    case 55:
                        label += "H 55N\n";
                        break;
                    case 103:
                        label += "H 103P\n";
                        break;
                    case 103:
                        label += "H 103P\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});