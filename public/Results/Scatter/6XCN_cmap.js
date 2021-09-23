
var myChart6XCN = 0;
var ctx = document.getElementById('6XCN').getContext('2d');
if (window.myChart6XCN != 0){
    window.myChart6XCN.destroy();
}
window.myChart6XCN = new Chart(ctx, {
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
            data: [{x: 417, y: 96},
                {x: 417, y: 96},
                {x: 417, y: 96},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
                {x: 417, y: 52},
                {x: 421, y: 33},
                {x: 421, y: 53},
                {x: 421, y: 54},
                {x: 453, y: 99},
                {x: 457, y: 33},
                {x: 457, y: 33},
                {x: 457, y: 53},
                {x: 458, y: 53},
                {x: 458, y: 54},
                {x: 460, y: 54},
                {x: 473, y: 32},
                {x: 405, y: 91},
                {x: 405, y: 91},
                {x: 502, y: 29},
                {x: 505, y: 31},
                {x: 415, y: 58},
                {x: 416, y: 58},
                {x: 417, y: 52},
                {x: 421, y: 33},
                {x: 421, y: 53},
                {x: 421, y: 54},
                {x: 453, y: 99},
                {x: 457, y: 33},
                {x: 457, y: 33},
                {x: 457, y: 53},
                {x: 458, y: 53},
                {x: 458, y: 54},
                {x: 460, y: 54},
                {x: 473, y: 32},
                {x: 487, y: 94},
                {x: 405, y: 91},
                {x: 502, y: 29},
                {x: 505, y: 31},
                {x: 415, y: 58},
                {x: 416, y: 58},
                {x: 417, y: 52},
                {x: 421, y: 33},
                {x: 421, y: 53},
                {x: 421, y: 54},
                {x: 453, y: 99},
                {x: 457, y: 33},
                {x: 457, y: 33},
                {x: 457, y: 53},
                {x: 458, y: 53},
                {x: 458, y: 53},
                {x: 458, y: 54},
                {x: 460, y: 54},
                {x: 473, y: 32},
                {x: 405, y: 91},
                {x: 405, y: 91},
                {x: 502, y: 29},
                {x: 505, y: 31},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 417, y: 52},
                {x: 421, y: 52},
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
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 487, y: 27},
                {x: 505, y: 30},
                {x: 505, y: 30},
                {x: 505, y: 31},
                {x: 505, y: 31},
                {x: 505, y: 31},
                {x: 417, y: 52},
                {x: 421, y: 52},
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
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 487, y: 27},
                {x: 505, y: 30},
                {x: 505, y: 30},
                {x: 505, y: 31},
                {x: 505, y: 31},
                {x: 505, y: 31},
                {x: 505, y: 31},
                {x: 417, y: 52},
                {x: 421, y: 52},
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
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 487, y: 27},
                {x: 505, y: 30},
                {x: 505, y: 30},
                {x: 505, y: 31},
                {x: 505, y: 31},
                {x: 505, y: 31},
                {x: 505, y: 31},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6XCN Superpose"],
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
                    case 415:
                        label += "6XCNABA 415T - ";
                        break;
                    case 416:
                        label += "6XCNABA 416G - ";
                        break;
                    case 417:
                        label += "6XCNABA 417K - ";
                        break;
                    case 417:
                        label += "6XCNABA 417K - ";
                        break;
                    case 417:
                        label += "6XCNABA 417K - ";
                        break;
                    case 421:
                        label += "6XCNABA 421Y - ";
                        break;
                    case 421:
                        label += "6XCNABA 421Y - ";
                        break;
                    case 421:
                        label += "6XCNABA 421Y - ";
                        break;
                    case 421:
                        label += "6XCNABA 421Y - ";
                        break;
                    case 453:
                        label += "6XCNABA 453Y - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 456:
                        label += "6XCNABA 456F - ";
                        break;
                    case 457:
                        label += "6XCNABA 457R - ";
                        break;
                    case 457:
                        label += "6XCNABA 457R - ";
                        break;
                    case 457:
                        label += "6XCNABA 457R - ";
                        break;
                    case 458:
                        label += "6XCNABA 458K - ";
                        break;
                    case 458:
                        label += "6XCNABA 458K - ";
                        break;
                    case 460:
                        label += "6XCNABA 460N - ";
                        break;
                    case 473:
                        label += "6XCNABA 473Y - ";
                        break;
                    case 486:
                        label += "6XCNABA 486F - ";
                        break;
                    case 486:
                        label += "6XCNABA 486F - ";
                        break;
                    case 486:
                        label += "6XCNABA 486F - ";
                        break;
                    case 487:
                        label += "6XCNABA 487N - ";
                        break;
                    case 405:
                        label += "6XCNADA 405D - ";
                        break;
                    case 405:
                        label += "6XCNADA 405D - ";
                        break;
                    case 502:
                        label += "6XCNADA 502G - ";
                        break;
                    case 505:
                        label += "6XCNADA 505Y - ";
                        break;
                    case 505:
                        label += "6XCNADA 505Y - ";
                        break;
                    case 505:
                        label += "6XCNADA 505Y - ";
                        break;
                    case 505:
                        label += "6XCNADA 505Y - ";
                        break;
                    case 505:
                        label += "6XCNADA 505Y - ";
                        break;
                    case 505:
                        label += "6XCNADA 505Y - ";
                        break;
                    case 415:
                        label += "6XCNCHC 415T - ";
                        break;
                    case 416:
                        label += "6XCNCHC 416G - ";
                        break;
                    case 417:
                        label += "6XCNCHC 417K - ";
                        break;
                    case 417:
                        label += "6XCNCHC 417K - ";
                        break;
                    case 417:
                        label += "6XCNCHC 417K - ";
                        break;
                    case 421:
                        label += "6XCNCHC 421Y - ";
                        break;
                    case 421:
                        label += "6XCNCHC 421Y - ";
                        break;
                    case 421:
                        label += "6XCNCHC 421Y - ";
                        break;
                    case 421:
                        label += "6XCNCHC 421Y - ";
                        break;
                    case 453:
                        label += "6XCNCHC 453Y - ";
                        break;
                    case 456:
                        label += "6XCNCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCNCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCNCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCNCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCNCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCNCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCNCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCNCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCNCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCNCHC 456F - ";
                        break;
                    case 456:
                        label += "6XCNCHC 456F - ";
                        break;
                    case 457:
                        label += "6XCNCHC 457R - ";
                        break;
                    case 457:
                        label += "6XCNCHC 457R - ";
                        break;
                    case 457:
                        label += "6XCNCHC 457R - ";
                        break;
                    case 458:
                        label += "6XCNCHC 458K - ";
                        break;
                    case 458:
                        label += "6XCNCHC 458K - ";
                        break;
                    case 460:
                        label += "6XCNCHC 460N - ";
                        break;
                    case 473:
                        label += "6XCNCHC 473Y - ";
                        break;
                    case 486:
                        label += "6XCNCHC 486F - ";
                        break;
                    case 486:
                        label += "6XCNCHC 486F - ";
                        break;
                    case 487:
                        label += "6XCNCHC 487N - ";
                        break;
                    case 487:
                        label += "6XCNCHC 487N - ";
                        break;
                    case 405:
                        label += "6XCNCLC 405D - ";
                        break;
                    case 502:
                        label += "6XCNCLC 502G - ";
                        break;
                    case 505:
                        label += "6XCNCLC 505Y - ";
                        break;
                    case 505:
                        label += "6XCNCLC 505Y - ";
                        break;
                    case 505:
                        label += "6XCNCLC 505Y - ";
                        break;
                    case 505:
                        label += "6XCNCLC 505Y - ";
                        break;
                    case 505:
                        label += "6XCNCLC 505Y - ";
                        break;
                    case 505:
                        label += "6XCNCLC 505Y - ";
                        break;
                    case 505:
                        label += "6XCNCLC 505Y - ";
                        break;
                    case 415:
                        label += "6XCNEFE 415T - ";
                        break;
                    case 416:
                        label += "6XCNEFE 416G - ";
                        break;
                    case 417:
                        label += "6XCNEFE 417K - ";
                        break;
                    case 417:
                        label += "6XCNEFE 417K - ";
                        break;
                    case 417:
                        label += "6XCNEFE 417K - ";
                        break;
                    case 421:
                        label += "6XCNEFE 421Y - ";
                        break;
                    case 421:
                        label += "6XCNEFE 421Y - ";
                        break;
                    case 421:
                        label += "6XCNEFE 421Y - ";
                        break;
                    case 421:
                        label += "6XCNEFE 421Y - ";
                        break;
                    case 453:
                        label += "6XCNEFE 453Y - ";
                        break;
                    case 456:
                        label += "6XCNEFE 456F - ";
                        break;
                    case 456:
                        label += "6XCNEFE 456F - ";
                        break;
                    case 456:
                        label += "6XCNEFE 456F - ";
                        break;
                    case 456:
                        label += "6XCNEFE 456F - ";
                        break;
                    case 456:
                        label += "6XCNEFE 456F - ";
                        break;
                    case 456:
                        label += "6XCNEFE 456F - ";
                        break;
                    case 456:
                        label += "6XCNEFE 456F - ";
                        break;
                    case 456:
                        label += "6XCNEFE 456F - ";
                        break;
                    case 456:
                        label += "6XCNEFE 456F - ";
                        break;
                    case 456:
                        label += "6XCNEFE 456F - ";
                        break;
                    case 456:
                        label += "6XCNEFE 456F - ";
                        break;
                    case 456:
                        label += "6XCNEFE 456F - ";
                        break;
                    case 456:
                        label += "6XCNEFE 456F - ";
                        break;
                    case 457:
                        label += "6XCNEFE 457R - ";
                        break;
                    case 457:
                        label += "6XCNEFE 457R - ";
                        break;
                    case 457:
                        label += "6XCNEFE 457R - ";
                        break;
                    case 458:
                        label += "6XCNEFE 458K - ";
                        break;
                    case 458:
                        label += "6XCNEFE 458K - ";
                        break;
                    case 458:
                        label += "6XCNEFE 458K - ";
                        break;
                    case 460:
                        label += "6XCNEFE 460N - ";
                        break;
                    case 473:
                        label += "6XCNEFE 473Y - ";
                        break;
                    case 486:
                        label += "6XCNEFE 486F - ";
                        break;
                    case 486:
                        label += "6XCNEFE 486F - ";
                        break;
                    case 487:
                        label += "6XCNEFE 487N - ";
                        break;
                    case 405:
                        label += "6XCNEGE 405D - ";
                        break;
                    case 405:
                        label += "6XCNEGE 405D - ";
                        break;
                    case 502:
                        label += "6XCNEGE 502G - ";
                        break;
                    case 505:
                        label += "6XCNEGE 505Y - ";
                        break;
                    case 505:
                        label += "6XCNEGE 505Y - ";
                        break;
                    case 505:
                        label += "6XCNEGE 505Y - ";
                        break;
                    case 505:
                        label += "6XCNEGE 505Y - ";
                        break;
                    case 505:
                        label += "6XCNEGE 505Y - ";
                        break;
                    case 505:
                        label += "6XCNEGE 505Y - ";
                        break;
                    case 505:
                        label += "6XCNEGE 505Y - ";
                        break;}
                switch (labely){
                    case 58:
                        label += "B 58Y\n";
                        break;
                    case 58:
                        label += "B 58Y\n";
                        break;
                    case 52:
                        label += "B 52Y\n";
                        break;
                    case 52:
                        label += "B 52Y\n";
                        break;
                    case 96:
                        label += "B 96E\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 52:
                        label += "B 52Y\n";
                        break;
                    case 53:
                        label += "B 53S\n";
                        break;
                    case 54:
                        label += "B 54G\n";
                        break;
                    case 99:
                        label += "B 99E\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 100:
                        label += "B 100L\n";
                        break;
                    case 100:
                        label += "B 100L\n";
                        break;
                    case 100:
                        label += "B 100L\n";
                        break;
                    case 100:
                        label += "B 100L\n";
                        break;
                    case 100:
                        label += "B 100L\n";
                        break;
                    case 100:
                        label += "B 100L\n";
                        break;
                    case 100:
                        label += "B 100L\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 53:
                        label += "B 53S\n";
                        break;
                    case 53:
                        label += "B 53S\n";
                        break;
                    case 54:
                        label += "B 54G\n";
                        break;
                    case 54:
                        label += "B 54G\n";
                        break;
                    case 32:
                        label += "B 32N\n";
                        break;
                    case 102:
                        label += "B 102Y\n";
                        break;
                    case 102:
                        label += "B 102Y\n";
                        break;
                    case 102:
                        label += "B 102Y\n";
                        break;
                    case 27:
                        label += "B 27F\n";
                        break;
                    case 91:
                        label += "D 91Y\n";
                        break;
                    case 91:
                        label += "D 91Y\n";
                        break;
                    case 29:
                        label += "D 29G\n";
                        break;
                    case 30:
                        label += "D 30Y\n";
                        break;
                    case 30:
                        label += "D 30Y\n";
                        break;
                    case 31:
                        label += "D 31K\n";
                        break;
                    case 31:
                        label += "D 31K\n";
                        break;
                    case 31:
                        label += "D 31K\n";
                        break;
                    case 31:
                        label += "D 31K\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 96:
                        label += "H 96E\n";
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
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 99:
                        label += "H 99E\n";
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
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 32:
                        label += "H 32N\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 27:
                        label += "H 27F\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 91:
                        label += "L 91Y\n";
                        break;
                    case 29:
                        label += "L 29G\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 31:
                        label += "L 31K\n";
                        break;
                    case 31:
                        label += "L 31K\n";
                        break;
                    case 31:
                        label += "L 31K\n";
                        break;
                    case 31:
                        label += "L 31K\n";
                        break;
                    case 31:
                        label += "L 31K\n";
                        break;
                    case 58:
                        label += "F 58Y\n";
                        break;
                    case 58:
                        label += "F 58Y\n";
                        break;
                    case 52:
                        label += "F 52Y\n";
                        break;
                    case 52:
                        label += "F 52Y\n";
                        break;
                    case 96:
                        label += "F 96E\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 52:
                        label += "F 52Y\n";
                        break;
                    case 53:
                        label += "F 53S\n";
                        break;
                    case 54:
                        label += "F 54G\n";
                        break;
                    case 99:
                        label += "F 99E\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 100:
                        label += "F 100L\n";
                        break;
                    case 100:
                        label += "F 100L\n";
                        break;
                    case 100:
                        label += "F 100L\n";
                        break;
                    case 100:
                        label += "F 100L\n";
                        break;
                    case 100:
                        label += "F 100L\n";
                        break;
                    case 100:
                        label += "F 100L\n";
                        break;
                    case 100:
                        label += "F 100L\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 53:
                        label += "F 53S\n";
                        break;
                    case 53:
                        label += "F 53S\n";
                        break;
                    case 53:
                        label += "F 53S\n";
                        break;
                    case 54:
                        label += "F 54G\n";
                        break;
                    case 54:
                        label += "F 54G\n";
                        break;
                    case 32:
                        label += "F 32N\n";
                        break;
                    case 102:
                        label += "F 102Y\n";
                        break;
                    case 102:
                        label += "F 102Y\n";
                        break;
                    case 27:
                        label += "F 27F\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 91:
                        label += "G 91Y\n";
                        break;
                    case 29:
                        label += "G 29G\n";
                        break;
                    case 30:
                        label += "G 30Y\n";
                        break;
                    case 30:
                        label += "G 30Y\n";
                        break;
                    case 31:
                        label += "G 31K\n";
                        break;
                    case 31:
                        label += "G 31K\n";
                        break;
                    case 31:
                        label += "G 31K\n";
                        break;
                    case 31:
                        label += "G 31K\n";
                        break;
                    case 31:
                        label += "G 31K\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});