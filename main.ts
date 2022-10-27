radio.onReceivedNumber(function (receivedNumber) {
    if (0 == receivedNumber) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("G A G A G A G A ", 120)
        }
    } else {
        if (2 == receivedNumber) {
            basic.showString("Hello!")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
radio.setGroup(33)
basic.forever(function () {
	
})
