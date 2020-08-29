yt_setUpdateUIFromVideoTimeCallback(updateUIFromVideoTime);

let loveImg = "../img/love.png";
let wolfImg = "../img/wolf.png";

let iconControls = document.getElementsByClassName('icon-control');

for(let i=0; i < iconControls.length; i++){
    iconControls[i].src = `${loveImg}`;
    // iconControls[i].style.backgroundImage = `url('${loveImg}')`;
}




// *****************************************************
// FUNCTIONS
// *****************************************************
// this is where we update the UI elements according to the videos playback time
function updateUIFromVideoTime(time){

    console.log("updating ui elements", time);

}








