
var myChart7KN5 = 0;
var ctx = document.getElementById('7KN5').getContext('2d');
if (window.myChart7KN5 != 0){
    window.myChart7KN5.destroy();
}
window.myChart7KN5 = new Chart(ctx, {
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
            data: [{x: 403, y: 101},
                {x: 444, y: 30},
                {x: 444, y: 30},
                {x: 484, y: 56},
                {x: 386, y: 85},
                {x: 389, y: 43},
                {x: 378, y: 101},
                {x: 378, y: 101},
                {x: 403, y: 101},
                {x: 403, y: 101},
                {x: 403, y: 101},
                {x: 444, y: 30},
                {x: 444, y: 30},
                {x: 484, y: 56},
                {x: 484, y: 56},
                {x: 378, y: 101},
                {x: 378, y: 101},
                {x: 408, y: 101},
                {x: 408, y: 101},
                {x: 408, y: 101},
                {x: 408, y: 101},
                {x: 408, y: 101},
                {x: 408, y: 101},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 444, y: 30},
                {x: 446, y: 30},
                {x: 449, y: 30},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 492, y: 98},
                {x: 493, y: 96},
                {x: 493, y: 97},
                {x: 493, y: 98},
                {x: 493, y: 98},
                {x: 494, y: 98},
                {x: 494, y: 99},
                {x: 494, y: 99},
                {x: 498, y: 28},
                {x: 498, y: 28},
                {x: 498, y: 29},
                {x: 391, y: 42},
                {x: 369, y: 52},
                {x: 369, y: 99},
                {x: 371, y: 98},
                {x: 371, y: 98},
                {x: 371, y: 99},
                {x: 371, y: 100},
                {x: 373, y: 98},
                {x: 374, y: 98},
                {x: 374, y: 98},
                {x: 374, y: 98},
                {x: 375, y: 95},
                {x: 376, y: 95},
                {x: 377, y: 96},
                {x: 377, y: 96},
                {x: 378, y: 96},
                {x: 383, y: 31},
                {x: 446, y: 30},
                {x: 449, y: 30},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 484, y: 100},
                {x: 492, y: 98},
                {x: 493, y: 96},
                {x: 493, y: 97},
                {x: 493, y: 98},
                {x: 493, y: 98},
                {x: 494, y: 98},
                {x: 494, y: 99},
                {x: 498, y: 28},
                {x: 498, y: 28},
                {x: 498, y: 29},
                {x: 368, y: 98},
                {x: 369, y: 52},
                {x: 369, y: 98},
                {x: 369, y: 99},
                {x: 371, y: 98},
                {x: 371, y: 98},
                {x: 371, y: 98},
                {x: 371, y: 99},
                {x: 371, y: 100},
                {x: 374, y: 98},
                {x: 375, y: 95},
                {x: 376, y: 95},
                {x: 377, y: 96},
                {x: 377, y: 96},
                {x: 378, y: 101},
                {x: 378, y: 101},
                {x: 383, y: 31},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 449, y: 31},
                {x: 486, y: 58},
                {x: 369, y: 99},
                {x: 449, y: 31},
                {x: 369, y: 99},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 96},
                {x: 449, y: 96},
                {x: 449, y: 99},
                {x: 452, y: 98},
                {x: 452, y: 100},
                {x: 452, y: 100},
                {x: 452, y: 100},
                {x: 470, y: 100},
                {x: 470, y: 100},
                {x: 486, y: 37},
                {x: 486, y: 50},
                {x: 486, y: 58},
                {x: 486, y: 58},
                {x: 486, y: 58},
                {x: 486, y: 58},
                {x: 486, y: 58},
                {x: 486, y: 58},
                {x: 486, y: 58},
                {x: 486, y: 58},
                {x: 486, y: 58},
                {x: 486, y: 58},
                {x: 490, y: 98},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 492, y: 100},
                {x: 492, y: 100},
                {x: 498, y: 29},
                {x: 382, y: 41},
                {x: 390, y: 43},
                {x: 390, y: 43},
                {x: 392, y: 41},
                {x: 430, y: 41},
                {x: 430, y: 41},
                {x: 517, y: 41},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 370, y: 100},
                {x: 372, y: 100},
                {x: 384, y: 31},
                {x: 384, y: 31},
                {x: 384, y: 31},
                {x: 385, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 31},
                {x: 449, y: 96},
                {x: 449, y: 96},
                {x: 449, y: 99},
                {x: 452, y: 98},
                {x: 452, y: 100},
                {x: 470, y: 100},
                {x: 470, y: 100},
                {x: 486, y: 58},
                {x: 486, y: 58},
                {x: 490, y: 98},
                {x: 490, y: 98},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 490, y: 100},
                {x: 492, y: 100},
                {x: 492, y: 100},
                {x: 498, y: 29},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 369, y: 99},
                {x: 370, y: 100},
                {x: 372, y: 100},
                {x: 384, y: 31},
                {x: 384, y: 31},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KN5 Superpose"],
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
                        label += "7KN5ACA 403R - ";
                        break;
                    case 444:
                        label += "7KN5ACA 444K - ";
                        break;
                    case 444:
                        label += "7KN5ACA 444K - ";
                        break;
                    case 446:
                        label += "7KN5ACA 446G - ";
                        break;
                    case 449:
                        label += "7KN5ACA 449Y - ";
                        break;
                    case 449:
                        label += "7KN5ACA 449Y - ";
                        break;
                    case 449:
                        label += "7KN5ACA 449Y - ";
                        break;
                    case 449:
                        label += "7KN5ACA 449Y - ";
                        break;
                    case 449:
                        label += "7KN5ACA 449Y - ";
                        break;
                    case 449:
                        label += "7KN5ACA 449Y - ";
                        break;
                    case 449:
                        label += "7KN5ACA 449Y - ";
                        break;
                    case 449:
                        label += "7KN5ACA 449Y - ";
                        break;
                    case 449:
                        label += "7KN5ACA 449Y - ";
                        break;
                    case 449:
                        label += "7KN5ACA 449Y - ";
                        break;
                    case 449:
                        label += "7KN5ACA 449Y - ";
                        break;
                    case 449:
                        label += "7KN5ACA 449Y - ";
                        break;
                    case 452:
                        label += "7KN5ACA 452L - ";
                        break;
                    case 452:
                        label += "7KN5ACA 452L - ";
                        break;
                    case 452:
                        label += "7KN5ACA 452L - ";
                        break;
                    case 452:
                        label += "7KN5ACA 452L - ";
                        break;
                    case 470:
                        label += "7KN5ACA 470T - ";
                        break;
                    case 470:
                        label += "7KN5ACA 470T - ";
                        break;
                    case 484:
                        label += "7KN5ACA 484E - ";
                        break;
                    case 486:
                        label += "7KN5ACA 486F - ";
                        break;
                    case 486:
                        label += "7KN5ACA 486F - ";
                        break;
                    case 486:
                        label += "7KN5ACA 486F - ";
                        break;
                    case 486:
                        label += "7KN5ACA 486F - ";
                        break;
                    case 486:
                        label += "7KN5ACA 486F - ";
                        break;
                    case 486:
                        label += "7KN5ACA 486F - ";
                        break;
                    case 486:
                        label += "7KN5ACA 486F - ";
                        break;
                    case 486:
                        label += "7KN5ACA 486F - ";
                        break;
                    case 486:
                        label += "7KN5ACA 486F - ";
                        break;
                    case 486:
                        label += "7KN5ACA 486F - ";
                        break;
                    case 486:
                        label += "7KN5ACA 486F - ";
                        break;
                    case 486:
                        label += "7KN5ACA 486F - ";
                        break;
                    case 486:
                        label += "7KN5ACA 486F - ";
                        break;
                    case 490:
                        label += "7KN5ACA 490F - ";
                        break;
                    case 490:
                        label += "7KN5ACA 490F - ";
                        break;
                    case 490:
                        label += "7KN5ACA 490F - ";
                        break;
                    case 490:
                        label += "7KN5ACA 490F - ";
                        break;
                    case 490:
                        label += "7KN5ACA 490F - ";
                        break;
                    case 490:
                        label += "7KN5ACA 490F - ";
                        break;
                    case 490:
                        label += "7KN5ACA 490F - ";
                        break;
                    case 490:
                        label += "7KN5ACA 490F - ";
                        break;
                    case 492:
                        label += "7KN5ACA 492L - ";
                        break;
                    case 492:
                        label += "7KN5ACA 492L - ";
                        break;
                    case 492:
                        label += "7KN5ACA 492L - ";
                        break;
                    case 493:
                        label += "7KN5ACA 493Q - ";
                        break;
                    case 493:
                        label += "7KN5ACA 493Q - ";
                        break;
                    case 493:
                        label += "7KN5ACA 493Q - ";
                        break;
                    case 493:
                        label += "7KN5ACA 493Q - ";
                        break;
                    case 494:
                        label += "7KN5ACA 494S - ";
                        break;
                    case 494:
                        label += "7KN5ACA 494S - ";
                        break;
                    case 494:
                        label += "7KN5ACA 494S - ";
                        break;
                    case 498:
                        label += "7KN5ACA 498Q - ";
                        break;
                    case 498:
                        label += "7KN5ACA 498Q - ";
                        break;
                    case 498:
                        label += "7KN5ACA 498Q - ";
                        break;
                    case 498:
                        label += "7KN5ACA 498Q - ";
                        break;
                    case 382:
                        label += "7KN5ADA 382V - ";
                        break;
                    case 386:
                        label += "7KN5ADA 386K - ";
                        break;
                    case 389:
                        label += "7KN5ADA 389D - ";
                        break;
                    case 390:
                        label += "7KN5ADA 390L - ";
                        break;
                    case 390:
                        label += "7KN5ADA 390L - ";
                        break;
                    case 391:
                        label += "7KN5ADA 391C - ";
                        break;
                    case 392:
                        label += "7KN5ADA 392F - ";
                        break;
                    case 430:
                        label += "7KN5ADA 430T - ";
                        break;
                    case 430:
                        label += "7KN5ADA 430T - ";
                        break;
                    case 517:
                        label += "7KN5ADA 517L - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 369:
                        label += "7KN5AEA 369Y - ";
                        break;
                    case 370:
                        label += "7KN5AEA 370N - ";
                        break;
                    case 371:
                        label += "7KN5AEA 371S - ";
                        break;
                    case 371:
                        label += "7KN5AEA 371S - ";
                        break;
                    case 371:
                        label += "7KN5AEA 371S - ";
                        break;
                    case 371:
                        label += "7KN5AEA 371S - ";
                        break;
                    case 372:
                        label += "7KN5AEA 372A - ";
                        break;
                    case 373:
                        label += "7KN5AEA 373S - ";
                        break;
                    case 374:
                        label += "7KN5AEA 374F - ";
                        break;
                    case 374:
                        label += "7KN5AEA 374F - ";
                        break;
                    case 374:
                        label += "7KN5AEA 374F - ";
                        break;
                    case 375:
                        label += "7KN5AEA 375S - ";
                        break;
                    case 376:
                        label += "7KN5AEA 376T - ";
                        break;
                    case 377:
                        label += "7KN5AEA 377F - ";
                        break;
                    case 377:
                        label += "7KN5AEA 377F - ";
                        break;
                    case 378:
                        label += "7KN5AEA 378K - ";
                        break;
                    case 378:
                        label += "7KN5AEA 378K - ";
                        break;
                    case 378:
                        label += "7KN5AEA 378K - ";
                        break;
                    case 383:
                        label += "7KN5AEA 383S - ";
                        break;
                    case 384:
                        label += "7KN5AEA 384P - ";
                        break;
                    case 384:
                        label += "7KN5AEA 384P - ";
                        break;
                    case 384:
                        label += "7KN5AEA 384P - ";
                        break;
                    case 385:
                        label += "7KN5AEA 385T - ";
                        break;
                    case 403:
                        label += "7KN5BDB 403R - ";
                        break;
                    case 403:
                        label += "7KN5BDB 403R - ";
                        break;
                    case 403:
                        label += "7KN5BDB 403R - ";
                        break;
                    case 444:
                        label += "7KN5BDB 444K - ";
                        break;
                    case 444:
                        label += "7KN5BDB 444K - ";
                        break;
                    case 446:
                        label += "7KN5BDB 446G - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 449:
                        label += "7KN5BDB 449Y - ";
                        break;
                    case 452:
                        label += "7KN5BDB 452L - ";
                        break;
                    case 452:
                        label += "7KN5BDB 452L - ";
                        break;
                    case 470:
                        label += "7KN5BDB 470T - ";
                        break;
                    case 470:
                        label += "7KN5BDB 470T - ";
                        break;
                    case 484:
                        label += "7KN5BDB 484E - ";
                        break;
                    case 484:
                        label += "7KN5BDB 484E - ";
                        break;
                    case 484:
                        label += "7KN5BDB 484E - ";
                        break;
                    case 486:
                        label += "7KN5BDB 486F - ";
                        break;
                    case 486:
                        label += "7KN5BDB 486F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 490:
                        label += "7KN5BDB 490F - ";
                        break;
                    case 492:
                        label += "7KN5BDB 492L - ";
                        break;
                    case 492:
                        label += "7KN5BDB 492L - ";
                        break;
                    case 492:
                        label += "7KN5BDB 492L - ";
                        break;
                    case 493:
                        label += "7KN5BDB 493Q - ";
                        break;
                    case 493:
                        label += "7KN5BDB 493Q - ";
                        break;
                    case 493:
                        label += "7KN5BDB 493Q - ";
                        break;
                    case 493:
                        label += "7KN5BDB 493Q - ";
                        break;
                    case 494:
                        label += "7KN5BDB 494S - ";
                        break;
                    case 494:
                        label += "7KN5BDB 494S - ";
                        break;
                    case 498:
                        label += "7KN5BDB 498Q - ";
                        break;
                    case 498:
                        label += "7KN5BDB 498Q - ";
                        break;
                    case 498:
                        label += "7KN5BDB 498Q - ";
                        break;
                    case 498:
                        label += "7KN5BDB 498Q - ";
                        break;
                    case 368:
                        label += "7KN5BFB 368L - ";
                        break;
                    case 369:
                        label += "7KN5BFB 369Y - ";
                        break;
                    case 369:
                        label += "7KN5BFB 369Y - ";
                        break;
                    case 369:
                        label += "7KN5BFB 369Y - ";
                        break;
                    case 369:
                        label += "7KN5BFB 369Y - ";
                        break;
                    case 369:
                        label += "7KN5BFB 369Y - ";
                        break;
                    case 369:
                        label += "7KN5BFB 369Y - ";
                        break;
                    case 369:
                        label += "7KN5BFB 369Y - ";
                        break;
                    case 369:
                        label += "7KN5BFB 369Y - ";
                        break;
                    case 369:
                        label += "7KN5BFB 369Y - ";
                        break;
                    case 369:
                        label += "7KN5BFB 369Y - ";
                        break;
                    case 369:
                        label += "7KN5BFB 369Y - ";
                        break;
                    case 369:
                        label += "7KN5BFB 369Y - ";
                        break;
                    case 369:
                        label += "7KN5BFB 369Y - ";
                        break;
                    case 370:
                        label += "7KN5BFB 370N - ";
                        break;
                    case 371:
                        label += "7KN5BFB 371S - ";
                        break;
                    case 371:
                        label += "7KN5BFB 371S - ";
                        break;
                    case 371:
                        label += "7KN5BFB 371S - ";
                        break;
                    case 371:
                        label += "7KN5BFB 371S - ";
                        break;
                    case 371:
                        label += "7KN5BFB 371S - ";
                        break;
                    case 372:
                        label += "7KN5BFB 372A - ";
                        break;
                    case 374:
                        label += "7KN5BFB 374F - ";
                        break;
                    case 375:
                        label += "7KN5BFB 375S - ";
                        break;
                    case 376:
                        label += "7KN5BFB 376T - ";
                        break;
                    case 377:
                        label += "7KN5BFB 377F - ";
                        break;
                    case 377:
                        label += "7KN5BFB 377F - ";
                        break;
                    case 378:
                        label += "7KN5BFB 378K - ";
                        break;
                    case 378:
                        label += "7KN5BFB 378K - ";
                        break;
                    case 383:
                        label += "7KN5BFB 383S - ";
                        break;
                    case 384:
                        label += "7KN5BFB 384P - ";
                        break;
                    case 384:
                        label += "7KN5BFB 384P - ";
                        break;
                    case 408:
                        label += "7KN5BFB 408R - ";
                        break;
                    case 408:
                        label += "7KN5BFB 408R - ";
                        break;
                    case 408:
                        label += "7KN5BFB 408R - ";
                        break;
                    case 408:
                        label += "7KN5BFB 408R - ";
                        break;
                    case 408:
                        label += "7KN5BFB 408R - ";
                        break;
                    case 408:
                        label += "7KN5BFB 408R - ";
                        break;}
                switch (labely){
                    case 101:
                        label += "C 101D\n";
                        break;
                    case 30:
                        label += "C 30D\n";
                        break;
                    case 30:
                        label += "C 30D\n";
                        break;
                    case 30:
                        label += "C 30D\n";
                        break;
                    case 30:
                        label += "C 30D\n";
                        break;
                    case 31:
                        label += "C 31Y\n";
                        break;
                    case 31:
                        label += "C 31Y\n";
                        break;
                    case 31:
                        label += "C 31Y\n";
                        break;
                    case 31:
                        label += "C 31Y\n";
                        break;
                    case 31:
                        label += "C 31Y\n";
                        break;
                    case 31:
                        label += "C 31Y\n";
                        break;
                    case 31:
                        label += "C 31Y\n";
                        break;
                    case 31:
                        label += "C 31Y\n";
                        break;
                    case 96:
                        label += "C 96V\n";
                        break;
                    case 96:
                        label += "C 96V\n";
                        break;
                    case 99:
                        label += "C 99Y\n";
                        break;
                    case 98:
                        label += "C 98T\n";
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
                    case 56:
                        label += "C 56R\n";
                        break;
                    case 37:
                        label += "C 37F\n";
                        break;
                    case 50:
                        label += "C 50C\n";
                        break;
                    case 58:
                        label += "C 58Y\n";
                        break;
                    case 58:
                        label += "C 58Y\n";
                        break;
                    case 58:
                        label += "C 58Y\n";
                        break;
                    case 58:
                        label += "C 58Y\n";
                        break;
                    case 58:
                        label += "C 58Y\n";
                        break;
                    case 58:
                        label += "C 58Y\n";
                        break;
                    case 58:
                        label += "C 58Y\n";
                        break;
                    case 58:
                        label += "C 58Y\n";
                        break;
                    case 58:
                        label += "C 58Y\n";
                        break;
                    case 58:
                        label += "C 58Y\n";
                        break;
                    case 58:
                        label += "C 58Y\n";
                        break;
                    case 98:
                        label += "C 98T\n";
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
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 98:
                        label += "C 98T\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 100:
                        label += "C 100Y\n";
                        break;
                    case 96:
                        label += "C 96V\n";
                        break;
                    case 97:
                        label += "C 97G\n";
                        break;
                    case 98:
                        label += "C 98T\n";
                        break;
                    case 98:
                        label += "C 98T\n";
                        break;
                    case 98:
                        label += "C 98T\n";
                        break;
                    case 99:
                        label += "C 99Y\n";
                        break;
                    case 99:
                        label += "C 99Y\n";
                        break;
                    case 28:
                        label += "C 28T\n";
                        break;
                    case 28:
                        label += "C 28T\n";
                        break;
                    case 29:
                        label += "C 29L\n";
                        break;
                    case 29:
                        label += "C 29L\n";
                        break;
                    case 41:
                        label += "D 41P\n";
                        break;
                    case 85:
                        label += "D 85E\n";
                        break;
                    case 43:
                        label += "D 43K\n";
                        break;
                    case 43:
                        label += "D 43K\n";
                        break;
                    case 43:
                        label += "D 43K\n";
                        break;
                    case 42:
                        label += "D 42G\n";
                        break;
                    case 41:
                        label += "D 41P\n";
                        break;
                    case 41:
                        label += "D 41P\n";
                        break;
                    case 41:
                        label += "D 41P\n";
                        break;
                    case 41:
                        label += "D 41P\n";
                        break;
                    case 52:
                        label += "E 52S\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 100:
                        label += "E 100Y\n";
                        break;
                    case 98:
                        label += "E 98S\n";
                        break;
                    case 98:
                        label += "E 98S\n";
                        break;
                    case 99:
                        label += "E 99Y\n";
                        break;
                    case 100:
                        label += "E 100Y\n";
                        break;
                    case 100:
                        label += "E 100Y\n";
                        break;
                    case 98:
                        label += "E 98S\n";
                        break;
                    case 98:
                        label += "E 98S\n";
                        break;
                    case 98:
                        label += "E 98S\n";
                        break;
                    case 98:
                        label += "E 98S\n";
                        break;
                    case 95:
                        label += "E 95Q\n";
                        break;
                    case 95:
                        label += "E 95Q\n";
                        break;
                    case 96:
                        label += "E 96S\n";
                        break;
                    case 96:
                        label += "E 96S\n";
                        break;
                    case 96:
                        label += "E 96S\n";
                        break;
                    case 101:
                        label += "E 101E\n";
                        break;
                    case 101:
                        label += "E 101E\n";
                        break;
                    case 31:
                        label += "E 31Y\n";
                        break;
                    case 31:
                        label += "E 31Y\n";
                        break;
                    case 31:
                        label += "E 31Y\n";
                        break;
                    case 31:
                        label += "E 31Y\n";
                        break;
                    case 31:
                        label += "E 31Y\n";
                        break;
                    case 101:
                        label += "D 101D\n";
                        break;
                    case 101:
                        label += "D 101D\n";
                        break;
                    case 101:
                        label += "D 101D\n";
                        break;
                    case 30:
                        label += "D 30D\n";
                        break;
                    case 30:
                        label += "D 30D\n";
                        break;
                    case 30:
                        label += "D 30D\n";
                        break;
                    case 30:
                        label += "D 30D\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 31:
                        label += "D 31Y\n";
                        break;
                    case 96:
                        label += "D 96V\n";
                        break;
                    case 96:
                        label += "D 96V\n";
                        break;
                    case 99:
                        label += "D 99Y\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 56:
                        label += "D 56R\n";
                        break;
                    case 56:
                        label += "D 56R\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 58:
                        label += "D 58Y\n";
                        break;
                    case 58:
                        label += "D 58Y\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 100:
                        label += "D 100Y\n";
                        break;
                    case 96:
                        label += "D 96V\n";
                        break;
                    case 97:
                        label += "D 97G\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 98:
                        label += "D 98T\n";
                        break;
                    case 99:
                        label += "D 99Y\n";
                        break;
                    case 28:
                        label += "D 28T\n";
                        break;
                    case 28:
                        label += "D 28T\n";
                        break;
                    case 29:
                        label += "D 29L\n";
                        break;
                    case 29:
                        label += "D 29L\n";
                        break;
                    case 98:
                        label += "F 98S\n";
                        break;
                    case 52:
                        label += "F 52S\n";
                        break;
                    case 98:
                        label += "F 98S\n";
                        break;
                    case 99:
                        label += "F 99Y\n";
                        break;
                    case 99:
                        label += "F 99Y\n";
                        break;
                    case 99:
                        label += "F 99Y\n";
                        break;
                    case 99:
                        label += "F 99Y\n";
                        break;
                    case 99:
                        label += "F 99Y\n";
                        break;
                    case 99:
                        label += "F 99Y\n";
                        break;
                    case 99:
                        label += "F 99Y\n";
                        break;
                    case 99:
                        label += "F 99Y\n";
                        break;
                    case 99:
                        label += "F 99Y\n";
                        break;
                    case 99:
                        label += "F 99Y\n";
                        break;
                    case 99:
                        label += "F 99Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 98:
                        label += "F 98S\n";
                        break;
                    case 98:
                        label += "F 98S\n";
                        break;
                    case 98:
                        label += "F 98S\n";
                        break;
                    case 99:
                        label += "F 99Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 100:
                        label += "F 100Y\n";
                        break;
                    case 98:
                        label += "F 98S\n";
                        break;
                    case 95:
                        label += "F 95Q\n";
                        break;
                    case 95:
                        label += "F 95Q\n";
                        break;
                    case 96:
                        label += "F 96S\n";
                        break;
                    case 96:
                        label += "F 96S\n";
                        break;
                    case 101:
                        label += "F 101E\n";
                        break;
                    case 101:
                        label += "F 101E\n";
                        break;
                    case 31:
                        label += "F 31Y\n";
                        break;
                    case 31:
                        label += "F 31Y\n";
                        break;
                    case 31:
                        label += "F 31Y\n";
                        break;
                    case 101:
                        label += "F 101E\n";
                        break;
                    case 101:
                        label += "F 101E\n";
                        break;
                    case 101:
                        label += "F 101E\n";
                        break;
                    case 101:
                        label += "F 101E\n";
                        break;
                    case 101:
                        label += "F 101E\n";
                        break;
                    case 101:
                        label += "F 101E\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});