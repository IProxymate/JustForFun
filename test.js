window.addEventListener('load', () => {
    let colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown','cornflowerblue','orchid','snow', 'greenyellow'];
    const sound = document.querySelectorAll('div.pads > * > audio');
    const pads = document.querySelectorAll('div.pads div');


    for (let i = 0; i < pads.length; i++) {
        pads[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    };


    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sound[index].currentTime = 0;
            console.log(sound[index])
            sound[index].play();
        });
    });

    window.addEventListener('keydown', function(){
        this.console.log(event.code);

        if (event.code == 'KeyQ') {
            sound[0].play();
        }
    });

});



