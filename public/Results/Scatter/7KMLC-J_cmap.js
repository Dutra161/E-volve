
var myChart7KMLC_J = 0;
var ctx = document.getElementById('7KMLC-J').getContext('2d');
if (window.myChart7KMLC_J != 0){
    window.myChart7KMLC_J.destroy();
}
window.myChart7KMLC_J = new Chart(ctx, {
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
            data: [{x: 489, y: 110},
                {x: 493, y: 109},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 456, y: 113},
                {x: 486, y: 110},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 455, y: 113},
                {x: 455, y: 113},
                {x: 456, y: 113},
                {x: 456, y: 113},
                {x: 456, y: 113},
                {x: 456, y: 113},
                {x: 484, y: 110},
                {x: 484, y: 110},
                {x: 486, y: 57},
                {x: 486, y: 57},
                {x: 486, y: 64},
                {x: 486, y: 64},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 489, y: 110},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KMLC-J"],
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
                    case 455:
                        label += "7KMLCJC 455L - ";
                        break;
                    case 455:
                        label += "7KMLCJC 455L - ";
                        break;
                    case 456:
                        label += "7KMLCJC 456F - ";
                        break;
                    case 456:
                        label += "7KMLCJC 456F - ";
                        break;
                    case 456:
                        label += "7KMLCJC 456F - ";
                        break;
                    case 456:
                        label += "7KMLCJC 456F - ";
                        break;
                    case 456:
                        label += "7KMLCJC 456F - ";
                        break;
                    case 484:
                        label += "7KMLCJC 484E - ";
                        break;
                    case 484:
                        label += "7KMLCJC 484E - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 486:
                        label += "7KMLCJC 486F - ";
                        break;
                    case 489:
                        label += "7KMLCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KMLCJC 489Y - ";
                        break;
                    case 493:
                        label += "7KMLCJC 493Q - ";
                        break;}
                switch (labely){
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 57:
                        label += "J 57Y\n";
                        break;
                    case 57:
                        label += "J 57Y\n";
                        break;
                    case 64:
                        label += "J 64A\n";
                        break;
                    case 64:
                        label += "J 64A\n";
                        break;
                    case 66:
                        label += "J 66A\n";
                        break;
                    case 66:
                        label += "J 66A\n";
                        break;
                    case 66:
                        label += "J 66A\n";
                        break;
                    case 66:
                        label += "J 66A\n";
                        break;
                    case 66:
                        label += "J 66A\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});