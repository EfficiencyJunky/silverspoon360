// let rhythmButtons = document.getElementById('rhythm-icons-row').getElementsByClassName('icon-div');
let rhythmButtons = document.getElementById('rhythm-icons-row');
let leadButtons = document.getElementById('lead-icons-row');


rhythmButtons.onclick = rhythmButtonsClickHandler;
leadButtons.onclick = leadButtonsClickHandler;


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
    }
    else{
        console.log("not revealed");
        return;
    }

    yt_setSphericalProps(sphereProps);


}