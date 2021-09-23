
var myChart7LD1 = 0;
var ctx = document.getElementById('7LD1').getContext('2d');
if (window.myChart7LD1 != 0){
    window.myChart7LD1.destroy();
}
window.myChart7LD1 = new Chart(ctx, {
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
            data: [{x: 369, y: 128},
                {x: 371, y: 76},
                {x: 372, y: 76},
                {x: 374, y: 76},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 378, y: 126},
                {x: 379, y: 126},
                {x: 379, y: 126},
                {x: 379, y: 126},
                {x: 379, y: 126},
                {x: 405, y: 50},
                {x: 409, y: 50},
                {x: 417, y: 51},
                {x: 369, y: 128},
                {x: 374, y: 76},
                {x: 375, y: 130},
                {x: 375, y: 131},
                {x: 377, y: 128},
                {x: 378, y: 128},
                {x: 379, y: 126},
                {x: 379, y: 126},
                {x: 379, y: 126},
                {x: 499, y: 81},
                {x: 501, y: 81},
                {x: 477, y: 35},
                {x: 477, y: 35},
                {x: 369, y: 128},
                {x: 371, y: 76},
                {x: 372, y: 76},
                {x: 374, y: 76},
                {x: 376, y: 130},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 379, y: 126},
                {x: 379, y: 126},
                {x: 408, y: 131},
                {x: 405, y: 118},
                {x: 405, y: 118},
                {x: 408, y: 50},
                {x: 408, y: 117},
                {x: 408, y: 117},
                {x: 409, y: 50},
                {x: 414, y: 50},
                {x: 414, y: 50},
                {x: 415, y: 51},
                {x: 415, y: 52},
                {x: 416, y: 51},
                {x: 505, y: 20},
                {x: 505, y: 21},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 369, y: 128},
                {x: 377, y: 128},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 378, y: 131},
                {x: 405, y: 117},
                {x: 505, y: 20},
                {x: 505, y: 120},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 378, y: 125},
                {x: 378, y: 125},
                {x: 407, y: 131},
                {x: 435, y: 131},
                {x: 503, y: 119},
                {x: 503, y: 119},
                {x: 503, y: 120},
                {x: 479, y: 34},
                {x: 479, y: 105},
                {x: 479, y: 105},
                {x: 369, y: 128},
                {x: 369, y: 128},
                {x: 369, y: 128},
                {x: 369, y: 128},
                {x: 369, y: 128},
                {x: 369, y: 128},
                {x: 376, y: 131},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 377, y: 128},
                {x: 378, y: 125},
                {x: 378, y: 125},
                {x: 408, y: 131},
                {x: 408, y: 131},
                {x: 411, y: 125},
                {x: 411, y: 125},
                {x: 503, y: 78},
                {x: 503, y: 78},
                {x: 503, y: 78},
                {x: 503, y: 81},
                {x: 408, y: 50},
                {x: 408, y: 50},
                {x: 408, y: 50},
                {x: 409, y: 50},
                {x: 503, y: 119},
                {x: 503, y: 119},
                {x: 505, y: 20},
                {x: 505, y: 120},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7LD1 Superpose"],
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
                    case 369:
                        label += "7LD1APA 369Y - ";
                        break;
                    case 371:
                        label += "7LD1APA 371S - ";
                        break;
                    case 372:
                        label += "7LD1APA 372A - ";
                        break;
                    case 374:
                        label += "7LD1APA 374F - ";
                        break;
                    case 377:
                        label += "7LD1APA 377F - ";
                        break;
                    case 377:
                        label += "7LD1APA 377F - ";
                        break;
                    case 378:
                        label += "7LD1APA 378K - ";
                        break;
                    case 378:
                        label += "7LD1APA 378K - ";
                        break;
                    case 379:
                        label += "7LD1APA 379C - ";
                        break;
                    case 379:
                        label += "7LD1APA 379C - ";
                        break;
                    case 379:
                        label += "7LD1APA 379C - ";
                        break;
                    case 379:
                        label += "7LD1APA 379C - ";
                        break;
                    case 405:
                        label += "7LD1AOA 405D - ";
                        break;
                    case 405:
                        label += "7LD1AOA 405D - ";
                        break;
                    case 409:
                        label += "7LD1AOA 409Q - ";
                        break;
                    case 417:
                        label += "7LD1AOA 417K - ";
                        break;
                    case 505:
                        label += "7LD1AOA 505Y - ";
                        break;
                    case 505:
                        label += "7LD1AOA 505Y - ";
                        break;
                    case 369:
                        label += "7LD1BHB 369Y - ";
                        break;
                    case 374:
                        label += "7LD1BHB 374F - ";
                        break;
                    case 375:
                        label += "7LD1BHB 375S - ";
                        break;
                    case 375:
                        label += "7LD1BHB 375S - ";
                        break;
                    case 377:
                        label += "7LD1BHB 377F - ";
                        break;
                    case 377:
                        label += "7LD1BHB 377F - ";
                        break;
                    case 377:
                        label += "7LD1BHB 377F - ";
                        break;
                    case 377:
                        label += "7LD1BHB 377F - ";
                        break;
                    case 378:
                        label += "7LD1BHB 378K - ";
                        break;
                    case 378:
                        label += "7LD1BHB 378K - ";
                        break;
                    case 378:
                        label += "7LD1BHB 378K - ";
                        break;
                    case 379:
                        label += "7LD1BHB 379C - ";
                        break;
                    case 379:
                        label += "7LD1BHB 379C - ";
                        break;
                    case 379:
                        label += "7LD1BHB 379C - ";
                        break;
                    case 407:
                        label += "7LD1BHB 407V - ";
                        break;
                    case 435:
                        label += "7LD1BHB 435A - ";
                        break;
                    case 499:
                        label += "7LD1BHB 499P - ";
                        break;
                    case 501:
                        label += "7LD1BHB 501N - ";
                        break;
                    case 503:
                        label += "7LD1BLB 503V - ";
                        break;
                    case 503:
                        label += "7LD1BLB 503V - ";
                        break;
                    case 503:
                        label += "7LD1BLB 503V - ";
                        break;
                    case 477:
                        label += "7LD1BNB 477S - ";
                        break;
                    case 477:
                        label += "7LD1BNB 477S - ";
                        break;
                    case 479:
                        label += "7LD1BNB 479P - ";
                        break;
                    case 479:
                        label += "7LD1BNB 479P - ";
                        break;
                    case 479:
                        label += "7LD1BNB 479P - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 369:
                        label += "7LD1CMC 369Y - ";
                        break;
                    case 371:
                        label += "7LD1CMC 371S - ";
                        break;
                    case 372:
                        label += "7LD1CMC 372A - ";
                        break;
                    case 374:
                        label += "7LD1CMC 374F - ";
                        break;
                    case 376:
                        label += "7LD1CMC 376T - ";
                        break;
                    case 376:
                        label += "7LD1CMC 376T - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 377:
                        label += "7LD1CMC 377F - ";
                        break;
                    case 378:
                        label += "7LD1CMC 378K - ";
                        break;
                    case 378:
                        label += "7LD1CMC 378K - ";
                        break;
                    case 379:
                        label += "7LD1CMC 379C - ";
                        break;
                    case 379:
                        label += "7LD1CMC 379C - ";
                        break;
                    case 408:
                        label += "7LD1CMC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CMC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CMC 408R - ";
                        break;
                    case 411:
                        label += "7LD1CMC 411A - ";
                        break;
                    case 411:
                        label += "7LD1CMC 411A - ";
                        break;
                    case 503:
                        label += "7LD1CMC 503V - ";
                        break;
                    case 503:
                        label += "7LD1CMC 503V - ";
                        break;
                    case 503:
                        label += "7LD1CMC 503V - ";
                        break;
                    case 503:
                        label += "7LD1CMC 503V - ";
                        break;
                    case 405:
                        label += "7LD1CNC 405D - ";
                        break;
                    case 405:
                        label += "7LD1CNC 405D - ";
                        break;
                    case 408:
                        label += "7LD1CNC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CNC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CNC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CNC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CNC 408R - ";
                        break;
                    case 408:
                        label += "7LD1CNC 408R - ";
                        break;
                    case 409:
                        label += "7LD1CNC 409Q - ";
                        break;
                    case 409:
                        label += "7LD1CNC 409Q - ";
                        break;
                    case 414:
                        label += "7LD1CNC 414Q - ";
                        break;
                    case 414:
                        label += "7LD1CNC 414Q - ";
                        break;
                    case 415:
                        label += "7LD1CNC 415T - ";
                        break;
                    case 415:
                        label += "7LD1CNC 415T - ";
                        break;
                    case 416:
                        label += "7LD1CNC 416G - ";
                        break;
                    case 503:
                        label += "7LD1CNC 503V - ";
                        break;
                    case 503:
                        label += "7LD1CNC 503V - ";
                        break;
                    case 505:
                        label += "7LD1CNC 505Y - ";
                        break;
                    case 505:
                        label += "7LD1CNC 505Y - ";
                        break;
                    case 505:
                        label += "7LD1CNC 505Y - ";
                        break;
                    case 505:
                        label += "7LD1CNC 505Y - ";
                        break;}
                switch (labely){
                    case 128:
                        label += "P 128Y\n";
                        break;
                    case 76:
                        label += "P 76N\n";
                        break;
                    case 76:
                        label += "P 76N\n";
                        break;
                    case 76:
                        label += "P 76N\n";
                        break;
                    case 128:
                        label += "P 128Y\n";
                        break;
                    case 128:
                        label += "P 128Y\n";
                        break;
                    case 126:
                        label += "P 126S\n";
                        break;
                    case 131:
                        label += "P 131L\n";
                        break;
                    case 126:
                        label += "P 126S\n";
                        break;
                    case 126:
                        label += "P 126S\n";
                        break;
                    case 126:
                        label += "P 126S\n";
                        break;
                    case 126:
                        label += "P 126S\n";
                        break;
                    case 50:
                        label += "O 50Y\n";
                        break;
                    case 117:
                        label += "O 117Y\n";
                        break;
                    case 50:
                        label += "O 50Y\n";
                        break;
                    case 51:
                        label += "O 51S\n";
                        break;
                    case 20:
                        label += "O 20D\n";
                        break;
                    case 120:
                        label += "O 120P\n";
                        break;
                    case 128:
                        label += "H 128Y\n";
                        break;
                    case 76:
                        label += "H 76N\n";
                        break;
                    case 130:
                        label += "H 130L\n";
                        break;
                    case 131:
                        label += "H 131L\n";
                        break;
                    case 128:
                        label += "H 128Y\n";
                        break;
                    case 128:
                        label += "H 128Y\n";
                        break;
                    case 128:
                        label += "H 128Y\n";
                        break;
                    case 128:
                        label += "H 128Y\n";
                        break;
                    case 125:
                        label += "H 125W\n";
                        break;
                    case 125:
                        label += "H 125W\n";
                        break;
                    case 128:
                        label += "H 128Y\n";
                        break;
                    case 126:
                        label += "H 126S\n";
                        break;
                    case 126:
                        label += "H 126S\n";
                        break;
                    case 126:
                        label += "H 126S\n";
                        break;
                    case 131:
                        label += "H 131L\n";
                        break;
                    case 131:
                        label += "H 131L\n";
                        break;
                    case 81:
                        label += "H 81Q\n";
                        break;
                    case 81:
                        label += "H 81Q\n";
                        break;
                    case 119:
                        label += "L 119L\n";
                        break;
                    case 119:
                        label += "L 119L\n";
                        break;
                    case 120:
                        label += "L 120P\n";
                        break;
                    case 35:
                        label += "N 35G\n";
                        break;
                    case 35:
                        label += "N 35G\n";
                        break;
                    case 34:
                        label += "N 34L\n";
                        break;
                    case 105:
                        label += "N 105A\n";
                        break;
                    case 105:
                        label += "N 105A\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 76:
                        label += "M 76N\n";
                        break;
                    case 76:
                        label += "M 76N\n";
                        break;
                    case 76:
                        label += "M 76N\n";
                        break;
                    case 130:
                        label += "M 130L\n";
                        break;
                    case 131:
                        label += "M 131L\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 128:
                        label += "M 128Y\n";
                        break;
                    case 125:
                        label += "M 125W\n";
                        break;
                    case 125:
                        label += "M 125W\n";
                        break;
                    case 126:
                        label += "M 126S\n";
                        break;
                    case 126:
                        label += "M 126S\n";
                        break;
                    case 131:
                        label += "M 131L\n";
                        break;
                    case 131:
                        label += "M 131L\n";
                        break;
                    case 131:
                        label += "M 131L\n";
                        break;
                    case 125:
                        label += "M 125W\n";
                        break;
                    case 125:
                        label += "M 125W\n";
                        break;
                    case 78:
                        label += "M 78I\n";
                        break;
                    case 78:
                        label += "M 78I\n";
                        break;
                    case 78:
                        label += "M 78I\n";
                        break;
                    case 81:
                        label += "M 81Q\n";
                        break;
                    case 118:
                        label += "N 118S\n";
                        break;
                    case 118:
                        label += "N 118S\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 117:
                        label += "N 117Y\n";
                        break;
                    case 117:
                        label += "N 117Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 50:
                        label += "N 50Y\n";
                        break;
                    case 51:
                        label += "N 51S\n";
                        break;
                    case 52:
                        label += "N 52S\n";
                        break;
                    case 51:
                        label += "N 51S\n";
                        break;
                    case 119:
                        label += "N 119L\n";
                        break;
                    case 119:
                        label += "N 119L\n";
                        break;
                    case 20:
                        label += "N 20D\n";
                        break;
                    case 20:
                        label += "N 20D\n";
                        break;
                    case 21:
                        label += "N 21I\n";
                        break;
                    case 120:
                        label += "N 120P\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});