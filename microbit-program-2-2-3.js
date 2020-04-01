let detect: number = 0
 
basic.forever(function () {
 
    detect = pins.digitalReadPin(DigitalPin.P8)
 
    if (detect == 0) {
        basic.clearScreen()
    }
    else {
        led.plot(0, 0)
    }
})
