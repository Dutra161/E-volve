
var myChart7K90 = 0;
var ctx = document.getElementById('7K90').getContext('2d');
if (window.myChart7K90 != 0){
    window.myChart7K90.destroy();
}
window.myChart7K90 = new Chart(ctx, {
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
            data: [{x: 449, y: 26},
                {x: 449, y: 26},
                {x: 449, y: 27},
                {x: 449, y: 73},
                {x: 484, y: 56},
                {x: 484, y: 56},
                {x: 493, y: 31},
                {x: 494, y: 31},
                {x: 494, y: 31},
                {x: 494, y: 73},
                {x: 449, y: 26},
                {x: 449, y: 26},
                {x: 449, y: 27},
                {x: 449, y: 73},
                {x: 484, y: 56},
                {x: 484, y: 56},
                {x: 493, y: 31},
                {x: 494, y: 31},
                {x: 494, y: 31},
                {x: 449, y: 26},
                {x: 449, y: 26},
                {x: 449, y: 27},
                {x: 449, y: 73},
                {x: 484, y: 56},
                {x: 484, y: 56},
                {x: 494, y: 31},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 30},
                {x: 486, y: 91},
                {x: 486, y: 30},
                {x: 486, y: 91},
                {x: 486, y: 30},
                {x: 486, y: 91},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 28},
                {x: 449, y: 28},
                {x: 449, y: 28},
                {x: 449, y: 28},
                {x: 449, y: 28},
                {x: 449, y: 28},
                {x: 455, y: 99},
                {x: 455, y: 99},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 486, y: 30},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 486, y: 91},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 486, y: 30},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 91},
                {x: 449, y: 28},
                {x: 449, y: 28},
                {x: 449, y: 28},
                {x: 449, y: 28},
                {x: 449, y: 28},
                {x: 449, y: 28},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 484, y: 52},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 32},
                {x: 486, y: 91},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7K90 Superpose"],
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
                    case 449:
                        label += "7K90AMA 449Y - ";
                        break;
                    case 449:
                        label += "7K90AMA 449Y - ";
                        break;
                    case 449:
                        label += "7K90AMA 449Y - ";
                        break;
                    case 449:
                        label += "7K90AMA 449Y - ";
                        break;
                    case 449:
                        label += "7K90AMA 449Y - ";
                        break;
                    case 449:
                        label += "7K90AMA 449Y - ";
                        break;
                    case 449:
                        label += "7K90AMA 449Y - ";
                        break;
                    case 449:
                        label += "7K90AMA 449Y - ";
                        break;
                    case 449:
                        label += "7K90AMA 449Y - ";
                        break;
                    case 449:
                        label += "7K90AMA 449Y - ";
                        break;
                    case 455:
                        label += "7K90AMA 455L - ";
                        break;
                    case 455:
                        label += "7K90AMA 455L - ";
                        break;
                    case 484:
                        label += "7K90AMA 484E - ";
                        break;
                    case 484:
                        label += "7K90AMA 484E - ";
                        break;
                    case 484:
                        label += "7K90AMA 484E - ";
                        break;
                    case 484:
                        label += "7K90AMA 484E - ";
                        break;
                    case 484:
                        label += "7K90AMA 484E - ";
                        break;
                    case 484:
                        label += "7K90AMA 484E - ";
                        break;
                    case 484:
                        label += "7K90AMA 484E - ";
                        break;
                    case 493:
                        label += "7K90AMA 493Q - ";
                        break;
                    case 494:
                        label += "7K90AMA 494S - ";
                        break;
                    case 494:
                        label += "7K90AMA 494S - ";
                        break;
                    case 494:
                        label += "7K90AMA 494S - ";
                        break;
                    case 486:
                        label += "7K90ANA 486F - ";
                        break;
                    case 486:
                        label += "7K90ANA 486F - ";
                        break;
                    case 486:
                        label += "7K90ANA 486F - ";
                        break;
                    case 486:
                        label += "7K90ANA 486F - ";
                        break;
                    case 486:
                        label += "7K90ANA 486F - ";
                        break;
                    case 486:
                        label += "7K90ANA 486F - ";
                        break;
                    case 486:
                        label += "7K90ANA 486F - ";
                        break;
                    case 486:
                        label += "7K90ANA 486F - ";
                        break;
                    case 486:
                        label += "7K90ANA 486F - ";
                        break;
                    case 486:
                        label += "7K90ANA 486F - ";
                        break;
                    case 486:
                        label += "7K90ANA 486F - ";
                        break;
                    case 449:
                        label += "7K90BHB 449Y - ";
                        break;
                    case 449:
                        label += "7K90BHB 449Y - ";
                        break;
                    case 449:
                        label += "7K90BHB 449Y - ";
                        break;
                    case 449:
                        label += "7K90BHB 449Y - ";
                        break;
                    case 484:
                        label += "7K90BHB 484E - ";
                        break;
                    case 484:
                        label += "7K90BHB 484E - ";
                        break;
                    case 484:
                        label += "7K90BHB 484E - ";
                        break;
                    case 484:
                        label += "7K90BHB 484E - ";
                        break;
                    case 484:
                        label += "7K90BHB 484E - ";
                        break;
                    case 484:
                        label += "7K90BHB 484E - ";
                        break;
                    case 493:
                        label += "7K90BHB 493Q - ";
                        break;
                    case 494:
                        label += "7K90BHB 494S - ";
                        break;
                    case 494:
                        label += "7K90BHB 494S - ";
                        break;
                    case 486:
                        label += "7K90BLB 486F - ";
                        break;
                    case 486:
                        label += "7K90BLB 486F - ";
                        break;
                    case 486:
                        label += "7K90BLB 486F - ";
                        break;
                    case 486:
                        label += "7K90BLB 486F - ";
                        break;
                    case 486:
                        label += "7K90BLB 486F - ";
                        break;
                    case 486:
                        label += "7K90BLB 486F - ";
                        break;
                    case 486:
                        label += "7K90BLB 486F - ";
                        break;
                    case 449:
                        label += "7K90COC 449Y - ";
                        break;
                    case 449:
                        label += "7K90COC 449Y - ";
                        break;
                    case 449:
                        label += "7K90COC 449Y - ";
                        break;
                    case 449:
                        label += "7K90COC 449Y - ";
                        break;
                    case 449:
                        label += "7K90COC 449Y - ";
                        break;
                    case 449:
                        label += "7K90COC 449Y - ";
                        break;
                    case 449:
                        label += "7K90COC 449Y - ";
                        break;
                    case 449:
                        label += "7K90COC 449Y - ";
                        break;
                    case 449:
                        label += "7K90COC 449Y - ";
                        break;
                    case 449:
                        label += "7K90COC 449Y - ";
                        break;
                    case 484:
                        label += "7K90COC 484E - ";
                        break;
                    case 484:
                        label += "7K90COC 484E - ";
                        break;
                    case 484:
                        label += "7K90COC 484E - ";
                        break;
                    case 484:
                        label += "7K90COC 484E - ";
                        break;
                    case 484:
                        label += "7K90COC 484E - ";
                        break;
                    case 484:
                        label += "7K90COC 484E - ";
                        break;
                    case 494:
                        label += "7K90COC 494S - ";
                        break;
                    case 486:
                        label += "7K90CPC 486F - ";
                        break;
                    case 486:
                        label += "7K90CPC 486F - ";
                        break;
                    case 486:
                        label += "7K90CPC 486F - ";
                        break;
                    case 486:
                        label += "7K90CPC 486F - ";
                        break;
                    case 486:
                        label += "7K90CPC 486F - ";
                        break;
                    case 486:
                        label += "7K90CPC 486F - ";
                        break;
                    case 486:
                        label += "7K90CPC 486F - ";
                        break;}
                switch (labely){
                    case 26:
                        label += "M 26G\n";
                        break;
                    case 26:
                        label += "M 26G\n";
                        break;
                    case 27:
                        label += "M 27F\n";
                        break;
                    case 28:
                        label += "M 28T\n";
                        break;
                    case 28:
                        label += "M 28T\n";
                        break;
                    case 28:
                        label += "M 28T\n";
                        break;
                    case 28:
                        label += "M 28T\n";
                        break;
                    case 28:
                        label += "M 28T\n";
                        break;
                    case 28:
                        label += "M 28T\n";
                        break;
                    case 73:
                        label += "M 73K\n";
                        break;
                    case 99:
                        label += "M 99V\n";
                        break;
                    case 99:
                        label += "M 99V\n";
                        break;
                    case 52:
                        label += "M 52Y\n";
                        break;
                    case 52:
                        label += "M 52Y\n";
                        break;
                    case 52:
                        label += "M 52Y\n";
                        break;
                    case 52:
                        label += "M 52Y\n";
                        break;
                    case 52:
                        label += "M 52Y\n";
                        break;
                    case 56:
                        label += "M 56S\n";
                        break;
                    case 56:
                        label += "M 56S\n";
                        break;
                    case 31:
                        label += "M 31N\n";
                        break;
                    case 31:
                        label += "M 31N\n";
                        break;
                    case 31:
                        label += "M 31N\n";
                        break;
                    case 73:
                        label += "M 73K\n";
                        break;
                    case 30:
                        label += "N 30Y\n";
                        break;
                    case 30:
                        label += "N 30Y\n";
                        break;
                    case 32:
                        label += "N 32Y\n";
                        break;
                    case 32:
                        label += "N 32Y\n";
                        break;
                    case 32:
                        label += "N 32Y\n";
                        break;
                    case 91:
                        label += "N 91Y\n";
                        break;
                    case 91:
                        label += "N 91Y\n";
                        break;
                    case 91:
                        label += "N 91Y\n";
                        break;
                    case 91:
                        label += "N 91Y\n";
                        break;
                    case 91:
                        label += "N 91Y\n";
                        break;
                    case 91:
                        label += "N 91Y\n";
                        break;
                    case 26:
                        label += "H 26G\n";
                        break;
                    case 26:
                        label += "H 26G\n";
                        break;
                    case 27:
                        label += "H 27F\n";
                        break;
                    case 73:
                        label += "H 73K\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 56:
                        label += "H 56S\n";
                        break;
                    case 56:
                        label += "H 56S\n";
                        break;
                    case 31:
                        label += "H 31N\n";
                        break;
                    case 31:
                        label += "H 31N\n";
                        break;
                    case 31:
                        label += "H 31N\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 30:
                        label += "L 30Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 91:
                        label += "L 91Y\n";
                        break;
                    case 91:
                        label += "L 91Y\n";
                        break;
                    case 26:
                        label += "O 26G\n";
                        break;
                    case 26:
                        label += "O 26G\n";
                        break;
                    case 27:
                        label += "O 27F\n";
                        break;
                    case 28:
                        label += "O 28T\n";
                        break;
                    case 28:
                        label += "O 28T\n";
                        break;
                    case 28:
                        label += "O 28T\n";
                        break;
                    case 28:
                        label += "O 28T\n";
                        break;
                    case 28:
                        label += "O 28T\n";
                        break;
                    case 28:
                        label += "O 28T\n";
                        break;
                    case 73:
                        label += "O 73K\n";
                        break;
                    case 52:
                        label += "O 52Y\n";
                        break;
                    case 52:
                        label += "O 52Y\n";
                        break;
                    case 52:
                        label += "O 52Y\n";
                        break;
                    case 52:
                        label += "O 52Y\n";
                        break;
                    case 56:
                        label += "O 56S\n";
                        break;
                    case 56:
                        label += "O 56S\n";
                        break;
                    case 31:
                        label += "O 31N\n";
                        break;
                    case 30:
                        label += "P 30Y\n";
                        break;
                    case 32:
                        label += "P 32Y\n";
                        break;
                    case 32:
                        label += "P 32Y\n";
                        break;
                    case 32:
                        label += "P 32Y\n";
                        break;
                    case 32:
                        label += "P 32Y\n";
                        break;
                    case 91:
                        label += "P 91Y\n";
                        break;
                    case 91:
                        label += "P 91Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});