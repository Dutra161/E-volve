
var myChart6ZDG = 0;
var ctx = document.getElementById('6ZDG').getContext('2d');
if (window.myChart6ZDG != 0){
    window.myChart6ZDG.destroy();
}
window.myChart6ZDG = new Chart(ctx, {
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
            data: [{x: 378, y: 62},
                {x: 386, y: 99},
                {x: 378, y: 1},
                {x: 378, y: 62},
                {x: 386, y: 99},
                {x: 357, y: 152},
                {x: 357, y: 152},
                {x: 378, y: 1},
                {x: 378, y: 1},
                {x: 378, y: 62},
                {x: 386, y: 99},
                {x: 378, y: 1},
                {x: 378, y: 1},
                ],
            backgroundColor: ['rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)','rgba(240, 98, 145, 0.5)',],
            borderColor: ['rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)','rgba(240, 98, 145, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Repulsive',
            data: [{x: 462, y: 146},
                {x: 466, y: 190},
                {x: 466, y: 190},
                {x: 466, y: 190},
                {x: 462, y: 146},
                {x: 466, y: 190},
                {x: 466, y: 190},
                {x: 357, y: 191},
                {x: 462, y: 146},
                {x: 466, y: 190},
                {x: 466, y: 190},
                {x: 466, y: 190},
                {x: 466, y: 190},
                ],
            backgroundColor: ['rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)','rgba(0, 224, 255, 0.5)',],
            borderColor: ['rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)','rgba(0, 224, 255, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrogen Bonds',
            data: [{x: 369, y: 57},
                {x: 375, y: 65},
                {x: 383, y: 104},
                {x: 383, y: 104},
                {x: 385, y: 33},
                {x: 385, y: 57},
                {x: 385, y: 106},
                {x: 386, y: 101},
                {x: 386, y: 103},
                {x: 381, y: 92},
                {x: 383, y: 94},
                {x: 429, y: 92},
                {x: 429, y: 92},
                {x: 396, y: 153},
                {x: 516, y: 153},
                {x: 464, y: 155},
                {x: 466, y: 155},
                {x: 465, y: 157},
                {x: 466, y: 157},
                {x: 369, y: 57},
                {x: 375, y: 65},
                {x: 383, y: 104},
                {x: 383, y: 104},
                {x: 383, y: 106},
                {x: 385, y: 33},
                {x: 385, y: 106},
                {x: 386, y: 101},
                {x: 386, y: 103},
                {x: 516, y: 153},
                {x: 464, y: 155},
                {x: 466, y: 155},
                {x: 465, y: 157},
                {x: 466, y: 157},
                {x: 354, y: 189},
                {x: 381, y: 32},
                {x: 381, y: 92},
                {x: 383, y: 94},
                {x: 383, y: 94},
                {x: 413, y: 27},
                {x: 429, y: 92},
                {x: 429, y: 92},
                {x: 369, y: 57},
                {x: 375, y: 65},
                {x: 383, y: 104},
                {x: 383, y: 104},
                {x: 383, y: 106},
                {x: 385, y: 33},
                {x: 385, y: 106},
                {x: 386, y: 101},
                {x: 386, y: 103},
                {x: 355, y: 152},
                {x: 355, y: 153},
                {x: 396, y: 153},
                {x: 464, y: 155},
                {x: 466, y: 155},
                {x: 466, y: 157},
                {x: 466, y: 190},
                {x: 516, y: 153},
                {x: 381, y: 32},
                {x: 381, y: 92},
                {x: 383, y: 94},
                {x: 413, y: 27},
                {x: 429, y: 92},
                {x: 429, y: 92},
                ],
            backgroundColor: ['rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)','rgba(109, 78, 217, 0.5)',],
            borderColor: ['rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)','rgba(109, 78, 217, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Aromatic Stacking',
            data: [{x: 377, y: 59},
                {x: 377, y: 59},
                {x: 380, y: 92},
                {x: 377, y: 59},
                {x: 380, y: 92},
                ],
            backgroundColor: ['rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)',],
            borderColor: ['rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)',],
            borderWidth: 1
        },{
            pointStyle:'rect',
            label: 'Hydrophobic',
            data: [{x: 377, y: 59},
                {x: 377, y: 59},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
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
                {x: 392, y: 104},
                {x: 517, y: 104},
                {x: 481, y: 89},
                {x: 379, y: 95},
                {x: 380, y: 92},
                {x: 384, y: 95},
                {x: 384, y: 95},
                {x: 396, y: 153},
                {x: 353, y: 154},
                {x: 353, y: 154},
                {x: 481, y: 89},
                {x: 377, y: 59},
                {x: 377, y: 59},
                {x: 377, y: 59},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
                {x: 384, y: 59},
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
                {x: 517, y: 104},
                {x: 353, y: 154},
                {x: 377, y: 95},
                {x: 377, y: 95},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 380, y: 92},
                {x: 384, y: 95},
                {x: 384, y: 95},
                {x: 412, y: 92},
                {x: 481, y: 89},
                {x: 377, y: 59},
                {x: 377, y: 59},
                {x: 377, y: 59},
                {x: 377, y: 59},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 382, y: 104},
                {x: 384, y: 59},
                {x: 384, y: 59},
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
                {x: 517, y: 104},
                {x: 353, y: 154},
                {x: 353, y: 154},
                {x: 353, y: 154},
                {x: 396, y: 153},
                {x: 464, y: 155},
                {x: 465, y: 155},
                {x: 465, y: 155},
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
                {x: 412, y: 92},
                ],
            backgroundColor: ['rgba(217, 148, 76, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(123, 250, 121, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)','rgba(217, 148, 76, 0.5)',],
            borderColor: ['rgba(217, 148, 76, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(123, 250, 121, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)','rgba(217, 148, 76, 1)',],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true,
        title: {
            display: true,
            position: 'top',
            text:["6ZDG Superpose"],
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
                    case 369:
                        label += "6ZDGABA 369Y - ";
                        break;
                    case 375:
                        label += "6ZDGABA 375S - ";
                        break;
                    case 377:
                        label += "6ZDGABA 377F - ";
                        break;
                    case 377:
                        label += "6ZDGABA 377F - ";
                        break;
                    case 377:
                        label += "6ZDGABA 377F - ";
                        break;
                    case 378:
                        label += "6ZDGABA 378K - ";
                        break;
                    case 382:
                        label += "6ZDGABA 382V - ";
                        break;
                    case 382:
                        label += "6ZDGABA 382V - ";
                        break;
                    case 383:
                        label += "6ZDGABA 383S - ";
                        break;
                    case 383:
                        label += "6ZDGABA 383S - ";
                        break;
                    case 384:
                        label += "6ZDGABA 384P - ";
                        break;
                    case 384:
                        label += "6ZDGABA 384P - ";
                        break;
                    case 384:
                        label += "6ZDGABA 384P - ";
                        break;
                    case 384:
                        label += "6ZDGABA 384P - ";
                        break;
                    case 385:
                        label += "6ZDGABA 385T - ";
                        break;
                    case 385:
                        label += "6ZDGABA 385T - ";
                        break;
                    case 385:
                        label += "6ZDGABA 385T - ";
                        break;
                    case 385:
                        label += "6ZDGABA 385T - ";
                        break;
                    case 385:
                        label += "6ZDGABA 385T - ";
                        break;
                    case 385:
                        label += "6ZDGABA 385T - ";
                        break;
                    case 386:
                        label += "6ZDGABA 386K - ";
                        break;
                    case 386:
                        label += "6ZDGABA 386K - ";
                        break;
                    case 386:
                        label += "6ZDGABA 386K - ";
                        break;
                    case 390:
                        label += "6ZDGABA 390L - ";
                        break;
                    case 390:
                        label += "6ZDGABA 390L - ";
                        break;
                    case 390:
                        label += "6ZDGABA 390L - ";
                        break;
                    case 390:
                        label += "6ZDGABA 390L - ";
                        break;
                    case 390:
                        label += "6ZDGABA 390L - ";
                        break;
                    case 390:
                        label += "6ZDGABA 390L - ";
                        break;
                    case 392:
                        label += "6ZDGABA 392F - ";
                        break;
                    case 517:
                        label += "6ZDGABA 517L - ";
                        break;
                    case 481:
                        label += "6ZDGAHA 481N - ";
                        break;
                    case 378:
                        label += "6ZDGACA 378K - ";
                        break;
                    case 379:
                        label += "6ZDGACA 379C - ";
                        break;
                    case 380:
                        label += "6ZDGACA 380Y - ";
                        break;
                    case 381:
                        label += "6ZDGACA 381G - ";
                        break;
                    case 383:
                        label += "6ZDGACA 383S - ";
                        break;
                    case 384:
                        label += "6ZDGACA 384P - ";
                        break;
                    case 384:
                        label += "6ZDGACA 384P - ";
                        break;
                    case 429:
                        label += "6ZDGACA 429F - ";
                        break;
                    case 429:
                        label += "6ZDGACA 429F - ";
                        break;
                    case 462:
                        label += "6ZDGALA 462K - ";
                        break;
                    case 396:
                        label += "6ZDGALA 396Y - ";
                        break;
                    case 396:
                        label += "6ZDGALA 396Y - ";
                        break;
                    case 516:
                        label += "6ZDGALA 516E - ";
                        break;
                    case 353:
                        label += "6ZDGALA 353W - ";
                        break;
                    case 353:
                        label += "6ZDGALA 353W - ";
                        break;
                    case 464:
                        label += "6ZDGALA 464F - ";
                        break;
                    case 466:
                        label += "6ZDGALA 466R - ";
                        break;
                    case 465:
                        label += "6ZDGALA 465E - ";
                        break;
                    case 466:
                        label += "6ZDGALA 466R - ";
                        break;
                    case 466:
                        label += "6ZDGALA 466R - ";
                        break;
                    case 466:
                        label += "6ZDGALA 466R - ";
                        break;
                    case 466:
                        label += "6ZDGALA 466R - ";
                        break;
                    case 481:
                        label += "6ZDGDBD 481N - ";
                        break;
                    case 369:
                        label += "6ZDGDFD 369Y - ";
                        break;
                    case 375:
                        label += "6ZDGDFD 375S - ";
                        break;
                    case 377:
                        label += "6ZDGDFD 377F - ";
                        break;
                    case 377:
                        label += "6ZDGDFD 377F - ";
                        break;
                    case 377:
                        label += "6ZDGDFD 377F - ";
                        break;
                    case 377:
                        label += "6ZDGDFD 377F - ";
                        break;
                    case 378:
                        label += "6ZDGDFD 378K - ";
                        break;
                    case 382:
                        label += "6ZDGDFD 382V - ";
                        break;
                    case 382:
                        label += "6ZDGDFD 382V - ";
                        break;
                    case 382:
                        label += "6ZDGDFD 382V - ";
                        break;
                    case 382:
                        label += "6ZDGDFD 382V - ";
                        break;
                    case 383:
                        label += "6ZDGDFD 383S - ";
                        break;
                    case 383:
                        label += "6ZDGDFD 383S - ";
                        break;
                    case 383:
                        label += "6ZDGDFD 383S - ";
                        break;
                    case 384:
                        label += "6ZDGDFD 384P - ";
                        break;
                    case 384:
                        label += "6ZDGDFD 384P - ";
                        break;
                    case 384:
                        label += "6ZDGDFD 384P - ";
                        break;
                    case 384:
                        label += "6ZDGDFD 384P - ";
                        break;
                    case 385:
                        label += "6ZDGDFD 385T - ";
                        break;
                    case 385:
                        label += "6ZDGDFD 385T - ";
                        break;
                    case 385:
                        label += "6ZDGDFD 385T - ";
                        break;
                    case 385:
                        label += "6ZDGDFD 385T - ";
                        break;
                    case 385:
                        label += "6ZDGDFD 385T - ";
                        break;
                    case 386:
                        label += "6ZDGDFD 386K - ";
                        break;
                    case 386:
                        label += "6ZDGDFD 386K - ";
                        break;
                    case 386:
                        label += "6ZDGDFD 386K - ";
                        break;
                    case 390:
                        label += "6ZDGDFD 390L - ";
                        break;
                    case 390:
                        label += "6ZDGDFD 390L - ";
                        break;
                    case 390:
                        label += "6ZDGDFD 390L - ";
                        break;
                    case 390:
                        label += "6ZDGDFD 390L - ";
                        break;
                    case 390:
                        label += "6ZDGDFD 390L - ";
                        break;
                    case 392:
                        label += "6ZDGDFD 392F - ";
                        break;
                    case 392:
                        label += "6ZDGDFD 392F - ";
                        break;
                    case 517:
                        label += "6ZDGDFD 517L - ";
                        break;
                    case 462:
                        label += "6ZDGDCD 462K - ";
                        break;
                    case 357:
                        label += "6ZDGDCD 357R - ";
                        break;
                    case 357:
                        label += "6ZDGDCD 357R - ";
                        break;
                    case 516:
                        label += "6ZDGDCD 516E - ";
                        break;
                    case 353:
                        label += "6ZDGDCD 353W - ";
                        break;
                    case 464:
                        label += "6ZDGDCD 464F - ";
                        break;
                    case 466:
                        label += "6ZDGDCD 466R - ";
                        break;
                    case 465:
                        label += "6ZDGDCD 465E - ";
                        break;
                    case 466:
                        label += "6ZDGDCD 466R - ";
                        break;
                    case 354:
                        label += "6ZDGDCD 354N - ";
                        break;
                    case 466:
                        label += "6ZDGDCD 466R - ";
                        break;
                    case 466:
                        label += "6ZDGDCD 466R - ";
                        break;
                    case 357:
                        label += "6ZDGDCD 357R - ";
                        break;
                    case 377:
                        label += "6ZDGDGD 377F - ";
                        break;
                    case 377:
                        label += "6ZDGDGD 377F - ";
                        break;
                    case 378:
                        label += "6ZDGDGD 378K - ";
                        break;
                    case 378:
                        label += "6ZDGDGD 378K - ";
                        break;
                    case 380:
                        label += "6ZDGDGD 380Y - ";
                        break;
                    case 380:
                        label += "6ZDGDGD 380Y - ";
                        break;
                    case 380:
                        label += "6ZDGDGD 380Y - ";
                        break;
                    case 380:
                        label += "6ZDGDGD 380Y - ";
                        break;
                    case 380:
                        label += "6ZDGDGD 380Y - ";
                        break;
                    case 380:
                        label += "6ZDGDGD 380Y - ";
                        break;
                    case 380:
                        label += "6ZDGDGD 380Y - ";
                        break;
                    case 380:
                        label += "6ZDGDGD 380Y - ";
                        break;
                    case 381:
                        label += "6ZDGDGD 381G - ";
                        break;
                    case 381:
                        label += "6ZDGDGD 381G - ";
                        break;
                    case 383:
                        label += "6ZDGDGD 383S - ";
                        break;
                    case 383:
                        label += "6ZDGDGD 383S - ";
                        break;
                    case 384:
                        label += "6ZDGDGD 384P - ";
                        break;
                    case 384:
                        label += "6ZDGDGD 384P - ";
                        break;
                    case 412:
                        label += "6ZDGDGD 412P - ";
                        break;
                    case 413:
                        label += "6ZDGDGD 413G - ";
                        break;
                    case 429:
                        label += "6ZDGDGD 429F - ";
                        break;
                    case 429:
                        label += "6ZDGDGD 429F - ";
                        break;
                    case 481:
                        label += "6ZDGEFE 481N - ";
                        break;
                    case 369:
                        label += "6ZDGEHE 369Y - ";
                        break;
                    case 375:
                        label += "6ZDGEHE 375S - ";
                        break;
                    case 377:
                        label += "6ZDGEHE 377F - ";
                        break;
                    case 377:
                        label += "6ZDGEHE 377F - ";
                        break;
                    case 377:
                        label += "6ZDGEHE 377F - ";
                        break;
                    case 377:
                        label += "6ZDGEHE 377F - ";
                        break;
                    case 377:
                        label += "6ZDGEHE 377F - ";
                        break;
                    case 378:
                        label += "6ZDGEHE 378K - ";
                        break;
                    case 382:
                        label += "6ZDGEHE 382V - ";
                        break;
                    case 382:
                        label += "6ZDGEHE 382V - ";
                        break;
                    case 382:
                        label += "6ZDGEHE 382V - ";
                        break;
                    case 382:
                        label += "6ZDGEHE 382V - ";
                        break;
                    case 382:
                        label += "6ZDGEHE 382V - ";
                        break;
                    case 383:
                        label += "6ZDGEHE 383S - ";
                        break;
                    case 383:
                        label += "6ZDGEHE 383S - ";
                        break;
                    case 383:
                        label += "6ZDGEHE 383S - ";
                        break;
                    case 384:
                        label += "6ZDGEHE 384P - ";
                        break;
                    case 384:
                        label += "6ZDGEHE 384P - ";
                        break;
                    case 384:
                        label += "6ZDGEHE 384P - ";
                        break;
                    case 385:
                        label += "6ZDGEHE 385T - ";
                        break;
                    case 385:
                        label += "6ZDGEHE 385T - ";
                        break;
                    case 385:
                        label += "6ZDGEHE 385T - ";
                        break;
                    case 385:
                        label += "6ZDGEHE 385T - ";
                        break;
                    case 385:
                        label += "6ZDGEHE 385T - ";
                        break;
                    case 386:
                        label += "6ZDGEHE 386K - ";
                        break;
                    case 386:
                        label += "6ZDGEHE 386K - ";
                        break;
                    case 386:
                        label += "6ZDGEHE 386K - ";
                        break;
                    case 390:
                        label += "6ZDGEHE 390L - ";
                        break;
                    case 390:
                        label += "6ZDGEHE 390L - ";
                        break;
                    case 390:
                        label += "6ZDGEHE 390L - ";
                        break;
                    case 390:
                        label += "6ZDGEHE 390L - ";
                        break;
                    case 390:
                        label += "6ZDGEHE 390L - ";
                        break;
                    case 390:
                        label += "6ZDGEHE 390L - ";
                        break;
                    case 390:
                        label += "6ZDGEHE 390L - ";
                        break;
                    case 392:
                        label += "6ZDGEHE 392F - ";
                        break;
                    case 392:
                        label += "6ZDGEHE 392F - ";
                        break;
                    case 392:
                        label += "6ZDGEHE 392F - ";
                        break;
                    case 392:
                        label += "6ZDGEHE 392F - ";
                        break;
                    case 392:
                        label += "6ZDGEHE 392F - ";
                        break;
                    case 517:
                        label += "6ZDGEHE 517L - ";
                        break;
                    case 353:
                        label += "6ZDGEGE 353W - ";
                        break;
                    case 353:
                        label += "6ZDGEGE 353W - ";
                        break;
                    case 353:
                        label += "6ZDGEGE 353W - ";
                        break;
                    case 355:
                        label += "6ZDGEGE 355R - ";
                        break;
                    case 355:
                        label += "6ZDGEGE 355R - ";
                        break;
                    case 396:
                        label += "6ZDGEGE 396Y - ";
                        break;
                    case 396:
                        label += "6ZDGEGE 396Y - ";
                        break;
                    case 462:
                        label += "6ZDGEGE 462K - ";
                        break;
                    case 464:
                        label += "6ZDGEGE 464F - ";
                        break;
                    case 464:
                        label += "6ZDGEGE 464F - ";
                        break;
                    case 465:
                        label += "6ZDGEGE 465E - ";
                        break;
                    case 465:
                        label += "6ZDGEGE 465E - ";
                        break;
                    case 466:
                        label += "6ZDGEGE 466R - ";
                        break;
                    case 466:
                        label += "6ZDGEGE 466R - ";
                        break;
                    case 466:
                        label += "6ZDGEGE 466R - ";
                        break;
                    case 466:
                        label += "6ZDGEGE 466R - ";
                        break;
                    case 466:
                        label += "6ZDGEGE 466R - ";
                        break;
                    case 466:
                        label += "6ZDGEGE 466R - ";
                        break;
                    case 516:
                        label += "6ZDGEGE 516E - ";
                        break;
                    case 377:
                        label += "6ZDGELE 377F - ";
                        break;
                    case 377:
                        label += "6ZDGELE 377F - ";
                        break;
                    case 378:
                        label += "6ZDGELE 378K - ";
                        break;
                    case 378:
                        label += "6ZDGELE 378K - ";
                        break;
                    case 380:
                        label += "6ZDGELE 380Y - ";
                        break;
                    case 380:
                        label += "6ZDGELE 380Y - ";
                        break;
                    case 380:
                        label += "6ZDGELE 380Y - ";
                        break;
                    case 380:
                        label += "6ZDGELE 380Y - ";
                        break;
                    case 380:
                        label += "6ZDGELE 380Y - ";
                        break;
                    case 380:
                        label += "6ZDGELE 380Y - ";
                        break;
                    case 380:
                        label += "6ZDGELE 380Y - ";
                        break;
                    case 381:
                        label += "6ZDGELE 381G - ";
                        break;
                    case 381:
                        label += "6ZDGELE 381G - ";
                        break;
                    case 383:
                        label += "6ZDGELE 383S - ";
                        break;
                    case 384:
                        label += "6ZDGELE 384P - ";
                        break;
                    case 384:
                        label += "6ZDGELE 384P - ";
                        break;
                    case 412:
                        label += "6ZDGELE 412P - ";
                        break;
                    case 413:
                        label += "6ZDGELE 413G - ";
                        break;
                    case 429:
                        label += "6ZDGELE 429F - ";
                        break;
                    case 429:
                        label += "6ZDGELE 429F - ";
                        break;}
                switch (labely){
                    case 57:
                        label += "B 57N\n";
                        break;
                    case 65:
                        label += "B 65K\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 62:
                        label += "B 62D\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 33:
                        label += "B 33D\n";
                        break;
                    case 57:
                        label += "B 57N\n";
                        break;
                    case 57:
                        label += "B 57N\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 59:
                        label += "B 59Y\n";
                        break;
                    case 106:
                        label += "B 106Y\n";
                        break;
                    case 99:
                        label += "B 99D\n";
                        break;
                    case 101:
                        label += "B 101G\n";
                        break;
                    case 103:
                        label += "B 103L\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 104:
                        label += "B 104W\n";
                        break;
                    case 89:
                        label += "H 89E\n";
                        break;
                    case 1:
                        label += "C 1D\n";
                        break;
                    case 95:
                        label += "C 95L\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 94:
                        label += "C 94T\n";
                        break;
                    case 95:
                        label += "C 95L\n";
                        break;
                    case 95:
                        label += "C 95L\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 92:
                        label += "C 92Y\n";
                        break;
                    case 146:
                        label += "L 146K\n";
                        break;
                    case 153:
                        label += "L 153N\n";
                        break;
                    case 153:
                        label += "L 153N\n";
                        break;
                    case 153:
                        label += "L 153N\n";
                        break;
                    case 154:
                        label += "L 154A\n";
                        break;
                    case 154:
                        label += "L 154A\n";
                        break;
                    case 155:
                        label += "L 155L\n";
                        break;
                    case 155:
                        label += "L 155L\n";
                        break;
                    case 157:
                        label += "L 157S\n";
                        break;
                    case 157:
                        label += "L 157S\n";
                        break;
                    case 190:
                        label += "L 190H\n";
                        break;
                    case 190:
                        label += "L 190H\n";
                        break;
                    case 190:
                        label += "L 190H\n";
                        break;
                    case 89:
                        label += "B 89E\n";
                        break;
                    case 57:
                        label += "F 57N\n";
                        break;
                    case 65:
                        label += "F 65K\n";
                        break;
                    case 59:
                        label += "F 59Y\n";
                        break;
                    case 59:
                        label += "F 59Y\n";
                        break;
                    case 59:
                        label += "F 59Y\n";
                        break;
                    case 59:
                        label += "F 59Y\n";
                        break;
                    case 62:
                        label += "F 62D\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 106:
                        label += "F 106Y\n";
                        break;
                    case 59:
                        label += "F 59Y\n";
                        break;
                    case 59:
                        label += "F 59Y\n";
                        break;
                    case 59:
                        label += "F 59Y\n";
                        break;
                    case 59:
                        label += "F 59Y\n";
                        break;
                    case 33:
                        label += "F 33D\n";
                        break;
                    case 57:
                        label += "F 57N\n";
                        break;
                    case 59:
                        label += "F 59Y\n";
                        break;
                    case 59:
                        label += "F 59Y\n";
                        break;
                    case 106:
                        label += "F 106Y\n";
                        break;
                    case 99:
                        label += "F 99D\n";
                        break;
                    case 101:
                        label += "F 101G\n";
                        break;
                    case 103:
                        label += "F 103L\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 104:
                        label += "F 104W\n";
                        break;
                    case 146:
                        label += "C 146K\n";
                        break;
                    case 152:
                        label += "C 152D\n";
                        break;
                    case 152:
                        label += "C 152D\n";
                        break;
                    case 153:
                        label += "C 153N\n";
                        break;
                    case 154:
                        label += "C 154A\n";
                        break;
                    case 155:
                        label += "C 155L\n";
                        break;
                    case 155:
                        label += "C 155L\n";
                        break;
                    case 157:
                        label += "C 157S\n";
                        break;
                    case 157:
                        label += "C 157S\n";
                        break;
                    case 189:
                        label += "C 189K\n";
                        break;
                    case 190:
                        label += "C 190H\n";
                        break;
                    case 190:
                        label += "C 190H\n";
                        break;
                    case 191:
                        label += "C 191K\n";
                        break;
                    case 95:
                        label += "G 95L\n";
                        break;
                    case 95:
                        label += "G 95L\n";
                        break;
                    case 1:
                        label += "G 1D\n";
                        break;
                    case 1:
                        label += "G 1D\n";
                        break;
                    case 92:
                        label += "G 92Y\n";
                        break;
                    case 92:
                        label += "G 92Y\n";
                        break;
                    case 92:
                        label += "G 92Y\n";
                        break;
                    case 92:
                        label += "G 92Y\n";
                        break;
                    case 92:
                        label += "G 92Y\n";
                        break;
                    case 92:
                        label += "G 92Y\n";
                        break;
                    case 92:
                        label += "G 92Y\n";
                        break;
                    case 92:
                        label += "G 92Y\n";
                        break;
                    case 32:
                        label += "G 32Y\n";
                        break;
                    case 92:
                        label += "G 92Y\n";
                        break;
                    case 94:
                        label += "G 94T\n";
                        break;
                    case 94:
                        label += "G 94T\n";
                        break;
                    case 95:
                        label += "G 95L\n";
                        break;
                    case 95:
                        label += "G 95L\n";
                        break;
                    case 92:
                        label += "G 92Y\n";
                        break;
                    case 27:
                        label += "G 27Q\n";
                        break;
                    case 92:
                        label += "G 92Y\n";
                        break;
                    case 92:
                        label += "G 92Y\n";
                        break;
                    case 89:
                        label += "F 89E\n";
                        break;
                    case 57:
                        label += "H 57N\n";
                        break;
                    case 65:
                        label += "H 65K\n";
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
                    case 59:
                        label += "H 59Y\n";
                        break;
                    case 62:
                        label += "H 62D\n";
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
                    case 33:
                        label += "H 33D\n";
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
                    case 99:
                        label += "H 99D\n";
                        break;
                    case 101:
                        label += "H 101G\n";
                        break;
                    case 103:
                        label += "H 103L\n";
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
                    case 104:
                        label += "H 104W\n";
                        break;
                    case 154:
                        label += "G 154A\n";
                        break;
                    case 154:
                        label += "G 154A\n";
                        break;
                    case 154:
                        label += "G 154A\n";
                        break;
                    case 152:
                        label += "G 152D\n";
                        break;
                    case 153:
                        label += "G 153N\n";
                        break;
                    case 153:
                        label += "G 153N\n";
                        break;
                    case 153:
                        label += "G 153N\n";
                        break;
                    case 146:
                        label += "G 146K\n";
                        break;
                    case 155:
                        label += "G 155L\n";
                        break;
                    case 155:
                        label += "G 155L\n";
                        break;
                    case 155:
                        label += "G 155L\n";
                        break;
                    case 155:
                        label += "G 155L\n";
                        break;
                    case 155:
                        label += "G 155L\n";
                        break;
                    case 157:
                        label += "G 157S\n";
                        break;
                    case 190:
                        label += "G 190H\n";
                        break;
                    case 190:
                        label += "G 190H\n";
                        break;
                    case 190:
                        label += "G 190H\n";
                        break;
                    case 190:
                        label += "G 190H\n";
                        break;
                    case 153:
                        label += "G 153N\n";
                        break;
                    case 95:
                        label += "L 95L\n";
                        break;
                    case 95:
                        label += "L 95L\n";
                        break;
                    case 1:
                        label += "L 1D\n";
                        break;
                    case 1:
                        label += "L 1D\n";
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
                    case 95:
                        label += "L 95L\n";
                        break;
                    case 95:
                        label += "L 95L\n";
                        break;
                    case 92:
                        label += "L 92Y\n";
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
                }
                return label;
                },
            },
            footerFontStyle: 'normal'
        },
    }
});