# CPE 1040 - Spring 2020
```
  _           _       _   _       _       _                 _    
 | |         | |     | \ | |     | |     | |               | |   
 | |     __ _| |__   |  \| | ___ | |_ ___| |__   ___   ___ | | __
 | |    / _` | '_ \  | . ` |/ _ \| __/ _ \ '_ \ / _ \ / _ \| |/ /
 | |___| (_| | |_) | | |\  | (_) | ||  __/ |_) | (_) | (_) |   < 
 |______\__,_|_.__/  |_| \_|\___/ \__\___|_.__/ \___/ \___/|_|\_\
                                                                                                                      
```
Art acknowledgement: [taag](http://patorjk.com/software/taag/)
---

**NOTE:** 
1. This lesson & assignment [README](README.md) is _intentionally_ blank, to be used as the Lab Notebook for the study & submission. _It is a great aid for your study and the main component of your submission._
2. Read and follow the [lesson-and-assignment](lesson-and-assignment.md).
2. Refer to the [submission template](submission-template.md) for formatting expectations and examples. 
4. Refer to the [criteria and guide](criteria-and-guide.md) for the different components of your submission.
---

### Section 1: Capacitors

**1.3.1. A short narrative about the experiment. What is the voltage when the capacitor finishes charging? Why?**  

This is a fairly straightforward experiment to demonstraight a capacitor charging and discharging. When the capacitor is        fully charge, it stores 5v when it finishes charging because that is all the voltage we are putting into it. Just as if I have the board set to 3.3v, the capacitor stops charging at 3.3v.

**1.3.2.The approximate time to charge and discharge the capacitor. (2 values)**

The capacitor charges almost instantly. The discharge takes about a minute.

**1.3.3.An instantaneous value for the charging and discharging currents. (2 values) Note: These currents are not constant, and with this equipment we may only be able to capture an instantaneous non-zero current value.**

I was unable to get any readings for this.

---
### Section 2: Logic Level Converter

**2.3.1. A short narrative about the experiment.**

This experiment demonstraights how to use the voltage converter to utilize both the 5v from the bread board, and the 3.3v from the microbit.

**2.3.2 Short video of the operation of the circuit from 2.2.3.**

Video: https://imgur.com/a/HaZfVZT

**2.3.3 Short video of the operation of the circuit from 2.2.5.**

Video: https://imgur.com/a/w0J0IIl (I wanted to show that the LED was being controlled by pin 8, and not just on by default, I didn't realize until after that this was what we were supposed to do for 3.2.1 and 3.2.2, so those will be the same.)

---
### Section 3: Clock signal from the micro:bit

**3.3.1 A short narrative about the experiment.**

This experiment introduces flip flops and square waves, so sort of a "timing" for things turning on and off using binary 0 and 1.

**3.3.2 Short video of the operation of the circuit from 3.2.2.**

Video: https://imgur.com/a/7EPccS8 (Same code as 2.3.3)

**3.3.3 Short video of the operation of the circuit from 3.2.3.**

Video: https://imgur.com/a/x7yPYUc (I also added a A+B button press to make the timing go back to normal)

---
### Section 4: D-type flip-flop

**4.3.1 A short narrative about the experiment.**

This experiment shows how flip flops can be used to switch between more than one circuit. This one swaps between the circuits on 1Q and 1/Q based on the timing of the square wave that the microbit is creating.

**4.3.2 An image with your hand-drawn diagram of the whole circuit. Use boxes for the micro:bit, converter board, and the flip-flop chip. Label all pins.**

Drawing: https://imgur.com/a/zmtgjn1

**4.3.3 Short video of the operation of the circuit from 4.2.6.**

Video: https://imgur.com/a/9bmkHth (I didn't see any difference in the circuit operation between 4.2.6 and 4.2.7. There was no noticable lag no matter what the timing was, as you can see in this video.)

---
### Section 5: Reading clocked flip-flop output with the micro:bit

**5.3.1 A short narrative about the experiment.**

This experiment takes microbit and flip flop implimentation a step further. There is now a pin (P2, in this case) that is reading wat is happening with the square wave, and actives and deactivates an LED (0, 1) when the square wave doing on high-low cycle.

**5.3.2 Answers to the questions in 5.1.**

An event is something that happens that inturrupts the current code that is being executed. I.E. A button being pressed, or the pulse changing.

An event handler is a function that executes a portion of code when the event that it is tied to takes place.

Asynchronus execution means that these events can be anywhere in the code, they don't have to be in order for them to take place. 

**5.3.3 Answers to the questions in 5.2.**

input.onButtonPressed
pins.onPulsed

**5.3.4 An image with your hand-drawn diagram of the whole circuit. Use boxes for the micro:bit, converter board, and the flip-flop chip. Label all pins.**

Image: https://imgur.com/a/lClB5zg

**5.3.5 Short video of the operation of the circuit from 5.2.4.**

Video: https://imgur.com/a/9Tt2cSP
