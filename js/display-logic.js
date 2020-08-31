// *****************************************************
// GLOBAL MUTABLE VARIABLES
// *****************************************************

let prevBgndAsset;
let prevHighlightIconName;
let sphereProps;
let dontUpdateHighlightIcon = false;

const initialCameraPosition = _getSpherePropsFromAsset(rthmAssets.drums);



// *****************************************************
// INITIALIZATION
// *****************************************************
let body = document.body;
let rthmIcons = document.getElementById('rhythm-icons-row').getElementsByClassName('icon-control');
let leadIcons = document.getElementById('lead-icons-row').getElementsByClassName('icon-control');

// gets the entire div for all iconDivs so that we can flash the background color red to call attention to it
let iconDivs = document.getElementsByClassName('icon-div');


let specialIconsRowDiv = document.getElementById('special-icons-row');
let starfoxImg = document.getElementById('starfox').getElementsByClassName('icon-control')[0];
let bonusImg = document.getElementById('bonus').getElementsByClassName('icon-control')[0];


// initialize rthAssets and load rthmIcon "<img>" element into rthmAssets.{asset}.imgElement
for(let i=0; i < rthmIcons.length; i++){    

    // get the value of the <img> "alt" property and use that as the iconName
    const iconName = rthmIcons[i].alt;

    // grab the rthmAsset with the same name
    let rthmAsset = rthmAssets[iconName];

    // store the <img> element in the rthmAsset
    rthmAsset.imgElement = rthmIcons[i];

    // set the "src" property to the actual imageUrl
    // WE CURRENTLY AREN'T USING THIS FOR THE "rthmAssets" BUT MIGHT LATER
    rthmAsset.imgElement.src = rthmAsset.imgUrl;
}

// initialize leadAsset and load leadIcons "<img>" element into leadAsset.{asset}.imgElement
for(let i=0; i < leadIcons.length; i++){    
    
    // get the value of the <img> "alt" property and use that as the iconName
    const iconName = leadIcons[i].alt;

    // grab the leadAsset with the same name
    let leadAsset = leadAssets[iconName];

    // store the <img> element in the leadAsset
    leadAsset.imgElement = leadIcons[i];

    // set the "src" property to the "locked" gif in the "specialAssets" object
    leadAsset.imgElement.src = specialAssets.locked.imgUrl;
}

starfoxImg.src = specialAssets.starfox.imgUrl;
bonusImg.src = specialAssets.bonus.imgUrl;


// SET THE YOUTUBE VIDEO SYNC CALLBACK
yt_setUpdateUIFromVideoTimeCallback(updateUIFromVideoTime);



// *****************************************************
// FUNCTIONS
// *****************************************************
// this is where we update the UI elements according to the videos playback time
function updateUIFromVideoTime(time){
    const beatIndex = yt_getBeatIndexFromVideoTime(time) - 1;

    if(beatIndex <= 0){

        yt_setSphericalProps(initialCameraPosition);
        updateIconHighlight(0);
        updateBackground(0);
        updateLeadRowIcons(0);
        return;
    }
    else if(beatIndex >= bgndSync.length){        
        updateBackground(bgndSync.length-1);
        if(!starfoxUnlocked){
            unlockStarfox();
            starfoxUnlocked = true;
        }
        // updateIconHighlight(highlightSync.length-1);
        return;
    }

    updateLeadRowIcons(beatIndex);
    updateIconHighlight(beatIndex);
    updateBackground(beatIndex);


    // console.log("updating ui elements", time, "\nbeats", beatIndex);
}

function unlockStarfox(){
    console.log("unlocking Starfox");
    specialIconsRowDiv.setAttribute("style", "display: flex !important");
}





