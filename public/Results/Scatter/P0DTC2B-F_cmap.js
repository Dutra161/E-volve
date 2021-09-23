
var myChartP0DTC2B_F = 0;
var ctx = document.getElementById('P0DTC2B-F').getContext('2d');
if (window.myChartP0DTC2B_F != 0){
    window.myChartP0DTC2B_F.destroy();
}
window.myChartP0DTC2B_F = new Chart(ctx, {
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
            data: [{x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 445, y: 1},
                {x: 484, y: 53},
                {x: 484, y: 98},
                {x: 484, y: 98},
                {x: 484, y: 102},
                {x: 486, y: 58},
                {x: 487, y: 102},
                {x: 488, y: 102},
                {x: 488, y: 102},
                {x: 490, y: 100},
                {x: 493, y: 100},
                {x: 493, y: 105},
                {x: 494, y: 105},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 449, y: 106},
                {x: 489, y: 102},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 106},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 483, y: 52},
                {x: 483, y: 52},
                {x: 483, y: 52},
                {x: 483, y: 52},
                {x: 483, y: 53},
                {x: 484, y: 53},
                {x: 486, y: 52},
                {x: 486, y: 52},
                {x: 486, y: 52},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["P0DTC2B-F"],
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
                    case 445:
                        label += "P0DTC2BFB 445V - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 483:
                        label += "P0DTC2BFB 483V - ";
                        break;
                    case 483:
                        label += "P0DTC2BFB 483V - ";
                        break;
                    case 483:
                        label += "P0DTC2BFB 483V - ";
                        break;
                    case 483:
                        label += "P0DTC2BFB 483V - ";
                        break;
                    case 483:
                        label += "P0DTC2BFB 483V - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 486:
                        label += "P0DTC2BFB 486F - ";
                        break;
                    case 486:
                        label += "P0DTC2BFB 486F - ";
                        break;
                    case 486:
                        label += "P0DTC2BFB 486F - ";
                        break;
                    case 486:
                        label += "P0DTC2BFB 486F - ";
                        break;
                    case 487:
                        label += "P0DTC2BFB 487N - ";
                        break;
                    case 488:
                        label += "P0DTC2BFB 488C - ";
                        break;
                    case 488:
                        label += "P0DTC2BFB 488C - ";
                        break;
                    case 489:
                        label += "P0DTC2BFB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BFB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BFB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BFB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BFB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BFB 489Y - ";
                        break;
                    case 490:
                        label += "P0DTC2BFB 490F - ";
                        break;
                    case 493:
                        label += "P0DTC2BFB 493Q - ";
                        break;
                    case 493:
                        label += "P0DTC2BFB 493Q - ";
                        break;
                    case 494:
                        label += "P0DTC2BFB 494S - ";
                        break;}
                switch (labely){
                    case 1:
                        label += "F 1Q\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 53:
                        label += "F 53R\n";
                        break;
                    case 53:
                        label += "F 53R\n";
                        break;
                    case 53:
                        label += "F 53R\n";
                        break;
                    case 53:
                        label += "F 53R\n";
                        break;
                    case 53:
                        label += "F 53R\n";
                        break;
                    case 53:
                        label += "F 53R\n";
                        break;
                    case 98:
                        label += "F 98N\n";
                        break;
                    case 98:
                        label += "F 98N\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 58:
                        label += "F 58D\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 101:
                        label += "F 101A\n";
                        break;
                    case 101:
                        label += "F 101A\n";
                        break;
                    case 101:
                        label += "F 101A\n";
                        break;
                    case 101:
                        label += "F 101A\n";
                        break;
                    case 101:
                        label += "F 101A\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 100:
                        label += "F 100G\n";
                        break;
                    case 100:
                        label += "F 100G\n";
                        break;
                    case 105:
                        label += "F 105D\n";
                        break;
                    case 105:
                        label += "F 105D\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});