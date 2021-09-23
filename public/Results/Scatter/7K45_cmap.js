
var myChart7K45 = 0;
var ctx = document.getElementById('7K45').getContext('2d');
if (window.myChart7K45 != 0){
    window.myChart7K45.destroy();
}
window.myChart7K45 = new Chart(ctx, {
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
            data: [{x: 473, y: 104},
                {x: 475, y: 106},
                {x: 487, y: 107},
                {x: 477, y: 108},
                {x: 477, y: 108},
                {x: 487, y: 108},
                {x: 486, y: 33},
                {x: 488, y: 33},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 110},
                {x: 486, y: 92},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 486, y: 50},
                {x: 489, y: 50},
                {x: 489, y: 50},
                {x: 456, y: 52},
                {x: 489, y: 52},
                {x: 489, y: 52},
                {x: 489, y: 52},
                {x: 489, y: 52},
                {x: 489, y: 52},
                {x: 489, y: 52},
                {x: 486, y: 99},
                {x: 486, y: 99},
                {x: 486, y: 99},
                {x: 475, y: 106},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 33},
                {x: 486, y: 33},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 484, y: 95},
                {x: 484, y: 95},
                {x: 484, y: 95},
                {x: 486, y: 98},
                {x: 486, y: 98},
                {x: 486, y: 98},
                {x: 486, y: 98},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7K45 Superpose"],
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
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 489:
                        label += "7K45BHB 489Y - ";
                        break;
                    case 489:
                        label += "7K45BHB 489Y - ";
                        break;
                    case 456:
                        label += "7K45BHB 456F - ";
                        break;
                    case 489:
                        label += "7K45BHB 489Y - ";
                        break;
                    case 489:
                        label += "7K45BHB 489Y - ";
                        break;
                    case 489:
                        label += "7K45BHB 489Y - ";
                        break;
                    case 489:
                        label += "7K45BHB 489Y - ";
                        break;
                    case 489:
                        label += "7K45BHB 489Y - ";
                        break;
                    case 489:
                        label += "7K45BHB 489Y - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 473:
                        label += "7K45BHB 473Y - ";
                        break;
                    case 475:
                        label += "7K45BHB 475A - ";
                        break;
                    case 475:
                        label += "7K45BHB 475A - ";
                        break;
                    case 487:
                        label += "7K45BHB 487N - ";
                        break;
                    case 477:
                        label += "7K45BHB 477S - ";
                        break;
                    case 477:
                        label += "7K45BHB 477S - ";
                        break;
                    case 487:
                        label += "7K45BHB 487N - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 486:
                        label += "7K45BHB 486F - ";
                        break;
                    case 486:
                        label += "7K45BLB 486F - ";
                        break;
                    case 486:
                        label += "7K45BLB 486F - ";
                        break;
                    case 486:
                        label += "7K45BLB 486F - ";
                        break;
                    case 488:
                        label += "7K45BLB 488C - ";
                        break;
                    case 486:
                        label += "7K45BLB 486F - ";
                        break;
                    case 486:
                        label += "7K45BLB 486F - ";
                        break;
                    case 486:
                        label += "7K45BLB 486F - ";
                        break;
                    case 484:
                        label += "7K45BLB 484E - ";
                        break;
                    case 484:
                        label += "7K45BLB 484E - ";
                        break;
                    case 484:
                        label += "7K45BLB 484E - ";
                        break;
                    case 486:
                        label += "7K45BLB 486F - ";
                        break;
                    case 486:
                        label += "7K45BLB 486F - ";
                        break;
                    case 486:
                        label += "7K45BLB 486F - ";
                        break;
                    case 486:
                        label += "7K45BLB 486F - ";
                        break;}
                switch (labely){
                    case 50:
                        label += "H 50W\n";
                        break;
                    case 50:
                        label += "H 50W\n";
                        break;
                    case 50:
                        label += "H 50W\n";
                        break;
                    case 52:
                        label += "H 52V\n";
                        break;
                    case 52:
                        label += "H 52V\n";
                        break;
                    case 52:
                        label += "H 52V\n";
                        break;
                    case 52:
                        label += "H 52V\n";
                        break;
                    case 52:
                        label += "H 52V\n";
                        break;
                    case 52:
                        label += "H 52V\n";
                        break;
                    case 52:
                        label += "H 52V\n";
                        break;
                    case 99:
                        label += "H 99P\n";
                        break;
                    case 99:
                        label += "H 99P\n";
                        break;
                    case 99:
                        label += "H 99P\n";
                        break;
                    case 104:
                        label += "H 104G\n";
                        break;
                    case 106:
                        label += "H 106C\n";
                        break;
                    case 106:
                        label += "H 106C\n";
                        break;
                    case 107:
                        label += "H 107S\n";
                        break;
                    case 108:
                        label += "H 108D\n";
                        break;
                    case 108:
                        label += "H 108D\n";
                        break;
                    case 108:
                        label += "H 108D\n";
                        break;
                    case 110:
                        label += "H 110F\n";
                        break;
                    case 110:
                        label += "H 110F\n";
                        break;
                    case 110:
                        label += "H 110F\n";
                        break;
                    case 110:
                        label += "H 110F\n";
                        break;
                    case 110:
                        label += "H 110F\n";
                        break;
                    case 110:
                        label += "H 110F\n";
                        break;
                    case 110:
                        label += "H 110F\n";
                        break;
                    case 110:
                        label += "H 110F\n";
                        break;
                    case 110:
                        label += "H 110F\n";
                        break;
                    case 110:
                        label += "H 110F\n";
                        break;
                    case 110:
                        label += "H 110F\n";
                        break;
                    case 33:
                        label += "L 33Y\n";
                        break;
                    case 33:
                        label += "L 33Y\n";
                        break;
                    case 33:
                        label += "L 33Y\n";
                        break;
                    case 33:
                        label += "L 33Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 95:
                        label += "L 95L\n";
                        break;
                    case 95:
                        label += "L 95L\n";
                        break;
                    case 95:
                        label += "L 95L\n";
                        break;
                    case 98:
                        label += "L 98W\n";
                        break;
                    case 98:
                        label += "L 98W\n";
                        break;
                    case 98:
                        label += "L 98W\n";
                        break;
                    case 98:
                        label += "L 98W\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});