
var myChart7JV2A_H = 0;
var ctx = document.getElementById('7JV2A-H').getContext('2d');
if (window.myChart7JV2A_H != 0){
    window.myChart7JV2A_H.destroy();
}
window.myChart7JV2A_H = new Chart(ctx, {
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
            data: [{x: 481, y: 28},
                {x: 484, y: 100},
                {x: 486, y: 100},
                {x: 482, y: 109},
                {x: 484, y: 109},
                {x: 484, y: 109},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 102},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 483, y: 2},
                {x: 483, y: 2},
                {x: 483, y: 2},
                {x: 483, y: 27},
                {x: 483, y: 27},
                {x: 483, y: 27},
                {x: 483, y: 27},
                {x: 483, y: 32},
                {x: 483, y: 32},
                {x: 483, y: 32},
                {x: 483, y: 32},
                {x: 483, y: 98},
                {x: 483, y: 98},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 483, y: 109},
                {x: 483, y: 109},
                {x: 484, y: 109},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7JV2A-H"],
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
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 481:
                        label += "7JV2AHA 481N - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 484:
                        label += "7JV2AHA 484E - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 486:
                        label += "7JV2AHA 486F - ";
                        break;
                    case 482:
                        label += "7JV2AHA 482G - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 483:
                        label += "7JV2AHA 483V - ";
                        break;
                    case 484:
                        label += "7JV2AHA 484E - ";
                        break;
                    case 484:
                        label += "7JV2AHA 484E - ";
                        break;
                    case 484:
                        label += "7JV2AHA 484E - ";
                        break;}
                switch (labely){
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 27:
                        label += "H 27F\n";
                        break;
                    case 27:
                        label += "H 27F\n";
                        break;
                    case 27:
                        label += "H 27F\n";
                        break;
                    case 27:
                        label += "H 27F\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 98:
                        label += "H 98L\n";
                        break;
                    case 98:
                        label += "H 98L\n";
                        break;
                    case 100:
                        label += "H 100S\n";
                        break;
                    case 100:
                        label += "H 100S\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});