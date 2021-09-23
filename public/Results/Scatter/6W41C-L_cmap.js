
var myChart6W41C_L = 0;
var ctx = document.getElementById('6W41C-L').getContext('2d');
if (window.myChart6W41C_L != 0){
    window.myChart6W41C_L.destroy();
}
window.myChart6W41C_L = new Chart(ctx, {
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
            data: [{x: 386, y: 55},
                {x: 386, y: 55},
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
            data: [{x: 381, y: 32},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 392, y: 28},
                {x: 392, y: 28},
                {x: 392, y: 28},
                {x: 392, y: 28},
                {x: 430, y: 28},
                {x: 517, y: 28},
                {x: 386, y: 49},
                {x: 382, y: 50},
                {x: 382, y: 50},
                {x: 382, y: 50},
                {x: 382, y: 50},
                {x: 390, y: 50},
                {x: 390, y: 50},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6W41C-L"],
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
                    case 392:
                        label += "6W41CLC 392F - ";
                        break;
                    case 392:
                        label += "6W41CLC 392F - ";
                        break;
                    case 392:
                        label += "6W41CLC 392F - ";
                        break;
                    case 392:
                        label += "6W41CLC 392F - ";
                        break;
                    case 430:
                        label += "6W41CLC 430T - ";
                        break;
                    case 517:
                        label += "6W41CLC 517L - ";
                        break;
                    case 381:
                        label += "6W41CLC 381G - ";
                        break;
                    case 386:
                        label += "6W41CLC 386K - ";
                        break;
                    case 382:
                        label += "6W41CLC 382V - ";
                        break;
                    case 382:
                        label += "6W41CLC 382V - ";
                        break;
                    case 382:
                        label += "6W41CLC 382V - ";
                        break;
                    case 382:
                        label += "6W41CLC 382V - ";
                        break;
                    case 390:
                        label += "6W41CLC 390L - ";
                        break;
                    case 390:
                        label += "6W41CLC 390L - ";
                        break;
                    case 386:
                        label += "6W41CLC 386K - ";
                        break;
                    case 386:
                        label += "6W41CLC 386K - ";
                        break;}
                switch (labely){
                    case 28:
                        label += "L 28I\n";
                        break;
                    case 28:
                        label += "L 28I\n";
                        break;
                    case 28:
                        label += "L 28I\n";
                        break;
                    case 28:
                        label += "L 28I\n";
                        break;
                    case 28:
                        label += "L 28I\n";
                        break;
                    case 28:
                        label += "L 28I\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 50:
                        label += "L 50W\n";
                        break;
                    case 50:
                        label += "L 50W\n";
                        break;
                    case 50:
                        label += "L 50W\n";
                        break;
                    case 50:
                        label += "L 50W\n";
                        break;
                    case 50:
                        label += "L 50W\n";
                        break;
                    case 50:
                        label += "L 50W\n";
                        break;
                    case 55:
                        label += "L 55E\n";
                        break;
                    case 55:
                        label += "L 55E\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});