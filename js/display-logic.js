// *****************************************************
// GLOBAL MUTABLE VARIABLES
// *****************************************************

let prevBgndAsset;
let prevHighlightIconName;
let sphereProps;





// *****************************************************
// INITIALIZATION
// *****************************************************
let rthmIcons = document.getElementById('rhythm-icons-row').getElementsByClassName('icon-control');
let iconDivs = document.getElementsByClassName('icon-div');

// let rthmIcons = document.getElementsByClassName('icon-control');
let leadIcons = document.getElementById('lead-icons-row').getElementsByClassName('icon-control');
let body = document.body;

// set initial images for rhythm icons
for(let i=0; i < rthmIcons.length; i++){    

    const key = rthmIcons[i].alt;

    rthmIcons[i].src = rthmAssets[key].imgUrl;
    
    // rthmIcons[i].style.backgroundSize = bgndAsset.bgndSize;      
    // console.log(rthmIcons[i].alt);
}

// console.log(rthmIconDivs);

// rthmIconDivs[0].style.backgroundColor = rthmAssets.wolf.bgndColor;

// set initial images for lead icons
for(let i=0; i < leadIcons.length; i++){    
    leadIcons[i].src = sharedAssets.locked.imgUrl;    
}




// SET THE YOUTUBE VIDEO SYNC CALLBACK
yt_setUpdateUIFromVideoTimeCallback(updateUIFromVideoTime);



// *****************************************************
// FUNCTIONS
// *****************************************************
// this is where we update the UI elements according to the videos playback time
function updateUIFromVideoTime(time){
    const beatIndex = Math.round(yt_getBeatIndexFromVideoTime(time))-1;

    if(beatIndex <= 0){
        updateIconHighlight(0);
        updateBackground(0);
        return;
    }
    else if(beatIndex >= bgndSync.length){
        updateBackground(bgndSync.length-1);
        return;
    }

    updateIconHighlight(beatIndex);
    updateBackground(beatIndex);




    // console.log("updating ui elements", time, "\nbeats", beatIndex);
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



    if(highlightIconName === prevHighlightIconName){
        return;
    }
    else{
        // console.log(bgndAsset);
        for(let i=0; i < iconDivs.length; i++){

            let iconDiv = iconDivs[i];
            let imgAltText = iconDiv.getElementsByTagName('img')[0].alt

            if(imgAltText === highlightIconName){
                console.log("hightligh", imgAltText);

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





    // for(let i=0; i < rthmIcons.length; i++){
    //     if(i === (beatIndex % 4)){
    //         rthmIcons[i].src = rthmAssets.wolf.imgUrl;
    //     }
    //     else{
    //         rthmIcons[i].src = leadAssets.love.imgUrl;
    //     }
    // }









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




