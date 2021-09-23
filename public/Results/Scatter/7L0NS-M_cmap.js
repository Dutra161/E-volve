
var myChart7L0NS_M = 0;
var ctx = document.getElementById('7L0NS-M').getContext('2d');
if (window.myChart7L0NS_M != 0){
    window.myChart7L0NS_M.destroy();
}
window.myChart7L0NS_M = new Chart(ctx, {
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
                {x: 386, y: 33},
                {x: 378, y: 61},
                {x: 386, y: 99},
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
            data: [{x: 385, y: 33},
                {x: 369, y: 56},
                {x: 370, y: 57},
                {x: 370, y: 57},
                {x: 370, y: 57},
                {x: 370, y: 57},
                {x: 384, y: 58},
                {x: 385, y: 58},
                {x: 375, y: 64},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 385, y: 50},
                {x: 369, y: 54},
                {x: 369, y: 54},
                {x: 369, y: 56},
                {x: 369, y: 56},
                {x: 369, y: 56},
                {x: 369, y: 56},
                {x: 369, y: 56},
                {x: 369, y: 56},
                {x: 377, y: 58},
                {x: 377, y: 58},
                {x: 384, y: 58},
                {x: 384, y: 58},
                {x: 384, y: 58},
                {x: 384, y: 58},
                {x: 385, y: 58},
                {x: 385, y: 58},
                {x: 382, y: 103},
                {x: 382, y: 103},
                {x: 390, y: 103},
                {x: 390, y: 103},
                {x: 390, y: 103},
                {x: 390, y: 103},
                {x: 386, y: 105},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7L0NS-M"],
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
                    case 385:
                        label += "7L0NSMS 385T - ";
                        break;
                    case 386:
                        label += "7L0NSMS 386K - ";
                        break;
                    case 386:
                        label += "7L0NSMS 386K - ";
                        break;
                    case 385:
                        label += "7L0NSMS 385T - ";
                        break;
                    case 369:
                        label += "7L0NSMS 369Y - ";
                        break;
                    case 369:
                        label += "7L0NSMS 369Y - ";
                        break;
                    case 369:
                        label += "7L0NSMS 369Y - ";
                        break;
                    case 369:
                        label += "7L0NSMS 369Y - ";
                        break;
                    case 369:
                        label += "7L0NSMS 369Y - ";
                        break;
                    case 369:
                        label += "7L0NSMS 369Y - ";
                        break;
                    case 369:
                        label += "7L0NSMS 369Y - ";
                        break;
                    case 369:
                        label += "7L0NSMS 369Y - ";
                        break;
                    case 369:
                        label += "7L0NSMS 369Y - ";
                        break;
                    case 370:
                        label += "7L0NSMS 370N - ";
                        break;
                    case 370:
                        label += "7L0NSMS 370N - ";
                        break;
                    case 370:
                        label += "7L0NSMS 370N - ";
                        break;
                    case 370:
                        label += "7L0NSMS 370N - ";
                        break;
                    case 377:
                        label += "7L0NSMS 377F - ";
                        break;
                    case 377:
                        label += "7L0NSMS 377F - ";
                        break;
                    case 384:
                        label += "7L0NSMS 384P - ";
                        break;
                    case 384:
                        label += "7L0NSMS 384P - ";
                        break;
                    case 384:
                        label += "7L0NSMS 384P - ";
                        break;
                    case 384:
                        label += "7L0NSMS 384P - ";
                        break;
                    case 384:
                        label += "7L0NSMS 384P - ";
                        break;
                    case 385:
                        label += "7L0NSMS 385T - ";
                        break;
                    case 385:
                        label += "7L0NSMS 385T - ";
                        break;
                    case 385:
                        label += "7L0NSMS 385T - ";
                        break;
                    case 378:
                        label += "7L0NSMS 378K - ";
                        break;
                    case 375:
                        label += "7L0NSMS 375S - ";
                        break;
                    case 386:
                        label += "7L0NSMS 386K - ";
                        break;
                    case 382:
                        label += "7L0NSMS 382V - ";
                        break;
                    case 382:
                        label += "7L0NSMS 382V - ";
                        break;
                    case 390:
                        label += "7L0NSMS 390L - ";
                        break;
                    case 390:
                        label += "7L0NSMS 390L - ";
                        break;
                    case 390:
                        label += "7L0NSMS 390L - ";
                        break;
                    case 390:
                        label += "7L0NSMS 390L - ";
                        break;
                    case 386:
                        label += "7L0NSMS 386K - ";
                        break;}
                switch (labely){
                    case 33:
                        label += "M 33D\n";
                        break;
                    case 33:
                        label += "M 33D\n";
                        break;
                    case 33:
                        label += "M 33D\n";
                        break;
                    case 50:
                        label += "M 50T\n";
                        break;
                    case 54:
                        label += "M 54A\n";
                        break;
                    case 54:
                        label += "M 54A\n";
                        break;
                    case 56:
                        label += "M 56D\n";
                        break;
                    case 56:
                        label += "M 56D\n";
                        break;
                    case 56:
                        label += "M 56D\n";
                        break;
                    case 56:
                        label += "M 56D\n";
                        break;
                    case 56:
                        label += "M 56D\n";
                        break;
                    case 56:
                        label += "M 56D\n";
                        break;
                    case 56:
                        label += "M 56D\n";
                        break;
                    case 57:
                        label += "M 57T\n";
                        break;
                    case 57:
                        label += "M 57T\n";
                        break;
                    case 57:
                        label += "M 57T\n";
                        break;
                    case 57:
                        label += "M 57T\n";
                        break;
                    case 58:
                        label += "M 58Y\n";
                        break;
                    case 58:
                        label += "M 58Y\n";
                        break;
                    case 58:
                        label += "M 58Y\n";
                        break;
                    case 58:
                        label += "M 58Y\n";
                        break;
                    case 58:
                        label += "M 58Y\n";
                        break;
                    case 58:
                        label += "M 58Y\n";
                        break;
                    case 58:
                        label += "M 58Y\n";
                        break;
                    case 58:
                        label += "M 58Y\n";
                        break;
                    case 58:
                        label += "M 58Y\n";
                        break;
                    case 58:
                        label += "M 58Y\n";
                        break;
                    case 61:
                        label += "M 61D\n";
                        break;
                    case 64:
                        label += "M 64K\n";
                        break;
                    case 99:
                        label += "M 99D\n";
                        break;
                    case 103:
                        label += "M 103Y\n";
                        break;
                    case 103:
                        label += "M 103Y\n";
                        break;
                    case 103:
                        label += "M 103Y\n";
                        break;
                    case 103:
                        label += "M 103Y\n";
                        break;
                    case 103:
                        label += "M 103Y\n";
                        break;
                    case 103:
                        label += "M 103Y\n";
                        break;
                    case 105:
                        label += "M 105Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});