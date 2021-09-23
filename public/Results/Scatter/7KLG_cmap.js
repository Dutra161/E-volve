
var myChart7KLG = 0;
var ctx = document.getElementById('7KLG').getContext('2d');
if (window.myChart7KLG != 0){
    window.myChart7KLG.destroy();
}
window.myChart7KLG = new Chart(ctx, {
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
                {x: 417, y: 66},
                {x: 417, y: 66},
                {x: 420, y: 80},
                {x: 420, y: 80},
                {x: 420, y: 80},
                {x: 420, y: 80},
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
                {x: 417, y: 66},
                {x: 417, y: 66},
                {x: 420, y: 80},
                {x: 420, y: 80},
                {x: 420, y: 80},
                {x: 420, y: 80},
                {x: 420, y: 80},
                {x: 420, y: 80},
                {x: 420, y: 80},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 406, y: 66},
                {x: 406, y: 66},
                {x: 406, y: 66},
                {x: 406, y: 66},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 484, y: 109},
                {x: 490, y: 109},
                {x: 421, y: 36},
                {x: 421, y: 37},
                {x: 421, y: 37},
                {x: 505, y: 55},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 417, y: 66},
                {x: 505, y: 67},
                {x: 420, y: 80},
                {x: 421, y: 80},
                {x: 460, y: 80},
                {x: 489, y: 107},
                {x: 458, y: 108},
                {x: 473, y: 108},
                {x: 489, y: 108},
                {x: 477, y: 109},
                {x: 477, y: 109},
                {x: 487, y: 114},
                {x: 370, y: 92},
                {x: 370, y: 93},
                {x: 484, y: 109},
                {x: 490, y: 109},
                {x: 421, y: 37},
                {x: 421, y: 37},
                {x: 505, y: 55},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 417, y: 66},
                {x: 417, y: 66},
                {x: 505, y: 67},
                {x: 420, y: 80},
                {x: 421, y: 80},
                {x: 460, y: 80},
                {x: 460, y: 80},
                {x: 489, y: 107},
                {x: 473, y: 108},
                {x: 489, y: 108},
                {x: 477, y: 109},
                {x: 487, y: 114},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 486, y: 110},
                {x: 473, y: 108},
                {x: 486, y: 114},
                {x: 486, y: 110},
                {x: 486, y: 114},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 486, y: 64},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 484, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 489, y: 110},
                {x: 489, y: 110},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 493, y: 113},
                {x: 493, y: 113},
                {x: 493, y: 113},
                {x: 473, y: 108},
                {x: 473, y: 108},
                {x: 475, y: 108},
                {x: 475, y: 108},
                {x: 475, y: 108},
                {x: 475, y: 108},
                {x: 475, y: 108},
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
                {x: 486, y: 64},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 486, y: 66},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 484, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 489, y: 110},
                {x: 489, y: 110},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 493, y: 113},
                {x: 493, y: 113},
                {x: 493, y: 113},
                {x: 456, y: 108},
                {x: 456, y: 108},
                {x: 473, y: 108},
                {x: 473, y: 108},
                {x: 475, y: 108},
                {x: 475, y: 108},
                {x: 475, y: 108},
                {x: 475, y: 108},
                {x: 475, y: 108},
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
            text:["7KLG Superpose"],
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
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 484:
                        label += "7KLGAHA 484E - ";
                        break;
                    case 489:
                        label += "7KLGAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KLGAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KLGAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KLGAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KLGAHA 489Y - ";
                        break;
                    case 490:
                        label += "7KLGAHA 490F - ";
                        break;
                    case 484:
                        label += "7KLGAHA 484E - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 486:
                        label += "7KLGAHA 486F - ";
                        break;
                    case 489:
                        label += "7KLGAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KLGAHA 489Y - ";
                        break;
                    case 455:
                        label += "7KLGAHA 455L - ";
                        break;
                    case 455:
                        label += "7KLGAHA 455L - ";
                        break;
                    case 455:
                        label += "7KLGAHA 455L - ";
                        break;
                    case 455:
                        label += "7KLGAHA 455L - ";
                        break;
                    case 493:
                        label += "7KLGAHA 493Q - ";
                        break;
                    case 493:
                        label += "7KLGAHA 493Q - ";
                        break;
                    case 493:
                        label += "7KLGAHA 493Q - ";
                        break;
                    case 421:
                        label += "7KLGALA 421Y - ";
                        break;
                    case 421:
                        label += "7KLGALA 421Y - ";
                        break;
                    case 421:
                        label += "7KLGALA 421Y - ";
                        break;
                    case 505:
                        label += "7KLGALA 505Y - ";
                        break;
                    case 403:
                        label += "7KLGALA 403R - ";
                        break;
                    case 403:
                        label += "7KLGALA 403R - ";
                        break;
                    case 403:
                        label += "7KLGALA 403R - ";
                        break;
                    case 403:
                        label += "7KLGALA 403R - ";
                        break;
                    case 403:
                        label += "7KLGALA 403R - ";
                        break;
                    case 403:
                        label += "7KLGALA 403R - ";
                        break;
                    case 403:
                        label += "7KLGALA 403R - ";
                        break;
                    case 403:
                        label += "7KLGALA 403R - ";
                        break;
                    case 406:
                        label += "7KLGALA 406E - ";
                        break;
                    case 406:
                        label += "7KLGALA 406E - ";
                        break;
                    case 417:
                        label += "7KLGALA 417K - ";
                        break;
                    case 417:
                        label += "7KLGALA 417K - ";
                        break;
                    case 505:
                        label += "7KLGALA 505Y - ";
                        break;
                    case 420:
                        label += "7KLGALA 420D - ";
                        break;
                    case 420:
                        label += "7KLGALA 420D - ";
                        break;
                    case 420:
                        label += "7KLGALA 420D - ";
                        break;
                    case 420:
                        label += "7KLGALA 420D - ";
                        break;
                    case 420:
                        label += "7KLGALA 420D - ";
                        break;
                    case 420:
                        label += "7KLGALA 420D - ";
                        break;
                    case 420:
                        label += "7KLGALA 420D - ";
                        break;
                    case 421:
                        label += "7KLGALA 421Y - ";
                        break;
                    case 460:
                        label += "7KLGALA 460N - ";
                        break;
                    case 489:
                        label += "7KLGALA 489Y - ";
                        break;
                    case 458:
                        label += "7KLGALA 458K - ";
                        break;
                    case 473:
                        label += "7KLGALA 473Y - ";
                        break;
                    case 473:
                        label += "7KLGALA 473Y - ";
                        break;
                    case 473:
                        label += "7KLGALA 473Y - ";
                        break;
                    case 473:
                        label += "7KLGALA 473Y - ";
                        break;
                    case 475:
                        label += "7KLGALA 475A - ";
                        break;
                    case 475:
                        label += "7KLGALA 475A - ";
                        break;
                    case 475:
                        label += "7KLGALA 475A - ";
                        break;
                    case 475:
                        label += "7KLGALA 475A - ";
                        break;
                    case 475:
                        label += "7KLGALA 475A - ";
                        break;
                    case 489:
                        label += "7KLGALA 489Y - ";
                        break;
                    case 477:
                        label += "7KLGALA 477S - ";
                        break;
                    case 477:
                        label += "7KLGALA 477S - ";
                        break;
                    case 486:
                        label += "7KLGALA 486F - ";
                        break;
                    case 486:
                        label += "7KLGALA 486F - ";
                        break;
                    case 486:
                        label += "7KLGALA 486F - ";
                        break;
                    case 486:
                        label += "7KLGALA 486F - ";
                        break;
                    case 486:
                        label += "7KLGALA 486F - ";
                        break;
                    case 486:
                        label += "7KLGALA 486F - ";
                        break;
                    case 486:
                        label += "7KLGALA 486F - ";
                        break;
                    case 486:
                        label += "7KLGALA 486F - ";
                        break;
                    case 486:
                        label += "7KLGALA 486F - ";
                        break;
                    case 486:
                        label += "7KLGALA 486F - ";
                        break;
                    case 486:
                        label += "7KLGALA 486F - ";
                        break;
                    case 486:
                        label += "7KLGALA 486F - ";
                        break;
                    case 487:
                        label += "7KLGALA 487N - ";
                        break;
                    case 370:
                        label += "7KLGAMA 370N - ";
                        break;
                    case 370:
                        label += "7KLGAMA 370N - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 484:
                        label += "7KLGBIB 484E - ";
                        break;
                    case 489:
                        label += "7KLGBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KLGBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KLGBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KLGBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KLGBIB 489Y - ";
                        break;
                    case 490:
                        label += "7KLGBIB 490F - ";
                        break;
                    case 484:
                        label += "7KLGBIB 484E - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBIB 486F - ";
                        break;
                    case 489:
                        label += "7KLGBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KLGBIB 489Y - ";
                        break;
                    case 455:
                        label += "7KLGBIB 455L - ";
                        break;
                    case 455:
                        label += "7KLGBIB 455L - ";
                        break;
                    case 455:
                        label += "7KLGBIB 455L - ";
                        break;
                    case 493:
                        label += "7KLGBIB 493Q - ";
                        break;
                    case 493:
                        label += "7KLGBIB 493Q - ";
                        break;
                    case 493:
                        label += "7KLGBIB 493Q - ";
                        break;
                    case 421:
                        label += "7KLGBMB 421Y - ";
                        break;
                    case 421:
                        label += "7KLGBMB 421Y - ";
                        break;
                    case 505:
                        label += "7KLGBMB 505Y - ";
                        break;
                    case 403:
                        label += "7KLGBMB 403R - ";
                        break;
                    case 403:
                        label += "7KLGBMB 403R - ";
                        break;
                    case 403:
                        label += "7KLGBMB 403R - ";
                        break;
                    case 403:
                        label += "7KLGBMB 403R - ";
                        break;
                    case 403:
                        label += "7KLGBMB 403R - ";
                        break;
                    case 403:
                        label += "7KLGBMB 403R - ";
                        break;
                    case 403:
                        label += "7KLGBMB 403R - ";
                        break;
                    case 403:
                        label += "7KLGBMB 403R - ";
                        break;
                    case 406:
                        label += "7KLGBMB 406E - ";
                        break;
                    case 406:
                        label += "7KLGBMB 406E - ";
                        break;
                    case 417:
                        label += "7KLGBMB 417K - ";
                        break;
                    case 417:
                        label += "7KLGBMB 417K - ";
                        break;
                    case 505:
                        label += "7KLGBMB 505Y - ";
                        break;
                    case 420:
                        label += "7KLGBMB 420D - ";
                        break;
                    case 420:
                        label += "7KLGBMB 420D - ";
                        break;
                    case 420:
                        label += "7KLGBMB 420D - ";
                        break;
                    case 420:
                        label += "7KLGBMB 420D - ";
                        break;
                    case 420:
                        label += "7KLGBMB 420D - ";
                        break;
                    case 420:
                        label += "7KLGBMB 420D - ";
                        break;
                    case 420:
                        label += "7KLGBMB 420D - ";
                        break;
                    case 421:
                        label += "7KLGBMB 421Y - ";
                        break;
                    case 460:
                        label += "7KLGBMB 460N - ";
                        break;
                    case 460:
                        label += "7KLGBMB 460N - ";
                        break;
                    case 489:
                        label += "7KLGBMB 489Y - ";
                        break;
                    case 456:
                        label += "7KLGBMB 456F - ";
                        break;
                    case 456:
                        label += "7KLGBMB 456F - ";
                        break;
                    case 473:
                        label += "7KLGBMB 473Y - ";
                        break;
                    case 473:
                        label += "7KLGBMB 473Y - ";
                        break;
                    case 473:
                        label += "7KLGBMB 473Y - ";
                        break;
                    case 475:
                        label += "7KLGBMB 475A - ";
                        break;
                    case 475:
                        label += "7KLGBMB 475A - ";
                        break;
                    case 475:
                        label += "7KLGBMB 475A - ";
                        break;
                    case 475:
                        label += "7KLGBMB 475A - ";
                        break;
                    case 475:
                        label += "7KLGBMB 475A - ";
                        break;
                    case 489:
                        label += "7KLGBMB 489Y - ";
                        break;
                    case 477:
                        label += "7KLGBMB 477S - ";
                        break;
                    case 486:
                        label += "7KLGBMB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBMB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBMB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBMB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBMB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBMB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBMB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBMB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBMB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBMB 486F - ";
                        break;
                    case 486:
                        label += "7KLGBMB 486F - ";
                        break;
                    case 487:
                        label += "7KLGBMB 487N - ";
                        break;}
                switch (labely){
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
                    case 113:
                        label += "H 113F\n";
                        break;
                    case 113:
                        label += "H 113F\n";
                        break;
                    case 113:
                        label += "H 113F\n";
                        break;
                    case 113:
                        label += "H 113F\n";
                        break;
                    case 113:
                        label += "H 113F\n";
                        break;
                    case 113:
                        label += "H 113F\n";
                        break;
                    case 113:
                        label += "H 113F\n";
                        break;
                    case 36:
                        label += "L 36S\n";
                        break;
                    case 37:
                        label += "L 37S\n";
                        break;
                    case 37:
                        label += "L 37S\n";
                        break;
                    case 55:
                        label += "L 55Y\n";
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
                    case 67:
                        label += "L 67L\n";
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
                    case 107:
                        label += "L 107S\n";
                        break;
                    case 108:
                        label += "L 108Y\n";
                        break;
                    case 108:
                        label += "L 108Y\n";
                        break;
                    case 108:
                        label += "L 108Y\n";
                        break;
                    case 108:
                        label += "L 108Y\n";
                        break;
                    case 108:
                        label += "L 108Y\n";
                        break;
                    case 108:
                        label += "L 108Y\n";
                        break;
                    case 108:
                        label += "L 108Y\n";
                        break;
                    case 108:
                        label += "L 108Y\n";
                        break;
                    case 108:
                        label += "L 108Y\n";
                        break;
                    case 108:
                        label += "L 108Y\n";
                        break;
                    case 108:
                        label += "L 108Y\n";
                        break;
                    case 109:
                        label += "L 109R\n";
                        break;
                    case 109:
                        label += "L 109R\n";
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
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 92:
                        label += "M 92S\n";
                        break;
                    case 93:
                        label += "M 93S\n";
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
                    case 66:
                        label += "I 66A\n";
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
                    case 110:
                        label += "I 110Y\n";
                        break;
                    case 113:
                        label += "I 113F\n";
                        break;
                    case 113:
                        label += "I 113F\n";
                        break;
                    case 113:
                        label += "I 113F\n";
                        break;
                    case 113:
                        label += "I 113F\n";
                        break;
                    case 113:
                        label += "I 113F\n";
                        break;
                    case 113:
                        label += "I 113F\n";
                        break;
                    case 37:
                        label += "M 37S\n";
                        break;
                    case 37:
                        label += "M 37S\n";
                        break;
                    case 55:
                        label += "M 55Y\n";
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
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 67:
                        label += "M 67L\n";
                        break;
                    case 80:
                        label += "M 80R\n";
                        break;
                    case 80:
                        label += "M 80R\n";
                        break;
                    case 80:
                        label += "M 80R\n";
                        break;
                    case 80:
                        label += "M 80R\n";
                        break;
                    case 80:
                        label += "M 80R\n";
                        break;
                    case 80:
                        label += "M 80R\n";
                        break;
                    case 80:
                        label += "M 80R\n";
                        break;
                    case 80:
                        label += "M 80R\n";
                        break;
                    case 80:
                        label += "M 80R\n";
                        break;
                    case 80:
                        label += "M 80R\n";
                        break;
                    case 107:
                        label += "M 107S\n";
                        break;
                    case 108:
                        label += "M 108Y\n";
                        break;
                    case 108:
                        label += "M 108Y\n";
                        break;
                    case 108:
                        label += "M 108Y\n";
                        break;
                    case 108:
                        label += "M 108Y\n";
                        break;
                    case 108:
                        label += "M 108Y\n";
                        break;
                    case 108:
                        label += "M 108Y\n";
                        break;
                    case 108:
                        label += "M 108Y\n";
                        break;
                    case 108:
                        label += "M 108Y\n";
                        break;
                    case 108:
                        label += "M 108Y\n";
                        break;
                    case 108:
                        label += "M 108Y\n";
                        break;
                    case 108:
                        label += "M 108Y\n";
                        break;
                    case 109:
                        label += "M 109R\n";
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
                    case 114:
                        label += "M 114Y\n";
                        break;
                    case 114:
                        label += "M 114Y\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});