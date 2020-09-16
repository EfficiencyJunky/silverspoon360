// VIDEO TIME SYNC AND PAN/TILT/ROLL/ZOOM OFFSETS
const video_start_time_offset = -0.1;
const intro_beat_offset = 0;
const yawOffset = -171;
const pitchOffset = 0;
const rollOffset = 0;
const fovOffset = 0;


// BEAT SYNCRONIZATION VALUES
const beat = 1;
const bar = beat*4;
const line = bar*4;
const line_half = line/2;
const stanza = line*4;
const stanza_half = stanza/2;


// beginnings of each section in beat indexes
const intro_chorus = intro_beat_offset + stanza_half;
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

//  use this when youTubeID = "HjaqZ2JQeXg"
const end_of_video = outro + bar*2;

//  use this when youTubeID = "jesDXnhoARk"
// const end_of_video = outro + line + bar + beat*3;




// **********************************************************************************
// SYNC ARRAY TEMPLATE
// **********************************************************************************
const sync = [
    // yellow and black
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // intro leadin 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // intro leadin 1.2
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // intro chorus 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // intro chorus 1.2
    // green money
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // verse 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // verse 1.2
    // green money + red money
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // pre-chorus 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // pre-chorus 1.1
    // falling money
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 1.2
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 1.3
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 1.4 // silver spoon
    // green money
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // verse 2.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // verse 2.2
    // green money + red money
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // pre-chorus 2.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // pre-chorus 2.2
    // falling money
    0,1,2,3,0,1,2,3,0,1,2,3,0 /*confetti*/,1,2,3, // chorus 2.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 2.2
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 2.3
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 2.4
    // yellow lights
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // bridge 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // bridge 1.2
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // solo 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // solo 1.2
    // yellow and black
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 3.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 3.2
    // falling money and crazy colors
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 3.3
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 3.4
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3  // outro chorus end with something fun
]





// **********************************************************************************
// BACKGROUND ANIMATION ASSETS AND SYNC ARRAY
// **********************************************************************************
const bgndAssets = {
    "sparkleBlack": {
        "imgUrl": "../img/gifs/sparkle_black.gif",
        "bgndColor": "initial",
        "bgndSize": "initial"
    },
    "sparkleYellow": {
        "imgUrl": "../img/gifs/sparkle_yellow.gif",
        "bgndColor": "yellow",
        "bgndSize": "360px 180px",
        "background-blend-mode": "multiply"
    },
    "dollarSpinGrn": {
        "imgUrl": "../img/gifs/dollar_sign_spin_transparent.gif",
        "bgndColor": "green",
        "bgndSize": "initial"
    },
    "dollarSpinRed": {
        "imgUrl": "../img/gifs/dollar_sign_spin_transparent.gif",
        "bgndColor": "red",
        "bgndSize": "initial"
    },
    "dollarSpinBlk": {
        "imgUrl": "../img/gifs/dollar_sign_spin_transparent.gif",
        "bgndColor": "black",
        "bgndSize": "initial"
    },
    "moneyFallV": {
        "imgUrl": "../img/gifs/money_falling_vertical_transparent.gif",
        "bgndColor": "black",
        "bgndSize": "324px 408px"
    },
    "moneyFallHblk": {
        "imgUrl": "../img/gifs/money_falling_horizontal_black.gif",
        "bgndColor": "initial",
        "bgndSize": "600px 240px"
    },
    "moneyFallHwht": {
        "imgUrl": "../img/gifs/money_falling_horizontal_white.gif",
        "bgndColor": "initial",
        "bgndSize": "initial"
    },
    "confetti": {
        "imgUrl": "../img/gifs/confetti_small_transparent.gif",
        "bgndColor": "white",
        "bgndSize": "initial"
    },
    "spoon": {
        "imgUrl": "../img/gifs/spoon_transparent.gif",
        "bgndColor": "black",
        "bgndSize": "initial"
    },

}

