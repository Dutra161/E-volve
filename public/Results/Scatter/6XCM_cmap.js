
var myChart6XCM = 0;
var ctx = document.getElementById('6XCM').getContext('2d');
if (window.myChart6XCM != 0){
    window.myChart6XCM.destroy();
}
window.myChart6XCM = new Chart(ctx, {
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
            data: [{x: 421, y: 53},
                {x: 421, y: 54},
                {x: 455, y: 33},
                {x: 457, y: 53},
                {x: 458, y: 30},
                {x: 458, y: 30},
                {x: 458, y: 53},
                {x: 458, y: 54},
                {x: 473, y: 31},
                {x: 473, y: 31},
                {x: 474, y: 31},
                {x: 475, y: 32},
                {x: 489, y: 94},
                {x: 403, y: 91},
                {x: 403, y: 93},
                {x: 405, y: 30},
                {x: 498, y: 31},
                {x: 501, y: 29},
                {x: 502, y: 29},
                {x: 415, y: 58},
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
                {x: 501, y: 29},
                {x: 502, y: 28},
                {x: 502, y: 29},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 505, y: 30},
                {x: 505, y: 32},
                {x: 505, y: 91},
                {x: 456, y: 33},
                {x: 486, y: 102},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 417, y: 52},
                {x: 417, y: 52},
                {x: 417, y: 52},
                {x: 417, y: 98},
                {x: 453, y: 98},
                {x: 455, y: 99},
                {x: 455, y: 99},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 501, y: 31},
                {x: 501, y: 31},
                {x: 505, y: 30},
                {x: 505, y: 30},
                {x: 505, y: 30},
                {x: 505, y: 30},
                {x: 505, y: 30},
                {x: 505, y: 30},
                {x: 505, y: 30},
                {x: 505, y: 30},
                {x: 505, y: 30},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 91},
                {x: 505, y: 91},
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
                {x: 505, y: 30},
                {x: 505, y: 30},
                {x: 505, y: 30},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6XCM Superpose"],
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
                    case 417:
                        label += "6XCMBNB 417K - ";
                        break;
                    case 417:
                        label += "6XCMBNB 417K - ";
                        break;
                    case 417:
                        label += "6XCMBNB 417K - ";
                        break;
                    case 417:
                        label += "6XCMBNB 417K - ";
                        break;
                    case 421:
                        label += "6XCMBNB 421Y - ";
                        break;
                    case 421:
                        label += "6XCMBNB 421Y - ";
                        break;
                    case 453:
                        label += "6XCMBNB 453Y - ";
                        break;
                    case 455:
                        label += "6XCMBNB 455L - ";
                        break;
                    case 455:
                        label += "6XCMBNB 455L - ";
                        break;
                    case 455:
                        label += "6XCMBNB 455L - ";
                        break;
                    case 456:
                        label += "6XCMBNB 456F - ";
                        break;
                    case 456:
                        label += "6XCMBNB 456F - ";
                        break;
                    case 456:
                        label += "6XCMBNB 456F - ";
                        break;
                    case 456:
                        label += "6XCMBNB 456F - ";
                        break;
                    case 456:
                        label += "6XCMBNB 456F - ";
                        break;
                    case 456:
                        label += "6XCMBNB 456F - ";
                        break;
                    case 457:
                        label += "6XCMBNB 457R - ";
                        break;
                    case 458:
                        label += "6XCMBNB 458K - ";
                        break;
                    case 458:
                        label += "6XCMBNB 458K - ";
                        break;
                    case 458:
                        label += "6XCMBNB 458K - ";
                        break;
                    case 458:
                        label += "6XCMBNB 458K - ";
                        break;
                    case 473:
                        label += "6XCMBNB 473Y - ";
                        break;
                    case 473:
                        label += "6XCMBNB 473Y - ";
                        break;
                    case 474:
                        label += "6XCMBNB 474Q - ";
                        break;
                    case 475:
                        label += "6XCMBNB 475A - ";
                        break;
                    case 489:
                        label += "6XCMBNB 489Y - ";
                        break;
                    case 403:
                        label += "6XCMBSB 403R - ";
                        break;
                    case 403:
                        label += "6XCMBSB 403R - ";
                        break;
                    case 405:
                        label += "6XCMBSB 405D - ";
                        break;
                    case 498:
                        label += "6XCMBSB 498Q - ";
                        break;
                    case 501:
                        label += "6XCMBSB 501N - ";
                        break;
                    case 501:
                        label += "6XCMBSB 501N - ";
                        break;
                    case 501:
                        label += "6XCMBSB 501N - ";
                        break;
                    case 502:
                        label += "6XCMBSB 502G - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
                    case 505:
                        label += "6XCMBSB 505Y - ";
                        break;
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
                        break;
                    case 501:
                        label += "6XCMCLC 501N - ";
                        break;
                    case 502:
                        label += "6XCMCLC 502G - ";
                        break;
                    case 502:
                        label += "6XCMCLC 502G - ";
                        break;
                    case 505:
                        label += "6XCMCLC 505Y - ";
                        break;
                    case 505:
                        label += "6XCMCLC 505Y - ";
                        break;
                    case 505:
                        label += "6XCMCLC 505Y - ";
                        break;}
                switch (labely){
                    case 52:
                        label += "N 52Y\n";
                        break;
                    case 52:
                        label += "N 52Y\n";
                        break;
                    case 52:
                        label += "N 52Y\n";
                        break;
                    case 98:
                        label += "N 98W\n";
                        break;
                    case 53:
                        label += "N 53S\n";
                        break;
                    case 54:
                        label += "N 54G\n";
                        break;
                    case 98:
                        label += "N 98W\n";
                        break;
                    case 33:
                        label += "N 33Y\n";
                        break;
                    case 99:
                        label += "N 99E\n";
                        break;
                    case 99:
                        label += "N 99E\n";
                        break;
                    case 100:
                        label += "N 100L\n";
                        break;
                    case 100:
                        label += "N 100L\n";
                        break;
                    case 100:
                        label += "N 100L\n";
                        break;
                    case 100:
                        label += "N 100L\n";
                        break;
                    case 100:
                        label += "N 100L\n";
                        break;
                    case 100:
                        label += "N 100L\n";
                        break;
                    case 53:
                        label += "N 53S\n";
                        break;
                    case 30:
                        label += "N 30S\n";
                        break;
                    case 30:
                        label += "N 30S\n";
                        break;
                    case 53:
                        label += "N 53S\n";
                        break;
                    case 54:
                        label += "N 54G\n";
                        break;
                    case 31:
                        label += "N 31S\n";
                        break;
                    case 31:
                        label += "N 31S\n";
                        break;
                    case 31:
                        label += "N 31S\n";
                        break;
                    case 32:
                        label += "N 32N\n";
                        break;
                    case 94:
                        label += "N 94R\n";
                        break;
                    case 91:
                        label += "S 91Y\n";
                        break;
                    case 93:
                        label += "S 93G\n";
                        break;
                    case 30:
                        label += "S 30Y\n";
                        break;
                    case 31:
                        label += "S 31K\n";
                        break;
                    case 29:
                        label += "S 29G\n";
                        break;
                    case 31:
                        label += "S 31K\n";
                        break;
                    case 31:
                        label += "S 31K\n";
                        break;
                    case 29:
                        label += "S 29G\n";
                        break;
                    case 30:
                        label += "S 30Y\n";
                        break;
                    case 30:
                        label += "S 30Y\n";
                        break;
                    case 30:
                        label += "S 30Y\n";
                        break;
                    case 30:
                        label += "S 30Y\n";
                        break;
                    case 30:
                        label += "S 30Y\n";
                        break;
                    case 30:
                        label += "S 30Y\n";
                        break;
                    case 30:
                        label += "S 30Y\n";
                        break;
                    case 30:
                        label += "S 30Y\n";
                        break;
                    case 30:
                        label += "S 30Y\n";
                        break;
                    case 30:
                        label += "S 30Y\n";
                        break;
                    case 32:
                        label += "S 32Y\n";
                        break;
                    case 32:
                        label += "S 32Y\n";
                        break;
                    case 32:
                        label += "S 32Y\n";
                        break;
                    case 32:
                        label += "S 32Y\n";
                        break;
                    case 32:
                        label += "S 32Y\n";
                        break;
                    case 32:
                        label += "S 32Y\n";
                        break;
                    case 32:
                        label += "S 32Y\n";
                        break;
                    case 32:
                        label += "S 32Y\n";
                        break;
                    case 91:
                        label += "S 91Y\n";
                        break;
                    case 91:
                        label += "S 91Y\n";
                        break;
                    case 91:
                        label += "S 91Y\n";
                        break;
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
                    case 29:
                        label += "L 29G\n";
                        break;
                    case 28:
                        label += "L 28G\n";
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
                    case 30:
                        label += "L 30Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});