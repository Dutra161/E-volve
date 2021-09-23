
var myChart7DPMF_H = 0;
var ctx = document.getElementById('7DPMF-H').getContext('2d');
if (window.myChart7DPMF_H != 0){
    window.myChart7DPMF_H.destroy();
}
window.myChart7DPMF_H = new Chart(ctx, {
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
            data: [{x: 357, y: 151},
                {x: 357, y: 151},
                {x: 357, y: 151},
                {x: 357, y: 151},
                {x: 466, y: 185},
                {x: 466, y: 185},
                {x: 466, y: 185},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 357, y: 190},
                {x: 357, y: 190},
                {x: 357, y: 190},
                {x: 357, y: 190},
                {x: 462, y: 145},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 354, y: 188},
                {x: 355, y: 151},
                {x: 355, y: 189},
                {x: 462, y: 147},
                {x: 464, y: 154},
                {x: 465, y: 156},
                {x: 466, y: 154},
                {x: 466, y: 155},
                {x: 466, y: 156},
                {x: 467, y: 156},
                {x: 467, y: 156},
                {x: 468, y: 156},
                {x: 477, y: 3},
                {x: 516, y: 152},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
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
            data: [{x: 353, y: 153},
                {x: 355, y: 151},
                {x: 396, y: 151},
                {x: 396, y: 152},
                {x: 462, y: 154},
                {x: 462, y: 154},
                {x: 465, y: 154},
                {x: 465, y: 154},
                {x: 465, y: 154},
                {x: 465, y: 154},
                {x: 465, y: 154},
                {x: 465, y: 154},
                {x: 468, y: 158},
                {x: 468, y: 158},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7DPMF-H"],
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
                    case 353:
                        label += "7DPMFHF 353W - ";
                        break;
                    case 354:
                        label += "7DPMFHF 354N - ";
                        break;
                    case 355:
                        label += "7DPMFHF 355R - ";
                        break;
                    case 355:
                        label += "7DPMFHF 355R - ";
                        break;
                    case 355:
                        label += "7DPMFHF 355R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 396:
                        label += "7DPMFHF 396Y - ";
                        break;
                    case 396:
                        label += "7DPMFHF 396Y - ";
                        break;
                    case 462:
                        label += "7DPMFHF 462K - ";
                        break;
                    case 462:
                        label += "7DPMFHF 462K - ";
                        break;
                    case 462:
                        label += "7DPMFHF 462K - ";
                        break;
                    case 462:
                        label += "7DPMFHF 462K - ";
                        break;
                    case 464:
                        label += "7DPMFHF 464F - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 466:
                        label += "7DPMFHF 466R - ";
                        break;
                    case 466:
                        label += "7DPMFHF 466R - ";
                        break;
                    case 466:
                        label += "7DPMFHF 466R - ";
                        break;
                    case 466:
                        label += "7DPMFHF 466R - ";
                        break;
                    case 466:
                        label += "7DPMFHF 466R - ";
                        break;
                    case 466:
                        label += "7DPMFHF 466R - ";
                        break;
                    case 467:
                        label += "7DPMFHF 467D - ";
                        break;
                    case 467:
                        label += "7DPMFHF 467D - ";
                        break;
                    case 468:
                        label += "7DPMFHF 468I - ";
                        break;
                    case 468:
                        label += "7DPMFHF 468I - ";
                        break;
                    case 468:
                        label += "7DPMFHF 468I - ";
                        break;
                    case 477:
                        label += "7DPMFHF 477S - ";
                        break;
                    case 516:
                        label += "7DPMFHF 516E - ";
                        break;}
                switch (labely){
                    case 153:
                        label += "H 153A\n";
                        break;
                    case 188:
                        label += "H 188K\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 189:
                        label += "H 189H\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 190:
                        label += "H 190K\n";
                        break;
                    case 190:
                        label += "H 190K\n";
                        break;
                    case 190:
                        label += "H 190K\n";
                        break;
                    case 190:
                        label += "H 190K\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 152:
                        label += "H 152N\n";
                        break;
                    case 145:
                        label += "H 145K\n";
                        break;
                    case 147:
                        label += "H 147Q\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 156:
                        label += "H 156S\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 155:
                        label += "H 155Q\n";
                        break;
                    case 156:
                        label += "H 156S\n";
                        break;
                    case 185:
                        label += "H 185D\n";
                        break;
                    case 185:
                        label += "H 185D\n";
                        break;
                    case 185:
                        label += "H 185D\n";
                        break;
                    case 156:
                        label += "H 156S\n";
                        break;
                    case 156:
                        label += "H 156S\n";
                        break;
                    case 156:
                        label += "H 156S\n";
                        break;
                    case 158:
                        label += "H 158N\n";
                        break;
                    case 158:
                        label += "H 158N\n";
                        break;
                    case 3:
                        label += "H 3Q\n";
                        break;
                    case 152:
                        label += "H 152N\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});