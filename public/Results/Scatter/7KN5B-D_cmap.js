
var myChart7KN5B_D = 0;
var ctx = document.getElementById('7KN5B-D').getContext('2d');
if (window.myChart7KN5B_D != 0){
    window.myChart7KN5B_D.destroy();
}
window.myChart7KN5B_D = new Chart(ctx, {
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
            data: [{x: 403, y: 101},
                {x: 403, y: 101},
                {x: 403, y: 101},
                {x: 444, y: 30},
                {x: 444, y: 30},
                {x: 484, y: 56},
                {x: 484, y: 56},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 446, y: 30},
                {x: 449, y: 30},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 484, y: 100},
                {x: 492, y: 98},
                {x: 493, y: 96},
                {x: 493, y: 97},
                {x: 493, y: 98},
                {x: 493, y: 98},
                {x: 494, y: 98},
                {x: 494, y: 99},
                {x: 498, y: 28},
                {x: 498, y: 28},
                {x: 498, y: 29},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 449, y: 31},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 96},
                {x: 449, y: 96},
                {x: 449, y: 99},
                {x: 452, y: 98},
                {x: 452, y: 100},
                {x: 470, y: 100},
                {x: 470, y: 100},
                {x: 486, y: 58},
                {x: 486, y: 58},
                {x: 490, y: 98},
                {x: 490, y: 98},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 492, y: 100},
                {x: 492, y: 100},
                {x: 498, y: 29},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KN5B-D"],
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
                    case 403:
                        label += "7KN5BDB 403R - ";
                        break;
                    case 403:
                        label += "7KN5BDB 403R - ";
                        break;
                    case 403:
                        label += "7KN5BDB 403R - ";
                        break;
                    case 444:
                        label += "7KN5BDB 444K - ";
                        break;
                    case 444:
                        label += "7KN5BDB 444K - ";
                        break;
                    case 446:
                        label += "7KN5BDB 446G - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 452:
                        label += "7KN5BDB 452L - ";
                        break;
                    case 452:
                        label += "7KN5BDB 452L - ";
                        break;
                    case 470:
                        label += "7KN5BDB 470T - ";
                        break;
                    case 470:
                        label += "7KN5BDB 470T - ";
                        break;
                    case 484:
                        label += "7KN5BDB 484E - ";
                        break;
                    case 484:
                        label += "7KN5BDB 484E - ";
                        break;
                    case 484:
                        label += "7KN5BDB 484E - ";
                        break;
                    case 486:
                        label += "7KN5BDB 486F - ";
                        break;
                    case 486:
                        label += "7KN5BDB 486F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 492:
                        label += "7KN5BDB 492L - ";
                        break;
                    case 492:
                        label += "7KN5BDB 492L - ";
                        break;
                    case 492:
                        label += "7KN5BDB 492L - ";
                        break;
                    case 493:
                        label += "7KN5BDB 493Q - ";
                        break;
                    case 493:
                        label += "7KN5BDB 493Q - ";
                        break;
                    case 493:
                        label += "7KN5BDB 493Q - ";
                        break;
                    case 493:
                        label += "7KN5BDB 493Q - ";
                        break;
                    case 494:
                        label += "7KN5BDB 494S - ";
                        break;
                    case 494:
                        label += "7KN5BDB 494S - ";
                        break;
                    case 498:
                        label += "7KN5BDB 498Q - ";
                        break;
                    case 498:
                        label += "7KN5BDB 498Q - ";
                        break;
                    case 498:
                        label += "7KN5BDB 498Q - ";
                        break;
                    case 498:
                        label += "7KN5BDB 498Q - ";
                        break;}
                switch (labely){
                    case 101:
                        label += "D 101D\n";
                        break;
                    case 101:
                        label += "D 101D\n";
                        break;
                    case 101:
                        label += "D 101D\n";
                        break;
                    case 30:
                        label += "D 30D\n";
                        break;
                    case 30:
                        label += "D 30D\n";
                        break;
                    case 30:
                        label += "D 30D\n";
                        break;
                    case 30:
                        label += "D 30D\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 96:
                        label += "D 96V\n";
                        break;
                    case 96:
                        label += "D 96V\n";
                        break;
                    case 99:
                        label += "D 99Y\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 56:
                        label += "D 56R\n";
                        break;
                    case 56:
                        label += "D 56R\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 58:
                        label += "D 58Y\n";
                        break;
                    case 58:
                        label += "D 58Y\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 96:
                        label += "D 96V\n";
                        break;
                    case 97:
                        label += "D 97G\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 99:
                        label += "D 99Y\n";
                        break;
                    case 28:
                        label += "D 28T\n";
                        break;
                    case 28:
                        label += "D 28T\n";
                        break;
                    case 29:
                        label += "D 29L\n";
                        break;
                    case 29:
                        label += "D 29L\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});