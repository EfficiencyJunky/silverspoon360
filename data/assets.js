const beat = 1;
const bar = beat*4;
const line = bar*4;
const line_half = line/2;
const stanza = line*4;
const stanza_half = stanza/2;

// beginnings of each section in beat indexes
const intro_leadin = 9;
const intro_chorus = intro_leadin + stanza_half;
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
        "imgUrl": "../img/gifs/locked.gif",
        "bgndColor": "initial",
        "hasHover": false
    },
    "starfox": {
        "imgUrl": "../img/gifs/starfox.gif",
        "bgndColor": "initial",
        "hasHover": false
    },
    "bonus": {
        "imgUrl": "../img/gifs/bonus.gif",
        "bgndColor": "initial",
        "hasHover": false,
        "imgElement": undefined,        
        "sphereProps": [
            {
                "yaw": 168.17301944381518,
                "pitch": -26.053727922911758,
                "roll": 0,
                "fov": 40
            },
            {
                "yaw": 257.9386170109469,
                "pitch": 4.344441403877287,
                "roll": 3,
                "fov": 35.00004285756796
            },
            {
                "yaw": 150.58010058371224,
                "pitch": -5.716049165462029,
                "roll": 0,
                "fov": 120
            }                        
        ],
        "spherePropsIndex": 0        
    }    
}


let rthmAssets = {
    "drums": {
        "imgUrl": "../img/rthm/drums.png",
        "bgndColor": iconColor,
        "hasHover": true,
        "imgElement": undefined,
        "sphereProps": [
            {
                "yaw": 176.25379595510833,
                "pitch": -11.512807118508452,
                "roll": 3,
                "fov": 70.00004285756796
            },
            {
                "yaw": 176.30033766955844,
                "pitch": -7.585817187317396,
                "roll": 3,
                "fov": 50
            },
            {
                "yaw": 176.25379595510833,
                "pitch": -11.512807118508452,
                "roll": 3,
                "fov": 70.00004285756796
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
        "hasHover": true,
        "imgElement": undefined,
        "sphereProps": [
            {
                "yaw": 304.14944,
                "pitch": -33.48277815789478,
                "roll": 0,
                "fov": 80.00004285756798
            },
            {
                "yaw": 308.24514817216306,
                "pitch": -28.191671906774697,
                "roll": 0,
                "fov": 80.00004285756796
            },
            {
                "yaw": 305.0802827664007,
                "pitch": -35.13624886136981,
                "roll": 0,
                "fov": 80.00004285756796
            },
            {
                "yaw": 295.65000226617326,
                "pitch": -42.12216202992917,
                "roll": 0,
                "fov": 90
            },
            {
                "yaw": 295.87107730475924,
                "pitch": -40.15866662143556,
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
        "hasHover": true,
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
        "bgndColor": iconColor,
        "hasHover": true,
        "imgElement": undefined,
        "sphereProps": [
            {
                "yaw": 32.21286364800597,
                "pitch": -10.733559904224906,
                "roll": 0,
                "fov": 110
            },
            {
                "yaw": 27.376020411940626,
                "pitch": -22.650544761611723,
                "roll": 0,
                "fov": 90
            },
            {
                "yaw": 18.160638434618974,
                "pitch": -8.767873202901715,
                "roll": 0,
                "fov": 85
            },
            {
                "yaw": 22.487071720741085,
                "pitch": -3.044921136754331,
                "roll": 0,
                "fov": 100.00004285756795
            },
            {
                "yaw": 16.52967881364896,
                "pitch": -18.09150108377195,
                "roll": 0,
                "fov": 80
            },
            {
                "yaw": 10.944666673486603,
                "pitch": -13.803072855485317,
                "roll": 0,
                "fov": 119.99999999999999
            },
            {
                "yaw": 20.997763164973954,
                "pitch": -1.4020492228940353,
                "roll": 0,
                "fov": 100
            },
            {
                "yaw": 16.34357016148781,
                "pitch": -31.63135481945862,
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
        "hasHover": true,
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
        "bgndColor": iconColor,
        "hasHover": false,
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
        "bgndColor": "initial",
        "hasHover": false,
        "revealIndex": intro_chorus - bar*2,
        "revealed": false,
        "imgElement": undefined,
        "sphereProps": [
            {
                "yaw": 319.5819874681481,
                "pitch": -2.0331955086062288,
                "roll": -2,
                "fov": 60
            },
            {
                "yaw": 299.79966710855444,
                "pitch": -2.7886121632433833,
                "roll": -2,
                "fov": 59.99999999999999
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
        "hasHover": true,
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
        "bgndColor": iconColor,
        "hasHover": true,
        "revealIndex": chorus_2 + bar + beat,
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
        "bgndColor": "initial",
        "hasHover": true,
        "revealIndex": trombone - bar*2 + beat,
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
    0,1,2,3,0,1,2,3,0,1,2,3,0,1,2,3  // outro chorus end with something fun
]