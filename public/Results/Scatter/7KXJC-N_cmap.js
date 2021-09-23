
var myChart7KXJC_N = 0;
var ctx = document.getElementById('7KXJC-N').getContext('2d');
if (window.myChart7KXJC_N != 0){
    window.myChart7KXJC_N.destroy();
}
window.myChart7KXJC_N = new Chart(ctx, {
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
            data: [{x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 417, y: 66},
                {x: 417, y: 66},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 406, y: 66},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 417, y: 65},
                {x: 417, y: 66},
                {x: 417, y: 66},
                {x: 473, y: 108},
                {x: 487, y: 109},
                {x: 505, y: 69},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 456, y: 108},
                {x: 473, y: 108},
                {x: 486, y: 114},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 456, y: 38},
                {x: 456, y: 38},
                {x: 456, y: 108},
                {x: 456, y: 108},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KXJC-N"],
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
                    case 403:
                        label += "7KXJCNC 403R - ";
                        break;
                    case 403:
                        label += "7KXJCNC 403R - ";
                        break;
                    case 403:
                        label += "7KXJCNC 403R - ";
                        break;
                    case 403:
                        label += "7KXJCNC 403R - ";
                        break;
                    case 406:
                        label += "7KXJCNC 406E - ";
                        break;
                    case 417:
                        label += "7KXJCNC 417K - ";
                        break;
                    case 417:
                        label += "7KXJCNC 417K - ";
                        break;
                    case 417:
                        label += "7KXJCNC 417K - ";
                        break;
                    case 456:
                        label += "7KXJCNC 456F - ";
                        break;
                    case 456:
                        label += "7KXJCNC 456F - ";
                        break;
                    case 456:
                        label += "7KXJCNC 456F - ";
                        break;
                    case 456:
                        label += "7KXJCNC 456F - ";
                        break;
                    case 456:
                        label += "7KXJCNC 456F - ";
                        break;
                    case 473:
                        label += "7KXJCNC 473Y - ";
                        break;
                    case 473:
                        label += "7KXJCNC 473Y - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 487:
                        label += "7KXJCNC 487N - ";
                        break;
                    case 505:
                        label += "7KXJCNC 505Y - ";
                        break;}
                switch (labely){
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 65:
                        label += "N 65S\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 38:
                        label += "N 38A\n";
                        break;
                    case 38:
                        label += "N 38A\n";
                        break;
                    case 108:
                        label += "N 108H\n";
                        break;
                    case 108:
                        label += "N 108H\n";
                        break;
                    case 108:
                        label += "N 108H\n";
                        break;
                    case 108:
                        label += "N 108H\n";
                        break;
                    case 108:
                        label += "N 108H\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 109:
                        label += "N 109T\n";
                        break;
                    case 69:
                        label += "N 69S\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});