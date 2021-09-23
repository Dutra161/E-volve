
var myChart7KN5A_E = 0;
var ctx = document.getElementById('7KN5A-E').getContext('2d');
if (window.myChart7KN5A_E != 0){
    window.myChart7KN5A_E.destroy();
}
window.myChart7KN5A_E = new Chart(ctx, {
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
            data: [{x: 378, y: 101},
                {x: 378, y: 101},
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
            data: [{x: 369, y: 52},
                {x: 369, y: 99},
                {x: 371, y: 98},
                {x: 371, y: 98},
                {x: 371, y: 99},
                {x: 371, y: 100},
                {x: 373, y: 98},
                {x: 374, y: 98},
                {x: 374, y: 98},
                {x: 374, y: 98},
                {x: 375, y: 95},
                {x: 376, y: 95},
                {x: 377, y: 96},
                {x: 377, y: 96},
                {x: 378, y: 96},
                {x: 383, y: 31},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 369, y: 99},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 370, y: 100},
                {x: 372, y: 100},
                {x: 384, y: 31},
                {x: 384, y: 31},
                {x: 384, y: 31},
                {x: 385, y: 31},
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
            text:["7KN5A-E"],
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
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 370:
                        label += "7KN5AEA 370N - ";
                        break;
                    case 371:
                        label += "7KN5AEA 371S - ";
                        break;
                    case 371:
                        label += "7KN5AEA 371S - ";
                        break;
                    case 371:
                        label += "7KN5AEA 371S - ";
                        break;
                    case 371:
                        label += "7KN5AEA 371S - ";
                        break;
                    case 372:
                        label += "7KN5AEA 372A - ";
                        break;
                    case 373:
                        label += "7KN5AEA 373S - ";
                        break;
                    case 374:
                        label += "7KN5AEA 374F - ";
                        break;
                    case 374:
                        label += "7KN5AEA 374F - ";
                        break;
                    case 374:
                        label += "7KN5AEA 374F - ";
                        break;
                    case 375:
                        label += "7KN5AEA 375S - ";
                        break;
                    case 376:
                        label += "7KN5AEA 376T - ";
                        break;
                    case 377:
                        label += "7KN5AEA 377F - ";
                        break;
                    case 377:
                        label += "7KN5AEA 377F - ";
                        break;
                    case 378:
                        label += "7KN5AEA 378K - ";
                        break;
                    case 378:
                        label += "7KN5AEA 378K - ";
                        break;
                    case 378:
                        label += "7KN5AEA 378K - ";
                        break;
                    case 383:
                        label += "7KN5AEA 383S - ";
                        break;
                    case 384:
                        label += "7KN5AEA 384P - ";
                        break;
                    case 384:
                        label += "7KN5AEA 384P - ";
                        break;
                    case 384:
                        label += "7KN5AEA 384P - ";
                        break;
                    case 385:
                        label += "7KN5AEA 385T - ";
                        break;}
                switch (labely){
                    case 52:
                        label += "E 52S\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 100:
                        label += "E 100Y\n";
                        break;
                    case 98:
                        label += "E 98S\n";
                        break;
                    case 98:
                        label += "E 98S\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 100:
                        label += "E 100Y\n";
                        break;
                    case 100:
                        label += "E 100Y\n";
                        break;
                    case 98:
                        label += "E 98S\n";
                        break;
                    case 98:
                        label += "E 98S\n";
                        break;
                    case 98:
                        label += "E 98S\n";
                        break;
                    case 98:
                        label += "E 98S\n";
                        break;
                    case 95:
                        label += "E 95Q\n";
                        break;
                    case 95:
                        label += "E 95Q\n";
                        break;
                    case 96:
                        label += "E 96S\n";
                        break;
                    case 96:
                        label += "E 96S\n";
                        break;
                    case 96:
                        label += "E 96S\n";
                        break;
                    case 101:
                        label += "E 101E\n";
                        break;
                    case 101:
                        label += "E 101E\n";
                        break;
                    case 31:
                        label += "E 31Y\n";
                        break;
                    case 31:
                        label += "E 31Y\n";
                        break;
                    case 31:
                        label += "E 31Y\n";
                        break;
                    case 31:
                        label += "E 31Y\n";
                        break;
                    case 31:
                        label += "E 31Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});