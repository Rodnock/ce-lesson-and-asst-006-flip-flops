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

-input.onButtonPressed

-pins.onPulsed

**5.3.4 An image with your hand-drawn diagram of the whole circuit. Use boxes for the micro:bit, converter board, and the flip-flop chip. Label all pins.**

Image: https://imgur.com/a/lClB5zg

**5.3.5 Short video of the operation of the circuit from 5.2.4.**

Video: https://imgur.com/a/9Tt2cSP

---
### Section 6: 3-bit modulus counter

**6.3.1 A short narrative about the experiment.**

This experiment adds more complexity to the Section 5 flip flop outputs. There are now three flip flops, and each one sends a signal to the next, instead of them all getting a signal from the microbit. The far left flip flop gets a signal from the microbit, and after the pulse changes it sends that signal to the next one, which does the same thing for the final one. Each flip flop also sends a signal back to the microbit when it's pulse changes so that it can plot or unplot the corrosponding LED, creating binary on the microbit LED board.

**6.3.2 Answers to the questions in 6.1.**

6.1.1 How many states does a mod-n counter have?: A mod counter has two states, 1 or 0. When are are multiple counters in a line, they have 2^n states, where n is the number of counters. For example, our circuit has 8 states, because there are three flip flops, and 2^3 = 8.

6.1.2 What minimum number of bits is required to represent a mod-N counter, where N is some natural number?: The minimum is two bits of data. As states above, the counter has two states, so it would need at least two bits of data to function properly.

6.1.3 Study the following circuit, which is a mod-8 counter, and explain how it works: The left flip flop receives its signal from the microbit in the 1CLK pin. Whenever it receives a high pulse from the microbit, it sends a signal back to the read pin, and also the next next flip flop. When the second flip flop receives a high pulse, it does the same thing, sending a pulse back to the microbit and to the next flip flop. The final flip flop only sends a signal back to the microbit.

**6.3.3 Answers to the questions in 6.2.**

6.2.4 Explain in what order the 3 bits should be read to properly represent a binary integer: The bits need to be read left ro right, as long as they output on the microbit from right to left.

6.2.5 Explain whether the events at which your took the readings in the previous sections are still the appropriate times to read all three digital input pins, or, if not, what the appropriate time is: Yes, the readings should still be taken when the pulse received it high or low.

6.2.6 Do you have a 3-bit mod-8 counter or something else? If it's indeed a counter, is it counting upward or downward? When you turn the power off and on repeatedly, does the direction change? Explain why or why not: This is a 3-bit mod-8 counter. It counts upward from 0 to 7. When turned on and off, the direction remains upward because the pulse still runs through the circuit in the same direction.

**6.3.4 An image with your hand-drawn diagram of the whole circuit. Use boxes for the micro:bit, converter board, and the flip-flop chip. Label all pins.**

Image: https://imgur.com/a/9H0VZch

**6.3.5 Short video of the operation of the circuit from 6.2.6.**

Video: https://imgur.com/a/d9tTHau
