let button: Button
let normal: boolean = true

input.onButtonPressed(Button.A, function () {
    normal = false
    button = Button.A
})

input.onButtonPressed(Button.B, function () {
    normal = false
    button = Button.B
})

input.onButtonPressed(Button.AB, function () {
    normal = true
})

function doubleTime() {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(250)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(250)
}

function halfTime() {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(1000)
}

let buttonArray: Button[] = [Button.A, Button.B]
let timing = [doubleTime, halfTime]

basic.forever(function () {
    if (normal) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(500)
    }
    else {
        timing[buttonArray.indexOf(button)]()
    }
})
