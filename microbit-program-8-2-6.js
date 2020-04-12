let bit1: boolean = false
let bit2: boolean = false
let bit3: boolean = false

input.onButtonPressed(Button.AB, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
})

pins.onPulsed(DigitalPin.P2, PulseValue.Low, function () {
    bit1 = false
    // led.unplot(2, 1)
})

pins.onPulsed(DigitalPin.P2, PulseValue.High, function () {
    bit1 = true
    // led.plot(2, 1)
})

pins.onPulsed(DigitalPin.P12, PulseValue.Low, function () {
    bit2 = false
    // led.unplot(1, 1)
})

pins.onPulsed(DigitalPin.P12, PulseValue.High, function () {
    bit2 = true
    // led.plot(1, 1)
})

pins.onPulsed(DigitalPin.P16, PulseValue.Low, function () {
    bit3 = false
    // led.unplot(0, 1)
})

pins.onPulsed(DigitalPin.P16, PulseValue.High, function () {
    bit3 = true
    // led.plot(0, 1)
})

function bin2dec() {
    if (bit1 == false && bit2 == false && bit3 == false) {
        basic.showNumber(0)
    }
    else if (bit1 == true && bit2 == false && bit3 == false) {
        basic.showNumber(1)
    }
    else if (bit1 == false && bit2 == true && bit3 == false) {
        basic.showNumber(2)
    }
    else if (bit1 == true && bit2 == true && bit3 == false) {
        basic.showNumber(3)
    }
    else if (bit1 == false && bit2 == false && bit3 == true) {
        basic.showNumber(4)
    }
    else if (bit1 == true && bit2 == false && bit3 == true) {
        basic.showNumber(5)
    }
    else if (bit1 == false && bit2 == true && bit3 == true) {
        basic.showNumber(6)
    }
    else if (bit1 == true && bit2 == true && bit3 == true) {
        basic.showNumber(7)
    }
}

basic.forever(function () {
    bin2dec()
})

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    led.plot(0, 0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    led.unplot(0, 0)
    basic.pause(500)
})
