window.addEventListener('keydown', function (e) {
    switch (e.keyCode) {
        case 65 :
            $('audio[data-key="65"]')[0].play();
            break;

        case 83 :
            $('audio[data-key="83"]')[0].play();
            break;

        case 68 :
            $('audio[data-key="68"]')[0].play();
            break;

        case 70 :
            $('audio[data-key="70"]')[0].play();
            break;

        case 71 :
            $('audio[data-key="71"]')[0].play();
            break;

        case 72 :
            $('audio[data-key="72"]')[0].play();
            break;

        case 74 :
            $('audio[data-key="74"]')[0].play();
            break;

        case 75 :
            $('audio[data-key="75"]')[0].play();
            break;

        case 76 :
            $('audio[data-key="76"]')[0].play();
            break;
    }
});

$('.key').addClass('playing');