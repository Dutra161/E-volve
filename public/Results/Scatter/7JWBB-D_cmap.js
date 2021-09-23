
var myChart7JWBB_D = 0;
var ctx = document.getElementById('7JWBB-D').getContext('2d');
if (window.myChart7JWBB_D != 0){
    window.myChart7JWBB_D.destroy();
}
window.myChart7JWBB_D = new Chart(ctx, {
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
            data: [{x: 405, y: 41},
                {x: 405, y: 41},
                {x: 405, y: 41},
                {x: 405, y: 41},
                {x: 405, y: 41},
                {x: 405, y: 41},
                {x: 408, y: 47},
                {x: 408, y: 47},
                {x: 408, y: 47},
                {x: 408, y: 47},
                {x: 408, y: 47},
                {x: 408, y: 47},
                {x: 408, y: 47},
                {x: 378, y: 115},
                {x: 378, y: 115},
                {x: 484, y: 199},
                {x: 484, y: 199},
                {x: 484, y: 199},
                {x: 484, y: 199},
                {x: 484, y: 199},
                {x: 484, y: 199},
                {x: 484, y: 199},
                {x: 484, y: 199},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 408, y: 41},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 415, y: 3},
                {x: 405, y: 41},
                {x: 408, y: 47},
                {x: 408, y: 47},
                {x: 405, y: 97},
                {x: 408, y: 97},
                {x: 378, y: 115},
                {x: 414, y: 117},
                {x: 414, y: 117},
                {x: 409, y: 119},
                {x: 415, y: 119},
                {x: 415, y: 119},
                {x: 496, y: 177},
                {x: 498, y: 177},
                {x: 501, y: 177},
                {x: 501, y: 177},
                {x: 505, y: 178},
                {x: 403, y: 180},
                {x: 484, y: 199},
                {x: 484, y: 199},
                {x: 484, y: 199},
                {x: 484, y: 199},
                {x: 403, y: 203},
                {x: 496, y: 203},
                {x: 493, y: 204},
                {x: 493, y: 204},
                {x: 494, y: 206},
                {x: 489, y: 248},
                {x: 421, y: 257},
                {x: 457, y: 257},
                {x: 473, y: 257},
                {x: 473, y: 257},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 505, y: 180},
                {x: 449, y: 206},
                {x: 489, y: 248},
                {x: 453, y: 250},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 415, y: 3},
                {x: 415, y: 3},
                {x: 505, y: 180},
                {x: 505, y: 180},
                {x: 505, y: 180},
                {x: 486, y: 186},
                {x: 486, y: 186},
                {x: 486, y: 186},
                {x: 486, y: 186},
                {x: 486, y: 186},
                {x: 486, y: 194},
                {x: 486, y: 194},
                {x: 486, y: 196},
                {x: 486, y: 196},
                {x: 486, y: 196},
                {x: 486, y: 196},
                {x: 486, y: 196},
                {x: 486, y: 196},
                {x: 486, y: 196},
                {x: 486, y: 196},
                {x: 449, y: 206},
                {x: 449, y: 206},
                {x: 449, y: 206},
                {x: 455, y: 248},
                {x: 455, y: 248},
                {x: 455, y: 248},
                {x: 456, y: 248},
                {x: 456, y: 248},
                {x: 456, y: 248},
                {x: 456, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 489, y: 248},
                {x: 417, y: 250},
                {x: 417, y: 250},
                {x: 417, y: 250},
                {x: 417, y: 250},
                {x: 417, y: 250},
                {x: 453, y: 250},
                {x: 453, y: 250},
                {x: 453, y: 250},
                {x: 453, y: 250},
                {x: 455, y: 250},
                {x: 455, y: 250},
                {x: 455, y: 250},
                {x: 455, y: 250},
                {x: 455, y: 250},
                {x: 455, y: 250},
                {x: 455, y: 250},
                {x: 455, y: 250},
                {x: 456, y: 251},
                {x: 456, y: 251},
                {x: 486, y: 261},
                {x: 486, y: 261},
                {x: 486, y: 264},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7JWBB-D"],
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
                        label += "7JWBBDB 415T - ";
                        break;
                    case 415:
                        label += "7JWBBDB 415T - ";
                        break;
                    case 415:
                        label += "7JWBBDB 415T - ";
                        break;
                    case 405:
                        label += "7JWBBDB 405D - ";
                        break;
                    case 405:
                        label += "7JWBBDB 405D - ";
                        break;
                    case 405:
                        label += "7JWBBDB 405D - ";
                        break;
                    case 405:
                        label += "7JWBBDB 405D - ";
                        break;
                    case 405:
                        label += "7JWBBDB 405D - ";
                        break;
                    case 405:
                        label += "7JWBBDB 405D - ";
                        break;
                    case 408:
                        label += "7JWBBDB 408R - ";
                        break;
                    case 408:
                        label += "7JWBBDB 408R - ";
                        break;
                    case 408:
                        label += "7JWBBDB 408R - ";
                        break;
                    case 408:
                        label += "7JWBBDB 408R - ";
                        break;
                    case 408:
                        label += "7JWBBDB 408R - ";
                        break;
                    case 408:
                        label += "7JWBBDB 408R - ";
                        break;
                    case 408:
                        label += "7JWBBDB 408R - ";
                        break;
                    case 408:
                        label += "7JWBBDB 408R - ";
                        break;
                    case 405:
                        label += "7JWBBDB 405D - ";
                        break;
                    case 408:
                        label += "7JWBBDB 408R - ";
                        break;
                    case 378:
                        label += "7JWBBDB 378K - ";
                        break;
                    case 378:
                        label += "7JWBBDB 378K - ";
                        break;
                    case 414:
                        label += "7JWBBDB 414Q - ";
                        break;
                    case 414:
                        label += "7JWBBDB 414Q - ";
                        break;
                    case 409:
                        label += "7JWBBDB 409Q - ";
                        break;
                    case 415:
                        label += "7JWBBDB 415T - ";
                        break;
                    case 415:
                        label += "7JWBBDB 415T - ";
                        break;
                    case 496:
                        label += "7JWBBDB 496G - ";
                        break;
                    case 498:
                        label += "7JWBBDB 498Q - ";
                        break;
                    case 501:
                        label += "7JWBBDB 501N - ";
                        break;
                    case 501:
                        label += "7JWBBDB 501N - ";
                        break;
                    case 505:
                        label += "7JWBBDB 505Y - ";
                        break;
                    case 403:
                        label += "7JWBBDB 403R - ";
                        break;
                    case 505:
                        label += "7JWBBDB 505Y - ";
                        break;
                    case 505:
                        label += "7JWBBDB 505Y - ";
                        break;
                    case 505:
                        label += "7JWBBDB 505Y - ";
                        break;
                    case 505:
                        label += "7JWBBDB 505Y - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 484:
                        label += "7JWBBDB 484E - ";
                        break;
                    case 484:
                        label += "7JWBBDB 484E - ";
                        break;
                    case 484:
                        label += "7JWBBDB 484E - ";
                        break;
                    case 484:
                        label += "7JWBBDB 484E - ";
                        break;
                    case 484:
                        label += "7JWBBDB 484E - ";
                        break;
                    case 484:
                        label += "7JWBBDB 484E - ";
                        break;
                    case 484:
                        label += "7JWBBDB 484E - ";
                        break;
                    case 484:
                        label += "7JWBBDB 484E - ";
                        break;
                    case 403:
                        label += "7JWBBDB 403R - ";
                        break;
                    case 496:
                        label += "7JWBBDB 496G - ";
                        break;
                    case 493:
                        label += "7JWBBDB 493Q - ";
                        break;
                    case 493:
                        label += "7JWBBDB 493Q - ";
                        break;
                    case 449:
                        label += "7JWBBDB 449Y - ";
                        break;
                    case 449:
                        label += "7JWBBDB 449Y - ";
                        break;
                    case 449:
                        label += "7JWBBDB 449Y - ";
                        break;
                    case 449:
                        label += "7JWBBDB 449Y - ";
                        break;
                    case 494:
                        label += "7JWBBDB 494S - ";
                        break;
                    case 455:
                        label += "7JWBBDB 455L - ";
                        break;
                    case 455:
                        label += "7JWBBDB 455L - ";
                        break;
                    case 455:
                        label += "7JWBBDB 455L - ";
                        break;
                    case 456:
                        label += "7JWBBDB 456F - ";
                        break;
                    case 456:
                        label += "7JWBBDB 456F - ";
                        break;
                    case 456:
                        label += "7JWBBDB 456F - ";
                        break;
                    case 456:
                        label += "7JWBBDB 456F - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 489:
                        label += "7JWBBDB 489Y - ";
                        break;
                    case 417:
                        label += "7JWBBDB 417K - ";
                        break;
                    case 417:
                        label += "7JWBBDB 417K - ";
                        break;
                    case 417:
                        label += "7JWBBDB 417K - ";
                        break;
                    case 417:
                        label += "7JWBBDB 417K - ";
                        break;
                    case 417:
                        label += "7JWBBDB 417K - ";
                        break;
                    case 453:
                        label += "7JWBBDB 453Y - ";
                        break;
                    case 453:
                        label += "7JWBBDB 453Y - ";
                        break;
                    case 453:
                        label += "7JWBBDB 453Y - ";
                        break;
                    case 453:
                        label += "7JWBBDB 453Y - ";
                        break;
                    case 453:
                        label += "7JWBBDB 453Y - ";
                        break;
                    case 455:
                        label += "7JWBBDB 455L - ";
                        break;
                    case 455:
                        label += "7JWBBDB 455L - ";
                        break;
                    case 455:
                        label += "7JWBBDB 455L - ";
                        break;
                    case 455:
                        label += "7JWBBDB 455L - ";
                        break;
                    case 455:
                        label += "7JWBBDB 455L - ";
                        break;
                    case 455:
                        label += "7JWBBDB 455L - ";
                        break;
                    case 455:
                        label += "7JWBBDB 455L - ";
                        break;
                    case 455:
                        label += "7JWBBDB 455L - ";
                        break;
                    case 456:
                        label += "7JWBBDB 456F - ";
                        break;
                    case 456:
                        label += "7JWBBDB 456F - ";
                        break;
                    case 421:
                        label += "7JWBBDB 421Y - ";
                        break;
                    case 457:
                        label += "7JWBBDB 457R - ";
                        break;
                    case 473:
                        label += "7JWBBDB 473Y - ";
                        break;
                    case 473:
                        label += "7JWBBDB 473Y - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;
                    case 486:
                        label += "7JWBBDB 486F - ";
                        break;}
                switch (labely){
                    case 3:
                        label += "D 3Q\n";
                        break;
                    case 3:
                        label += "D 3Q\n";
                        break;
                    case 3:
                        label += "D 3Q\n";
                        break;
                    case 41:
                        label += "D 41R\n";
                        break;
                    case 41:
                        label += "D 41R\n";
                        break;
                    case 41:
                        label += "D 41R\n";
                        break;
                    case 41:
                        label += "D 41R\n";
                        break;
                    case 41:
                        label += "D 41R\n";
                        break;
                    case 41:
                        label += "D 41R\n";
                        break;
                    case 41:
                        label += "D 41R\n";
                        break;
                    case 47:
                        label += "D 47E\n";
                        break;
                    case 47:
                        label += "D 47E\n";
                        break;
                    case 47:
                        label += "D 47E\n";
                        break;
                    case 47:
                        label += "D 47E\n";
                        break;
                    case 47:
                        label += "D 47E\n";
                        break;
                    case 47:
                        label += "D 47E\n";
                        break;
                    case 47:
                        label += "D 47E\n";
                        break;
                    case 97:
                        label += "D 97Y\n";
                        break;
                    case 97:
                        label += "D 97Y\n";
                        break;
                    case 115:
                        label += "D 115D\n";
                        break;
                    case 115:
                        label += "D 115D\n";
                        break;
                    case 117:
                        label += "D 117W\n";
                        break;
                    case 117:
                        label += "D 117W\n";
                        break;
                    case 119:
                        label += "D 119Q\n";
                        break;
                    case 119:
                        label += "D 119Q\n";
                        break;
                    case 119:
                        label += "D 119Q\n";
                        break;
                    case 177:
                        label += "D 177Y\n";
                        break;
                    case 177:
                        label += "D 177Y\n";
                        break;
                    case 177:
                        label += "D 177Y\n";
                        break;
                    case 177:
                        label += "D 177Y\n";
                        break;
                    case 178:
                        label += "D 178S\n";
                        break;
                    case 180:
                        label += "D 180Y\n";
                        break;
                    case 180:
                        label += "D 180Y\n";
                        break;
                    case 180:
                        label += "D 180Y\n";
                        break;
                    case 180:
                        label += "D 180Y\n";
                        break;
                    case 180:
                        label += "D 180Y\n";
                        break;
                    case 186:
                        label += "D 186V\n";
                        break;
                    case 186:
                        label += "D 186V\n";
                        break;
                    case 186:
                        label += "D 186V\n";
                        break;
                    case 186:
                        label += "D 186V\n";
                        break;
                    case 186:
                        label += "D 186V\n";
                        break;
                    case 194:
                        label += "D 194E\n";
                        break;
                    case 194:
                        label += "D 194E\n";
                        break;
                    case 196:
                        label += "D 196L\n";
                        break;
                    case 196:
                        label += "D 196L\n";
                        break;
                    case 196:
                        label += "D 196L\n";
                        break;
                    case 196:
                        label += "D 196L\n";
                        break;
                    case 196:
                        label += "D 196L\n";
                        break;
                    case 196:
                        label += "D 196L\n";
                        break;
                    case 196:
                        label += "D 196L\n";
                        break;
                    case 196:
                        label += "D 196L\n";
                        break;
                    case 199:
                        label += "D 199R\n";
                        break;
                    case 199:
                        label += "D 199R\n";
                        break;
                    case 199:
                        label += "D 199R\n";
                        break;
                    case 199:
                        label += "D 199R\n";
                        break;
                    case 199:
                        label += "D 199R\n";
                        break;
                    case 199:
                        label += "D 199R\n";
                        break;
                    case 199:
                        label += "D 199R\n";
                        break;
                    case 199:
                        label += "D 199R\n";
                        break;
                    case 203:
                        label += "D 203S\n";
                        break;
                    case 203:
                        label += "D 203S\n";
                        break;
                    case 204:
                        label += "D 204S\n";
                        break;
                    case 204:
                        label += "D 204S\n";
                        break;
                    case 206:
                        label += "D 206Y\n";
                        break;
                    case 206:
                        label += "D 206Y\n";
                        break;
                    case 206:
                        label += "D 206Y\n";
                        break;
                    case 206:
                        label += "D 206Y\n";
                        break;
                    case 206:
                        label += "D 206Y\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 248:
                        label += "D 248W\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 250:
                        label += "D 250F\n";
                        break;
                    case 251:
                        label += "D 251A\n";
                        break;
                    case 251:
                        label += "D 251A\n";
                        break;
                    case 257:
                        label += "D 257G\n";
                        break;
                    case 257:
                        label += "D 257G\n";
                        break;
                    case 257:
                        label += "D 257G\n";
                        break;
                    case 257:
                        label += "D 257G\n";
                        break;
                    case 261:
                        label += "D 261L\n";
                        break;
                    case 261:
                        label += "D 261L\n";
                        break;
                    case 264:
                        label += "D 264W\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});