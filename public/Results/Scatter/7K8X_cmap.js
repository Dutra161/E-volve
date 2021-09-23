
var myChart7K8X = 0;
var ctx = document.getElementById('7K8X').getContext('2d');
if (window.myChart7K8X != 0){
    window.myChart7K8X.destroy();
}
window.myChart7K8X = new Chart(ctx, {
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
            data: [{x: 484, y: 35},
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
            data: [{x: 444, y: 75},
                {x: 449, y: 29},
                {x: 484, y: 33},
                {x: 489, y: 105},
                {x: 489, y: 109},
                {x: 489, y: 111},
                {x: 489, y: 111},
                {x: 449, y: 27},
                {x: 449, y: 29},
                {x: 484, y: 50},
                {x: 484, y: 112},
                {x: 489, y: 105},
                {x: 489, y: 109},
                {x: 489, y: 110},
                {x: 489, y: 111},
                {x: 493, y: 103},
                {x: 494, y: 30},
                {x: 404, y: 65},
                {x: 405, y: 65},
                {x: 405, y: 65},
                {x: 406, y: 65},
                {x: 408, y: 51},
                {x: 408, y: 52},
                {x: 408, y: 65},
                {x: 408, y: 65},
                {x: 408, y: 65},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 113},
                {x: 486, y: 91},
                {x: 486, y: 113},
                {x: 486, y: 91},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 29},
                {x: 449, y: 30},
                {x: 449, y: 30},
                {x: 449, y: 30},
                {x: 452, y: 54},
                {x: 484, y: 50},
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
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 449, y: 29},
                {x: 449, y: 30},
                {x: 452, y: 54},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 50},
                {x: 484, y: 113},
                {x: 484, y: 113},
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
                {x: 490, y: 54},
                {x: 370, y: 106},
                {x: 370, y: 106},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 408, y: 66},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7K8X Superpose"],
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
                    case 444:
                        label += "7K8XAEA 444K - ";
                        break;
                    case 449:
                        label += "7K8XAEA 449Y - ";
                        break;
                    case 449:
                        label += "7K8XAEA 449Y - ";
                        break;
                    case 449:
                        label += "7K8XAEA 449Y - ";
                        break;
                    case 449:
                        label += "7K8XAEA 449Y - ";
                        break;
                    case 449:
                        label += "7K8XAEA 449Y - ";
                        break;
                    case 452:
                        label += "7K8XAEA 452L - ";
                        break;
                    case 484:
                        label += "7K8XAEA 484E - ";
                        break;
                    case 484:
                        label += "7K8XAEA 484E - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAEA 486F - ";
                        break;
                    case 489:
                        label += "7K8XAEA 489Y - ";
                        break;
                    case 489:
                        label += "7K8XAEA 489Y - ";
                        break;
                    case 489:
                        label += "7K8XAEA 489Y - ";
                        break;
                    case 489:
                        label += "7K8XAEA 489Y - ";
                        break;
                    case 486:
                        label += "7K8XAGA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAGA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAGA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAGA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAGA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAGA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAGA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAGA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAGA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAGA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAGA 486F - ";
                        break;
                    case 486:
                        label += "7K8XAGA 486F - ";
                        break;
                    case 449:
                        label += "7K8XBDB 449Y - ";
                        break;
                    case 449:
                        label += "7K8XBDB 449Y - ";
                        break;
                    case 449:
                        label += "7K8XBDB 449Y - ";
                        break;
                    case 449:
                        label += "7K8XBDB 449Y - ";
                        break;
                    case 452:
                        label += "7K8XBDB 452L - ";
                        break;
                    case 484:
                        label += "7K8XBDB 484E - ";
                        break;
                    case 484:
                        label += "7K8XBDB 484E - ";
                        break;
                    case 484:
                        label += "7K8XBDB 484E - ";
                        break;
                    case 484:
                        label += "7K8XBDB 484E - ";
                        break;
                    case 484:
                        label += "7K8XBDB 484E - ";
                        break;
                    case 484:
                        label += "7K8XBDB 484E - ";
                        break;
                    case 484:
                        label += "7K8XBDB 484E - ";
                        break;
                    case 484:
                        label += "7K8XBDB 484E - ";
                        break;
                    case 484:
                        label += "7K8XBDB 484E - ";
                        break;
                    case 484:
                        label += "7K8XBDB 484E - ";
                        break;
                    case 486:
                        label += "7K8XBDB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBDB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBDB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBDB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBDB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBDB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBDB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBDB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBDB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBDB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBDB 486F - ";
                        break;
                    case 489:
                        label += "7K8XBDB 489Y - ";
                        break;
                    case 489:
                        label += "7K8XBDB 489Y - ";
                        break;
                    case 489:
                        label += "7K8XBDB 489Y - ";
                        break;
                    case 489:
                        label += "7K8XBDB 489Y - ";
                        break;
                    case 490:
                        label += "7K8XBDB 490F - ";
                        break;
                    case 493:
                        label += "7K8XBDB 493Q - ";
                        break;
                    case 494:
                        label += "7K8XBDB 494S - ";
                        break;
                    case 370:
                        label += "7K8XBEB 370N - ";
                        break;
                    case 370:
                        label += "7K8XBEB 370N - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 486:
                        label += "7K8XBFB 486F - ";
                        break;
                    case 404:
                        label += "7K8XCFC 404G - ";
                        break;
                    case 405:
                        label += "7K8XCFC 405D - ";
                        break;
                    case 405:
                        label += "7K8XCFC 405D - ";
                        break;
                    case 406:
                        label += "7K8XCFC 406E - ";
                        break;
                    case 408:
                        label += "7K8XCFC 408R - ";
                        break;
                    case 408:
                        label += "7K8XCFC 408R - ";
                        break;
                    case 408:
                        label += "7K8XCFC 408R - ";
                        break;
                    case 408:
                        label += "7K8XCFC 408R - ";
                        break;
                    case 408:
                        label += "7K8XCFC 408R - ";
                        break;
                    case 408:
                        label += "7K8XCFC 408R - ";
                        break;}
                switch (labely){
                    case 75:
                        label += "E 75S\n";
                        break;
                    case 29:
                        label += "E 29F\n";
                        break;
                    case 29:
                        label += "E 29F\n";
                        break;
                    case 30:
                        label += "E 30T\n";
                        break;
                    case 30:
                        label += "E 30T\n";
                        break;
                    case 30:
                        label += "E 30T\n";
                        break;
                    case 54:
                        label += "E 54V\n";
                        break;
                    case 33:
                        label += "E 33Y\n";
                        break;
                    case 50:
                        label += "E 50W\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 113:
                        label += "E 113Y\n";
                        break;
                    case 105:
                        label += "E 105G\n";
                        break;
                    case 109:
                        label += "E 109A\n";
                        break;
                    case 111:
                        label += "E 111D\n";
                        break;
                    case 111:
                        label += "E 111D\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 27:
                        label += "D 27Y\n";
                        break;
                    case 29:
                        label += "D 29F\n";
                        break;
                    case 29:
                        label += "D 29F\n";
                        break;
                    case 30:
                        label += "D 30T\n";
                        break;
                    case 54:
                        label += "D 54V\n";
                        break;
                    case 35:
                        label += "D 35H\n";
                        break;
                    case 50:
                        label += "D 50W\n";
                        break;
                    case 50:
                        label += "D 50W\n";
                        break;
                    case 50:
                        label += "D 50W\n";
                        break;
                    case 50:
                        label += "D 50W\n";
                        break;
                    case 50:
                        label += "D 50W\n";
                        break;
                    case 50:
                        label += "D 50W\n";
                        break;
                    case 112:
                        label += "D 112Y\n";
                        break;
                    case 113:
                        label += "D 113Y\n";
                        break;
                    case 113:
                        label += "D 113Y\n";
                        break;
                    case 113:
                        label += "D 113Y\n";
                        break;
                    case 113:
                        label += "D 113Y\n";
                        break;
                    case 113:
                        label += "D 113Y\n";
                        break;
                    case 113:
                        label += "D 113Y\n";
                        break;
                    case 113:
                        label += "D 113Y\n";
                        break;
                    case 113:
                        label += "D 113Y\n";
                        break;
                    case 113:
                        label += "D 113Y\n";
                        break;
                    case 113:
                        label += "D 113Y\n";
                        break;
                    case 113:
                        label += "D 113Y\n";
                        break;
                    case 113:
                        label += "D 113Y\n";
                        break;
                    case 113:
                        label += "D 113Y\n";
                        break;
                    case 105:
                        label += "D 105G\n";
                        break;
                    case 109:
                        label += "D 109A\n";
                        break;
                    case 110:
                        label += "D 110G\n";
                        break;
                    case 111:
                        label += "D 111D\n";
                        break;
                    case 54:
                        label += "D 54V\n";
                        break;
                    case 103:
                        label += "D 103P\n";
                        break;
                    case 30:
                        label += "D 30T\n";
                        break;
                    case 106:
                        label += "E 106V\n";
                        break;
                    case 106:
                        label += "E 106V\n";
                        break;
                    case 32:
                        label += "F 32L\n";
                        break;
                    case 32:
                        label += "F 32L\n";
                        break;
                    case 32:
                        label += "F 32L\n";
                        break;
                    case 32:
                        label += "F 32L\n";
                        break;
                    case 91:
                        label += "F 91Y\n";
                        break;
                    case 91:
                        label += "F 91Y\n";
                        break;
                    case 91:
                        label += "F 91Y\n";
                        break;
                    case 91:
                        label += "F 91Y\n";
                        break;
                    case 91:
                        label += "F 91Y\n";
                        break;
                    case 91:
                        label += "F 91Y\n";
                        break;
                    case 91:
                        label += "F 91Y\n";
                        break;
                    case 91:
                        label += "F 91Y\n";
                        break;
                    case 91:
                        label += "F 91Y\n";
                        break;
                    case 91:
                        label += "F 91Y\n";
                        break;
                    case 91:
                        label += "F 91Y\n";
                        break;
                    case 91:
                        label += "F 91Y\n";
                        break;
                    case 65:
                        label += "F 65S\n";
                        break;
                    case 65:
                        label += "F 65S\n";
                        break;
                    case 65:
                        label += "F 65S\n";
                        break;
                    case 65:
                        label += "F 65S\n";
                        break;
                    case 51:
                        label += "F 51G\n";
                        break;
                    case 52:
                        label += "F 52S\n";
                        break;
                    case 65:
                        label += "F 65S\n";
                        break;
                    case 65:
                        label += "F 65S\n";
                        break;
                    case 65:
                        label += "F 65S\n";
                        break;
                    case 66:
                        label += "F 66K\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});