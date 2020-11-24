let A = 0
let B = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(A)
    basic.pause(100)
    basic.clearScreen()
    if (A > B) {
        basic.showString("W")
    } else if (A < B) {
        basic.showString("L")
    } else {
        basic.showString("T")
    }
    basic.pause(200)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(B)
    basic.pause(100)
    basic.clearScreen()
    if (A < B) {
        basic.showString("W")
    } else if (A > B) {
        basic.showString("L")
    } else {
        basic.showString("T")
    }
    basic.pause(200)
    basic.clearScreen()
})
basic.forever(function () {
    A = randint(0, 100)
    B = randint(0, 100)
})
