function main() {    
    const ratio = window.devicePixelRatio || 1
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext('2d') 
    canvas.style.width = window.innerWidth * 0.9
    canvas.style.height = window.innerHeight
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    var player = new Player(500, 300, "whiteCopIdle1", 0, 0)
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("direction", "right")
    gameLoop()
    clearBoard()
    drawPlayer()    
}

function keyChck(e) {
    var letMove = window.sessionStorage.getItem("letMove")
    if(letMove == 0) {
        return
    } else {
        letMove--;
    }
    window.sessionStorage.setItem("letMove", letMove)
    var key; 
    if (window.event) { 
        key = e.keyCode; 
    } else if (e.which) { 
        key = e.which; 
    } 
    if(key == 16) {
        return
    }
    key = convert(key)
    if(key == "space") {
        jump()
    } else if(key == "a" && e.shiftKey == true) {
        run("left");   
    } else if(key == "a") {
        moveLeft()   
    } else if(key == "d" && e.shiftKey == true) {
        run("right");
    } else if(key == "d") {
        moveRight()   
    }
}

function moveRight() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    if(player.velX <= 4) {
        player.velX += 1
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("direction", "right")
}

function moveLeft() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    if(player.velX >= -4) {
        player.velX -= 1
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("direction", "left")
}

function run(direction) {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    if(direction == "left") {
        player.velX -= 6
    } else if(direction == "right") {
        player.velX += 6
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}  

function jump() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    player.velY = -30
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

function convert(key) {
    if(key == 32) {
        return "space"
    } else if(key == 65) {
        return "a"
    } else if(key == 16) {
        return "shift"
    } else if(key == 68) {
        return "d"
    } else {
        return key
    }
}

function gameLoop() {
    window.sessionStorage.setItem("letMove", 4)
    clearBoard()
    move();
    drawPlayer()
    drawPlatforms()
    drawEnemy()
    slow();
    setTimeout(() => {
        gameLoop()
    }, 100);
}

function slow() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    if(player.velX < 0.2 && player.velX > -0.2) {
        player.velX = 0
    } else if(player.velX != 0 && player.velX > 0) {
        player.velX -= 0.2
    } else if(player.velX != 0 && player.velX < 0) {
        player.velX += 0.2
    }
    if(player.velY < 0.2 && player.velY > -0.2) {
        player.velY = 0
    } else if(player.velY != 0 && player.velY > 0) {
        player.velY -= 0.2
    } else if(player.velY != 0 && player.velY < 0) {
        player.velY += 1
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

function move() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    player.velX = 15
    player.x += player.velX
    player.y += player.velY
    /*if(player.velX > 6) {
        player.anim = "whiteCopRun1"
    } else if(player.velX < -6) {
        player.anim = "whiteCopRun1"
    }*/
    if(player.velX > 1 && player.velX < 8 && player.anim.includes("Run") || player.velX > 1 && player.velX < 50 && player.anim.includes("Idle")) {
        player.anim = "whiteCopWalk1"
    }
    if(player.velX < -1 && player.velX > -5 && player.anim.includes("Run") || player.velX < -1 && player.velX > -5 && player.anim.includes("Idle")) {
        player.anim = "whiteCopWalk1"
    }
    if(player.velX < 1 && player.velX > -1 && player.anim.includes("Walk")) {
        player.anim = "whiteCopIdle1"
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}   

function drawEnemy() {
    
}

function clearBoard() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext("2d")
    ctx.reset()
}

function drawPlayer() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext('2d')    
    var img = document.getElementById("test1")
    ctx.moveTo(0, 0)
    player.anim = player.getAnim()
    window.sessionStorage.setItem("player", JSON.stringify(player))
    console.log(player.anim)
    ctx.drawImage(img, getData(player.getAnim(), "sx"), getData(player.anim, "sy"), getData(player.anim, "width"), getData(player.anim, "height"), player.x, player.y, getData(player.anim, "width") * 3, getData(player.anim, "height") * 3)
    ctx.stroke()
}

function drawPlatforms() {
    
}

function drawEnemy() {

}

class Player {
    constructor(x, y, anim, velX, velY) {
        this.x = x
        this.y = y
        this.anim = anim
        this.velX = velX
        this.velY = velY
    }

    getAnim() {
        if(this.anim.includes("Idle")) {
            if(this.anim.includes("1")) {
                this.anim = "whiteCopIdle2"        
            } else if(this.anim.includes("2")) {
                this.anim = "whiteCopIdle3"
            } else if(this.anim.includes("3")) {
                this.anim = "whiteCopIdle4"
            } else if(this.anim.includes("4")) {
                this.anim = "whiteCopIdle5"
            } else if(this.anim.includes("5")) {
                this.anim = "whiteCopIdle6"
            } else if(this.anim.includes("6")) {
                this.anim = "whiteCopIdle1"
            }
        }
        if (this.anim.includes("Walk")) {
            if(this.anim.includes("1")) {
                this.anim = "whiteCopWalk2"        
            } else if(this.anim.includes("2")) {
                this.anim = "whiteCopWalk3"
            } else if(this.anim.includes("3")) {
                this.anim = "whiteCopWalk4"
            } else if(this.anim.includes("4")) {
                this.anim = "whiteCopWalk5"
            } else if(this.anim.includes("5")) {
                this.anim = "whiteCopWalk6"
            } else if(this.anim.includes("6")) {
                this.anim = "whiteCopWalk7"
            } else if(this.anim.includes("7")) {
                this.anim = "whiteCopWalk8"
            } else if(this.anim.includes("8")) {
                this.anim = "whiteCopWalk1"
            }
        }
        console.log(this.anim)
        if(this.anim.includes("Run")) {
            if(this.anim.includes("1")) {
                this.anim = "whiteCopRun2"        
            } else if(this.anim.includes("2")) {
                this.anim = "whiteCopRun3"
            } else if(this.anim.includes("3")) {
                this.anim = "whiteCopRun4"
            } else if(this.anim.includes("4")) {
                this.anim = "whiteCopRun5"
            } else if(this.anim.includes("5")) {
                this.anim = "whiteCopRun6"
            } else if(this.anim.includes("6")) {
                this.anim = "whiteCopRun7"
            } else if(this.anim.includes("7")) {
                this.anim = "whiteCopRun8"
            } else if(this.anim.includes("8")) {
                this.anim = "whiteCopRun1"
            }
        }
        this.anim = `${this.anim}${window.sessionStorage.getItem("direction").charAt(0).toUpperCase()}`
        return this.anim
    }
}

class Slime {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}   

class Platform {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}   