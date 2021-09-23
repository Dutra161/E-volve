
var myChart7CWNC_N = 0;
var ctx = document.getElementById('7CWNC-N').getContext('2d');
if (window.myChart7CWNC_N != 0){
    window.myChart7CWNC_N.destroy();
}
window.myChart7CWNC_N = new Chart(ctx, {
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
            data: [{x: 369, y: 93},
                {x: 372, y: 92},
                {x: 372, y: 93},
                {x: 373, y: 92},
                {x: 374, y: 93},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 369, y: 93},
                {x: 369, y: 93},
                {x: 369, y: 93},
                {x: 369, y: 93},
                {x: 369, y: 93},
                {x: 369, y: 93},
                {x: 369, y: 93},
                {x: 372, y: 93},
                {x: 372, y: 93},
                {x: 372, y: 93},
                {x: 372, y: 94},
                {x: 374, y: 93},
                {x: 377, y: 93},
                {x: 377, y: 93},
                {x: 377, y: 93},
                {x: 377, y: 93},
                {x: 377, y: 93},
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
            text:["7CWNC-N"],
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
                        label += "7CWNCNC 369Y - ";
                        break;
                    case 369:
                        label += "7CWNCNC 369Y - ";
                        break;
                    case 369:
                        label += "7CWNCNC 369Y - ";
                        break;
                    case 369:
                        label += "7CWNCNC 369Y - ";
                        break;
                    case 369:
                        label += "7CWNCNC 369Y - ";
                        break;
                    case 369:
                        label += "7CWNCNC 369Y - ";
                        break;
                    case 369:
                        label += "7CWNCNC 369Y - ";
                        break;
                    case 369:
                        label += "7CWNCNC 369Y - ";
                        break;
                    case 372:
                        label += "7CWNCNC 372A - ";
                        break;
                    case 372:
                        label += "7CWNCNC 372A - ";
                        break;
                    case 372:
                        label += "7CWNCNC 372A - ";
                        break;
                    case 372:
                        label += "7CWNCNC 372A - ";
                        break;
                    case 372:
                        label += "7CWNCNC 372A - ";
                        break;
                    case 372:
                        label += "7CWNCNC 372A - ";
                        break;
                    case 373:
                        label += "7CWNCNC 373S - ";
                        break;
                    case 374:
                        label += "7CWNCNC 374F - ";
                        break;
                    case 374:
                        label += "7CWNCNC 374F - ";
                        break;
                    case 377:
                        label += "7CWNCNC 377F - ";
                        break;
                    case 377:
                        label += "7CWNCNC 377F - ";
                        break;
                    case 377:
                        label += "7CWNCNC 377F - ";
                        break;
                    case 377:
                        label += "7CWNCNC 377F - ";
                        break;
                    case 377:
                        label += "7CWNCNC 377F - ";
                        break;
                    case 377:
                        label += "7CWNCNC 377F - ";
                        break;}
                switch (labely){
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 92:
                        label += "N 92F\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 94:
                        label += "N 94P\n";
                        break;
                    case 92:
                        label += "N 92F\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;
                    case 93:
                        label += "N 93W\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});