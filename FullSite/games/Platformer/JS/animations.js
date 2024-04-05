//speed = 200
function whiteCopIdle() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    var oldPosx = JSON.parse(window.sessionStorage.getItem("oldPosX"))
    var oldPosy = JSON.parse(window.sessionStorage.getItem("oldPosY"))      
    var oldAnim = window.sessionStorage.getItem("oldAnim")
    var width = getData(oldAnim, "width")
    var height = getData(oldAnim, "height")
    var idle = JSON.parse(window.sessionStorage.getItem("idle"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    var running = JSON.parse(window.sessionStorage.getItem("idleRunning"))
    if(running != true) {
        window.sessionStorage.setItem("idleRunning", true)
        if(idle == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                drawPlayer()
                window.sessionStorage.setItem("idleRunning", false)
            }, 200);
        } else {
            window.sessionStorage.setItem("idleRunning", false)
        }
        window.sessionStorage.setItem("player", JSON.stringify(player))
    }



}
//speed = 200
function whiteCopWalk() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    var oldPosx = JSON.parse(window.sessionStorage.getItem("oldPosX"))
    var oldPosy = JSON.parse(window.sessionStorage.getItem("oldPosY"))
    var oldAnim = window.sessionStorage.getItem("oldAnim")
    var width = getData(oldAnim, "width")
    var height = getData(oldAnim, "height")
    var walk = JSON.parse(window.sessionStorage.getItem("walk"))
    var running = JSON.parse(window.sessionStorage.getItem("walkRunning"))
    if(running != true) {
        window.sessionStorage.setItem("walkRunning", true)
        if(walk == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                drawPlayer()
                window.sessionStorage.setItem("walkRunning", false)
            }, 120);
        } else {
            window.sessionStorage.setItem("walkRunning", false)
        }
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

function whiteCopRun() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    var run = JSON.parse(window.sessionStorage.getItem("run"))
    var running = JSON.parse(window.sessionStorage.getItem("runRunning"))
    if(running != true) {
        window.sessionStorage.setItem("runRunning", true)
        if(run == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                drawPlayer()
                window.sessionStorage.setItem("runRunning", false)
            }, 120);
        } else {
            window.sessionStorage.setItem("runRunning", false)
        }
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

function whiteCopShoot() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    var shoot = JSON.parse(window.sessionStorage.getItem("shoot"))
    var running = JSON.parse(window.sessionStorage.getItem("shootRunning"))
    if(running != true) {
        window.sessionStorage.setItem("shootRunning", true)
        if(shoot == true) {
            player.anim = player.getAnim()
            setTimeout(() => {
                drawPlayer()
                window.sessionStorage.setItem("shootRunning", false)
            }, 120);
        } else {
            window.sessionStorage.setItem("shootRunning", false)
        }
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

function whiteCopJump() {

}

function whiteCopTaser() {

}

function whiteCopDie() {

}

function whiteCopHurt() {

}

function clearArea(x, y, width, height) {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext("2d")
    ctx.clearRect(x, y, width, height)
}