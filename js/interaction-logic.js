// let rhythmButtons = document.getElementById('rhythm-icons-row').getElementsByClassName('icon-div');
let rhythmButtons = document.getElementById('rhythm-icons-row');
let leadButtons = document.getElementById('lead-icons-row');
let starfoxDiv = document.getElementById('starfox');
let bonusDiv = document.getElementById('bonus');

rhythmButtons.onclick = rhythmButtonsClickHandler;
leadButtons.onclick = leadButtonsClickHandler;
starfoxDiv.onclick = doABarrelRoll;
bonusDiv.onclick = rhythmButtonsClickHandler;

let latestFov;
let latestRoll;


yt_setZoomOutButtonCallback(zoomOut);

function rhythmButtonsClickHandler(event){

    let clickedElement = event.target;
    let img;

    if(clickedElement.nodeName === "DIV" && clickedElement.classList.contains('ftue-icon-text')){
        img = rthmAssets.drums.imgElement;
    }
    else if(clickedElement.nodeName === "DIV"){
        img = clickedElement.getElementsByTagName('img')[0];
    }    
    else{
        img = clickedElement;
    }

    let sphereProps;
    let asset = (img.alt === "bonus") ? specialAssets[img.alt] : rthmAssets[img.alt];
    // if the image clicked was the special wolf image
    // we want to cycle through the different wolf views
    if(img.alt === "wolf" || img.alt === "bonus"){
        // grab a reference to the index and the sphereProps array
        const index = asset.spherePropsIndex;
        const wolfSphereProps = asset.sphereProps;

        // get the sphereProps at that location
        sphereProps = wolfSphereProps[index];

        // increment the index or set to 0 if it's longer than the array length
        asset.spherePropsIndex = (index + 1 < wolfSphereProps.length) ? index + 1 : 0;
    }
    else{
        sphereProps = _getSpherePropsFromAsset(asset);
    }
    
    console.log(img.alt);

    latestFov = sphereProps.fov;
    latestRoll = sphereProps.roll;
    flyToNewView(sphereProps);
    // yt_setSphericalProps(sphereProps);

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
    let asset = leadAssets[img.alt];
    // if the image clicked was the special wolf image
    // we want to cycle through the different wolf views
    if(asset.revealed){
        sphereProps = _getSpherePropsFromAsset(asset);

        console.log(img.alt);
    }
    else{
        console.log("locked ;)");
        return;
    }

    latestFov = sphereProps.fov;
    latestRoll = sphereProps.roll;
    flyToNewView(sphereProps);
    // yt_setSphericalProps(sphereProps);
}


function _getSpherePropsFromAsset(asset){

    // if they clicked on an asset who's sphereProps is an array (like in the case of "love")
    // then we should check to see which 
    if(Array.isArray(asset.sphereProps) && asset.spherePropsBeatIndexes){
        // get the current time in beats from Youtube player
        const beatIndex = yt_getBeatIndexFromVideoTime();

        const spbIndexes = asset.spherePropsBeatIndexes;
        
        // find out which index to use based on that time
        for(let i=0; (i+1) < spbIndexes.length; i++){
            const spbIndexCur = spbIndexes[i];
            const spbIndexNext = spbIndexes[i+1];

            if(spbIndexCur <= beatIndex && beatIndex < spbIndexNext){
                return asset.sphereProps[i];
            }
        }

        // if we didn't find our item in the for loop above, then it must be the last one in the list
        // or in the case that our array is only 1 item long, we won't even enter the loop above
        // this will deal with that edge case
        return asset.sphereProps[spbIndexes.length - 1];
    }
    else{
        return asset.sphereProps;
    }

}




// this function makes transitions between camera angles nice and smooooooooth
async function flyToNewView(sphereProps){

    // if we're already rolling, deny the new roll
    // eventually we can do some smarter math and solve this but I'm lazy today
    if(flyingCurrently){
        return;
    }
    else{
        flyingCurrently = true;
    }

    // target sphereProps
    const panTarget = sphereProps.yaw;
    const tiltTarget = sphereProps.pitch;
    const zoomTarget = sphereProps.fov;
    const rotateTarget = sphereProps.roll;
    
    // current sphere props
    const currentSphereProps = yt_getSphericalProps();
    let panCurrent = currentSphereProps.yaw;
    let tiltCurrent = currentSphereProps.pitch;
    let zoomCurrent = currentSphereProps.fov;
    let rotateCurrent = currentSphereProps.roll;


    // calculate the pan increment (make sure we go the shortest route)
    let panDiff = panTarget - panCurrent;
    if(panDiff >= 180){
        panDiff = (panTarget - 360) - panCurrent;
    }
    else if(panDiff <= -180){
        panDiff = (panTarget + 360) - panCurrent;
    }
    const panIncrement = panDiff/flyToNumIncrements;
    
    
    // calculate the tilt increment
    let tiltDiff = tiltTarget - tiltCurrent;
    const tiltIncrement = tiltDiff/flyToNumIncrements;
    
    // calculate the zoom increment
    let zoomDiff = zoomTarget - zoomCurrent;
    const zoomIncrement = zoomDiff/flyToNumIncrements;
    
    // calculate the rotate increment
    let rotateDiff = rotateTarget - rotateCurrent;
    const rotateIncrement = rotateDiff/flyToNumIncrements;


    // create a temp sphereProps object (otherwise we might overwrite the one stored in our Asset)
    // and set the first values for our first update
    let spherePropsTemp = {};
    panCurrent = panCurrent + panIncrement;
    tiltCurrent = tiltCurrent + tiltIncrement;
    zoomCurrent = zoomCurrent + zoomIncrement;
    rotateCurrent = rotateCurrent + rotateIncrement;

    // move the camera
    for(i=0; i < flyToNumIncrements; i++){

        if(panCurrent >= 360){
            panCurrent = panCurrent - 360;
        }
        else if(panCurrent <= 0){
            panCurrent = panCurrent + 360;
        }

        spherePropsTemp["yaw"] = panCurrent;
        spherePropsTemp["pitch"] = tiltCurrent;
        spherePropsTemp["fov"] = zoomCurrent;
        spherePropsTemp["roll"] = rotateCurrent;

        yt_setSphericalProps(spherePropsTemp);

        await sleep(flyToSleepTime);

        panCurrent = panCurrent + panIncrement;
        tiltCurrent = tiltCurrent + tiltIncrement;
        zoomCurrent = zoomCurrent + zoomIncrement;
        rotateCurrent = rotateCurrent + rotateIncrement;

    }

    yt_setSphericalProps(sphereProps);

    flyingCurrently = false;

}


// zooms out the current view
function zoomOut(event, sphereProps){

    const currentZoom = sphereProps.fov;
    let newZoom;
    let newRoll;

    // if the zoom is all the way out already don't do anything
    if(currentZoom >= 119){
        // return;
        newZoom = latestFov;
        newRoll = latestRoll;
    }
    else{
        newZoom = 120;
        newRoll = 0;
    }
    
    // make a deep copy of sphere props with the FOV set to 120 and roll set to 0
    const newSphereProps = {
        "yaw": sphereProps.yaw,
        "pitch": sphereProps.pitch,
        "fov": newZoom,
        "roll": newRoll
    }
    
    flyToNewView(newSphereProps);

}


function il_setZoomAndRollProps(initialCameraPosition){
    latestFov = initialCameraPosition.fov;
    latestRoll = initialCameraPosition.roll;
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