const bgndSync = [
    // yellow and black
    // "sparkleBlack",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,    0,1,2,3,0,1,2,3,0,      // intro leadin 1.1
    "sparkleBlack",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // intro leadin 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // intro leadin 1.2
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // intro chorus 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // intro chorus 1.2
    // green money
    "dollarSpinGrn",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // verse 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // verse 1.2
    // green money + red money
    "dollarSpinRed","dollarSpinGrn","dollarSpinRed",3, // pre-chorus 1.1.1
    "dollarSpinGrn",1,"dollarSpinRed",3, // pre-chorus 1.1.2
    "dollarSpinGrn",1,"dollarSpinRed",3, // pre-chorus 1.1.2
    "dollarSpinGrn",1,"dollarSpinRed",3, // pre-chorus 1.1.2
    "dollarSpinGrn",1,"dollarSpinRed",3, // pre-chorus 1.2.1
    "dollarSpinGrn",1,"dollarSpinRed",3, // pre-chorus 1.2.2
    "dollarSpinGrn",1,"dollarSpinRed",3, // pre-chorus 1.2.2
    "dollarSpinGrn",1,"dollarSpinRed",3, // pre-chorus 1.2.2
    // falling money
    "moneyFallHblk",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 1.2
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 1.3
    0,1,2,3,0,1,2,3,0,1,2,3,0,"spoon",2,3, // chorus 1.4 // silver spoon
    // green money
    0,1,"dollarSpinBlk",3,0,"dollarSpinGrn","dollarSpinBlk",3,"dollarSpinGrn",1,2,3,0,1,2,3, // verse 2.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // verse 2.2
    // green money + red money
    "dollarSpinRed","dollarSpinGrn","dollarSpinRed",3, // pre-chorus 2.1.1
    "dollarSpinGrn","dollarSpinGrn","dollarSpinRed",3, // pre-chorus 2.1.2
    "dollarSpinGrn","dollarSpinGrn","dollarSpinRed",3, // pre-chorus 2.1.2
    "dollarSpinGrn","dollarSpinGrn","dollarSpinRed",3, // pre-chorus 2.1.2
    "dollarSpinGrn","dollarSpinGrn","dollarSpinRed",3, // pre-chorus 2.2.1
    "dollarSpinGrn","dollarSpinGrn","dollarSpinRed",3, // pre-chorus 2.2.2
    "dollarSpinGrn","dollarSpinGrn","dollarSpinRed",3, // pre-chorus 2.2.2
    "dollarSpinGrn",1,"dollarSpinBlk",3, // pre-chorus 2.2.2
    // falling money
    "moneyFallHblk",1,2,3,          // chorus 2.1.1
    0,1,2,3,                        // chorus 2.1.2
    0,1,2,"confetti",                        // chorus 2.1.3
    0,1,2,3,               // chorus 2.1.4
    "moneyFallHblk",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 2.2
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 2.3
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 2.4
    // yellow lights
    "sparkleYellow",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // bridge 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // bridge 1.2
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // solo 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // solo 1.2
    // yellow and black
    "sparkleBlack",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 3.1
    0,1,2,3,0,1,2,3,0,1,2,"moneyFallHblk",0,1,2,3, // chorus 3.2
    // falling money and crazy colors
    "moneyFallHblk",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 3.3
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 3.4
    0,1,2,3,"spoon",1,2,3,0,1,2,"sparkleBlack",0,1,2,3,// chorus 3.4 extra turn 
    0,1,2,3,0,1,2,3,0  // + extra time
]






// **********************************************************************************
// SHARED AND RHYTHM ROW ASSETS
// **********************************************************************************
const specialAssets = {
    "locked": {
        "imgUrl": "../img/gifs/locked.gif",
        "bgndColor": "initial",
        "hoverClass": false
    },
    "starfox": {
        "imgUrl": "../img/gifs/starfox.gif",
        "bgndColor": "initial",
        "hoverClass": false
    },
    "bonus": {
        "imgUrl": "../img/gifs/bonus.gif",
        "bgndColor": "initial",
        "hoverClass": false,
        "imgElement": undefined,        
        "sphereProps": [
            {
                "yaw": 359,
                "pitch": -26,
                "roll": 0,
                "fov": 40
            },
            {
                "yaw": 83,
                "pitch": 9,
                "roll": 0,
                "fov": 35
            },
            // {
            //     "yaw": 150.58010058371224,
            //     "pitch": -5.716049165462029,
            //     "roll": 0,
            //     "fov": 120
            // }                        
        ],
        "spherePropsIndex": 0        
    }    
}


