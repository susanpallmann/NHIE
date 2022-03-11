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
            $('#prompt').fadeToggle(800);
            setTimeout(function () {
                $("#prompt").text(prompts[promptNumber]);
                $('#prompt').fadeToggle();
            }, 800);
            $('#number').fadeToggle(800);
            setTimeout(function () {
                $("#number").text(promptNumber);
                $('#number').fadeToggle();
            }, 800);
        }
    });
});
// work
