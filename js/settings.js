// SCALE INITIAL VIDEO SIZE FROM WINDOW SIZE
const wWidth = window.innerWidth;
const wHeight = window.innerHeight;

const windowScaleFactor = getWindowScaleFactor(wWidth, wHeight);

function getWindowScaleFactor(newWWidth, newWHeight){
    const scaleFact =   (newWHeight >= 950) && (newWWidth >= 1200) ? 2 :
                        (newWHeight >= 840) && (newWWidth >= 900) ? 1.6 :
                        (newWHeight >= 700) && (newWWidth >= 750) ? 1.2 :
                        (newWHeight >= 650) && (newWWidth >= 575) ? 1.0 : 
                        (newWHeight >= 600) && (newWWidth >= 480) ? 0.85 :
                        (newWHeight > 490) && (newWWidth > 360) ? 0.70 : 0.58;
    return scaleFact;
}

// a function that allows an async function to sleep for a number of ms
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// icon blue
const videoPlayerControlsColor = "#00A2FF";
const videoPlayerControlsHoverColor = "#0078bd";

// icon gold
// const videoPlayerControlsColor = "#ffd700";
// const videoPlayerControlsHoverColor = "#daa520";


// the base color for our basic icons
const iconColor = videoPlayerControlsColor;

// the hover settings for our basic icons
const iconHoverClass = 'icon-hover';
const iconHoverColor = videoPlayerControlsHoverColor;

// FOR IMAGE HOVER ON BASIC ICONS
// uncomment these lines if we want our icons to have a hover that is made from an image
// const iconBgndImageHoverOverlay = 'rgba(170, 170, 170, 0.4)';
// const iconBgndImageURL = '../img/lead/love.png';

// the class to add a hover effect for our icons with images (the people)
const iconImageHoverClass = 'icon-image-hover';

// icon styles for different breakpoints
const iconStylesForXtraSmallScreens = `margin:12px 12px;
                                       height: 52px;
                                       width: 52px;
                                      `

const iconStylesForSmallScreens = `margin:13px 13px;
                                   height: 55px;
                                   width: 55px;
                                  `
                                  
const iconStylesForRegularScreens = `margin:15px 15px;
                                     height: 60px;
                                     width: 60px;
                                    `

const iconStylesForLargeScreens = `margin:18px 18px;
                                   height: 70px;
                                   width: 70px;
                                  `
                                  
const iconStylesForXtraLargeScreens = `margin:20px 20px;
                                       height: 80px;
                                       width: 80px;
                                      `                                            

console.log("innerHeight:", wHeight);
console.log("innerWidth:", wWidth);
console.log("window scale factor:", windowScaleFactor);


// *******************************************
// YOUTUBE PLAYER PARAMETERS
// *******************************************
const baseVideoWidth = 500;

let videoWidth = baseVideoWidth * windowScaleFactor; // make sure the "transport-controls" element is set to the same width
let videoHeight =  Math.round(videoWidth * 0.5625); // 450 * 0.5625 == 253 just so you know

// Silverspoon 2D
// const youTubeID = "dw2s4GqbXZM";

// Silverspoon 360
// const youTubeID = "ZjIdHVr1MzI"; // NEVER USE THIS ONE
const youTubeID = "HjaqZ2JQeXg";
// const youTubeID = "jesDXnhoARk";

// Learn about the playerVars that can be used for this "youTubePlayerOptions" object here: https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5
let youTubePlayerOptions = { 
    // 'autoplay': 1, 
    'controls': 0, // This parameter indicates whether the video player controls are displayed
    'disablekb': 1, // disables keyboard control
    'modestbranding': 1, // This parameter lets you use a YouTube player that does not show a YouTube logo
    'playsinline': 1, // prevents full screen when pressing play on mobile
    'fs': 0, // prevents fullscreen button (doesn't matter if 'controls' is set to 0)
    'origin': "https://silverspoon360.com",
    'widget_referrer': "https://silverspoon360.com",
    'rel': 0 // if the rel parameter is set to 0, related videos will come from the same channel as the video that was just played.
};



// Learn about the playerVars that can be used for this "youTubePlayerOptions" object here: https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5
// let youTubePlayerOptions = { 
//     // 'autoplay': 1, 
//     'controls': 0, 
//     'disablekb': 1,
//     'modestbranding': 1,
//     'playsinline': 1, // prevents full screen when pressing play on mobile
//     'fs': 0, // prevents fullscreen button (doesn't matter if 'controls' is set to 0)
//     'origin': "https://silverspoon360.com",
//     'widget_referrer': "https://silverspoon360.com",
//     'rel': 0
// };


const bpm = 145;
const secondsPerBeat = 60/bpm;
const displayUpdatesPerBeat = 4;





const iconDivFlashInterval = 150;
const numTimesToFlashDiv = 4;
let iconDivFlashTimerID;
let iconDivToFlash;
let timesIconDivFlashed = 0;
let flashing;




const flyToTimeMS = 300;
const flyToNumIncrements = 25;
// const flyToNumIncrements = 75;
const flyToSleepTime = Math.round(flyToTimeMS/flyToNumIncrements);
let flyingCurrently = false;




const barrelRollTimeMS = 300;
const barrelRollDegreesPerUpdate = 4;
let clockwise = true;
let rollingCurrently = false;
let starfoxUnlocked = false;