let rthmAssets = {
    "drums": {
        "imgUrl": "../img/rthm/drums.png",
        "bgndColor": iconColor,
        "hoverClass": iconHoverClass,
        "imgElement": undefined,
        "sphereProps": [
            {
                "yaw": 6,
                "pitch": -12,
                "roll": 0,
                "fov": 70
            },            
            {
                "yaw": 5.5,
                "pitch": -7,
                "roll": 0,
                "fov": 50
            },
            {
                "yaw": 6,
                "pitch": -12,
                "roll": 0,
                "fov": 70
            }                      
        ],
        "spherePropsBeatIndexes":[
            0,
            verse_1 - bar*2,
            verse_1 + beat*3
        ]        
    },    
    "bass": {
        "imgUrl": "../img/rthm/bass.png",
        "bgndColor": iconColor,
        "hoverClass": iconHoverClass,
        "imgElement": undefined,
        "sphereProps": [
            {
                "yaw": 131,
                "pitch": -30,
                "roll": 0,
                "fov": 80
            },
            {
                "yaw": 136,
                "pitch": -25,
                "roll": 0,
                "fov": 80
            },
            {
                "yaw": 133,
                "pitch": -31,
                "roll": 0,
                "fov": 80
            },
            {
                "yaw": 123,
                "pitch": -39,
                "roll": 0,
                "fov": 90
            },
            {
                "yaw": 124,
                "pitch": -36,
                "roll": 0,
                "fov": 95
            }
        ],
        "spherePropsBeatIndexes":[
            0,
            chorus_1 - 2*bar,
            bridge,
            chorus_3 + bar,
            chorus_3 + stanza_half
        ]        
    },        
    "keys": {
        "imgUrl": "../img/rthm/keys.png",
        "bgndColor": iconColor,
        "hoverClass": iconHoverClass,
        "imgElement": undefined,
        "sphereProps": {
            "yaw": 60,
            "pitch": -9,
            "roll": 0,
            "fov": 80
        }
    },       
    "uke": {
        "imgUrl": "../img/rthm/uke.png",
        "bgndColor": iconColor,
        "hoverClass": iconHoverClass,
        "imgElement": undefined,
        "sphereProps": [
            {
                "yaw": 221,
                "pitch": -11,
                "roll": 0,
                "fov": 110
            },
            {
                "yaw": 215,
                "pitch": -25,
                "roll": 0,
                "fov": 90
            },
            {
                "yaw": 207,
                "pitch": -10,
                "roll": 0,
                "fov": 85
            },
            {
                "yaw": 211,
                "pitch": -3,
                "roll": 0,
                "fov": 100
            },
            {
                "yaw": 203,
                "pitch": -19,
                "roll": 0,
                "fov": 80
            },
            {
                "yaw": 200,
                "pitch": -9,
                "roll": 0,
                "fov": 120
            },
            {
                "yaw": 210,
                "pitch": -1,
                "roll": 0,
                "fov": 100
            },
            {
                "yaw": 205,
                "pitch": -32,
                "roll": 0,
                "fov": 100
            }                                    

        ],
        "spherePropsBeatIndexes":[
            0,
            verse_1,
            verse_2 - bar,
            chorus_2 - beat*2,
            bridge,
            chorus_3,
            chorus_3 + line,
            outro + beat*2
        ]
    },       
    "tamb": {
        "imgUrl": "../img/rthm/tamb.png",
        "bgndColor": iconColor,
        "hoverClass": iconHoverClass,
        "imgElement": undefined,
        "sphereProps": {
            "yaw": 248,
            "pitch": -2,
            "roll": 0,
            "fov": 40
        }
    },        
    "wolf": {
        "imgUrl": "../img/rthm/wolf.png",
        "bgndColor": "initial",
        "hoverClass": iconImageHoverClass,
        "imgElement": undefined,
        "sphereProps": [
            {
                "yaw": 6,
                "pitch": -12,
                "roll": 0,
                "fov": 70
            },
            {
                "yaw": 60,
                "pitch": -9,
                "roll": 0,
                "fov": 80
            },
            {
                "yaw": 131,
                "pitch": -30,
                "roll": 0,
                "fov": 80
            },
            {
                "yaw": 215,
                "pitch": -3,
                "roll": 0,
                "fov": 100
            },
            {
                "yaw": 248,
                "pitch": -2,
                "roll": 0,
                "fov": 40
            }            


        ],
        "spherePropsIndex": 0

    }
}






// **********************************************************************************
// LEAD ROW ASSETS AND SYNC ARRAY
// **********************************************************************************


