
var myChart6ZDH = 0;
var ctx = document.getElementById('6ZDH').getContext('2d');
if (window.myChart6ZDH != 0){
    window.myChart6ZDH.destroy();
}
window.myChart6ZDH = new Chart(ctx, {
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
                {x: 386, y: 99},
                {x: 386, y: 99},
                {x: 386, y: 99},
                {x: 529, y: 54},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 477, y: 201},
                {x: 383, y: 104},
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
                {x: 379, y: 94},
                {x: 379, y: 94},
                {x: 381, y: 32},
                {x: 381, y: 92},
                {x: 382, y: 94},
                {x: 383, y: 94},
                {x: 412, y: 27},
                {x: 427, y: 92},
                {x: 429, y: 92},
                {x: 429, y: 92},
                {x: 374, y: 65},
                {x: 383, y: 104},
                {x: 383, y: 104},
                {x: 383, y: 106},
                {x: 385, y: 33},
                {x: 385, y: 106},
                {x: 385, y: 106},
                {x: 386, y: 99},
                {x: 386, y: 103},
                {x: 386, y: 105},
                {x: 388, y: 53},
                {x: 477, y: 196},
                {x: 379, y: 94},
                {x: 379, y: 94},
                {x: 381, y: 92},
                {x: 382, y: 94},
                {x: 412, y: 27},
                {x: 414, y: 27},
                {x: 427, y: 92},
                {x: 429, y: 92},
                {x: 429, y: 92},
                {x: 374, y: 65},
                {x: 383, y: 104},
                {x: 383, y: 104},
                {x: 383, y: 106},
                {x: 385, y: 33},
                {x: 385, y: 106},
                {x: 386, y: 101},
                {x: 386, y: 103},
                {x: 389, y: 53},
                {x: 379, y: 94},
                {x: 381, y: 32},
                {x: 381, y: 92},
                {x: 382, y: 94},
                {x: 383, y: 94},
                {x: 383, y: 94},
                {x: 427, y: 92},
                {x: 429, y: 92},
                {x: 429, y: 92},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 377, y: 59},
                {x: 380, y: 92},
                {x: 377, y: 59},
                {x: 380, y: 92},
                {x: 380, y: 92},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
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
                {x: 377, y: 95},
                {x: 377, y: 95},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 412, y: 92},
                {x: 377, y: 59},
                {x: 377, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 385, y: 57},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 390, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 392, y: 104},
                {x: 517, y: 104},
                {x: 517, y: 104},
                {x: 478, y: 199},
                {x: 377, y: 95},
                {x: 377, y: 95},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 384, y: 95},
                {x: 412, y: 92},
                {x: 412, y: 92},
                {x: 369, y: 57},
                {x: 369, y: 57},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 384, y: 59},
                {x: 385, y: 57},
                {x: 385, y: 59},
                {x: 385, y: 59},
                {x: 390, y: 104},
                {x: 390, y: 104},
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
                {x: 377, y: 95},
                {x: 377, y: 95},
                {x: 377, y: 95},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 384, y: 95},
                {x: 384, y: 95},
                {x: 384, y: 95},
                {x: 412, y: 92},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6ZDH Superpose"],
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
                    case 477:
                        label += "6ZDHADA 477S - ";
                        break;
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
                        break;
                    case 377:
                        label += "6ZDHALA 377F - ";
                        break;
                    case 377:
                        label += "6ZDHALA 377F - ";
                        break;
                    case 379:
                        label += "6ZDHALA 379C - ";
                        break;
                    case 379:
                        label += "6ZDHALA 379C - ";
                        break;
                    case 380:
                        label += "6ZDHALA 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHALA 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHALA 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHALA 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHALA 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHALA 380Y - ";
                        break;
                    case 381:
                        label += "6ZDHALA 381G - ";
                        break;
                    case 381:
                        label += "6ZDHALA 381G - ";
                        break;
                    case 382:
                        label += "6ZDHALA 382V - ";
                        break;
                    case 383:
                        label += "6ZDHALA 383S - ";
                        break;
                    case 412:
                        label += "6ZDHALA 412P - ";
                        break;
                    case 412:
                        label += "6ZDHALA 412P - ";
                        break;
                    case 427:
                        label += "6ZDHALA 427D - ";
                        break;
                    case 429:
                        label += "6ZDHALA 429F - ";
                        break;
                    case 429:
                        label += "6ZDHALA 429F - ";
                        break;
                    case 374:
                        label += "6ZDHBDB 374F - ";
                        break;
                    case 377:
                        label += "6ZDHBDB 377F - ";
                        break;
                    case 377:
                        label += "6ZDHBDB 377F - ";
                        break;
                    case 377:
                        label += "6ZDHBDB 377F - ";
                        break;
                    case 383:
                        label += "6ZDHBDB 383S - ";
                        break;
                    case 383:
                        label += "6ZDHBDB 383S - ";
                        break;
                    case 383:
                        label += "6ZDHBDB 383S - ";
                        break;
                    case 384:
                        label += "6ZDHBDB 384P - ";
                        break;
                    case 384:
                        label += "6ZDHBDB 384P - ";
                        break;
                    case 384:
                        label += "6ZDHBDB 384P - ";
                        break;
                    case 384:
                        label += "6ZDHBDB 384P - ";
                        break;
                    case 384:
                        label += "6ZDHBDB 384P - ";
                        break;
                    case 384:
                        label += "6ZDHBDB 384P - ";
                        break;
                    case 385:
                        label += "6ZDHBDB 385T - ";
                        break;
                    case 385:
                        label += "6ZDHBDB 385T - ";
                        break;
                    case 385:
                        label += "6ZDHBDB 385T - ";
                        break;
                    case 385:
                        label += "6ZDHBDB 385T - ";
                        break;
                    case 386:
                        label += "6ZDHBDB 386K - ";
                        break;
                    case 386:
                        label += "6ZDHBDB 386K - ";
                        break;
                    case 386:
                        label += "6ZDHBDB 386K - ";
                        break;
                    case 386:
                        label += "6ZDHBDB 386K - ";
                        break;
                    case 388:
                        label += "6ZDHBDB 388N - ";
                        break;
                    case 390:
                        label += "6ZDHBDB 390L - ";
                        break;
                    case 390:
                        label += "6ZDHBDB 390L - ";
                        break;
                    case 390:
                        label += "6ZDHBDB 390L - ";
                        break;
                    case 392:
                        label += "6ZDHBDB 392F - ";
                        break;
                    case 392:
                        label += "6ZDHBDB 392F - ";
                        break;
                    case 392:
                        label += "6ZDHBDB 392F - ";
                        break;
                    case 517:
                        label += "6ZDHBDB 517L - ";
                        break;
                    case 517:
                        label += "6ZDHBDB 517L - ";
                        break;
                    case 477:
                        label += "6ZDHBGB 477S - ";
                        break;
                    case 478:
                        label += "6ZDHBGB 478T - ";
                        break;
                    case 377:
                        label += "6ZDHBFB 377F - ";
                        break;
                    case 377:
                        label += "6ZDHBFB 377F - ";
                        break;
                    case 379:
                        label += "6ZDHBFB 379C - ";
                        break;
                    case 379:
                        label += "6ZDHBFB 379C - ";
                        break;
                    case 380:
                        label += "6ZDHBFB 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHBFB 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHBFB 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHBFB 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHBFB 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHBFB 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHBFB 380Y - ";
                        break;
                    case 381:
                        label += "6ZDHBFB 381G - ";
                        break;
                    case 382:
                        label += "6ZDHBFB 382V - ";
                        break;
                    case 384:
                        label += "6ZDHBFB 384P - ";
                        break;
                    case 412:
                        label += "6ZDHBFB 412P - ";
                        break;
                    case 412:
                        label += "6ZDHBFB 412P - ";
                        break;
                    case 412:
                        label += "6ZDHBFB 412P - ";
                        break;
                    case 414:
                        label += "6ZDHBFB 414Q - ";
                        break;
                    case 427:
                        label += "6ZDHBFB 427D - ";
                        break;
                    case 429:
                        label += "6ZDHBFB 429F - ";
                        break;
                    case 429:
                        label += "6ZDHBFB 429F - ";
                        break;
                    case 369:
                        label += "6ZDHCGC 369Y - ";
                        break;
                    case 369:
                        label += "6ZDHCGC 369Y - ";
                        break;
                    case 374:
                        label += "6ZDHCGC 374F - ";
                        break;
                    case 382:
                        label += "6ZDHCGC 382V - ";
                        break;
                    case 382:
                        label += "6ZDHCGC 382V - ";
                        break;
                    case 382:
                        label += "6ZDHCGC 382V - ";
                        break;
                    case 382:
                        label += "6ZDHCGC 382V - ";
                        break;
                    case 382:
                        label += "6ZDHCGC 382V - ";
                        break;
                    case 382:
                        label += "6ZDHCGC 382V - ";
                        break;
                    case 383:
                        label += "6ZDHCGC 383S - ";
                        break;
                    case 383:
                        label += "6ZDHCGC 383S - ";
                        break;
                    case 383:
                        label += "6ZDHCGC 383S - ";
                        break;
                    case 384:
                        label += "6ZDHCGC 384P - ";
                        break;
                    case 385:
                        label += "6ZDHCGC 385T - ";
                        break;
                    case 385:
                        label += "6ZDHCGC 385T - ";
                        break;
                    case 385:
                        label += "6ZDHCGC 385T - ";
                        break;
                    case 385:
                        label += "6ZDHCGC 385T - ";
                        break;
                    case 385:
                        label += "6ZDHCGC 385T - ";
                        break;
                    case 386:
                        label += "6ZDHCGC 386K - ";
                        break;
                    case 386:
                        label += "6ZDHCGC 386K - ";
                        break;
                    case 386:
                        label += "6ZDHCGC 386K - ";
                        break;
                    case 389:
                        label += "6ZDHCGC 389D - ";
                        break;
                    case 390:
                        label += "6ZDHCGC 390L - ";
                        break;
                    case 390:
                        label += "6ZDHCGC 390L - ";
                        break;
                    case 390:
                        label += "6ZDHCGC 390L - ";
                        break;
                    case 390:
                        label += "6ZDHCGC 390L - ";
                        break;
                    case 390:
                        label += "6ZDHCGC 390L - ";
                        break;
                    case 390:
                        label += "6ZDHCGC 390L - ";
                        break;
                    case 390:
                        label += "6ZDHCGC 390L - ";
                        break;
                    case 392:
                        label += "6ZDHCGC 392F - ";
                        break;
                    case 392:
                        label += "6ZDHCGC 392F - ";
                        break;
                    case 392:
                        label += "6ZDHCGC 392F - ";
                        break;
                    case 392:
                        label += "6ZDHCGC 392F - ";
                        break;
                    case 392:
                        label += "6ZDHCGC 392F - ";
                        break;
                    case 529:
                        label += "6ZDHCGC 529K - ";
                        break;
                    case 377:
                        label += "6ZDHCIC 377F - ";
                        break;
                    case 377:
                        label += "6ZDHCIC 377F - ";
                        break;
                    case 377:
                        label += "6ZDHCIC 377F - ";
                        break;
                    case 379:
                        label += "6ZDHCIC 379C - ";
                        break;
                    case 380:
                        label += "6ZDHCIC 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHCIC 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHCIC 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHCIC 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHCIC 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHCIC 380Y - ";
                        break;
                    case 380:
                        label += "6ZDHCIC 380Y - ";
                        break;
                    case 381:
                        label += "6ZDHCIC 381G - ";
                        break;
                    case 381:
                        label += "6ZDHCIC 381G - ";
                        break;
                    case 382:
                        label += "6ZDHCIC 382V - ";
                        break;
                    case 383:
                        label += "6ZDHCIC 383S - ";
                        break;
                    case 383:
                        label += "6ZDHCIC 383S - ";
                        break;
                    case 384:
                        label += "6ZDHCIC 384P - ";
                        break;
                    case 384:
                        label += "6ZDHCIC 384P - ";
                        break;
                    case 384:
                        label += "6ZDHCIC 384P - ";
                        break;
                    case 412:
                        label += "6ZDHCIC 412P - ";
                        break;
                    case 427:
                        label += "6ZDHCIC 427D - ";
                        break;
                    case 429:
                        label += "6ZDHCIC 429F - ";
                        break;
                    case 429:
                        label += "6ZDHCIC 429F - ";
                        break;}
                switch (labely){
                    case 201:
                        label += "D 201T\n";
                        break;
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
                    case 95:
                        label += "L 95L\n";
                        break;
                    case 95:
                        label += "L 95L\n";
                        break;
                    case 94:
                        label += "L 94T\n";
                        break;
                    case 94:
                        label += "L 94T\n";
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
                    case 32:
                        label += "L 32Y\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
                        break;
                    case 94:
                        label += "L 94T\n";
                        break;
                    case 94:
                        label += "L 94T\n";
                        break;
                    case 27:
                        label += "L 27Q\n";
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
                    case 65:
                        label += "D 65K\n";
                        break;
                    case 59:
                        label += "D 59Y\n";
                        break;
                    case 59:
                        label += "D 59Y\n";
                        break;
                    case 59:
                        label += "D 59Y\n";
                        break;
                    case 104:
                        label += "D 104W\n";
                        break;
                    case 104:
                        label += "D 104W\n";
                        break;
                    case 106:
                        label += "D 106Y\n";
                        break;
                    case 59:
                        label += "D 59Y\n";
                        break;
                    case 59:
                        label += "D 59Y\n";
                        break;
                    case 59:
                        label += "D 59Y\n";
                        break;
                    case 59:
                        label += "D 59Y\n";
                        break;
                    case 59:
                        label += "D 59Y\n";
                        break;
                    case 59:
                        label += "D 59Y\n";
                        break;
                    case 33:
                        label += "D 33D\n";
                        break;
                    case 57:
                        label += "D 57N\n";
                        break;
                    case 106:
                        label += "D 106Y\n";
                        break;
                    case 106:
                        label += "D 106Y\n";
                        break;
                    case 99:
                        label += "D 99D\n";
                        break;
                    case 99:
                        label += "D 99D\n";
                        break;
                    case 103:
                        label += "D 103L\n";
                        break;
                    case 105:
                        label += "D 105V\n";
                        break;
                    case 53:
                        label += "D 53Y\n";
                        break;
                    case 104:
                        label += "D 104W\n";
                        break;
                    case 104:
                        label += "D 104W\n";
                        break;
                    case 104:
                        label += "D 104W\n";
                        break;
                    case 104:
                        label += "D 104W\n";
                        break;
                    case 104:
                        label += "D 104W\n";
                        break;
                    case 104:
                        label += "D 104W\n";
                        break;
                    case 104:
                        label += "D 104W\n";
                        break;
                    case 104:
                        label += "D 104W\n";
                        break;
                    case 196:
                        label += "G 196S\n";
                        break;
                    case 199:
                        label += "G 199T\n";
                        break;
                    case 95:
                        label += "F 95L\n";
                        break;
                    case 95:
                        label += "F 95L\n";
                        break;
                    case 94:
                        label += "F 94T\n";
                        break;
                    case 94:
                        label += "F 94T\n";
                        break;
                    case 92:
                        label += "F 92Y\n";
                        break;
                    case 92:
                        label += "F 92Y\n";
                        break;
                    case 92:
                        label += "F 92Y\n";
                        break;
                    case 92:
                        label += "F 92Y\n";
                        break;
                    case 92:
                        label += "F 92Y\n";
                        break;
                    case 92:
                        label += "F 92Y\n";
                        break;
                    case 92:
                        label += "F 92Y\n";
                        break;
                    case 92:
                        label += "F 92Y\n";
                        break;
                    case 94:
                        label += "F 94T\n";
                        break;
                    case 95:
                        label += "F 95L\n";
                        break;
                    case 27:
                        label += "F 27Q\n";
                        break;
                    case 92:
                        label += "F 92Y\n";
                        break;
                    case 92:
                        label += "F 92Y\n";
                        break;
                    case 27:
                        label += "F 27Q\n";
                        break;
                    case 92:
                        label += "F 92Y\n";
                        break;
                    case 92:
                        label += "F 92Y\n";
                        break;
                    case 92:
                        label += "F 92Y\n";
                        break;
                    case 57:
                        label += "G 57N\n";
                        break;
                    case 57:
                        label += "G 57N\n";
                        break;
                    case 65:
                        label += "G 65K\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 106:
                        label += "G 106Y\n";
                        break;
                    case 59:
                        label += "G 59Y\n";
                        break;
                    case 33:
                        label += "G 33D\n";
                        break;
                    case 57:
                        label += "G 57N\n";
                        break;
                    case 59:
                        label += "G 59Y\n";
                        break;
                    case 59:
                        label += "G 59Y\n";
                        break;
                    case 106:
                        label += "G 106Y\n";
                        break;
                    case 99:
                        label += "G 99D\n";
                        break;
                    case 101:
                        label += "G 101G\n";
                        break;
                    case 103:
                        label += "G 103L\n";
                        break;
                    case 53:
                        label += "G 53Y\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 104:
                        label += "G 104W\n";
                        break;
                    case 54:
                        label += "G 54D\n";
                        break;
                    case 95:
                        label += "I 95L\n";
                        break;
                    case 95:
                        label += "I 95L\n";
                        break;
                    case 95:
                        label += "I 95L\n";
                        break;
                    case 94:
                        label += "I 94T\n";
                        break;
                    case 92:
                        label += "I 92Y\n";
                        break;
                    case 92:
                        label += "I 92Y\n";
                        break;
                    case 92:
                        label += "I 92Y\n";
                        break;
                    case 92:
                        label += "I 92Y\n";
                        break;
                    case 92:
                        label += "I 92Y\n";
                        break;
                    case 92:
                        label += "I 92Y\n";
                        break;
                    case 92:
                        label += "I 92Y\n";
                        break;
                    case 32:
                        label += "I 32Y\n";
                        break;
                    case 92:
                        label += "I 92Y\n";
                        break;
                    case 94:
                        label += "I 94T\n";
                        break;
                    case 94:
                        label += "I 94T\n";
                        break;
                    case 94:
                        label += "I 94T\n";
                        break;
                    case 95:
                        label += "I 95L\n";
                        break;
                    case 95:
                        label += "I 95L\n";
                        break;
                    case 95:
                        label += "I 95L\n";
                        break;
                    case 92:
                        label += "I 92Y\n";
                        break;
                    case 92:
                        label += "I 92Y\n";
                        break;
                    case 92:
                        label += "I 92Y\n";
                        break;
                    case 92:
                        label += "I 92Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});