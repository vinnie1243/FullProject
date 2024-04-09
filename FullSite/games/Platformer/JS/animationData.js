function getData(anim, s) {
    animationData = {
        "whiteCopIdle1": {
            "width": 33,
            "height": 100,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopIdle2": {
            "width": 31,
            "height": 100,
            "sx": 35,
            "sy": 0,
        },
        "whiteCopIdle3": {
            "width": 31,
            "height": 100,
            "sx": 69,
            "sy": 0,
        },
        "whiteCopIdle4": {
            "width": 31,
            "height": 100,
            "sx": 103,
            "sy": 0,
        },
        "whiteCopIdle5": {
            "width": 31,
            "height": 100,
            "sx": 137,
            "sy": 0,
        },
        "whiteCopIdle6": {
            "width": 31,
            "height": 100,
            "sx": 171,
            "sy": 0,
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
        }
    }
    return animationData[anim][s]
}   