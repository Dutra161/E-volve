
var myChart7CAHA_D = 0;
var ctx = document.getElementById('7CAHA-D').getContext('2d');
if (window.myChart7CAHA_D != 0){
    window.myChart7CAHA_D.destroy();
}
window.myChart7CAHA_D = new Chart(ctx, {
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
            data: [{x: 375, y: 91},
                {x: 374, y: 92},
                {x: 374, y: 93},
                {x: 377, y: 93},
                {x: 375, y: 95},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 377, y: 93},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 369, y: 93},
                {x: 369, y: 93},
                {x: 369, y: 93},
                {x: 369, y: 93},
                {x: 374, y: 93},
                {x: 377, y: 93},
                {x: 377, y: 93},
                {x: 377, y: 93},
                {x: 377, y: 93},
                {x: 377, y: 93},
                {x: 377, y: 93},
                {x: 377, y: 93},
                {x: 384, y: 93},
                {x: 384, y: 93},
                {x: 384, y: 93},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CAHA-D"],
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
                    case 375:
                        label += "7CAHADA 375S - ";
                        break;
                    case 374:
                        label += "7CAHADA 374F - ";
                        break;
                    case 369:
                        label += "7CAHADA 369Y - ";
                        break;
                    case 369:
                        label += "7CAHADA 369Y - ";
                        break;
                    case 369:
                        label += "7CAHADA 369Y - ";
                        break;
                    case 369:
                        label += "7CAHADA 369Y - ";
                        break;
                    case 374:
                        label += "7CAHADA 374F - ";
                        break;
                    case 374:
                        label += "7CAHADA 374F - ";
                        break;
                    case 377:
                        label += "7CAHADA 377F - ";
                        break;
                    case 377:
                        label += "7CAHADA 377F - ";
                        break;
                    case 377:
                        label += "7CAHADA 377F - ";
                        break;
                    case 377:
                        label += "7CAHADA 377F - ";
                        break;
                    case 377:
                        label += "7CAHADA 377F - ";
                        break;
                    case 377:
                        label += "7CAHADA 377F - ";
                        break;
                    case 377:
                        label += "7CAHADA 377F - ";
                        break;
                    case 377:
                        label += "7CAHADA 377F - ";
                        break;
                    case 377:
                        label += "7CAHADA 377F - ";
                        break;
                    case 384:
                        label += "7CAHADA 384P - ";
                        break;
                    case 384:
                        label += "7CAHADA 384P - ";
                        break;
                    case 384:
                        label += "7CAHADA 384P - ";
                        break;
                    case 375:
                        label += "7CAHADA 375S - ";
                        break;}
                switch (labely){
                    case 91:
                        label += "D 91N\n";
                        break;
                    case 92:
                        label += "D 92F\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 93:
                        label += "D 93W\n";
                        break;
                    case 95:
                        label += "D 95Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});