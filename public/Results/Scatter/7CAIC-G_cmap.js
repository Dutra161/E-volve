
var myChart7CAIC_G = 0;
var ctx = document.getElementById('7CAIC-G').getContext('2d');
if (window.myChart7CAIC_G != 0){
    window.myChart7CAIC_G.destroy();
}
window.myChart7CAIC_G = new Chart(ctx, {
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
            data: [{x: 478, y: 71},
                {x: 479, y: 19},
                {x: 481, y: 19},
                {x: 484, y: 75},
                {x: 485, y: 75},
                {x: 486, y: 73},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 478, y: 71},
                {x: 478, y: 82},
                {x: 479, y: 19},
                {x: 479, y: 19},
                {x: 483, y: 76},
                {x: 483, y: 76},
                {x: 483, y: 76},
                {x: 486, y: 71},
                {x: 486, y: 71},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CAIC-G"],
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
                        label += "7CAICGC 478T - ";
                        break;
                    case 478:
                        label += "7CAICGC 478T - ";
                        break;
                    case 478:
                        label += "7CAICGC 478T - ";
                        break;
                    case 479:
                        label += "7CAICGC 479P - ";
                        break;
                    case 479:
                        label += "7CAICGC 479P - ";
                        break;
                    case 479:
                        label += "7CAICGC 479P - ";
                        break;
                    case 481:
                        label += "7CAICGC 481N - ";
                        break;
                    case 483:
                        label += "7CAICGC 483V - ";
                        break;
                    case 483:
                        label += "7CAICGC 483V - ";
                        break;
                    case 483:
                        label += "7CAICGC 483V - ";
                        break;
                    case 484:
                        label += "7CAICGC 484E - ";
                        break;
                    case 485:
                        label += "7CAICGC 485G - ";
                        break;
                    case 486:
                        label += "7CAICGC 486F - ";
                        break;
                    case 486:
                        label += "7CAICGC 486F - ";
                        break;
                    case 486:
                        label += "7CAICGC 486F - ";
                        break;}
                switch (labely){
                    case 71:
                        label += "G 71T\n";
                        break;
                    case 71:
                        label += "G 71T\n";
                        break;
                    case 82:
                        label += "G 82E\n";
                        break;
                    case 19:
                        label += "G 19K\n";
                        break;
                    case 19:
                        label += "G 19K\n";
                        break;
                    case 19:
                        label += "G 19K\n";
                        break;
                    case 19:
                        label += "G 19K\n";
                        break;
                    case 76:
                        label += "G 76T\n";
                        break;
                    case 76:
                        label += "G 76T\n";
                        break;
                    case 76:
                        label += "G 76T\n";
                        break;
                    case 75:
                        label += "G 75S\n";
                        break;
                    case 75:
                        label += "G 75S\n";
                        break;
                    case 71:
                        label += "G 71T\n";
                        break;
                    case 71:
                        label += "G 71T\n";
                        break;
                    case 73:
                        label += "G 73D\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});