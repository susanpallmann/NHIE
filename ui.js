const promptsLength = prompts.length;
let seenPrompts = [];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNewRandomNumber() {
    let rolledNumber = getRandomNumber(1, promptsLength);
    if (seenPrompts.includes(rolledNumber)) {
        return getNewRandomNumber();
    } else {
        return rolledNumber;
    }
}

$('document').ready(function() {
    $('body').keyup(function(e) {
        if (e.keyCode == 32) {
            // user has pressed space
            let promptNumber = getNewRandomNumber();
            seenPrompts.push(promptNumber);
            $('#prompt').fadeToggle()
                        .delay(400).text(prompts[promptNumber])
                        .delay(100).fadeToggle();
            $('#number').fadeToggle()
                        .delay(400).text(promptNumber)
                        .delay(100).fadeToggle();
       }
    });
});
// work
