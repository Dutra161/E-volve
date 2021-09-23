
var myChart7BYRB_H = 0;
var ctx = document.getElementById('7BYRB-H').getContext('2d');
if (window.myChart7BYRB_H != 0){
    window.myChart7BYRB_H.destroy();
}
window.myChart7BYRB_H = new Chart(ctx, {
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
            data: [{x: 484, y: 107},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 449, y: 72},
                {x: 486, y: 111},
                {x: 489, y: 31},
                {x: 489, y: 32},
                {x: 492, y: 54},
                {x: 493, y: 30},
                {x: 493, y: 30},
                {x: 493, y: 54},
                {x: 494, y: 53},
                {x: 494, y: 54},
                {x: 494, y: 54},
                {x: 494, y: 54},
                {x: 498, y: 73},
                {x: 498, y: 73},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 111},
                {x: 489, y: 32},
                {x: 490, y: 105},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 486, y: 100},
                {x: 486, y: 100},
                {x: 486, y: 100},
                {x: 486, y: 100},
                {x: 486, y: 100},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7BYRB-H"],
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
                        label += "7BYRBHB 449Y - ";
                        break;
                    case 484:
                        label += "7BYRBHB 484E - ";
                        break;
                    case 486:
                        label += "7BYRBHB 486F - ";
                        break;
                    case 486:
                        label += "7BYRBHB 486F - ";
                        break;
                    case 486:
                        label += "7BYRBHB 486F - ";
                        break;
                    case 486:
                        label += "7BYRBHB 486F - ";
                        break;
                    case 486:
                        label += "7BYRBHB 486F - ";
                        break;
                    case 486:
                        label += "7BYRBHB 486F - ";
                        break;
                    case 486:
                        label += "7BYRBHB 486F - ";
                        break;
                    case 489:
                        label += "7BYRBHB 489Y - ";
                        break;
                    case 489:
                        label += "7BYRBHB 489Y - ";
                        break;
                    case 489:
                        label += "7BYRBHB 489Y - ";
                        break;
                    case 489:
                        label += "7BYRBHB 489Y - ";
                        break;
                    case 489:
                        label += "7BYRBHB 489Y - ";
                        break;
                    case 489:
                        label += "7BYRBHB 489Y - ";
                        break;
                    case 490:
                        label += "7BYRBHB 490F - ";
                        break;
                    case 492:
                        label += "7BYRBHB 492L - ";
                        break;
                    case 493:
                        label += "7BYRBHB 493Q - ";
                        break;
                    case 493:
                        label += "7BYRBHB 493Q - ";
                        break;
                    case 493:
                        label += "7BYRBHB 493Q - ";
                        break;
                    case 494:
                        label += "7BYRBHB 494S - ";
                        break;
                    case 494:
                        label += "7BYRBHB 494S - ";
                        break;
                    case 494:
                        label += "7BYRBHB 494S - ";
                        break;
                    case 494:
                        label += "7BYRBHB 494S - ";
                        break;
                    case 498:
                        label += "7BYRBHB 498Q - ";
                        break;
                    case 498:
                        label += "7BYRBHB 498Q - ";
                        break;}
                switch (labely){
                    case 72:
                        label += "H 72L\n";
                        break;
                    case 107:
                        label += "H 107R\n";
                        break;
                    case 100:
                        label += "H 100Q\n";
                        break;
                    case 100:
                        label += "H 100Q\n";
                        break;
                    case 100:
                        label += "H 100Q\n";
                        break;
                    case 100:
                        label += "H 100Q\n";
                        break;
                    case 100:
                        label += "H 100Q\n";
                        break;
                    case 111:
                        label += "H 111Y\n";
                        break;
                    case 111:
                        label += "H 111Y\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 105:
                        label += "H 105W\n";
                        break;
                    case 54:
                        label += "H 54N\n";
                        break;
                    case 30:
                        label += "H 30T\n";
                        break;
                    case 30:
                        label += "H 30T\n";
                        break;
                    case 54:
                        label += "H 54N\n";
                        break;
                    case 53:
                        label += "H 53T\n";
                        break;
                    case 54:
                        label += "H 54N\n";
                        break;
                    case 54:
                        label += "H 54N\n";
                        break;
                    case 54:
                        label += "H 54N\n";
                        break;
                    case 73:
                        label += "H 73D\n";
                        break;
                    case 73:
                        label += "H 73D\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});