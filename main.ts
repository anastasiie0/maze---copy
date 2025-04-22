input.onButtonPressed(Button.A, function () {
    movements += 1
    led.unplot(X_plot, Y_plot)
    X_plot += 1
    if (X_plot > 4) {
        X_plot = 0
    }
    if (X_plot == 4) {
        for (let x = 0; x <= 4; x++) {
            if (led.point(x, y) && (x != X_plot || y != Y_plot)) {
                litspot = true
            }
        }
        for (let y = 0; y <= 4; y++) {
            if (led.point(x, y) && (x != X_plot || y != Y_plot)) {
                litspot = true
            }
        }
        if (litspot == true) {
            X_plot = 4
        }
        if (litspot == false) {
            radio.sendNumber(4)
            basic.clearScreen()
        }
    } else {
        litspot = false
    }
    led.plot(X_plot, Y_plot)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "right") {
        basic.showString("moves")
        basic.showNumber(movements)
        basic.showString("winner")
    }
    if (receivedString == "wrong") {
        basic.showString("moves")
        basic.showNumber(movements)
        basic.showString("loser")
    }
})
input.onButtonPressed(Button.B, function () {
    movements += 1
    led.unplot(X_plot, Y_plot)
    Y_plot += 1
    if (Y_plot > 4) {
        Y_plot = 0
    }
    led.plot(X_plot, Y_plot)
})
let x = 0
let y = 0
let Y_plot = 0
let X_plot = 0
let movements = 0
let litspot = false
litspot = false
movements = 0
X_plot = 0
Y_plot = 2
radio.setGroup(4)
basic.clearScreen()
for (let index = 0; index <= 5; index++) {
    y = randint(0, 4)
    x = randint(0, 4)
    if (led.point(x, y) == true) {
        index += -1
    } else {
        led.plot(x, y)
        if (led.point(0, 2) == true) {
            led.unplot(0, 2)
            index += -1
        }
    }
}
led.plot(X_plot, Y_plot)
basic.forever(function () {
	
})
