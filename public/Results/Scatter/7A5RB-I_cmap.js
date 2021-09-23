
var myChart7A5RB_I = 0;
var ctx = document.getElementById('7A5RB-I').getContext('2d');
if (window.myChart7A5RB_I != 0){
    window.myChart7A5RB_I.destroy();
}
window.myChart7A5RB_I = new Chart(ctx, {
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
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
                {x: 377, y: 52},
                {x: 377, y: 52},
                {x: 378, y: 31},
                {x: 378, y: 33},
                {x: 381, y: 102},
                {x: 383, y: 104},
                {x: 385, y: 32},
                {x: 385, y: 100},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 369, y: 27},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 369, y: 27},
                {x: 369, y: 27},
                {x: 370, y: 30},
                {x: 376, y: 52},
                {x: 377, y: 30},
                {x: 378, y: 33},
                {x: 378, y: 52},
                {x: 380, y: 102},
                {x: 380, y: 102},
                {x: 384, y: 31},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7A5RB-I"],
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
                        label += "7A5RBIB 369Y - ";
                        break;
                    case 369:
                        label += "7A5RBIB 369Y - ";
                        break;
                    case 369:
                        label += "7A5RBIB 369Y - ";
                        break;
                    case 370:
                        label += "7A5RBIB 370N - ";
                        break;
                    case 376:
                        label += "7A5RBIB 376T - ";
                        break;
                    case 377:
                        label += "7A5RBIB 377F - ";
                        break;
                    case 377:
                        label += "7A5RBIB 377F - ";
                        break;
                    case 377:
                        label += "7A5RBIB 377F - ";
                        break;
                    case 377:
                        label += "7A5RBIB 377F - ";
                        break;
                    case 378:
                        label += "7A5RBIB 378K - ";
                        break;
                    case 378:
                        label += "7A5RBIB 378K - ";
                        break;
                    case 378:
                        label += "7A5RBIB 378K - ";
                        break;
                    case 378:
                        label += "7A5RBIB 378K - ";
                        break;
                    case 378:
                        label += "7A5RBIB 378K - ";
                        break;
                    case 378:
                        label += "7A5RBIB 378K - ";
                        break;
                    case 380:
                        label += "7A5RBIB 380Y - ";
                        break;
                    case 380:
                        label += "7A5RBIB 380Y - ";
                        break;
                    case 381:
                        label += "7A5RBIB 381G - ";
                        break;
                    case 383:
                        label += "7A5RBIB 383S - ";
                        break;
                    case 384:
                        label += "7A5RBIB 384P - ";
                        break;
                    case 385:
                        label += "7A5RBIB 385T - ";
                        break;
                    case 385:
                        label += "7A5RBIB 385T - ";
                        break;
                    case 386:
                        label += "7A5RBIB 386K - ";
                        break;
                    case 386:
                        label += "7A5RBIB 386K - ";
                        break;
                    case 408:
                        label += "7A5RBIB 408R - ";
                        break;
                    case 408:
                        label += "7A5RBIB 408R - ";
                        break;
                    case 408:
                        label += "7A5RBIB 408R - ";
                        break;
                    case 408:
                        label += "7A5RBIB 408R - ";
                        break;
                    case 408:
                        label += "7A5RBIB 408R - ";
                        break;
                    case 408:
                        label += "7A5RBIB 408R - ";
                        break;
                    case 408:
                        label += "7A5RBIB 408R - ";
                        break;}
                switch (labely){
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
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});