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
        "whiteCopMaleIdle3": {
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
        /////Bullet/////
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
        /////Zombie Threee/////
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
        /////Ar soldier//////
        //idle
        "arSoldierIdle1": {
            "width": 67,
            "height": 98,
            "sx": 336,
            "sy": 304,
        },
        "arSoldierIdle2": {
            "width": 50,
            "height": 100,
            "sx": 404,
            "sy": 303,
        },
        "arSoldierIdle3": {
            "width": 50,
            "height": 100,
            "sx": 474,
            "sy": 302,
        },
        "arSoldierIdle4": {
            "width": 50,
            "height": 100,
            "sx": 543,
            "sy": 302,
        },
        "arSoldierIdle5": {
            "width": 50,
            "height": 100,
            "sx": 612,
            "sy": 302,
        },
        "arSoldierIdle6": {
            "width": 50,
            "height": 100,
            "sx": 680,
            "sy": 303,
        },
        "arSoldierIdle7": {
            "width": 50,
            "height": 100,
            "sx": 751,
            "sy": 302,
        },
        //walk
        "arSoldierWalk1": {
            "width": 44,
            "height": 98,
            "sx": 256,
            "sy": 102,
        },
        "arSoldierWalk2": {
            "width": 46,
            "height": 98,
            "sx": 303,
            "sy": 102,
        },
        "arSoldierWalk3": {
            "width": 50,
            "height": 98,
            "sx": 352,
            "sy": 102,
        },
        "arSoldierWalk4": {
            "width": 50,
            "height": 98,
            "sx": 406,
            "sy": 102,
        },
        "arSoldierWalk5": {
            "width": 49,
            "height": 98,
            "sx": 459,
            "sy": 102,
        },
        "arSoldierWalk6": {
            "width": 51,
            "height": 98,
            "sx": 510,
            "sy": 102,
        },
        "arSoldierWalk7": {
            "width": 49,
            "height": 98,
            "sx": 564,
            "sy": 102,
        },
        //run 
        "arSoldierRun1": {
            "width": 59,
            "height": 100,
            "sx": 318,
            "sy": 0,
        },
        "arSoldierRun2": {
            "width": 46,
            "height": 98,
            "sx": 303,
            "sy": 0,
        },
        "arSoldierRun3": {
            "width": 50,
            "height": 98,
            "sx": 352,
            "sy": 0,
        },
        "arSoldierRun4": {
            "width": 50,
            "height": 98,
            "sx": 406,
            "sy": 0,
        },
        "arSoldierRun5": {
            "width": 49,
            "height": 98,
            "sx": 459,
            "sy": 0,
        },
        "arSoldierRun6": {
            "width": 51,
            "height": 98,
            "sx": 510,
            "sy": 0,
        },
        "arSoldierRun7": {
            "width": 49,
            "height": 98,
            "sx": 564,
            "sy": 0,
        },
        "arSoldierRun8": {
            "width": 49,
            "height": 98,
            "sx": 618,
            "sy": 0,
        },
        //shoot
        "arSoldierShoot1": {
            "width": 77,
            "height": 99,
            "sx": 0,
            "sy": 405,
        },
        "arSoldierShoot2": {
            "width": 100,
            "height": 100,
            "sx": 78,
            "sy": 404,
        },
        "arSoldierShoot3": {
            "width": 100,
            "height": 100,
            "sx": 163,
            "sy": 403,
        },
        "arSoldierShoot4": {
            "width": 100,
            "height": 100,
            "sx": 264,
            "sy": 403,
        },
    }
    return animationData[anim][s]        
}   