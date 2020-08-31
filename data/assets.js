

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
    // "sparkleBlack",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // intro leadin 1.1
    "sparkleBlack",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,     0,1,2,3,0,1,2,3,0,      // intro leadin 1.1
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
    "dollarSpinGrn","dollarSpinBlk",2,3, // pre-chorus 2.2.2
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
    0,1,2,3,"spoon",1,2,3,0,1,2,"sparkleBlack",0,1,2,3  // chorus 3.4 extra turn + extra time
]






// **********************************************************************************
// SHARED AND RHYTHM ROW ASSETS
// **********************************************************************************
const specialAssets = {
    "locked": {
        "imgUrl": "../img/gifs/locked.gif"
    },
    "starfox": {
        "imgUrl": "../img/gifs/starfox.gif"
    }
}


let rthmAssets = {
    "drums": {
        "imgUrl": "../img/rthm/drums.png",
        "bgndColor": "initial",
        "imgElement": undefined,
        "sphereProps": {
            "yaw": 176.25379595510833,
            "pitch": -11.512807118508452,
            "roll": 3,
            "fov": 70.00004285756796
        }
    },    
    "bass": {
        "imgUrl": "../img/rthm/bass.png",
        "bgndColor": "initial",
        "imgElement": undefined,
        "sphereProps": {
            "yaw": 304.14944,
            "pitch": -33.48277815789478,
            "roll": 0,
            "fov": 80.00004285756798
        }
    },        
    "keys": {
        "imgUrl": "../img/rthm/keys.png",
        "bgndColor": "initial",
        "imgElement": undefined,
        "sphereProps": {
            "yaw": 231.19107255532697,
            "pitch": -11.726442686344978,
            "roll": 0,
            "fov": 80.00004285756796
        }
    },       
    "uke": {
        "imgUrl": "../img/rthm/uke.png",
        "bgndColor": "initial",
        "imgElement": undefined,
        "sphereProps": {
            "yaw": 22.487071720741085,
            "pitch": -3.044921136754331,
            "roll": 0,
            "fov": 100.00004285756795
        }
    },       
    "tamb": {
        "imgUrl": "../img/rthm/tamb.png",
        "bgndColor": "initial",
        "imgElement": undefined,
        "sphereProps": {
            "yaw": 58.763522511380714,
            "pitch": 1.4371789670976558,
            "roll": 0,
            "fov": 40.000042857567955
        }
    },        
    "wolf": {
        "imgUrl": "../img/rthm/wolf.png",
        "bgndColor": "initial",
        "imgElement": undefined,
        "sphereProps": [
            {
                "yaw": 176.25379595510833,
                "pitch": -11.512807118508452,
                "roll": 3,
                "fov": 70.00004285756796
            },
            {
                "yaw": 231.19107255532697,
                "pitch": -11.726442686344978,
                "roll": 0,
                "fov": 80.00004285756796
            },
            {
                "yaw": 304.14944,
                "pitch": -33.48277815789478,
                "roll": 0,
                "fov": 80.00004285756798
            },
            {
                "yaw": 22.487071720741085,
                "pitch": -3.044921136754331,
                "roll": 0,
                "fov": 100.00004285756795
            },
            {
                "yaw": 58.763522511380714,
                "pitch": 1.4371789670976558,
                "roll": 0,
                "fov": 40.000042857567955
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
        "revealIndex": intro_chorus - bar*2,
        "revealed": false,
        "imgElement": undefined,
        "sphereProps": [
            {
                "yaw": 324.4689128644255,
                "pitch": -1.785174858795165,
                "roll": 0,
                "fov": 60.00004285756796
            },
            {
                "yaw": 200.06194992354864,
                "pitch": -9.315384072608648,
                "roll": 4,
                "fov": 90
            },
            {
                "yaw": 131.7427496654642,
                "pitch": -6.505642310818288,
                "roll": 4,
                "fov": 100
            },
            {
                "yaw": 200.3334552227225,
                "pitch": -7.167033013219744,
                "roll": 4,
                "fov": 60
            },
            {
                "yaw": 200.3334552227225,
                "pitch": -7.167033013219744,
                "roll": 4,
                "fov": 90
            },
            {
                "yaw": 131.7427496654642,
                "pitch": -6.505642310818288,
                "roll": 4,
                "fov": 100
            }                                
        ],
        "spherePropsBeatIndexes": [
            0, 
            verse_1 - bar, 
            verse_1 + line, 
            trombone, 
            chorus_3, 
            chorus_3 + bar*3
        ]
    },
    "bgnd": {
        "imgUrl": "../img/lead/bgnd.png",
        "revealIndex": preChorus_1 + bar*3,
        "revealed": false,
        "imgElement": undefined,
        "sphereProps": {
            "yaw": 310.925148194743,
            "pitch": -2.529236808228362,
            "roll": -2,
            "fov": 60.00004285756796
        }     
    },
    "confetti": {
        "imgUrl": "../img/lead/confetti.png",
        "revealIndex": chorus_2,
        "revealed": false,
        "imgElement": undefined,
        "sphereProps": {
            "yaw": 316.5102018011254,
            "pitch": 90,
            "roll": 0,
            "fov": 119.99999999999999
        }       
    },
    "horn": {
        "imgUrl": "../img/lead/horn.png",
        "revealIndex": trombone - bar*2,
        "revealed": false,
        "imgElement": undefined,
        "sphereProps": {
            "yaw": 131.01751936199207,
            "pitch": 0.4420139141478718,
            "roll": 3,
            "fov": 50
        }     
    }            
}


const leadSync = [
    // yellow and black
    // 0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // intro leadin 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,     0,1,2,3,0,1,2,3,0,      // intro leadin 1.1
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
// HIGHLIGHT SYNC
// **********************************************************************************
const highlightSync = [
    // yellow and black
    // "drums",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // intro leadin 1.1
    "drums",1,2,3,0,1,2,3,0,1,2,3,0,1,2,3,     0,1,2,3,0,1,2,3,0,      // intro leadin 1.1
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
    0,1,2,3,0,1,2,3,0,1,2,3,"tamb",1,2,3, // pre-chorus 2.2
    // falling money
    0,1,2,3,"confetti",1,2,3,0,1,2,3,0 /*confetti*/,1,2,3, // chorus 2.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 2.2
    0,1,2,3,0,1,"uke",3,0,1,2,3,0,1,2,3, // chorus 2.3
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 2.4
    // yellow lights
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // bridge 1.1
    0,1,2,3,0,1,2,3,0,1,"horn",3,0,1,2,3, // bridge 1.2
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // solo 1.1
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // solo 1.2
    // yellow and black
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 3.1
    0,1,2,3,0,1,2,3,"love",1,2,3,0,1,2,3, // chorus 3.2
    // falling money and crazy colors
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 3.3
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3, // chorus 3.4
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3  // outro chorus end with something fun
]