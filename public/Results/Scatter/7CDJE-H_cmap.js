
var myChart7CDJE_H = 0;
var ctx = document.getElementById('7CDJE-H').getContext('2d');
if (window.myChart7CDJE_H != 0){
    window.myChart7CDJE_H.destroy();
}
window.myChart7CDJE_H = new Chart(ctx, {
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
            data: [{x: 449, y: 72},
                {x: 449, y: 73},
                {x: 449, y: 74},
                {x: 484, y: 33},
                {x: 484, y: 50},
                {x: 484, y: 57},
                {x: 489, y: 102},
                {x: 492, y: 56},
                {x: 493, y: 53},
                {x: 493, y: 102},
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
            data: [{x: 456, y: 102},
                {x: 486, y: 100},
                {x: 489, y: 102},
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
                {x: 486, y: 100},
                {x: 486, y: 100},
                {x: 486, y: 100},
                {x: 486, y: 100},
                {x: 486, y: 100},
                {x: 486, y: 100},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 486, y: 105},
                {x: 489, y: 33},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 490, y: 57},
                {x: 490, y: 57},
                {x: 490, y: 57},
                {x: 490, y: 57},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CDJE-H"],
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
                        label += "7CDJEHE 449Y - ";
                        break;
                    case 449:
                        label += "7CDJEHE 449Y - ";
                        break;
                    case 449:
                        label += "7CDJEHE 449Y - ";
                        break;
                    case 456:
                        label += "7CDJEHE 456F - ";
                        break;
                    case 484:
                        label += "7CDJEHE 484E - ";
                        break;
                    case 484:
                        label += "7CDJEHE 484E - ";
                        break;
                    case 484:
                        label += "7CDJEHE 484E - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 486:
                        label += "7CDJEHE 486F - ";
                        break;
                    case 489:
                        label += "7CDJEHE 489Y - ";
                        break;
                    case 489:
                        label += "7CDJEHE 489Y - ";
                        break;
                    case 489:
                        label += "7CDJEHE 489Y - ";
                        break;
                    case 489:
                        label += "7CDJEHE 489Y - ";
                        break;
                    case 489:
                        label += "7CDJEHE 489Y - ";
                        break;
                    case 489:
                        label += "7CDJEHE 489Y - ";
                        break;
                    case 490:
                        label += "7CDJEHE 490F - ";
                        break;
                    case 490:
                        label += "7CDJEHE 490F - ";
                        break;
                    case 490:
                        label += "7CDJEHE 490F - ";
                        break;
                    case 490:
                        label += "7CDJEHE 490F - ";
                        break;
                    case 492:
                        label += "7CDJEHE 492L - ";
                        break;
                    case 493:
                        label += "7CDJEHE 493Q - ";
                        break;
                    case 493:
                        label += "7CDJEHE 493Q - ";
                        break;
                    case 494:
                        label += "7CDJEHE 494S - ";
                        break;
                    case 494:
                        label += "7CDJEHE 494S - ";
                        break;
                    case 498:
                        label += "7CDJEHE 498Q - ";
                        break;
                    case 498:
                        label += "7CDJEHE 498Q - ";
                        break;}
                switch (labely){
                    case 72:
                        label += "H 72R\n";
                        break;
                    case 73:
                        label += "H 73D\n";
                        break;
                    case 74:
                        label += "H 74N\n";
                        break;
                    case 102:
                        label += "H 102H\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 50:
                        label += "H 50Y\n";
                        break;
                    case 57:
                        label += "H 57T\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 105:
                        label += "H 105L\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 100:
                        label += "H 100F\n";
                        break;
                    case 102:
                        label += "H 102H\n";
                        break;
                    case 102:
                        label += "H 102H\n";
                        break;
                    case 57:
                        label += "H 57T\n";
                        break;
                    case 57:
                        label += "H 57T\n";
                        break;
                    case 57:
                        label += "H 57T\n";
                        break;
                    case 57:
                        label += "H 57T\n";
                        break;
                    case 56:
                        label += "H 56S\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 102:
                        label += "H 102H\n";
                        break;
                    case 54:
                        label += "H 54S\n";
                        break;
                    case 54:
                        label += "H 54S\n";
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