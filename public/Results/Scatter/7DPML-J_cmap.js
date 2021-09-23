
var myChart7DPML_J = 0;
var ctx = document.getElementById('7DPML-J').getContext('2d');
if (window.myChart7DPML_J != 0){
    window.myChart7DPML_J.destroy();
}
window.myChart7DPML_J = new Chart(ctx, {
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
            data: [{x: 378, y: 103},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 378, y: 101},
                {x: 369, y: 102},
                {x: 379, y: 105},
                {x: 369, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 376, y: 108},
                {x: 376, y: 108},
                {x: 375, y: 109},
                {x: 372, y: 110},
                {x: 374, y: 110},
                {x: 374, y: 110},
                {x: 375, y: 110},
                {x: 375, y: 111},
                {x: 508, y: 111},
                {x: 508, y: 111},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 369, y: 107},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 378, y: 101},
                {x: 378, y: 101},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 376, y: 108},
                {x: 376, y: 108},
                {x: 378, y: 108},
                {x: 407, y: 108},
                {x: 407, y: 108},
                {x: 407, y: 108},
                {x: 503, y: 109},
                {x: 503, y: 109},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7DPML-J"],
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
                        label += "7DPMLJL 378K - ";
                        break;
                    case 378:
                        label += "7DPMLJL 378K - ";
                        break;
                    case 378:
                        label += "7DPMLJL 378K - ";
                        break;
                    case 369:
                        label += "7DPMLJL 369Y - ";
                        break;
                    case 378:
                        label += "7DPMLJL 378K - ";
                        break;
                    case 379:
                        label += "7DPMLJL 379C - ";
                        break;
                    case 369:
                        label += "7DPMLJL 369Y - ";
                        break;
                    case 369:
                        label += "7DPMLJL 369Y - ";
                        break;
                    case 369:
                        label += "7DPMLJL 369Y - ";
                        break;
                    case 369:
                        label += "7DPMLJL 369Y - ";
                        break;
                    case 369:
                        label += "7DPMLJL 369Y - ";
                        break;
                    case 377:
                        label += "7DPMLJL 377F - ";
                        break;
                    case 377:
                        label += "7DPMLJL 377F - ";
                        break;
                    case 377:
                        label += "7DPMLJL 377F - ";
                        break;
                    case 377:
                        label += "7DPMLJL 377F - ";
                        break;
                    case 377:
                        label += "7DPMLJL 377F - ";
                        break;
                    case 377:
                        label += "7DPMLJL 377F - ";
                        break;
                    case 376:
                        label += "7DPMLJL 376T - ";
                        break;
                    case 376:
                        label += "7DPMLJL 376T - ";
                        break;
                    case 376:
                        label += "7DPMLJL 376T - ";
                        break;
                    case 376:
                        label += "7DPMLJL 376T - ";
                        break;
                    case 378:
                        label += "7DPMLJL 378K - ";
                        break;
                    case 407:
                        label += "7DPMLJL 407V - ";
                        break;
                    case 407:
                        label += "7DPMLJL 407V - ";
                        break;
                    case 407:
                        label += "7DPMLJL 407V - ";
                        break;
                    case 375:
                        label += "7DPMLJL 375S - ";
                        break;
                    case 503:
                        label += "7DPMLJL 503V - ";
                        break;
                    case 503:
                        label += "7DPMLJL 503V - ";
                        break;
                    case 372:
                        label += "7DPMLJL 372A - ";
                        break;
                    case 374:
                        label += "7DPMLJL 374F - ";
                        break;
                    case 374:
                        label += "7DPMLJL 374F - ";
                        break;
                    case 375:
                        label += "7DPMLJL 375S - ";
                        break;
                    case 375:
                        label += "7DPMLJL 375S - ";
                        break;
                    case 508:
                        label += "7DPMLJL 508Y - ";
                        break;
                    case 508:
                        label += "7DPMLJL 508Y - ";
                        break;}
                switch (labely){
                    case 101:
                        label += "J 101Y\n";
                        break;
                    case 101:
                        label += "J 101Y\n";
                        break;
                    case 101:
                        label += "J 101Y\n";
                        break;
                    case 102:
                        label += "J 102Y\n";
                        break;
                    case 103:
                        label += "J 103D\n";
                        break;
                    case 105:
                        label += "J 105S\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 109:
                        label += "J 109F\n";
                        break;
                    case 109:
                        label += "J 109F\n";
                        break;
                    case 109:
                        label += "J 109F\n";
                        break;
                    case 110:
                        label += "J 110R\n";
                        break;
                    case 110:
                        label += "J 110R\n";
                        break;
                    case 110:
                        label += "J 110R\n";
                        break;
                    case 110:
                        label += "J 110R\n";
                        break;
                    case 111:
                        label += "J 111E\n";
                        break;
                    case 111:
                        label += "J 111E\n";
                        break;
                    case 111:
                        label += "J 111E\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});