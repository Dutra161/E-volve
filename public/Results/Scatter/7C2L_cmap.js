
var myChart7C2L = 0;
var ctx = document.getElementById('7C2L').getContext('2d');
if (window.myChart7C2L != 0){
    window.myChart7C2L.destroy();
}
window.myChart7C2L = new Chart(ctx, {
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
            data: [{x: 147, y: 72},
                {x: 147, y: 72},
                {x: 150, y: 54},
                {x: 150, y: 54},
                {x: 246, y: 1},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 147, y: 72},
                {x: 147, y: 72},
                {x: 150, y: 54},
                {x: 150, y: 54},
                {x: 246, y: 1},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 147, y: 72},
                {x: 147, y: 72},
                {x: 150, y: 54},
                {x: 150, y: 54},
                {x: 246, y: 1},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                {x: 246, y: 31},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
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
            data: [{x: 146, y: 30},
                {x: 146, y: 30},
                {x: 146, y: 30},
                {x: 147, y: 29},
                {x: 147, y: 30},
                {x: 147, y: 32},
                {x: 147, y: 72},
                {x: 147, y: 72},
                {x: 150, y: 53},
                {x: 150, y: 54},
                {x: 150, y: 111},
                {x: 246, y: 26},
                {x: 246, y: 31},
                {x: 247, y: 27},
                {x: 248, y: 31},
                {x: 248, y: 104},
                {x: 146, y: 30},
                {x: 146, y: 30},
                {x: 146, y: 30},
                {x: 147, y: 29},
                {x: 147, y: 30},
                {x: 147, y: 32},
                {x: 147, y: 72},
                {x: 147, y: 72},
                {x: 150, y: 53},
                {x: 150, y: 54},
                {x: 150, y: 111},
                {x: 246, y: 26},
                {x: 246, y: 31},
                {x: 247, y: 27},
                {x: 248, y: 31},
                {x: 248, y: 104},
                {x: 146, y: 30},
                {x: 146, y: 30},
                {x: 146, y: 30},
                {x: 147, y: 29},
                {x: 147, y: 30},
                {x: 147, y: 32},
                {x: 147, y: 72},
                {x: 147, y: 72},
                {x: 150, y: 53},
                {x: 150, y: 54},
                {x: 150, y: 111},
                {x: 246, y: 26},
                {x: 246, y: 31},
                {x: 247, y: 27},
                {x: 248, y: 31},
                {x: 248, y: 104},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 152, y: 109},
                {x: 152, y: 109},
                {x: 152, y: 109},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 249, y: 60},
                {x: 143, y: 106},
                {x: 145, y: 101},
                {x: 145, y: 101},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 147, y: 51},
                {x: 152, y: 102},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 109},
                {x: 152, y: 109},
                {x: 245, y: 106},
                {x: 248, y: 27},
                {x: 248, y: 27},
                {x: 248, y: 27},
                {x: 248, y: 102},
                {x: 248, y: 102},
                {x: 249, y: 100},
                {x: 249, y: 103},
                {x: 249, y: 112},
                {x: 249, y: 60},
                {x: 143, y: 106},
                {x: 145, y: 101},
                {x: 145, y: 101},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 147, y: 51},
                {x: 152, y: 102},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 109},
                {x: 152, y: 109},
                {x: 245, y: 106},
                {x: 248, y: 27},
                {x: 248, y: 27},
                {x: 248, y: 27},
                {x: 248, y: 102},
                {x: 248, y: 102},
                {x: 249, y: 100},
                {x: 249, y: 103},
                {x: 249, y: 112},
                {x: 249, y: 60},
                {x: 143, y: 106},
                {x: 145, y: 101},
                {x: 145, y: 101},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 145, y: 102},
                {x: 147, y: 51},
                {x: 152, y: 102},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 106},
                {x: 152, y: 109},
                {x: 152, y: 109},
                {x: 245, y: 106},
                {x: 248, y: 27},
                {x: 248, y: 27},
                {x: 248, y: 27},
                {x: 248, y: 102},
                {x: 248, y: 102},
                {x: 249, y: 100},
                {x: 249, y: 103},
                {x: 249, y: 112},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7C2L Superpose"],
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
                    case 249:
                        label += "7C2LALA 249L - ";
                        break;
                    case 143:
                        label += "7C2LAHA 143V - ";
                        break;
                    case 145:
                        label += "7C2LAHA 145Y - ";
                        break;
                    case 145:
                        label += "7C2LAHA 145Y - ";
                        break;
                    case 145:
                        label += "7C2LAHA 145Y - ";
                        break;
                    case 145:
                        label += "7C2LAHA 145Y - ";
                        break;
                    case 145:
                        label += "7C2LAHA 145Y - ";
                        break;
                    case 145:
                        label += "7C2LAHA 145Y - ";
                        break;
                    case 145:
                        label += "7C2LAHA 145Y - ";
                        break;
                    case 145:
                        label += "7C2LAHA 145Y - ";
                        break;
                    case 145:
                        label += "7C2LAHA 145Y - ";
                        break;
                    case 145:
                        label += "7C2LAHA 145Y - ";
                        break;
                    case 146:
                        label += "7C2LAHA 146H - ";
                        break;
                    case 146:
                        label += "7C2LAHA 146H - ";
                        break;
                    case 146:
                        label += "7C2LAHA 146H - ";
                        break;
                    case 147:
                        label += "7C2LAHA 147K - ";
                        break;
                    case 147:
                        label += "7C2LAHA 147K - ";
                        break;
                    case 147:
                        label += "7C2LAHA 147K - ";
                        break;
                    case 147:
                        label += "7C2LAHA 147K - ";
                        break;
                    case 147:
                        label += "7C2LAHA 147K - ";
                        break;
                    case 147:
                        label += "7C2LAHA 147K - ";
                        break;
                    case 150:
                        label += "7C2LAHA 150K - ";
                        break;
                    case 150:
                        label += "7C2LAHA 150K - ";
                        break;
                    case 150:
                        label += "7C2LAHA 150K - ";
                        break;
                    case 150:
                        label += "7C2LAHA 150K - ";
                        break;
                    case 152:
                        label += "7C2LAHA 152W - ";
                        break;
                    case 152:
                        label += "7C2LAHA 152W - ";
                        break;
                    case 152:
                        label += "7C2LAHA 152W - ";
                        break;
                    case 152:
                        label += "7C2LAHA 152W - ";
                        break;
                    case 152:
                        label += "7C2LAHA 152W - ";
                        break;
                    case 152:
                        label += "7C2LAHA 152W - ";
                        break;
                    case 152:
                        label += "7C2LAHA 152W - ";
                        break;
                    case 152:
                        label += "7C2LAHA 152W - ";
                        break;
                    case 152:
                        label += "7C2LAHA 152W - ";
                        break;
                    case 152:
                        label += "7C2LAHA 152W - ";
                        break;
                    case 152:
                        label += "7C2LAHA 152W - ";
                        break;
                    case 245:
                        label += "7C2LAHA 245H - ";
                        break;
                    case 246:
                        label += "7C2LAHA 246R - ";
                        break;
                    case 246:
                        label += "7C2LAHA 246R - ";
                        break;
                    case 246:
                        label += "7C2LAHA 246R - ";
                        break;
                    case 246:
                        label += "7C2LAHA 246R - ";
                        break;
                    case 246:
                        label += "7C2LAHA 246R - ";
                        break;
                    case 246:
                        label += "7C2LAHA 246R - ";
                        break;
                    case 246:
                        label += "7C2LAHA 246R - ";
                        break;
                    case 246:
                        label += "7C2LAHA 246R - ";
                        break;
                    case 246:
                        label += "7C2LAHA 246R - ";
                        break;
                    case 246:
                        label += "7C2LAHA 246R - ";
                        break;
                    case 247:
                        label += "7C2LAHA 247S - ";
                        break;
                    case 248:
                        label += "7C2LAHA 248Y - ";
                        break;
                    case 248:
                        label += "7C2LAHA 248Y - ";
                        break;
                    case 248:
                        label += "7C2LAHA 248Y - ";
                        break;
                    case 248:
                        label += "7C2LAHA 248Y - ";
                        break;
                    case 248:
                        label += "7C2LAHA 248Y - ";
                        break;
                    case 248:
                        label += "7C2LAHA 248Y - ";
                        break;
                    case 248:
                        label += "7C2LAHA 248Y - ";
                        break;
                    case 249:
                        label += "7C2LAHA 249L - ";
                        break;
                    case 249:
                        label += "7C2LAHA 249L - ";
                        break;
                    case 249:
                        label += "7C2LAHA 249L - ";
                        break;
                    case 249:
                        label += "7C2LBMB 249L - ";
                        break;
                    case 143:
                        label += "7C2LBIB 143V - ";
                        break;
                    case 145:
                        label += "7C2LBIB 145Y - ";
                        break;
                    case 145:
                        label += "7C2LBIB 145Y - ";
                        break;
                    case 145:
                        label += "7C2LBIB 145Y - ";
                        break;
                    case 145:
                        label += "7C2LBIB 145Y - ";
                        break;
                    case 145:
                        label += "7C2LBIB 145Y - ";
                        break;
                    case 145:
                        label += "7C2LBIB 145Y - ";
                        break;
                    case 145:
                        label += "7C2LBIB 145Y - ";
                        break;
                    case 145:
                        label += "7C2LBIB 145Y - ";
                        break;
                    case 145:
                        label += "7C2LBIB 145Y - ";
                        break;
                    case 145:
                        label += "7C2LBIB 145Y - ";
                        break;
                    case 146:
                        label += "7C2LBIB 146H - ";
                        break;
                    case 146:
                        label += "7C2LBIB 146H - ";
                        break;
                    case 146:
                        label += "7C2LBIB 146H - ";
                        break;
                    case 147:
                        label += "7C2LBIB 147K - ";
                        break;
                    case 147:
                        label += "7C2LBIB 147K - ";
                        break;
                    case 147:
                        label += "7C2LBIB 147K - ";
                        break;
                    case 147:
                        label += "7C2LBIB 147K - ";
                        break;
                    case 147:
                        label += "7C2LBIB 147K - ";
                        break;
                    case 147:
                        label += "7C2LBIB 147K - ";
                        break;
                    case 150:
                        label += "7C2LBIB 150K - ";
                        break;
                    case 150:
                        label += "7C2LBIB 150K - ";
                        break;
                    case 150:
                        label += "7C2LBIB 150K - ";
                        break;
                    case 150:
                        label += "7C2LBIB 150K - ";
                        break;
                    case 152:
                        label += "7C2LBIB 152W - ";
                        break;
                    case 152:
                        label += "7C2LBIB 152W - ";
                        break;
                    case 152:
                        label += "7C2LBIB 152W - ";
                        break;
                    case 152:
                        label += "7C2LBIB 152W - ";
                        break;
                    case 152:
                        label += "7C2LBIB 152W - ";
                        break;
                    case 152:
                        label += "7C2LBIB 152W - ";
                        break;
                    case 152:
                        label += "7C2LBIB 152W - ";
                        break;
                    case 152:
                        label += "7C2LBIB 152W - ";
                        break;
                    case 152:
                        label += "7C2LBIB 152W - ";
                        break;
                    case 152:
                        label += "7C2LBIB 152W - ";
                        break;
                    case 152:
                        label += "7C2LBIB 152W - ";
                        break;
                    case 245:
                        label += "7C2LBIB 245H - ";
                        break;
                    case 246:
                        label += "7C2LBIB 246R - ";
                        break;
                    case 246:
                        label += "7C2LBIB 246R - ";
                        break;
                    case 246:
                        label += "7C2LBIB 246R - ";
                        break;
                    case 246:
                        label += "7C2LBIB 246R - ";
                        break;
                    case 246:
                        label += "7C2LBIB 246R - ";
                        break;
                    case 246:
                        label += "7C2LBIB 246R - ";
                        break;
                    case 246:
                        label += "7C2LBIB 246R - ";
                        break;
                    case 246:
                        label += "7C2LBIB 246R - ";
                        break;
                    case 246:
                        label += "7C2LBIB 246R - ";
                        break;
                    case 246:
                        label += "7C2LBIB 246R - ";
                        break;
                    case 247:
                        label += "7C2LBIB 247S - ";
                        break;
                    case 248:
                        label += "7C2LBIB 248Y - ";
                        break;
                    case 248:
                        label += "7C2LBIB 248Y - ";
                        break;
                    case 248:
                        label += "7C2LBIB 248Y - ";
                        break;
                    case 248:
                        label += "7C2LBIB 248Y - ";
                        break;
                    case 248:
                        label += "7C2LBIB 248Y - ";
                        break;
                    case 248:
                        label += "7C2LBIB 248Y - ";
                        break;
                    case 248:
                        label += "7C2LBIB 248Y - ";
                        break;
                    case 249:
                        label += "7C2LBIB 249L - ";
                        break;
                    case 249:
                        label += "7C2LBIB 249L - ";
                        break;
                    case 249:
                        label += "7C2LBIB 249L - ";
                        break;
                    case 249:
                        label += "7C2LCNC 249L - ";
                        break;
                    case 143:
                        label += "7C2LCJC 143V - ";
                        break;
                    case 145:
                        label += "7C2LCJC 145Y - ";
                        break;
                    case 145:
                        label += "7C2LCJC 145Y - ";
                        break;
                    case 145:
                        label += "7C2LCJC 145Y - ";
                        break;
                    case 145:
                        label += "7C2LCJC 145Y - ";
                        break;
                    case 145:
                        label += "7C2LCJC 145Y - ";
                        break;
                    case 145:
                        label += "7C2LCJC 145Y - ";
                        break;
                    case 145:
                        label += "7C2LCJC 145Y - ";
                        break;
                    case 145:
                        label += "7C2LCJC 145Y - ";
                        break;
                    case 145:
                        label += "7C2LCJC 145Y - ";
                        break;
                    case 145:
                        label += "7C2LCJC 145Y - ";
                        break;
                    case 146:
                        label += "7C2LCJC 146H - ";
                        break;
                    case 146:
                        label += "7C2LCJC 146H - ";
                        break;
                    case 146:
                        label += "7C2LCJC 146H - ";
                        break;
                    case 147:
                        label += "7C2LCJC 147K - ";
                        break;
                    case 147:
                        label += "7C2LCJC 147K - ";
                        break;
                    case 147:
                        label += "7C2LCJC 147K - ";
                        break;
                    case 147:
                        label += "7C2LCJC 147K - ";
                        break;
                    case 147:
                        label += "7C2LCJC 147K - ";
                        break;
                    case 147:
                        label += "7C2LCJC 147K - ";
                        break;
                    case 150:
                        label += "7C2LCJC 150K - ";
                        break;
                    case 150:
                        label += "7C2LCJC 150K - ";
                        break;
                    case 150:
                        label += "7C2LCJC 150K - ";
                        break;
                    case 150:
                        label += "7C2LCJC 150K - ";
                        break;
                    case 152:
                        label += "7C2LCJC 152W - ";
                        break;
                    case 152:
                        label += "7C2LCJC 152W - ";
                        break;
                    case 152:
                        label += "7C2LCJC 152W - ";
                        break;
                    case 152:
                        label += "7C2LCJC 152W - ";
                        break;
                    case 152:
                        label += "7C2LCJC 152W - ";
                        break;
                    case 152:
                        label += "7C2LCJC 152W - ";
                        break;
                    case 152:
                        label += "7C2LCJC 152W - ";
                        break;
                    case 152:
                        label += "7C2LCJC 152W - ";
                        break;
                    case 152:
                        label += "7C2LCJC 152W - ";
                        break;
                    case 152:
                        label += "7C2LCJC 152W - ";
                        break;
                    case 152:
                        label += "7C2LCJC 152W - ";
                        break;
                    case 245:
                        label += "7C2LCJC 245H - ";
                        break;
                    case 246:
                        label += "7C2LCJC 246R - ";
                        break;
                    case 246:
                        label += "7C2LCJC 246R - ";
                        break;
                    case 246:
                        label += "7C2LCJC 246R - ";
                        break;
                    case 246:
                        label += "7C2LCJC 246R - ";
                        break;
                    case 246:
                        label += "7C2LCJC 246R - ";
                        break;
                    case 246:
                        label += "7C2LCJC 246R - ";
                        break;
                    case 246:
                        label += "7C2LCJC 246R - ";
                        break;
                    case 246:
                        label += "7C2LCJC 246R - ";
                        break;
                    case 246:
                        label += "7C2LCJC 246R - ";
                        break;
                    case 246:
                        label += "7C2LCJC 246R - ";
                        break;
                    case 247:
                        label += "7C2LCJC 247S - ";
                        break;
                    case 248:
                        label += "7C2LCJC 248Y - ";
                        break;
                    case 248:
                        label += "7C2LCJC 248Y - ";
                        break;
                    case 248:
                        label += "7C2LCJC 248Y - ";
                        break;
                    case 248:
                        label += "7C2LCJC 248Y - ";
                        break;
                    case 248:
                        label += "7C2LCJC 248Y - ";
                        break;
                    case 248:
                        label += "7C2LCJC 248Y - ";
                        break;
                    case 248:
                        label += "7C2LCJC 248Y - ";
                        break;
                    case 249:
                        label += "7C2LCJC 249L - ";
                        break;
                    case 249:
                        label += "7C2LCJC 249L - ";
                        break;
                    case 249:
                        label += "7C2LCJC 249L - ";
                        break;}
                switch (labely){
                    case 60:
                        label += "L 60F\n";
                        break;
                    case 106:
                        label += "H 106P\n";
                        break;
                    case 101:
                        label += "H 101A\n";
                        break;
                    case 101:
                        label += "H 101A\n";
                        break;
                    case 102:
                        label += "H 102V\n";
                        break;
                    case 102:
                        label += "H 102V\n";
                        break;
                    case 102:
                        label += "H 102V\n";
                        break;
                    case 102:
                        label += "H 102V\n";
                        break;
                    case 102:
                        label += "H 102V\n";
                        break;
                    case 102:
                        label += "H 102V\n";
                        break;
                    case 102:
                        label += "H 102V\n";
                        break;
                    case 102:
                        label += "H 102V\n";
                        break;
                    case 30:
                        label += "H 30T\n";
                        break;
                    case 30:
                        label += "H 30T\n";
                        break;
                    case 30:
                        label += "H 30T\n";
                        break;
                    case 29:
                        label += "H 29L\n";
                        break;
                    case 30:
                        label += "H 30T\n";
                        break;
                    case 32:
                        label += "H 32L\n";
                        break;
                    case 51:
                        label += "H 51F\n";
                        break;
                    case 72:
                        label += "H 72E\n";
                        break;
                    case 72:
                        label += "H 72E\n";
                        break;
                    case 53:
                        label += "H 53P\n";
                        break;
                    case 54:
                        label += "H 54E\n";
                        break;
                    case 54:
                        label += "H 54E\n";
                        break;
                    case 111:
                        label += "H 111Y\n";
                        break;
                    case 102:
                        label += "H 102V\n";
                        break;
                    case 106:
                        label += "H 106P\n";
                        break;
                    case 106:
                        label += "H 106P\n";
                        break;
                    case 106:
                        label += "H 106P\n";
                        break;
                    case 106:
                        label += "H 106P\n";
                        break;
                    case 106:
                        label += "H 106P\n";
                        break;
                    case 106:
                        label += "H 106P\n";
                        break;
                    case 106:
                        label += "H 106P\n";
                        break;
                    case 109:
                        label += "H 109F\n";
                        break;
                    case 109:
                        label += "H 109F\n";
                        break;
                    case 109:
                        label += "H 109F\n";
                        break;
                    case 106:
                        label += "H 106P\n";
                        break;
                    case 1:
                        label += "H 1E\n";
                        break;
                    case 26:
                        label += "H 26G\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 27:
                        label += "H 27Y\n";
                        break;
                    case 31:
                        label += "H 31E\n";
                        break;
                    case 102:
                        label += "H 102V\n";
                        break;
                    case 102:
                        label += "H 102V\n";
                        break;
                    case 104:
                        label += "H 104G\n";
                        break;
                    case 100:
                        label += "H 100T\n";
                        break;
                    case 103:
                        label += "H 103A\n";
                        break;
                    case 112:
                        label += "H 112Y\n";
                        break;
                    case 60:
                        label += "M 60F\n";
                        break;
                    case 106:
                        label += "I 106P\n";
                        break;
                    case 101:
                        label += "I 101A\n";
                        break;
                    case 101:
                        label += "I 101A\n";
                        break;
                    case 102:
                        label += "I 102V\n";
                        break;
                    case 102:
                        label += "I 102V\n";
                        break;
                    case 102:
                        label += "I 102V\n";
                        break;
                    case 102:
                        label += "I 102V\n";
                        break;
                    case 102:
                        label += "I 102V\n";
                        break;
                    case 102:
                        label += "I 102V\n";
                        break;
                    case 102:
                        label += "I 102V\n";
                        break;
                    case 102:
                        label += "I 102V\n";
                        break;
                    case 30:
                        label += "I 30T\n";
                        break;
                    case 30:
                        label += "I 30T\n";
                        break;
                    case 30:
                        label += "I 30T\n";
                        break;
                    case 29:
                        label += "I 29L\n";
                        break;
                    case 30:
                        label += "I 30T\n";
                        break;
                    case 32:
                        label += "I 32L\n";
                        break;
                    case 51:
                        label += "I 51F\n";
                        break;
                    case 72:
                        label += "I 72E\n";
                        break;
                    case 72:
                        label += "I 72E\n";
                        break;
                    case 53:
                        label += "I 53P\n";
                        break;
                    case 54:
                        label += "I 54E\n";
                        break;
                    case 54:
                        label += "I 54E\n";
                        break;
                    case 111:
                        label += "I 111Y\n";
                        break;
                    case 102:
                        label += "I 102V\n";
                        break;
                    case 106:
                        label += "I 106P\n";
                        break;
                    case 106:
                        label += "I 106P\n";
                        break;
                    case 106:
                        label += "I 106P\n";
                        break;
                    case 106:
                        label += "I 106P\n";
                        break;
                    case 106:
                        label += "I 106P\n";
                        break;
                    case 106:
                        label += "I 106P\n";
                        break;
                    case 106:
                        label += "I 106P\n";
                        break;
                    case 109:
                        label += "I 109F\n";
                        break;
                    case 109:
                        label += "I 109F\n";
                        break;
                    case 109:
                        label += "I 109F\n";
                        break;
                    case 106:
                        label += "I 106P\n";
                        break;
                    case 1:
                        label += "I 1E\n";
                        break;
                    case 26:
                        label += "I 26G\n";
                        break;
                    case 31:
                        label += "I 31E\n";
                        break;
                    case 31:
                        label += "I 31E\n";
                        break;
                    case 31:
                        label += "I 31E\n";
                        break;
                    case 31:
                        label += "I 31E\n";
                        break;
                    case 31:
                        label += "I 31E\n";
                        break;
                    case 31:
                        label += "I 31E\n";
                        break;
                    case 31:
                        label += "I 31E\n";
                        break;
                    case 31:
                        label += "I 31E\n";
                        break;
                    case 27:
                        label += "I 27Y\n";
                        break;
                    case 27:
                        label += "I 27Y\n";
                        break;
                    case 27:
                        label += "I 27Y\n";
                        break;
                    case 27:
                        label += "I 27Y\n";
                        break;
                    case 31:
                        label += "I 31E\n";
                        break;
                    case 102:
                        label += "I 102V\n";
                        break;
                    case 102:
                        label += "I 102V\n";
                        break;
                    case 104:
                        label += "I 104G\n";
                        break;
                    case 100:
                        label += "I 100T\n";
                        break;
                    case 103:
                        label += "I 103A\n";
                        break;
                    case 112:
                        label += "I 112Y\n";
                        break;
                    case 60:
                        label += "N 60F\n";
                        break;
                    case 106:
                        label += "J 106P\n";
                        break;
                    case 101:
                        label += "J 101A\n";
                        break;
                    case 101:
                        label += "J 101A\n";
                        break;
                    case 102:
                        label += "J 102V\n";
                        break;
                    case 102:
                        label += "J 102V\n";
                        break;
                    case 102:
                        label += "J 102V\n";
                        break;
                    case 102:
                        label += "J 102V\n";
                        break;
                    case 102:
                        label += "J 102V\n";
                        break;
                    case 102:
                        label += "J 102V\n";
                        break;
                    case 102:
                        label += "J 102V\n";
                        break;
                    case 102:
                        label += "J 102V\n";
                        break;
                    case 30:
                        label += "J 30T\n";
                        break;
                    case 30:
                        label += "J 30T\n";
                        break;
                    case 30:
                        label += "J 30T\n";
                        break;
                    case 29:
                        label += "J 29L\n";
                        break;
                    case 30:
                        label += "J 30T\n";
                        break;
                    case 32:
                        label += "J 32L\n";
                        break;
                    case 51:
                        label += "J 51F\n";
                        break;
                    case 72:
                        label += "J 72E\n";
                        break;
                    case 72:
                        label += "J 72E\n";
                        break;
                    case 53:
                        label += "J 53P\n";
                        break;
                    case 54:
                        label += "J 54E\n";
                        break;
                    case 54:
                        label += "J 54E\n";
                        break;
                    case 111:
                        label += "J 111Y\n";
                        break;
                    case 102:
                        label += "J 102V\n";
                        break;
                    case 106:
                        label += "J 106P\n";
                        break;
                    case 106:
                        label += "J 106P\n";
                        break;
                    case 106:
                        label += "J 106P\n";
                        break;
                    case 106:
                        label += "J 106P\n";
                        break;
                    case 106:
                        label += "J 106P\n";
                        break;
                    case 106:
                        label += "J 106P\n";
                        break;
                    case 106:
                        label += "J 106P\n";
                        break;
                    case 109:
                        label += "J 109F\n";
                        break;
                    case 109:
                        label += "J 109F\n";
                        break;
                    case 109:
                        label += "J 109F\n";
                        break;
                    case 106:
                        label += "J 106P\n";
                        break;
                    case 1:
                        label += "J 1E\n";
                        break;
                    case 26:
                        label += "J 26G\n";
                        break;
                    case 31:
                        label += "J 31E\n";
                        break;
                    case 31:
                        label += "J 31E\n";
                        break;
                    case 31:
                        label += "J 31E\n";
                        break;
                    case 31:
                        label += "J 31E\n";
                        break;
                    case 31:
                        label += "J 31E\n";
                        break;
                    case 31:
                        label += "J 31E\n";
                        break;
                    case 31:
                        label += "J 31E\n";
                        break;
                    case 31:
                        label += "J 31E\n";
                        break;
                    case 27:
                        label += "J 27Y\n";
                        break;
                    case 27:
                        label += "J 27Y\n";
                        break;
                    case 27:
                        label += "J 27Y\n";
                        break;
                    case 27:
                        label += "J 27Y\n";
                        break;
                    case 31:
                        label += "J 31E\n";
                        break;
                    case 102:
                        label += "J 102V\n";
                        break;
                    case 102:
                        label += "J 102V\n";
                        break;
                    case 104:
                        label += "J 104G\n";
                        break;
                    case 100:
                        label += "J 100T\n";
                        break;
                    case 103:
                        label += "J 103A\n";
                        break;
                    case 112:
                        label += "J 112Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});