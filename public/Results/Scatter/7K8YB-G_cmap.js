
var myChart7K8YB_G = 0;
var ctx = document.getElementById('7K8YB-G').getContext('2d');
if (window.myChart7K8YB_G != 0){
    window.myChart7K8YB_G.destroy();
}
window.myChart7K8YB_G = new Chart(ctx, {
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
            data: [{x: 449, y: 27},
                {x: 449, y: 29},
                {x: 484, y: 33},
                {x: 484, y: 33},
                {x: 484, y: 58},
                {x: 489, y: 106},
                {x: 489, y: 107},
                {x: 494, y: 30},
                {x: 498, y: 27},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 113},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 28},
                {x: 449, y: 29},
                {x: 449, y: 29},
                {x: 449, y: 29},
                {x: 449, y: 30},
                {x: 449, y: 30},
                {x: 449, y: 30},
                {x: 449, y: 30},
                {x: 449, y: 30},
                {x: 449, y: 30},
                {x: 456, y: 106},
                {x: 456, y: 106},
                {x: 456, y: 106},
                {x: 456, y: 106},
                {x: 456, y: 106},
                {x: 475, y: 107},
                {x: 486, y: 107},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 486, y: 113},
                {x: 489, y: 107},
                {x: 489, y: 107},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7K8YB-G"],
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
                    case 449:
                        label += "7K8YBGB 449Y - ";
                        break;
                    case 449:
                        label += "7K8YBGB 449Y - ";
                        break;
                    case 449:
                        label += "7K8YBGB 449Y - ";
                        break;
                    case 449:
                        label += "7K8YBGB 449Y - ";
                        break;
                    case 449:
                        label += "7K8YBGB 449Y - ";
                        break;
                    case 449:
                        label += "7K8YBGB 449Y - ";
                        break;
                    case 449:
                        label += "7K8YBGB 449Y - ";
                        break;
                    case 449:
                        label += "7K8YBGB 449Y - ";
                        break;
                    case 449:
                        label += "7K8YBGB 449Y - ";
                        break;
                    case 449:
                        label += "7K8YBGB 449Y - ";
                        break;
                    case 449:
                        label += "7K8YBGB 449Y - ";
                        break;
                    case 449:
                        label += "7K8YBGB 449Y - ";
                        break;
                    case 456:
                        label += "7K8YBGB 456F - ";
                        break;
                    case 456:
                        label += "7K8YBGB 456F - ";
                        break;
                    case 456:
                        label += "7K8YBGB 456F - ";
                        break;
                    case 456:
                        label += "7K8YBGB 456F - ";
                        break;
                    case 456:
                        label += "7K8YBGB 456F - ";
                        break;
                    case 475:
                        label += "7K8YBGB 475A - ";
                        break;
                    case 484:
                        label += "7K8YBGB 484E - ";
                        break;
                    case 484:
                        label += "7K8YBGB 484E - ";
                        break;
                    case 484:
                        label += "7K8YBGB 484E - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 486:
                        label += "7K8YBGB 486F - ";
                        break;
                    case 489:
                        label += "7K8YBGB 489Y - ";
                        break;
                    case 489:
                        label += "7K8YBGB 489Y - ";
                        break;
                    case 489:
                        label += "7K8YBGB 489Y - ";
                        break;
                    case 489:
                        label += "7K8YBGB 489Y - ";
                        break;
                    case 494:
                        label += "7K8YBGB 494S - ";
                        break;
                    case 498:
                        label += "7K8YBGB 498Q - ";
                        break;}
                switch (labely){
                    case 27:
                        label += "G 27Y\n";
                        break;
                    case 28:
                        label += "G 28T\n";
                        break;
                    case 29:
                        label += "G 29F\n";
                        break;
                    case 29:
                        label += "G 29F\n";
                        break;
                    case 29:
                        label += "G 29F\n";
                        break;
                    case 29:
                        label += "G 29F\n";
                        break;
                    case 30:
                        label += "G 30T\n";
                        break;
                    case 30:
                        label += "G 30T\n";
                        break;
                    case 30:
                        label += "G 30T\n";
                        break;
                    case 30:
                        label += "G 30T\n";
                        break;
                    case 30:
                        label += "G 30T\n";
                        break;
                    case 30:
                        label += "G 30T\n";
                        break;
                    case 106:
                        label += "G 106V\n";
                        break;
                    case 106:
                        label += "G 106V\n";
                        break;
                    case 106:
                        label += "G 106V\n";
                        break;
                    case 106:
                        label += "G 106V\n";
                        break;
                    case 106:
                        label += "G 106V\n";
                        break;
                    case 107:
                        label += "G 107L\n";
                        break;
                    case 33:
                        label += "G 33Y\n";
                        break;
                    case 33:
                        label += "G 33Y\n";
                        break;
                    case 58:
                        label += "G 58T\n";
                        break;
                    case 107:
                        label += "G 107L\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 113:
                        label += "G 113Y\n";
                        break;
                    case 106:
                        label += "G 106V\n";
                        break;
                    case 107:
                        label += "G 107L\n";
                        break;
                    case 107:
                        label += "G 107L\n";
                        break;
                    case 107:
                        label += "G 107L\n";
                        break;
                    case 30:
                        label += "G 30T\n";
                        break;
                    case 27:
                        label += "G 27Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});