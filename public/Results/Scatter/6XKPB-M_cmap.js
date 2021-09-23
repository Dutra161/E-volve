
var myChart6XKPB_M = 0;
var ctx = document.getElementById('6XKPB-M').getContext('2d');
if (window.myChart6XKPB_M != 0){
    window.myChart6XKPB_M.destroy();
}
window.myChart6XKPB_M = new Chart(ctx, {
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
                {x: 444, y: 31},
                {x: 444, y: 31},
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
            data: [{x: 346, y: 31},
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
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [],
            backgroundColor: ['rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6XKPB-M"],
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