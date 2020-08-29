yt_setUpdateUIFromVideoTimeCallback(updateUIFromVideoTime);

const loveImg = "../img/love.png";
const wolfImg = "../img/wolf.png";
const blackSparkles = "https://web.archive.org/web/20091019190805/http://www.geocities.com/srparm69/yellowsparklebg.gif";
const yellowSparkles = "https://web.archive.org/web/20091027030741/http://it.geocities.com/fr_erotica/imagini/gold-05.gif";
const fallingMoney = "https://web.archive.org/web/20090901165646/http://www.geocities.com/militantinvestor/falling_money.gif";
const fallingMoney2 = "https://web.archive.org/web/20090830141356/http://www.geocities.com/aznbmxerboi/falling_bills_md_blk_1_.gif";
const fallingMoney3 = "https://web.archive.org/web/20090902152207/http://geocities.com/taeoo24/falling_bills_md_wht.gif";
const greenMoney = "https://web.archive.org/web/20091019160432/http://www.geocities.com/lmbeharry/index/money.gif";
const confetti = "https://web.archive.org/web/20091027025602/http://us.geocities.com/joannewww/jwbgs/animbg/jwconfetti.gif";
const silverSpoon = "https://web.archive.org/web/20090829234252/http://geocities.com/Athens/Oracle/5207/anispoon.gif"




let iconControls = document.getElementsByClassName('icon-control');
let body = document.body;


for(let i=0; i < iconControls.length; i++){
    
    iconControls[i].src = (i%2 === 0) ? loveImg : wolfImg;
    // iconControls[i].style.backgroundImage = `url('${loveImg}')`;
}




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

    if(beatIndex % 4 === 0 && beatIndex <= 4*16-1){
        body.style.backgroundImage = `url('${blackSparkles}')`;
    }
    else if(beatIndex % 4 === 0 && beatIndex <= 8*16-1){
        body.style.backgroundImage = `url('${greenMoney}')`;
        body.style.backgroundColor = "green";
    }
    else if(beatIndex % 4 === 0 && beatIndex <= 12*16-1){
        body.style.backgroundImage = `url('${fallingMoney}')`;
        body.style.backgroundColor = "black";
        body.style.backgroundSize = "600px 400px";
    }
    else if(beatIndex % 4 === 0 && beatIndex <= 16*16-1){
        body.style.backgroundImage = `url('${greenMoney}')`;
        body.style.backgroundColor = "green";
        body.style.backgroundSize = "initial";
    }
    else if(beatIndex % 4 === 0 && beatIndex <= 16*16-1 + 4*2 + 1){
        body.style.backgroundImage = `url('${fallingMoney2}')`;
        body.style.backgroundColor = "green";
        body.style.backgroundSize = "600px 400px";        
    }
    else if(beatIndex % 4 === 3 && beatIndex >= 16*16-1 + 4*2 + 1 && beatIndex <= 16*16-1 + 4*3 + 1){
        body.style.backgroundImage = `url('${confetti}')`;
        body.style.backgroundColor = "white";
        body.style.backgroundSize = "initial";
    }       
    else if(beatIndex % 4 === 0 && beatIndex >= 16*16-1 + 4*4 + 1 && beatIndex <= 20*16-1){
        body.style.backgroundImage = `url('${fallingMoney2}')`;
        body.style.backgroundColor = "black";
        body.style.backgroundSize = "600px 400px";
    }    
    else if(beatIndex % 4 === 0 && beatIndex >= 20*16-1 && beatIndex <= 24*16-1){
        body.style.backgroundImage = `url('${yellowSparkles}')`;
        body.style.backgroundColor = "black";
        body.style.backgroundSize = "initial";
    }
    else if(beatIndex % 4 === 0 && beatIndex >= 20*16-1 && beatIndex <= 28*16-1){
        body.style.backgroundImage = `url('${blackSparkles}')`;
        body.style.backgroundColor = "black";
    }
    else if(beatIndex % 4 === 2 && beatIndex >= 28*16-1 ){
        body.style.backgroundImage = `url('${silverSpoon}')`;
        body.style.backgroundColor = "black";
    }

    // console.log("updating ui elements", time, "\nbeats", beatIndex);
}








