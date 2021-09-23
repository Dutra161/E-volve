
var myChart7CWLC_K = 0;
var ctx = document.getElementById('7CWLC-K').getContext('2d');
if (window.myChart7CWLC_K != 0){
    window.myChart7CWLC_K.destroy();
}
window.myChart7CWLC_K = new Chart(ctx, {
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
            data: [{x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                {x: 484, y: 96},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 484, y: 96},
                {x: 484, y: 96},
                {x: 486, y: 92},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 32},
                {x: 486, y: 92},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                {x: 486, y: 92},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7CWLC-K"],
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
                    case 484:
                        label += "7CWLCKC 484E - ";
                        break;
                    case 484:
                        label += "7CWLCKC 484E - ";
                        break;
                    case 484:
                        label += "7CWLCKC 484E - ";
                        break;
                    case 484:
                        label += "7CWLCKC 484E - ";
                        break;
                    case 484:
                        label += "7CWLCKC 484E - ";
                        break;
                    case 484:
                        label += "7CWLCKC 484E - ";
                        break;
                    case 484:
                        label += "7CWLCKC 484E - ";
                        break;
                    case 484:
                        label += "7CWLCKC 484E - ";
                        break;
                    case 484:
                        label += "7CWLCKC 484E - ";
                        break;
                    case 484:
                        label += "7CWLCKC 484E - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;
                    case 486:
                        label += "7CWLCKC 486F - ";
                        break;}
                switch (labely){
                    case 96:
                        label += "K 96R\n";
                        break;
                    case 96:
                        label += "K 96R\n";
                        break;
                    case 96:
                        label += "K 96R\n";
                        break;
                    case 96:
                        label += "K 96R\n";
                        break;
                    case 96:
                        label += "K 96R\n";
                        break;
                    case 96:
                        label += "K 96R\n";
                        break;
                    case 96:
                        label += "K 96R\n";
                        break;
                    case 96:
                        label += "K 96R\n";
                        break;
                    case 96:
                        label += "K 96R\n";
                        break;
                    case 96:
                        label += "K 96R\n";
                        break;
                    case 32:
                        label += "K 32Y\n";
                        break;
                    case 32:
                        label += "K 32Y\n";
                        break;
                    case 32:
                        label += "K 32Y\n";
                        break;
                    case 32:
                        label += "K 32Y\n";
                        break;
                    case 32:
                        label += "K 32Y\n";
                        break;
                    case 32:
                        label += "K 32Y\n";
                        break;
                    case 32:
                        label += "K 32Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;
                    case 92:
                        label += "K 92Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});