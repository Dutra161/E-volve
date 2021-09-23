
var myChart6XKP = 0;
var ctx = document.getElementById('6XKP').getContext('2d');
if (window.myChart6XKP != 0){
    window.myChart6XKP.destroy();
}
window.myChart6XKP = new Chart(ctx, {
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
            data: [{x: 346, y: 31},
                {x: 346, y: 31},
                {x: 346, y: 31},
                {x: 346, y: 31},
                {x: 346, y: 31},
                {x: 346, y: 31},
                {x: 346, y: 31},
                {x: 346, y: 31},
                {x: 444, y: 31},
                {x: 444, y: 31},
                {x: 346, y: 31},
                {x: 346, y: 31},
                {x: 346, y: 31},
                {x: 346, y: 31},
                {x: 346, y: 31},
                {x: 346, y: 31},
                {x: 444, y: 31},
                {x: 444, y: 31},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 357, y: 19},
                {x: 357, y: 19},
                {x: 357, y: 19},
                {x: 357, y: 19},
                {x: 357, y: 19},
                {x: 357, y: 19},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 346, y: 31},
                {x: 346, y: 31},
                {x: 346, y: 31},
                {x: 444, y: 28},
                {x: 444, y: 31},
                {x: 447, y: 98},
                {x: 447, y: 98},
                {x: 448, y: 98},
                {x: 449, y: 98},
                {x: 450, y: 31},
                {x: 450, y: 98},
                {x: 450, y: 98},
                {x: 450, y: 98},
                {x: 450, y: 99},
                {x: 450, y: 100},
                {x: 466, y: 17},
                {x: 469, y: 65},
                {x: 462, y: 14},
                {x: 466, y: 17},
                {x: 466, y: 81},
                {x: 469, y: 65},
                {x: 346, y: 31},
                {x: 444, y: 28},
                {x: 444, y: 31},
                {x: 447, y: 98},
                {x: 448, y: 98},
                {x: 449, y: 98},
                {x: 450, y: 31},
                {x: 450, y: 98},
                {x: 450, y: 98},
                {x: 450, y: 98},
                {x: 450, y: 99},
                {x: 450, y: 100},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 444, y: 32},
                {x: 520, y: 204},
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
            text:["6XKP Superpose"],
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
                        label += "6XKPAHA 346R - ";
                        break;
                    case 346:
                        label += "6XKPAHA 346R - ";
                        break;
                    case 346:
                        label += "6XKPAHA 346R - ";
                        break;
                    case 346:
                        label += "6XKPAHA 346R - ";
                        break;
                    case 346:
                        label += "6XKPAHA 346R - ";
                        break;
                    case 346:
                        label += "6XKPAHA 346R - ";
                        break;
                    case 346:
                        label += "6XKPAHA 346R - ";
                        break;
                    case 346:
                        label += "6XKPAHA 346R - ";
                        break;
                    case 444:
                        label += "6XKPAHA 444K - ";
                        break;
                    case 444:
                        label += "6XKPAHA 444K - ";
                        break;
                    case 444:
                        label += "6XKPAHA 444K - ";
                        break;
                    case 444:
                        label += "6XKPAHA 444K - ";
                        break;
                    case 447:
                        label += "6XKPAHA 447G - ";
                        break;
                    case 447:
                        label += "6XKPAHA 447G - ";
                        break;
                    case 448:
                        label += "6XKPAHA 448N - ";
                        break;
                    case 449:
                        label += "6XKPAHA 449Y - ";
                        break;
                    case 450:
                        label += "6XKPAHA 450N - ";
                        break;
                    case 450:
                        label += "6XKPAHA 450N - ";
                        break;
                    case 450:
                        label += "6XKPAHA 450N - ";
                        break;
                    case 450:
                        label += "6XKPAHA 450N - ";
                        break;
                    case 450:
                        label += "6XKPAHA 450N - ";
                        break;
                    case 450:
                        label += "6XKPAHA 450N - ";
                        break;
                    case 466:
                        label += "6XKPAMA 466R - ";
                        break;
                    case 469:
                        label += "6XKPAMA 469S - ";
                        break;
                    case 357:
                        label += "6XKPBHB 357R - ";
                        break;
                    case 357:
                        label += "6XKPBHB 357R - ";
                        break;
                    case 357:
                        label += "6XKPBHB 357R - ";
                        break;
                    case 357:
                        label += "6XKPBHB 357R - ";
                        break;
                    case 357:
                        label += "6XKPBHB 357R - ";
                        break;
                    case 357:
                        label += "6XKPBHB 357R - ";
                        break;
                    case 462:
                        label += "6XKPBHB 462K - ";
                        break;
                    case 466:
                        label += "6XKPBHB 466R - ";
                        break;
                    case 466:
                        label += "6XKPBHB 466R - ";
                        break;
                    case 469:
                        label += "6XKPBHB 469S - ";
                        break;
                    case 520:
                        label += "6XKPBHB 520A - ";
                        break;
                    case 346:
                        label += "6XKPBMB 346R - ";
                        break;
                    case 346:
                        label += "6XKPBMB 346R - ";
                        break;
                    case 346:
                        label += "6XKPBMB 346R - ";
                        break;
                    case 346:
                        label += "6XKPBMB 346R - ";
                        break;
                    case 346:
                        label += "6XKPBMB 346R - ";
                        break;
                    case 346:
                        label += "6XKPBMB 346R - ";
                        break;
                    case 444:
                        label += "6XKPBMB 444K - ";
                        break;
                    case 444:
                        label += "6XKPBMB 444K - ";
                        break;
                    case 444:
                        label += "6XKPBMB 444K - ";
                        break;
                    case 447:
                        label += "6XKPBMB 447G - ";
                        break;
                    case 448:
                        label += "6XKPBMB 448N - ";
                        break;
                    case 449:
                        label += "6XKPBMB 449Y - ";
                        break;
                    case 450:
                        label += "6XKPBMB 450N - ";
                        break;
                    case 450:
                        label += "6XKPBMB 450N - ";
                        break;
                    case 450:
                        label += "6XKPBMB 450N - ";
                        break;
                    case 450:
                        label += "6XKPBMB 450N - ";
                        break;
                    case 450:
                        label += "6XKPBMB 450N - ";
                        break;
                    case 450:
                        label += "6XKPBMB 450N - ";
                        break;}
                switch (labely){
                    case 31:
                        label += "H 31D\n";
                        break;
                    case 31:
                        label += "H 31D\n";
                        break;
                    case 31:
                        label += "H 31D\n";
                        break;
                    case 31:
                        label += "H 31D\n";
                        break;
                    case 31:
                        label += "H 31D\n";
                        break;
                    case 31:
                        label += "H 31D\n";
                        break;
                    case 31:
                        label += "H 31D\n";
                        break;
                    case 31:
                        label += "H 31D\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 31:
                        label += "H 31D\n";
                        break;
                    case 31:
                        label += "H 31D\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 98:
                        label += "H 98S\n";
                        break;
                    case 98:
                        label += "H 98S\n";
                        break;
                    case 98:
                        label += "H 98S\n";
                        break;
                    case 98:
                        label += "H 98S\n";
                        break;
                    case 31:
                        label += "H 31D\n";
                        break;
                    case 98:
                        label += "H 98S\n";
                        break;
                    case 98:
                        label += "H 98S\n";
                        break;
                    case 98:
                        label += "H 98S\n";
                        break;
                    case 99:
                        label += "H 99S\n";
                        break;
                    case 100:
                        label += "H 100G\n";
                        break;
                    case 17:
                        label += "M 17S\n";
                        break;
                    case 65:
                        label += "M 65G\n";
                        break;
                    case 19:
                        label += "H 19R\n";
                        break;
                    case 19:
                        label += "H 19R\n";
                        break;
                    case 19:
                        label += "H 19R\n";
                        break;
                    case 19:
                        label += "H 19R\n";
                        break;
                    case 19:
                        label += "H 19R\n";
                        break;
                    case 19:
                        label += "H 19R\n";
                        break;
                    case 14:
                        label += "H 14P\n";
                        break;
                    case 17:
                        label += "H 17S\n";
                        break;
                    case 81:
                        label += "H 81Q\n";
                        break;
                    case 65:
                        label += "H 65G\n";
                        break;
                    case 204:
                        label += "H 204N\n";
                        break;
                    case 31:
                        label += "M 31D\n";
                        break;
                    case 31:
                        label += "M 31D\n";
                        break;
                    case 31:
                        label += "M 31D\n";
                        break;
                    case 31:
                        label += "M 31D\n";
                        break;
                    case 31:
                        label += "M 31D\n";
                        break;
                    case 31:
                        label += "M 31D\n";
                        break;
                    case 28:
                        label += "M 28T\n";
                        break;
                    case 31:
                        label += "M 31D\n";
                        break;
                    case 31:
                        label += "M 31D\n";
                        break;
                    case 98:
                        label += "M 98S\n";
                        break;
                    case 98:
                        label += "M 98S\n";
                        break;
                    case 98:
                        label += "M 98S\n";
                        break;
                    case 31:
                        label += "M 31D\n";
                        break;
                    case 98:
                        label += "M 98S\n";
                        break;
                    case 98:
                        label += "M 98S\n";
                        break;
                    case 98:
                        label += "M 98S\n";
                        break;
                    case 99:
                        label += "M 99S\n";
                        break;
                    case 100:
                        label += "M 100G\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});