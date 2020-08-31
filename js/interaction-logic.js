// let rhythmButtons = document.getElementById('rhythm-icons-row').getElementsByClassName('icon-div');
let rhythmButtons = document.getElementById('rhythm-icons-row');
let leadButtons = document.getElementById('lead-icons-row');
let starfoxDiv = document.getElementById('starfox');

rhythmButtons.onclick = rhythmButtonsClickHandler;
leadButtons.onclick = leadButtonsClickHandler;
starfoxDiv.onclick = doABarrelRoll;

function rhythmButtonsClickHandler(event){

    let clickedElement = event.target;
    let img;

    if(clickedElement.nodeName === "DIV"){
        img = clickedElement.getElementsByTagName('img')[0];
    }
    else{
        img = clickedElement;
    }

    let sphereProps;
    // if the image clicked was the special wolf image
    // we want to cycle through the different wolf views
    if(img.alt === "wolf"){
        // grab a reference to the index and the sphereProps array
        const index = rthmAssets["wolf"].spherePropsIndex;
        const wolfSphereProps = rthmAssets["wolf"].sphereProps;

        // get the sphereProps at that location
        sphereProps = wolfSphereProps[index];

        // increment the index or set to 0 if it's longer than the array length
        rthmAssets["wolf"].spherePropsIndex = (index + 1 < wolfSphereProps.length) ? index + 1 : 0;
    }
    else{
        sphereProps = rthmAssets[img.alt].sphereProps;
    }
    
    console.log(img.alt);

    yt_setSphericalProps(sphereProps);


}



function leadButtonsClickHandler(event){

    let clickedElement = event.target;
    let img;

    if(clickedElement.nodeName === "DIV"){
        img = clickedElement.getElementsByTagName('img')[0];
    }
    else{
        img = clickedElement;
    }


    let sphereProps;
    // if the image clicked was the special wolf image
    // we want to cycle through the different wolf views
    if(leadAssets[img.alt].revealed){
        
        // if they clicked on "love" we need to grab the correct sphere props for the time of the video
        if(img.alt === "love"){
            // get the current time in beats from Youtube player
            const beatIndex = yt_getBeatIndexFromVideoTime();

            const spbIndexes = leadAssets.love.spherePropsBeatIndexes;
            
            // find out which index to use based on that time
            for(let i=0; (i+1) < spbIndexes.length; i++){
                const spbIndexCur = spbIndexes[i];
                const spbIndexNext = spbIndexes[i+1];

                if(spbIndexCur <= beatIndex && beatIndex < spbIndexNext){
                    sphereProps = leadAssets.love.sphereProps[i];
                    break;
                }
                else{
                    sphereProps = leadAssets.love.sphereProps[i+1];
                }
            }

        }
        else{
            sphereProps = leadAssets[img.alt].sphereProps;
        }

        console.log(img.alt);
    }
    else{
        console.log("locked ;)");
        return;
    }

    yt_setSphericalProps(sphereProps);


}



// when someone presses the starfox button this will make the camera do a "roll" flip (aka barrel roll)
async function doABarrelRoll(event){

    // if we're already rolling, deny the new roll
    // eventually we can do some smarter math and solve this but I'm lazy today
    if(rollingCurrently){
        return;
    }
    else{
        rollingCurrently = true;
    }

    let rollTime = barrelRollTimeMS; 

    // we don't need to update the view for EVERY single degree so we can cut that down here
    const degreesPerUpdate = (clockwise) ? barrelRollDegreesPerUpdate : -barrelRollDegreesPerUpdate;
    const sleepTime = rollTime / 360 * Math.abs(degreesPerUpdate);

    // roll is set from 
    //      0 (right side up) 
    //      to -180 (upside down rotating clockwise) 
    //      or  180 (upside down rotating counterclockwise)
    let sphereProps = yt_getSphericalProps();
    
    const currentRoll = sphereProps.roll;
    let targetRoll = currentRoll + degreesPerUpdate;

    for(i=0; i < Math.round(360/Math.abs(degreesPerUpdate)); i++){

        if(targetRoll >= 180){
            targetRoll = targetRoll - 360;
        }
        else if(targetRoll <= -180){
            targetRoll = targetRoll + 360;
        }

        sphereProps.roll = targetRoll;

        yt_setSphericalProps(sphereProps)

        await sleep(sleepTime);

        targetRoll = targetRoll + degreesPerUpdate;

    }

    clockwise = !clockwise;

    rollingCurrently = false;

}



// because seeking around in the video throws all sorts of wrenches into things 
// due to the interval timer that updates the UI
// we need to tell the icon highlighting function to stop for a short period
// this function is called by the video-player.js
async function blayblahhhhh(sleepTime){

    if(!sleepTime){
        sleepTime = 300;
    }
    
    // stop the icon highlight from functioning
    dontUpdateHighlightIcon = true;
    
    // sleep for a short while
    await sleep(sleepTime);
    
    // allow the highlight to function again
    dontUpdateHighlightIcon = false;
    
}







