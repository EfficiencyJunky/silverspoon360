const bpm = 145;
const secondsPerBeat = 60/bpm;

const beat = 1;
const bar = beat*4;
const line = bar*4;
const line_half = line/2;
const stanza = line*4;
const stanza_half = stanza/2;

const intro_leadin = 0;
const intro_chorus = stanza_half;
const verse_1 = stanza;
const preChorus_1 = stanza + stanza_half;


// 360 test
const youTubeID = "8rz-wMLgxrU";


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
};


let testButton02 = document.getElementById('test-button-02');
testButton02.onclick = function(){

    
    const newView = JSON.parse(textArea.value);


    console.log(newView);
    // const sphereProps = {yaw: 319.1234461571927, pitch: 9.632983766328449, roll: 0, fov: 100.00004285756798};
    _player.setSphericalProperties(newView);
    
};