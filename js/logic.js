// *****************************************************
// GLOBAL VARIABLES
// *****************************************************

let prevBgndAsset;


// *****************************************************
// INITIALIZATION
// *****************************************************
let iconControls = document.getElementsByClassName('icon-control');
let body = document.body;


for(let i=0; i < iconControls.length; i++){    
    iconControls[i].src = (i%2 === 0) ? loveImg : wolfImg;
    // iconControls[i].style.backgroundImage = `url('${loveImg}')`;
}


// SET THE YOUTUBE VIDEO SYNC CALLBACK
yt_setUpdateUIFromVideoTimeCallback(updateUIFromVideoTime);



// *****************************************************
// FUNCTIONS
// *****************************************************
// this is where we update the UI elements according to the videos playback time
function updateUIFromVideoTime(time){
    const beatIndex = Math.round(yt_getBeatIndexFromVideoTime(time))-1;

    for(let i=0; i < iconControls.length; i++){
        if(i === (beatIndex % 4)){
            iconControls[i].src = loveImg;
        }
        else{
            iconControls[i].src = wolfImg;
        }
    }


    if(beatIndex <= 0){
        updateBackground(0);
        return;
    }
    else if(beatIndex >= bgndSync.length){
        updateBackground(bgndSync.length-1);
        return;
    }

    updateBackground(beatIndex);




    // console.log("updating ui elements", time, "\nbeats", beatIndex);
}



function updateBackground(beatIndex){

    let index = beatIndex;
    // console.log(beatIndex);

    while(typeof(bgndSync[index]) === "number"){
        // console.log("decrementing");
        index--;
    }

    const bgndAssetName = bgndSync[index];
    const bgndAsset = bgndAssets[bgndAssetName];

    if(bgndAsset === prevBgndAsset){
        return;
    }
    else{
        // console.log(bgndAsset);
    }

    body.style.backgroundImage = `url('${bgndAsset.imgUrl}')`;
    body.style.backgroundColor = bgndAsset.bgndColor;
    body.style.backgroundSize = bgndAsset.bgndSize;   


    prevBgndAsset = bgndAsset;
}




