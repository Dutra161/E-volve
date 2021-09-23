
var myChart7A29A_D = 0;
var ctx = document.getElementById('7A29A-D').getContext('2d');
if (window.myChart7A29A_D != 0){
    window.myChart7A29A_D.destroy();
}
window.myChart7A29A_D = new Chart(ctx, {
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
            data: [{x: 444, y: 105},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 444, y: 45},
                {x: 444, y: 45},
                {x: 444, y: 45},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 444, y: 37},
                {x: 445, y: 45},
                {x: 447, y: 37},
                {x: 449, y: 52},
                {x: 450, y: 32},
                {x: 450, y: 35},
                {x: 450, y: 99},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 449, y: 47},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 449, y: 47},
                {x: 452, y: 52},
                {x: 452, y: 52},
                {x: 452, y: 52},
                {x: 452, y: 52},
                {x: 470, y: 57},
                {x: 470, y: 57},
                {x: 490, y: 59},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7A29A-D"],
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
                        label += "7A29ADA 444K - ";
                        break;
                    case 444:
                        label += "7A29ADA 444K - ";
                        break;
                    case 444:
                        label += "7A29ADA 444K - ";
                        break;
                    case 444:
                        label += "7A29ADA 444K - ";
                        break;
                    case 444:
                        label += "7A29ADA 444K - ";
                        break;
                    case 445:
                        label += "7A29ADA 445V - ";
                        break;
                    case 447:
                        label += "7A29ADA 447G - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 449:
                        label += "7A29ADA 449Y - ";
                        break;
                    case 450:
                        label += "7A29ADA 450N - ";
                        break;
                    case 450:
                        label += "7A29ADA 450N - ";
                        break;
                    case 450:
                        label += "7A29ADA 450N - ";
                        break;
                    case 452:
                        label += "7A29ADA 452L - ";
                        break;
                    case 452:
                        label += "7A29ADA 452L - ";
                        break;
                    case 452:
                        label += "7A29ADA 452L - ";
                        break;
                    case 452:
                        label += "7A29ADA 452L - ";
                        break;
                    case 470:
                        label += "7A29ADA 470T - ";
                        break;
                    case 470:
                        label += "7A29ADA 470T - ";
                        break;
                    case 490:
                        label += "7A29ADA 490F - ";
                        break;}
                switch (labely){
                    case 37:
                        label += "D 37Y\n";
                        break;
                    case 45:
                        label += "D 45R\n";
                        break;
                    case 45:
                        label += "D 45R\n";
                        break;
                    case 45:
                        label += "D 45R\n";
                        break;
                    case 105:
                        label += "D 105E\n";
                        break;
                    case 45:
                        label += "D 45R\n";
                        break;
                    case 37:
                        label += "D 37Y\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 47:
                        label += "D 47W\n";
                        break;
                    case 52:
                        label += "D 52Y\n";
                        break;
                    case 32:
                        label += "D 32E\n";
                        break;
                    case 35:
                        label += "D 35H\n";
                        break;
                    case 99:
                        label += "D 99Q\n";
                        break;
                    case 52:
                        label += "D 52Y\n";
                        break;
                    case 52:
                        label += "D 52Y\n";
                        break;
                    case 52:
                        label += "D 52Y\n";
                        break;
                    case 52:
                        label += "D 52Y\n";
                        break;
                    case 57:
                        label += "D 57W\n";
                        break;
                    case 57:
                        label += "D 57W\n";
                        break;
                    case 59:
                        label += "D 59L\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});