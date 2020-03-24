import React from 'react'
import Winwheel from 'winwheel'

function Spinner(){
    var myWheel = new Winwheel({
        'numSegments'  : 8,         // Number of segments
                'outerRadius'  : 212,       // The size of the wheel.
                'centerX'      : 217,       // Used to position on the background correctly.
                'centerY'      : 219,
                'textFontSize' : 28,        // Font size.
                'segments'     :            // Definition of all the segments.
                [
                   {'fillStyle' : '#eae56f', 'text' : 'Prize 1'},
                   {'fillStyle' : '#89f26e', 'text' : 'Prize 2'},
                   {'fillStyle' : '#7de6ef', 'text' : 'Prize 3'},
                   {'fillStyle' : '#e7706f', 'text' : 'Prize 4'},
                   {'fillStyle' : '#eae56f', 'text' : 'Prize 5'},
                   {'fillStyle' : '#89f26e', 'text' : 'Prize 6'},
                   {'fillStyle' : '#7de6ef', 'text' : 'Prize 7'},
                   {'fillStyle' : '#e7706f', 'text' : 'Prize 8'}
                ],
                'animation' :               // Definition of the animation
                {
                    'type'     : 'spinToStop',
                    'duration' : 5,
                    'spins'    : 8,
                    'callbackFinished' : alertPrize,
                    'callbackSound'    : playSound,   // Called when the tick sound is to be played.
                    'soundTrigger'     : 'pin'        // Specify pins are to trigger the sound.
                },
                'pins' :                // Turn pins on.
                {
                    'number'     : 24,
                    'fillStyle'  : 'silver',
                    'outerRadius': 4,
                }
                
                

    });
    const wheelSpinning = false
    function startSpin()
            {
                // Ensure that spinning can't be clicked again while already running.
                if (wheelSpinning == false) {
                    // Based on the power level selected adjust the number of spins for the wheel, the more times is has
                    // to rotate with the duration of the animation the quicker the wheel spins.
                    

                    // Disable the spin button so can't click again while wheel is spinning.
                    // document.getElementById('spin_button').src = "../assets/images/spin_off.png";
                    // document.getElementById('spin_button').className = "";

                    // Begin the spin animation by calling startAnimation on the wheel object.
                    myWheel.startAnimation();

                    // Set to true so that power can't be changed and spin button re-enabled during
                    // the current animation. The user will have to reset before spinning again.
                    wheelSpinning = true;
                }
            }
    function alertPrize(indicatedSegment)
    {
        // Do basic alert of the segment text.
        alert("You have won " + indicatedSegment.text);
    }
     // Loads the tick audio sound in to an audio object.
     let audio = new Audio('tick.mp3');
 
     // This function is called when the sound is to be played.
     function playSound()
     {
         // Stop and rewind the sound if it already happens to be playing.
         audio.pause();
         audio.currentTime = 0;

         // Play the sound.
         audio.play();
     }
            return(
                <div align="center">
            <h1>Winwheel.js example wheel - basic code wheel</h1>
            <p>Here is an example of a basic code drawn wheel which spins to a stop with the prize won alerted to the user.</p>
            <br />
            <p>Choose a power setting then press the Spin button. You will be alerted to the prize won when the spinning stops.</p>
            <br />
            <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <td>
                        <div class="power_controls">
                            <br />
                            <br />
                            <table class="power" cellpadding="10" cellspacing="0">
                                <tr>
                                    <th align="center">Power</th>
                                </tr>
                                <tr>
                                    <td width="78" align="center" id="pw3" onClick="powerSelected(3);">High</td>
                                </tr>
                                <tr>
                                    <td align="center" id="pw2" onClick="powerSelected(2);">Med</td>
                                </tr>
                                <tr>
                                    <td align="center" id="pw1" onClick="powerSelected(1);">Low</td>
                                </tr>
                            </table>
                            <br />
                            <img id="spin_button" src="../assets/images/spin_off.png" alt="Spin" onClick={startSpin()} />
                            <br /><br />
                            &nbsp;&nbsp;<a href="#" onClick="resetWheel(); return false;">Play Again</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(reset)
                        </div>
                    </td>
                    <td width="438" height="582" class="the_wheel" align="center" valign="center">
                        <canvas id="canvas" width="434" height="434">
                            <p align="center">Sorry, your browser doesn't support canvas. Please try another.</p>
                        </canvas>
                    </td>
                </tr>
            </table>
        </div>
            )
}
export default Spinner