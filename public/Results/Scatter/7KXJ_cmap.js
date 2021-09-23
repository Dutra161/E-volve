
var myChart7KXJ = 0;
var ctx = document.getElementById('7KXJ').getContext('2d');
if (window.myChart7KXJ != 0){
    window.myChart7KXJ.destroy();
}
window.myChart7KXJ = new Chart(ctx, {
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
            data: [{x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 420, y: 80},
                {x: 420, y: 80},
                {x: 420, y: 80},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 417, y: 66},
                {x: 417, y: 66},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 405, y: 66},
                {x: 406, y: 66},
                {x: 406, y: 66},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 417, y: 36},
                {x: 417, y: 37},
                {x: 421, y: 80},
                {x: 421, y: 80},
                {x: 475, y: 109},
                {x: 487, y: 114},
                {x: 487, y: 114},
                {x: 505, y: 66},
                {x: 505, y: 67},
                {x: 505, y: 69},
                {x: 487, y: 110},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 409, y: 65},
                {x: 409, y: 65},
                {x: 409, y: 65},
                {x: 417, y: 65},
                {x: 421, y: 80},
                {x: 453, y: 56},
                {x: 453, y: 66},
                {x: 455, y: 36},
                {x: 473, y: 108},
                {x: 475, y: 109},
                {x: 487, y: 114},
                {x: 505, y: 67},
                {x: 505, y: 69},
                {x: 417, y: 65},
                {x: 417, y: 66},
                {x: 417, y: 66},
                {x: 473, y: 108},
                {x: 487, y: 109},
                {x: 505, y: 69},
                {x: 484, y: 110},
                {x: 489, y: 111},
                {x: 490, y: 109},
                {x: 492, y: 109},
                {x: 493, y: 109},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 456, y: 108},
                {x: 473, y: 108},
                {x: 486, y: 114},
                {x: 486, y: 110},
                {x: 489, y: 109},
                {x: 456, y: 108},
                {x: 473, y: 108},
                {x: 486, y: 114},
                {x: 486, y: 110},
                {x: 489, y: 109},
                {x: 456, y: 108},
                {x: 473, y: 108},
                {x: 486, y: 114},
                {x: 489, y: 109},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 484, y: 110},
                {x: 484, y: 110},
                {x: 486, y: 57},
                {x: 486, y: 64},
                {x: 486, y: 64},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 110},
                {x: 493, y: 109},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 484, y: 110},
                {x: 484, y: 110},
                {x: 486, y: 57},
                {x: 486, y: 64},
                {x: 486, y: 64},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 493, y: 108},
                {x: 493, y: 109},
                {x: 493, y: 109},
                {x: 456, y: 38},
                {x: 456, y: 38},
                {x: 456, y: 108},
                {x: 456, y: 108},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 484, y: 110},
                {x: 484, y: 110},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 110},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 110},
                {x: 489, y: 110},
                {x: 489, y: 110},
                {x: 490, y: 109},
                {x: 493, y: 109},
                {x: 493, y: 113},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KXJ Superpose"],
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
                        label += "7KXJALA 403R - ";
                        break;
                    case 403:
                        label += "7KXJALA 403R - ";
                        break;
                    case 403:
                        label += "7KXJALA 403R - ";
                        break;
                    case 403:
                        label += "7KXJALA 403R - ";
                        break;
                    case 403:
                        label += "7KXJALA 403R - ";
                        break;
                    case 403:
                        label += "7KXJALA 403R - ";
                        break;
                    case 403:
                        label += "7KXJALA 403R - ";
                        break;
                    case 403:
                        label += "7KXJALA 403R - ";
                        break;
                    case 405:
                        label += "7KXJALA 405D - ";
                        break;
                    case 417:
                        label += "7KXJALA 417K - ";
                        break;
                    case 417:
                        label += "7KXJALA 417K - ";
                        break;
                    case 420:
                        label += "7KXJALA 420D - ";
                        break;
                    case 420:
                        label += "7KXJALA 420D - ";
                        break;
                    case 420:
                        label += "7KXJALA 420D - ";
                        break;
                    case 421:
                        label += "7KXJALA 421Y - ";
                        break;
                    case 421:
                        label += "7KXJALA 421Y - ";
                        break;
                    case 456:
                        label += "7KXJALA 456F - ";
                        break;
                    case 473:
                        label += "7KXJALA 473Y - ";
                        break;
                    case 475:
                        label += "7KXJALA 475A - ";
                        break;
                    case 486:
                        label += "7KXJALA 486F - ";
                        break;
                    case 486:
                        label += "7KXJALA 486F - ";
                        break;
                    case 486:
                        label += "7KXJALA 486F - ";
                        break;
                    case 486:
                        label += "7KXJALA 486F - ";
                        break;
                    case 486:
                        label += "7KXJALA 486F - ";
                        break;
                    case 486:
                        label += "7KXJALA 486F - ";
                        break;
                    case 486:
                        label += "7KXJALA 486F - ";
                        break;
                    case 486:
                        label += "7KXJALA 486F - ";
                        break;
                    case 486:
                        label += "7KXJALA 486F - ";
                        break;
                    case 487:
                        label += "7KXJALA 487N - ";
                        break;
                    case 487:
                        label += "7KXJALA 487N - ";
                        break;
                    case 505:
                        label += "7KXJALA 505Y - ";
                        break;
                    case 505:
                        label += "7KXJALA 505Y - ";
                        break;
                    case 505:
                        label += "7KXJALA 505Y - ";
                        break;
                    case 484:
                        label += "7KXJAHA 484E - ";
                        break;
                    case 484:
                        label += "7KXJAHA 484E - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXJAHA 486F - ";
                        break;
                    case 487:
                        label += "7KXJAHA 487N - ";
                        break;
                    case 489:
                        label += "7KXJAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXJAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXJAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXJAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXJAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXJAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXJAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXJAHA 489Y - ";
                        break;
                    case 493:
                        label += "7KXJAHA 493Q - ";
                        break;
                    case 403:
                        label += "7KXJBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXJBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXJBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXJBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXJBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXJBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXJBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXJBMB 403R - ";
                        break;
                    case 406:
                        label += "7KXJBMB 406E - ";
                        break;
                    case 409:
                        label += "7KXJBMB 409Q - ";
                        break;
                    case 409:
                        label += "7KXJBMB 409Q - ";
                        break;
                    case 409:
                        label += "7KXJBMB 409Q - ";
                        break;
                    case 417:
                        label += "7KXJBMB 417K - ";
                        break;
                    case 421:
                        label += "7KXJBMB 421Y - ";
                        break;
                    case 453:
                        label += "7KXJBMB 453Y - ";
                        break;
                    case 453:
                        label += "7KXJBMB 453Y - ";
                        break;
                    case 455:
                        label += "7KXJBMB 455L - ";
                        break;
                    case 456:
                        label += "7KXJBMB 456F - ";
                        break;
                    case 473:
                        label += "7KXJBMB 473Y - ";
                        break;
                    case 473:
                        label += "7KXJBMB 473Y - ";
                        break;
                    case 475:
                        label += "7KXJBMB 475A - ";
                        break;
                    case 486:
                        label += "7KXJBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBMB 486F - ";
                        break;
                    case 487:
                        label += "7KXJBMB 487N - ";
                        break;
                    case 505:
                        label += "7KXJBMB 505Y - ";
                        break;
                    case 505:
                        label += "7KXJBMB 505Y - ";
                        break;
                    case 484:
                        label += "7KXJBIB 484E - ";
                        break;
                    case 484:
                        label += "7KXJBIB 484E - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 486:
                        label += "7KXJBIB 486F - ";
                        break;
                    case 489:
                        label += "7KXJBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXJBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXJBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXJBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXJBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXJBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXJBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXJBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXJBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXJBIB 489Y - ";
                        break;
                    case 493:
                        label += "7KXJBIB 493Q - ";
                        break;
                    case 493:
                        label += "7KXJBIB 493Q - ";
                        break;
                    case 493:
                        label += "7KXJBIB 493Q - ";
                        break;
                    case 403:
                        label += "7KXJCNC 403R - ";
                        break;
                    case 403:
                        label += "7KXJCNC 403R - ";
                        break;
                    case 403:
                        label += "7KXJCNC 403R - ";
                        break;
                    case 403:
                        label += "7KXJCNC 403R - ";
                        break;
                    case 406:
                        label += "7KXJCNC 406E - ";
                        break;
                    case 417:
                        label += "7KXJCNC 417K - ";
                        break;
                    case 417:
                        label += "7KXJCNC 417K - ";
                        break;
                    case 417:
                        label += "7KXJCNC 417K - ";
                        break;
                    case 456:
                        label += "7KXJCNC 456F - ";
                        break;
                    case 456:
                        label += "7KXJCNC 456F - ";
                        break;
                    case 456:
                        label += "7KXJCNC 456F - ";
                        break;
                    case 456:
                        label += "7KXJCNC 456F - ";
                        break;
                    case 456:
                        label += "7KXJCNC 456F - ";
                        break;
                    case 473:
                        label += "7KXJCNC 473Y - ";
                        break;
                    case 473:
                        label += "7KXJCNC 473Y - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCNC 486F - ";
                        break;
                    case 487:
                        label += "7KXJCNC 487N - ";
                        break;
                    case 505:
                        label += "7KXJCNC 505Y - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXJCJC 455L - ";
                        break;
                    case 484:
                        label += "7KXJCJC 484E - ";
                        break;
                    case 484:
                        label += "7KXJCJC 484E - ";
                        break;
                    case 484:
                        label += "7KXJCJC 484E - ";
                        break;
                    case 486:
                        label += "7KXJCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXJCJC 486F - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXJCJC 489Y - ";
                        break;
                    case 490:
                        label += "7KXJCJC 490F - ";
                        break;
                    case 490:
                        label += "7KXJCJC 490F - ";
                        break;
                    case 492:
                        label += "7KXJCJC 492L - ";
                        break;
                    case 493:
                        label += "7KXJCJC 493Q - ";
                        break;
                    case 493:
                        label += "7KXJCJC 493Q - ";
                        break;
                    case 493:
                        label += "7KXJCJC 493Q - ";
                        break;}
                switch (labely){
                    case 66:
                        label += "L 66D\n";
                        break;
                    case 66:
                        label += "L 66D\n";
                        break;
                    case 66:
                        label += "L 66D\n";
                        break;
                    case 66:
                        label += "L 66D\n";
                        break;
                    case 66:
                        label += "L 66D\n";
                        break;
                    case 66:
                        label += "L 66D\n";
                        break;
                    case 66:
                        label += "L 66D\n";
                        break;
                    case 66:
                        label += "L 66D\n";
                        break;
                    case 66:
                        label += "L 66D\n";
                        break;
                    case 36:
                        label += "L 36S\n";
                        break;
                    case 37:
                        label += "L 37S\n";
                        break;
                    case 80:
                        label += "L 80R\n";
                        break;
                    case 80:
                        label += "L 80R\n";
                        break;
                    case 80:
                        label += "L 80R\n";
                        break;
                    case 80:
                        label += "L 80R\n";
                        break;
                    case 80:
                        label += "L 80R\n";
                        break;
                    case 108:
                        label += "L 108H\n";
                        break;
                    case 108:
                        label += "L 108H\n";
                        break;
                    case 109:
                        label += "L 109T\n";
                        break;
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 66:
                        label += "L 66D\n";
                        break;
                    case 67:
                        label += "L 67L\n";
                        break;
                    case 69:
                        label += "L 69S\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 57:
                        label += "H 57Y\n";
                        break;
                    case 64:
                        label += "H 64A\n";
                        break;
                    case 64:
                        label += "H 64A\n";
                        break;
                    case 66:
                        label += "H 66A\n";
                        break;
                    case 66:
                        label += "H 66A\n";
                        break;
                    case 66:
                        label += "H 66A\n";
                        break;
                    case 66:
                        label += "H 66A\n";
                        break;
                    case 66:
                        label += "H 66A\n";
                        break;
                    case 66:
                        label += "H 66A\n";
                        break;
                    case 66:
                        label += "H 66A\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 110:
                        label += "H 110Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 65:
                        label += "M 65S\n";
                        break;
                    case 65:
                        label += "M 65S\n";
                        break;
                    case 65:
                        label += "M 65S\n";
                        break;
                    case 65:
                        label += "M 65S\n";
                        break;
                    case 80:
                        label += "M 80R\n";
                        break;
                    case 56:
                        label += "M 56S\n";
                        break;
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 36:
                        label += "M 36S\n";
                        break;
                    case 108:
                        label += "M 108H\n";
                        break;
                    case 108:
                        label += "M 108H\n";
                        break;
                    case 108:
                        label += "M 108H\n";
                        break;
                    case 109:
                        label += "M 109T\n";
                        break;
                    case 114:
                        label += "M 114Y\n";
                        break;
                    case 114:
                        label += "M 114Y\n";
                        break;
                    case 114:
                        label += "M 114Y\n";
                        break;
                    case 114:
                        label += "M 114Y\n";
                        break;
                    case 114:
                        label += "M 114Y\n";
                        break;
                    case 114:
                        label += "M 114Y\n";
                        break;
                    case 114:
                        label += "M 114Y\n";
                        break;
                    case 114:
                        label += "M 114Y\n";
                        break;
                    case 114:
                        label += "M 114Y\n";
                        break;
                    case 114:
                        label += "M 114Y\n";
                        break;
                    case 67:
                        label += "M 67L\n";
                        break;
                    case 69:
                        label += "M 69S\n";
                        break;
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 57:
                        label += "I 57Y\n";
                        break;
                    case 64:
                        label += "I 64A\n";
                        break;
                    case 64:
                        label += "I 64A\n";
                        break;
                    case 66:
                        label += "I 66A\n";
                        break;
                    case 66:
                        label += "I 66A\n";
                        break;
                    case 66:
                        label += "I 66A\n";
                        break;
                    case 66:
                        label += "I 66A\n";
                        break;
                    case 66:
                        label += "I 66A\n";
                        break;
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 108:
                        label += "I 108Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 65:
                        label += "N 65S\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 38:
                        label += "N 38A\n";
                        break;
                    case 38:
                        label += "N 38A\n";
                        break;
                    case 108:
                        label += "N 108H\n";
                        break;
                    case 108:
                        label += "N 108H\n";
                        break;
                    case 108:
                        label += "N 108H\n";
                        break;
                    case 108:
                        label += "N 108H\n";
                        break;
                    case 108:
                        label += "N 108H\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 114:
                        label += "N 114Y\n";
                        break;
                    case 109:
                        label += "N 109T\n";
                        break;
                    case 69:
                        label += "N 69S\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 66:
                        label += "J 66A\n";
                        break;
                    case 66:
                        label += "J 66A\n";
                        break;
                    case 66:
                        label += "J 66A\n";
                        break;
                    case 66:
                        label += "J 66A\n";
                        break;
                    case 66:
                        label += "J 66A\n";
                        break;
                    case 66:
                        label += "J 66A\n";
                        break;
                    case 66:
                        label += "J 66A\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 111:
                        label += "J 111G\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 109:
                        label += "J 109Y\n";
                        break;
                    case 113:
                        label += "J 113F\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});