
var myChart7KFY = 0;
var ctx = document.getElementById('7KFY').getContext('2d');
if (window.myChart7KFY != 0){
    window.myChart7KFY.destroy();
}
window.myChart7KFY = new Chart(ctx, {
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
            data: [{x: 417, y: 96},
                {x: 417, y: 96},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 415, y: 58},
                {x: 415, y: 58},
                {x: 416, y: 58},
                {x: 417, y: 52},
                {x: 417, y: 96},
                {x: 417, y: 98},
                {x: 420, y: 56},
                {x: 420, y: 56},
                {x: 421, y: 53},
                {x: 421, y: 53},
                {x: 421, y: 54},
                {x: 453, y: 99},
                {x: 455, y: 33},
                {x: 457, y: 53},
                {x: 458, y: 31},
                {x: 458, y: 53},
                {x: 458, y: 54},
                {x: 460, y: 54},
                {x: 473, y: 31},
                {x: 473, y: 53},
                {x: 475, y: 28},
                {x: 475, y: 28},
                {x: 475, y: 32},
                {x: 476, y: 28},
                {x: 477, y: 28},
                {x: 487, y: 26},
                {x: 487, y: 94},
                {x: 487, y: 94},
                {x: 489, y: 94},
                {x: 489, y: 94},
                {x: 489, y: 94},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 417, y: 94},
                {x: 453, y: 32},
                {x: 498, y: 30},
                {x: 498, y: 67},
                {x: 500, y: 28},
                {x: 501, y: 30},
                {x: 501, y: 30},
                {x: 502, y: 28},
                {x: 505, y: 27},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 489, y: 100},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 417, y: 52},
                {x: 421, y: 52},
                {x: 455, y: 33},
                {x: 455, y: 33},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 505, y: 2},
                {x: 505, y: 2},
                {x: 505, y: 27},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KFY Superpose"],
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
                    case 415:
                        label += "7KFYAHA 415T - ";
                        break;
                    case 415:
                        label += "7KFYAHA 415T - ";
                        break;
                    case 416:
                        label += "7KFYAHA 416G - ";
                        break;
                    case 417:
                        label += "7KFYAHA 417K - ";
                        break;
                    case 417:
                        label += "7KFYAHA 417K - ";
                        break;
                    case 417:
                        label += "7KFYAHA 417K - ";
                        break;
                    case 417:
                        label += "7KFYAHA 417K - ";
                        break;
                    case 417:
                        label += "7KFYAHA 417K - ";
                        break;
                    case 420:
                        label += "7KFYAHA 420D - ";
                        break;
                    case 420:
                        label += "7KFYAHA 420D - ";
                        break;
                    case 421:
                        label += "7KFYAHA 421Y - ";
                        break;
                    case 421:
                        label += "7KFYAHA 421Y - ";
                        break;
                    case 421:
                        label += "7KFYAHA 421Y - ";
                        break;
                    case 421:
                        label += "7KFYAHA 421Y - ";
                        break;
                    case 453:
                        label += "7KFYAHA 453Y - ";
                        break;
                    case 455:
                        label += "7KFYAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFYAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFYAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFYAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFYAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFYAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFYAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFYAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFYAHA 455L - ";
                        break;
                    case 456:
                        label += "7KFYAHA 456F - ";
                        break;
                    case 456:
                        label += "7KFYAHA 456F - ";
                        break;
                    case 456:
                        label += "7KFYAHA 456F - ";
                        break;
                    case 456:
                        label += "7KFYAHA 456F - ";
                        break;
                    case 456:
                        label += "7KFYAHA 456F - ";
                        break;
                    case 456:
                        label += "7KFYAHA 456F - ";
                        break;
                    case 456:
                        label += "7KFYAHA 456F - ";
                        break;
                    case 456:
                        label += "7KFYAHA 456F - ";
                        break;
                    case 457:
                        label += "7KFYAHA 457R - ";
                        break;
                    case 458:
                        label += "7KFYAHA 458K - ";
                        break;
                    case 458:
                        label += "7KFYAHA 458K - ";
                        break;
                    case 458:
                        label += "7KFYAHA 458K - ";
                        break;
                    case 460:
                        label += "7KFYAHA 460N - ";
                        break;
                    case 473:
                        label += "7KFYAHA 473Y - ";
                        break;
                    case 473:
                        label += "7KFYAHA 473Y - ";
                        break;
                    case 475:
                        label += "7KFYAHA 475A - ";
                        break;
                    case 475:
                        label += "7KFYAHA 475A - ";
                        break;
                    case 475:
                        label += "7KFYAHA 475A - ";
                        break;
                    case 476:
                        label += "7KFYAHA 476G - ";
                        break;
                    case 477:
                        label += "7KFYAHA 477S - ";
                        break;
                    case 486:
                        label += "7KFYAHA 486F - ";
                        break;
                    case 486:
                        label += "7KFYAHA 486F - ";
                        break;
                    case 486:
                        label += "7KFYAHA 486F - ";
                        break;
                    case 486:
                        label += "7KFYAHA 486F - ";
                        break;
                    case 486:
                        label += "7KFYAHA 486F - ";
                        break;
                    case 487:
                        label += "7KFYAHA 487N - ";
                        break;
                    case 487:
                        label += "7KFYAHA 487N - ";
                        break;
                    case 487:
                        label += "7KFYAHA 487N - ";
                        break;
                    case 489:
                        label += "7KFYAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KFYAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KFYAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KFYAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KFYAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KFYAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KFYAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KFYAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KFYAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KFYAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KFYAHA 489Y - ";
                        break;
                    case 403:
                        label += "7KFYALA 403R - ";
                        break;
                    case 403:
                        label += "7KFYALA 403R - ";
                        break;
                    case 403:
                        label += "7KFYALA 403R - ";
                        break;
                    case 417:
                        label += "7KFYALA 417K - ";
                        break;
                    case 453:
                        label += "7KFYALA 453Y - ";
                        break;
                    case 498:
                        label += "7KFYALA 498Q - ";
                        break;
                    case 498:
                        label += "7KFYALA 498Q - ";
                        break;
                    case 500:
                        label += "7KFYALA 500T - ";
                        break;
                    case 501:
                        label += "7KFYALA 501N - ";
                        break;
                    case 501:
                        label += "7KFYALA 501N - ";
                        break;
                    case 502:
                        label += "7KFYALA 502G - ";
                        break;
                    case 505:
                        label += "7KFYALA 505Y - ";
                        break;
                    case 505:
                        label += "7KFYALA 505Y - ";
                        break;
                    case 505:
                        label += "7KFYALA 505Y - ";
                        break;
                    case 505:
                        label += "7KFYALA 505Y - ";
                        break;}
                switch (labely){
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 96:
                        label += "H 96D\n";
                        break;
                    case 96:
                        label += "H 96D\n";
                        break;
                    case 98:
                        label += "H 98S\n";
                        break;
                    case 56:
                        label += "H 56T\n";
                        break;
                    case 56:
                        label += "H 56T\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 99:
                        label += "H 99G\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 32:
                        label += "H 32N\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 26:
                        label += "H 26G\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 94:
                        label += "L 94Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 67:
                        label += "L 67S\n";
                        break;
                    case 28:
                        label += "L 28G\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 28:
                        label += "L 28G\n";
                        break;
                    case 2:
                        label += "L 2I\n";
                        break;
                    case 2:
                        label += "L 2I\n";
                        break;
                    case 27:
                        label += "L 27Q\n";
                        break;
                    case 27:
                        label += "L 27Q\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});