
var myChart7C01B_L = 0;
var ctx = document.getElementById('7C01B-L').getContext('2d');
if (window.myChart7C01B_L != 0){
    window.myChart7C01B_L.destroy();
}
window.myChart7C01B_L = new Chart(ctx, {
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
            data: [{x: 346, y: 17},
                {x: 346, y: 17},
                {x: 346, y: 17},
                {x: 346, y: 17},
                {x: 346, y: 17},
                {x: 346, y: 17},
                {x: 444, y: 17},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 444, y: 109},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 446, y: 7},
                {x: 346, y: 15},
                {x: 346, y: 16},
                {x: 346, y: 17},
                {x: 450, y: 18},
                {x: 450, y: 18},
                {x: 450, y: 18},
                {x: 449, y: 20},
                {x: 450, y: 20},
                {x: 450, y: 20},
                {x: 484, y: 66},
                {x: 484, y: 67},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [],
            backgroundColor: ['rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 444, y: 11},
                {x: 449, y: 20},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7C01B-L"],
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
                    case 446:
                        label += "7C01BLB 446G - ";
                        break;
                    case 444:
                        label += "7C01BLB 444K - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 444:
                        label += "7C01BLB 444K - ";
                        break;
                    case 450:
                        label += "7C01BLB 450N - ";
                        break;
                    case 450:
                        label += "7C01BLB 450N - ";
                        break;
                    case 450:
                        label += "7C01BLB 450N - ";
                        break;
                    case 449:
                        label += "7C01BLB 449Y - ";
                        break;
                    case 449:
                        label += "7C01BLB 449Y - ";
                        break;
                    case 450:
                        label += "7C01BLB 450N - ";
                        break;
                    case 450:
                        label += "7C01BLB 450N - ";
                        break;
                    case 484:
                        label += "7C01BLB 484E - ";
                        break;
                    case 484:
                        label += "7C01BLB 484E - ";
                        break;
                    case 444:
                        label += "7C01BLB 444K - ";
                        break;}
                switch (labely){
                    case 7:
                        label += "L 7S\n";
                        break;
                    case 11:
                        label += "L 11L\n";
                        break;
                    case 15:
                        label += "L 15V\n";
                        break;
                    case 16:
                        label += "L 16G\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 18:
                        label += "L 18R\n";
                        break;
                    case 18:
                        label += "L 18R\n";
                        break;
                    case 18:
                        label += "L 18R\n";
                        break;
                    case 20:
                        label += "L 20T\n";
                        break;
                    case 20:
                        label += "L 20T\n";
                        break;
                    case 20:
                        label += "L 20T\n";
                        break;
                    case 20:
                        label += "L 20T\n";
                        break;
                    case 66:
                        label += "L 66G\n";
                        break;
                    case 67:
                        label += "L 67S\n";
                        break;
                    case 109:
                        label += "L 109K\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});