
var myChart7K43B_H = 0;
var ctx = document.getElementById('7K43B-H').getContext('2d');
if (window.myChart7K43B_H != 0){
    window.myChart7K43B_H.destroy();
}
window.myChart7K43B_H = new Chart(ctx, {
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
            data: [{x: 373, y: 104},
                {x: 373, y: 105},
                {x: 342, y: 106},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 342, y: 105},
                {x: 374, y: 105},
                {x: 436, y: 106},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 372, y: 103},
                {x: 372, y: 103},
                {x: 342, y: 105},
                {x: 342, y: 105},
                {x: 342, y: 105},
                {x: 342, y: 105},
                {x: 367, y: 105},
                {x: 368, y: 105},
                {x: 368, y: 105},
                {x: 374, y: 105},
                {x: 374, y: 105},
                {x: 374, y: 105},
                {x: 374, y: 105},
                {x: 374, y: 105},
                {x: 374, y: 105},
                {x: 374, y: 105},
                {x: 374, y: 105},
                {x: 374, y: 105},
                {x: 374, y: 106},
                {x: 374, y: 106},
                {x: 436, y: 106},
                {x: 436, y: 106},
                {x: 436, y: 106},
                {x: 436, y: 106},
                {x: 436, y: 106},
                {x: 436, y: 106},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7K43B-H"],
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
                    case 372:
                        label += "7K43BHB 372A - ";
                        break;
                    case 372:
                        label += "7K43BHB 372A - ";
                        break;
                    case 373:
                        label += "7K43BHB 373S - ";
                        break;
                    case 342:
                        label += "7K43BHB 342F - ";
                        break;
                    case 342:
                        label += "7K43BHB 342F - ";
                        break;
                    case 342:
                        label += "7K43BHB 342F - ";
                        break;
                    case 342:
                        label += "7K43BHB 342F - ";
                        break;
                    case 342:
                        label += "7K43BHB 342F - ";
                        break;
                    case 367:
                        label += "7K43BHB 367V - ";
                        break;
                    case 368:
                        label += "7K43BHB 368L - ";
                        break;
                    case 368:
                        label += "7K43BHB 368L - ";
                        break;
                    case 373:
                        label += "7K43BHB 373S - ";
                        break;
                    case 374:
                        label += "7K43BHB 374F - ";
                        break;
                    case 374:
                        label += "7K43BHB 374F - ";
                        break;
                    case 374:
                        label += "7K43BHB 374F - ";
                        break;
                    case 374:
                        label += "7K43BHB 374F - ";
                        break;
                    case 374:
                        label += "7K43BHB 374F - ";
                        break;
                    case 374:
                        label += "7K43BHB 374F - ";
                        break;
                    case 374:
                        label += "7K43BHB 374F - ";
                        break;
                    case 374:
                        label += "7K43BHB 374F - ";
                        break;
                    case 374:
                        label += "7K43BHB 374F - ";
                        break;
                    case 374:
                        label += "7K43BHB 374F - ";
                        break;
                    case 342:
                        label += "7K43BHB 342F - ";
                        break;
                    case 374:
                        label += "7K43BHB 374F - ";
                        break;
                    case 374:
                        label += "7K43BHB 374F - ";
                        break;
                    case 436:
                        label += "7K43BHB 436W - ";
                        break;
                    case 436:
                        label += "7K43BHB 436W - ";
                        break;
                    case 436:
                        label += "7K43BHB 436W - ";
                        break;
                    case 436:
                        label += "7K43BHB 436W - ";
                        break;
                    case 436:
                        label += "7K43BHB 436W - ";
                        break;
                    case 436:
                        label += "7K43BHB 436W - ";
                        break;
                    case 436:
                        label += "7K43BHB 436W - ";
                        break;}
                switch (labely){
                    case 103:
                        label += "H 103Y\n";
                        break;
                    case 103:
                        label += "H 103Y\n";
                        break;
                    case 104:
                        label += "H 104D\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 105:
                        label += "H 105F\n";
                        break;
                    case 106:
                        label += "H 106W\n";
                        break;
                    case 106:
                        label += "H 106W\n";
                        break;
                    case 106:
                        label += "H 106W\n";
                        break;
                    case 106:
                        label += "H 106W\n";
                        break;
                    case 106:
                        label += "H 106W\n";
                        break;
                    case 106:
                        label += "H 106W\n";
                        break;
                    case 106:
                        label += "H 106W\n";
                        break;
                    case 106:
                        label += "H 106W\n";
                        break;
                    case 106:
                        label += "H 106W\n";
                        break;
                    case 106:
                        label += "H 106W\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});