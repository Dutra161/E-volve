
var myChart6XKQA_H = 0;
var ctx = document.getElementById('6XKQA-H').getContext('2d');
if (window.myChart6XKQA_H != 0){
    window.myChart6XKQA_H.destroy();
}
window.myChart6XKQA_H = new Chart(ctx, {
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
            data: [{x: 475, y: 98},
                {x: 477, y: 31},
                {x: 477, y: 96},
                {x: 477, y: 96},
                {x: 477, y: 96},
                {x: 477, y: 96},
                {x: 478, y: 96},
                {x: 478, y: 96},
                {x: 487, y: 95},
                {x: 487, y: 95},
                {x: 487, y: 96},
                {x: 487, y: 97},
                {x: 489, y: 97},
                {x: 489, y: 100},
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
            data: [{x: 486, y: 101},
                {x: 486, y: 101},
                {x: 486, y: 101},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6XKQA-H"],
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
                    case 475:
                        label += "6XKQAHA 475A - ";
                        break;
                    case 477:
                        label += "6XKQAHA 477S - ";
                        break;
                    case 477:
                        label += "6XKQAHA 477S - ";
                        break;
                    case 477:
                        label += "6XKQAHA 477S - ";
                        break;
                    case 477:
                        label += "6XKQAHA 477S - ";
                        break;
                    case 477:
                        label += "6XKQAHA 477S - ";
                        break;
                    case 478:
                        label += "6XKQAHA 478T - ";
                        break;
                    case 478:
                        label += "6XKQAHA 478T - ";
                        break;
                    case 486:
                        label += "6XKQAHA 486F - ";
                        break;
                    case 486:
                        label += "6XKQAHA 486F - ";
                        break;
                    case 486:
                        label += "6XKQAHA 486F - ";
                        break;
                    case 487:
                        label += "6XKQAHA 487N - ";
                        break;
                    case 487:
                        label += "6XKQAHA 487N - ";
                        break;
                    case 487:
                        label += "6XKQAHA 487N - ";
                        break;
                    case 487:
                        label += "6XKQAHA 487N - ";
                        break;
                    case 489:
                        label += "6XKQAHA 489Y - ";
                        break;
                    case 489:
                        label += "6XKQAHA 489Y - ";
                        break;}
                switch (labely){
                    case 98:
                        label += "H 98Y\n";
                        break;
                    case 31:
                        label += "H 31N\n";
                        break;
                    case 96:
                        label += "H 96D\n";
                        break;
                    case 96:
                        label += "H 96D\n";
                        break;
                    case 96:
                        label += "H 96D\n";
                        break;
                    case 96:
                        label += "H 96D\n";
                        break;
                    case 96:
                        label += "H 96D\n";
                        break;
                    case 96:
                        label += "H 96D\n";
                        break;
                    case 101:
                        label += "H 101D\n";
                        break;
                    case 101:
                        label += "H 101D\n";
                        break;
                    case 101:
                        label += "H 101D\n";
                        break;
                    case 95:
                        label += "H 95S\n";
                        break;
                    case 95:
                        label += "H 95S\n";
                        break;
                    case 96:
                        label += "H 96D\n";
                        break;
                    case 97:
                        label += "H 97N\n";
                        break;
                    case 97:
                        label += "H 97N\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});