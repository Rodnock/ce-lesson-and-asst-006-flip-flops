basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(500)
})
