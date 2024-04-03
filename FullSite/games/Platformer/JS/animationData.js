function getData(anim, s) {
    animationData = {
        //white cop idle
        "whiteCopIdle1R": {
            "width": 29,
            "height": 92,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopIdle2R": {
            "width": 28,
            "height": 92,
            "sx": 32,
            "sy": 0,
        },
        "whiteCopIdle3R": {
            "width": 28,
            "height": 92,
            "sx": 63,
            "sy": 0,
        },
        "whiteCopIdle4R": {
            "width": 28,
            "height": 92,
            "sx": 94,
            "sy": 0,
        },
        "whiteCopIdle5R": {
            "width": 29,
            "height": 92,
            "sx": 125,
            "sy": 0,
        },
        "whiteCopIdle6R": {
            "width": 28,
            "height": 92,
            "sx": 157,
            "sy": 0,
        },
        //left
        "whiteCopIdle1L": {
            "width": 28,
            "height": 91,
            "sx": 157,
            "sy": 95,
        },
        "whiteCopIdle2L": {
            "width": 28,
            "height": 91,
            "sx": 126,
            "sy": 95,
        },
        "whiteCopIdle3L": {
            "width": 28,
            "height": 91,
            "sx": 95,
            "sy": 95,
        },
        "whiteCopIdle4L": {
            "width": 28,
            "height": 91,
            "sx": 64,
            "sy": 95,
        },
        "whiteCopIdle5L": {
            "width": 28,
            "height": 91,
            "sx": 32,
            "sy": 95,
        },
        "whiteCopIdle6L": {
            "width": 29,
            "height": 91,
            "sx": 0,
            "sy": 95,
        },
        //white cop walk
        "whiteCopWalk1R": {
            "width": 21,
            "height": 91,
            "sx": 0,
            "sy": 377,
        },
        "whiteCopWalk2R": {
            "width": 25,
            "height": 91,
            "sx": 24,
            "sy": 377,
        },
        "whiteCopWalk3R": {
            "width": 38,
            "height": 91,
            "sx": 52,
            "sy": 377,
        },
        "whiteCopWalk4R": {
            "width": 21,
            "height": 91,
            "sx": 93,
            "sy": 377,
        },
        "whiteCopWalk5R": {
            "width": 20,
            "height": 91,
            "sx": 117,
            "sy": 377,
        },
        "whiteCopWalk6R": {
            "width": 30,
            "height": 91,
            "sx": 140,
            "sy": 377,
        },
        "whiteCopWalk7R": {
            "width": 34,
            "height": 91,
            "sx": 173,
            "sy": 377,
        },
        "whiteCopWalk8R": {
            "width": 26,
            "height": 91,
            "sx": 210,
            "sy": 377,
        },
        //left
        "whiteCopWalk1L": {
            "width": 21,
            "height": 91,
            "sx": 0,
            "sy": 471,
        },
        "whiteCopWalk2L": {
            "width": 25,
            "height": 91,
            "sx": 24,
            "sy": 471,
        },
        "whiteCopWalk3L": {
            "width": 38,
            "height": 91,
            "sx": 52,
            "sy": 471,
        },
        "whiteCopWalk4L": {
            "width": 21,
            "height": 91,
            "sx": 93,
            "sy": 471,
        },
        "whiteCopWalk5L": {
            "width": 20,
            "height": 91,
            "sx": 117,
            "sy": 471,
        },
        "whiteCopWalk6L": {
            "width": 30,
            "height": 91,
            "sx": 140,
            "sy": 471,
        },
        "whiteCopWalk7L": {
            "width": 34,
            "height": 91,
            "sx": 173,
            "sy": 471,
        },
        "whiteCopWalk8L": {
            "width": 24,
            "height": 91,
            "sx": 210,
            "sy": 471,
        },
        //WhitecopRun
        "whiteCopRun1R": {
            "width": 43,
            "height": 91,
            "sx": 0,
            "sy": 189,
        },
        "whiteCopRun2R": {
            "width": 62,
            "height": 91,
            "sx": 46,
            "sy": 189,
        },
        "whiteCopRun3R": {
            "width": 49,
            "height": 91,
            "sx": 111,
            "sy": 189,
        },
        "whiteCopRun4R": {
            "width": 34,
            "height": 91,
            "sx": 163,
            "sy": 189,
        },
        "whiteCopRun5R": {
            "width": 44,
            "height": 91,
            "sx": 200,
            "sy": 189,
        },
        "whiteCopRun6R": {
            "width": 62,
            "height": 91,
            "sx": 247,
            "sy": 189,
        },
        "whiteCopRun7R": {
            "width": 55,
            "height": 91,
            "sx": 312,
            "sy": 189,
        },
        "whiteCopRun8R": {
            "width": 30,
            "height": 91,
            "sx": 370,
            "sy": 189,
        },
        //left
        "whiteCopRun1L": {
            "width": 43,
            "height": 91,
            "sx": 0,
            "sy": 283,
        },
        "whiteCopRun2L": {
            "width": 62,
            "height": 91,
            "sx": 46,
            "sy": 283,
        },
        "whiteCopRun3L": {
            "width": 48,
            "height": 91,
            "sx": 111,
            "sy": 283,
        },
        "whiteCopRun4L": {
            "width": 34,
            "height": 91,
            "sx": 162,
            "sy": 283,
        },
        "whiteCopRun5L": {
            "width": 44,
            "height": 91,
            "sx": 199,
            "sy": 283,
        },
        "whiteCopRun6L": {
            "width": 62,
            "height": 91,
            "sx": 246,
            "sy": 283,
        },
        "whiteCopRun7L": {
            "width": 55,
            "height": 91,
            "sx": 311,
            "sy": 283,
        },
        "whiteCopRun8L": {
            "width": 29,
            "height": 91,
            "sx": 369,
            "sy": 283,
        },
        //White cop Jump
        //Right
        "whiteCopJump1R": {
            "width": 32,
            "height": 91,
            "sx": 0,
            "sy": 565,
        },
        "whiteCopJump2R": {
            "width": 35,
            "height": 91,
            "sx": 35,
            "sy": 565,
        },
        "whiteCopJump3R": {
            "width": 43,
            "height": 91,
            "sx": 73,
            "sy": 565,
        },
        "whiteCopJump4R": {
            "width": 39,
            "height": 91,
            "sx": 119,
            "sy": 565,
        },
        "whiteCopJump5R": {
            "width": 32,
            "height": 91,
            "sx": 161,
            "sy": 565,
        },
        "whiteCopJump6R": {
            "width": 32,
            "height": 91,
            "sx": 196,
            "sy": 565,
        },
        "whiteCopJump7R": {
            "width": 34,
            "height": 91,
            "sx": 231,
            "sy": 565,
        },
        "whiteCopJump8R": {
            "width": 44,
            "height": 91,
            "sx": 268,
            "sy": 565,
        },
        //Left
        "whiteCopJump1L": {
            "width": 100,
            "height": 100,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopJump2L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopJump3L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopJump4L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopJump5L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopJump6L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopJump7L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopJump8L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //White cop Shoot
        //Right
        "whiteCopShoot1R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopShoot2R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopShoot3R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopShoot4R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //Left
        "whiteCopShoot1L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopShoot2L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopShoot3L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopShoot4L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //White cop Tazer 
        //Right
        "whiteCopTazer1R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopTazer2R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopTazer3R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopTazer4R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopTazer5R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopTazer6R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopTazer7R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //Left
        "whiteCopTazer1L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopTazer2L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopTazer3L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopTazer4L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopTazer5L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopTazer6L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopTazer7L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //White cop reload gun
        //Right
        "whiteCopReloadGun1R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadGun2R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadGun3R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },  
        "whiteCopReloadGun4R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadGun5R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadGun6R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadGun7R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadGun8R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //Left
        "whiteCopReloadGun1L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadGun2L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadGun3L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadGun4L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadGun5L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadGun6L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadGun7L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadGun8L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //White cop reload Tazer
        //Right
        "whiteCopReloadTazer1R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer2R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer3R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer4R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer5R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer6R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer7R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer8R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //Left
        "whiteCopReloadTazer1L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer2L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer3L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer4L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer5L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer6L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer7L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopReloadTazer8L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //White cop Hurt
        //Right
        "whiteCopHurt1R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopHurt2R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopHurt3R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopHurt4R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //Left
        "whiteCopHurt1L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopHurt2L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopHurt3L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopHurt4L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //White cop Dead
        //Right
        "whiteCopDead1R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopDead2R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopDead3R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopDead4R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopDead5R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //Left
        "whiteCopDead1L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopDead2L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopDead3L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopDead4L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "whiteCopDead5L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //Black cop idle
        //Right
        "blackCopIdle1R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopIdle2R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopIdle3R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopIdle4R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopIdle5R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopIdle6R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //Left 
        "blackCopIdle1L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopIdle2L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopIdle3L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopIdle4L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopIdle5L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopIdle6L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //Black cop walk
        //Right
        "blackCopWalk1R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk2R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk3R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk4R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk5R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk6R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk7R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk8R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //Left
        "blackCopWalk1L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk2L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk3L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk4L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk5L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk6L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk7L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopWalk8L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //Black cop run
        //Right
        "blackCopRun1R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun2R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun3R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun4R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun5R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun6R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun7R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun8R": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //Left
        "blackCopRun1L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun2L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun3L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun4L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun5L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun6L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun7L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        "blackCopRun8L": {
            "width": 0,
            "height": 0,
            "sx": 0,
            "sy": 0,
        },
        //Black cop Jump
        //Right
        
    }
    return animationData[anim][s]
}