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
        sphereProps = leadAssets[img.alt].sphereProps;
    }
    else{
        console.log("not revealed");
        return;
    }
    
    console.log("revealed", img.alt);

    yt_setSphericalProps(sphereProps);


}