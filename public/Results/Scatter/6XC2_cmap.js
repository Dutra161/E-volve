
var myChart6XC2 = 0;
var ctx = document.getElementById('6XC2').getContext('2d');
if (window.myChart6XC2 != 0){
    window.myChart6XC2.destroy();
}
window.myChart6XC2 = new Chart(ctx, {
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
            data: [{x: 417, y: 95},
                {x: 417, y: 95},
                {x: 417, y: 97},
                {x: 417, y: 97},
                {x: 417, y: 95},
                {x: 417, y: 95},
                {x: 417, y: 97},
                {x: 417, y: 97},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 417, y: 97},
                {x: 417, y: 97},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 403, y: 92},
                {x: 403, y: 92},
                {x: 408, y: 94},
                {x: 408, y: 94},
                {x: 453, y: 92},
                {x: 494, y: 32},
                {x: 496, y: 30},
                {x: 496, y: 32},
                {x: 498, y: 30},
                {x: 498, y: 30},
                {x: 498, y: 67},
                {x: 500, y: 28},
                {x: 501, y: 30},
                {x: 501, y: 30},
                {x: 501, y: 30},
                {x: 502, y: 28},
                {x: 505, y: 90},
                {x: 505, y: 91},
                {x: 505, y: 92},
                {x: 505, y: 93},
                {x: 417, y: 52},
                {x: 417, y: 52},
                {x: 417, y: 97},
                {x: 417, y: 97},
                {x: 420, y: 56},
                {x: 420, y: 56},
                {x: 421, y: 53},
                {x: 421, y: 53},
                {x: 421, y: 54},
                {x: 453, y: 97},
                {x: 455, y: 33},
                {x: 457, y: 53},
                {x: 460, y: 56},
                {x: 473, y: 31},
                {x: 473, y: 53},
                {x: 474, y: 31},
                {x: 475, y: 28},
                {x: 475, y: 32},
                {x: 487, y: 26},
                {x: 487, y: 94},
                {x: 487, y: 94},
                {x: 489, y: 94},
                {x: 493, y: 99},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 408, y: 94},
                {x: 408, y: 94},
                {x: 453, y: 92},
                {x: 494, y: 32},
                {x: 496, y: 30},
                {x: 496, y: 32},
                {x: 498, y: 30},
                {x: 498, y: 30},
                {x: 498, y: 67},
                {x: 498, y: 67},
                {x: 500, y: 28},
                {x: 501, y: 28},
                {x: 501, y: 30},
                {x: 501, y: 30},
                {x: 502, y: 28},
                {x: 505, y: 90},
                {x: 505, y: 91},
                {x: 505, y: 92},
                {x: 505, y: 93},
                {x: 417, y: 52},
                {x: 417, y: 52},
                {x: 417, y: 97},
                {x: 417, y: 97},
                {x: 420, y: 56},
                {x: 420, y: 56},
                {x: 421, y: 53},
                {x: 421, y: 54},
                {x: 453, y: 97},
                {x: 455, y: 33},
                {x: 457, y: 53},
                {x: 460, y: 56},
                {x: 460, y: 56},
                {x: 473, y: 31},
                {x: 473, y: 53},
                {x: 474, y: 31},
                {x: 475, y: 28},
                {x: 475, y: 28},
                {x: 475, y: 32},
                {x: 476, y: 28},
                {x: 477, y: 28},
                {x: 477, y: 28},
                {x: 487, y: 26},
                {x: 487, y: 94},
                {x: 487, y: 94},
                {x: 489, y: 94},
                {x: 489, y: 102},
                {x: 493, y: 99},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 505, y: 32},
                {x: 489, y: 99},
                {x: 505, y: 32},
                {x: 421, y: 52},
                {x: 489, y: 99},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 405, y: 94},
                {x: 405, y: 94},
                {x: 405, y: 94},
                {x: 405, y: 94},
                {x: 505, y: 2},
                {x: 505, y: 29},
                {x: 505, y: 29},
                {x: 505, y: 29},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 417, y: 33},
                {x: 417, y: 52},
                {x: 421, y: 33},
                {x: 421, y: 52},
                {x: 455, y: 97},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 96},
                {x: 456, y: 96},
                {x: 456, y: 99},
                {x: 456, y: 99},
                {x: 456, y: 99},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 103},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 405, y: 94},
                {x: 405, y: 94},
                {x: 505, y: 29},
                {x: 505, y: 29},
                {x: 505, y: 29},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 417, y: 33},
                {x: 417, y: 52},
                {x: 421, y: 33},
                {x: 421, y: 52},
                {x: 455, y: 97},
                {x: 455, y: 97},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 96},
                {x: 456, y: 96},
                {x: 456, y: 99},
                {x: 456, y: 99},
                {x: 456, y: 99},
                {x: 456, y: 99},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 103},
                {x: 486, y: 103},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 96},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6XC2 Superpose"],
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
                    case 403:
                        label += "6XC2ALA 403R - ";
                        break;
                    case 403:
                        label += "6XC2ALA 403R - ";
                        break;
                    case 405:
                        label += "6XC2ALA 405D - ";
                        break;
                    case 405:
                        label += "6XC2ALA 405D - ";
                        break;
                    case 405:
                        label += "6XC2ALA 405D - ";
                        break;
                    case 405:
                        label += "6XC2ALA 405D - ";
                        break;
                    case 408:
                        label += "6XC2ALA 408R - ";
                        break;
                    case 408:
                        label += "6XC2ALA 408R - ";
                        break;
                    case 417:
                        label += "6XC2ALA 417K - ";
                        break;
                    case 453:
                        label += "6XC2ALA 453Y - ";
                        break;
                    case 494:
                        label += "6XC2ALA 494S - ";
                        break;
                    case 496:
                        label += "6XC2ALA 496G - ";
                        break;
                    case 496:
                        label += "6XC2ALA 496G - ";
                        break;
                    case 498:
                        label += "6XC2ALA 498Q - ";
                        break;
                    case 498:
                        label += "6XC2ALA 498Q - ";
                        break;
                    case 498:
                        label += "6XC2ALA 498Q - ";
                        break;
                    case 500:
                        label += "6XC2ALA 500T - ";
                        break;
                    case 501:
                        label += "6XC2ALA 501N - ";
                        break;
                    case 501:
                        label += "6XC2ALA 501N - ";
                        break;
                    case 501:
                        label += "6XC2ALA 501N - ";
                        break;
                    case 502:
                        label += "6XC2ALA 502G - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ALA 505Y - ";
                        break;
                    case 417:
                        label += "6XC2AHA 417K - ";
                        break;
                    case 417:
                        label += "6XC2AHA 417K - ";
                        break;
                    case 417:
                        label += "6XC2AHA 417K - ";
                        break;
                    case 417:
                        label += "6XC2AHA 417K - ";
                        break;
                    case 417:
                        label += "6XC2AHA 417K - ";
                        break;
                    case 417:
                        label += "6XC2AHA 417K - ";
                        break;
                    case 417:
                        label += "6XC2AHA 417K - ";
                        break;
                    case 417:
                        label += "6XC2AHA 417K - ";
                        break;
                    case 420:
                        label += "6XC2AHA 420D - ";
                        break;
                    case 420:
                        label += "6XC2AHA 420D - ";
                        break;
                    case 421:
                        label += "6XC2AHA 421Y - ";
                        break;
                    case 421:
                        label += "6XC2AHA 421Y - ";
                        break;
                    case 421:
                        label += "6XC2AHA 421Y - ";
                        break;
                    case 421:
                        label += "6XC2AHA 421Y - ";
                        break;
                    case 421:
                        label += "6XC2AHA 421Y - ";
                        break;
                    case 453:
                        label += "6XC2AHA 453Y - ";
                        break;
                    case 455:
                        label += "6XC2AHA 455L - ";
                        break;
                    case 455:
                        label += "6XC2AHA 455L - ";
                        break;
                    case 456:
                        label += "6XC2AHA 456F - ";
                        break;
                    case 456:
                        label += "6XC2AHA 456F - ";
                        break;
                    case 456:
                        label += "6XC2AHA 456F - ";
                        break;
                    case 456:
                        label += "6XC2AHA 456F - ";
                        break;
                    case 456:
                        label += "6XC2AHA 456F - ";
                        break;
                    case 456:
                        label += "6XC2AHA 456F - ";
                        break;
                    case 456:
                        label += "6XC2AHA 456F - ";
                        break;
                    case 456:
                        label += "6XC2AHA 456F - ";
                        break;
                    case 456:
                        label += "6XC2AHA 456F - ";
                        break;
                    case 457:
                        label += "6XC2AHA 457R - ";
                        break;
                    case 460:
                        label += "6XC2AHA 460N - ";
                        break;
                    case 473:
                        label += "6XC2AHA 473Y - ";
                        break;
                    case 473:
                        label += "6XC2AHA 473Y - ";
                        break;
                    case 474:
                        label += "6XC2AHA 474Q - ";
                        break;
                    case 475:
                        label += "6XC2AHA 475A - ";
                        break;
                    case 475:
                        label += "6XC2AHA 475A - ";
                        break;
                    case 486:
                        label += "6XC2AHA 486F - ";
                        break;
                    case 486:
                        label += "6XC2AHA 486F - ";
                        break;
                    case 486:
                        label += "6XC2AHA 486F - ";
                        break;
                    case 487:
                        label += "6XC2AHA 487N - ";
                        break;
                    case 487:
                        label += "6XC2AHA 487N - ";
                        break;
                    case 487:
                        label += "6XC2AHA 487N - ";
                        break;
                    case 489:
                        label += "6XC2AHA 489Y - ";
                        break;
                    case 489:
                        label += "6XC2AHA 489Y - ";
                        break;
                    case 489:
                        label += "6XC2AHA 489Y - ";
                        break;
                    case 489:
                        label += "6XC2AHA 489Y - ";
                        break;
                    case 489:
                        label += "6XC2AHA 489Y - ";
                        break;
                    case 489:
                        label += "6XC2AHA 489Y - ";
                        break;
                    case 489:
                        label += "6XC2AHA 489Y - ";
                        break;
                    case 489:
                        label += "6XC2AHA 489Y - ";
                        break;
                    case 489:
                        label += "6XC2AHA 489Y - ";
                        break;
                    case 489:
                        label += "6XC2AHA 489Y - ";
                        break;
                    case 489:
                        label += "6XC2AHA 489Y - ";
                        break;
                    case 489:
                        label += "6XC2AHA 489Y - ";
                        break;
                    case 493:
                        label += "6XC2AHA 493Q - ";
                        break;
                    case 403:
                        label += "6XC2ZYZ 403R - ";
                        break;
                    case 403:
                        label += "6XC2ZYZ 403R - ";
                        break;
                    case 405:
                        label += "6XC2ZYZ 405D - ";
                        break;
                    case 405:
                        label += "6XC2ZYZ 405D - ";
                        break;
                    case 408:
                        label += "6XC2ZYZ 408R - ";
                        break;
                    case 408:
                        label += "6XC2ZYZ 408R - ";
                        break;
                    case 417:
                        label += "6XC2ZYZ 417K - ";
                        break;
                    case 453:
                        label += "6XC2ZYZ 453Y - ";
                        break;
                    case 494:
                        label += "6XC2ZYZ 494S - ";
                        break;
                    case 496:
                        label += "6XC2ZYZ 496G - ";
                        break;
                    case 496:
                        label += "6XC2ZYZ 496G - ";
                        break;
                    case 498:
                        label += "6XC2ZYZ 498Q - ";
                        break;
                    case 498:
                        label += "6XC2ZYZ 498Q - ";
                        break;
                    case 498:
                        label += "6XC2ZYZ 498Q - ";
                        break;
                    case 498:
                        label += "6XC2ZYZ 498Q - ";
                        break;
                    case 500:
                        label += "6XC2ZYZ 500T - ";
                        break;
                    case 501:
                        label += "6XC2ZYZ 501N - ";
                        break;
                    case 501:
                        label += "6XC2ZYZ 501N - ";
                        break;
                    case 501:
                        label += "6XC2ZYZ 501N - ";
                        break;
                    case 502:
                        label += "6XC2ZYZ 502G - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 505:
                        label += "6XC2ZYZ 505Y - ";
                        break;
                    case 417:
                        label += "6XC2ZXZ 417K - ";
                        break;
                    case 417:
                        label += "6XC2ZXZ 417K - ";
                        break;
                    case 417:
                        label += "6XC2ZXZ 417K - ";
                        break;
                    case 417:
                        label += "6XC2ZXZ 417K - ";
                        break;
                    case 417:
                        label += "6XC2ZXZ 417K - ";
                        break;
                    case 417:
                        label += "6XC2ZXZ 417K - ";
                        break;
                    case 417:
                        label += "6XC2ZXZ 417K - ";
                        break;
                    case 417:
                        label += "6XC2ZXZ 417K - ";
                        break;
                    case 420:
                        label += "6XC2ZXZ 420D - ";
                        break;
                    case 420:
                        label += "6XC2ZXZ 420D - ";
                        break;
                    case 421:
                        label += "6XC2ZXZ 421Y - ";
                        break;
                    case 421:
                        label += "6XC2ZXZ 421Y - ";
                        break;
                    case 421:
                        label += "6XC2ZXZ 421Y - ";
                        break;
                    case 421:
                        label += "6XC2ZXZ 421Y - ";
                        break;
                    case 421:
                        label += "6XC2ZXZ 421Y - ";
                        break;
                    case 453:
                        label += "6XC2ZXZ 453Y - ";
                        break;
                    case 455:
                        label += "6XC2ZXZ 455L - ";
                        break;
                    case 455:
                        label += "6XC2ZXZ 455L - ";
                        break;
                    case 455:
                        label += "6XC2ZXZ 455L - ";
                        break;
                    case 456:
                        label += "6XC2ZXZ 456F - ";
                        break;
                    case 456:
                        label += "6XC2ZXZ 456F - ";
                        break;
                    case 456:
                        label += "6XC2ZXZ 456F - ";
                        break;
                    case 456:
                        label += "6XC2ZXZ 456F - ";
                        break;
                    case 456:
                        label += "6XC2ZXZ 456F - ";
                        break;
                    case 456:
                        label += "6XC2ZXZ 456F - ";
                        break;
                    case 456:
                        label += "6XC2ZXZ 456F - ";
                        break;
                    case 456:
                        label += "6XC2ZXZ 456F - ";
                        break;
                    case 456:
                        label += "6XC2ZXZ 456F - ";
                        break;
                    case 456:
                        label += "6XC2ZXZ 456F - ";
                        break;
                    case 457:
                        label += "6XC2ZXZ 457R - ";
                        break;
                    case 460:
                        label += "6XC2ZXZ 460N - ";
                        break;
                    case 460:
                        label += "6XC2ZXZ 460N - ";
                        break;
                    case 473:
                        label += "6XC2ZXZ 473Y - ";
                        break;
                    case 473:
                        label += "6XC2ZXZ 473Y - ";
                        break;
                    case 474:
                        label += "6XC2ZXZ 474Q - ";
                        break;
                    case 475:
                        label += "6XC2ZXZ 475A - ";
                        break;
                    case 475:
                        label += "6XC2ZXZ 475A - ";
                        break;
                    case 475:
                        label += "6XC2ZXZ 475A - ";
                        break;
                    case 476:
                        label += "6XC2ZXZ 476G - ";
                        break;
                    case 477:
                        label += "6XC2ZXZ 477S - ";
                        break;
                    case 477:
                        label += "6XC2ZXZ 477S - ";
                        break;
                    case 486:
                        label += "6XC2ZXZ 486F - ";
                        break;
                    case 486:
                        label += "6XC2ZXZ 486F - ";
                        break;
                    case 486:
                        label += "6XC2ZXZ 486F - ";
                        break;
                    case 486:
                        label += "6XC2ZXZ 486F - ";
                        break;
                    case 486:
                        label += "6XC2ZXZ 486F - ";
                        break;
                    case 487:
                        label += "6XC2ZXZ 487N - ";
                        break;
                    case 487:
                        label += "6XC2ZXZ 487N - ";
                        break;
                    case 487:
                        label += "6XC2ZXZ 487N - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 489:
                        label += "6XC2ZXZ 489Y - ";
                        break;
                    case 493:
                        label += "6XC2ZXZ 493Q - ";
                        break;}
                switch (labely){
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 94:
                        label += "L 94Y\n";
                        break;
                    case 94:
                        label += "L 94Y\n";
                        break;
                    case 94:
                        label += "L 94Y\n";
                        break;
                    case 94:
                        label += "L 94Y\n";
                        break;
                    case 94:
                        label += "L 94Y\n";
                        break;
                    case 94:
                        label += "L 94Y\n";
                        break;
                    case 97:
                        label += "L 97K\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 67:
                        label += "L 67S\n";
                        break;
                    case 28:
                        label += "L 28G\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 30:
                        label += "L 30S\n";
                        break;
                    case 28:
                        label += "L 28G\n";
                        break;
                    case 2:
                        label += "L 2I\n";
                        break;
                    case 29:
                        label += "L 29I\n";
                        break;
                    case 29:
                        label += "L 29I\n";
                        break;
                    case 29:
                        label += "L 29I\n";
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
                    case 32:
                        label += "L 32Y\n";
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
                    case 90:
                        label += "L 90Q\n";
                        break;
                    case 91:
                        label += "L 91L\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 93:
                        label += "L 93S\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
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
                    case 95:
                        label += "H 95D\n";
                        break;
                    case 95:
                        label += "H 95D\n";
                        break;
                    case 97:
                        label += "H 97D\n";
                        break;
                    case 97:
                        label += "H 97D\n";
                        break;
                    case 56:
                        label += "H 56S\n";
                        break;
                    case 56:
                        label += "H 56S\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 54:
                        label += "H 54G\n";
                        break;
                    case 97:
                        label += "H 97D\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 97:
                        label += "H 97D\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 96:
                        label += "H 96L\n";
                        break;
                    case 96:
                        label += "H 96L\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 56:
                        label += "H 56S\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 32:
                        label += "H 32N\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 103:
                        label += "H 103V\n";
                        break;
                    case 26:
                        label += "H 26G\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 96:
                        label += "H 96L\n";
                        break;
                    case 96:
                        label += "H 96L\n";
                        break;
                    case 96:
                        label += "H 96L\n";
                        break;
                    case 96:
                        label += "H 96L\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 99:
                        label += "H 99Y\n";
                        break;
                    case 92:
                        label += "Y 92N\n";
                        break;
                    case 92:
                        label += "Y 92N\n";
                        break;
                    case 94:
                        label += "Y 94Y\n";
                        break;
                    case 94:
                        label += "Y 94Y\n";
                        break;
                    case 94:
                        label += "Y 94Y\n";
                        break;
                    case 94:
                        label += "Y 94Y\n";
                        break;
                    case 97:
                        label += "Y 97K\n";
                        break;
                    case 92:
                        label += "Y 92N\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 30:
                        label += "Y 30S\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 30:
                        label += "Y 30S\n";
                        break;
                    case 30:
                        label += "Y 30S\n";
                        break;
                    case 67:
                        label += "Y 67S\n";
                        break;
                    case 67:
                        label += "Y 67S\n";
                        break;
                    case 28:
                        label += "Y 28G\n";
                        break;
                    case 28:
                        label += "Y 28G\n";
                        break;
                    case 30:
                        label += "Y 30S\n";
                        break;
                    case 30:
                        label += "Y 30S\n";
                        break;
                    case 28:
                        label += "Y 28G\n";
                        break;
                    case 29:
                        label += "Y 29I\n";
                        break;
                    case 29:
                        label += "Y 29I\n";
                        break;
                    case 29:
                        label += "Y 29I\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 32:
                        label += "Y 32Y\n";
                        break;
                    case 90:
                        label += "Y 90Q\n";
                        break;
                    case 91:
                        label += "Y 91L\n";
                        break;
                    case 92:
                        label += "Y 92N\n";
                        break;
                    case 93:
                        label += "Y 93S\n";
                        break;
                    case 33:
                        label += "X 33Y\n";
                        break;
                    case 52:
                        label += "X 52Y\n";
                        break;
                    case 52:
                        label += "X 52Y\n";
                        break;
                    case 52:
                        label += "X 52Y\n";
                        break;
                    case 95:
                        label += "X 95D\n";
                        break;
                    case 95:
                        label += "X 95D\n";
                        break;
                    case 97:
                        label += "X 97D\n";
                        break;
                    case 97:
                        label += "X 97D\n";
                        break;
                    case 56:
                        label += "X 56S\n";
                        break;
                    case 56:
                        label += "X 56S\n";
                        break;
                    case 33:
                        label += "X 33Y\n";
                        break;
                    case 52:
                        label += "X 52Y\n";
                        break;
                    case 52:
                        label += "X 52Y\n";
                        break;
                    case 53:
                        label += "X 53S\n";
                        break;
                    case 54:
                        label += "X 54G\n";
                        break;
                    case 97:
                        label += "X 97D\n";
                        break;
                    case 33:
                        label += "X 33Y\n";
                        break;
                    case 97:
                        label += "X 97D\n";
                        break;
                    case 97:
                        label += "X 97D\n";
                        break;
                    case 33:
                        label += "X 33Y\n";
                        break;
                    case 33:
                        label += "X 33Y\n";
                        break;
                    case 33:
                        label += "X 33Y\n";
                        break;
                    case 33:
                        label += "X 33Y\n";
                        break;
                    case 96:
                        label += "X 96L\n";
                        break;
                    case 96:
                        label += "X 96L\n";
                        break;
                    case 99:
                        label += "X 99Y\n";
                        break;
                    case 99:
                        label += "X 99Y\n";
                        break;
                    case 99:
                        label += "X 99Y\n";
                        break;
                    case 99:
                        label += "X 99Y\n";
                        break;
                    case 53:
                        label += "X 53S\n";
                        break;
                    case 56:
                        label += "X 56S\n";
                        break;
                    case 56:
                        label += "X 56S\n";
                        break;
                    case 31:
                        label += "X 31S\n";
                        break;
                    case 53:
                        label += "X 53S\n";
                        break;
                    case 31:
                        label += "X 31S\n";
                        break;
                    case 28:
                        label += "X 28T\n";
                        break;
                    case 28:
                        label += "X 28T\n";
                        break;
                    case 32:
                        label += "X 32N\n";
                        break;
                    case 28:
                        label += "X 28T\n";
                        break;
                    case 28:
                        label += "X 28T\n";
                        break;
                    case 28:
                        label += "X 28T\n";
                        break;
                    case 2:
                        label += "X 2V\n";
                        break;
                    case 2:
                        label += "X 2V\n";
                        break;
                    case 2:
                        label += "X 2V\n";
                        break;
                    case 103:
                        label += "X 103V\n";
                        break;
                    case 103:
                        label += "X 103V\n";
                        break;
                    case 26:
                        label += "X 26G\n";
                        break;
                    case 94:
                        label += "X 94R\n";
                        break;
                    case 94:
                        label += "X 94R\n";
                        break;
                    case 94:
                        label += "X 94R\n";
                        break;
                    case 96:
                        label += "X 96L\n";
                        break;
                    case 96:
                        label += "X 96L\n";
                        break;
                    case 96:
                        label += "X 96L\n";
                        break;
                    case 96:
                        label += "X 96L\n";
                        break;
                    case 96:
                        label += "X 96L\n";
                        break;
                    case 99:
                        label += "X 99Y\n";
                        break;
                    case 99:
                        label += "X 99Y\n";
                        break;
                    case 99:
                        label += "X 99Y\n";
                        break;
                    case 99:
                        label += "X 99Y\n";
                        break;
                    case 99:
                        label += "X 99Y\n";
                        break;
                    case 99:
                        label += "X 99Y\n";
                        break;
                    case 99:
                        label += "X 99Y\n";
                        break;
                    case 102:
                        label += "X 102D\n";
                        break;
                    case 99:
                        label += "X 99Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});