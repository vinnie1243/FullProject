function main() {    
    var canvas = document.getElementById("playarea")
    canvas.style.width = window.innerWidth * 0.9
    canvas.style.height = window.innerHeight
    canvas.width = window.innerWidth * 1.5
    canvas.height = window.innerHeight * 1.5    
    var player = new Player(500, 600, "whiteCopIdle1R", 0, 0)
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("direction", "right")
    window.sessionStorage.setItem("idle", true)
    window.sessionStorage.setItem("walk", false)
    window.sessionStorage.setItem("run", false)
    window.sessionStorage.setItem("shoot", false)
    window.sessionStorage.setItem("idleRunning", false)
    window.sessionStorage.setItem("walkRunning", false)
    window.sessionStorage.setItem("runRunning", false)
    window.sessionStorage.setItem("shootRunning", false)
    window.sessionStorage.setItem("oldPosX", 500)
    window.sessionStorage.setItem("oldPosY", 20)
    window.sessionStorage.setItem("oldAnim", "whiteCopIdle1R")
    window.sessionStorage.setItem("platforms", JSON.stringify([[0, canvas.height * 0.95, 100000, 50]]))
    window.sessionStorage.setItem("bullets", JSON.stringify([]))
    setInterval(() => {
        gameLoop()
    }, 16.6);
    clearBoard()
    //drawPlayer()    
}

function clickChck(e) {
    var bullets = JSON.parse(window.sessionStorage.getItem("bullets"))
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    var shoot = JSON.parse(window.sessionStorage.getItem("shoot"))
    var idle = JSON.parse(window.sessionStorage.getItem("idle"))
    var walk = JSON.parse(window.sessionStorage.getItem("walk"))
    var run = JSON.parse(window.sessionStorage.getItem("run"))
    var canvas = document.getElementById("playarea")
    var canvasW = canvas.width
    var canvasH = canvas.height
    let x = e.clientX * 1.5 
    let y = 500
    if(player.x > x) {
        bullets.push([player.x, player.y + 16, "left"])
    } else if(player.x < x) {
        bullets.push([player.x + 70, player.y + 16, "right"])
    }
    window.sessionStorage.setItem("bullets", JSON.stringify(bullets))
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    player.anim = "whiteCopShoot1" + window.sessionStorage.getItem("direction").charAt(0).toUpperCase()
    window.sessionStorage.setItem("player", JSON.stringify(player))
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
    if(player.velX <= 2) {
        player.velX += 0.75
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("direction", "right")
}

function moveLeft() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    if(player.velX >= -2) {
        player.velX -= 0.75
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("direction", "left")
}

function run(direction) {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    if(direction == "left" && player.velX > - 4.5) {
        player.velX -= 1.5
    } else if(direction == "right" && player.velX < 4.5) {
        player.velX += 1.5
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}  

function jump() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    var direction = window.sessionStorage.getItem("direction")
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    player.velY = - 20
    if(direction = "right") {
        player.velX = player.velx * 5412
    } else if(direction = "left") {
        player.velX = player.velX * -5412
    }
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
    move();
    physics()
    animate()
    drawPlayer()
    drawPlatforms()
    drawBullet()
    drawEnemy()
    slow();
}

function slow() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    if(player.velX < 0.35 && player.velX > -0.35) {
        player.velX = 0
    } else if(player.velX != 0 && player.velX > 0) {
        player.velX -= 0.35
    } else if(player.velX != 0 && player.velX < 0) {
        player.velX += 0.35
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

function animate() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    if(player.anim.includes("Idle")) {
        if(player.anim.includes("whiteCop")) {
            whiteCopIdle()
        }
    } else if(player.anim.includes("Walk")) {
        if(player.anim.includes("whiteCop")) {
            whiteCopWalk()
        }
    
    } else if(player.anim.includes("Run")) {
        if(player.anim.includes("whiteCop")) {
            whiteCopRun()
        }
    } else if(player.anim.includes("Shoot")) {
        if(player.anim.includes("whiteCop")) {
            whiteCopShoot()
        }
    
    }
}

function move() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    var idle = JSON.parse(window.sessionStorage.getItem("idle"))
    var walk = JSON.parse(window.sessionStorage.getItem("walk"))
    var direction = window.sessionStorage.getItem("direction")
    window.sessionStorage.setItem("oldPosX", player.x)
    window.sessionStorage.setItem("oldPosY", player.y) 
    window.sessionStorage.setItem("oldAnim", player.anim)
    player.x += player.velX
    player.y += player.velY
    var shoot = false
    var num = 0
    if(player.anim.includes("Shoot")) {
        shoot = true
        if(player.anim.includes("1")) {
            num = 1
        } else if(player.anim.includes("2")) {
            num = 2
        } else if(player.anim.includes("3")) {
            num = 3
        } else if(player.anim.includes("4")) {
            num = 4
        }
    }
    if(player.velX > 5) {
        idle = false
        player.anim = "whiteCopRun1" + window.sessionStorage.getItem("direction").charAt(0).toUpperCase()
        walk = false
    } else if(player.velX < -5) {
        player.anim = "whiteCopRun1" + window.sessionStorage.getItem("direction").charAt(0).toUpperCase()
        idle = false
        walk = false
    }
    if(player.velX > 0 && player.velX < 1.5 && player.anim.includes("Run") || player.velX > 0 && player.velX < 10 && player.anim.includes("Idle")) {
        idle = false
        walk = true
        player.anim = "whiteCopWalk1" + window.sessionStorage.getItem("direction").charAt(0).toUpperCase()
    }
    if(player.velX < -0 && player.velX > 0 && player.anim.includes("Run") || player.velX < 0 && player.velX > -1.5 && player.anim.includes("Idle")) {
        idle = false
        walk = true
        player.anim = "whiteCopWalk1" + window.sessionStorage.getItem("direction").charAt(0).toUpperCase()
    }
    if(player.velX < 0.1 && player.velX > -0.1 && player.anim.includes("Walk")) {
        idle = true
        walk = false 
        player.anim = "whiteCopIdle1" + window.sessionStorage.getItem("direction").charAt(0).toUpperCase()
    }
    if(shoot == true && num == 1) {
        player.anim = `whiteCopShoot1${direction.charAt(0).toUpperCase()}`
    } else if(shoot == true && num == 2) {
        player.anim = `whiteCopShoot2${direction.charAt(0).toUpperCase()}`
    } else if(shoot == true && num == 3) {
        player.anim = `whiteCopShoot3${direction.charAt(0).toUpperCase()}`
    } else if(shoot == true && num == 4) {
        player.anim = `whiteCopShoot4${direction.charAt(0).toUpperCase()}`
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("idle", idle)
    window.sessionStorage.setItem("walk", walk)
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
    //ctx.fillStyle  = "red"
    //ctx.fillRect(player.x, player.y, 50, 100)
    ctx.drawImage(img, getData(player.anim, "sx"), getData(player.anim, "sy"), getData(player.anim, "width"), getData(player.anim, "height"), player.x, player.y, getData(player.anim, "width") * 1.25, getData(player.anim, "height") * 1.25)
    ctx.stroke()
}

function drawPlatforms() {
    var platforms = JSON.parse(window.sessionStorage.getItem("platforms"))
    for(let i = 0; i < platforms.length; i++) {
        var platform = new Platform(platforms[i][0], platforms[i][1], platforms[i][2], platforms[i][3])
        var canvas = document.getElementById("playarea")
        var ctx = canvas.getContext('2d')    
        ctx.fillStyle  = "green"
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height)
    }
}

