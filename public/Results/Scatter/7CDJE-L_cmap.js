
var myChart7CDJE_L = 0;
var ctx = document.getElementById('7CDJE-L').getContext('2d');
if (window.myChart7CDJE_L != 0){
    window.myChart7CDJE_L.destroy();
}
window.myChart7CDJE_L = new Chart(ctx, {
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
            data: [{x: 478, y: 30},
                {x: 478, y: 90},
                {x: 481, y: 25},
                {x: 481, y: 91},
                {x: 484, y: 92},
                {x: 486, y: 89},
                {x: 487, y: 30},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 30},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 478, y: 30},
                {x: 478, y: 30},
                {x: 486, y: 30},
                {x: 486, y: 30},
                {x: 486, y: 30},
                {x: 486, y: 30},
                {x: 486, y: 30},
                {x: 486, y: 30},
                {x: 486, y: 30},
                {x: 486, y: 30},
                {x: 486, y: 30},
                {x: 487, y: 30},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CDJE-L"],
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
                    case 478:
                        label += "7CDJELE 478T - ";
                        break;
                    case 478:
                        label += "7CDJELE 478T - ";
                        break;
                    case 478:
                        label += "7CDJELE 478T - ";
                        break;
                    case 478:
                        label += "7CDJELE 478T - ";
                        break;
                    case 481:
                        label += "7CDJELE 481N - ";
                        break;
                    case 481:
                        label += "7CDJELE 481N - ";
                        break;
                    case 484:
                        label += "7CDJELE 484E - ";
                        break;
                    case 486:
                        label += "7CDJELE 486F - ";
                        break;
                    case 486:
                        label += "7CDJELE 486F - ";
                        break;
                    case 486:
                        label += "7CDJELE 486F - ";
                        break;
                    case 486:
                        label += "7CDJELE 486F - ";
                        break;
                    case 486:
                        label += "7CDJELE 486F - ";
                        break;
                    case 486:
                        label += "7CDJELE 486F - ";
                        break;
                    case 486:
                        label += "7CDJELE 486F - ";
                        break;
                    case 486:
                        label += "7CDJELE 486F - ";
                        break;
                    case 486:
                        label += "7CDJELE 486F - ";
                        break;
                    case 486:
                        label += "7CDJELE 486F - ";
                        break;
                    case 486:
                        label += "7CDJELE 486F - ";
                        break;
                    case 487:
                        label += "7CDJELE 487N - ";
                        break;
                    case 487:
                        label += "7CDJELE 487N - ";
                        break;}
                switch (labely){
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 90:
                        label += "L 90N\n";
                        break;
                    case 25:
                        label += "L 25Q\n";
                        break;
                    case 91:
                        label += "L 91S\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 89:
                        label += "L 89L\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});