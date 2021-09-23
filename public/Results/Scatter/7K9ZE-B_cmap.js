
var myChart7K9ZE_B = 0;
var ctx = document.getElementById('7K9ZE-B').getContext('2d');
if (window.myChart7K9ZE_B != 0){
    window.myChart7K9ZE_B.destroy();
}
window.myChart7K9ZE_B = new Chart(ctx, {
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
            data: [{x: 484, y: 52},
                {x: 484, y: 54},
                {x: 484, y: 54},
                {x: 486, y: 58},
                {x: 489, y: 95},
                {x: 487, y: 97},
                {x: 487, y: 97},
                {x: 489, y: 97},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 489, y: 32},
                {x: 486, y: 47},
                {x: 489, y: 50},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 493, y: 31},
                {x: 456, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 486, y: 47},
                {x: 486, y: 47},
                {x: 486, y: 47},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 486, y: 50},
                {x: 486, y: 50},
                {x: 489, y: 50},
                {x: 489, y: 50},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7K9ZE-B"],
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
                    case 493:
                        label += "7K9ZEBE 493Q - ";
                        break;
                    case 456:
                        label += "7K9ZEBE 456F - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 484:
                        label += "7K9ZEBE 484E - ";
                        break;
                    case 484:
                        label += "7K9ZEBE 484E - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 484:
                        label += "7K9ZEBE 484E - ";
                        break;
                    case 484:
                        label += "7K9ZEBE 484E - ";
                        break;
                    case 484:
                        label += "7K9ZEBE 484E - ";
                        break;
                    case 486:
                        label += "7K9ZEBE 486F - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;
                    case 487:
                        label += "7K9ZEBE 487N - ";
                        break;
                    case 487:
                        label += "7K9ZEBE 487N - ";
                        break;
                    case 489:
                        label += "7K9ZEBE 489Y - ";
                        break;}
                switch (labely){
                    case 31:
                        label += "B 31T\n";
                        break;
                    case 32:
                        label += "B 32Y\n";
                        break;
                    case 32:
                        label += "B 32Y\n";
                        break;
                    case 32:
                        label += "B 32Y\n";
                        break;
                    case 32:
                        label += "B 32Y\n";
                        break;
                    case 47:
                        label += "B 47W\n";
                        break;
                    case 47:
                        label += "B 47W\n";
                        break;
                    case 47:
                        label += "B 47W\n";
                        break;
                    case 47:
                        label += "B 47W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 50:
                        label += "B 50W\n";
                        break;
                    case 52:
                        label += "B 52S\n";
                        break;
                    case 54:
                        label += "B 54S\n";
                        break;
                    case 54:
                        label += "B 54S\n";
                        break;
                    case 58:
                        label += "B 58D\n";
                        break;
                    case 95:
                        label += "B 95D\n";
                        break;
                    case 97:
                        label += "B 97R\n";
                        break;
                    case 97:
                        label += "B 97R\n";
                        break;
                    case 97:
                        label += "B 97R\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});