let leadAssets = {
    "love": {
        "imgUrl": "../img/lead/love.png",
        "bgndColor": "initial",
        "hoverClass": iconImageHoverClass,
        "revealIndex": intro_chorus - bar*2,
        "revealed": false,
        "imgElement": undefined,
        "sphereProps": [
            {
                "yaw": 149,
                "pitch": 0.55,
                "roll": 1,
                "fov": 60
            },            
            {
                "yaw": 129,
                "pitch": 0.55,
                "roll": 1,
                "fov": 60
            },            
            {
                "yaw": 29,
                "pitch": -8,
                "roll": 0,
                "fov": 90
            },
            {
                "yaw": 321,
                "pitch": -10,
                "roll": 2,
                "fov": 100
            },
            {
                "yaw": 29,
                "pitch": -6,
                "roll": 0,
                "fov": 60
            },
            {
                "yaw": 29,
                "pitch": -6,
                "roll": 0,
                "fov": 90
            },
            {
                "yaw": 321,
                "pitch": -10,
                "roll": 2,
                "fov": 100
            },                              
        ],
        "spherePropsBeatIndexes": [
            0, 
            intro_chorus + line,             
            verse_1 - bar*2 + beat*2, 
            verse_1 + line, 
            trombone, 
            chorus_3, 
            chorus_3 + bar*3
        ]
    },
    "bgnd": {
        "imgUrl": "../img/lead/bgnd.png",
        "bgndColor": iconColor,
        "hoverClass": iconHoverClass,
        "revealIndex": preChorus_1 + bar*3,
        "revealed": false,
        "imgElement": undefined,
        "sphereProps": {
            "yaw": 140,
            "pitch": 0,
            "roll": 0,
            "fov": 60
        }     
    },
    "confetti": {
        "imgUrl": "../img/lead/confetti.png",
        "bgndColor": iconColor,
        "hoverClass": iconHoverClass,
        "revealIndex": chorus_2 + bar + beat,
        "revealed": false,
        "imgElement": undefined,
        "sphereProps": [
            {
                "yaw": 39,
                "pitch": -8,
                "roll": 0,
                "fov": 120
            },
            {
                "yaw": 332,
                "pitch": -5,
                "roll": 0,
                "fov": 120
            },
            {
                "yaw": 324,
                "pitch": 90,
                "roll": 2,
                "fov": 120
            },
            {
                "yaw": 332,
                "pitch": -5,
                "roll": 0,
                "fov": 120
            },
            {
                "yaw": 7,
                "pitch": -7,
                "roll": 0,
                "fov": 120
            },
            {
                "yaw": 332,
                "pitch": -5,
                "roll": 0,
                "fov": 120
            },                        
            {
                "yaw": 324,
                "pitch": 90,
                "roll": 2,
                "fov": 120
            },
            {
                "yaw": 332,
                "pitch": -5,
                "roll": 0,
                "fov": 120
            }                                      
        ],
        "spherePropsBeatIndexes": [
            0,
            verse_1 + line,
            chorus_2 + bar + beat,
            chorus_2 + line,
            trombone,
            chorus_3 + bar*3,
            chorus_3 + stanza_half - beat*2,
            chorus_3 + stanza_half + bar,
        ]     
    },
    "horn": {
        "imgUrl": "../img/lead/horn.png",
        "bgndColor": "initial",
        "hoverClass": iconImageHoverClass,
        "revealIndex": trombone - bar*2 + beat,
        "revealed": false,
        "imgElement": undefined,
        "sphereProps": {
            "yaw": 320,
            "pitch": -1,
            "roll": 0,
            "fov": 50
        }     
    }            
}





// **********************************************************************************
// HIGHLIGHT SYNC
// **********************************************************************************
const highlightSync = [
    // yellow and black
    // "drums",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,     0,1,2,3,0,1,2,3,0,      // intro leadin 1.1
    "drums",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // intro leadin 1.1
    0,1,2,3,0,1,2,3,"love",1,2,3,0,1,2,3, // intro leadin 1.2
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // intro chorus 1.1
    0,1,2,3,0,1,"drums",3,0,1,2,3,0,1,2,3, // intro chorus 1.2
    // green money
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // verse 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,"keys",1,2,3, // verse 1.2
    // green money + red money
    0,1,2,3,0,1,2,3,0,1,2,3,"bgnd",1,2,3, // pre-chorus 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // pre-chorus 1.1
    // falling money
    0,1,2,3,0,1,2,3,0,1,2,3,"tamb",1,2,3, // chorus 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 1.2
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 1.3
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 1.4 // silver spoon
    // green money
    0,1,2,3,0,1,2,3,"bass",1,2,3,0,1,2,3, // verse 2.1
    0,1,2,3,0,1,2,3,0,1,2,3,"keys",1,2,3, // verse 2.2
    // green money + red money
    0,1,2,3,0,1,2,3,0,1,2,3,"bgnd",1,2,3, // pre-chorus 2.1
    0,1,2,3,0,1,2,3,0,1,"tamb",3,0,1,2,3, // pre-chorus 2.2
    // falling money
    0,1,2,3,0,"confetti",2,3,0,1,2,3,0 /*confetti*/,1,2,3, // chorus 2.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 2.2
    0,1,2,3,0,1,"uke",3,0,1,2,3,0,1,2,3, // chorus 2.3
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 2.4
    // yellow lights
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // bridge 1.1
    0,1,2,3,0,1,2,3,0,"horn",2,3,0,1,2,3, // bridge 1.2
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // solo 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // solo 1.2
    // yellow and black
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 3.1
    0,1,2,3,0,1,2,3,"love",1,2,3,0,1,2,3, // chorus 3.2
    // falling money and crazy colors
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 3.3
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 3.4
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,// chorus 3.4 extra turn 
    0,1,2,3,0,1,2,3,0  // + extra time  
]