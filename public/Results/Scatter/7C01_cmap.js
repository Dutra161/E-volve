
var myChart7C01 = 0;
var ctx = document.getElementById('7C01').getContext('2d');
if (window.myChart7C01 != 0){
    window.myChart7C01.destroy();
}
window.myChart7C01 = new Chart(ctx, {
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
            data: [{x: 417, y: 104},
                {x: 417, y: 104},
                {x: 417, y: 104},
                {x: 417, y: 104},
                {x: 346, y: 17},
                {x: 346, y: 17},
                {x: 346, y: 17},
                {x: 346, y: 17},
                {x: 346, y: 17},
                {x: 346, y: 17},
                {x: 444, y: 17},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 444, y: 109},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 417, y: 52},
                {x: 417, y: 104},
                {x: 417, y: 104},
                {x: 420, y: 56},
                {x: 420, y: 56},
                {x: 421, y: 53},
                {x: 421, y: 53},
                {x: 421, y: 54},
                {x: 455, y: 33},
                {x: 457, y: 53},
                {x: 457, y: 53},
                {x: 457, y: 54},
                {x: 460, y: 56},
                {x: 473, y: 31},
                {x: 475, y: 28},
                {x: 475, y: 28},
                {x: 475, y: 32},
                {x: 476, y: 28},
                {x: 477, y: 28},
                {x: 487, y: 26},
                {x: 487, y: 97},
                {x: 487, y: 97},
                {x: 489, y: 97},
                {x: 493, y: 102},
                {x: 500, y: 56},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 495, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 92},
                {x: 417, y: 52},
                {x: 417, y: 104},
                {x: 417, y: 104},
                {x: 420, y: 56},
                {x: 420, y: 56},
                {x: 421, y: 53},
                {x: 421, y: 53},
                {x: 421, y: 54},
                {x: 455, y: 33},
                {x: 457, y: 53},
                {x: 457, y: 53},
                {x: 457, y: 54},
                {x: 460, y: 56},
                {x: 473, y: 31},
                {x: 475, y: 28},
                {x: 475, y: 28},
                {x: 475, y: 32},
                {x: 487, y: 26},
                {x: 487, y: 97},
                {x: 487, y: 97},
                {x: 489, y: 97},
                {x: 489, y: 97},
                {x: 493, y: 102},
                {x: 493, y: 102},
                {x: 403, y: 92},
                {x: 403, y: 92},
                {x: 495, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 92},
                {x: 446, y: 7},
                {x: 346, y: 15},
                {x: 346, y: 16},
                {x: 346, y: 17},
                {x: 450, y: 18},
                {x: 450, y: 18},
                {x: 450, y: 18},
                {x: 449, y: 20},
                {x: 450, y: 20},
                {x: 450, y: 20},
                {x: 484, y: 66},
                {x: 484, y: 67},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 456, y: 33},
                {x: 486, y: 108},
                {x: 505, y: 32},
                {x: 505, y: 92},
                {x: 456, y: 33},
                {x: 486, y: 108},
                {x: 505, y: 32},
                {x: 505, y: 92},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 417, y: 52},
                {x: 421, y: 52},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 101},
                {x: 455, y: 101},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 101},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 108},
                {x: 486, y: 108},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 406, y: 94},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 92},
                {x: 505, y: 92},
                {x: 505, y: 92},
                {x: 505, y: 92},
                {x: 417, y: 52},
                {x: 417, y: 52},
                {x: 421, y: 52},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 100},
                {x: 455, y: 101},
                {x: 455, y: 101},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 33},
                {x: 456, y: 99},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 100},
                {x: 456, y: 101},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 2},
                {x: 486, y: 108},
                {x: 486, y: 108},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 99},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 489, y: 101},
                {x: 405, y: 94},
                {x: 406, y: 94},
                {x: 505, y: 32},
                {x: 505, y: 32},
                {x: 505, y: 92},
                {x: 505, y: 92},
                {x: 505, y: 92},
                {x: 505, y: 92},
                {x: 444, y: 11},
                {x: 449, y: 20},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7C01 Superpose"],
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
                        label += "7C01AHA 417K - ";
                        break;
                    case 417:
                        label += "7C01AHA 417K - ";
                        break;
                    case 417:
                        label += "7C01AHA 417K - ";
                        break;
                    case 417:
                        label += "7C01AHA 417K - ";
                        break;
                    case 420:
                        label += "7C01AHA 420D - ";
                        break;
                    case 420:
                        label += "7C01AHA 420D - ";
                        break;
                    case 421:
                        label += "7C01AHA 421Y - ";
                        break;
                    case 421:
                        label += "7C01AHA 421Y - ";
                        break;
                    case 421:
                        label += "7C01AHA 421Y - ";
                        break;
                    case 421:
                        label += "7C01AHA 421Y - ";
                        break;
                    case 455:
                        label += "7C01AHA 455L - ";
                        break;
                    case 455:
                        label += "7C01AHA 455L - ";
                        break;
                    case 455:
                        label += "7C01AHA 455L - ";
                        break;
                    case 455:
                        label += "7C01AHA 455L - ";
                        break;
                    case 455:
                        label += "7C01AHA 455L - ";
                        break;
                    case 455:
                        label += "7C01AHA 455L - ";
                        break;
                    case 456:
                        label += "7C01AHA 456F - ";
                        break;
                    case 456:
                        label += "7C01AHA 456F - ";
                        break;
                    case 456:
                        label += "7C01AHA 456F - ";
                        break;
                    case 456:
                        label += "7C01AHA 456F - ";
                        break;
                    case 456:
                        label += "7C01AHA 456F - ";
                        break;
                    case 456:
                        label += "7C01AHA 456F - ";
                        break;
                    case 456:
                        label += "7C01AHA 456F - ";
                        break;
                    case 456:
                        label += "7C01AHA 456F - ";
                        break;
                    case 456:
                        label += "7C01AHA 456F - ";
                        break;
                    case 456:
                        label += "7C01AHA 456F - ";
                        break;
                    case 457:
                        label += "7C01AHA 457R - ";
                        break;
                    case 457:
                        label += "7C01AHA 457R - ";
                        break;
                    case 457:
                        label += "7C01AHA 457R - ";
                        break;
                    case 460:
                        label += "7C01AHA 460N - ";
                        break;
                    case 473:
                        label += "7C01AHA 473Y - ";
                        break;
                    case 475:
                        label += "7C01AHA 475A - ";
                        break;
                    case 475:
                        label += "7C01AHA 475A - ";
                        break;
                    case 475:
                        label += "7C01AHA 475A - ";
                        break;
                    case 476:
                        label += "7C01AHA 476G - ";
                        break;
                    case 477:
                        label += "7C01AHA 477S - ";
                        break;
                    case 486:
                        label += "7C01AHA 486F - ";
                        break;
                    case 486:
                        label += "7C01AHA 486F - ";
                        break;
                    case 486:
                        label += "7C01AHA 486F - ";
                        break;
                    case 486:
                        label += "7C01AHA 486F - ";
                        break;
                    case 486:
                        label += "7C01AHA 486F - ";
                        break;
                    case 486:
                        label += "7C01AHA 486F - ";
                        break;
                    case 487:
                        label += "7C01AHA 487N - ";
                        break;
                    case 487:
                        label += "7C01AHA 487N - ";
                        break;
                    case 487:
                        label += "7C01AHA 487N - ";
                        break;
                    case 489:
                        label += "7C01AHA 489Y - ";
                        break;
                    case 489:
                        label += "7C01AHA 489Y - ";
                        break;
                    case 489:
                        label += "7C01AHA 489Y - ";
                        break;
                    case 489:
                        label += "7C01AHA 489Y - ";
                        break;
                    case 489:
                        label += "7C01AHA 489Y - ";
                        break;
                    case 489:
                        label += "7C01AHA 489Y - ";
                        break;
                    case 489:
                        label += "7C01AHA 489Y - ";
                        break;
                    case 489:
                        label += "7C01AHA 489Y - ";
                        break;
                    case 489:
                        label += "7C01AHA 489Y - ";
                        break;
                    case 493:
                        label += "7C01AHA 493Q - ";
                        break;
                    case 500:
                        label += "7C01ADA 500T - ";
                        break;
                    case 403:
                        label += "7C01ALA 403R - ";
                        break;
                    case 403:
                        label += "7C01ALA 403R - ";
                        break;
                    case 406:
                        label += "7C01ALA 406E - ";
                        break;
                    case 495:
                        label += "7C01ALA 495Y - ";
                        break;
                    case 505:
                        label += "7C01ALA 505Y - ";
                        break;
                    case 505:
                        label += "7C01ALA 505Y - ";
                        break;
                    case 505:
                        label += "7C01ALA 505Y - ";
                        break;
                    case 505:
                        label += "7C01ALA 505Y - ";
                        break;
                    case 505:
                        label += "7C01ALA 505Y - ";
                        break;
                    case 505:
                        label += "7C01ALA 505Y - ";
                        break;
                    case 505:
                        label += "7C01ALA 505Y - ";
                        break;
                    case 505:
                        label += "7C01ALA 505Y - ";
                        break;
                    case 505:
                        label += "7C01ALA 505Y - ";
                        break;
                    case 505:
                        label += "7C01ALA 505Y - ";
                        break;
                    case 505:
                        label += "7C01ALA 505Y - ";
                        break;
                    case 505:
                        label += "7C01ALA 505Y - ";
                        break;
                    case 417:
                        label += "7C01BCB 417K - ";
                        break;
                    case 417:
                        label += "7C01BCB 417K - ";
                        break;
                    case 417:
                        label += "7C01BCB 417K - ";
                        break;
                    case 417:
                        label += "7C01BCB 417K - ";
                        break;
                    case 417:
                        label += "7C01BCB 417K - ";
                        break;
                    case 420:
                        label += "7C01BCB 420D - ";
                        break;
                    case 420:
                        label += "7C01BCB 420D - ";
                        break;
                    case 421:
                        label += "7C01BCB 421Y - ";
                        break;
                    case 421:
                        label += "7C01BCB 421Y - ";
                        break;
                    case 421:
                        label += "7C01BCB 421Y - ";
                        break;
                    case 421:
                        label += "7C01BCB 421Y - ";
                        break;
                    case 455:
                        label += "7C01BCB 455L - ";
                        break;
                    case 455:
                        label += "7C01BCB 455L - ";
                        break;
                    case 455:
                        label += "7C01BCB 455L - ";
                        break;
                    case 455:
                        label += "7C01BCB 455L - ";
                        break;
                    case 455:
                        label += "7C01BCB 455L - ";
                        break;
                    case 455:
                        label += "7C01BCB 455L - ";
                        break;
                    case 456:
                        label += "7C01BCB 456F - ";
                        break;
                    case 456:
                        label += "7C01BCB 456F - ";
                        break;
                    case 456:
                        label += "7C01BCB 456F - ";
                        break;
                    case 456:
                        label += "7C01BCB 456F - ";
                        break;
                    case 456:
                        label += "7C01BCB 456F - ";
                        break;
                    case 456:
                        label += "7C01BCB 456F - ";
                        break;
                    case 456:
                        label += "7C01BCB 456F - ";
                        break;
                    case 456:
                        label += "7C01BCB 456F - ";
                        break;
                    case 456:
                        label += "7C01BCB 456F - ";
                        break;
                    case 456:
                        label += "7C01BCB 456F - ";
                        break;
                    case 456:
                        label += "7C01BCB 456F - ";
                        break;
                    case 456:
                        label += "7C01BCB 456F - ";
                        break;
                    case 456:
                        label += "7C01BCB 456F - ";
                        break;
                    case 457:
                        label += "7C01BCB 457R - ";
                        break;
                    case 457:
                        label += "7C01BCB 457R - ";
                        break;
                    case 457:
                        label += "7C01BCB 457R - ";
                        break;
                    case 460:
                        label += "7C01BCB 460N - ";
                        break;
                    case 473:
                        label += "7C01BCB 473Y - ";
                        break;
                    case 475:
                        label += "7C01BCB 475A - ";
                        break;
                    case 475:
                        label += "7C01BCB 475A - ";
                        break;
                    case 475:
                        label += "7C01BCB 475A - ";
                        break;
                    case 486:
                        label += "7C01BCB 486F - ";
                        break;
                    case 486:
                        label += "7C01BCB 486F - ";
                        break;
                    case 486:
                        label += "7C01BCB 486F - ";
                        break;
                    case 486:
                        label += "7C01BCB 486F - ";
                        break;
                    case 486:
                        label += "7C01BCB 486F - ";
                        break;
                    case 486:
                        label += "7C01BCB 486F - ";
                        break;
                    case 487:
                        label += "7C01BCB 487N - ";
                        break;
                    case 487:
                        label += "7C01BCB 487N - ";
                        break;
                    case 487:
                        label += "7C01BCB 487N - ";
                        break;
                    case 489:
                        label += "7C01BCB 489Y - ";
                        break;
                    case 489:
                        label += "7C01BCB 489Y - ";
                        break;
                    case 489:
                        label += "7C01BCB 489Y - ";
                        break;
                    case 489:
                        label += "7C01BCB 489Y - ";
                        break;
                    case 489:
                        label += "7C01BCB 489Y - ";
                        break;
                    case 489:
                        label += "7C01BCB 489Y - ";
                        break;
                    case 489:
                        label += "7C01BCB 489Y - ";
                        break;
                    case 489:
                        label += "7C01BCB 489Y - ";
                        break;
                    case 489:
                        label += "7C01BCB 489Y - ";
                        break;
                    case 489:
                        label += "7C01BCB 489Y - ";
                        break;
                    case 489:
                        label += "7C01BCB 489Y - ";
                        break;
                    case 493:
                        label += "7C01BCB 493Q - ";
                        break;
                    case 493:
                        label += "7C01BCB 493Q - ";
                        break;
                    case 403:
                        label += "7C01BDB 403R - ";
                        break;
                    case 403:
                        label += "7C01BDB 403R - ";
                        break;
                    case 405:
                        label += "7C01BDB 405D - ";
                        break;
                    case 406:
                        label += "7C01BDB 406E - ";
                        break;
                    case 495:
                        label += "7C01BDB 495Y - ";
                        break;
                    case 505:
                        label += "7C01BDB 505Y - ";
                        break;
                    case 505:
                        label += "7C01BDB 505Y - ";
                        break;
                    case 505:
                        label += "7C01BDB 505Y - ";
                        break;
                    case 505:
                        label += "7C01BDB 505Y - ";
                        break;
                    case 505:
                        label += "7C01BDB 505Y - ";
                        break;
                    case 505:
                        label += "7C01BDB 505Y - ";
                        break;
                    case 505:
                        label += "7C01BDB 505Y - ";
                        break;
                    case 505:
                        label += "7C01BDB 505Y - ";
                        break;
                    case 505:
                        label += "7C01BDB 505Y - ";
                        break;
                    case 505:
                        label += "7C01BDB 505Y - ";
                        break;
                    case 446:
                        label += "7C01BLB 446G - ";
                        break;
                    case 444:
                        label += "7C01BLB 444K - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 346:
                        label += "7C01BLB 346R - ";
                        break;
                    case 444:
                        label += "7C01BLB 444K - ";
                        break;
                    case 450:
                        label += "7C01BLB 450N - ";
                        break;
                    case 450:
                        label += "7C01BLB 450N - ";
                        break;
                    case 450:
                        label += "7C01BLB 450N - ";
                        break;
                    case 449:
                        label += "7C01BLB 449Y - ";
                        break;
                    case 449:
                        label += "7C01BLB 449Y - ";
                        break;
                    case 450:
                        label += "7C01BLB 450N - ";
                        break;
                    case 450:
                        label += "7C01BLB 450N - ";
                        break;
                    case 484:
                        label += "7C01BLB 484E - ";
                        break;
                    case 484:
                        label += "7C01BLB 484E - ";
                        break;
                    case 444:
                        label += "7C01BLB 444K - ";
                        break;}
                switch (labely){
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 52:
                        label += "H 52Y\n";
                        break;
                    case 104:
                        label += "H 104D\n";
                        break;
                    case 104:
                        label += "H 104D\n";
                        break;
                    case 56:
                        label += "H 56S\n";
                        break;
                    case 56:
                        label += "H 56S\n";
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
                    case 33:
                        label += "H 33Y\n";
                        break;
                    case 100:
                        label += "H 100P\n";
                        break;
                    case 100:
                        label += "H 100P\n";
                        break;
                    case 100:
                        label += "H 100P\n";
                        break;
                    case 101:
                        label += "H 101M\n";
                        break;
                    case 101:
                        label += "H 101M\n";
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
                        label += "H 100P\n";
                        break;
                    case 100:
                        label += "H 100P\n";
                        break;
                    case 100:
                        label += "H 100P\n";
                        break;
                    case 100:
                        label += "H 100P\n";
                        break;
                    case 100:
                        label += "H 100P\n";
                        break;
                    case 101:
                        label += "H 101M\n";
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
                    case 56:
                        label += "H 56S\n";
                        break;
                    case 31:
                        label += "H 31S\n";
                        break;
                    case 28:
                        label += "H 28T\n";
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
                    case 108:
                        label += "H 108Y\n";
                        break;
                    case 108:
                        label += "H 108Y\n";
                        break;
                    case 108:
                        label += "H 108Y\n";
                        break;
                    case 26:
                        label += "H 26G\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 97:
                        label += "H 97R\n";
                        break;
                    case 99:
                        label += "H 99L\n";
                        break;
                    case 99:
                        label += "H 99L\n";
                        break;
                    case 99:
                        label += "H 99L\n";
                        break;
                    case 101:
                        label += "H 101M\n";
                        break;
                    case 101:
                        label += "H 101M\n";
                        break;
                    case 101:
                        label += "H 101M\n";
                        break;
                    case 101:
                        label += "H 101M\n";
                        break;
                    case 101:
                        label += "H 101M\n";
                        break;
                    case 102:
                        label += "H 102Y\n";
                        break;
                    case 56:
                        label += "D 56S\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 94:
                        label += "L 94T\n";
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
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 52:
                        label += "C 52Y\n";
                        break;
                    case 52:
                        label += "C 52Y\n";
                        break;
                    case 52:
                        label += "C 52Y\n";
                        break;
                    case 104:
                        label += "C 104D\n";
                        break;
                    case 104:
                        label += "C 104D\n";
                        break;
                    case 56:
                        label += "C 56S\n";
                        break;
                    case 56:
                        label += "C 56S\n";
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
                    case 33:
                        label += "C 33Y\n";
                        break;
                    case 100:
                        label += "C 100P\n";
                        break;
                    case 100:
                        label += "C 100P\n";
                        break;
                    case 100:
                        label += "C 100P\n";
                        break;
                    case 101:
                        label += "C 101M\n";
                        break;
                    case 101:
                        label += "C 101M\n";
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
                    case 99:
                        label += "C 99L\n";
                        break;
                    case 100:
                        label += "C 100P\n";
                        break;
                    case 100:
                        label += "C 100P\n";
                        break;
                    case 100:
                        label += "C 100P\n";
                        break;
                    case 100:
                        label += "C 100P\n";
                        break;
                    case 100:
                        label += "C 100P\n";
                        break;
                    case 100:
                        label += "C 100P\n";
                        break;
                    case 101:
                        label += "C 101M\n";
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
                    case 56:
                        label += "C 56S\n";
                        break;
                    case 31:
                        label += "C 31S\n";
                        break;
                    case 28:
                        label += "C 28T\n";
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
                    case 108:
                        label += "C 108Y\n";
                        break;
                    case 108:
                        label += "C 108Y\n";
                        break;
                    case 108:
                        label += "C 108Y\n";
                        break;
                    case 26:
                        label += "C 26G\n";
                        break;
                    case 97:
                        label += "C 97R\n";
                        break;
                    case 97:
                        label += "C 97R\n";
                        break;
                    case 97:
                        label += "C 97R\n";
                        break;
                    case 97:
                        label += "C 97R\n";
                        break;
                    case 99:
                        label += "C 99L\n";
                        break;
                    case 99:
                        label += "C 99L\n";
                        break;
                    case 99:
                        label += "C 99L\n";
                        break;
                    case 99:
                        label += "C 99L\n";
                        break;
                    case 101:
                        label += "C 101M\n";
                        break;
                    case 101:
                        label += "C 101M\n";
                        break;
                    case 101:
                        label += "C 101M\n";
                        break;
                    case 101:
                        label += "C 101M\n";
                        break;
                    case 101:
                        label += "C 101M\n";
                        break;
                    case 102:
                        label += "C 102Y\n";
                        break;
                    case 102:
                        label += "C 102Y\n";
                        break;
                    case 92:
                        label += "D 92Y\n";
                        break;
                    case 92:
                        label += "D 92Y\n";
                        break;
                    case 94:
                        label += "D 94T\n";
                        break;
                    case 94:
                        label += "D 94T\n";
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
                    case 32:
                        label += "D 32Y\n";
                        break;
                    case 32:
                        label += "D 32Y\n";
                        break;
                    case 92:
                        label += "D 92Y\n";
                        break;
                    case 92:
                        label += "D 92Y\n";
                        break;
                    case 92:
                        label += "D 92Y\n";
                        break;
                    case 92:
                        label += "D 92Y\n";
                        break;
                    case 92:
                        label += "D 92Y\n";
                        break;
                    case 92:
                        label += "D 92Y\n";
                        break;
                    case 7:
                        label += "L 7S\n";
                        break;
                    case 11:
                        label += "L 11L\n";
                        break;
                    case 15:
                        label += "L 15V\n";
                        break;
                    case 16:
                        label += "L 16G\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 17:
                        label += "L 17D\n";
                        break;
                    case 18:
                        label += "L 18R\n";
                        break;
                    case 18:
                        label += "L 18R\n";
                        break;
                    case 18:
                        label += "L 18R\n";
                        break;
                    case 20:
                        label += "L 20T\n";
                        break;
                    case 20:
                        label += "L 20T\n";
                        break;
                    case 20:
                        label += "L 20T\n";
                        break;
                    case 20:
                        label += "L 20T\n";
                        break;
                    case 66:
                        label += "L 66G\n";
                        break;
                    case 67:
                        label += "L 67S\n";
                        break;
                    case 109:
                        label += "L 109K\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});