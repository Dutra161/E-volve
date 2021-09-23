
var myChart7KXK = 0;
var ctx = document.getElementById('7KXK').getContext('2d');
if (window.myChart7KXK != 0){
    window.myChart7KXK.destroy();
}
window.myChart7KXK = new Chart(ctx, {
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
                {x: 417, y: 66},
                {x: 113, y: 215},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 417, y: 66},
                {x: 417, y: 66},
                {x: 427, y: 72},
                {x: 427, y: 72},
                {x: 462, y: 97},
                {x: 462, y: 97},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                {x: 403, y: 66},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 406, y: 66},
                {x: 406, y: 66},
                {x: 458, y: 108},
                {x: 406, y: 66},
                {x: 428, y: 1},
                {x: 427, y: 69},
                {x: 428, y: 69},
                {x: 428, y: 69},
                {x: 428, y: 69},
                {x: 428, y: 69},
                {x: 417, y: 80},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 403, y: 55},
                {x: 403, y: 66},
                {x: 421, y: 37},
                {x: 475, y: 108},
                {x: 487, y: 114},
                {x: 505, y: 67},
                {x: 505, y: 68},
                {x: 505, y: 69},
                {x: 485, y: 109},
                {x: 488, y: 109},
                {x: 488, y: 109},
                {x: 489, y: 109},
                {x: 403, y: 66},
                {x: 403, y: 67},
                {x: 417, y: 66},
                {x: 417, y: 66},
                {x: 487, y: 108},
                {x: 501, y: 69},
                {x: 505, y: 67},
                {x: 505, y: 68},
                {x: 505, y: 68},
                {x: 519, y: 5},
                {x: 490, y: 109},
                {x: 492, y: 109},
                {x: 427, y: 72},
                {x: 462, y: 97},
                {x: 403, y: 66},
                {x: 487, y: 109},
                {x: 489, y: 108},
                {x: 489, y: 108},
                {x: 489, y: 108},
                {x: 505, y: 66},
                {x: 505, y: 67},
                {x: 485, y: 109},
                {x: 485, y: 109},
                {x: 488, y: 109},
                {x: 489, y: 112},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 456, y: 108},
                {x: 486, y: 114},
                {x: 486, y: 110},
                {x: 489, y: 109},
                {x: 486, y: 114},
                {x: 456, y: 113},
                {x: 489, y: 109},
                {x: 489, y: 113},
                {x: 486, y: 114},
                {x: 489, y: 108},
                {x: 486, y: 110},
                {x: 489, y: 109},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 456, y: 38},
                {x: 475, y: 109},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 486, y: 114},
                {x: 487, y: 109},
                {x: 134, y: 174},
                {x: 484, y: 109},
                {x: 484, y: 110},
                {x: 484, y: 110},
                {x: 486, y: 64},
                {x: 486, y: 64},
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
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
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
                {x: 519, y: 3},
                {x: 519, y: 3},
                {x: 455, y: 113},
                {x: 455, y: 113},
                {x: 456, y: 113},
                {x: 456, y: 113},
                {x: 456, y: 113},
                {x: 484, y: 110},
                {x: 484, y: 110},
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
                {x: 489, y: 113},
                {x: 489, y: 113},
                {x: 490, y: 109},
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
                {x: 484, y: 109},
                {x: 484, y: 110},
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
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 486, y: 110},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                {x: 489, y: 109},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7KXK Superpose"],
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
                        label += "7KXKALA 403R - ";
                        break;
                    case 403:
                        label += "7KXKALA 403R - ";
                        break;
                    case 403:
                        label += "7KXKALA 403R - ";
                        break;
                    case 403:
                        label += "7KXKALA 403R - ";
                        break;
                    case 403:
                        label += "7KXKALA 403R - ";
                        break;
                    case 403:
                        label += "7KXKALA 403R - ";
                        break;
                    case 403:
                        label += "7KXKALA 403R - ";
                        break;
                    case 403:
                        label += "7KXKALA 403R - ";
                        break;
                    case 406:
                        label += "7KXKALA 406E - ";
                        break;
                    case 406:
                        label += "7KXKALA 406E - ";
                        break;
                    case 417:
                        label += "7KXKALA 417K - ";
                        break;
                    case 421:
                        label += "7KXKALA 421Y - ";
                        break;
                    case 456:
                        label += "7KXKALA 456F - ";
                        break;
                    case 456:
                        label += "7KXKALA 456F - ";
                        break;
                    case 458:
                        label += "7KXKALA 458K - ";
                        break;
                    case 475:
                        label += "7KXKALA 475A - ";
                        break;
                    case 475:
                        label += "7KXKALA 475A - ";
                        break;
                    case 486:
                        label += "7KXKALA 486F - ";
                        break;
                    case 486:
                        label += "7KXKALA 486F - ";
                        break;
                    case 486:
                        label += "7KXKALA 486F - ";
                        break;
                    case 486:
                        label += "7KXKALA 486F - ";
                        break;
                    case 486:
                        label += "7KXKALA 486F - ";
                        break;
                    case 486:
                        label += "7KXKALA 486F - ";
                        break;
                    case 486:
                        label += "7KXKALA 486F - ";
                        break;
                    case 486:
                        label += "7KXKALA 486F - ";
                        break;
                    case 487:
                        label += "7KXKALA 487N - ";
                        break;
                    case 487:
                        label += "7KXKALA 487N - ";
                        break;
                    case 505:
                        label += "7KXKALA 505Y - ";
                        break;
                    case 505:
                        label += "7KXKALA 505Y - ";
                        break;
                    case 505:
                        label += "7KXKALA 505Y - ";
                        break;
                    case 113:
                        label += "7KXKANA 113K - ";
                        break;
                    case 134:
                        label += "7KXKANA 134Q - ";
                        break;
                    case 484:
                        label += "7KXKAHA 484E - ";
                        break;
                    case 484:
                        label += "7KXKAHA 484E - ";
                        break;
                    case 484:
                        label += "7KXKAHA 484E - ";
                        break;
                    case 485:
                        label += "7KXKAHA 485G - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 486:
                        label += "7KXKAHA 486F - ";
                        break;
                    case 488:
                        label += "7KXKAHA 488C - ";
                        break;
                    case 488:
                        label += "7KXKAHA 488C - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 489:
                        label += "7KXKAHA 489Y - ";
                        break;
                    case 403:
                        label += "7KXKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXKBMB 403R - ";
                        break;
                    case 403:
                        label += "7KXKBMB 403R - ";
                        break;
                    case 406:
                        label += "7KXKBMB 406E - ";
                        break;
                    case 417:
                        label += "7KXKBMB 417K - ";
                        break;
                    case 417:
                        label += "7KXKBMB 417K - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 486:
                        label += "7KXKBMB 486F - ";
                        break;
                    case 487:
                        label += "7KXKBMB 487N - ";
                        break;
                    case 501:
                        label += "7KXKBMB 501N - ";
                        break;
                    case 505:
                        label += "7KXKBMB 505Y - ";
                        break;
                    case 505:
                        label += "7KXKBMB 505Y - ";
                        break;
                    case 505:
                        label += "7KXKBMB 505Y - ";
                        break;
                    case 428:
                        label += "7KXKBNB 428D - ";
                        break;
                    case 519:
                        label += "7KXKBNB 519H - ";
                        break;
                    case 519:
                        label += "7KXKBNB 519H - ";
                        break;
                    case 519:
                        label += "7KXKBNB 519H - ";
                        break;
                    case 455:
                        label += "7KXKBIB 455L - ";
                        break;
                    case 455:
                        label += "7KXKBIB 455L - ";
                        break;
                    case 456:
                        label += "7KXKBIB 456F - ";
                        break;
                    case 456:
                        label += "7KXKBIB 456F - ";
                        break;
                    case 456:
                        label += "7KXKBIB 456F - ";
                        break;
                    case 456:
                        label += "7KXKBIB 456F - ";
                        break;
                    case 484:
                        label += "7KXKBIB 484E - ";
                        break;
                    case 484:
                        label += "7KXKBIB 484E - ";
                        break;
                    case 486:
                        label += "7KXKBIB 486F - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 489:
                        label += "7KXKBIB 489Y - ";
                        break;
                    case 490:
                        label += "7KXKBIB 490F - ";
                        break;
                    case 490:
                        label += "7KXKBIB 490F - ";
                        break;
                    case 492:
                        label += "7KXKBIB 492L - ";
                        break;
                    case 427:
                        label += "7KXKBJB 427D - ";
                        break;
                    case 427:
                        label += "7KXKBJB 427D - ";
                        break;
                    case 427:
                        label += "7KXKBJB 427D - ";
                        break;
                    case 428:
                        label += "7KXKBJB 428D - ";
                        break;
                    case 428:
                        label += "7KXKBJB 428D - ";
                        break;
                    case 428:
                        label += "7KXKBJB 428D - ";
                        break;
                    case 428:
                        label += "7KXKBJB 428D - ";
                        break;
                    case 462:
                        label += "7KXKBJB 462K - ";
                        break;
                    case 462:
                        label += "7KXKBJB 462K - ";
                        break;
                    case 403:
                        label += "7KXKCNC 403R - ";
                        break;
                    case 403:
                        label += "7KXKCNC 403R - ";
                        break;
                    case 403:
                        label += "7KXKCNC 403R - ";
                        break;
                    case 403:
                        label += "7KXKCNC 403R - ";
                        break;
                    case 403:
                        label += "7KXKCNC 403R - ";
                        break;
                    case 403:
                        label += "7KXKCNC 403R - ";
                        break;
                    case 403:
                        label += "7KXKCNC 403R - ";
                        break;
                    case 417:
                        label += "7KXKCNC 417K - ";
                        break;
                    case 486:
                        label += "7KXKCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCNC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCNC 486F - ";
                        break;
                    case 487:
                        label += "7KXKCNC 487N - ";
                        break;
                    case 489:
                        label += "7KXKCNC 489Y - ";
                        break;
                    case 489:
                        label += "7KXKCNC 489Y - ";
                        break;
                    case 489:
                        label += "7KXKCNC 489Y - ";
                        break;
                    case 489:
                        label += "7KXKCNC 489Y - ";
                        break;
                    case 505:
                        label += "7KXKCNC 505Y - ";
                        break;
                    case 505:
                        label += "7KXKCNC 505Y - ";
                        break;
                    case 455:
                        label += "7KXKCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXKCJC 455L - ";
                        break;
                    case 455:
                        label += "7KXKCJC 455L - ";
                        break;
                    case 484:
                        label += "7KXKCJC 484E - ";
                        break;
                    case 484:
                        label += "7KXKCJC 484E - ";
                        break;
                    case 485:
                        label += "7KXKCJC 485G - ";
                        break;
                    case 485:
                        label += "7KXKCJC 485G - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 486:
                        label += "7KXKCJC 486F - ";
                        break;
                    case 488:
                        label += "7KXKCJC 488C - ";
                        break;
                    case 489:
                        label += "7KXKCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXKCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXKCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXKCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXKCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXKCJC 489Y - ";
                        break;
                    case 489:
                        label += "7KXKCJC 489Y - ";
                        break;}
                switch (labely){
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
                    case 37:
                        label += "L 37S\n";
                        break;
                    case 38:
                        label += "L 38A\n";
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
                    case 109:
                        label += "L 109T\n";
                        break;
                    case 114:
                        label += "L 114Y\n";
                        break;
                    case 67:
                        label += "L 67L\n";
                        break;
                    case 68:
                        label += "L 68Y\n";
                        break;
                    case 69:
                        label += "L 69S\n";
                        break;
                    case 215:
                        label += "N 215E\n";
                        break;
                    case 174:
                        label += "N 174L\n";
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
                    case 109:
                        label += "H 109Y\n";
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
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 66:
                        label += "M 66D\n";
                        break;
                    case 66:
                        label += "M 66D\n";
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
                    case 108:
                        label += "M 108H\n";
                        break;
                    case 69:
                        label += "M 69S\n";
                        break;
                    case 67:
                        label += "M 67L\n";
                        break;
                    case 68:
                        label += "M 68Y\n";
                        break;
                    case 68:
                        label += "M 68Y\n";
                        break;
                    case 1:
                        label += "N 1D\n";
                        break;
                    case 3:
                        label += "N 3Q\n";
                        break;
                    case 3:
                        label += "N 3Q\n";
                        break;
                    case 5:
                        label += "N 5T\n";
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
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 109:
                        label += "I 109Y\n";
                        break;
                    case 69:
                        label += "J 69D\n";
                        break;
                    case 72:
                        label += "J 72K\n";
                        break;
                    case 72:
                        label += "J 72K\n";
                        break;
                    case 69:
                        label += "J 69D\n";
                        break;
                    case 69:
                        label += "J 69D\n";
                        break;
                    case 69:
                        label += "J 69D\n";
                        break;
                    case 69:
                        label += "J 69D\n";
                        break;
                    case 97:
                        label += "J 97E\n";
                        break;
                    case 97:
                        label += "J 97E\n";
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
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 80:
                        label += "N 80R\n";
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
                    case 66:
                        label += "N 66D\n";
                        break;
                    case 67:
                        label += "N 67L\n";
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
                    case 109:
                        label += "J 109Y\n";
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
                    case 110:
                        label += "J 110Y\n";
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
                    case 110:
                        label += "J 110Y\n";
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
                    case 110:
                        label += "J 110Y\n";
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
                    case 110:
                        label += "J 110Y\n";
                        break;
                    case 110:
                        label += "J 110Y\n";
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
                    case 112:
                        label += "J 112G\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});