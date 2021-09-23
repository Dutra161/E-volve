
var myChart7KZBC_B = 0;
var ctx = document.getElementById('7KZBC-B').getContext('2d');
if (window.myChart7KZBC_B != 0){
    window.myChart7KZBC_B.destroy();
}
window.myChart7KZBC_B = new Chart(ctx, {
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
            data: [{x: 405, y: 60},
                {x: 417, y: 52},
                {x: 417, y: 52},
                {x: 475, y: 31},
                {x: 475, y: 32},
                {x: 477, y: 28},
                {x: 477, y: 92},
                {x: 477, y: 92},
                {x: 477, y: 92},
                {x: 487, y: 91},
                {x: 487, y: 91},
                {x: 487, y: 92},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 96},
                {x: 489, y: 49},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 455, y: 53},
                {x: 455, y: 53},
                {x: 456, y: 49},
                {x: 456, y: 50},
                {x: 456, y: 50},
                {x: 456, y: 53},
                {x: 456, y: 53},
                {x: 486, y: 96},
                {x: 486, y: 96},
                {x: 486, y: 96},
                {x: 487, y: 32},
                {x: 489, y: 49},
                {x: 489, y: 49},
                {x: 489, y: 50},
                {x: 489, y: 50},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KZBC-B"],
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
                    case 405:
                        label += "7KZBCBC 405D - ";
                        break;
                    case 417:
                        label += "7KZBCBC 417K - ";
                        break;
                    case 417:
                        label += "7KZBCBC 417K - ";
                        break;
                    case 455:
                        label += "7KZBCBC 455L - ";
                        break;
                    case 455:
                        label += "7KZBCBC 455L - ";
                        break;
                    case 456:
                        label += "7KZBCBC 456F - ";
                        break;
                    case 456:
                        label += "7KZBCBC 456F - ";
                        break;
                    case 456:
                        label += "7KZBCBC 456F - ";
                        break;
                    case 456:
                        label += "7KZBCBC 456F - ";
                        break;
                    case 456:
                        label += "7KZBCBC 456F - ";
                        break;
                    case 475:
                        label += "7KZBCBC 475A - ";
                        break;
                    case 475:
                        label += "7KZBCBC 475A - ";
                        break;
                    case 477:
                        label += "7KZBCBC 477S - ";
                        break;
                    case 477:
                        label += "7KZBCBC 477S - ";
                        break;
                    case 477:
                        label += "7KZBCBC 477S - ";
                        break;
                    case 477:
                        label += "7KZBCBC 477S - ";
                        break;
                    case 486:
                        label += "7KZBCBC 486F - ";
                        break;
                    case 486:
                        label += "7KZBCBC 486F - ";
                        break;
                    case 486:
                        label += "7KZBCBC 486F - ";
                        break;
                    case 486:
                        label += "7KZBCBC 486F - ";
                        break;
                    case 487:
                        label += "7KZBCBC 487N - ";
                        break;
                    case 487:
                        label += "7KZBCBC 487N - ";
                        break;
                    case 487:
                        label += "7KZBCBC 487N - ";
                        break;
                    case 487:
                        label += "7KZBCBC 487N - ";
                        break;
                    case 489:
                        label += "7KZBCBC 489Y - ";
                        break;
                    case 489:
                        label += "7KZBCBC 489Y - ";
                        break;
                    case 489:
                        label += "7KZBCBC 489Y - ";
                        break;
                    case 489:
                        label += "7KZBCBC 489Y - ";
                        break;
                    case 489:
                        label += "7KZBCBC 489Y - ";
                        break;}
                switch (labely){
                    case 60:
                        label += "B 60S\n";
                        break;
                    case 52:
                        label += "B 52S\n";
                        break;
                    case 52:
                        label += "B 52S\n";
                        break;
                    case 53:
                        label += "B 53A\n";
                        break;
                    case 53:
                        label += "B 53A\n";
                        break;
                    case 49:
                        label += "B 49Y\n";
                        break;
                    case 50:
                        label += "B 50A\n";
                        break;
                    case 50:
                        label += "B 50A\n";
                        break;
                    case 53:
                        label += "B 53A\n";
                        break;
                    case 53:
                        label += "B 53A\n";
                        break;
                    case 31:
                        label += "B 31S\n";
                        break;
                    case 32:
                        label += "B 32A\n";
                        break;
                    case 28:
                        label += "B 28S\n";
                        break;
                    case 92:
                        label += "B 92D\n";
                        break;
                    case 92:
                        label += "B 92D\n";
                        break;
                    case 92:
                        label += "B 92D\n";
                        break;
                    case 96:
                        label += "B 96Y\n";
                        break;
                    case 96:
                        label += "B 96Y\n";
                        break;
                    case 96:
                        label += "B 96Y\n";
                        break;
                    case 96:
                        label += "B 96Y\n";
                        break;
                    case 32:
                        label += "B 32A\n";
                        break;
                    case 91:
                        label += "B 91T\n";
                        break;
                    case 91:
                        label += "B 91T\n";
                        break;
                    case 92:
                        label += "B 92D\n";
                        break;
                    case 49:
                        label += "B 49Y\n";
                        break;
                    case 49:
                        label += "B 49Y\n";
                        break;
                    case 49:
                        label += "B 49Y\n";
                        break;
                    case 50:
                        label += "B 50A\n";
                        break;
                    case 50:
                        label += "B 50A\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});