// This function will update the icons in the "lead" row based on the beatIndex provided
// it will look at each of the "leadAssets" and check to see whether they should be revealed
// or if they are alredy in their revealed state
function updateLeadRowIcons(beatIndex){

    
    const leadAssetsKeys = Object.keys(leadAssets);

    let assetsToUpdate = leadAssetsKeys.filter( (key, i) => {

        const asset = leadAssets[key];

        if(beatIndex < asset.revealIndex){               
            return false;
        }
        else if(asset.revealed){
            return false;
        }
        else{
            // console.log(asset);
            return true;
        }

    });

    if(assetsToUpdate.length === 0){
        return;
    }

    
    assetsToUpdate.forEach(key => {
        
        leadAssets[key].imgElement.src = leadAssets[key].imgUrl;
        leadAssets[key].revealed = true;
    });


}




// because seeking around in the video throws all sorts of wrenches into things 
// due to the interval timer that updates the UI
// we need to tell the icon highlighting function to stop for a short period
// this function is called by the video-player.js
async function dl_suspendIconHighlightUpdateBriefly(sleepTime){

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



function updateIconHighlight(beatIndex){
    // save a reference to the beatIndex
    let index = beatIndex;
    // console.log(beatIndex);

    // if the item in the highlightSync array is a number
    // decrement the index until we find an Object
    while(typeof(highlightSync[index]) === "number"){
        index--;
    }

    // use that new index as the key for the highlightSync array to find the name of the icon we want to highlight
    const highlightIconName = highlightSync[index];



    if(highlightIconName === prevHighlightIconName || dontUpdateHighlightIcon){
        prevHighlightIconName = highlightIconName;
        return;
    }
    else{
        // console.log(bgndAsset);
        for(let i=0; i < iconDivs.length; i++){

            let iconDiv = iconDivs[i];
            let imgAltText = iconDiv.getElementsByTagName('img')[0].alt

            if(imgAltText === highlightIconName){
                // console.log("hightligh", imgAltText);

                if(iconDivFlashTimerID !== undefined){
                    clearFlashingIconDivAndTimer();
                }

                flashing = true;
                iconDivToFlash = iconDiv;
                iconDivFlashTimerID = window.setInterval( flashIconDiv, iconDivFlashInterval);
                
            }
        }

    }

    prevHighlightIconName = highlightIconName;

}


function flashIconDiv(){

    if(flashing){
        if(timesIconDivFlashed % 2 === 0){
            iconDivToFlash.style.backgroundColor = "red";
        }
        else{
            iconDivToFlash.style.backgroundColor = "initial";
        }
    }

    
    if( (timesIconDivFlashed >= numTimesToFlashDiv * 2) && (timesIconDivFlashed % 2 === 0)){
        flashing = false;
    }
    else if(timesIconDivFlashed > numTimesToFlashDiv * 6){
        clearFlashingIconDivAndTimer();
    }


    timesIconDivFlashed++;

}

function clearFlashingIconDivAndTimer(){


    iconDivToFlash.style.backgroundColor = "initial";
    iconDivToFlash = undefined;
    
    clearInterval(iconDivFlashTimerID);
    iconDivFlashTimerID = undefined;

    timesIconDivFlashed = 0;

    flashing = false;

}





// This function will update the background based on the beatIndex provided
// it will look into the bgndSync array with this index and find the appropriate background styling
function updateBackground(beatIndex){

    // save a reference to the beatIndex
    let index = beatIndex;
    // console.log(beatIndex);

    // if the item in the bgndSync array is a number
    // decrement the index until we find an Object
    while(typeof(bgndSync[index]) === "number"){
        index--;
    }

    // use that new index as the key for the bgndAssets object
    const bgndAssetName = bgndSync[index];
    const bgndAsset = bgndAssets[bgndAssetName];

    if(bgndAsset === prevBgndAsset){
        return;
    }
    else{
        // rthmIconDivs[0].style.backgroundColor = rthmAssets.wolf.bgndColor;
        body.style.backgroundImage = `url('${bgndAsset.imgUrl}')`;
        body.style.backgroundColor = bgndAsset.bgndColor;
        body.style.backgroundSize = bgndAsset.bgndSize;        
    }

    prevBgndAsset = bgndAsset;
}


