
var myChart7KFW = 0;
var ctx = document.getElementById('7KFW').getContext('2d');
if (window.myChart7KFW != 0){
    window.myChart7KFW.destroy();
}
window.myChart7KFW = new Chart(ctx, {
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
            data: [{x: 427, y: 183},
                {x: 427, y: 183},
                {x: 417, y: 96},
                {x: 417, y: 96},
                {x: 417, y: 96},
                {x: 417, y: 96},
                {x: 417, y: 96},
                {x: 417, y: 96},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 427, y: 187},
                {x: 427, y: 187},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 427, y: 183},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 417, y: 94},
                {x: 453, y: 32},
                {x: 494, y: 32},
                {x: 496, y: 30},
                {x: 498, y: 30},
                {x: 498, y: 67},
                {x: 498, y: 67},
                {x: 500, y: 28},
                {x: 501, y: 30},
                {x: 502, y: 28},
                {x: 505, y: 93},
                {x: 408, y: 58},
                {x: 415, y: 58},
                {x: 416, y: 58},
                {x: 417, y: 52},
                {x: 417, y: 96},
                {x: 417, y: 98},
                {x: 420, y: 56},
                {x: 420, y: 56},
                {x: 421, y: 53},
                {x: 421, y: 53},
                {x: 421, y: 54},
                {x: 453, y: 99},
                {x: 455, y: 33},
                {x: 457, y: 53},
                {x: 473, y: 31},
                {x: 473, y: 53},
                {x: 475, y: 28},
                {x: 475, y: 32},
                {x: 476, y: 28},
                {x: 487, y: 26},
                {x: 487, y: 94},
                {x: 487, y: 94},
                {x: 489, y: 94},
                {x: 489, y: 94},
                {x: 489, y: 94},
                {x: 493, y: 100},
                {x: 493, y: 100},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 417, y: 94},
                {x: 453, y: 32},
                {x: 494, y: 32},
                {x: 495, y: 32},
                {x: 496, y: 30},
                {x: 498, y: 30},
                {x: 498, y: 67},
                {x: 502, y: 28},
                {x: 505, y: 93},
                {x: 415, y: 58},
                {x: 416, y: 58},
                {x: 417, y: 52},
                {x: 417, y: 96},
                {x: 417, y: 98},
                {x: 420, y: 56},
                {x: 420, y: 56},
                {x: 421, y: 53},
                {x: 421, y: 53},
                {x: 421, y: 54},
                {x: 453, y: 99},
                {x: 455, y: 33},
                {x: 457, y: 53},
                {x: 473, y: 31},
                {x: 473, y: 53},
                {x: 475, y: 28},
                {x: 475, y: 32},
                {x: 487, y: 26},
                {x: 487, y: 94},
                {x: 487, y: 94},
                {x: 489, y: 94},
                {x: 489, y: 94},
                {x: 489, y: 94},
                {x: 489, y: 101},
                {x: 493, y: 100},
                {x: 493, y: 100},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 453, y: 32},
                {x: 493, y: 32},
                {x: 494, y: 32},
                {x: 505, y: 27},
                {x: 415, y: 58},
                {x: 416, y: 58},
                {x: 417, y: 52},
                {x: 417, y: 96},
                {x: 417, y: 98},
                {x: 420, y: 56},
                {x: 420, y: 56},
                {x: 421, y: 53},
                {x: 421, y: 54},
                {x: 453, y: 99},
                {x: 455, y: 33},
                {x: 457, y: 53},
                {x: 458, y: 53},
                {x: 460, y: 54},
                {x: 473, y: 31},
                {x: 473, y: 53},
                {x: 475, y: 28},
                {x: 475, y: 32},
                {x: 487, y: 26},
                {x: 487, y: 94},
                {x: 487, y: 94},
                {x: 489, y: 94},
                {x: 489, y: 94},
                {x: 489, y: 101},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 489, y: 100},
                {x: 456, y: 33},
                {x: 489, y: 100},
                {x: 456, y: 33},
                {x: 456, y: 100},
                {x: 486, y: 102},
                {x: 489, y: 100},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 505, y: 2},
                {x: 505, y: 2},
                {x: 505, y: 27},
                {x: 417, y: 52},
                {x: 421, y: 52},
                {x: 421, y: 52},
                {x: 455, y: 33},
                {x: 455, y: 33},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 505, y: 2},
                {x: 505, y: 2},
                {x: 505, y: 27},
                {x: 417, y: 52},
                {x: 421, y: 52},
                {x: 421, y: 52},
                {x: 455, y: 33},
                {x: 455, y: 33},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 505, y: 27},
                {x: 417, y: 52},
                {x: 421, y: 52},
                {x: 421, y: 52},
                {x: 455, y: 33},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 486, y: 102},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                {x: 489, y: 100},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KFW Superpose"],
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
                    case 427:
                        label += "7KFWADA 427D - ";
                        break;
                    case 427:
                        label += "7KFWADA 427D - ";
                        break;
                    case 427:
                        label += "7KFWADA 427D - ";
                        break;
                    case 427:
                        label += "7KFWADA 427D - ";
                        break;
                    case 403:
                        label += "7KFWALA 403R - ";
                        break;
                    case 403:
                        label += "7KFWALA 403R - ";
                        break;
                    case 403:
                        label += "7KFWALA 403R - ";
                        break;
                    case 403:
                        label += "7KFWALA 403R - ";
                        break;
                    case 417:
                        label += "7KFWALA 417K - ";
                        break;
                    case 453:
                        label += "7KFWALA 453Y - ";
                        break;
                    case 494:
                        label += "7KFWALA 494S - ";
                        break;
                    case 496:
                        label += "7KFWALA 496G - ";
                        break;
                    case 498:
                        label += "7KFWALA 498Q - ";
                        break;
                    case 498:
                        label += "7KFWALA 498Q - ";
                        break;
                    case 498:
                        label += "7KFWALA 498Q - ";
                        break;
                    case 500:
                        label += "7KFWALA 500T - ";
                        break;
                    case 501:
                        label += "7KFWALA 501N - ";
                        break;
                    case 502:
                        label += "7KFWALA 502G - ";
                        break;
                    case 505:
                        label += "7KFWALA 505Y - ";
                        break;
                    case 505:
                        label += "7KFWALA 505Y - ";
                        break;
                    case 505:
                        label += "7KFWALA 505Y - ";
                        break;
                    case 505:
                        label += "7KFWALA 505Y - ";
                        break;
                    case 408:
                        label += "7KFWAHA 408R - ";
                        break;
                    case 415:
                        label += "7KFWAHA 415T - ";
                        break;
                    case 416:
                        label += "7KFWAHA 416G - ";
                        break;
                    case 417:
                        label += "7KFWAHA 417K - ";
                        break;
                    case 417:
                        label += "7KFWAHA 417K - ";
                        break;
                    case 417:
                        label += "7KFWAHA 417K - ";
                        break;
                    case 417:
                        label += "7KFWAHA 417K - ";
                        break;
                    case 417:
                        label += "7KFWAHA 417K - ";
                        break;
                    case 420:
                        label += "7KFWAHA 420D - ";
                        break;
                    case 420:
                        label += "7KFWAHA 420D - ";
                        break;
                    case 421:
                        label += "7KFWAHA 421Y - ";
                        break;
                    case 421:
                        label += "7KFWAHA 421Y - ";
                        break;
                    case 421:
                        label += "7KFWAHA 421Y - ";
                        break;
                    case 421:
                        label += "7KFWAHA 421Y - ";
                        break;
                    case 421:
                        label += "7KFWAHA 421Y - ";
                        break;
                    case 453:
                        label += "7KFWAHA 453Y - ";
                        break;
                    case 455:
                        label += "7KFWAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFWAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFWAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFWAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFWAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFWAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFWAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFWAHA 455L - ";
                        break;
                    case 455:
                        label += "7KFWAHA 455L - ";
                        break;
                    case 456:
                        label += "7KFWAHA 456F - ";
                        break;
                    case 456:
                        label += "7KFWAHA 456F - ";
                        break;
                    case 456:
                        label += "7KFWAHA 456F - ";
                        break;
                    case 456:
                        label += "7KFWAHA 456F - ";
                        break;
                    case 456:
                        label += "7KFWAHA 456F - ";
                        break;
                    case 456:
                        label += "7KFWAHA 456F - ";
                        break;
                    case 456:
                        label += "7KFWAHA 456F - ";
                        break;
                    case 457:
                        label += "7KFWAHA 457R - ";
                        break;
                    case 473:
                        label += "7KFWAHA 473Y - ";
                        break;
                    case 473:
                        label += "7KFWAHA 473Y - ";
                        break;
                    case 475:
                        label += "7KFWAHA 475A - ";
                        break;
                    case 475:
                        label += "7KFWAHA 475A - ";
                        break;
                    case 476:
                        label += "7KFWAHA 476G - ";
                        break;
                    case 486:
                        label += "7KFWAHA 486F - ";
                        break;
                    case 486:
                        label += "7KFWAHA 486F - ";
                        break;
                    case 486:
                        label += "7KFWAHA 486F - ";
                        break;
                    case 486:
                        label += "7KFWAHA 486F - ";
                        break;
                    case 486:
                        label += "7KFWAHA 486F - ";
                        break;
                    case 487:
                        label += "7KFWAHA 487N - ";
                        break;
                    case 487:
                        label += "7KFWAHA 487N - ";
                        break;
                    case 487:
                        label += "7KFWAHA 487N - ";
                        break;
                    case 489:
                        label += "7KFWAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KFWAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KFWAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KFWAHA 489Y - ";
                        break;
                    case 493:
                        label += "7KFWAHA 493Q - ";
                        break;
                    case 493:
                        label += "7KFWAHA 493Q - ";
                        break;
                    case 403:
                        label += "7KFWBDB 403R - ";
                        break;
                    case 403:
                        label += "7KFWBDB 403R - ";
                        break;
                    case 403:
                        label += "7KFWBDB 403R - ";
                        break;
                    case 403:
                        label += "7KFWBDB 403R - ";
                        break;
                    case 417:
                        label += "7KFWBDB 417K - ";
                        break;
                    case 453:
                        label += "7KFWBDB 453Y - ";
                        break;
                    case 494:
                        label += "7KFWBDB 494S - ";
                        break;
                    case 495:
                        label += "7KFWBDB 495Y - ";
                        break;
                    case 496:
                        label += "7KFWBDB 496G - ";
                        break;
                    case 498:
                        label += "7KFWBDB 498Q - ";
                        break;
                    case 498:
                        label += "7KFWBDB 498Q - ";
                        break;
                    case 502:
                        label += "7KFWBDB 502G - ";
                        break;
                    case 505:
                        label += "7KFWBDB 505Y - ";
                        break;
                    case 505:
                        label += "7KFWBDB 505Y - ";
                        break;
                    case 505:
                        label += "7KFWBDB 505Y - ";
                        break;
                    case 505:
                        label += "7KFWBDB 505Y - ";
                        break;
                    case 415:
                        label += "7KFWBCB 415T - ";
                        break;
                    case 416:
                        label += "7KFWBCB 416G - ";
                        break;
                    case 417:
                        label += "7KFWBCB 417K - ";
                        break;
                    case 417:
                        label += "7KFWBCB 417K - ";
                        break;
                    case 417:
                        label += "7KFWBCB 417K - ";
                        break;
                    case 417:
                        label += "7KFWBCB 417K - ";
                        break;
                    case 417:
                        label += "7KFWBCB 417K - ";
                        break;
                    case 420:
                        label += "7KFWBCB 420D - ";
                        break;
                    case 420:
                        label += "7KFWBCB 420D - ";
                        break;
                    case 421:
                        label += "7KFWBCB 421Y - ";
                        break;
                    case 421:
                        label += "7KFWBCB 421Y - ";
                        break;
                    case 421:
                        label += "7KFWBCB 421Y - ";
                        break;
                    case 421:
                        label += "7KFWBCB 421Y - ";
                        break;
                    case 421:
                        label += "7KFWBCB 421Y - ";
                        break;
                    case 453:
                        label += "7KFWBCB 453Y - ";
                        break;
                    case 455:
                        label += "7KFWBCB 455L - ";
                        break;
                    case 455:
                        label += "7KFWBCB 455L - ";
                        break;
                    case 455:
                        label += "7KFWBCB 455L - ";
                        break;
                    case 455:
                        label += "7KFWBCB 455L - ";
                        break;
                    case 455:
                        label += "7KFWBCB 455L - ";
                        break;
                    case 455:
                        label += "7KFWBCB 455L - ";
                        break;
                    case 455:
                        label += "7KFWBCB 455L - ";
                        break;
                    case 455:
                        label += "7KFWBCB 455L - ";
                        break;
                    case 455:
                        label += "7KFWBCB 455L - ";
                        break;
                    case 456:
                        label += "7KFWBCB 456F - ";
                        break;
                    case 456:
                        label += "7KFWBCB 456F - ";
                        break;
                    case 456:
                        label += "7KFWBCB 456F - ";
                        break;
                    case 456:
                        label += "7KFWBCB 456F - ";
                        break;
                    case 456:
                        label += "7KFWBCB 456F - ";
                        break;
                    case 456:
                        label += "7KFWBCB 456F - ";
                        break;
                    case 456:
                        label += "7KFWBCB 456F - ";
                        break;
                    case 456:
                        label += "7KFWBCB 456F - ";
                        break;
                    case 456:
                        label += "7KFWBCB 456F - ";
                        break;
                    case 456:
                        label += "7KFWBCB 456F - ";
                        break;
                    case 457:
                        label += "7KFWBCB 457R - ";
                        break;
                    case 473:
                        label += "7KFWBCB 473Y - ";
                        break;
                    case 473:
                        label += "7KFWBCB 473Y - ";
                        break;
                    case 475:
                        label += "7KFWBCB 475A - ";
                        break;
                    case 475:
                        label += "7KFWBCB 475A - ";
                        break;
                    case 486:
                        label += "7KFWBCB 486F - ";
                        break;
                    case 486:
                        label += "7KFWBCB 486F - ";
                        break;
                    case 486:
                        label += "7KFWBCB 486F - ";
                        break;
                    case 486:
                        label += "7KFWBCB 486F - ";
                        break;
                    case 486:
                        label += "7KFWBCB 486F - ";
                        break;
                    case 487:
                        label += "7KFWBCB 487N - ";
                        break;
                    case 487:
                        label += "7KFWBCB 487N - ";
                        break;
                    case 487:
                        label += "7KFWBCB 487N - ";
                        break;
                    case 489:
                        label += "7KFWBCB 489Y - ";
                        break;
                    case 489:
                        label += "7KFWBCB 489Y - ";
                        break;
                    case 489:
                        label += "7KFWBCB 489Y - ";
                        break;
                    case 489:
                        label += "7KFWBCB 489Y - ";
                        break;
                    case 489:
                        label += "7KFWBCB 489Y - ";
                        break;
                    case 489:
                        label += "7KFWBCB 489Y - ";
                        break;
                    case 489:
                        label += "7KFWBCB 489Y - ";
                        break;
                    case 489:
                        label += "7KFWBCB 489Y - ";
                        break;
                    case 489:
                        label += "7KFWBCB 489Y - ";
                        break;
                    case 489:
                        label += "7KFWBCB 489Y - ";
                        break;
                    case 493:
                        label += "7KFWBCB 493Q - ";
                        break;
                    case 493:
                        label += "7KFWBCB 493Q - ";
                        break;
                    case 403:
                        label += "7KFWEGE 403R - ";
                        break;
                    case 403:
                        label += "7KFWEGE 403R - ";
                        break;
                    case 453:
                        label += "7KFWEGE 453Y - ";
                        break;
                    case 493:
                        label += "7KFWEGE 493Q - ";
                        break;
                    case 494:
                        label += "7KFWEGE 494S - ";
                        break;
                    case 505:
                        label += "7KFWEGE 505Y - ";
                        break;
                    case 505:
                        label += "7KFWEGE 505Y - ";
                        break;
                    case 415:
                        label += "7KFWEFE 415T - ";
                        break;
                    case 416:
                        label += "7KFWEFE 416G - ";
                        break;
                    case 417:
                        label += "7KFWEFE 417K - ";
                        break;
                    case 417:
                        label += "7KFWEFE 417K - ";
                        break;
                    case 417:
                        label += "7KFWEFE 417K - ";
                        break;
                    case 417:
                        label += "7KFWEFE 417K - ";
                        break;
                    case 417:
                        label += "7KFWEFE 417K - ";
                        break;
                    case 420:
                        label += "7KFWEFE 420D - ";
                        break;
                    case 420:
                        label += "7KFWEFE 420D - ";
                        break;
                    case 421:
                        label += "7KFWEFE 421Y - ";
                        break;
                    case 421:
                        label += "7KFWEFE 421Y - ";
                        break;
                    case 421:
                        label += "7KFWEFE 421Y - ";
                        break;
                    case 421:
                        label += "7KFWEFE 421Y - ";
                        break;
                    case 453:
                        label += "7KFWEFE 453Y - ";
                        break;
                    case 455:
                        label += "7KFWEFE 455L - ";
                        break;
                    case 455:
                        label += "7KFWEFE 455L - ";
                        break;
                    case 455:
                        label += "7KFWEFE 455L - ";
                        break;
                    case 455:
                        label += "7KFWEFE 455L - ";
                        break;
                    case 455:
                        label += "7KFWEFE 455L - ";
                        break;
                    case 455:
                        label += "7KFWEFE 455L - ";
                        break;
                    case 455:
                        label += "7KFWEFE 455L - ";
                        break;
                    case 455:
                        label += "7KFWEFE 455L - ";
                        break;
                    case 456:
                        label += "7KFWEFE 456F - ";
                        break;
                    case 456:
                        label += "7KFWEFE 456F - ";
                        break;
                    case 456:
                        label += "7KFWEFE 456F - ";
                        break;
                    case 456:
                        label += "7KFWEFE 456F - ";
                        break;
                    case 456:
                        label += "7KFWEFE 456F - ";
                        break;
                    case 456:
                        label += "7KFWEFE 456F - ";
                        break;
                    case 456:
                        label += "7KFWEFE 456F - ";
                        break;
                    case 456:
                        label += "7KFWEFE 456F - ";
                        break;
                    case 456:
                        label += "7KFWEFE 456F - ";
                        break;
                    case 456:
                        label += "7KFWEFE 456F - ";
                        break;
                    case 456:
                        label += "7KFWEFE 456F - ";
                        break;
                    case 456:
                        label += "7KFWEFE 456F - ";
                        break;
                    case 456:
                        label += "7KFWEFE 456F - ";
                        break;
                    case 457:
                        label += "7KFWEFE 457R - ";
                        break;
                    case 458:
                        label += "7KFWEFE 458K - ";
                        break;
                    case 460:
                        label += "7KFWEFE 460N - ";
                        break;
                    case 473:
                        label += "7KFWEFE 473Y - ";
                        break;
                    case 473:
                        label += "7KFWEFE 473Y - ";
                        break;
                    case 475:
                        label += "7KFWEFE 475A - ";
                        break;
                    case 475:
                        label += "7KFWEFE 475A - ";
                        break;
                    case 486:
                        label += "7KFWEFE 486F - ";
                        break;
                    case 486:
                        label += "7KFWEFE 486F - ";
                        break;
                    case 486:
                        label += "7KFWEFE 486F - ";
                        break;
                    case 486:
                        label += "7KFWEFE 486F - ";
                        break;
                    case 486:
                        label += "7KFWEFE 486F - ";
                        break;
                    case 486:
                        label += "7KFWEFE 486F - ";
                        break;
                    case 486:
                        label += "7KFWEFE 486F - ";
                        break;
                    case 486:
                        label += "7KFWEFE 486F - ";
                        break;
                    case 487:
                        label += "7KFWEFE 487N - ";
                        break;
                    case 487:
                        label += "7KFWEFE 487N - ";
                        break;
                    case 487:
                        label += "7KFWEFE 487N - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;
                    case 489:
                        label += "7KFWEFE 489Y - ";
                        break;}
                switch (labely){
                    case 183:
                        label += "D 183K\n";
                        break;
                    case 183:
                        label += "D 183K\n";
                        break;
                    case 187:
                        label += "D 187E\n";
                        break;
                    case 187:
                        label += "D 187E\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 92:
                        label += "L 92N\n";
                        break;
                    case 94:
                        label += "L 94Y\n";
                        break;
                    case 32:
                        label += "L 32Y\n";
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
                    case 67:
                        label += "L 67S\n";
                        break;
                    case 28:
                        label += "L 28G\n";
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
                    case 2:
                        label += "L 2I\n";
                        break;
                    case 27:
                        label += "L 27Q\n";
                        break;
                    case 93:
                        label += "L 93S\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 58:
                        label += "H 58Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 96:
                        label += "H 96D\n";
                        break;
                    case 96:
                        label += "H 96D\n";
                        break;
                    case 98:
                        label += "H 98S\n";
                        break;
                    case 56:
                        label += "H 56T\n";
                        break;
                    case 56:
                        label += "H 56T\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
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
                    case 99:
                        label += "H 99G\n";
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
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
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
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 32:
                        label += "H 32N\n";
                        break;
                    case 28:
                        label += "H 28T\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 2:
                        label += "H 2V\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
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
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 94:
                        label += "H 94R\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 100:
                        label += "H 100Y\n";
                        break;
                    case 92:
                        label += "D 92N\n";
                        break;
                    case 92:
                        label += "D 92N\n";
                        break;
                    case 92:
                        label += "D 92N\n";
                        break;
                    case 92:
                        label += "D 92N\n";
                        break;
                    case 94:
                        label += "D 94Y\n";
                        break;
                    case 32:
                        label += "D 32Y\n";
                        break;
                    case 32:
                        label += "D 32Y\n";
                        break;
                    case 32:
                        label += "D 32Y\n";
                        break;
                    case 30:
                        label += "D 30S\n";
                        break;
                    case 30:
                        label += "D 30S\n";
                        break;
                    case 67:
                        label += "D 67S\n";
                        break;
                    case 28:
                        label += "D 28G\n";
                        break;
                    case 2:
                        label += "D 2I\n";
                        break;
                    case 2:
                        label += "D 2I\n";
                        break;
                    case 27:
                        label += "D 27Q\n";
                        break;
                    case 93:
                        label += "D 93S\n";
                        break;
                    case 58:
                        label += "C 58Y\n";
                        break;
                    case 58:
                        label += "C 58Y\n";
                        break;
                    case 52:
                        label += "C 52Y\n";
                        break;
                    case 52:
                        label += "C 52Y\n";
                        break;
                    case 96:
                        label += "C 96D\n";
                        break;
                    case 96:
                        label += "C 96D\n";
                        break;
                    case 98:
                        label += "C 98S\n";
                        break;
                    case 56:
                        label += "C 56T\n";
                        break;
                    case 56:
                        label += "C 56T\n";
                        break;
                    case 52:
                        label += "C 52Y\n";
                        break;
                    case 52:
                        label += "C 52Y\n";
                        break;
                    case 53:
                        label += "C 53S\n";
                        break;
                    case 53:
                        label += "C 53S\n";
                        break;
                    case 54:
                        label += "C 54G\n";
                        break;
                    case 99:
                        label += "C 99G\n";
                        break;
                    case 33:
                        label += "C 33Y\n";
                        break;
                    case 33:
                        label += "C 33Y\n";
                        break;
                    case 33:
                        label += "C 33Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 33:
                        label += "C 33Y\n";
                        break;
                    case 33:
                        label += "C 33Y\n";
                        break;
                    case 33:
                        label += "C 33Y\n";
                        break;
                    case 33:
                        label += "C 33Y\n";
                        break;
                    case 33:
                        label += "C 33Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 53:
                        label += "C 53S\n";
                        break;
                    case 31:
                        label += "C 31S\n";
                        break;
                    case 53:
                        label += "C 53S\n";
                        break;
                    case 28:
                        label += "C 28T\n";
                        break;
                    case 32:
                        label += "C 32N\n";
                        break;
                    case 2:
                        label += "C 2V\n";
                        break;
                    case 2:
                        label += "C 2V\n";
                        break;
                    case 2:
                        label += "C 2V\n";
                        break;
                    case 102:
                        label += "C 102Y\n";
                        break;
                    case 102:
                        label += "C 102Y\n";
                        break;
                    case 26:
                        label += "C 26G\n";
                        break;
                    case 94:
                        label += "C 94R\n";
                        break;
                    case 94:
                        label += "C 94R\n";
                        break;
                    case 94:
                        label += "C 94R\n";
                        break;
                    case 94:
                        label += "C 94R\n";
                        break;
                    case 94:
                        label += "C 94R\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 101:
                        label += "C 101D\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 92:
                        label += "G 92N\n";
                        break;
                    case 92:
                        label += "G 92N\n";
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
                    case 27:
                        label += "G 27Q\n";
                        break;
                    case 27:
                        label += "G 27Q\n";
                        break;
                    case 58:
                        label += "F 58Y\n";
                        break;
                    case 58:
                        label += "F 58Y\n";
                        break;
                    case 52:
                        label += "F 52Y\n";
                        break;
                    case 52:
                        label += "F 52Y\n";
                        break;
                    case 96:
                        label += "F 96D\n";
                        break;
                    case 96:
                        label += "F 96D\n";
                        break;
                    case 98:
                        label += "F 98S\n";
                        break;
                    case 56:
                        label += "F 56T\n";
                        break;
                    case 56:
                        label += "F 56T\n";
                        break;
                    case 52:
                        label += "F 52Y\n";
                        break;
                    case 52:
                        label += "F 52Y\n";
                        break;
                    case 53:
                        label += "F 53S\n";
                        break;
                    case 54:
                        label += "F 54G\n";
                        break;
                    case 99:
                        label += "F 99G\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 33:
                        label += "F 33Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 53:
                        label += "F 53S\n";
                        break;
                    case 53:
                        label += "F 53S\n";
                        break;
                    case 54:
                        label += "F 54G\n";
                        break;
                    case 31:
                        label += "F 31S\n";
                        break;
                    case 53:
                        label += "F 53S\n";
                        break;
                    case 28:
                        label += "F 28T\n";
                        break;
                    case 32:
                        label += "F 32N\n";
                        break;
                    case 2:
                        label += "F 2V\n";
                        break;
                    case 2:
                        label += "F 2V\n";
                        break;
                    case 2:
                        label += "F 2V\n";
                        break;
                    case 102:
                        label += "F 102Y\n";
                        break;
                    case 102:
                        label += "F 102Y\n";
                        break;
                    case 102:
                        label += "F 102Y\n";
                        break;
                    case 102:
                        label += "F 102Y\n";
                        break;
                    case 102:
                        label += "F 102Y\n";
                        break;
                    case 26:
                        label += "F 26G\n";
                        break;
                    case 94:
                        label += "F 94R\n";
                        break;
                    case 94:
                        label += "F 94R\n";
                        break;
                    case 94:
                        label += "F 94R\n";
                        break;
                    case 94:
                        label += "F 94R\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 101:
                        label += "F 101D\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});