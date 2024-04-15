function getData(anim, s) {
    animationData = {
        //white cop male idle
        "whiteCopMaleIdle1": {
            "width": 33,
            "height": 100,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopMaleIdle2": {
            "width": 31,
            "height": 100,
            "sx": 35,
            "sy": 0,
        },
        "whiteCoMalepIdle3": {
            "width": 31,
            "height": 100,
            "sx": 69,
            "sy": 0,
        },
        "whiteCopMaleIdle4": {
            "width": 31,
            "height": 100,
            "sx": 103,
            "sy": 0,
        },
        "whiteCopMaleIdle5": {
            "width": 31,
            "height": 100,
            "sx": 137,
            "sy": 0,
        },
        "whiteCopMaleIdle6": {
            "width": 31,
            "height": 100,
            "sx": 171,
            "sy": 0,
        },
        //white cop male walk
        "whiteCopMaleWalk1": {
            "width": 23,
            "height": 99,
            "sx": 0,
            "sy": 102,
        },
        "whiteCopMaleWalk2": {
            "width": 31,
            "height": 100,
            "sx": 35,
            "sy": 100,
        },
        "whiteCopMaleWalk3": {
            "width": 31,
            "height": 100,
            "sx": 69,
            "sy": 100,
        },
        "whiteCopMaleWalk4": {
            "width": 31,
            "height": 100,
            "sx": 103,
            "sy": 100,
        },
        "whiteCopMaleWalk5": {
            "width": 31,
            "height": 100,
            "sx": 137,
            "sy": 100,
        },
        "whiteCopMaleWalk6": {
            "width": 31,
            "height": 100,
            "sx": 171,
            "sy": 100,
        },
        "whiteCopMaleWalk7": {
            "width": 31,
            "height": 100,
            "sx": 205,
            "sy": 100,
        },
        "whiteCopMaleWalk8": {
            "width": 31,
            "height": 100,
            "sx": 239,
            "sy": 100,
        },
        //Bullet
        "bulletR": {
            "width": 110,
            "height": 24,
            "sx": 205,
            "sy": 0,
        },
        "bulletL": {
            "width": 110,
            "height": 24,
            "sx": 204,
            "sy": 27,
        },
        //zombie three idle
        "zombieThreeIdle1": {
            "width": 39,
            "height": 98,
            "sx": 0,
            "sy": 304,
        },
        "zombieThreeIdle2": {
            "width": 39,
            "height": 98,   
            "sx": 40,
            "sy": 302,
        },
    }
    return animationData[anim][s]        
}   