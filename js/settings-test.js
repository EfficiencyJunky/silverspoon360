const bpm = 145;
const secondsPerBeat = 60/bpm;

const beat = 1;
const bar = beat*4;
const line = bar*4;
const line_half = line/2;
const stanza = line*4;
const stanza_half = stanza/2;

// beginnings of each section in beat indexes
const intro_leadin = 9;
const intro_chorus = stanza_half + intro_leadin;
const verse_1 = intro_chorus + stanza_half;
const preChorus_1 = verse_1 + stanza_half;
const chorus_1 = preChorus_1 + stanza_half;

const verse_2 = chorus_1 + stanza;
const preChorus_2 = verse_2 + stanza_half;
const chorus_2 = preChorus_2 + stanza_half;

const bridge = chorus_2 + stanza;
const trombone = bridge + stanza_half;

const chorus_3 = trombone + stanza_half;

const outro = chorus_3 + stanza;






// 360 test
const youTubeID = "ZjIdHVr1MzI";


// Learn about the playerVars that can be used for this "youTubePlayerOptions" object here: https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5
// let youTubePlayerOptions = {};
let youTubePlayerOptions = { 
    // 'autoplay': 1, 
    'controls': 0, // This parameter indicates whether the video player controls are displayed
    'disablekb': 1, // disables keyboard control
    'modestbranding': 1, // This parameter lets you use a YouTube player that does not show a YouTube logo
    // 'playsinline': 1, // prevents full screen when pressing play on mobile
    'enableOrientationSensor': true,
    // 'fs': 0, // prevents fullscreen button (doesn't matter if 'controls' is set to 0)
    // 'origin': "https://silverspoon360.com",
    // 'widget_referrer': "https://silverspoon360.com",
    'rel': 0 // if the rel parameter is set to 0, related videos will come from the same channel as the video that was just played.
};


// attempting to get it to work on mobile
// let youTubePlayerOptions = { 
//     'enableOrientationSensor': true
// };


let textArea = document.getElementById('sphere-props-debug');

let testButton01 = document.getElementById('test-button-01');
testButton01.onclick = function(){

    sphereProps = _player.getSphericalProperties();
    
    textArea.value = JSON.stringify(sphereProps, null, 4);
    console.log(sphereProps);
    console.log("beatindex", yt_getBeatIndexFromVideoTime() - 1);
};


let testButton02 = document.getElementById('test-button-02');
testButton02.onclick = function(){

    
    const newSphereProps = JSON.parse(textArea.value);


    console.log(newSphereProps);
    console.log("beatindex", yt_getBeatIndexFromVideoTime() - 1);


    // const sphereProps = {yaw: 319.1234461571927, pitch: 9.632983766328449, roll: 0, fov: 100.00004285756798};
    _player.setSphericalProperties(newSphereProps);
    
};



const iconDivFlashInterval = 150;
const numTimesToFlashDiv = 4;
let iconDivFlashTimerID;
let iconDivToFlash;
let timesIconDivFlashed = 0;
let flashing;



const barrelRollTimeMS = 300;
const barrelRollDegreesPerUpdate = 4;
let clockwise = true;
let rollingCurrently = false;
let starfoxUnlocked = false;




const flyToTimeMS = 300;
const flyToIncrements = 75;
const flyToSleepTime = Math.round(flyToTimeMS/flyToIncrements);

let flyingCurrently = false;





// a function that allows an async function to sleep for a number of ms
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}    