function sound (e) {
    //recuperation elements key and audio
    let keyElement = $(`.key[data-key="${e.keyCode}"]`);
    let audio = $(`.sound[data-key="${e.keyCode}"]`);

    //recuperation of class playing
    $('.key').addClass('playing');
    audio.play();
}

sound();