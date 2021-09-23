
var myChart7DPMF_D = 0;
var ctx = document.getElementById('7DPMF-D').getContext('2d');
if (window.myChart7DPMF_D != 0){
    window.myChart7DPMF_D.destroy();
}
window.myChart7DPMF_D = new Chart(ctx, {
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
                {x: 378, y: 103},
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
            data: [{x: 369, y: 102},
                {x: 378, y: 103},
                {x: 378, y: 103},
                {x: 378, y: 105},
                {x: 379, y: 105},
                {x: 369, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 376, y: 108},
                {x: 376, y: 108},
                {x: 408, y: 108},
                {x: 375, y: 109},
                {x: 374, y: 110},
                {x: 374, y: 110},
                {x: 375, y: 110},
                {x: 375, y: 111},
                {x: 508, y: 111},
                {x: 508, y: 111},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 369, y: 107},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 376, y: 108},
                {x: 378, y: 108},
                {x: 408, y: 108},
                {x: 503, y: 109},
                {x: 503, y: 109},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7DPMF-D"],
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
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 378:
                        label += "7DPMFDF 378K - ";
                        break;
                    case 378:
                        label += "7DPMFDF 378K - ";
                        break;
                    case 378:
                        label += "7DPMFDF 378K - ";
                        break;
                    case 379:
                        label += "7DPMFDF 379C - ";
                        break;
                    case 369:
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 369:
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 369:
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 369:
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 369:
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 369:
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 377:
                        label += "7DPMFDF 377F - ";
                        break;
                    case 377:
                        label += "7DPMFDF 377F - ";
                        break;
                    case 377:
                        label += "7DPMFDF 377F - ";
                        break;
                    case 377:
                        label += "7DPMFDF 377F - ";
                        break;
                    case 377:
                        label += "7DPMFDF 377F - ";
                        break;
                    case 377:
                        label += "7DPMFDF 377F - ";
                        break;
                    case 376:
                        label += "7DPMFDF 376T - ";
                        break;
                    case 376:
                        label += "7DPMFDF 376T - ";
                        break;
                    case 376:
                        label += "7DPMFDF 376T - ";
                        break;
                    case 378:
                        label += "7DPMFDF 378K - ";
                        break;
                    case 408:
                        label += "7DPMFDF 408R - ";
                        break;
                    case 408:
                        label += "7DPMFDF 408R - ";
                        break;
                    case 375:
                        label += "7DPMFDF 375S - ";
                        break;
                    case 503:
                        label += "7DPMFDF 503V - ";
                        break;
                    case 503:
                        label += "7DPMFDF 503V - ";
                        break;
                    case 374:
                        label += "7DPMFDF 374F - ";
                        break;
                    case 374:
                        label += "7DPMFDF 374F - ";
                        break;
                    case 375:
                        label += "7DPMFDF 375S - ";
                        break;
                    case 375:
                        label += "7DPMFDF 375S - ";
                        break;
                    case 508:
                        label += "7DPMFDF 508Y - ";
                        break;
                    case 508:
                        label += "7DPMFDF 508Y - ";
                        break;}
                switch (labely){
                    case 102:
                        label += "D 102Y\n";
                        break;
                    case 103:
                        label += "D 103D\n";
                        break;
                    case 103:
                        label += "D 103D\n";
                        break;
                    case 105:
                        label += "D 105S\n";
                        break;
                    case 105:
                        label += "D 105S\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 108:
                        label += "D 108Y\n";
                        break;
                    case 108:
                        label += "D 108Y\n";
                        break;
                    case 108:
                        label += "D 108Y\n";
                        break;
                    case 108:
                        label += "D 108Y\n";
                        break;
                    case 108:
                        label += "D 108Y\n";
                        break;
                    case 108:
                        label += "D 108Y\n";
                        break;
                    case 109:
                        label += "D 109F\n";
                        break;
                    case 109:
                        label += "D 109F\n";
                        break;
                    case 109:
                        label += "D 109F\n";
                        break;
                    case 110:
                        label += "D 110R\n";
                        break;
                    case 110:
                        label += "D 110R\n";
                        break;
                    case 110:
                        label += "D 110R\n";
                        break;
                    case 111:
                        label += "D 111E\n";
                        break;
                    case 111:
                        label += "D 111E\n";
                        break;
                    case 111:
                        label += "D 111E\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});