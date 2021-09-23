
var myChart7LD1B_H = 0;
var ctx = document.getElementById('7LD1B-H').getContext('2d');
if (window.myChart7LD1B_H != 0){
    window.myChart7LD1B_H.destroy();
}
window.myChart7LD1B_H = new Chart(ctx, {
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
            data: [{x: 369, y: 128},
                {x: 374, y: 76},
                {x: 375, y: 130},
                {x: 375, y: 131},
                {x: 377, y: 128},
                {x: 378, y: 128},
                {x: 379, y: 126},
                {x: 379, y: 126},
                {x: 379, y: 126},
                {x: 499, y: 81},
                {x: 501, y: 81},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 377, y: 128},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 378, y: 125},
                {x: 378, y: 125},
                {x: 407, y: 131},
                {x: 435, y: 131},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7LD1B-H"],
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
                        label += "7LD1BHB 369Y - ";
                        break;
                    case 374:
                        label += "7LD1BHB 374F - ";
                        break;
                    case 375:
                        label += "7LD1BHB 375S - ";
                        break;
                    case 375:
                        label += "7LD1BHB 375S - ";
                        break;
                    case 377:
                        label += "7LD1BHB 377F - ";
                        break;
                    case 377:
                        label += "7LD1BHB 377F - ";
                        break;
                    case 377:
                        label += "7LD1BHB 377F - ";
                        break;
                    case 377:
                        label += "7LD1BHB 377F - ";
                        break;
                    case 378:
                        label += "7LD1BHB 378K - ";
                        break;
                    case 378:
                        label += "7LD1BHB 378K - ";
                        break;
                    case 378:
                        label += "7LD1BHB 378K - ";
                        break;
                    case 379:
                        label += "7LD1BHB 379C - ";
                        break;
                    case 379:
                        label += "7LD1BHB 379C - ";
                        break;
                    case 379:
                        label += "7LD1BHB 379C - ";
                        break;
                    case 407:
                        label += "7LD1BHB 407V - ";
                        break;
                    case 435:
                        label += "7LD1BHB 435A - ";
                        break;
                    case 499:
                        label += "7LD1BHB 499P - ";
                        break;
                    case 501:
                        label += "7LD1BHB 501N - ";
                        break;}
                switch (labely){
                    case 128:
                        label += "H 128Y\n";
                        break;
                    case 76:
                        label += "H 76N\n";
                        break;
                    case 130:
                        label += "H 130L\n";
                        break;
                    case 131:
                        label += "H 131L\n";
                        break;
                    case 128:
                        label += "H 128Y\n";
                        break;
                    case 128:
                        label += "H 128Y\n";
                        break;
                    case 128:
                        label += "H 128Y\n";
                        break;
                    case 128:
                        label += "H 128Y\n";
                        break;
                    case 125:
                        label += "H 125W\n";
                        break;
                    case 125:
                        label += "H 125W\n";
                        break;
                    case 128:
                        label += "H 128Y\n";
                        break;
                    case 126:
                        label += "H 126S\n";
                        break;
                    case 126:
                        label += "H 126S\n";
                        break;
                    case 126:
                        label += "H 126S\n";
                        break;
                    case 131:
                        label += "H 131L\n";
                        break;
                    case 131:
                        label += "H 131L\n";
                        break;
                    case 81:
                        label += "H 81Q\n";
                        break;
                    case 81:
                        label += "H 81Q\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});