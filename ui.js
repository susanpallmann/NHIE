const promptsLength = prompts.length;
let seenPrompts = [];

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function getNewRandomNumber() {
    let rolledNumber = getRandomNumber(1, promptsLength);
    if (seenPrompts.includes(rolledNumber)) {
        console.log("we've seen this one before");
        getNewRandomNumber();
    } else {
        return rolledNumber;
    }
}

$('document').ready(function() {
});

$('body').keyup(function(e) {
    if (e.keyCode == 32) {
        // user has pressed space
        let promptNumber = getNewRandomNumber();
        console.log(prompts[promptNumber]);
        seenPrompts.append(promptNumber);
   }
});
