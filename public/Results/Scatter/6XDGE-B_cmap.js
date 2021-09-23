
var myChart6XDGE_B = 0;
var ctx = document.getElementById('6XDGE-B').getContext('2d');
if (window.myChart6XDGE_B != 0){
    window.myChart6XDGE_B.destroy();
}
window.myChart6XDGE_B = new Chart(ctx, {
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
            data: [{x: 417, y: 31},
                {x: 417, y: 31},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 417, y: 31},
                {x: 417, y: 102},
                {x: 453, y: 31},
                {x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 56},
                {x: 485, y: 33},
                {x: 486, y: 59},
                {x: 486, y: 100},
                {x: 488, y: 33},
                {x: 489, y: 33},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 50},
                {x: 486, y: 59},
                {x: 489, y: 33},
                {x: 489, y: 53},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 455, y: 31},
                {x: 455, y: 31},
                {x: 455, y: 31},
                {x: 475, y: 104},
                {x: 484, y: 57},
                {x: 486, y: 50},
                {x: 486, y: 50},
                {x: 486, y: 50},
                {x: 486, y: 50},
                {x: 486, y: 59},
                {x: 486, y: 59},
                {x: 486, y: 59},
                {x: 486, y: 59},
                {x: 489, y: 33},
                {x: 489, y: 33},
                {x: 489, y: 33},
                {x: 489, y: 33},
                {x: 489, y: 33},
                {x: 489, y: 33},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                {x: 489, y: 53},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6XDGE-B"],
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
                        label += "6XDGEBE 417K - ";
                        break;
                    case 417:
                        label += "6XDGEBE 417K - ";
                        break;
                    case 417:
                        label += "6XDGEBE 417K - ";
                        break;
                    case 453:
                        label += "6XDGEBE 453Y - ";
                        break;
                    case 455:
                        label += "6XDGEBE 455L - ";
                        break;
                    case 455:
                        label += "6XDGEBE 455L - ";
                        break;
                    case 455:
                        label += "6XDGEBE 455L - ";
                        break;
                    case 475:
                        label += "6XDGEBE 475A - ";
                        break;
                    case 484:
                        label += "6XDGEBE 484E - ";
                        break;
                    case 484:
                        label += "6XDGEBE 484E - ";
                        break;
                    case 484:
                        label += "6XDGEBE 484E - ";
                        break;
                    case 484:
                        label += "6XDGEBE 484E - ";
                        break;
                    case 485:
                        label += "6XDGEBE 485G - ";
                        break;
                    case 486:
                        label += "6XDGEBE 486F - ";
                        break;
                    case 486:
                        label += "6XDGEBE 486F - ";
                        break;
                    case 486:
                        label += "6XDGEBE 486F - ";
                        break;
                    case 486:
                        label += "6XDGEBE 486F - ";
                        break;
                    case 486:
                        label += "6XDGEBE 486F - ";
                        break;
                    case 486:
                        label += "6XDGEBE 486F - ";
                        break;
                    case 486:
                        label += "6XDGEBE 486F - ";
                        break;
                    case 486:
                        label += "6XDGEBE 486F - ";
                        break;
                    case 486:
                        label += "6XDGEBE 486F - ";
                        break;
                    case 486:
                        label += "6XDGEBE 486F - ";
                        break;
                    case 486:
                        label += "6XDGEBE 486F - ";
                        break;
                    case 486:
                        label += "6XDGEBE 486F - ";
                        break;
                    case 488:
                        label += "6XDGEBE 488C - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;
                    case 489:
                        label += "6XDGEBE 489Y - ";
                        break;}
                switch (labely){
                    case 31:
                        label += "B 31D\n";
                        break;
                    case 31:
                        label += "B 31D\n";
                        break;
                    case 102:
                        label += "B 102T\n";
                        break;
                    case 31:
                        label += "B 31D\n";
                        break;
                    case 31:
                        label += "B 31D\n";
                        break;
                    case 31:
                        label += "B 31D\n";
                        break;
                    case 31:
                        label += "B 31D\n";
                        break;
                    case 104:
                        label += "B 104M\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 56:
                        label += "B 56S\n";
                        break;
                    case 57:
                        label += "B 57T\n";
                        break;
                    case 33:
                        label += "B 33Y\n";
                        break;
                    case 50:
                        label += "B 50Y\n";
                        break;
                    case 50:
                        label += "B 50Y\n";
                        break;
                    case 50:
                        label += "B 50Y\n";
                        break;
                    case 50:
                        label += "B 50Y\n";
                        break;
                    case 50:
                        label += "B 50Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 100:
                        label += "B 100R\n";
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
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;
                    case 53:
                        label += "B 53Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});