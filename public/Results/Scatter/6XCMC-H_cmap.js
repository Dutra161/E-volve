
var myChart6XCMC_H = 0;
var ctx = document.getElementById('6XCMC-H').getContext('2d');
if (window.myChart6XCMC_H != 0){
    window.myChart6XCMC_H.destroy();
}
window.myChart6XCMC_H = new Chart(ctx, {
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
            data: [{x: 403, y: 99},
                {x: 403, y: 99},
                {x: 403, y: 99},
                {x: 417, y: 99},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 415, y: 58},
                {x: 416, y: 58},
                {x: 421, y: 33},
                {x: 421, y: 53},
                {x: 421, y: 53},
                {x: 421, y: 54},
                {x: 457, y: 33},
                {x: 457, y: 33},
                {x: 457, y: 53},
                {x: 458, y: 53},
                {x: 458, y: 54},
                {x: 473, y: 31},
                {x: 473, y: 31},
                {x: 473, y: 32},
                {x: 474, y: 31},
                {x: 474, y: 31},
                {x: 476, y: 28},
                {x: 476, y: 75},
                {x: 487, y: 26},
                {x: 505, y: 98},
                {x: 505, y: 99},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 456, y: 33},
                {x: 486, y: 102},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 421, y: 52},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 473, y: 33},
                {x: 486, y: 102},
                {x: 487, y: 27},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6XCMC-H"],
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
                        label += "6XCMCHC 403R - ";
                        break;
                    case 403:
                        label += "6XCMCHC 403R - ";
                        break;
                    case 403:
                        label += "6XCMCHC 403R - ";
                        break;
                    case 415:
                        label += "6XCMCHC 415T - ";
                        break;
                    case 416:
                        label += "6XCMCHC 416G - ";
                        break;
                    case 417:
                        label += "6XCMCHC 417K - ";
                        break;
                    case 421:
                        label += "6XCMCHC 421Y - ";
                        break;
                    case 421:
                        label += "6XCMCHC 421Y - ";
                        break;
                    case 421:
                        label += "6XCMCHC 421Y - ";
                        break;
                    case 421:
                        label += "6XCMCHC 421Y - ";
                        break;
                    case 421:
                        label += "6XCMCHC 421Y - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCMCHC 456F - ";
                        break;
                    case 457:
                        label += "6XCMCHC 457R - ";
                        break;
                    case 457:
                        label += "6XCMCHC 457R - ";
                        break;
                    case 457:
                        label += "6XCMCHC 457R - ";
                        break;
                    case 458:
                        label += "6XCMCHC 458K - ";
                        break;
                    case 458:
                        label += "6XCMCHC 458K - ";
                        break;
                    case 473:
                        label += "6XCMCHC 473Y - ";
                        break;
                    case 473:
                        label += "6XCMCHC 473Y - ";
                        break;
                    case 473:
                        label += "6XCMCHC 473Y - ";
                        break;
                    case 473:
                        label += "6XCMCHC 473Y - ";
                        break;
                    case 474:
                        label += "6XCMCHC 474Q - ";
                        break;
                    case 474:
                        label += "6XCMCHC 474Q - ";
                        break;
                    case 476:
                        label += "6XCMCHC 476G - ";
                        break;
                    case 476:
                        label += "6XCMCHC 476G - ";
                        break;
                    case 486:
                        label += "6XCMCHC 486F - ";
                        break;
                    case 486:
                        label += "6XCMCHC 486F - ";
                        break;
                    case 487:
                        label += "6XCMCHC 487N - ";
                        break;
                    case 487:
                        label += "6XCMCHC 487N - ";
                        break;
                    case 505:
                        label += "6XCMCHC 505Y - ";
                        break;
                    case 505:
                        label += "6XCMCHC 505Y - ";
                        break;}
                switch (labely){
                    case 99:
                        label += "H 99E\n";
                        break;
                    case 99:
                        label += "H 99E\n";
                        break;
                    case 99:
                        label += "H 99E\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 99:
                        label += "H 99E\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 100:
                        label += "H 100L\n";
                        break;
                    case 100:
                        label += "H 100L\n";
                        break;
                    case 100:
                        label += "H 100L\n";
                        break;
                    case 100:
                        label += "H 100L\n";
                        break;
                    case 100:
                        label += "H 100L\n";
                        break;
                    case 100:
                        label += "H 100L\n";
                        break;
                    case 100:
                        label += "H 100L\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 32:
                        label += "H 32N\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 75:
                        label += "H 75K\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 26:
                        label += "H 26G\n";
                        break;
                    case 27:
                        label += "H 27F\n";
                        break;
                    case 98:
                        label += "H 98W\n";
                        break;
                    case 99:
                        label += "H 99E\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});