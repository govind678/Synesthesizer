/****************************
 * project2app/js/global.js
 * 
 * Synesthesizer: Layer Cake Music Demo
 * 2012 - Govinda Ram Pingali
 * LCC 6313 - Project 2
 * Georgia Institute of Technology
 ****************************/


//*** Layer Step Story Array ***//
var story = new Array;
story[0] = "This is the 'layer cake', each layer representing a musical instrument. Pick out colors for each of the layers and listen to a 20 second sample of what the combination of colors would sound like...";
story[1] = "What would you like the crust to be like?";
story[2] = "Drum color selected";
story[3] = "How would you like the next layer?";
story[4] = "Bass color selected";
story[5] = "What about the next layer?";
story[6] = "Keys color selected";
story[7] = "The cream?";
story[8] = "Guitars color selected";
story[9] = "Finally, the icing on the top...";
story[10] = "Alright, you have finished creating your cake! Now its time to listen to what it sounds like...";
story[11] = "Here is a rating of your emotional response to the cake.</br>The color of the background is the resulting color of the RGB values. The final 'valence' and 'arousal' values are plotted on the RGB Emotion Model.</br>Do you like what your cake sounds like? No? Click button to start again.";


//*** Layer Step Color Options Array ***//
var colors = new Array();
colors[1] = ['300', '030', '003'];
colors[3] = ['600', '060', '006'];
colors[5] = ['900', '090', '009'];
colors[7] = ['C00', '0C0', '00C'];
colors[9] = ['F00', '0F0', '00F'];




//*** Initialization ***//
container.style.visibility = "hidden";
buttonText.innerHTML = "Start";
color_options.style.visibility = "hidden";
results.style.visibility = "hidden";
final.style.visibility = "hidden";
showArrow(0);



