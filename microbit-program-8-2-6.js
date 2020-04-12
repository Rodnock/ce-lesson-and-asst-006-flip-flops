

let bit0: number = 0
let bit1: number = 0
let bit2: number = 0

input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 1)
})

pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    bit0 = 0
    // led.unplot(2, 1)
})

pins.onPulsed(DigitalPin.P2, PulseValue.High, function () {
    bit0 = 1
    // led.plot(2, 1)
})

pins.onPulsed(DigitalPin.P12, PulseValue.Low, function () {
    bit1 = 0
    // led.unplot(1, 1)
})

pins.onPulsed(DigitalPin.P12, PulseValue.High, function () {
    bit1 = 1
    // led.plot(1, 1)
})

pins.onPulsed(DigitalPin.P16, PulseValue.Low, function () {
    bit2 = 0
    // led.unplot(0, 1)
})

pins.onPulsed(DigitalPin.P16, PulseValue.High, function () {
    bit2 = 1
    // led.plot(0, 1)
})

function bin2dec() {
    return((bit0 * 1) + (bit1 * 2) + (bit2 * 4))
}

basic.forever(function () {
    basic.showNumber(bin2dec())
})

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    led.plot(0, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    led.unplot(0, 0)
    basic.pause(500)
})
