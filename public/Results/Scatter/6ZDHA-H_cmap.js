
var myChart6ZDHA_H = 0;
var ctx = document.getElementById('6ZDHA-H').getContext('2d');
if (window.myChart6ZDHA_H != 0){
    window.myChart6ZDHA_H.destroy();
}
window.myChart6ZDHA_H = new Chart(ctx, {
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
            data: [{x: 386, y: 33},
                {x: 386, y: 99},
                {x: 386, y: 99},
                {x: 529, y: 54},
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
            data: [{x: 383, y: 104},
                {x: 383, y: 104},
                {x: 383, y: 106},
                {x: 385, y: 33},
                {x: 385, y: 106},
                {x: 385, y: 106},
                {x: 386, y: 99},
                {x: 386, y: 99},
                {x: 386, y: 103},
                {x: 386, y: 105},
                {x: 389, y: 53},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 377, y: 59},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 377, y: 59},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 385, y: 50},
                {x: 385, y: 57},
                {x: 385, y: 59},
                {x: 385, y: 59},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 517, y: 104},
                {x: 517, y: 104},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6ZDHA-H"],
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
                    case 377:
                        label += "6ZDHAHA 377F - ";
                        break;
                    case 377:
                        label += "6ZDHAHA 377F - ";
                        break;
                    case 382:
                        label += "6ZDHAHA 382V - ";
                        break;
                    case 382:
                        label += "6ZDHAHA 382V - ";
                        break;
                    case 383:
                        label += "6ZDHAHA 383S - ";
                        break;
                    case 383:
                        label += "6ZDHAHA 383S - ";
                        break;
                    case 383:
                        label += "6ZDHAHA 383S - ";
                        break;
                    case 384:
                        label += "6ZDHAHA 384P - ";
                        break;
                    case 384:
                        label += "6ZDHAHA 384P - ";
                        break;
                    case 384:
                        label += "6ZDHAHA 384P - ";
                        break;
                    case 384:
                        label += "6ZDHAHA 384P - ";
                        break;
                    case 385:
                        label += "6ZDHAHA 385T - ";
                        break;
                    case 385:
                        label += "6ZDHAHA 385T - ";
                        break;
                    case 385:
                        label += "6ZDHAHA 385T - ";
                        break;
                    case 385:
                        label += "6ZDHAHA 385T - ";
                        break;
                    case 385:
                        label += "6ZDHAHA 385T - ";
                        break;
                    case 385:
                        label += "6ZDHAHA 385T - ";
                        break;
                    case 385:
                        label += "6ZDHAHA 385T - ";
                        break;
                    case 386:
                        label += "6ZDHAHA 386K - ";
                        break;
                    case 386:
                        label += "6ZDHAHA 386K - ";
                        break;
                    case 386:
                        label += "6ZDHAHA 386K - ";
                        break;
                    case 386:
                        label += "6ZDHAHA 386K - ";
                        break;
                    case 386:
                        label += "6ZDHAHA 386K - ";
                        break;
                    case 389:
                        label += "6ZDHAHA 389D - ";
                        break;
                    case 390:
                        label += "6ZDHAHA 390L - ";
                        break;
                    case 390:
                        label += "6ZDHAHA 390L - ";
                        break;
                    case 390:
                        label += "6ZDHAHA 390L - ";
                        break;
                    case 390:
                        label += "6ZDHAHA 390L - ";
                        break;
                    case 390:
                        label += "6ZDHAHA 390L - ";
                        break;
                    case 392:
                        label += "6ZDHAHA 392F - ";
                        break;
                    case 392:
                        label += "6ZDHAHA 392F - ";
                        break;
                    case 392:
                        label += "6ZDHAHA 392F - ";
                        break;
                    case 392:
                        label += "6ZDHAHA 392F - ";
                        break;
                    case 392:
                        label += "6ZDHAHA 392F - ";
                        break;
                    case 517:
                        label += "6ZDHAHA 517L - ";
                        break;
                    case 517:
                        label += "6ZDHAHA 517L - ";
                        break;
                    case 529:
                        label += "6ZDHAHA 529K - ";
                        break;}
                switch (labely){
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 106:
                        label += "H 106Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 33:
                        label += "H 33D\n";
                        break;
                    case 50:
                        label += "H 50V\n";
                        break;
                    case 57:
                        label += "H 57N\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 106:
                        label += "H 106Y\n";
                        break;
                    case 106:
                        label += "H 106Y\n";
                        break;
                    case 33:
                        label += "H 33D\n";
                        break;
                    case 99:
                        label += "H 99D\n";
                        break;
                    case 99:
                        label += "H 99D\n";
                        break;
                    case 103:
                        label += "H 103L\n";
                        break;
                    case 105:
                        label += "H 105V\n";
                        break;
                    case 53:
                        label += "H 53Y\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 54:
                        label += "H 54D\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});