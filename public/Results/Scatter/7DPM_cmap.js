
var myChart7DPM = 0;
var ctx = document.getElementById('7DPM').getContext('2d');
if (window.myChart7DPM != 0){
    window.myChart7DPM.destroy();
}
window.myChart7DPM = new Chart(ctx, {
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
            data: [{x: 378, y: 103},
                {x: 378, y: 103},
                {x: 378, y: 103},
                {x: 357, y: 151},
                {x: 357, y: 151},
                {x: 357, y: 151},
                {x: 357, y: 151},
                {x: 466, y: 185},
                {x: 466, y: 185},
                {x: 466, y: 185},
                {x: 378, y: 103},
                {x: 378, y: 103},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 357, y: 190},
                {x: 357, y: 190},
                {x: 357, y: 190},
                {x: 357, y: 190},
                {x: 462, y: 145},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 378, y: 101},
                {x: 369, y: 102},
                {x: 379, y: 105},
                {x: 369, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 376, y: 108},
                {x: 376, y: 108},
                {x: 408, y: 108},
                {x: 375, y: 109},
                {x: 369, y: 110},
                {x: 374, y: 110},
                {x: 375, y: 110},
                {x: 375, y: 111},
                {x: 508, y: 111},
                {x: 508, y: 111},
                {x: 373, y: 32},
                {x: 374, y: 32},
                {x: 375, y: 32},
                {x: 506, y: 52},
                {x: 503, y: 53},
                {x: 372, y: 92},
                {x: 369, y: 102},
                {x: 378, y: 103},
                {x: 378, y: 103},
                {x: 378, y: 105},
                {x: 379, y: 105},
                {x: 369, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 376, y: 108},
                {x: 376, y: 108},
                {x: 408, y: 108},
                {x: 375, y: 109},
                {x: 374, y: 110},
                {x: 374, y: 110},
                {x: 375, y: 110},
                {x: 375, y: 111},
                {x: 508, y: 111},
                {x: 508, y: 111},
                {x: 373, y: 32},
                {x: 374, y: 32},
                {x: 374, y: 32},
                {x: 375, y: 32},
                {x: 506, y: 52},
                {x: 503, y: 53},
                {x: 372, y: 92},
                {x: 354, y: 188},
                {x: 355, y: 151},
                {x: 355, y: 189},
                {x: 462, y: 147},
                {x: 464, y: 154},
                {x: 465, y: 156},
                {x: 466, y: 154},
                {x: 466, y: 155},
                {x: 466, y: 156},
                {x: 467, y: 156},
                {x: 467, y: 156},
                {x: 468, y: 156},
                {x: 477, y: 3},
                {x: 516, y: 152},
                {x: 369, y: 102},
                {x: 379, y: 105},
                {x: 369, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 376, y: 108},
                {x: 376, y: 108},
                {x: 375, y: 109},
                {x: 372, y: 110},
                {x: 375, y: 110},
                {x: 375, y: 111},
                {x: 375, y: 111},
                {x: 508, y: 111},
                {x: 508, y: 111},
                {x: 373, y: 32},
                {x: 374, y: 32},
                {x: 375, y: 32},
                {x: 506, y: 52},
                {x: 503, y: 53},
                {x: 372, y: 92},
                {x: 378, y: 101},
                {x: 369, y: 102},
                {x: 379, y: 105},
                {x: 369, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 376, y: 108},
                {x: 376, y: 108},
                {x: 375, y: 109},
                {x: 372, y: 110},
                {x: 374, y: 110},
                {x: 374, y: 110},
                {x: 375, y: 110},
                {x: 375, y: 111},
                {x: 508, y: 111},
                {x: 508, y: 111},
                {x: 373, y: 32},
                {x: 374, y: 32},
                {x: 374, y: 32},
                {x: 375, y: 32},
                {x: 506, y: 52},
                {x: 503, y: 53},
                {x: 372, y: 92},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 369, y: 107},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 369, y: 107},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 378, y: 101},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 376, y: 108},
                {x: 376, y: 108},
                {x: 378, y: 108},
                {x: 407, y: 108},
                {x: 408, y: 108},
                {x: 503, y: 109},
                {x: 503, y: 109},
                {x: 503, y: 109},
                {x: 503, y: 50},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 376, y: 108},
                {x: 378, y: 108},
                {x: 408, y: 108},
                {x: 503, y: 109},
                {x: 503, y: 109},
                {x: 483, y: 89},
                {x: 503, y: 50},
                {x: 353, y: 153},
                {x: 355, y: 151},
                {x: 396, y: 151},
                {x: 396, y: 152},
                {x: 462, y: 154},
                {x: 462, y: 154},
                {x: 465, y: 154},
                {x: 465, y: 154},
                {x: 465, y: 154},
                {x: 465, y: 154},
                {x: 465, y: 154},
                {x: 465, y: 154},
                {x: 468, y: 158},
                {x: 468, y: 158},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 376, y: 108},
                {x: 376, y: 108},
                {x: 408, y: 108},
                {x: 503, y: 109},
                {x: 503, y: 109},
                {x: 503, y: 50},
                {x: 378, y: 101},
                {x: 378, y: 101},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 369, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 377, y: 107},
                {x: 376, y: 108},
                {x: 376, y: 108},
                {x: 378, y: 108},
                {x: 407, y: 108},
                {x: 407, y: 108},
                {x: 407, y: 108},
                {x: 503, y: 109},
                {x: 503, y: 109},
                {x: 503, y: 49},
                {x: 503, y: 49},
                {x: 503, y: 50},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["7DPM Superpose"],
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
                    case 378:
                        label += "7DPMCAC 378K - ";
                        break;
                    case 378:
                        label += "7DPMCAC 378K - ";
                        break;
                    case 369:
                        label += "7DPMCAC 369Y - ";
                        break;
                    case 378:
                        label += "7DPMCAC 378K - ";
                        break;
                    case 379:
                        label += "7DPMCAC 379C - ";
                        break;
                    case 369:
                        label += "7DPMCAC 369Y - ";
                        break;
                    case 369:
                        label += "7DPMCAC 369Y - ";
                        break;
                    case 369:
                        label += "7DPMCAC 369Y - ";
                        break;
                    case 369:
                        label += "7DPMCAC 369Y - ";
                        break;
                    case 369:
                        label += "7DPMCAC 369Y - ";
                        break;
                    case 369:
                        label += "7DPMCAC 369Y - ";
                        break;
                    case 377:
                        label += "7DPMCAC 377F - ";
                        break;
                    case 377:
                        label += "7DPMCAC 377F - ";
                        break;
                    case 377:
                        label += "7DPMCAC 377F - ";
                        break;
                    case 377:
                        label += "7DPMCAC 377F - ";
                        break;
                    case 377:
                        label += "7DPMCAC 377F - ";
                        break;
                    case 377:
                        label += "7DPMCAC 377F - ";
                        break;
                    case 377:
                        label += "7DPMCAC 377F - ";
                        break;
                    case 376:
                        label += "7DPMCAC 376T - ";
                        break;
                    case 376:
                        label += "7DPMCAC 376T - ";
                        break;
                    case 376:
                        label += "7DPMCAC 376T - ";
                        break;
                    case 376:
                        label += "7DPMCAC 376T - ";
                        break;
                    case 378:
                        label += "7DPMCAC 378K - ";
                        break;
                    case 407:
                        label += "7DPMCAC 407V - ";
                        break;
                    case 408:
                        label += "7DPMCAC 408R - ";
                        break;
                    case 408:
                        label += "7DPMCAC 408R - ";
                        break;
                    case 375:
                        label += "7DPMCAC 375S - ";
                        break;
                    case 503:
                        label += "7DPMCAC 503V - ";
                        break;
                    case 503:
                        label += "7DPMCAC 503V - ";
                        break;
                    case 503:
                        label += "7DPMCAC 503V - ";
                        break;
                    case 369:
                        label += "7DPMCAC 369Y - ";
                        break;
                    case 374:
                        label += "7DPMCAC 374F - ";
                        break;
                    case 375:
                        label += "7DPMCAC 375S - ";
                        break;
                    case 375:
                        label += "7DPMCAC 375S - ";
                        break;
                    case 508:
                        label += "7DPMCAC 508Y - ";
                        break;
                    case 508:
                        label += "7DPMCAC 508Y - ";
                        break;
                    case 373:
                        label += "7DPMCBC 373S - ";
                        break;
                    case 374:
                        label += "7DPMCBC 374F - ";
                        break;
                    case 375:
                        label += "7DPMCBC 375S - ";
                        break;
                    case 503:
                        label += "7DPMCBC 503V - ";
                        break;
                    case 506:
                        label += "7DPMCBC 506Q - ";
                        break;
                    case 503:
                        label += "7DPMCBC 503V - ";
                        break;
                    case 372:
                        label += "7DPMCBC 372A - ";
                        break;
                    case 369:
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 378:
                        label += "7DPMFDF 378K - ";
                        break;
                    case 378:
                        label += "7DPMFDF 378K - ";
                        break;
                    case 378:
                        label += "7DPMFDF 378K - ";
                        break;
                    case 379:
                        label += "7DPMFDF 379C - ";
                        break;
                    case 369:
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 369:
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 369:
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 369:
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 369:
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 369:
                        label += "7DPMFDF 369Y - ";
                        break;
                    case 377:
                        label += "7DPMFDF 377F - ";
                        break;
                    case 377:
                        label += "7DPMFDF 377F - ";
                        break;
                    case 377:
                        label += "7DPMFDF 377F - ";
                        break;
                    case 377:
                        label += "7DPMFDF 377F - ";
                        break;
                    case 377:
                        label += "7DPMFDF 377F - ";
                        break;
                    case 377:
                        label += "7DPMFDF 377F - ";
                        break;
                    case 376:
                        label += "7DPMFDF 376T - ";
                        break;
                    case 376:
                        label += "7DPMFDF 376T - ";
                        break;
                    case 376:
                        label += "7DPMFDF 376T - ";
                        break;
                    case 378:
                        label += "7DPMFDF 378K - ";
                        break;
                    case 408:
                        label += "7DPMFDF 408R - ";
                        break;
                    case 408:
                        label += "7DPMFDF 408R - ";
                        break;
                    case 375:
                        label += "7DPMFDF 375S - ";
                        break;
                    case 503:
                        label += "7DPMFDF 503V - ";
                        break;
                    case 503:
                        label += "7DPMFDF 503V - ";
                        break;
                    case 374:
                        label += "7DPMFDF 374F - ";
                        break;
                    case 374:
                        label += "7DPMFDF 374F - ";
                        break;
                    case 375:
                        label += "7DPMFDF 375S - ";
                        break;
                    case 375:
                        label += "7DPMFDF 375S - ";
                        break;
                    case 508:
                        label += "7DPMFDF 508Y - ";
                        break;
                    case 508:
                        label += "7DPMFDF 508Y - ";
                        break;
                    case 483:
                        label += "7DPMFGF 483V - ";
                        break;
                    case 373:
                        label += "7DPMFEF 373S - ";
                        break;
                    case 374:
                        label += "7DPMFEF 374F - ";
                        break;
                    case 374:
                        label += "7DPMFEF 374F - ";
                        break;
                    case 375:
                        label += "7DPMFEF 375S - ";
                        break;
                    case 503:
                        label += "7DPMFEF 503V - ";
                        break;
                    case 506:
                        label += "7DPMFEF 506Q - ";
                        break;
                    case 503:
                        label += "7DPMFEF 503V - ";
                        break;
                    case 372:
                        label += "7DPMFEF 372A - ";
                        break;
                    case 353:
                        label += "7DPMFHF 353W - ";
                        break;
                    case 354:
                        label += "7DPMFHF 354N - ";
                        break;
                    case 355:
                        label += "7DPMFHF 355R - ";
                        break;
                    case 355:
                        label += "7DPMFHF 355R - ";
                        break;
                    case 355:
                        label += "7DPMFHF 355R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 357:
                        label += "7DPMFHF 357R - ";
                        break;
                    case 396:
                        label += "7DPMFHF 396Y - ";
                        break;
                    case 396:
                        label += "7DPMFHF 396Y - ";
                        break;
                    case 462:
                        label += "7DPMFHF 462K - ";
                        break;
                    case 462:
                        label += "7DPMFHF 462K - ";
                        break;
                    case 462:
                        label += "7DPMFHF 462K - ";
                        break;
                    case 462:
                        label += "7DPMFHF 462K - ";
                        break;
                    case 464:
                        label += "7DPMFHF 464F - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 465:
                        label += "7DPMFHF 465E - ";
                        break;
                    case 466:
                        label += "7DPMFHF 466R - ";
                        break;
                    case 466:
                        label += "7DPMFHF 466R - ";
                        break;
                    case 466:
                        label += "7DPMFHF 466R - ";
                        break;
                    case 466:
                        label += "7DPMFHF 466R - ";
                        break;
                    case 466:
                        label += "7DPMFHF 466R - ";
                        break;
                    case 466:
                        label += "7DPMFHF 466R - ";
                        break;
                    case 467:
                        label += "7DPMFHF 467D - ";
                        break;
                    case 467:
                        label += "7DPMFHF 467D - ";
                        break;
                    case 468:
                        label += "7DPMFHF 468I - ";
                        break;
                    case 468:
                        label += "7DPMFHF 468I - ";
                        break;
                    case 468:
                        label += "7DPMFHF 468I - ";
                        break;
                    case 477:
                        label += "7DPMFHF 477S - ";
                        break;
                    case 516:
                        label += "7DPMFHF 516E - ";
                        break;
                    case 369:
                        label += "7DPMIGI 369Y - ";
                        break;
                    case 378:
                        label += "7DPMIGI 378K - ";
                        break;
                    case 379:
                        label += "7DPMIGI 379C - ";
                        break;
                    case 369:
                        label += "7DPMIGI 369Y - ";
                        break;
                    case 369:
                        label += "7DPMIGI 369Y - ";
                        break;
                    case 369:
                        label += "7DPMIGI 369Y - ";
                        break;
                    case 369:
                        label += "7DPMIGI 369Y - ";
                        break;
                    case 369:
                        label += "7DPMIGI 369Y - ";
                        break;
                    case 377:
                        label += "7DPMIGI 377F - ";
                        break;
                    case 377:
                        label += "7DPMIGI 377F - ";
                        break;
                    case 377:
                        label += "7DPMIGI 377F - ";
                        break;
                    case 377:
                        label += "7DPMIGI 377F - ";
                        break;
                    case 377:
                        label += "7DPMIGI 377F - ";
                        break;
                    case 377:
                        label += "7DPMIGI 377F - ";
                        break;
                    case 376:
                        label += "7DPMIGI 376T - ";
                        break;
                    case 376:
                        label += "7DPMIGI 376T - ";
                        break;
                    case 376:
                        label += "7DPMIGI 376T - ";
                        break;
                    case 376:
                        label += "7DPMIGI 376T - ";
                        break;
                    case 408:
                        label += "7DPMIGI 408R - ";
                        break;
                    case 375:
                        label += "7DPMIGI 375S - ";
                        break;
                    case 503:
                        label += "7DPMIGI 503V - ";
                        break;
                    case 503:
                        label += "7DPMIGI 503V - ";
                        break;
                    case 372:
                        label += "7DPMIGI 372A - ";
                        break;
                    case 375:
                        label += "7DPMIGI 375S - ";
                        break;
                    case 375:
                        label += "7DPMIGI 375S - ";
                        break;
                    case 375:
                        label += "7DPMIGI 375S - ";
                        break;
                    case 508:
                        label += "7DPMIGI 508Y - ";
                        break;
                    case 508:
                        label += "7DPMIGI 508Y - ";
                        break;
                    case 373:
                        label += "7DPMIHI 373S - ";
                        break;
                    case 374:
                        label += "7DPMIHI 374F - ";
                        break;
                    case 375:
                        label += "7DPMIHI 375S - ";
                        break;
                    case 503:
                        label += "7DPMIHI 503V - ";
                        break;
                    case 506:
                        label += "7DPMIHI 506Q - ";
                        break;
                    case 503:
                        label += "7DPMIHI 503V - ";
                        break;
                    case 372:
                        label += "7DPMIHI 372A - ";
                        break;
                    case 378:
                        label += "7DPMLJL 378K - ";
                        break;
                    case 378:
                        label += "7DPMLJL 378K - ";
                        break;
                    case 378:
                        label += "7DPMLJL 378K - ";
                        break;
                    case 369:
                        label += "7DPMLJL 369Y - ";
                        break;
                    case 378:
                        label += "7DPMLJL 378K - ";
                        break;
                    case 379:
                        label += "7DPMLJL 379C - ";
                        break;
                    case 369:
                        label += "7DPMLJL 369Y - ";
                        break;
                    case 369:
                        label += "7DPMLJL 369Y - ";
                        break;
                    case 369:
                        label += "7DPMLJL 369Y - ";
                        break;
                    case 369:
                        label += "7DPMLJL 369Y - ";
                        break;
                    case 369:
                        label += "7DPMLJL 369Y - ";
                        break;
                    case 377:
                        label += "7DPMLJL 377F - ";
                        break;
                    case 377:
                        label += "7DPMLJL 377F - ";
                        break;
                    case 377:
                        label += "7DPMLJL 377F - ";
                        break;
                    case 377:
                        label += "7DPMLJL 377F - ";
                        break;
                    case 377:
                        label += "7DPMLJL 377F - ";
                        break;
                    case 377:
                        label += "7DPMLJL 377F - ";
                        break;
                    case 376:
                        label += "7DPMLJL 376T - ";
                        break;
                    case 376:
                        label += "7DPMLJL 376T - ";
                        break;
                    case 376:
                        label += "7DPMLJL 376T - ";
                        break;
                    case 376:
                        label += "7DPMLJL 376T - ";
                        break;
                    case 378:
                        label += "7DPMLJL 378K - ";
                        break;
                    case 407:
                        label += "7DPMLJL 407V - ";
                        break;
                    case 407:
                        label += "7DPMLJL 407V - ";
                        break;
                    case 407:
                        label += "7DPMLJL 407V - ";
                        break;
                    case 375:
                        label += "7DPMLJL 375S - ";
                        break;
                    case 503:
                        label += "7DPMLJL 503V - ";
                        break;
                    case 503:
                        label += "7DPMLJL 503V - ";
                        break;
                    case 372:
                        label += "7DPMLJL 372A - ";
                        break;
                    case 374:
                        label += "7DPMLJL 374F - ";
                        break;
                    case 374:
                        label += "7DPMLJL 374F - ";
                        break;
                    case 375:
                        label += "7DPMLJL 375S - ";
                        break;
                    case 375:
                        label += "7DPMLJL 375S - ";
                        break;
                    case 508:
                        label += "7DPMLJL 508Y - ";
                        break;
                    case 508:
                        label += "7DPMLJL 508Y - ";
                        break;
                    case 373:
                        label += "7DPMLKL 373S - ";
                        break;
                    case 374:
                        label += "7DPMLKL 374F - ";
                        break;
                    case 374:
                        label += "7DPMLKL 374F - ";
                        break;
                    case 375:
                        label += "7DPMLKL 375S - ";
                        break;
                    case 503:
                        label += "7DPMLKL 503V - ";
                        break;
                    case 503:
                        label += "7DPMLKL 503V - ";
                        break;
                    case 503:
                        label += "7DPMLKL 503V - ";
                        break;
                    case 506:
                        label += "7DPMLKL 506Q - ";
                        break;
                    case 503:
                        label += "7DPMLKL 503V - ";
                        break;
                    case 372:
                        label += "7DPMLKL 372A - ";
                        break;}
                switch (labely){
                    case 101:
                        label += "A 101Y\n";
                        break;
                    case 101:
                        label += "A 101Y\n";
                        break;
                    case 102:
                        label += "A 102Y\n";
                        break;
                    case 103:
                        label += "A 103D\n";
                        break;
                    case 105:
                        label += "A 105S\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 107:
                        label += "A 107Y\n";
                        break;
                    case 108:
                        label += "A 108Y\n";
                        break;
                    case 108:
                        label += "A 108Y\n";
                        break;
                    case 108:
                        label += "A 108Y\n";
                        break;
                    case 108:
                        label += "A 108Y\n";
                        break;
                    case 108:
                        label += "A 108Y\n";
                        break;
                    case 108:
                        label += "A 108Y\n";
                        break;
                    case 108:
                        label += "A 108Y\n";
                        break;
                    case 108:
                        label += "A 108Y\n";
                        break;
                    case 109:
                        label += "A 109F\n";
                        break;
                    case 109:
                        label += "A 109F\n";
                        break;
                    case 109:
                        label += "A 109F\n";
                        break;
                    case 109:
                        label += "A 109F\n";
                        break;
                    case 110:
                        label += "A 110R\n";
                        break;
                    case 110:
                        label += "A 110R\n";
                        break;
                    case 110:
                        label += "A 110R\n";
                        break;
                    case 111:
                        label += "A 111E\n";
                        break;
                    case 111:
                        label += "A 111E\n";
                        break;
                    case 111:
                        label += "A 111E\n";
                        break;
                    case 32:
                        label += "B 32Y\n";
                        break;
                    case 32:
                        label += "B 32Y\n";
                        break;
                    case 32:
                        label += "B 32Y\n";
                        break;
                    case 50:
                        label += "B 50A\n";
                        break;
                    case 52:
                        label += "B 52S\n";
                        break;
                    case 53:
                        label += "B 53S\n";
                        break;
                    case 92:
                        label += "B 92N\n";
                        break;
                    case 102:
                        label += "D 102Y\n";
                        break;
                    case 103:
                        label += "D 103D\n";
                        break;
                    case 103:
                        label += "D 103D\n";
                        break;
                    case 105:
                        label += "D 105S\n";
                        break;
                    case 105:
                        label += "D 105S\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 107:
                        label += "D 107Y\n";
                        break;
                    case 108:
                        label += "D 108Y\n";
                        break;
                    case 108:
                        label += "D 108Y\n";
                        break;
                    case 108:
                        label += "D 108Y\n";
                        break;
                    case 108:
                        label += "D 108Y\n";
                        break;
                    case 108:
                        label += "D 108Y\n";
                        break;
                    case 108:
                        label += "D 108Y\n";
                        break;
                    case 109:
                        label += "D 109F\n";
                        break;
                    case 109:
                        label += "D 109F\n";
                        break;
                    case 109:
                        label += "D 109F\n";
                        break;
                    case 110:
                        label += "D 110R\n";
                        break;
                    case 110:
                        label += "D 110R\n";
                        break;
                    case 110:
                        label += "D 110R\n";
                        break;
                    case 111:
                        label += "D 111E\n";
                        break;
                    case 111:
                        label += "D 111E\n";
                        break;
                    case 111:
                        label += "D 111E\n";
                        break;
                    case 89:
                        label += "G 89E\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 32:
                        label += "E 32Y\n";
                        break;
                    case 50:
                        label += "E 50A\n";
                        break;
                    case 52:
                        label += "E 52S\n";
                        break;
                    case 53:
                        label += "E 53S\n";
                        break;
                    case 92:
                        label += "E 92N\n";
                        break;
                    case 153:
                        label += "H 153A\n";
                        break;
                    case 188:
                        label += "H 188K\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 189:
                        label += "H 189H\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 190:
                        label += "H 190K\n";
                        break;
                    case 190:
                        label += "H 190K\n";
                        break;
                    case 190:
                        label += "H 190K\n";
                        break;
                    case 190:
                        label += "H 190K\n";
                        break;
                    case 151:
                        label += "H 151D\n";
                        break;
                    case 152:
                        label += "H 152N\n";
                        break;
                    case 145:
                        label += "H 145K\n";
                        break;
                    case 147:
                        label += "H 147Q\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 156:
                        label += "H 156S\n";
                        break;
                    case 154:
                        label += "H 154L\n";
                        break;
                    case 155:
                        label += "H 155Q\n";
                        break;
                    case 156:
                        label += "H 156S\n";
                        break;
                    case 185:
                        label += "H 185D\n";
                        break;
                    case 185:
                        label += "H 185D\n";
                        break;
                    case 185:
                        label += "H 185D\n";
                        break;
                    case 156:
                        label += "H 156S\n";
                        break;
                    case 156:
                        label += "H 156S\n";
                        break;
                    case 156:
                        label += "H 156S\n";
                        break;
                    case 158:
                        label += "H 158N\n";
                        break;
                    case 158:
                        label += "H 158N\n";
                        break;
                    case 3:
                        label += "H 3Q\n";
                        break;
                    case 152:
                        label += "H 152N\n";
                        break;
                    case 102:
                        label += "G 102Y\n";
                        break;
                    case 103:
                        label += "G 103D\n";
                        break;
                    case 105:
                        label += "G 105S\n";
                        break;
                    case 107:
                        label += "G 107Y\n";
                        break;
                    case 107:
                        label += "G 107Y\n";
                        break;
                    case 107:
                        label += "G 107Y\n";
                        break;
                    case 107:
                        label += "G 107Y\n";
                        break;
                    case 107:
                        label += "G 107Y\n";
                        break;
                    case 107:
                        label += "G 107Y\n";
                        break;
                    case 107:
                        label += "G 107Y\n";
                        break;
                    case 107:
                        label += "G 107Y\n";
                        break;
                    case 107:
                        label += "G 107Y\n";
                        break;
                    case 107:
                        label += "G 107Y\n";
                        break;
                    case 107:
                        label += "G 107Y\n";
                        break;
                    case 108:
                        label += "G 108Y\n";
                        break;
                    case 108:
                        label += "G 108Y\n";
                        break;
                    case 108:
                        label += "G 108Y\n";
                        break;
                    case 108:
                        label += "G 108Y\n";
                        break;
                    case 108:
                        label += "G 108Y\n";
                        break;
                    case 109:
                        label += "G 109F\n";
                        break;
                    case 109:
                        label += "G 109F\n";
                        break;
                    case 109:
                        label += "G 109F\n";
                        break;
                    case 110:
                        label += "G 110R\n";
                        break;
                    case 110:
                        label += "G 110R\n";
                        break;
                    case 111:
                        label += "G 111E\n";
                        break;
                    case 111:
                        label += "G 111E\n";
                        break;
                    case 111:
                        label += "G 111E\n";
                        break;
                    case 111:
                        label += "G 111E\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 32:
                        label += "H 32Y\n";
                        break;
                    case 50:
                        label += "H 50A\n";
                        break;
                    case 52:
                        label += "H 52S\n";
                        break;
                    case 53:
                        label += "H 53S\n";
                        break;
                    case 92:
                        label += "H 92N\n";
                        break;
                    case 101:
                        label += "J 101Y\n";
                        break;
                    case 101:
                        label += "J 101Y\n";
                        break;
                    case 101:
                        label += "J 101Y\n";
                        break;
                    case 102:
                        label += "J 102Y\n";
                        break;
                    case 103:
                        label += "J 103D\n";
                        break;
                    case 105:
                        label += "J 105S\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 107:
                        label += "J 107Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
                        break;
                    case 108:
                        label += "J 108Y\n";
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
                    case 110:
                        label += "J 110R\n";
                        break;
                    case 110:
                        label += "J 110R\n";
                        break;
                    case 110:
                        label += "J 110R\n";
                        break;
                    case 110:
                        label += "J 110R\n";
                        break;
                    case 111:
                        label += "J 111E\n";
                        break;
                    case 111:
                        label += "J 111E\n";
                        break;
                    case 111:
                        label += "J 111E\n";
                        break;
                    case 32:
                        label += "K 32Y\n";
                        break;
                    case 32:
                        label += "K 32Y\n";
                        break;
                    case 32:
                        label += "K 32Y\n";
                        break;
                    case 32:
                        label += "K 32Y\n";
                        break;
                    case 49:
                        label += "K 49Y\n";
                        break;
                    case 49:
                        label += "K 49Y\n";
                        break;
                    case 50:
                        label += "K 50A\n";
                        break;
                    case 52:
                        label += "K 52S\n";
                        break;
                    case 53:
                        label += "K 53S\n";
                        break;
                    case 92:
                        label += "K 92N\n";
                        break;  
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});