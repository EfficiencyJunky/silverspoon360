// *****************************************************
// GLOBAL MUTABLE VARIABLES
// *****************************************************

let prevBgndAsset;
let prevHighlightIconName;
let sphereProps;
let dontUpdateHighlightIcon = false;

// first page load variables
let pageFirstLoad = true;
const initialCameraPosition = specialAssets.bonus.sphereProps[0];



// *****************************************************
// INITIALIZATION
// *****************************************************

window.onresize = adjustUIDimensions;

let body = document.body;
let rthmIcons = document.getElementById('rhythm-icons-row').getElementsByClassName('icon-control');
let leadIconsRowDiv = document.getElementById('lead-icons-row');
let leadIcons = leadIconsRowDiv.getElementsByClassName('icon-control');
// gets the entire div for all iconDivs so that we can flash the background color red to call attention to it
let iconDivs = document.getElementsByClassName('icon-div');


let specialIconsRowDiv = document.getElementById('special-icons-row');
let starfoxImg = document.getElementById('starfox').getElementsByClassName('icon-control')[0];
let bonusImg = document.getElementById('bonus').getElementsByClassName('icon-control')[0];

let ftueIconText = document.getElementsByClassName('ftue-icon-text')[0];
ftueIconText.hidden = true;
let ftue = true;
const show_ftue = intro_chorus - line;

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
    // leadAsset.imgElement.src = leadAssets[iconName].imgUrl;
    leadAsset.imgElement.src = specialAssets.locked.imgUrl;

}


starfoxImg.src = specialAssets.starfox.imgUrl;
bonusImg.src = specialAssets.bonus.imgUrl;



// SET THE YOUTUBE VIDEO SYNC CALLBACK
yt_setUpdateUIFromVideoTimeCallback(updateUIFromVideoTime);

// this will tell the display to update but not update the video player
adjustUIDimensions(undefined, updateVideoPlayer = false);

// this will update the video player transport controls colors
yt_setTransportControlsColors(videoPlayerControlsColor, videoPlayerControlsHoverColor);

// this will create the CSS for the hover color for our icons

if(typeof(iconBgndImageURL) !== "undefined" && iconBgndImageURL !== false){
    createIconHoverColorCSS(iconHoverClass, iconBgndImageHoverOverlay, iconBgndImageURL);
}
else{
    createIconHoverColorCSS(iconHoverClass, iconHoverColor);
}

// *****************************************************
// FUNCTIONS
// *****************************************************
// this is where we update the UI elements according to the videos playback time
function updateUIFromVideoTime(time){
    const timeWithOffset = (time + video_start_time_offset >= 0) ? time + video_start_time_offset : 0;

    const beatIndex = yt_getBeatIndexFromVideoTime(timeWithOffset) - 1;

    if(beatIndex <= 0){
        if(pageFirstLoad){
            yt_setSphericalProps(initialCameraPosition);
            il_setZoomAndRollProps(initialCameraPosition);
            pageFirstLoad = false;
        }
        updateIconHighlight(0);
        updateBackground(0);
        updateLeadRowIcons(0);
        return;
    }
    else if(beatIndex >= end_of_video){        
        updateBackground(bgndSync.length-1);
        if(!starfoxUnlocked){
            unlockStarfox();
            yt_setPlaybackRateButtonVisibility(setHidden = false);
            $('#congrats-modal').modal('show');
            starfoxUnlocked = true;
        }
        // updateIconHighlight(highlightSync.length-1);
        return;
    }
    // this presents the FTUE "click" text from flashing if the person seeks to a later part of the video before the FTUE has a chance to show itself
    else if(beatIndex >= show_ftue && ftue){
        ftue = false;
        ftueIconText.hidden = true;
    }
    
    updateLeadRowIcons(beatIndex);
    updateIconHighlight(beatIndex);
    updateBackground(beatIndex);


    // console.log("updating ui elements", time, "\nbeats", beatIndex);
}