//*** Advance TimeStep (LayerStep) ***//
$(document).ready(function()
{
    
    //* After Intro *//    
    $("#startButton").click(function()
    {
        intro.style.visibility = "hidden";
        container.style.visibility = "visible";
    });
    
    
    //* On Click of Next Button *//
    $("#nextButton").click(function()
    {
        
        switch (layerStep)
        {
            //Start
            case 0:
            {
                storyText.innerHTML = story[0];
                buttonText.innerHTML = "Next";
                
                break;
            }
            
            
            //Drums
            case 1:
            {
                color_options.style.visibility = "visible";
                storyText.innerHTML = story[1];
                buttonText.innerHTML = "Select Drums";
                showArrow(1);
                results.style.visibility="visible";
                updateVariables();
                
                drums.style.opacity = 0.8;
                color1.style.backgroundColor = colors[1][0];
                color2.style.backgroundColor = colors[1][1];
                color3.style.backgroundColor = colors[1][2];
                
                break;
            }
            
            
            case 2:
            {
                if(option1.checked)
                {
                    drums.style.backgroundColor = colors[1][0];
                    valence--;
                    arousal++;
                    red++;
                    drumsVariable = drums_red;
                    toggle = 0;   
                }
                
                else if(option2.checked)
                {
                    drums.style.backgroundColor = colors[1][1];   
                    arousal--;
                    green++;
                    drumsVariable = drums_green;
                    toggle = 0;
                }
                
                else if(option3.checked)
                {
                    drums.style.backgroundColor = colors[1][2];
                    valence++;
                    arousal++;
                    blue++;
                    drumsVariable = drums_blue;
                    toggle = 0;
                }
                
                else
                {
                    storyText.innerHTML = "Make a Choice!";
                    layerStep--;
                    toggle = 1;
                }
                
                if (toggle === 0)
                {
                    color_options.style.visibility = "hidden";
                    option1.checked = false;
                    option2.checked = false;
                    option3.checked = false;
                    storyText.innerHTML = story[2];
                    buttonText.innerHTML = "Next";
                    updateVariables();
                }
                
                break;
            }
            
            
            //Bass
            case 3:
            {
                color_options.style.visibility = "visible";
                storyText.innerHTML = story[3];
                buttonText.innerHTML = "Select Bass";
                showArrow(2);
                
                bass.style.opacity = 0.8;
                color1.style.backgroundColor = colors[3][0];
                color2.style.backgroundColor = colors[3][1];
                color3.style.backgroundColor = colors[3][2];
                
                break;
            }
            
            
            case 4:
            {
                if(option1.checked)
                {
                    bass.style.backgroundColor = colors[3][0];
                    valence--;
                    arousal++;
                    red++;
                    bassVariable = bass_red;
                    toggle = 0;   
                }
                
                else if(option2.checked)
                {
                    bass.style.backgroundColor = colors[3][1];
                    arousal--;
                    green++;
                    bassVariable = bass_green;
                    toggle = 0;
                }
                
                else if(option3.checked)
                {
                    bass.style.backgroundColor = colors[3][2];
                    valence++;
                    arousal++;
                    blue++;
                    bassVariable = bass_blue;
                    toggle = 0;
                }
                
                else
                {
                    storyText.innerHTML = "Make a Choice!";
                    layerStep--;
                    toggle = 1;
                }
                
                if (toggle === 0)
                {
                    color_options.style.visibility = "hidden";
                    option1.checked = false;
                    option2.checked = false;
                    option3.checked = false;
                    storyText.innerHTML = story[4];
                    buttonText.innerHTML = "Next";
                    updateVariables();
                }
                
                break;
            }
            
            
            //Keys
            case 5:
            {
                color_options.style.visibility = "visible";
                storyText.innerHTML = story[5];
                buttonText.innerHTML = "Select Keys";
                showArrow(3);
                
                keys.style.opacity = 0.8;
                color1.style.backgroundColor = colors[5][0];
                color2.style.backgroundColor = colors[5][1];
                color3.style.backgroundColor = colors[5][2];
                
                break;
            }
            
            
            case 6:
            {
                if(option1.checked)
                {
                    keys.style.backgroundColor = colors[5][0];
                    valence--;
                    arousal++;
                    red++;
                    keysVariable = keys_red;
                    toggle = 0;   
                }
                
                else if(option2.checked)
                {
                    keys.style.backgroundColor = colors[5][1];
                    arousal--;
                    green++;
                    keysVariable = keys_green;
                    toggle = 0;
                }
                
                else if(option3.checked)
                {
                    keys.style.backgroundColor = colors[5][2];
                    valence++;
                    arousal++;
                    blue++;
                    keysVariable = keys_blue;
                    toggle = 0;
                }
                
                else
                {
                    storyText.innerHTML = "Make a Choice!";
                    layerStep--;
                    toggle = 1;
                }
                
                if (toggle === 0)
                {
                    color_options.style.visibility = "hidden";
                    option1.checked = false;
                    option2.checked = false;
                    option3.checked = false;
                    storyText.innerHTML = story[6];
                    buttonText.innerHTML = "Next";
                    updateVariables();
                }
                
                break;
            }
            
            
            //Guitars
            case 7:
            {
                color_options.style.visibility = "visible";
                storyText.innerHTML = story[7];
                buttonText.innerHTML = "Select Guitars";
                showArrow(4);
                
                guitars.style.opacity = 0.8;
                color1.style.backgroundColor = colors[7][0];
                color2.style.backgroundColor = colors[7][1];
                color3.style.backgroundColor = colors[7][2];
                
                break;
            }
            
            
            case 8:
            {
                if(option1.checked)
                {
                    guitars.style.backgroundColor = colors[7][0];
                    valence--;
                    arousal++;
                    red++;
                    guitarsVariable = guitars_red;
                    toggle = 0;   
                }
                
                else if(option2.checked)
                {
                    guitars.style.backgroundColor = colors[7][1];
                    arousal--;
                    green++;
                    guitarsVariable = guitars_green;
                    toggle = 0;
                }
                
                else if(option3.checked)
                {
                    guitars.style.backgroundColor = colors[7][2];
                    valence++;
                    arousal++;
                    blue++;
                    guitarsVariable = guitars_blue;
                    toggle = 0;
                }
                
                else
                {
                    storyText.innerHTML = "Make a Choice!";
                    layerStep--;
                    toggle = 1;
                }
                
                if (toggle === 0)
                {
                    color_options.style.visibility = "hidden";
                    option1.checked = false;
                    option2.checked = false;
                    option3.checked = false;
                    storyText.innerHTML = story[8];
                    buttonText.innerHTML = "Next";
                    updateVariables();
                }
                
                break;
            }
            
            
            //Vocals
            case 9:
            {
                color_options.style.visibility = "visible";
                storyText.innerHTML = story[9];
                buttonText.innerHTML = "Select Vocals";
                showArrow(5);
                
                vocals.style.opacity = 0.8;
                color1.style.backgroundColor = colors[9][0];
                color2.style.backgroundColor = colors[9][1];
                color3.style.backgroundColor = colors[9][2];
                
                break;
            }
            
            
            case 10:
            {
                if(option1.checked)
                {
                    vocals.style.backgroundColor = colors[9][0];
                    valence--;
                    arousal++;
                    red++;
                    vocalsVariable = vocals_red;
                    toggle = 0;   
                }
                
                else if(option2.checked)
                {
                    vocals.style.backgroundColor = colors[9][1];
                    arousal--;
                    green++;
                    vocalsVariable = vocals_green;
                    toggle = 0;
                }
                
                else if(option3.checked)
                {
                    vocals.style.backgroundColor = colors[9][2];
                    valence++;
                    arousal++;
                    blue++;
                    vocalsVariable = vocals_blue;
                    toggle = 0;
                }
                
                else
                {
                    storyText.innerHTML = "Make a Choice!";
                    layerStep--;
                    toggle = 1;
                }
                
                if (toggle === 0)
                {
                    color_options.style.visibility = "hidden";
                    option1.checked = false;
                    option2.checked = false;
                    option3.checked = false;
                    storyText.innerHTML = story[10];
                    buttonText.innerHTML = "See and Hear Results";
                    updateVariables();
                }
                
                break;
            }
            
            
            //End
            case 11:
            {
                playSong(drumsVariable, bassVariable, keysVariable, guitarsVariable, vocalsVariable);
                showArrow(0);
                final.style.visibility = "visible";
                color_result = computeColor(red, green, blue);
                final.style.backgroundColor = color_result;
                plot(valence, arousal);
                storyText.innerHTML = story[11];
                buttonText.innerHTML = "Restart!";
                
                break;
            }
            
            default:
            {
                window.location.reload();
                break;
            }
         
        //End Switch Case   
        }

    layerStep++;
    
    
    //End Next Button Click Function
    });


    
//End Docment Ready Function
});