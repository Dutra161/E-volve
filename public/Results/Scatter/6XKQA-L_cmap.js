
var myChart6XKQA_L = 0;
var ctx = document.getElementById('6XKQA-L').getContext('2d');
if (window.myChart6XKQA_L != 0){
    window.myChart6XKQA_L.destroy();
}
window.myChart6XKQA_L = new Chart(ctx, {
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
            data: [{x: 446, y: 67},
                {x: 446, y: 68},
                {x: 449, y: 68},
                {x: 486, y: 49},
                {x: 493, y: 29},
                {x: 493, y: 31},
                {x: 493, y: 31},
                {x: 498, y: 69},
                {x: 498, y: 69},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 449, y: 31},
                {x: 486, y: 49},
                {x: 489, y: 32},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 455, y: 30},
                {x: 455, y: 32},
                {x: 455, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 486, y: 46},
                {x: 486, y: 46},
                {x: 486, y: 46},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 486, y: 49},
                {x: 489, y: 32},
                {x: 489, y: 32},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6XKQA-L"],
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
                    case 446:
                        label += "6XKQALA 446G - ";
                        break;
                    case 446:
                        label += "6XKQALA 446G - ";
                        break;
                    case 449:
                        label += "6XKQALA 449Y - ";
                        break;
                    case 449:
                        label += "6XKQALA 449Y - ";
                        break;
                    case 455:
                        label += "6XKQALA 455L - ";
                        break;
                    case 455:
                        label += "6XKQALA 455L - ";
                        break;
                    case 455:
                        label += "6XKQALA 455L - ";
                        break;
                    case 456:
                        label += "6XKQALA 456F - ";
                        break;
                    case 456:
                        label += "6XKQALA 456F - ";
                        break;
                    case 456:
                        label += "6XKQALA 456F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 486:
                        label += "6XKQALA 486F - ";
                        break;
                    case 489:
                        label += "6XKQALA 489Y - ";
                        break;
                    case 489:
                        label += "6XKQALA 489Y - ";
                        break;
                    case 489:
                        label += "6XKQALA 489Y - ";
                        break;
                    case 493:
                        label += "6XKQALA 493Q - ";
                        break;
                    case 493:
                        label += "6XKQALA 493Q - ";
                        break;
                    case 493:
                        label += "6XKQALA 493Q - ";
                        break;
                    case 498:
                        label += "6XKQALA 498Q - ";
                        break;
                    case 498:
                        label += "6XKQALA 498Q - ";
                        break;}
                switch (labely){
                    case 67:
                        label += "L 67S\n";
                        break;
                    case 68:
                        label += "L 68G\n";
                        break;
                    case 31:
                        label += "L 31H\n";
                        break;
                    case 68:
                        label += "L 68G\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 32:
                        label += "L 32F\n";
                        break;
                    case 32:
                        label += "L 32F\n";
                        break;
                    case 32:
                        label += "L 32F\n";
                        break;
                    case 32:
                        label += "L 32F\n";
                        break;
                    case 32:
                        label += "L 32F\n";
                        break;
                    case 46:
                        label += "L 46V\n";
                        break;
                    case 46:
                        label += "L 46V\n";
                        break;
                    case 46:
                        label += "L 46V\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 49:
                        label += "L 49Y\n";
                        break;
                    case 32:
                        label += "L 32F\n";
                        break;
                    case 32:
                        label += "L 32F\n";
                        break;
                    case 32:
                        label += "L 32F\n";
                        break;
                    case 29:
                        label += "L 29A\n";
                        break;
                    case 31:
                        label += "L 31H\n";
                        break;
                    case 31:
                        label += "L 31H\n";
                        break;
                    case 69:
                        label += "L 69N\n";
                        break;
                    case 69:
                        label += "L 69N\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});