function adjustUIDimensions(event, updateVideoPlayer = true){

    const newWHeight = window.innerHeight;
    const newWWidth = window.innerWidth;

    

    const newWScaleFactor = getWindowScaleFactor(newWWidth, newWHeight);
    
    // console.log("w:h:sf", newWWidth, newWHeight, newWScaleFactor);
    // console.log("w:h", newWWidth, newWHeight);

    // scale video
    videoWidth = baseVideoWidth * newWScaleFactor; // make sure the "transport-controls" element is set to the same width
    videoHeight =  Math.round(videoWidth * 0.5625); // 450 * 0.5625 == 253 just so you know


    if(updateVideoPlayer){
        yt_setVideoPlayerSize(videoWidth, videoHeight);
    }

    // scale icons
    let iconStylesForNewWindowSize;
    if(newWScaleFactor <= 0.85){
        iconStylesForNewWindowSize = iconStylesForXtraSmallScreens;
    }
    else if(0.85 < newWScaleFactor && newWScaleFactor <= 1.0){
        iconStylesForNewWindowSize = iconStylesForSmallScreens;
    }
    else if(1.0 < newWScaleFactor && newWScaleFactor <= 1.2){
        iconStylesForNewWindowSize = iconStylesForRegularScreens;
    }
    else if(1.2 < newWScaleFactor && newWScaleFactor <= 1.6){
        iconStylesForNewWindowSize = iconStylesForLargeScreens;
    }
    else{
        iconStylesForNewWindowSize = iconStylesForXtraLargeScreens;
    }


    let allIconImgs = document.getElementsByClassName('icon-control');
        
    for(let i=0; i < allIconImgs.length; i++){   

        // get the value of the <img> "alt" property and use that as the iconName
        const iconName = allIconImgs[i].alt;

        // initialize the background color variable
        let bgndColor;
        let hoverClass;

        // we need to check which kind of asset it is and set it's background color accordingly
        if(Object.keys(leadAssets).includes(iconName)){
            // if the asset is revealed, use it's color
            // else use the color for the "locked" specialAsset
            if(leadAssets[iconName].revealed){
                bgndColor = leadAssets[iconName].bgndColor;
                hoverClass = leadAssets[iconName].hoverClass;
            }
            else{
                bgndColor = specialAssets.locked.bgndColor;
                hoverClass = specialAssets.locked.hoverClass;
            }            
        }
        else if(Object.keys(rthmAssets).includes(iconName)){
            bgndColor = rthmAssets[iconName].bgndColor;
            hoverClass = rthmAssets[iconName].hoverClass;
        }
        else if(Object.keys(specialAssets).includes(iconName)){
            bgndColor = specialAssets[iconName].bgndColor;
            hoverClass = specialAssets[iconName].hoverClass;
        }

        // set the styles accordingly
        allIconImgs[i].setAttribute("style", iconStylesForNewWindowSize);
        allIconImgs[i].style.backgroundColor = bgndColor;

        // add the hover color class so the icons will have a hover color
        if(hoverClass){    
            allIconImgs[i].classList.add(hoverClass);
        }     
    }

}



function createIconHoverColorCSS(hoverClass, hoverColor, bgndImageURL = false){

    var css =
    `
    .${hoverClass}:hover  {
        background-color: ${hoverColor} !important;
    }
    `;

    // IF WE WANT TO USE A BACKGROUND IMAGE
    if(bgndImageURL){
        
        var css =
        `
        .${hoverClass}:hover  {
            background-image:
                linear-gradient(
                    ${hoverColor}, 
                    ${hoverColor}
                ),
                url(${bgndImageURL}) !important;
        }
        `;
    }

    // console.log(css);

    let style = document.createElement('style');
    
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    
    document.getElementsByTagName('head')[0].appendChild(style);    


}





// This function will update the icons in the "lead" row based on the beatIndex provided
// it will look at each of the "leadAssets" and check to see whether they should be revealed
// or if they are alredy in their revealed state
function updateLeadRowIcons(beatIndex){

    
    const leadAssetsKeys = Object.keys(leadAssets);

    let assetsToUpdate = leadAssetsKeys.filter( (key, i) => {

        const asset = leadAssets[key];

        // don't update if the beatindex is before the asset's reveal time
        if(beatIndex < asset.revealIndex){               
            return false;
        }
        // don't update if the asset is already revealed
        else if(asset.revealed){
            return false;
        }
        // otherwise, do update
        else{
            // console.log(asset);
            return true;
        }

    });

    // if there are no asssets to update don't continue
    if(assetsToUpdate.length === 0){
        return;
    }

    
    assetsToUpdate.forEach(key => {
        
        leadAssets[key].imgElement.src = leadAssets[key].imgUrl;
        leadAssets[key].imgElement.style.backgroundColor = leadAssets[key].bgndColor;
        
        // if the asset has a hover animation, add the hover class 
        // so this animation is set
        if(leadAssets[key].hoverClass){   
            leadAssets[key].imgElement.classList.add(leadAssets[key].hoverClass);
        }
        leadAssets[key].revealed = true;
    });


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

            if(ftue){
                ftueIconText.hidden = false;
            }
        }
        else{
            iconDivToFlash.style.backgroundColor = "initial";
            
            if(ftue){
                ftueIconText.hidden = true;
            }            
        }
    }

    
    if( (timesIconDivFlashed >= numTimesToFlashDiv * 2) && (timesIconDivFlashed % 2 === 0)){
        flashing = false;
    }
    else if(timesIconDivFlashed > numTimesToFlashDiv * 6){
        clearFlashingIconDivAndTimer();
        if(ftue){
            ftueIconText.hidden = true;
            ftue = false;
        }             

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


function unlockStarfox(){
    console.log("unlocking Starfox");
    leadIconsRowDiv.classList.add("flex-column");
    specialIconsRowDiv.setAttribute("style", "display: flex !important");
}
