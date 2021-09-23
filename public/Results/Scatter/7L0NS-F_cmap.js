
var myChart7L0NS_F = 0;
var ctx = document.getElementById('7L0NS-F').getContext('2d');
if (window.myChart7L0NS_F != 0){
    window.myChart7L0NS_F.destroy();
}
window.myChart7L0NS_F = new Chart(ctx, {
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
            data: [{x: 417, y: 30},
                {x: 417, y: 30},
                {x: 484, y: 31},
                {x: 439, y: 329},
                {x: 439, y: 329},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 475, y: 19},
                {x: 487, y: 24},
                {x: 489, y: 28},
                {x: 417, y: 30},
                {x: 493, y: 31},
                {x: 453, y: 34},
                {x: 493, y: 34},
                {x: 494, y: 34},
                {x: 505, y: 37},
                {x: 449, y: 38},
                {x: 449, y: 38},
                {x: 498, y: 38},
                {x: 500, y: 41},
                {x: 500, y: 41},
                {x: 501, y: 41},
                {x: 501, y: 41},
                {x: 449, y: 42},
                {x: 487, y: 83},
                {x: 487, y: 83},
                {x: 489, y: 83},
                {x: 439, y: 325},
                {x: 439, y: 329},
                {x: 496, y: 353},
                {x: 502, y: 353},
                {x: 502, y: 354},
                {x: 500, y: 355},
                {x: 500, y: 357},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 453, y: 34},
                {x: 486, y: 83},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 475, y: 24},
                {x: 456, y: 27},
                {x: 456, y: 27},
                {x: 456, y: 27},
                {x: 473, y: 27},
                {x: 473, y: 27},
                {x: 475, y: 27},
                {x: 489, y: 27},
                {x: 489, y: 27},
                {x: 455, y: 31},
                {x: 455, y: 31},
                {x: 456, y: 31},
                {x: 456, y: 31},
                {x: 456, y: 31},
                {x: 489, y: 31},
                {x: 489, y: 31},
                {x: 489, y: 31},
                {x: 489, y: 31},
                {x: 489, y: 31},
                {x: 489, y: 31},
                {x: 489, y: 31},
                {x: 505, y: 37},
                {x: 498, y: 41},
                {x: 498, y: 41},
                {x: 498, y: 41},
                {x: 486, y: 79},
                {x: 486, y: 82},
                {x: 486, y: 82},
                {x: 486, y: 82},
                {x: 486, y: 82},
                {x: 486, y: 83},
                {x: 486, y: 83},
                {x: 486, y: 83},
                {x: 486, y: 83},
                {x: 505, y: 353},
                {x: 505, y: 353},
                {x: 505, y: 353},
                {x: 505, y: 353},
                {x: 505, y: 353},
                {x: 505, y: 353},
                {x: 505, y: 353},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7L0NS-F"],
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
                    case 475:
                        label += "7L0NSFS 475A - ";
                        break;
                    case 475:
                        label += "7L0NSFS 475A - ";
                        break;
                    case 487:
                        label += "7L0NSFS 487N - ";
                        break;
                    case 456:
                        label += "7L0NSFS 456F - ";
                        break;
                    case 456:
                        label += "7L0NSFS 456F - ";
                        break;
                    case 456:
                        label += "7L0NSFS 456F - ";
                        break;
                    case 473:
                        label += "7L0NSFS 473Y - ";
                        break;
                    case 473:
                        label += "7L0NSFS 473Y - ";
                        break;
                    case 475:
                        label += "7L0NSFS 475A - ";
                        break;
                    case 489:
                        label += "7L0NSFS 489Y - ";
                        break;
                    case 489:
                        label += "7L0NSFS 489Y - ";
                        break;
                    case 489:
                        label += "7L0NSFS 489Y - ";
                        break;
                    case 417:
                        label += "7L0NSFS 417K - ";
                        break;
                    case 417:
                        label += "7L0NSFS 417K - ";
                        break;
                    case 455:
                        label += "7L0NSFS 455L - ";
                        break;
                    case 455:
                        label += "7L0NSFS 455L - ";
                        break;
                    case 456:
                        label += "7L0NSFS 456F - ";
                        break;
                    case 456:
                        label += "7L0NSFS 456F - ";
                        break;
                    case 456:
                        label += "7L0NSFS 456F - ";
                        break;
                    case 484:
                        label += "7L0NSFS 484E - ";
                        break;
                    case 489:
                        label += "7L0NSFS 489Y - ";
                        break;
                    case 489:
                        label += "7L0NSFS 489Y - ";
                        break;
                    case 489:
                        label += "7L0NSFS 489Y - ";
                        break;
                    case 489:
                        label += "7L0NSFS 489Y - ";
                        break;
                    case 489:
                        label += "7L0NSFS 489Y - ";
                        break;
                    case 489:
                        label += "7L0NSFS 489Y - ";
                        break;
                    case 489:
                        label += "7L0NSFS 489Y - ";
                        break;
                    case 493:
                        label += "7L0NSFS 493Q - ";
                        break;
                    case 453:
                        label += "7L0NSFS 453Y - ";
                        break;
                    case 453:
                        label += "7L0NSFS 453Y - ";
                        break;
                    case 493:
                        label += "7L0NSFS 493Q - ";
                        break;
                    case 494:
                        label += "7L0NSFS 494S - ";
                        break;
                    case 505:
                        label += "7L0NSFS 505Y - ";
                        break;
                    case 505:
                        label += "7L0NSFS 505Y - ";
                        break;
                    case 449:
                        label += "7L0NSFS 449Y - ";
                        break;
                    case 449:
                        label += "7L0NSFS 449Y - ";
                        break;
                    case 498:
                        label += "7L0NSFS 498Q - ";
                        break;
                    case 498:
                        label += "7L0NSFS 498Q - ";
                        break;
                    case 498:
                        label += "7L0NSFS 498Q - ";
                        break;
                    case 498:
                        label += "7L0NSFS 498Q - ";
                        break;
                    case 500:
                        label += "7L0NSFS 500T - ";
                        break;
                    case 500:
                        label += "7L0NSFS 500T - ";
                        break;
                    case 501:
                        label += "7L0NSFS 501N - ";
                        break;
                    case 501:
                        label += "7L0NSFS 501N - ";
                        break;
                    case 449:
                        label += "7L0NSFS 449Y - ";
                        break;
                    case 486:
                        label += "7L0NSFS 486F - ";
                        break;
                    case 486:
                        label += "7L0NSFS 486F - ";
                        break;
                    case 486:
                        label += "7L0NSFS 486F - ";
                        break;
                    case 486:
                        label += "7L0NSFS 486F - ";
                        break;
                    case 486:
                        label += "7L0NSFS 486F - ";
                        break;
                    case 486:
                        label += "7L0NSFS 486F - ";
                        break;
                    case 486:
                        label += "7L0NSFS 486F - ";
                        break;
                    case 486:
                        label += "7L0NSFS 486F - ";
                        break;
                    case 486:
                        label += "7L0NSFS 486F - ";
                        break;
                    case 486:
                        label += "7L0NSFS 486F - ";
                        break;
                    case 487:
                        label += "7L0NSFS 487N - ";
                        break;
                    case 487:
                        label += "7L0NSFS 487N - ";
                        break;
                    case 489:
                        label += "7L0NSFS 489Y - ";
                        break;
                    case 439:
                        label += "7L0NSFS 439K - ";
                        break;
                    case 439:
                        label += "7L0NSFS 439K - ";
                        break;
                    case 439:
                        label += "7L0NSFS 439K - ";
                        break;
                    case 496:
                        label += "7L0NSFS 496G - ";
                        break;
                    case 502:
                        label += "7L0NSFS 502G - ";
                        break;
                    case 505:
                        label += "7L0NSFS 505Y - ";
                        break;
                    case 505:
                        label += "7L0NSFS 505Y - ";
                        break;
                    case 505:
                        label += "7L0NSFS 505Y - ";
                        break;
                    case 505:
                        label += "7L0NSFS 505Y - ";
                        break;
                    case 505:
                        label += "7L0NSFS 505Y - ";
                        break;
                    case 505:
                        label += "7L0NSFS 505Y - ";
                        break;
                    case 505:
                        label += "7L0NSFS 505Y - ";
                        break;
                    case 502:
                        label += "7L0NSFS 502G - ";
                        break;
                    case 500:
                        label += "7L0NSFS 500T - ";
                        break;
                    case 500:
                        label += "7L0NSFS 500T - ";
                        break;}
                switch (labely){
                    case 19:
                        label += "F 19S\n";
                        break;
                    case 24:
                        label += "F 24Q\n";
                        break;
                    case 24:
                        label += "F 24Q\n";
                        break;
                    case 27:
                        label += "F 27T\n";
                        break;
                    case 27:
                        label += "F 27T\n";
                        break;
                    case 27:
                        label += "F 27T\n";
                        break;
                    case 27:
                        label += "F 27T\n";
                        break;
                    case 27:
                        label += "F 27T\n";
                        break;
                    case 27:
                        label += "F 27T\n";
                        break;
                    case 27:
                        label += "F 27T\n";
                        break;
                    case 27:
                        label += "F 27T\n";
                        break;
                    case 28:
                        label += "F 28F\n";
                        break;
                    case 30:
                        label += "F 30D\n";
                        break;
                    case 30:
                        label += "F 30D\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 31:
                        label += "F 31K\n";
                        break;
                    case 34:
                        label += "F 34H\n";
                        break;
                    case 34:
                        label += "F 34H\n";
                        break;
                    case 34:
                        label += "F 34H\n";
                        break;
                    case 34:
                        label += "F 34H\n";
                        break;
                    case 37:
                        label += "F 37E\n";
                        break;
                    case 37:
                        label += "F 37E\n";
                        break;
                    case 38:
                        label += "F 38D\n";
                        break;
                    case 38:
                        label += "F 38D\n";
                        break;
                    case 38:
                        label += "F 38D\n";
                        break;
                    case 41:
                        label += "F 41Y\n";
                        break;
                    case 41:
                        label += "F 41Y\n";
                        break;
                    case 41:
                        label += "F 41Y\n";
                        break;
                    case 41:
                        label += "F 41Y\n";
                        break;
                    case 41:
                        label += "F 41Y\n";
                        break;
                    case 41:
                        label += "F 41Y\n";
                        break;
                    case 41:
                        label += "F 41Y\n";
                        break;
                    case 42:
                        label += "F 42Q\n";
                        break;
                    case 79:
                        label += "F 79L\n";
                        break;
                    case 82:
                        label += "F 82M\n";
                        break;
                    case 82:
                        label += "F 82M\n";
                        break;
                    case 82:
                        label += "F 82M\n";
                        break;
                    case 82:
                        label += "F 82M\n";
                        break;
                    case 83:
                        label += "F 83Y\n";
                        break;
                    case 83:
                        label += "F 83Y\n";
                        break;
                    case 83:
                        label += "F 83Y\n";
                        break;
                    case 83:
                        label += "F 83Y\n";
                        break;
                    case 83:
                        label += "F 83Y\n";
                        break;
                    case 83:
                        label += "F 83Y\n";
                        break;
                    case 83:
                        label += "F 83Y\n";
                        break;
                    case 83:
                        label += "F 83Y\n";
                        break;
                    case 325:
                        label += "F 325Q\n";
                        break;
                    case 329:
                        label += "F 329E\n";
                        break;
                    case 329:
                        label += "F 329E\n";
                        break;
                    case 353:
                        label += "F 353K\n";
                        break;
                    case 353:
                        label += "F 353K\n";
                        break;
                    case 353:
                        label += "F 353K\n";
                        break;
                    case 353:
                        label += "F 353K\n";
                        break;
                    case 353:
                        label += "F 353K\n";
                        break;
                    case 353:
                        label += "F 353K\n";
                        break;
                    case 353:
                        label += "F 353K\n";
                        break;
                    case 353:
                        label += "F 353K\n";
                        break;
                    case 353:
                        label += "F 353K\n";
                        break;
                    case 354:
                        label += "F 354G\n";
                        break;
                    case 355:
                        label += "F 355D\n";
                        break;
                    case 357:
                        label += "F 357R\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});