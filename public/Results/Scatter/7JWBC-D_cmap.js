
var myChart7JWBC_D = 0;
var ctx = document.getElementById('7JWBC-D').getContext('2d');
if (window.myChart7JWBC_D != 0){
    window.myChart7JWBC_D.destroy();
}
window.myChart7JWBC_D = new Chart(ctx, {
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
            data: [{x: 496, y: 324},
                {x: 498, y: 324},
                {x: 505, y: 324},
                {x: 505, y: 325},
                {x: 403, y: 327},
                {x: 496, y: 327},
                {x: 449, y: 349},
                {x: 496, y: 350},
                {x: 493, y: 351},
                {x: 494, y: 351},
                {x: 493, y: 355},
                {x: 417, y: 397},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 505, y: 324},
                {x: 453, y: 327},
                {x: 505, y: 327},
                {x: 453, y: 397},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 505, y: 324},
                {x: 505, y: 324},
                {x: 505, y: 324},
                {x: 505, y: 324},
                {x: 505, y: 324},
                {x: 505, y: 324},
                {x: 505, y: 324},
                {x: 505, y: 324},
                {x: 453, y: 327},
                {x: 505, y: 327},
                {x: 493, y: 329},
                {x: 493, y: 348},
                {x: 493, y: 348},
                {x: 452, y: 353},
                {x: 417, y: 397},
                {x: 417, y: 397},
                {x: 453, y: 397},
                {x: 453, y: 397},
                {x: 453, y: 397},
                {x: 453, y: 397},
                {x: 453, y: 397},
                {x: 453, y: 397},
                {x: 453, y: 397},
                {x: 453, y: 397},
                {x: 453, y: 397},
                {x: 493, y: 397},
                {x: 493, y: 397},
                {x: 493, y: 397},
                {x: 493, y: 397},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7JWBC-D"],
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
                        label += "7JWBCDC 496G - ";
                        break;
                    case 498:
                        label += "7JWBCDC 498Q - ";
                        break;
                    case 505:
                        label += "7JWBCDC 505Y - ";
                        break;
                    case 505:
                        label += "7JWBCDC 505Y - ";
                        break;
                    case 505:
                        label += "7JWBCDC 505Y - ";
                        break;
                    case 505:
                        label += "7JWBCDC 505Y - ";
                        break;
                    case 505:
                        label += "7JWBCDC 505Y - ";
                        break;
                    case 505:
                        label += "7JWBCDC 505Y - ";
                        break;
                    case 505:
                        label += "7JWBCDC 505Y - ";
                        break;
                    case 505:
                        label += "7JWBCDC 505Y - ";
                        break;
                    case 505:
                        label += "7JWBCDC 505Y - ";
                        break;
                    case 505:
                        label += "7JWBCDC 505Y - ";
                        break;
                    case 505:
                        label += "7JWBCDC 505Y - ";
                        break;
                    case 403:
                        label += "7JWBCDC 403R - ";
                        break;
                    case 453:
                        label += "7JWBCDC 453Y - ";
                        break;
                    case 453:
                        label += "7JWBCDC 453Y - ";
                        break;
                    case 496:
                        label += "7JWBCDC 496G - ";
                        break;
                    case 505:
                        label += "7JWBCDC 505Y - ";
                        break;
                    case 505:
                        label += "7JWBCDC 505Y - ";
                        break;
                    case 493:
                        label += "7JWBCDC 493Q - ";
                        break;
                    case 493:
                        label += "7JWBCDC 493Q - ";
                        break;
                    case 493:
                        label += "7JWBCDC 493Q - ";
                        break;
                    case 449:
                        label += "7JWBCDC 449Y - ";
                        break;
                    case 496:
                        label += "7JWBCDC 496G - ";
                        break;
                    case 493:
                        label += "7JWBCDC 493Q - ";
                        break;
                    case 494:
                        label += "7JWBCDC 494S - ";
                        break;
                    case 452:
                        label += "7JWBCDC 452L - ";
                        break;
                    case 493:
                        label += "7JWBCDC 493Q - ";
                        break;
                    case 417:
                        label += "7JWBCDC 417K - ";
                        break;
                    case 417:
                        label += "7JWBCDC 417K - ";
                        break;
                    case 417:
                        label += "7JWBCDC 417K - ";
                        break;
                    case 453:
                        label += "7JWBCDC 453Y - ";
                        break;
                    case 453:
                        label += "7JWBCDC 453Y - ";
                        break;
                    case 453:
                        label += "7JWBCDC 453Y - ";
                        break;
                    case 453:
                        label += "7JWBCDC 453Y - ";
                        break;
                    case 453:
                        label += "7JWBCDC 453Y - ";
                        break;
                    case 453:
                        label += "7JWBCDC 453Y - ";
                        break;
                    case 453:
                        label += "7JWBCDC 453Y - ";
                        break;
                    case 453:
                        label += "7JWBCDC 453Y - ";
                        break;
                    case 453:
                        label += "7JWBCDC 453Y - ";
                        break;
                    case 453:
                        label += "7JWBCDC 453Y - ";
                        break;
                    case 493:
                        label += "7JWBCDC 493Q - ";
                        break;
                    case 493:
                        label += "7JWBCDC 493Q - ";
                        break;
                    case 493:
                        label += "7JWBCDC 493Q - ";
                        break;
                    case 493:
                        label += "7JWBCDC 493Q - ";
                        break;}
                switch (labely){
                    case 324:
                        label += "D 324Y\n";
                        break;
                    case 324:
                        label += "D 324Y\n";
                        break;
                    case 324:
                        label += "D 324Y\n";
                        break;
                    case 324:
                        label += "D 324Y\n";
                        break;
                    case 324:
                        label += "D 324Y\n";
                        break;
                    case 324:
                        label += "D 324Y\n";
                        break;
                    case 324:
                        label += "D 324Y\n";
                        break;
                    case 324:
                        label += "D 324Y\n";
                        break;
                    case 324:
                        label += "D 324Y\n";
                        break;
                    case 324:
                        label += "D 324Y\n";
                        break;
                    case 324:
                        label += "D 324Y\n";
                        break;
                    case 324:
                        label += "D 324Y\n";
                        break;
                    case 325:
                        label += "D 325S\n";
                        break;
                    case 327:
                        label += "D 327Y\n";
                        break;
                    case 327:
                        label += "D 327Y\n";
                        break;
                    case 327:
                        label += "D 327Y\n";
                        break;
                    case 327:
                        label += "D 327Y\n";
                        break;
                    case 327:
                        label += "D 327Y\n";
                        break;
                    case 327:
                        label += "D 327Y\n";
                        break;
                    case 329:
                        label += "D 329Y\n";
                        break;
                    case 348:
                        label += "D 348Y\n";
                        break;
                    case 348:
                        label += "D 348Y\n";
                        break;
                    case 349:
                        label += "D 349P\n";
                        break;
                    case 350:
                        label += "D 350S\n";
                        break;
                    case 351:
                        label += "D 351S\n";
                        break;
                    case 351:
                        label += "D 351S\n";
                        break;
                    case 353:
                        label += "D 353Y\n";
                        break;
                    case 355:
                        label += "D 355Y\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;
                    case 397:
                        label += "D 397F\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});