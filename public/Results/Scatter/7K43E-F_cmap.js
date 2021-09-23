
var myChart7K43E_F = 0;
var ctx = document.getElementById('7K43E-F').getContext('2d');
if (window.myChart7K43E_F != 0){
    window.myChart7K43E_F.destroy();
}
window.myChart7K43E_F = new Chart(ctx, {
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
                {x: 484, y: 52},
                {x: 484, y: 55},
                {x: 484, y: 55},
                {x: 489, y: 102},
                {x: 493, y: 30},
                {x: 493, y: 30},
                {x: 493, y: 103},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 456, y: 103},
                {x: 489, y: 103},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 28},
                {x: 449, y: 29},
                {x: 449, y: 29},
                {x: 449, y: 30},
                {x: 449, y: 30},
                {x: 449, y: 30},
                {x: 449, y: 77},
                {x: 449, y: 77},
                {x: 452, y: 54},
                {x: 455, y: 103},
                {x: 455, y: 103},
                {x: 456, y: 103},
                {x: 456, y: 103},
                {x: 456, y: 103},
                {x: 456, y: 103},
                {x: 456, y: 103},
                {x: 456, y: 103},
                {x: 456, y: 103},
                {x: 456, y: 103},
                {x: 456, y: 103},
                {x: 484, y: 50},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 109},
                {x: 486, y: 109},
                {x: 489, y: 102},
                {x: 489, y: 102},
                {x: 489, y: 103},
                {x: 489, y: 103},
                {x: 489, y: 103},
                {x: 489, y: 103},
                {x: 489, y: 103},
                {x: 489, y: 103},
                {x: 490, y: 54},
                {x: 490, y: 54},
                {x: 490, y: 54},
                {x: 490, y: 54},
                {x: 490, y: 54},
                {x: 490, y: 54},
                {x: 490, y: 54},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7K43E-F"],
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
                        label += "7K43EFE 449Y - ";
                        break;
                    case 449:
                        label += "7K43EFE 449Y - ";
                        break;
                    case 449:
                        label += "7K43EFE 449Y - ";
                        break;
                    case 449:
                        label += "7K43EFE 449Y - ";
                        break;
                    case 449:
                        label += "7K43EFE 449Y - ";
                        break;
                    case 449:
                        label += "7K43EFE 449Y - ";
                        break;
                    case 449:
                        label += "7K43EFE 449Y - ";
                        break;
                    case 449:
                        label += "7K43EFE 449Y - ";
                        break;
                    case 449:
                        label += "7K43EFE 449Y - ";
                        break;
                    case 449:
                        label += "7K43EFE 449Y - ";
                        break;
                    case 452:
                        label += "7K43EFE 452L - ";
                        break;
                    case 455:
                        label += "7K43EFE 455L - ";
                        break;
                    case 455:
                        label += "7K43EFE 455L - ";
                        break;
                    case 456:
                        label += "7K43EFE 456F - ";
                        break;
                    case 456:
                        label += "7K43EFE 456F - ";
                        break;
                    case 456:
                        label += "7K43EFE 456F - ";
                        break;
                    case 456:
                        label += "7K43EFE 456F - ";
                        break;
                    case 456:
                        label += "7K43EFE 456F - ";
                        break;
                    case 456:
                        label += "7K43EFE 456F - ";
                        break;
                    case 456:
                        label += "7K43EFE 456F - ";
                        break;
                    case 456:
                        label += "7K43EFE 456F - ";
                        break;
                    case 456:
                        label += "7K43EFE 456F - ";
                        break;
                    case 456:
                        label += "7K43EFE 456F - ";
                        break;
                    case 484:
                        label += "7K43EFE 484E - ";
                        break;
                    case 484:
                        label += "7K43EFE 484E - ";
                        break;
                    case 484:
                        label += "7K43EFE 484E - ";
                        break;
                    case 484:
                        label += "7K43EFE 484E - ";
                        break;
                    case 486:
                        label += "7K43EFE 486F - ";
                        break;
                    case 486:
                        label += "7K43EFE 486F - ";
                        break;
                    case 486:
                        label += "7K43EFE 486F - ";
                        break;
                    case 486:
                        label += "7K43EFE 486F - ";
                        break;
                    case 486:
                        label += "7K43EFE 486F - ";
                        break;
                    case 486:
                        label += "7K43EFE 486F - ";
                        break;
                    case 489:
                        label += "7K43EFE 489Y - ";
                        break;
                    case 489:
                        label += "7K43EFE 489Y - ";
                        break;
                    case 489:
                        label += "7K43EFE 489Y - ";
                        break;
                    case 489:
                        label += "7K43EFE 489Y - ";
                        break;
                    case 489:
                        label += "7K43EFE 489Y - ";
                        break;
                    case 489:
                        label += "7K43EFE 489Y - ";
                        break;
                    case 489:
                        label += "7K43EFE 489Y - ";
                        break;
                    case 489:
                        label += "7K43EFE 489Y - ";
                        break;
                    case 489:
                        label += "7K43EFE 489Y - ";
                        break;
                    case 489:
                        label += "7K43EFE 489Y - ";
                        break;
                    case 490:
                        label += "7K43EFE 490F - ";
                        break;
                    case 490:
                        label += "7K43EFE 490F - ";
                        break;
                    case 490:
                        label += "7K43EFE 490F - ";
                        break;
                    case 490:
                        label += "7K43EFE 490F - ";
                        break;
                    case 490:
                        label += "7K43EFE 490F - ";
                        break;
                    case 490:
                        label += "7K43EFE 490F - ";
                        break;
                    case 490:
                        label += "7K43EFE 490F - ";
                        break;
                    case 493:
                        label += "7K43EFE 493Q - ";
                        break;
                    case 493:
                        label += "7K43EFE 493Q - ";
                        break;
                    case 493:
                        label += "7K43EFE 493Q - ";
                        break;}
                switch (labely){
                    case 27:
                        label += "F 27Y\n";
                        break;
                    case 28:
                        label += "F 28T\n";
                        break;
                    case 29:
                        label += "F 29F\n";
                        break;
                    case 29:
                        label += "F 29F\n";
                        break;
                    case 29:
                        label += "F 29F\n";
                        break;
                    case 30:
                        label += "F 30T\n";
                        break;
                    case 30:
                        label += "F 30T\n";
                        break;
                    case 30:
                        label += "F 30T\n";
                        break;
                    case 77:
                        label += "F 77T\n";
                        break;
                    case 77:
                        label += "F 77T\n";
                        break;
                    case 54:
                        label += "F 54I\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 50:
                        label += "F 50W\n";
                        break;
                    case 52:
                        label += "F 52N\n";
                        break;
                    case 55:
                        label += "F 55S\n";
                        break;
                    case 55:
                        label += "F 55S\n";
                        break;
                    case 102:
                        label += "F 102F\n";
                        break;
                    case 102:
                        label += "F 102F\n";
                        break;
                    case 102:
                        label += "F 102F\n";
                        break;
                    case 102:
                        label += "F 102F\n";
                        break;
                    case 109:
                        label += "F 109Y\n";
                        break;
                    case 109:
                        label += "F 109Y\n";
                        break;
                    case 102:
                        label += "F 102F\n";
                        break;
                    case 102:
                        label += "F 102F\n";
                        break;
                    case 102:
                        label += "F 102F\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;
                    case 54:
                        label += "F 54I\n";
                        break;
                    case 54:
                        label += "F 54I\n";
                        break;
                    case 54:
                        label += "F 54I\n";
                        break;
                    case 54:
                        label += "F 54I\n";
                        break;
                    case 54:
                        label += "F 54I\n";
                        break;
                    case 54:
                        label += "F 54I\n";
                        break;
                    case 54:
                        label += "F 54I\n";
                        break;
                    case 30:
                        label += "F 30T\n";
                        break;
                    case 30:
                        label += "F 30T\n";
                        break;
                    case 103:
                        label += "F 103Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});