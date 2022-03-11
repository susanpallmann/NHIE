const promptsLength = prompts.length - 1;
let seenPrompts = [];
let patterns = [
    'pattern-squiggle',
    '.pattern-bubble',
    '.pattern-wave',
    '.pattern-clouds',
    '.pattern-blobs'
];

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
            $('#number').fadeToggle(800);
            
            setTimeout(function () {
                
                $("#prompt").text(prompts[promptNumber]);
                $('#prompt').fadeToggle();
                
                $("#number").text('#' + promptNumber);
                $('#number').fadeToggle();
                
                let hue = getRandomNumber(1, 360);
                $('body').css('background-color', `hsl(${hue}, 70%, 70%)`);
                
                if (hue > 30 && hue < 231) {
                    
                    $('body').removeClass('dark');
                    $('body').addClass('light');
                    
                } else {
                    
                    $('body').removeClass('light');
                    $('body').addClass('dark');
                }
                
                let newPattern = getRandomNumber(1, 5);
                $('body').removeClass('pattern-squiggle');
                $('body').removeClass('pattern-bubble');
                $('body').removeClass('pattern-wave');
                $('body').removeClass('pattern-clouds');
                $('body').removeClass('pattern-blobs');
                $('body').addClass(patterns[newPattern]);
                
            }, 800);
            
        }
    });
});
// work
