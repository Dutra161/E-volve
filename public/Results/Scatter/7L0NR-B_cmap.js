
var myChart7L0NR_B = 0;
var ctx = document.getElementById('7L0NR-B').getContext('2d');
if (window.myChart7L0NR_B != 0){
    window.myChart7L0NR_B.destroy();
}
window.myChart7L0NR_B = new Chart(ctx, {
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
            data: [{x: 346, y: 93},
                {x: 346, y: 93},
                {x: 346, y: 93},
                {x: 346, y: 93},
                {x: 346, y: 93},
                {x: 346, y: 93},
                {x: 346, y: 93},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 346, y: 30},
                {x: 345, y: 32},
                {x: 345, y: 32},
                {x: 345, y: 32},
                {x: 345, y: 33},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 441, y: 32},
                {x: 441, y: 32},
                {x: 441, y: 32},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7L0NR-B"],
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
                    case 346:
                        label += "7L0NRBR 346R - ";
                        break;
                    case 345:
                        label += "7L0NRBR 345T - ";
                        break;
                    case 345:
                        label += "7L0NRBR 345T - ";
                        break;
                    case 345:
                        label += "7L0NRBR 345T - ";
                        break;
                    case 441:
                        label += "7L0NRBR 441L - ";
                        break;
                    case 441:
                        label += "7L0NRBR 441L - ";
                        break;
                    case 441:
                        label += "7L0NRBR 441L - ";
                        break;
                    case 345:
                        label += "7L0NRBR 345T - ";
                        break;
                    case 346:
                        label += "7L0NRBR 346R - ";
                        break;
                    case 346:
                        label += "7L0NRBR 346R - ";
                        break;
                    case 346:
                        label += "7L0NRBR 346R - ";
                        break;
                    case 346:
                        label += "7L0NRBR 346R - ";
                        break;
                    case 346:
                        label += "7L0NRBR 346R - ";
                        break;
                    case 346:
                        label += "7L0NRBR 346R - ";
                        break;
                    case 346:
                        label += "7L0NRBR 346R - ";
                        break;}
                switch (labely){
                    case 30:
                        label += "B 30S\n";
                        break;
                    case 32:
                        label += "B 32T\n";
                        break;
                    case 32:
                        label += "B 32T\n";
                        break;
                    case 32:
                        label += "B 32T\n";
                        break;
                    case 32:
                        label += "B 32T\n";
                        break;
                    case 32:
                        label += "B 32T\n";
                        break;
                    case 32:
                        label += "B 32T\n";
                        break;
                    case 33:
                        label += "B 33S\n";
                        break;
                    case 93:
                        label += "B 93D\n";
                        break;
                    case 93:
                        label += "B 93D\n";
                        break;
                    case 93:
                        label += "B 93D\n";
                        break;
                    case 93:
                        label += "B 93D\n";
                        break;
                    case 93:
                        label += "B 93D\n";
                        break;
                    case 93:
                        label += "B 93D\n";
                        break;
                    case 93:
                        label += "B 93D\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});