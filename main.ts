input.onButtonPressed(Button.A, function () {
    Number2 = Number2 - 1
    if (Number2 == 1) {
        basic.showString("a")
    }
    if (Number2 == 2) {
        basic.showString("b")
    }
    if (Number2 == 3) {
        basic.showString("c")
    }
    if (Number2 == 4) {
        basic.showString("d")
    }
    if (Number2 == 5) {
        basic.showString("e")
    }
    if (Number2 == 6) {
        basic.showString("f")
    }
    if (Number2 == 7) {
        basic.showString("g")
    }
    if (Number2 == 8) {
        basic.showString("h")
    }
    if (Number2 == 9) {
        basic.showString("i")
    }
    if (Number2 == 10) {
        basic.showString("j")
    }
    if (Number2 == 11) {
        basic.showString("k")
    }
    if (Number2 == 12) {
        basic.showString("l")
    }
    if (Number2 == 13) {
        basic.showString("m")
    }
    if (Number2 == 14) {
        basic.showString("n")
    }
    if (Number2 == 15) {
        basic.showString("o")
    }
    if (Number2 == 16) {
        basic.showString("p")
    }
    if (Number2 == 17) {
        basic.showString("q")
    }
    if (Number2 == 18) {
        basic.showString("r")
    }
    if (Number2 == 19) {
        basic.showString("s")
    }
    if (Number2 == 20) {
        basic.showString("t")
    }
    if (Number2 == 21) {
        basic.showString("u")
    }
    if (Number2 == 22) {
        basic.showString("v")
    }
    if (Number2 == 23) {
        basic.showString("w")
    }
    if (Number2 == 24) {
        basic.showString("x")
    }
    if (Number2 == 25) {
        basic.showString("y")
    }
    if (Number2 == 26) {
        basic.showString("z")
    }
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    if (Number2 == 1) {
        radio.sendString("a")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 2) {
        radio.sendString("b")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 3) {
        radio.sendString("c")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 4) {
        radio.sendString("d")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 5) {
        radio.sendString("e")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 6) {
        radio.sendString("f")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 7) {
        radio.sendString("g")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 8) {
        radio.sendString("h")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 9) {
        radio.sendString("i")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 10) {
        radio.sendString("j")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 11) {
        radio.sendString("k")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 12) {
        radio.sendString("l")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 13) {
        radio.sendString("m")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 14) {
        radio.sendString("n")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 15) {
        radio.sendString("o")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 16) {
        radio.sendString("p")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 17) {
        radio.sendString("q")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 18) {
        radio.sendString("r")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 19) {
        radio.sendString("s")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 20) {
        radio.sendString("t")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 21) {
        radio.sendString("u")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 22) {
        radio.sendString("v")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 23) {
        radio.sendString("w")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 24) {
        radio.sendString("x")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 25) {
        radio.sendString("y")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
    if (Number2 == 26) {
        radio.sendString("z")
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.clearScreen()
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Number2 = Number2 + 1
    if (Number2 == 1) {
        basic.showString("a")
    }
    if (Number2 == 2) {
        basic.showString("b")
    }
    if (Number2 == 3) {
        basic.showString("c")
    }
    if (Number2 == 4) {
        basic.showString("d")
    }
    if (Number2 == 5) {
        basic.showString("e")
    }
    if (Number2 == 6) {
        basic.showString("f")
    }
    if (Number2 == 7) {
        basic.showString("g")
    }
    if (Number2 == 8) {
        basic.showString("h")
    }
    if (Number2 == 9) {
        basic.showString("i")
    }
    if (Number2 == 10) {
        basic.showString("j")
    }
    if (Number2 == 11) {
        basic.showString("k")
    }
    if (Number2 == 12) {
        basic.showString("l")
    }
    if (Number2 == 13) {
        basic.showString("m")
    }
    if (Number2 == 14) {
        basic.showString("n")
    }
    if (Number2 == 15) {
        basic.showString("o")
    }
    if (Number2 == 16) {
        basic.showString("p")
    }
    if (Number2 == 17) {
        basic.showString("q")
    }
    if (Number2 == 18) {
        basic.showString("r")
    }
    if (Number2 == 19) {
        basic.showString("s")
    }
    if (Number2 == 20) {
        basic.showString("t")
    }
    if (Number2 == 21) {
        basic.showString("u")
    }
    if (Number2 == 22) {
        basic.showString("v")
    }
    if (Number2 == 23) {
        basic.showString("w")
    }
    if (Number2 == 24) {
        basic.showString("x")
    }
    if (Number2 == 25) {
        basic.showString("y")
    }
    if (Number2 == 26) {
        basic.showString("z")
    }
    basic.pause(200)
    basic.clearScreen()
})
let Number2 = 0
Number2 = 1
radio.setGroup(562)
