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





// Silverspoon 2D
// const youTubeID = "dw2s4GqbXZM";

// Silverspoon 360
const youTubeID = "ZjIdHVr1MzI";

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




const iconDivFlashInterval = 150;
const numTimesToFlashDiv = 4;
let iconDivFlashTimerID;
let iconDivToFlash;
let timesIconDivFlashed = 0;
let flashing;