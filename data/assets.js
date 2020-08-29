const loveImg = "../img/love.png";
const wolfImg = "../img/wolf.png";
const sparkleBlack = "../img/gifs/sparkle_black.gif";
const sparkleYellow = "../img/gifs/sparkle_yellow.gif";
const dollarSpin = "../img/gifs/dollar_sign_spin_transparent.gif";
const moneyFallV = "../img/gifs/money_falling_vertical_transparent.gif";
const moneyFallHblk = "../img/gifs/money_falling_horizontal_black.gif";
const moneyFallHwht = "../img/gifs/money_falling_horizontal_white.gif";
const confetti = "../img/gifs/confetti_small_transparent.gif";
const spoon = "../img/gifs/spoon_transparent.gif"


const bgndAssets = {
    "sparkleBlack": {
        "imgUrl": "../img/gifs/sparkle_black.gif",
        "bgndColor": "initial",
        "bgndSize": "initial"
    },
    "sparkleYellow": {
        "imgUrl": "../img/gifs/sparkle_yellow.gif",
        "bgndColor": "initial",
        "bgndSize": "300px 150px"
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
    0,1,2,3,0,1,2,3,0  // outro chorus end with something fun
]

