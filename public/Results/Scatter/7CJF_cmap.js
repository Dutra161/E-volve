
var myChart7CJF = 0;
var ctx = document.getElementById('7CJF').getContext('2d');
if (window.myChart7CJF != 0){
    window.myChart7CJF.destroy();
}
window.myChart7CJF = new Chart(ctx, {
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
                {x: 417, y: 101},
                {x: 417, y: 101},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 458, y: 71},
                {x: 458, y: 71},
                {x: 458, y: 71},
                {x: 458, y: 71},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 477, y: 26},
                {x: 475, y: 28},
                {x: 458, y: 30},
                {x: 473, y: 31},
                {x: 475, y: 32},
                {x: 455, y: 33},
                {x: 421, y: 53},
                {x: 421, y: 53},
                {x: 457, y: 53},
                {x: 458, y: 53},
                {x: 473, y: 53},
                {x: 421, y: 54},
                {x: 458, y: 54},
                {x: 460, y: 54},
                {x: 420, y: 56},
                {x: 420, y: 56},
                {x: 487, y: 97},
                {x: 487, y: 97},
                {x: 489, y: 97},
                {x: 417, y: 100},
                {x: 417, y: 101},
                {x: 453, y: 101},
                {x: 453, y: 101},
                {x: 500, y: 28},
                {x: 502, y: 28},
                {x: 496, y: 30},
                {x: 498, y: 30},
                {x: 501, y: 30},
                {x: 501, y: 30},
                {x: 501, y: 30},
                {x: 495, y: 32},
                {x: 498, y: 67},
                {x: 498, y: 67},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 505, y: 92},
                {x: 505, y: 93},
                {x: 505, y: 93},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 107},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 486, y: 27},
                {x: 486, y: 27},
                {x: 417, y: 33},
                {x: 417, y: 33},
                {x: 455, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 417, y: 52},
                {x: 417, y: 52},
                {x: 421, y: 52},
                {x: 456, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 493, y: 101},
                {x: 455, y: 102},
                {x: 455, y: 102},
                {x: 456, y: 102},
                {x: 456, y: 102},
                {x: 489, y: 102},
                {x: 489, y: 102},
                {x: 489, y: 102},
                {x: 486, y: 107},
                {x: 486, y: 107},
                {x: 486, y: 107},
                {x: 486, y: 107},
                {x: 505, y: 2},
                {x: 505, y: 29},
                {x: 505, y: 29},
                {x: 505, y: 29},
                {x: 449, y: 32},
                {x: 449, y: 32},
                {x: 505, y: 92},
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
            text:["7CJF Superpose"],
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
                    case 477:
                        label += "7CJFCAC 477S - ";
                        break;
                    case 486:
                        label += "7CJFCAC 486F - ";
                        break;
                    case 486:
                        label += "7CJFCAC 486F - ";
                        break;
                    case 475:
                        label += "7CJFCAC 475A - ";
                        break;
                    case 458:
                        label += "7CJFCAC 458K - ";
                        break;
                    case 473:
                        label += "7CJFCAC 473Y - ";
                        break;
                    case 475:
                        label += "7CJFCAC 475A - ";
                        break;
                    case 417:
                        label += "7CJFCAC 417K - ";
                        break;
                    case 417:
                        label += "7CJFCAC 417K - ";
                        break;
                    case 455:
                        label += "7CJFCAC 455L - ";
                        break;
                    case 455:
                        label += "7CJFCAC 455L - ";
                        break;
                    case 456:
                        label += "7CJFCAC 456F - ";
                        break;
                    case 456:
                        label += "7CJFCAC 456F - ";
                        break;
                    case 417:
                        label += "7CJFCAC 417K - ";
                        break;
                    case 417:
                        label += "7CJFCAC 417K - ";
                        break;
                    case 421:
                        label += "7CJFCAC 421Y - ";
                        break;
                    case 421:
                        label += "7CJFCAC 421Y - ";
                        break;
                    case 421:
                        label += "7CJFCAC 421Y - ";
                        break;
                    case 457:
                        label += "7CJFCAC 457R - ";
                        break;
                    case 458:
                        label += "7CJFCAC 458K - ";
                        break;
                    case 473:
                        label += "7CJFCAC 473Y - ";
                        break;
                    case 421:
                        label += "7CJFCAC 421Y - ";
                        break;
                    case 458:
                        label += "7CJFCAC 458K - ";
                        break;
                    case 460:
                        label += "7CJFCAC 460N - ";
                        break;
                    case 420:
                        label += "7CJFCAC 420D - ";
                        break;
                    case 420:
                        label += "7CJFCAC 420D - ";
                        break;
                    case 458:
                        label += "7CJFCAC 458K - ";
                        break;
                    case 458:
                        label += "7CJFCAC 458K - ";
                        break;
                    case 458:
                        label += "7CJFCAC 458K - ";
                        break;
                    case 458:
                        label += "7CJFCAC 458K - ";
                        break;
                    case 487:
                        label += "7CJFCAC 487N - ";
                        break;
                    case 487:
                        label += "7CJFCAC 487N - ";
                        break;
                    case 489:
                        label += "7CJFCAC 489Y - ";
                        break;
                    case 456:
                        label += "7CJFCAC 456F - ";
                        break;
                    case 489:
                        label += "7CJFCAC 489Y - ";
                        break;
                    case 489:
                        label += "7CJFCAC 489Y - ";
                        break;
                    case 417:
                        label += "7CJFCAC 417K - ";
                        break;
                    case 455:
                        label += "7CJFCAC 455L - ";
                        break;
                    case 455:
                        label += "7CJFCAC 455L - ";
                        break;
                    case 403:
                        label += "7CJFCAC 403R - ";
                        break;
                    case 417:
                        label += "7CJFCAC 417K - ";
                        break;
                    case 417:
                        label += "7CJFCAC 417K - ";
                        break;
                    case 453:
                        label += "7CJFCAC 453Y - ";
                        break;
                    case 453:
                        label += "7CJFCAC 453Y - ";
                        break;
                    case 493:
                        label += "7CJFCAC 493Q - ";
                        break;
                    case 455:
                        label += "7CJFCAC 455L - ";
                        break;
                    case 455:
                        label += "7CJFCAC 455L - ";
                        break;
                    case 456:
                        label += "7CJFCAC 456F - ";
                        break;
                    case 456:
                        label += "7CJFCAC 456F - ";
                        break;
                    case 489:
                        label += "7CJFCAC 489Y - ";
                        break;
                    case 489:
                        label += "7CJFCAC 489Y - ";
                        break;
                    case 489:
                        label += "7CJFCAC 489Y - ";
                        break;
                    case 486:
                        label += "7CJFCAC 486F - ";
                        break;
                    case 486:
                        label += "7CJFCAC 486F - ";
                        break;
                    case 486:
                        label += "7CJFCAC 486F - ";
                        break;
                    case 486:
                        label += "7CJFCAC 486F - ";
                        break;
                    case 486:
                        label += "7CJFCAC 486F - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 500:
                        label += "7CJFCBC 500T - ";
                        break;
                    case 502:
                        label += "7CJFCBC 502G - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 496:
                        label += "7CJFCBC 496G - ";
                        break;
                    case 498:
                        label += "7CJFCBC 498Q - ";
                        break;
                    case 501:
                        label += "7CJFCBC 501N - ";
                        break;
                    case 501:
                        label += "7CJFCBC 501N - ";
                        break;
                    case 501:
                        label += "7CJFCBC 501N - ";
                        break;
                    case 449:
                        label += "7CJFCBC 449Y - ";
                        break;
                    case 449:
                        label += "7CJFCBC 449Y - ";
                        break;
                    case 495:
                        label += "7CJFCBC 495Y - ";
                        break;
                    case 498:
                        label += "7CJFCBC 498Q - ";
                        break;
                    case 498:
                        label += "7CJFCBC 498Q - ";
                        break;
                    case 403:
                        label += "7CJFCBC 403R - ";
                        break;
                    case 403:
                        label += "7CJFCBC 403R - ";
                        break;
                    case 403:
                        label += "7CJFCBC 403R - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;
                    case 505:
                        label += "7CJFCBC 505Y - ";
                        break;}
                switch (labely){
                    case 26:
                        label += "A 26G\n";
                        break;
                    case 27:
                        label += "A 27F\n";
                        break;
                    case 27:
                        label += "A 27F\n";
                        break;
                    case 28:
                        label += "A 28I\n";
                        break;
                    case 30:
                        label += "A 30S\n";
                        break;
                    case 31:
                        label += "A 31S\n";
                        break;
                    case 32:
                        label += "A 32N\n";
                        break;
                    case 33:
                        label += "A 33Y\n";
                        break;
                    case 33:
                        label += "A 33Y\n";
                        break;
                    case 33:
                        label += "A 33Y\n";
                        break;
                    case 33:
                        label += "A 33Y\n";
                        break;
                    case 33:
                        label += "A 33Y\n";
                        break;
                    case 33:
                        label += "A 33Y\n";
                        break;
                    case 52:
                        label += "A 52Y\n";
                        break;
                    case 52:
                        label += "A 52Y\n";
                        break;
                    case 52:
                        label += "A 52Y\n";
                        break;
                    case 53:
                        label += "A 53S\n";
                        break;
                    case 53:
                        label += "A 53S\n";
                        break;
                    case 53:
                        label += "A 53S\n";
                        break;
                    case 53:
                        label += "A 53S\n";
                        break;
                    case 53:
                        label += "A 53S\n";
                        break;
                    case 54:
                        label += "A 54G\n";
                        break;
                    case 54:
                        label += "A 54G\n";
                        break;
                    case 54:
                        label += "A 54G\n";
                        break;
                    case 56:
                        label += "A 56S\n";
                        break;
                    case 56:
                        label += "A 56S\n";
                        break;
                    case 71:
                        label += "A 71R\n";
                        break;
                    case 71:
                        label += "A 71R\n";
                        break;
                    case 71:
                        label += "A 71R\n";
                        break;
                    case 71:
                        label += "A 71R\n";
                        break;
                    case 97:
                        label += "A 97R\n";
                        break;
                    case 97:
                        label += "A 97R\n";
                        break;
                    case 97:
                        label += "A 97R\n";
                        break;
                    case 99:
                        label += "A 99L\n";
                        break;
                    case 99:
                        label += "A 99L\n";
                        break;
                    case 99:
                        label += "A 99L\n";
                        break;
                    case 100:
                        label += "A 100Q\n";
                        break;
                    case 100:
                        label += "A 100Q\n";
                        break;
                    case 100:
                        label += "A 100Q\n";
                        break;
                    case 101:
                        label += "A 101E\n";
                        break;
                    case 101:
                        label += "A 101E\n";
                        break;
                    case 101:
                        label += "A 101E\n";
                        break;
                    case 101:
                        label += "A 101E\n";
                        break;
                    case 101:
                        label += "A 101E\n";
                        break;
                    case 101:
                        label += "A 101E\n";
                        break;
                    case 102:
                        label += "A 102L\n";
                        break;
                    case 102:
                        label += "A 102L\n";
                        break;
                    case 102:
                        label += "A 102L\n";
                        break;
                    case 102:
                        label += "A 102L\n";
                        break;
                    case 102:
                        label += "A 102L\n";
                        break;
                    case 102:
                        label += "A 102L\n";
                        break;
                    case 102:
                        label += "A 102L\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 2:
                        label += "B 2I\n";
                        break;
                    case 28:
                        label += "B 28G\n";
                        break;
                    case 28:
                        label += "B 28G\n";
                        break;
                    case 29:
                        label += "B 29I\n";
                        break;
                    case 29:
                        label += "B 29I\n";
                        break;
                    case 29:
                        label += "B 29I\n";
                        break;
                    case 30:
                        label += "B 30S\n";
                        break;
                    case 30:
                        label += "B 30S\n";
                        break;
                    case 30:
                        label += "B 30S\n";
                        break;
                    case 30:
                        label += "B 30S\n";
                        break;
                    case 30:
                        label += "B 30S\n";
                        break;
                    case 32:
                        label += "B 32W\n";
                        break;
                    case 32:
                        label += "B 32W\n";
                        break;
                    case 32:
                        label += "B 32W\n";
                        break;
                    case 67:
                        label += "B 67S\n";
                        break;
                    case 67:
                        label += "B 67S\n";
                        break;
                    case 92:
                        label += "B 92N\n";
                        break;
                    case 92:
                        label += "B 92N\n";
                        break;
                    case 92:
                        label += "B 92N\n";
                        break;
                    case 92:
                        label += "B 92N\n";
                        break;
                    case 92:
                        label += "B 92N\n";
                        break;
                    case 93:
                        label += "B 93S\n";
                        break;
                    case 93:
                        label += "B 93S\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});