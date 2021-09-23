
var myChart7KMK = 0;
var ctx = document.getElementById('7KMK').getContext('2d');
if (window.myChart7KMK != 0){
    window.myChart7KMK.destroy();
}
window.myChart7KMK = new Chart(ctx, {
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
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 405, y: 66},
                {x: 406, y: 66},
                {x: 406, y: 66},
                {x: 406, y: 66},
                {x: 406, y: 66},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 417, y: 56},
                {x: 417, y: 66},
                {x: 421, y: 80},
                {x: 421, y: 80},
                {x: 455, y: 36},
                {x: 473, y: 108},
                {x: 475, y: 108},
                {x: 487, y: 114},
                {x: 505, y: 67},
                {x: 505, y: 69},
                {x: 484, y: 109},
                {x: 485, y: 109},
                {x: 488, y: 109},
                {x: 490, y: 109},
                {x: 493, y: 108},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 417, y: 66},
                {x: 417, y: 66},
                {x: 455, y: 36},
                {x: 475, y: 108},
                {x: 487, y: 114},
                {x: 505, y: 55},
                {x: 505, y: 67},
                {x: 505, y: 69},
                {x: 484, y: 109},
                {x: 485, y: 109},
                {x: 488, y: 109},
                {x: 490, y: 109},
                {x: 493, y: 108},
                {x: 493, y: 108},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 456, y: 108},
                {x: 473, y: 108},
                {x: 486, y: 114},
                {x: 486, y: 110},
                {x: 489, y: 109},
                {x: 489, y: 113},
                {x: 456, y: 108},
                {x: 486, y: 114},
                {x: 486, y: 110},
                {x: 489, y: 109},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 475, y: 109},
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
                {x: 484, y: 109},
                {x: 484, y: 110},
                {x: 486, y: 57},
                {x: 486, y: 64},
                {x: 486, y: 64},
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
                {x: 489, y: 113},
                {x: 489, y: 113},
                {x: 493, y: 113},
                {x: 493, y: 113},
                {x: 475, y: 109},
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
                {x: 489, y: 113},
                {x: 489, y: 113},
                {x: 493, y: 108},
                {x: 493, y: 113},
                {x: 493, y: 113},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KMK Superpose"],
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
                        label += "7KMKALA 403R - ";
                        break;
                    case 403:
                        label += "7KMKALA 403R - ";
                        break;
                    case 403:
                        label += "7KMKALA 403R - ";
                        break;
                    case 403:
                        label += "7KMKALA 403R - ";
                        break;
                    case 403:
                        label += "7KMKALA 403R - ";
                        break;
                    case 403:
                        label += "7KMKALA 403R - ";
                        break;
                    case 403:
                        label += "7KMKALA 403R - ";
                        break;
                    case 403:
                        label += "7KMKALA 403R - ";
                        break;
                    case 405:
                        label += "7KMKALA 405D - ";
                        break;
                    case 406:
                        label += "7KMKALA 406E - ";
                        break;
                    case 406:
                        label += "7KMKALA 406E - ";
                        break;
                    case 417:
                        label += "7KMKALA 417K - ";
                        break;
                    case 417:
                        label += "7KMKALA 417K - ";
                        break;
                    case 417:
                        label += "7KMKALA 417K - ";
                        break;
                    case 420:
                        label += "7KMKALA 420D - ";
                        break;
                    case 421:
                        label += "7KMKALA 421Y - ";
                        break;
                    case 421:
                        label += "7KMKALA 421Y - ";
                        break;
                    case 455:
                        label += "7KMKALA 455L - ";
                        break;
                    case 456:
                        label += "7KMKALA 456F - ";
                        break;
                    case 473:
                        label += "7KMKALA 473Y - ";
                        break;
                    case 473:
                        label += "7KMKALA 473Y - ";
                        break;
                    case 475:
                        label += "7KMKALA 475A - ";
                        break;
                    case 475:
                        label += "7KMKALA 475A - ";
                        break;
                    case 486:
                        label += "7KMKALA 486F - ";
                        break;
                    case 486:
                        label += "7KMKALA 486F - ";
                        break;
                    case 486:
                        label += "7KMKALA 486F - ";
                        break;
                    case 486:
                        label += "7KMKALA 486F - ";
                        break;
                    case 486:
                        label += "7KMKALA 486F - ";
                        break;
                    case 486:
                        label += "7KMKALA 486F - ";
                        break;
                    case 486:
                        label += "7KMKALA 486F - ";
                        break;
                    case 486:
                        label += "7KMKALA 486F - ";
                        break;
                    case 486:
                        label += "7KMKALA 486F - ";
                        break;
                    case 487:
                        label += "7KMKALA 487N - ";
                        break;
                    case 505:
                        label += "7KMKALA 505Y - ";
                        break;
                    case 505:
                        label += "7KMKALA 505Y - ";
                        break;
                    case 455:
                        label += "7KMKAHA 455L - ";
                        break;
                    case 455:
                        label += "7KMKAHA 455L - ";
                        break;
                    case 455:
                        label += "7KMKAHA 455L - ";
                        break;
                    case 484:
                        label += "7KMKAHA 484E - ";
                        break;
                    case 484:
                        label += "7KMKAHA 484E - ";
                        break;
                    case 484:
                        label += "7KMKAHA 484E - ";
                        break;
                    case 485:
                        label += "7KMKAHA 485G - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KMKAHA 486F - ";
                        break;
                    case 488:
                        label += "7KMKAHA 488C - ";
                        break;
                    case 489:
                        label += "7KMKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KMKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KMKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KMKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KMKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KMKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KMKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KMKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KMKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KMKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KMKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KMKAHA 489Y - ";
                        break;
                    case 490:
                        label += "7KMKAHA 490F - ";
                        break;
                    case 493:
                        label += "7KMKAHA 493Q - ";
                        break;
                    case 493:
                        label += "7KMKAHA 493Q - ";
                        break;
                    case 493:
                        label += "7KMKAHA 493Q - ";
                        break;
                    case 403:
                        label += "7KMKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KMKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KMKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KMKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KMKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KMKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KMKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KMKBMB 403R - ";
                        break;
                    case 406:
                        label += "7KMKBMB 406E - ";
                        break;
                    case 406:
                        label += "7KMKBMB 406E - ";
                        break;
                    case 417:
                        label += "7KMKBMB 417K - ";
                        break;
                    case 417:
                        label += "7KMKBMB 417K - ";
                        break;
                    case 455:
                        label += "7KMKBMB 455L - ";
                        break;
                    case 456:
                        label += "7KMKBMB 456F - ";
                        break;
                    case 475:
                        label += "7KMKBMB 475A - ";
                        break;
                    case 475:
                        label += "7KMKBMB 475A - ";
                        break;
                    case 486:
                        label += "7KMKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBMB 486F - ";
                        break;
                    case 487:
                        label += "7KMKBMB 487N - ";
                        break;
                    case 505:
                        label += "7KMKBMB 505Y - ";
                        break;
                    case 505:
                        label += "7KMKBMB 505Y - ";
                        break;
                    case 505:
                        label += "7KMKBMB 505Y - ";
                        break;
                    case 455:
                        label += "7KMKBIB 455L - ";
                        break;
                    case 455:
                        label += "7KMKBIB 455L - ";
                        break;
                    case 455:
                        label += "7KMKBIB 455L - ";
                        break;
                    case 484:
                        label += "7KMKBIB 484E - ";
                        break;
                    case 485:
                        label += "7KMKBIB 485G - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 486:
                        label += "7KMKBIB 486F - ";
                        break;
                    case 488:
                        label += "7KMKBIB 488C - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KMKBIB 489Y - ";
                        break;
                    case 490:
                        label += "7KMKBIB 490F - ";
                        break;
                    case 493:
                        label += "7KMKBIB 493Q - ";
                        break;
                    case 493:
                        label += "7KMKBIB 493Q - ";
                        break;
                    case 493:
                        label += "7KMKBIB 493Q - ";
                        break;
                    case 493:
                        label += "7KMKBIB 493Q - ";
                        break;
                    case 493:
                        label += "7KMKBIB 493Q - ";
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
                    case 66:
                        label += "L 66D\n";
                        break;
                    case 66:
                        label += "L 66D\n";
                        break;
                    case 56:
                        label += "L 56S\n";
                        break;
                    case 66:
                        label += "L 66D\n";
                        break;
                    case 66:
                        label += "L 66D\n";
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
                    case 36:
                        label += "L 36S\n";
                        break;
                    case 108:
                        label += "L 108H\n";
                        break;
                    case 108:
                        label += "L 108H\n";
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
                    case 67:
                        label += "L 67L\n";
                        break;
                    case 69:
                        label += "L 69S\n";
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
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 109:
                        label += "H 109Y\n";
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
                    case 109:
                        label += "H 109Y\n";
                        break;
                    case 108:
                        label += "H 108Y\n";
                        break;
                    case 113:
                        label += "H 113F\n";
                        break;
                    case 113:
                        label += "H 113F\n";
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
                    case 36:
                        label += "M 36S\n";
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
                    case 55:
                        label += "M 55Y\n";
                        break;
                    case 67:
                        label += "M 67L\n";
                        break;
                    case 69:
                        label += "M 69S\n";
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
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
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
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 113:
                        label += "I 113F\n";
                        break;
                    case 113:
                        label += "I 113F\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 108:
                        label += "I 108Y\n";
                        break;
                    case 108:
                        label += "I 108Y\n";
                        break;
                    case 108:
                        label += "I 108Y\n";
                        break;
                    case 113:
                        label += "I 113F\n";
                        break;
                    case 113:
                        label += "I 113F\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});