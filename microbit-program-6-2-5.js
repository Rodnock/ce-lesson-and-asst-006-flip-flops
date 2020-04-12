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
    led.plot(0, 0)
    basic.pause(250)
    pins.digitalWritePin(DigitalPin.P8, 0)
    led.unplot(0, 0)
    basic.pause(250)
}

function halfTime() {
    pins.digitalWritePin(DigitalPin.P8, 1)
    led.plot(0, 0)
    basic.pause(1000)
    pins.digitalWritePin(DigitalPin.P8, 0)
    led.unplot(0, 0)
    basic.pause(1000)
}

pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    led.unplot(0, 1)
})

pins.onPulsed(DigitalPin.P2, PulseValue.High, function () {
    led.plot(0, 1)
})

pins.onPulsed(DigitalPin.P12, PulseValue.Low, function () {
    led.unplot(1, 1)
})

pins.onPulsed(DigitalPin.P12, PulseValue.High, function () {
    led.plot(1, 1)
})

pins.onPulsed(DigitalPin.P16, PulseValue.Low, function () {
    led.unplot(2, 1)
})

pins.onPulsed(DigitalPin.P16, PulseValue.High, function () {
    led.plot(2, 1)
})

let buttonArray: Button[] = [Button.A, Button.B]
let timing = [doubleTime, halfTime]

basic.forever(function () {
    if (normal) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        led.plot(0, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P8, 0)
        led.unplot(0, 0)
        basic.pause(500)
    }
    else {
        timing[buttonArray.indexOf(button)]()
    }
})
