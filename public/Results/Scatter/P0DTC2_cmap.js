
var myChartP0DTC2 = 0;
var ctx = document.getElementById('P0DTC2').getContext('2d');
if (window.myChartP0DTC2 != 0){
    window.myChartP0DTC2.destroy();
}
window.myChartP0DTC2 = new Chart(ctx, {
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
            data: [{x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 403, y: 59},
                {x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 403, y: 59},
                {x: 403, y: 59},
                {x: 403, y: 59},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 445, y: 1},
                {x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 53},
                {x: 484, y: 98},
                {x: 484, y: 102},
                {x: 484, y: 102},
                {x: 486, y: 58},
                {x: 487, y: 102},
                {x: 488, y: 102},
                {x: 490, y: 100},
                {x: 493, y: 105},
                {x: 493, y: 105},
                {x: 403, y: 53},
                {x: 403, y: 58},
                {x: 403, y: 58},
                {x: 417, y: 56},
                {x: 417, y: 57},
                {x: 453, y: 53},
                {x: 473, y: 32},
                {x: 474, y: 32},
                {x: 474, y: 32},
                {x: 475, y: 32},
                {x: 487, y: 96},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 95},
                {x: 489, y: 95},
                {x: 489, y: 95},
                {x: 489, y: 96},
                {x: 496, y: 60},
                {x: 501, y: 60},
                {x: 505, y: 59},
                {x: 505, y: 59},
                {x: 505, y: 64},
                {x: 445, y: 1},
                {x: 484, y: 53},
                {x: 484, y: 98},
                {x: 484, y: 98},
                {x: 484, y: 102},
                {x: 486, y: 58},
                {x: 487, y: 102},
                {x: 488, y: 102},
                {x: 488, y: 102},
                {x: 490, y: 100},
                {x: 493, y: 100},
                {x: 493, y: 105},
                {x: 494, y: 105},
                {x: 453, y: 53},
                {x: 473, y: 32},
                {x: 474, y: 32},
                {x: 474, y: 32},
                {x: 475, y: 32},
                {x: 487, y: 32},
                {x: 487, y: 97},
                {x: 487, y: 97},
                {x: 487, y: 98},
                {x: 489, y: 32},
                {x: 489, y: 95},
                {x: 489, y: 95},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 498, y: 60},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 449, y: 106},
                {x: 489, y: 102},
                {x: 456, y: 32},
                {x: 489, y: 32},
                {x: 449, y: 106},
                {x: 489, y: 102},
                {x: 456, y: 32},
                {x: 489, y: 32},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 106},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 483, y: 52},
                {x: 483, y: 52},
                {x: 483, y: 52},
                {x: 483, y: 52},
                {x: 483, y: 53},
                {x: 483, y: 53},
                {x: 484, y: 53},
                {x: 486, y: 52},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 405, y: 58},
                {x: 455, y: 53},
                {x: 455, y: 53},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 475, y: 32},
                {x: 475, y: 32},
                {x: 475, y: 32},
                {x: 486, y: 98},
                {x: 486, y: 98},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 505, y: 58},
                {x: 505, y: 58},
                {x: 505, y: 64},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 449, y: 106},
                {x: 483, y: 52},
                {x: 483, y: 52},
                {x: 483, y: 52},
                {x: 483, y: 52},
                {x: 483, y: 53},
                {x: 484, y: 53},
                {x: 486, y: 52},
                {x: 486, y: 52},
                {x: 486, y: 52},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 403, y: 58},
                {x: 403, y: 58},
                {x: 405, y: 58},
                {x: 406, y: 58},
                {x: 455, y: 53},
                {x: 455, y: 53},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 456, y: 32},
                {x: 473, y: 32},
                {x: 475, y: 32},
                {x: 475, y: 32},
                {x: 475, y: 32},
                {x: 486, y: 98},
                {x: 486, y: 98},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 489, y: 32},
                {x: 493, y: 53},
                {x: 493, y: 53},
                {x: 505, y: 58},
                {x: 505, y: 58},
                {x: 505, y: 58},
                {x: 505, y: 58},
                {x: 505, y: 58},
                {x: 505, y: 58},
                {x: 505, y: 64},
                {x: 505, y: 64},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["P0DTC2 Superpose"],
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
                    case 445:
                        label += "P0DTC2ADA 445V - ";
                        break;
                    case 449:
                        label += "P0DTC2ADA 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2ADA 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2ADA 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2ADA 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2ADA 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2ADA 449Y - ";
                        break;
                    case 483:
                        label += "P0DTC2ADA 483V - ";
                        break;
                    case 483:
                        label += "P0DTC2ADA 483V - ";
                        break;
                    case 483:
                        label += "P0DTC2ADA 483V - ";
                        break;
                    case 483:
                        label += "P0DTC2ADA 483V - ";
                        break;
                    case 483:
                        label += "P0DTC2ADA 483V - ";
                        break;
                    case 483:
                        label += "P0DTC2ADA 483V - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2ADA 484E - ";
                        break;
                    case 486:
                        label += "P0DTC2ADA 486F - ";
                        break;
                    case 486:
                        label += "P0DTC2ADA 486F - ";
                        break;
                    case 487:
                        label += "P0DTC2ADA 487N - ";
                        break;
                    case 488:
                        label += "P0DTC2ADA 488C - ";
                        break;
                    case 489:
                        label += "P0DTC2ADA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2ADA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2ADA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2ADA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2ADA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2ADA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2ADA 489Y - ";
                        break;
                    case 490:
                        label += "P0DTC2ADA 490F - ";
                        break;
                    case 493:
                        label += "P0DTC2ADA 493Q - ";
                        break;
                    case 493:
                        label += "P0DTC2ADA 493Q - ";
                        break;
                    case 403:
                        label += "P0DTC2AEA 403R - ";
                        break;
                    case 403:
                        label += "P0DTC2AEA 403R - ";
                        break;
                    case 403:
                        label += "P0DTC2AEA 403R - ";
                        break;
                    case 403:
                        label += "P0DTC2AEA 403R - ";
                        break;
                    case 405:
                        label += "P0DTC2AEA 405D - ";
                        break;
                    case 417:
                        label += "P0DTC2AEA 417K - ";
                        break;
                    case 417:
                        label += "P0DTC2AEA 417K - ";
                        break;
                    case 453:
                        label += "P0DTC2AEA 453Y - ";
                        break;
                    case 455:
                        label += "P0DTC2AEA 455L - ";
                        break;
                    case 455:
                        label += "P0DTC2AEA 455L - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2AEA 456F - ";
                        break;
                    case 473:
                        label += "P0DTC2AEA 473Y - ";
                        break;
                    case 474:
                        label += "P0DTC2AEA 474Q - ";
                        break;
                    case 474:
                        label += "P0DTC2AEA 474Q - ";
                        break;
                    case 475:
                        label += "P0DTC2AEA 475A - ";
                        break;
                    case 475:
                        label += "P0DTC2AEA 475A - ";
                        break;
                    case 475:
                        label += "P0DTC2AEA 475A - ";
                        break;
                    case 475:
                        label += "P0DTC2AEA 475A - ";
                        break;
                    case 486:
                        label += "P0DTC2AEA 486F - ";
                        break;
                    case 486:
                        label += "P0DTC2AEA 486F - ";
                        break;
                    case 487:
                        label += "P0DTC2AEA 487N - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2AEA 489Y - ";
                        break;
                    case 496:
                        label += "P0DTC2AEA 496G - ";
                        break;
                    case 501:
                        label += "P0DTC2AEA 501N - ";
                        break;
                    case 505:
                        label += "P0DTC2AEA 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2AEA 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2AEA 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2AEA 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2AEA 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2AEA 505Y - ";
                        break;
                    case 445:
                        label += "P0DTC2BFB 445V - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 449:
                        label += "P0DTC2BFB 449Y - ";
                        break;
                    case 483:
                        label += "P0DTC2BFB 483V - ";
                        break;
                    case 483:
                        label += "P0DTC2BFB 483V - ";
                        break;
                    case 483:
                        label += "P0DTC2BFB 483V - ";
                        break;
                    case 483:
                        label += "P0DTC2BFB 483V - ";
                        break;
                    case 483:
                        label += "P0DTC2BFB 483V - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 484:
                        label += "P0DTC2BFB 484E - ";
                        break;
                    case 486:
                        label += "P0DTC2BFB 486F - ";
                        break;
                    case 486:
                        label += "P0DTC2BFB 486F - ";
                        break;
                    case 486:
                        label += "P0DTC2BFB 486F - ";
                        break;
                    case 486:
                        label += "P0DTC2BFB 486F - ";
                        break;
                    case 487:
                        label += "P0DTC2BFB 487N - ";
                        break;
                    case 488:
                        label += "P0DTC2BFB 488C - ";
                        break;
                    case 488:
                        label += "P0DTC2BFB 488C - ";
                        break;
                    case 489:
                        label += "P0DTC2BFB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BFB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BFB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BFB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BFB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BFB 489Y - ";
                        break;
                    case 490:
                        label += "P0DTC2BFB 490F - ";
                        break;
                    case 493:
                        label += "P0DTC2BFB 493Q - ";
                        break;
                    case 493:
                        label += "P0DTC2BFB 493Q - ";
                        break;
                    case 494:
                        label += "P0DTC2BFB 494S - ";
                        break;
                    case 403:
                        label += "P0DTC2BGB 403R - ";
                        break;
                    case 403:
                        label += "P0DTC2BGB 403R - ";
                        break;
                    case 403:
                        label += "P0DTC2BGB 403R - ";
                        break;
                    case 403:
                        label += "P0DTC2BGB 403R - ";
                        break;
                    case 403:
                        label += "P0DTC2BGB 403R - ";
                        break;
                    case 405:
                        label += "P0DTC2BGB 405D - ";
                        break;
                    case 406:
                        label += "P0DTC2BGB 406E - ";
                        break;
                    case 453:
                        label += "P0DTC2BGB 453Y - ";
                        break;
                    case 455:
                        label += "P0DTC2BGB 455L - ";
                        break;
                    case 455:
                        label += "P0DTC2BGB 455L - ";
                        break;
                    case 456:
                        label += "P0DTC2BGB 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2BGB 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2BGB 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2BGB 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2BGB 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2BGB 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2BGB 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2BGB 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2BGB 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2BGB 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2BGB 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2BGB 456F - ";
                        break;
                    case 456:
                        label += "P0DTC2BGB 456F - ";
                        break;
                    case 473:
                        label += "P0DTC2BGB 473Y - ";
                        break;
                    case 473:
                        label += "P0DTC2BGB 473Y - ";
                        break;
                    case 474:
                        label += "P0DTC2BGB 474Q - ";
                        break;
                    case 474:
                        label += "P0DTC2BGB 474Q - ";
                        break;
                    case 475:
                        label += "P0DTC2BGB 475A - ";
                        break;
                    case 475:
                        label += "P0DTC2BGB 475A - ";
                        break;
                    case 475:
                        label += "P0DTC2BGB 475A - ";
                        break;
                    case 475:
                        label += "P0DTC2BGB 475A - ";
                        break;
                    case 486:
                        label += "P0DTC2BGB 486F - ";
                        break;
                    case 486:
                        label += "P0DTC2BGB 486F - ";
                        break;
                    case 487:
                        label += "P0DTC2BGB 487N - ";
                        break;
                    case 487:
                        label += "P0DTC2BGB 487N - ";
                        break;
                    case 487:
                        label += "P0DTC2BGB 487N - ";
                        break;
                    case 487:
                        label += "P0DTC2BGB 487N - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 489:
                        label += "P0DTC2BGB 489Y - ";
                        break;
                    case 493:
                        label += "P0DTC2BGB 493Q - ";
                        break;
                    case 493:
                        label += "P0DTC2BGB 493Q - ";
                        break;
                    case 498:
                        label += "P0DTC2BGB 498Q - ";
                        break;
                    case 505:
                        label += "P0DTC2BGB 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2BGB 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2BGB 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2BGB 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2BGB 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2BGB 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2BGB 505Y - ";
                        break;
                    case 505:
                        label += "P0DTC2BGB 505Y - ";
                        break;}
                switch (labely){
                    case 1:
                        label += "D 1Q\n";
                        break;
                    case 106:
                        label += "D 106F\n";
                        break;
                    case 106:
                        label += "D 106F\n";
                        break;
                    case 106:
                        label += "D 106F\n";
                        break;
                    case 106:
                        label += "D 106F\n";
                        break;
                    case 106:
                        label += "D 106F\n";
                        break;
                    case 106:
                        label += "D 106F\n";
                        break;
                    case 52:
                        label += "D 52W\n";
                        break;
                    case 52:
                        label += "D 52W\n";
                        break;
                    case 52:
                        label += "D 52W\n";
                        break;
                    case 52:
                        label += "D 52W\n";
                        break;
                    case 53:
                        label += "D 53R\n";
                        break;
                    case 53:
                        label += "D 53R\n";
                        break;
                    case 53:
                        label += "D 53R\n";
                        break;
                    case 53:
                        label += "D 53R\n";
                        break;
                    case 53:
                        label += "D 53R\n";
                        break;
                    case 53:
                        label += "D 53R\n";
                        break;
                    case 53:
                        label += "D 53R\n";
                        break;
                    case 53:
                        label += "D 53R\n";
                        break;
                    case 53:
                        label += "D 53R\n";
                        break;
                    case 53:
                        label += "D 53R\n";
                        break;
                    case 53:
                        label += "D 53R\n";
                        break;
                    case 98:
                        label += "D 98N\n";
                        break;
                    case 102:
                        label += "D 102H\n";
                        break;
                    case 102:
                        label += "D 102H\n";
                        break;
                    case 102:
                        label += "D 102H\n";
                        break;
                    case 102:
                        label += "D 102H\n";
                        break;
                    case 52:
                        label += "D 52W\n";
                        break;
                    case 58:
                        label += "D 58D\n";
                        break;
                    case 102:
                        label += "D 102H\n";
                        break;
                    case 102:
                        label += "D 102H\n";
                        break;
                    case 101:
                        label += "D 101A\n";
                        break;
                    case 101:
                        label += "D 101A\n";
                        break;
                    case 101:
                        label += "D 101A\n";
                        break;
                    case 101:
                        label += "D 101A\n";
                        break;
                    case 101:
                        label += "D 101A\n";
                        break;
                    case 101:
                        label += "D 101A\n";
                        break;
                    case 102:
                        label += "D 102H\n";
                        break;
                    case 100:
                        label += "D 100G\n";
                        break;
                    case 105:
                        label += "D 105D\n";
                        break;
                    case 105:
                        label += "D 105D\n";
                        break;
                    case 53:
                        label += "E 53Y\n";
                        break;
                    case 58:
                        label += "E 58L\n";
                        break;
                    case 58:
                        label += "E 58L\n";
                        break;
                    case 59:
                        label += "E 59E\n";
                        break;
                    case 58:
                        label += "E 58L\n";
                        break;
                    case 56:
                        label += "E 56S\n";
                        break;
                    case 57:
                        label += "E 57N\n";
                        break;
                    case 53:
                        label += "E 53Y\n";
                        break;
                    case 53:
                        label += "E 53Y\n";
                        break;
                    case 53:
                        label += "E 53Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 98:
                        label += "E 98D\n";
                        break;
                    case 98:
                        label += "E 98D\n";
                        break;
                    case 96:
                        label += "E 96N\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 95:
                        label += "E 95N\n";
                        break;
                    case 95:
                        label += "E 95N\n";
                        break;
                    case 95:
                        label += "E 95N\n";
                        break;
                    case 96:
                        label += "E 96N\n";
                        break;
                    case 60:
                        label += "E 60S\n";
                        break;
                    case 60:
                        label += "E 60S\n";
                        break;
                    case 58:
                        label += "E 58L\n";
                        break;
                    case 58:
                        label += "E 58L\n";
                        break;
                    case 59:
                        label += "E 59E\n";
                        break;
                    case 59:
                        label += "E 59E\n";
                        break;
                    case 64:
                        label += "E 64A\n";
                        break;
                    case 64:
                        label += "E 64A\n";
                        break;
                    case 1:
                        label += "F 1Q\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 106:
                        label += "F 106F\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 53:
                        label += "F 53R\n";
                        break;
                    case 53:
                        label += "F 53R\n";
                        break;
                    case 53:
                        label += "F 53R\n";
                        break;
                    case 53:
                        label += "F 53R\n";
                        break;
                    case 53:
                        label += "F 53R\n";
                        break;
                    case 53:
                        label += "F 53R\n";
                        break;
                    case 98:
                        label += "F 98N\n";
                        break;
                    case 98:
                        label += "F 98N\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 52:
                        label += "F 52W\n";
                        break;
                    case 58:
                        label += "F 58D\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 101:
                        label += "F 101A\n";
                        break;
                    case 101:
                        label += "F 101A\n";
                        break;
                    case 101:
                        label += "F 101A\n";
                        break;
                    case 101:
                        label += "F 101A\n";
                        break;
                    case 101:
                        label += "F 101A\n";
                        break;
                    case 102:
                        label += "F 102H\n";
                        break;
                    case 100:
                        label += "F 100G\n";
                        break;
                    case 100:
                        label += "F 100G\n";
                        break;
                    case 105:
                        label += "F 105D\n";
                        break;
                    case 105:
                        label += "F 105D\n";
                        break;
                    case 58:
                        label += "G 58L\n";
                        break;
                    case 58:
                        label += "G 58L\n";
                        break;
                    case 59:
                        label += "G 59E\n";
                        break;
                    case 59:
                        label += "G 59E\n";
                        break;
                    case 59:
                        label += "G 59E\n";
                        break;
                    case 58:
                        label += "G 58L\n";
                        break;
                    case 58:
                        label += "G 58L\n";
                        break;
                    case 53:
                        label += "G 53Y\n";
                        break;
                    case 53:
                        label += "G 53Y\n";
                        break;
                    case 53:
                        label += "G 53Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 98:
                        label += "G 98D\n";
                        break;
                    case 98:
                        label += "G 98D\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 97:
                        label += "G 97E\n";
                        break;
                    case 97:
                        label += "G 97E\n";
                        break;
                    case 98:
                        label += "G 98D\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 95:
                        label += "G 95N\n";
                        break;
                    case 95:
                        label += "G 95N\n";
                        break;
                    case 96:
                        label += "G 96N\n";
                        break;
                    case 96:
                        label += "G 96N\n";
                        break;
                    case 53:
                        label += "G 53Y\n";
                        break;
                    case 53:
                        label += "G 53Y\n";
                        break;
                    case 60:
                        label += "G 60S\n";
                        break;
                    case 58:
                        label += "G 58L\n";
                        break;
                    case 58:
                        label += "G 58L\n";
                        break;
                    case 58:
                        label += "G 58L\n";
                        break;
                    case 58:
                        label += "G 58L\n";
                        break;
                    case 58:
                        label += "G 58L\n";
                        break;
                    case 58:
                        label += "G 58L\n";
                        break;
                    case 64:
                        label += "G 64A\n";
                        break;
                    case 64:
                        label += "G 64A\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});