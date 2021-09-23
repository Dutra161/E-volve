
var myChart7JWBA_D = 0;
var ctx = document.getElementById('7JWBA-D').getContext('2d');
if (window.myChart7JWBA_D != 0){
    window.myChart7JWBA_D.destroy();
}
window.myChart7JWBA_D = new Chart(ctx, {
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
            data: [{x: 484, y: 52},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 484, y: 52},
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
            data: [{x: 496, y: 30},
                {x: 498, y: 30},
                {x: 501, y: 30},
                {x: 501, y: 30},
                {x: 505, y: 31},
                {x: 403, y: 33},
                {x: 417, y: 33},
                {x: 505, y: 33},
                {x: 453, y: 35},
                {x: 489, y: 35},
                {x: 484, y: 52},
                {x: 488, y: 52},
                {x: 488, y: 52},
                {x: 403, y: 56},
                {x: 496, y: 56},
                {x: 453, y: 57},
                {x: 494, y: 57},
                {x: 494, y: 59},
                {x: 493, y: 61},
                {x: 493, y: 61},
                {x: 421, y: 110},
                {x: 457, y: 110},
                {x: 473, y: 111},
                {x: 487, y: 114},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 505, y: 33},
                {x: 489, y: 35},
                {x: 489, y: 54},
                {x: 456, y: 101},
                {x: 489, y: 101},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 505, y: 33},
                {x: 505, y: 33},
                {x: 505, y: 33},
                {x: 455, y: 35},
                {x: 489, y: 35},
                {x: 489, y: 35},
                {x: 486, y: 39},
                {x: 486, y: 39},
                {x: 486, y: 39},
                {x: 486, y: 39},
                {x: 486, y: 47},
                {x: 486, y: 47},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 489, y: 54},
                {x: 489, y: 54},
                {x: 489, y: 54},
                {x: 456, y: 101},
                {x: 456, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 417, y: 103},
                {x: 417, y: 103},
                {x: 455, y: 103},
                {x: 455, y: 103},
                {x: 455, y: 103},
                {x: 455, y: 103},
                {x: 455, y: 103},
                {x: 455, y: 104},
                {x: 456, y: 104},
                {x: 456, y: 104},
                {x: 456, y: 104},
                {x: 456, y: 104},
                {x: 456, y: 104},
                {x: 456, y: 104},
                {x: 486, y: 114},
                {x: 486, y: 114},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7JWBA-D"],
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
                    case 496:
                        label += "7JWBADA 496G - ";
                        break;
                    case 498:
                        label += "7JWBADA 498Q - ";
                        break;
                    case 501:
                        label += "7JWBADA 501N - ";
                        break;
                    case 501:
                        label += "7JWBADA 501N - ";
                        break;
                    case 505:
                        label += "7JWBADA 505Y - ";
                        break;
                    case 403:
                        label += "7JWBADA 403R - ";
                        break;
                    case 417:
                        label += "7JWBADA 417K - ";
                        break;
                    case 505:
                        label += "7JWBADA 505Y - ";
                        break;
                    case 505:
                        label += "7JWBADA 505Y - ";
                        break;
                    case 505:
                        label += "7JWBADA 505Y - ";
                        break;
                    case 505:
                        label += "7JWBADA 505Y - ";
                        break;
                    case 505:
                        label += "7JWBADA 505Y - ";
                        break;
                    case 453:
                        label += "7JWBADA 453Y - ";
                        break;
                    case 455:
                        label += "7JWBADA 455L - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 484:
                        label += "7JWBADA 484E - ";
                        break;
                    case 484:
                        label += "7JWBADA 484E - ";
                        break;
                    case 484:
                        label += "7JWBADA 484E - ";
                        break;
                    case 484:
                        label += "7JWBADA 484E - ";
                        break;
                    case 484:
                        label += "7JWBADA 484E - ";
                        break;
                    case 484:
                        label += "7JWBADA 484E - ";
                        break;
                    case 484:
                        label += "7JWBADA 484E - ";
                        break;
                    case 488:
                        label += "7JWBADA 488C - ";
                        break;
                    case 488:
                        label += "7JWBADA 488C - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 403:
                        label += "7JWBADA 403R - ";
                        break;
                    case 496:
                        label += "7JWBADA 496G - ";
                        break;
                    case 453:
                        label += "7JWBADA 453Y - ";
                        break;
                    case 494:
                        label += "7JWBADA 494S - ";
                        break;
                    case 494:
                        label += "7JWBADA 494S - ";
                        break;
                    case 493:
                        label += "7JWBADA 493Q - ";
                        break;
                    case 493:
                        label += "7JWBADA 493Q - ";
                        break;
                    case 456:
                        label += "7JWBADA 456F - ";
                        break;
                    case 456:
                        label += "7JWBADA 456F - ";
                        break;
                    case 456:
                        label += "7JWBADA 456F - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 489:
                        label += "7JWBADA 489Y - ";
                        break;
                    case 417:
                        label += "7JWBADA 417K - ";
                        break;
                    case 417:
                        label += "7JWBADA 417K - ";
                        break;
                    case 455:
                        label += "7JWBADA 455L - ";
                        break;
                    case 455:
                        label += "7JWBADA 455L - ";
                        break;
                    case 455:
                        label += "7JWBADA 455L - ";
                        break;
                    case 455:
                        label += "7JWBADA 455L - ";
                        break;
                    case 455:
                        label += "7JWBADA 455L - ";
                        break;
                    case 455:
                        label += "7JWBADA 455L - ";
                        break;
                    case 456:
                        label += "7JWBADA 456F - ";
                        break;
                    case 456:
                        label += "7JWBADA 456F - ";
                        break;
                    case 456:
                        label += "7JWBADA 456F - ";
                        break;
                    case 456:
                        label += "7JWBADA 456F - ";
                        break;
                    case 456:
                        label += "7JWBADA 456F - ";
                        break;
                    case 456:
                        label += "7JWBADA 456F - ";
                        break;
                    case 421:
                        label += "7JWBADA 421Y - ";
                        break;
                    case 457:
                        label += "7JWBADA 457R - ";
                        break;
                    case 473:
                        label += "7JWBADA 473Y - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 486:
                        label += "7JWBADA 486F - ";
                        break;
                    case 487:
                        label += "7JWBADA 487N - ";
                        break;}
                switch (labely){
                    case 30:
                        label += "D 30Y\n";
                        break;
                    case 30:
                        label += "D 30Y\n";
                        break;
                    case 30:
                        label += "D 30Y\n";
                        break;
                    case 30:
                        label += "D 30Y\n";
                        break;
                    case 31:
                        label += "D 31S\n";
                        break;
                    case 33:
                        label += "D 33Y\n";
                        break;
                    case 33:
                        label += "D 33Y\n";
                        break;
                    case 33:
                        label += "D 33Y\n";
                        break;
                    case 33:
                        label += "D 33Y\n";
                        break;
                    case 33:
                        label += "D 33Y\n";
                        break;
                    case 33:
                        label += "D 33Y\n";
                        break;
                    case 33:
                        label += "D 33Y\n";
                        break;
                    case 35:
                        label += "D 35Y\n";
                        break;
                    case 35:
                        label += "D 35Y\n";
                        break;
                    case 35:
                        label += "D 35Y\n";
                        break;
                    case 35:
                        label += "D 35Y\n";
                        break;
                    case 35:
                        label += "D 35Y\n";
                        break;
                    case 35:
                        label += "D 35Y\n";
                        break;
                    case 39:
                        label += "D 39V\n";
                        break;
                    case 39:
                        label += "D 39V\n";
                        break;
                    case 39:
                        label += "D 39V\n";
                        break;
                    case 39:
                        label += "D 39V\n";
                        break;
                    case 47:
                        label += "D 47E\n";
                        break;
                    case 47:
                        label += "D 47E\n";
                        break;
                    case 49:
                        label += "D 49L\n";
                        break;
                    case 49:
                        label += "D 49L\n";
                        break;
                    case 49:
                        label += "D 49L\n";
                        break;
                    case 49:
                        label += "D 49L\n";
                        break;
                    case 49:
                        label += "D 49L\n";
                        break;
                    case 49:
                        label += "D 49L\n";
                        break;
                    case 49:
                        label += "D 49L\n";
                        break;
                    case 52:
                        label += "D 52R\n";
                        break;
                    case 52:
                        label += "D 52R\n";
                        break;
                    case 52:
                        label += "D 52R\n";
                        break;
                    case 52:
                        label += "D 52R\n";
                        break;
                    case 52:
                        label += "D 52R\n";
                        break;
                    case 52:
                        label += "D 52R\n";
                        break;
                    case 52:
                        label += "D 52R\n";
                        break;
                    case 52:
                        label += "D 52R\n";
                        break;
                    case 52:
                        label += "D 52R\n";
                        break;
                    case 54:
                        label += "D 54Y\n";
                        break;
                    case 54:
                        label += "D 54Y\n";
                        break;
                    case 54:
                        label += "D 54Y\n";
                        break;
                    case 54:
                        label += "D 54Y\n";
                        break;
                    case 56:
                        label += "D 56S\n";
                        break;
                    case 56:
                        label += "D 56S\n";
                        break;
                    case 57:
                        label += "D 57S\n";
                        break;
                    case 57:
                        label += "D 57S\n";
                        break;
                    case 59:
                        label += "D 59Y\n";
                        break;
                    case 61:
                        label += "D 61Y\n";
                        break;
                    case 61:
                        label += "D 61Y\n";
                        break;
                    case 101:
                        label += "D 101W\n";
                        break;
                    case 101:
                        label += "D 101W\n";
                        break;
                    case 101:
                        label += "D 101W\n";
                        break;
                    case 101:
                        label += "D 101W\n";
                        break;
                    case 101:
                        label += "D 101W\n";
                        break;
                    case 101:
                        label += "D 101W\n";
                        break;
                    case 101:
                        label += "D 101W\n";
                        break;
                    case 101:
                        label += "D 101W\n";
                        break;
                    case 101:
                        label += "D 101W\n";
                        break;
                    case 101:
                        label += "D 101W\n";
                        break;
                    case 103:
                        label += "D 103F\n";
                        break;
                    case 103:
                        label += "D 103F\n";
                        break;
                    case 103:
                        label += "D 103F\n";
                        break;
                    case 103:
                        label += "D 103F\n";
                        break;
                    case 103:
                        label += "D 103F\n";
                        break;
                    case 103:
                        label += "D 103F\n";
                        break;
                    case 103:
                        label += "D 103F\n";
                        break;
                    case 104:
                        label += "D 104A\n";
                        break;
                    case 104:
                        label += "D 104A\n";
                        break;
                    case 104:
                        label += "D 104A\n";
                        break;
                    case 104:
                        label += "D 104A\n";
                        break;
                    case 104:
                        label += "D 104A\n";
                        break;
                    case 104:
                        label += "D 104A\n";
                        break;
                    case 104:
                        label += "D 104A\n";
                        break;
                    case 110:
                        label += "D 110G\n";
                        break;
                    case 110:
                        label += "D 110G\n";
                        break;
                    case 111:
                        label += "D 111S\n";
                        break;
                    case 114:
                        label += "D 114L\n";
                        break;
                    case 114:
                        label += "D 114L\n";
                        break;
                    case 114:
                        label += "D 114L\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});