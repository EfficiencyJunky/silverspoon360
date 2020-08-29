// *****************************************************
// GLOBAL MUTABLE VARIABLES
// *****************************************************

let prevBgndAsset;
let sphereProps;

let testButton01 = document.getElementById('test-button-01');
testButton01.onclick = function(){

    sphereProps = _player.getSphericalProperties();
    console.log(sphereProps);
};


let testButton02 = document.getElementById('test-button-02');
testButton02.onclick = function(){

    sphereProps.fov = 1000;
    // const sphereProps = {yaw: 319.1234461571927, pitch: 9.632983766328449, roll: 0, fov: 100.00004285756798};
    _player.setSphericalProperties(sphereProps);
    
};

// *****************************************************
// INITIALIZATION
// *****************************************************
let rthmIcons = document.getElementById('rhythm-icons-row').getElementsByClassName('icon-control');
let rthmIconDivs = document.getElementById('rhythm-icons-row').getElementsByClassName('icon-div');



// let rthmIcons = document.getElementsByClassName('icon-control');
let leadIcons = document.getElementById('lead-icons-row').getElementsByClassName('icon-control');
let body = document.body;


for(let i=0; i < rthmIcons.length; i++){    

    const key = rthmIcons[i].alt;

    rthmIcons[i].src = rthmAssets[key].imgUrl;
    
    // rthmIcons[i].style.backgroundSize = bgndAsset.bgndSize;      
    // console.log(rthmIcons[i].alt);
    
}

// console.log(rthmIconDivs);

// rthmIconDivs[0].style.backgroundColor = rthmAssets.wolf.bgndColor;



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
        updateRthmIconsRow(0);
        updateBackground(0);
        return;
    }
    else if(beatIndex >= bgndSync.length){
        updateBackground(bgndSync.length-1);
        return;
    }

    updateRthmIconsRow(beatIndex);
    updateBackground(beatIndex);




    // console.log("updating ui elements", time, "\nbeats", beatIndex);
}



function updateRthmIconsRow(beatIndex){


    // console.log("updatingRhythmIconsRow")

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
        // console.log(bgndAsset);
        body.style.backgroundImage = `url('${bgndAsset.imgUrl}')`;
        body.style.backgroundColor = bgndAsset.bgndColor;
        body.style.backgroundSize = bgndAsset.bgndSize;        
    }

    prevBgndAsset = bgndAsset;
}




