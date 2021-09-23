
var myChart6XDGE_C = 0;
var ctx = document.getElementById('6XDGE-C').getContext('2d');
if (window.myChart6XDGE_C != 0){
    window.myChart6XDGE_C.destroy();
}
window.myChart6XDGE_C = new Chart(ctx, {
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
            data: [{x: 444, y: 101},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 440, y: 103},
                {x: 444, y: 31},
                {x: 445, y: 52},
                {x: 446, y: 57},
                {x: 446, y: 59},
                {x: 448, y: 53},
                {x: 449, y: 57},
                {x: 498, y: 59},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 444, y: 53},
                {x: 444, y: 53},
                {x: 444, y: 53},
                {x: 444, y: 53},
                {x: 445, y: 33},
                {x: 445, y: 50},
                {x: 445, y: 50},
                {x: 445, y: 59},
                {x: 445, y: 59},
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
            text:["6XDGE-C"],
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
                    case 440:
                        label += "6XDGECE 440N - ";
                        break;
                    case 444:
                        label += "6XDGECE 444K - ";
                        break;
                    case 444:
                        label += "6XDGECE 444K - ";
                        break;
                    case 444:
                        label += "6XDGECE 444K - ";
                        break;
                    case 444:
                        label += "6XDGECE 444K - ";
                        break;
                    case 444:
                        label += "6XDGECE 444K - ";
                        break;
                    case 444:
                        label += "6XDGECE 444K - ";
                        break;
                    case 445:
                        label += "6XDGECE 445V - ";
                        break;
                    case 445:
                        label += "6XDGECE 445V - ";
                        break;
                    case 445:
                        label += "6XDGECE 445V - ";
                        break;
                    case 445:
                        label += "6XDGECE 445V - ";
                        break;
                    case 445:
                        label += "6XDGECE 445V - ";
                        break;
                    case 445:
                        label += "6XDGECE 445V - ";
                        break;
                    case 446:
                        label += "6XDGECE 446G - ";
                        break;
                    case 446:
                        label += "6XDGECE 446G - ";
                        break;
                    case 448:
                        label += "6XDGECE 448N - ";
                        break;
                    case 449:
                        label += "6XDGECE 449Y - ";
                        break;
                    case 498:
                        label += "6XDGECE 498Q - ";
                        break;}
                switch (labely){
                    case 103:
                        label += "C 103G\n";
                        break;
                    case 31:
                        label += "C 31N\n";
                        break;
                    case 53:
                        label += "C 53Y\n";
                        break;
                    case 53:
                        label += "C 53Y\n";
                        break;
                    case 53:
                        label += "C 53Y\n";
                        break;
                    case 53:
                        label += "C 53Y\n";
                        break;
                    case 101:
                        label += "C 101D\n";
                        break;
                    case 33:
                        label += "C 33A\n";
                        break;
                    case 50:
                        label += "C 50V\n";
                        break;
                    case 50:
                        label += "C 50V\n";
                        break;
                    case 52:
                        label += "C 52S\n";
                        break;
                    case 59:
                        label += "C 59Y\n";
                        break;
                    case 59:
                        label += "C 59Y\n";
                        break;
                    case 57:
                        label += "C 57N\n";
                        break;
                    case 59:
                        label += "C 59Y\n";
                        break;
                    case 53:
                        label += "C 53Y\n";
                        break;
                    case 57:
                        label += "C 57N\n";
                        break;
                    case 59:
                        label += "C 59Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});