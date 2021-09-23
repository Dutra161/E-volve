
var myChart7A5S = 0;
var ctx = document.getElementById('7A5S').getContext('2d');
if (window.myChart7A5S != 0){
    window.myChart7A5S.destroy();
}
window.myChart7A5S = new Chart(ctx, {
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
            data: [{x: 378, y: 55},
                {x: 408, y: 55},
                {x: 408, y: 55},
                {x: 408, y: 55},
                {x: 408, y: 55},
                {x: 408, y: 55},
                {x: 408, y: 55},
                {x: 408, y: 55},
                {x: 378, y: 57},
                {x: 386, y: 107},
                {x: 386, y: 61},
                {x: 386, y: 61},
                {x: 378, y: 55},
                {x: 378, y: 57},
                {x: 386, y: 107},
                {x: 386, y: 107},
                {x: 408, y: 55},
                {x: 408, y: 55},
                {x: 408, y: 55},
                {x: 408, y: 55},
                {x: 408, y: 55},
                {x: 408, y: 55},
                {x: 408, y: 55},
                {x: 386, y: 61},
                {x: 386, y: 61},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 377, y: 31},
                {x: 378, y: 31},
                {x: 378, y: 33},
                {x: 377, y: 52},
                {x: 377, y: 52},
                {x: 385, y: 100},
                {x: 381, y: 102},
                {x: 383, y: 104},
                {x: 487, y: 119},
                {x: 493, y: 16},
                {x: 505, y: 17},
                {x: 43, y: 16},
                {x: 45, y: 16},
                {x: 429, y: 31},
                {x: 429, y: 31},
                {x: 430, y: 33},
                {x: 381, y: 38},
                {x: 44, y: 83},
                {x: 493, y: 16},
                {x: 505, y: 17},
                {x: 487, y: 119},
                {x: 377, y: 31},
                {x: 377, y: 52},
                {x: 377, y: 52},
                {x: 378, y: 31},
                {x: 378, y: 33},
                {x: 381, y: 102},
                {x: 383, y: 104},
                {x: 385, y: 32},
                {x: 385, y: 100},
                {x: 45, y: 16},
                {x: 429, y: 31},
                {x: 429, y: 31},
                {x: 430, y: 33},
                {x: 381, y: 38},
                {x: 44, y: 83},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 150},
                {x: 486, y: 150},
                {x: 369, y: 27},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 369, y: 27},
                {x: 370, y: 30},
                {x: 384, y: 31},
                {x: 378, y: 52},
                {x: 380, y: 102},
                {x: 486, y: 121},
                {x: 486, y: 121},
                {x: 486, y: 150},
                {x: 486, y: 150},
                {x: 486, y: 150},
                {x: 486, y: 150},
                {x: 486, y: 150},
                {x: 486, y: 150},
                {x: 486, y: 179},
                {x: 486, y: 179},
                {x: 486, y: 179},
                {x: 486, y: 179},
                {x: 486, y: 179},
                {x: 486, y: 179},
                {x: 486, y: 179},
                {x: 43, y: 15},
                {x: 43, y: 15},
                {x: 428, y: 31},
                {x: 430, y: 31},
                {x: 430, y: 31},
                {x: 430, y: 34},
                {x: 430, y: 34},
                {x: 390, y: 56},
                {x: 390, y: 56},
                {x: 42, y: 67},
                {x: 42, y: 67},
                {x: 42, y: 85},
                {x: 489, y: 14},
                {x: 505, y: 19},
                {x: 486, y: 121},
                {x: 486, y: 121},
                {x: 486, y: 150},
                {x: 486, y: 150},
                {x: 486, y: 150},
                {x: 486, y: 150},
                {x: 486, y: 150},
                {x: 486, y: 150},
                {x: 486, y: 179},
                {x: 486, y: 179},
                {x: 486, y: 179},
                {x: 486, y: 179},
                {x: 486, y: 179},
                {x: 369, y: 27},
                {x: 369, y: 27},
                {x: 370, y: 30},
                {x: 376, y: 52},
                {x: 377, y: 30},
                {x: 378, y: 33},
                {x: 378, y: 52},
                {x: 380, y: 102},
                {x: 380, y: 102},
                {x: 384, y: 31},
                {x: 43, y: 15},
                {x: 43, y: 15},
                {x: 428, y: 31},
                {x: 430, y: 31},
                {x: 430, y: 31},
                {x: 430, y: 34},
                {x: 430, y: 34},
                {x: 390, y: 56},
                {x: 390, y: 56},
                {x: 42, y: 67},
                {x: 42, y: 67},
                {x: 42, y: 85},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7A5S Superpose"],
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
                    case 369:
                        label += "7A5SAHA 369Y - ";
                        break;
                    case 370:
                        label += "7A5SAHA 370N - ";
                        break;
                    case 377:
                        label += "7A5SAHA 377F - ";
                        break;
                    case 378:
                        label += "7A5SAHA 378K - ";
                        break;
                    case 384:
                        label += "7A5SAHA 384P - ";
                        break;
                    case 378:
                        label += "7A5SAHA 378K - ";
                        break;
                    case 377:
                        label += "7A5SAHA 377F - ";
                        break;
                    case 377:
                        label += "7A5SAHA 377F - ";
                        break;
                    case 378:
                        label += "7A5SAHA 378K - ";
                        break;
                    case 378:
                        label += "7A5SAHA 378K - ";
                        break;
                    case 408:
                        label += "7A5SAHA 408R - ";
                        break;
                    case 408:
                        label += "7A5SAHA 408R - ";
                        break;
                    case 408:
                        label += "7A5SAHA 408R - ";
                        break;
                    case 408:
                        label += "7A5SAHA 408R - ";
                        break;
                    case 408:
                        label += "7A5SAHA 408R - ";
                        break;
                    case 408:
                        label += "7A5SAHA 408R - ";
                        break;
                    case 408:
                        label += "7A5SAHA 408R - ";
                        break;
                    case 378:
                        label += "7A5SAHA 378K - ";
                        break;
                    case 385:
                        label += "7A5SAHA 385T - ";
                        break;
                    case 380:
                        label += "7A5SAHA 380Y - ";
                        break;
                    case 381:
                        label += "7A5SAHA 381G - ";
                        break;
                    case 383:
                        label += "7A5SAHA 383S - ";
                        break;
                    case 386:
                        label += "7A5SAHA 386K - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 486:
                        label += "7A5SAIA 486F - ";
                        break;
                    case 487:
                        label += "7A5SAIA 487N - ";
                        break;
                    case 493:
                        label += "7A5SAIA 493Q - ";
                        break;
                    case 505:
                        label += "7A5SAIA 505Y - ";
                        break;
                    case 43:
                        label += "7A5SALA 43F - ";
                        break;
                    case 43:
                        label += "7A5SALA 43F - ";
                        break;
                    case 43:
                        label += "7A5SALA 43F - ";
                        break;
                    case 45:
                        label += "7A5SALA 45S - ";
                        break;
                    case 428:
                        label += "7A5SALA 428D - ";
                        break;
                    case 429:
                        label += "7A5SALA 429F - ";
                        break;
                    case 429:
                        label += "7A5SALA 429F - ";
                        break;
                    case 430:
                        label += "7A5SALA 430T - ";
                        break;
                    case 430:
                        label += "7A5SALA 430T - ";
                        break;
                    case 430:
                        label += "7A5SALA 430T - ";
                        break;
                    case 430:
                        label += "7A5SALA 430T - ";
                        break;
                    case 430:
                        label += "7A5SALA 430T - ";
                        break;
                    case 381:
                        label += "7A5SALA 381G - ";
                        break;
                    case 390:
                        label += "7A5SALA 390L - ";
                        break;
                    case 390:
                        label += "7A5SALA 390L - ";
                        break;
                    case 386:
                        label += "7A5SALA 386K - ";
                        break;
                    case 386:
                        label += "7A5SALA 386K - ";
                        break;
                    case 42:
                        label += "7A5SALA 42V - ";
                        break;
                    case 42:
                        label += "7A5SALA 42V - ";
                        break;
                    case 44:
                        label += "7A5SALA 44R - ";
                        break;
                    case 42:
                        label += "7A5SALA 42V - ";
                        break;
                    case 489:
                        label += "7A5SBHB 489Y - ";
                        break;
                    case 493:
                        label += "7A5SBHB 493Q - ";
                        break;
                    case 505:
                        label += "7A5SBHB 505Y - ";
                        break;
                    case 505:
                        label += "7A5SBHB 505Y - ";
                        break;
                    case 487:
                        label += "7A5SBHB 487N - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 486:
                        label += "7A5SBHB 486F - ";
                        break;
                    case 369:
                        label += "7A5SBIB 369Y - ";
                        break;
                    case 369:
                        label += "7A5SBIB 369Y - ";
                        break;
                    case 369:
                        label += "7A5SBIB 369Y - ";
                        break;
                    case 370:
                        label += "7A5SBIB 370N - ";
                        break;
                    case 376:
                        label += "7A5SBIB 376T - ";
                        break;
                    case 377:
                        label += "7A5SBIB 377F - ";
                        break;
                    case 377:
                        label += "7A5SBIB 377F - ";
                        break;
                    case 377:
                        label += "7A5SBIB 377F - ";
                        break;
                    case 377:
                        label += "7A5SBIB 377F - ";
                        break;
                    case 378:
                        label += "7A5SBIB 378K - ";
                        break;
                    case 378:
                        label += "7A5SBIB 378K - ";
                        break;
                    case 378:
                        label += "7A5SBIB 378K - ";
                        break;
                    case 378:
                        label += "7A5SBIB 378K - ";
                        break;
                    case 378:
                        label += "7A5SBIB 378K - ";
                        break;
                    case 378:
                        label += "7A5SBIB 378K - ";
                        break;
                    case 380:
                        label += "7A5SBIB 380Y - ";
                        break;
                    case 380:
                        label += "7A5SBIB 380Y - ";
                        break;
                    case 381:
                        label += "7A5SBIB 381G - ";
                        break;
                    case 383:
                        label += "7A5SBIB 383S - ";
                        break;
                    case 384:
                        label += "7A5SBIB 384P - ";
                        break;
                    case 385:
                        label += "7A5SBIB 385T - ";
                        break;
                    case 385:
                        label += "7A5SBIB 385T - ";
                        break;
                    case 386:
                        label += "7A5SBIB 386K - ";
                        break;
                    case 386:
                        label += "7A5SBIB 386K - ";
                        break;
                    case 408:
                        label += "7A5SBIB 408R - ";
                        break;
                    case 408:
                        label += "7A5SBIB 408R - ";
                        break;
                    case 408:
                        label += "7A5SBIB 408R - ";
                        break;
                    case 408:
                        label += "7A5SBIB 408R - ";
                        break;
                    case 408:
                        label += "7A5SBIB 408R - ";
                        break;
                    case 408:
                        label += "7A5SBIB 408R - ";
                        break;
                    case 408:
                        label += "7A5SBIB 408R - ";
                        break;
                    case 43:
                        label += "7A5SBMB 43F - ";
                        break;
                    case 43:
                        label += "7A5SBMB 43F - ";
                        break;
                    case 45:
                        label += "7A5SBMB 45S - ";
                        break;
                    case 428:
                        label += "7A5SBMB 428D - ";
                        break;
                    case 429:
                        label += "7A5SBMB 429F - ";
                        break;
                    case 429:
                        label += "7A5SBMB 429F - ";
                        break;
                    case 430:
                        label += "7A5SBMB 430T - ";
                        break;
                    case 430:
                        label += "7A5SBMB 430T - ";
                        break;
                    case 430:
                        label += "7A5SBMB 430T - ";
                        break;
                    case 430:
                        label += "7A5SBMB 430T - ";
                        break;
                    case 430:
                        label += "7A5SBMB 430T - ";
                        break;
                    case 381:
                        label += "7A5SBMB 381G - ";
                        break;
                    case 390:
                        label += "7A5SBMB 390L - ";
                        break;
                    case 390:
                        label += "7A5SBMB 390L - ";
                        break;
                    case 386:
                        label += "7A5SBMB 386K - ";
                        break;
                    case 386:
                        label += "7A5SBMB 386K - ";
                        break;
                    case 42:
                        label += "7A5SBMB 42V - ";
                        break;
                    case 42:
                        label += "7A5SBMB 42V - ";
                        break;
                    case 44:
                        label += "7A5SBMB 44R - ";
                        break;
                    case 42:
                        label += "7A5SBMB 42V - ";
                        break;}
                switch (labely){
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 30:
                        label += "H 30I\n";
                        break;
                    case 31:
                        label += "H 31T\n";
                        break;
                    case 31:
                        label += "H 31T\n";
                        break;
                    case 31:
                        label += "H 31T\n";
                        break;
                    case 33:
                        label += "H 33W\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 55:
                        label += "H 55D\n";
                        break;
                    case 55:
                        label += "H 55D\n";
                        break;
                    case 55:
                        label += "H 55D\n";
                        break;
                    case 55:
                        label += "H 55D\n";
                        break;
                    case 55:
                        label += "H 55D\n";
                        break;
                    case 55:
                        label += "H 55D\n";
                        break;
                    case 55:
                        label += "H 55D\n";
                        break;
                    case 55:
                        label += "H 55D\n";
                        break;
                    case 57:
                        label += "H 57E\n";
                        break;
                    case 100:
                        label += "H 100S\n";
                        break;
                    case 102:
                        label += "H 102I\n";
                        break;
                    case 102:
                        label += "H 102I\n";
                        break;
                    case 104:
                        label += "H 104T\n";
                        break;
                    case 107:
                        label += "H 107D\n";
                        break;
                    case 121:
                        label += "I 121K\n";
                        break;
                    case 121:
                        label += "I 121K\n";
                        break;
                    case 150:
                        label += "I 150F\n";
                        break;
                    case 150:
                        label += "I 150F\n";
                        break;
                    case 150:
                        label += "I 150F\n";
                        break;
                    case 150:
                        label += "I 150F\n";
                        break;
                    case 150:
                        label += "I 150F\n";
                        break;
                    case 150:
                        label += "I 150F\n";
                        break;
                    case 150:
                        label += "I 150F\n";
                        break;
                    case 179:
                        label += "I 179L\n";
                        break;
                    case 179:
                        label += "I 179L\n";
                        break;
                    case 179:
                        label += "I 179L\n";
                        break;
                    case 179:
                        label += "I 179L\n";
                        break;
                    case 179:
                        label += "I 179L\n";
                        break;
                    case 179:
                        label += "I 179L\n";
                        break;
                    case 179:
                        label += "I 179L\n";
                        break;
                    case 119:
                        label += "I 119S\n";
                        break;
                    case 16:
                        label += "I 16E\n";
                        break;
                    case 17:
                        label += "I 17S\n";
                        break;
                    case 15:
                        label += "L 15L\n";
                        break;
                    case 15:
                        label += "L 15L\n";
                        break;
                    case 16:
                        label += "L 16G\n";
                        break;
                    case 16:
                        label += "L 16G\n";
                        break;
                    case 31:
                        label += "L 31Y\n";
                        break;
                    case 31:
                        label += "L 31Y\n";
                        break;
                    case 31:
                        label += "L 31Y\n";
                        break;
                    case 31:
                        label += "L 31Y\n";
                        break;
                    case 31:
                        label += "L 31Y\n";
                        break;
                    case 33:
                        label += "L 33S\n";
                        break;
                    case 34:
                        label += "L 34I\n";
                        break;
                    case 34:
                        label += "L 34I\n";
                        break;
                    case 38:
                        label += "L 38Y\n";
                        break;
                    case 56:
                        label += "L 56W\n";
                        break;
                    case 56:
                        label += "L 56W\n";
                        break;
                    case 61:
                        label += "L 61E\n";
                        break;
                    case 61:
                        label += "L 61E\n";
                        break;
                    case 67:
                        label += "L 67R\n";
                        break;
                    case 67:
                        label += "L 67R\n";
                        break;
                    case 83:
                        label += "L 83S\n";
                        break;
                    case 85:
                        label += "L 85Q\n";
                        break;
                    case 14:
                        label += "H 14P\n";
                        break;
                    case 16:
                        label += "H 16E\n";
                        break;
                    case 17:
                        label += "H 17S\n";
                        break;
                    case 19:
                        label += "H 19K\n";
                        break;
                    case 119:
                        label += "H 119S\n";
                        break;
                    case 121:
                        label += "H 121K\n";
                        break;
                    case 121:
                        label += "H 121K\n";
                        break;
                    case 150:
                        label += "H 150F\n";
                        break;
                    case 150:
                        label += "H 150F\n";
                        break;
                    case 150:
                        label += "H 150F\n";
                        break;
                    case 150:
                        label += "H 150F\n";
                        break;
                    case 150:
                        label += "H 150F\n";
                        break;
                    case 150:
                        label += "H 150F\n";
                        break;
                    case 150:
                        label += "H 150F\n";
                        break;
                    case 179:
                        label += "H 179L\n";
                        break;
                    case 179:
                        label += "H 179L\n";
                        break;
                    case 179:
                        label += "H 179L\n";
                        break;
                    case 179:
                        label += "H 179L\n";
                        break;
                    case 179:
                        label += "H 179L\n";
                        break;
                    case 27:
                        label += "I 27Y\n";
                        break;
                    case 27:
                        label += "I 27Y\n";
                        break;
                    case 27:
                        label += "I 27Y\n";
                        break;
                    case 30:
                        label += "I 30I\n";
                        break;
                    case 52:
                        label += "I 52Y\n";
                        break;
                    case 30:
                        label += "I 30I\n";
                        break;
                    case 31:
                        label += "I 31T\n";
                        break;
                    case 52:
                        label += "I 52Y\n";
                        break;
                    case 52:
                        label += "I 52Y\n";
                        break;
                    case 31:
                        label += "I 31T\n";
                        break;
                    case 33:
                        label += "I 33W\n";
                        break;
                    case 33:
                        label += "I 33W\n";
                        break;
                    case 52:
                        label += "I 52Y\n";
                        break;
                    case 55:
                        label += "I 55D\n";
                        break;
                    case 57:
                        label += "I 57E\n";
                        break;
                    case 102:
                        label += "I 102I\n";
                        break;
                    case 102:
                        label += "I 102I\n";
                        break;
                    case 102:
                        label += "I 102I\n";
                        break;
                    case 104:
                        label += "I 104T\n";
                        break;
                    case 31:
                        label += "I 31T\n";
                        break;
                    case 32:
                        label += "I 32Y\n";
                        break;
                    case 100:
                        label += "I 100S\n";
                        break;
                    case 107:
                        label += "I 107D\n";
                        break;
                    case 107:
                        label += "I 107D\n";
                        break;
                    case 55:
                        label += "I 55D\n";
                        break;
                    case 55:
                        label += "I 55D\n";
                        break;
                    case 55:
                        label += "I 55D\n";
                        break;
                    case 55:
                        label += "I 55D\n";
                        break;
                    case 55:
                        label += "I 55D\n";
                        break;
                    case 55:
                        label += "I 55D\n";
                        break;
                    case 55:
                        label += "I 55D\n";
                        break;
                    case 15:
                        label += "M 15L\n";
                        break;
                    case 15:
                        label += "M 15L\n";
                        break;
                    case 16:
                        label += "M 16G\n";
                        break;
                    case 31:
                        label += "M 31Y\n";
                        break;
                    case 31:
                        label += "M 31Y\n";
                        break;
                    case 31:
                        label += "M 31Y\n";
                        break;
                    case 31:
                        label += "M 31Y\n";
                        break;
                    case 31:
                        label += "M 31Y\n";
                        break;
                    case 33:
                        label += "M 33S\n";
                        break;
                    case 34:
                        label += "M 34I\n";
                        break;
                    case 34:
                        label += "M 34I\n";
                        break;
                    case 38:
                        label += "M 38Y\n";
                        break;
                    case 56:
                        label += "M 56W\n";
                        break;
                    case 56:
                        label += "M 56W\n";
                        break;
                    case 61:
                        label += "M 61E\n";
                        break;
                    case 61:
                        label += "M 61E\n";
                        break;
                    case 67:
                        label += "M 67R\n";
                        break;
                    case 67:
                        label += "M 67R\n";
                        break;
                    case 83:
                        label += "M 83S\n";
                        break;
                    case 85:
                        label += "M 85Q\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});