function drawEnemy() {

}

function drawBullet() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext('2d')
    var img = document.getElementById("test1")
    var bullets = JSON.parse(window.sessionStorage.getItem("bullets"))
    for(var i = 0; i < bullets.length; i++) {
        if(bullets[i][0] > canvas.width) {
            bullets.splice(i, 1)
            window.sessionStorage.setItem("bullets", JSON.stringify(bullets))
            return
        } else if(bullets[i][0] < 0) {
            bullets.splice(i, 1),
            window.sessionStorage.setItem("bullets", JSON.stringify(bullets))
            return
        }
        if(bullets[i][2] == "left") {
            var x = bullets[i][0] -= 10
        } else if(bullets[i][2] == "right") {
            var x = bullets[i][0] += 10
        }
        var y = bullets[i][1]
        var direction = bullets[i][2]
        ctx.drawImage(img, getData(`bullet${direction.charAt(0).toUpperCase()}`, "sx"), getData(`bullet${direction.charAt(0).toUpperCase()}`, "sy"), getData(`bullet${direction.charAt(0).toUpperCase()}`, "width"), getData(`bullet${direction.charAt(0).toUpperCase()}`, "height"), x, y, getData(`bullet${direction.charAt(0).toUpperCase()}`, "width") * 3, getData(`bullet${direction.charAt(0).toUpperCase()}`, "height") * 3)
        ctx.stroke()
    }   
    window.sessionStorage.setItem("bullets", JSON.stringify(bullets))
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
        //console.log(this.anim)
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
        if(this.anim.includes("Shoot")) {
            if(this.anim.includes("1")) {
                this.anim = "whiteCopShoot2"        
            } else if(this.anim.includes("2")) {
                this.anim = "whiteCopShoot3"
            } else if(this.anim.includes("3")) {
                this.anim = "whiteCopShoot4"
            } else if(this.anim.includes("4")) {
                this.anim = "whiteCopIdle1"
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
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
}   

class Bullet {
    constructor(x, y, direction) {
        this.x = x
        this.y = y
        this.direction = direction
    }
}
