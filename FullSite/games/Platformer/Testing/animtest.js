/////IDLE/////
function arSoldierIdle() {
    var arSoldierIdle = JSON.parse(window.sessionStorage.getItem("arSoldierIdle"))
    arSoldierIdle = new Animate(arSoldierIdle.x, arSoldierIdle.y, arSoldierIdle.anim, arSoldierIdle.size)
    var running = JSON.parse(window.sessionStorage.getItem("arSoldierIdleRunning"))
    if(running == false) {
        window.sessionStorage.setItem("arSoldierIdleRunning", true)
        setTimeout(() => {
            arSoldierIdle.anim = arSoldierIdle.getAnim()
            window.sessionStorage.setItem("arSoldierIdle", JSON.stringify(arSoldierIdle))
            window.sessionStorage.setItem("arSoldierIdleRunning", false) 
        }, 200);
    }
}
function whiteCopMaleIdle() {
    var whiteCopMaleIdle = JSON.parse(window.sessionStorage.getItem("whiteCopMaleIdle"))
    whiteCopMaleIdle = new Animate(whiteCopMaleIdle.x, whiteCopMaleIdle.y, whiteCopMaleIdle.anim, whiteCopMaleIdle.size)
    var running = JSON.parse(window.sessionStorage.getItem("whiteCopMaleIdleRunning"))
    if(running == false) {
        window.sessionStorage.setItem("whiteCopMaleIdleRunning", true)
        setTimeout(() => {
            whiteCopMaleIdle.anim = whiteCopMaleIdle.getAnim()
            window.sessionStorage.setItem("whiteCopMaleIdle", JSON.stringify(whiteCopMaleIdle))
            window.sessionStorage.setItem("whiteCopMaleIdleRunning", false) 
        }, 200);
    }
}
/////WALK/////
function arSoldierWalk() {
    var arSoldierWalk = JSON.parse(window.sessionStorage.getItem("arSoldierWalk"))
    arSoldierWalk = new Animate(arSoldierWalk.x, arSoldierWalk.y, arSoldierWalk.anim, arSoldierWalk.size)
    var running = JSON.parse(window.sessionStorage.getItem("arSoldierWalkRunning"))
    if(running == false) {
        window.sessionStorage.setItem("arSoldierWalkRunning", true)
        setTimeout(() => {
            arSoldierWalk.anim = arSoldierWalk.getAnim()
            window.sessionStorage.setItem("arSoldierWalk", JSON.stringify(arSoldierWalk))
            window.sessionStorage.setItem("arSoldierWalkRunning", false) 
        }, 200);
    }
}

/////RUN/////
function arSoldierRun() {
    var arSoldierRun = JSON.parse(window.sessionStorage.getItem("arSoldierRun"))
    arSoldierRun = new Animate(arSoldierRun.x, arSoldierRun.y, arSoldierRun.anim, arSoldierRun.size)
    var running = JSON.parse(window.sessionStorage.getItem("arSoldierRunRunning"))
    if(running == false) {
        window.sessionStorage.setItem("arSoldierRunRunning", true)
        setTimeout(() => {
            arSoldierRun.anim = arSoldierRun.getAnim()
            window.sessionStorage.setItem("arSoldierRun", JSON.stringify(arSoldierRun))
            window.sessionStorage.setItem("arSoldierRunRunning", false) 
        }, 200);
    }
}
/////SHOOT/////
function arSoldierShoot() {
    var arSoldierShoot = JSON.parse(window.sessionStorage.getItem("arSoldierShoot"))
    arSoldierShoot = new Animate(arSoldierShoot.x, arSoldierShoot.y, arSoldierShoot.anim, arSoldierShoot.size)
    var running = JSON.parse(window.sessionStorage.getItem("arSoldierShootRunning"))
    if(running == false) {
        window.sessionStorage.setItem("arSoldierShootRunning", true)
        setTimeout(() => {
            arSoldierShoot.anim = arSoldierShoot.getAnim()
            window.sessionStorage.setItem("arSoldierShoot", JSON.stringify(arSoldierShoot))
            window.sessionStorage.setItem("arSoldierShootRunning", false) 
        }, 200);
    }
}
/////HIPFIRE/////
function arSoldierHipfire() {
    var arSoldierHipfire = JSON.parse(window.sessionStorage.getItem("arSoldierHipfire"))
    arSoldierHipfire = new Animate(arSoldierHipfire.x, arSoldierHipfire.y, arSoldierHipfire.anim, arSoldierHipfire.size)
    var running = JSON.parse(window.sessionStorage.getItem("arSoldierHipfireRunning"))
    if(running == false) {
        window.sessionStorage.setItem("arSoldierHipfireRunning", true)
        setTimeout(() => {
            arSoldierHipfire.anim = arSoldierHipfire.getAnim()
            window.sessionStorage.setItem("arSoldierHipfire", JSON.stringify(arSoldierHipfire))
            window.sessionStorage.setItem("arSoldierHipfireRunning", false) 
        }, 200);
    }
}
/////HANG/////
function arSoldierHang() {
    var arSoldierHang = JSON.parse(window.sessionStorage.getItem("arSoldierHang"))
    arSoldierHang = new Animate(arSoldierHang.x, arSoldierHang.y, arSoldierHang.anim, arSoldierHang.size)
    var running = JSON.parse(window.sessionStorage.getItem("arSoldierHangRunning"))
    if(running == false) {
        window.sessionStorage.setItem("arSoldierHangRunning", true)
        setTimeout(() => {
            arSoldierHang.anim = arSoldierHang.getAnim()
            window.sessionStorage.setItem("arSoldierHang", JSON.stringify(arSoldierHang))
            window.sessionStorage.setItem("arSoldierHangRunning", false) 
        }, 200);
    }
}