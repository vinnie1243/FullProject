var offset = 0
function main() {    
    var lvl = window.localStorage.getItem("level")
    if(lvl == undefined) {
        window.localStorage.setItem("level", 1)
    }
    var canvas = document.getElementById("playarea")
    canvas.style.width = window.innerWidth * 0.9
    canvas.style.height = window.innerHeight
    canvas.width = window.innerWidth * 1.5
    canvas.height = window.innerHeight * 1.5    
    var player = new Player(canvas.width/3, 600, "arSoldierIdle1", 0, 0)
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("hasWon", false)
    window.sessionStorage.setItem("Dim", [window.innerWidth * 0.9, window.innerHeight, canvas.width, canvas.height])
    window.sessionStorage.setItem("direction", "right")
    window.sessionStorage.setItem("idle", true)
    window.sessionStorage.setItem("walk", false)
    window.sessionStorage.setItem("jumping", false)
    window.sessionStorage.setItem("run", false)
    window.sessionStorage.setItem("shoot", false)
    window.sessionStorage.setItem("idleRunning", false)
    window.sessionStorage.setItem("walkRunning", false)
    window.sessionStorage.setItem("runRunning", false)
    window.sessionStorage.setItem("shootRunning", false)
    window.sessionStorage.setItem("oldPosX", 500)
    window.sessionStorage.setItem("oldPosY", 20)
    window.sessionStorage.setItem("Keys", JSON.stringify({"a": false,"d": false,"shift": false,"space": false,}))
    window.sessionStorage.setItem("oldAnim", "arSoldierIdle1")
    //window.sessionStorage.setItem("platforms", JSON.stringify([[-50000, canvas.height * 0.95, 100000, 50], [0, canvas.height * 0.74, 100, 50, 2], [canvas.width - 100, canvas.height * 0.75, 100, 50, 3], [canvas.width - 100, canvas.height * 0.95, 100, 50, 4]]))
    window.sessionStorage.setItem("bullets", JSON.stringify([]))
    startlevel()
    setInterval(() => {
        gameLoop()
    }, 16.6);
    clearBoard()
    //drawPlayer()    
}

function startlevel() {
    var lvl = window.localStorage.getItem("level")
    var data = level(lvl)
    var platforms = data.platforms
    var backgrounds = data.backgrounds
    var enemys = data.enemys
    window.sessionStorage.setItem("enemys", JSON.stringify(enemys))
    window.sessionStorage.setItem("platforms", JSON.stringify(platforms))
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
    let x = e.clientX
    let y = 500
    if(x < window.innerWidth / 2) {
        bullets.push([player.x, player.y + 16, "left", 200])
        window.sessionStorage.setItem("direction", "left")
    } else if(x > window.innerWidth / 2) {
        bullets.push([player.x + 70, player.y + 16, "right", 200])
        window.sessionStorage.setItem("direction", "right")
    }
    window.sessionStorage.setItem("bullets", JSON.stringify(bullets))
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    player.anim = "arSoldierShoot1"
    window.sessionStorage.setItem("player", JSON.stringify(player))
}

function keyUp(e) {
    var keys = JSON.parse(window.sessionStorage.getItem("Keys"))
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
        keys.space = false
    } else if(key == "a" && e.shiftKey == true) {
        keys.a = false
        keys.shift = false
    } else if(key == "a") {
        keys.a = false
    } else if(key == "d" && e.shiftKey == true) {
        keys.d = false
        keys.shift = false
    } else if(key == "d") {
        keys.d = false
    }
    window.sessionStorage.setItem("Keys", JSON.stringify(keys))
}

function keyDown(e) {
    var keys = JSON.parse(window.sessionStorage.getItem("Keys"))
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
        keys.space = true
    } else if(key == "a" && e.shiftKey == true) {
        keys.a = true 
        keys.shift = true
        window.sessionStorage.setItem("direction", "left")
    } else if(key == "a") {
        keys.a = true
        window.sessionStorage.setItem("direction", "left")
    } else if(key == "d" && e.shiftKey == true) {
        keys.d = true
        keys.shift = true
        window.sessionStorage.setItem("direction", "right")
    } else if(key == "d") {
        keys.d = true
        window.sessionStorage.setItem("direction", "right")
    } else if(key == "m") {
        randomPlatform()
    }
    window.sessionStorage.setItem("Keys", JSON.stringify(keys))
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
    var jumping = window.sessionStorage.getItem("jumping")
    if(jumping == "false") {
        jumping = true
        var direction = window.sessionStorage.getItem("direction")
        player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
        player.velY = -22.5
        player.velX *= 2.2
        window.sessionStorage.setItem("player", JSON.stringify(player))
        window.sessionStorage.setItem("jumping", jumping)
    }
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
    } else if(key == 77) {
        return "m"
    } else {
        return key
    }
}

function keyed() {
    var keys = JSON.parse(window.sessionStorage.getItem("Keys"))
    var jumping = JSON.parse(window.sessionStorage.getItem("jumping"))
    if(keys.space == true && jumping == false) {
        jump()
    } else if(keys.a == true && keys.shift == true) {
        run("left")
    } else if(keys.a == true) {
        moveLeft()
    } else if(keys.d == true && keys.shift == true) {
        run("right")
    } else if(keys.d == true) {
        moveRight()
    }
}

function gameLoop() {
    window.sessionStorage.setItem("letMove", 4)
    keyed()
    move();
    drawHitboxes()
    physics() 
    enemyAI()
    moveEnemy()
    animate()
    center()
    slow();
    deathChck();
}

function moveEnemy() {
    var enemys = JSON.parse(window.sessionStorage.getItem("enemys"))
    var holdArr = []
    //console.log(enemys)
    for(var i = 0; i < enemys.length; i++) {
        if(enemys[i] != null) {
            holdArr.push(enemys[i])
        }
    }
    enemys = holdArr
    for(var i = 0; i < enemys.length; i++) {
        var enemy = new Enemy(enemys[i][0], enemys[i][1], enemys[i][2], enemys[i][3], enemys[i][4], enemys[i][5], enemys[i][6], enemys[i][7])
        enemy.y += enemy.velY
        enemy.x += enemy.velX
        enemys[i] = [enemy.x, enemy.y, enemy.type, enemy.health, enemy.damage, enemy.anim, enemy.velX, enemy.velY]
    }
    window.sessionStorage.setItem("enemys", JSON.stringify(enemys))
}

function deathChck() {
    var canvas = document.getElementById("playarea")
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    if(player.y > canvas.height) {
        //window.location = "lose.html"
    }
}

function center() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext("2d")
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    var middle = canvas.width / 2
    offset = Math.abs(middle-player.x)
    ctx.save();
    ctx.translate((middle - player.x),(0));
    player.x += middle
    player.x = Math.round(100*player.x)/100;  
    drawPlatforms()
    drawEnemy()
    drawBullet()
    drawPlayer()
    ctx.restore();
 
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

function winner() {
    window.location = "win.html"
}

function animate() {
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    if(player.anim.includes("Idle")) {
        if(player.anim.includes("whiteCopMale")) {
            whiteCopIdle()
        } else if(player.anim.includes("arSoldier")) {
            arSoldierIdle()
        }
    } else if(player.anim.includes("Walk")) {
        if(player.anim.includes("whiteCopMale")) {
            whiteCopWalk()
        } else if(player.anim.includes("arSoldier")) {
            arSoldierWalk() 
        }
    
    } else if(player.anim.includes("Run")) {
        if(player.anim.includes("whiteCopMale")) {
            whiteCopRun()
        }
    } else if(player.anim.includes("Shoot")) {
        if(player.anim.includes("whiteCopMale")) {
            whiteCopShoot()
        } else if(player.anim.includes("arSoldier")) {
            arSoldierShoot()
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
    player.x = Math.round(100*player.x) / 100;
    player.y = Math.round(100*player.y) / 100;    
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
        player.anim = "arSoldierRun1"
        walk = false
    } else if(player.velX < -5) {
        player.anim = "arSoldierRun1"
        idle = false
        walk = false
    }
    if(player.velX > 0 && player.velX < 1.5 && player.anim.includes("Run") || player.velX > 0 && player.velX < 10 && player.anim.includes("Idle")) {
        idle = false
        walk = true
        player.anim = "arSoldierWalk1"
    }
    if(player.velX < -0 && player.velX > 0 && player.anim.includes("Run") || player.velX < 0 && player.velX > -1.5 && player.anim.includes("Idle")) {
        idle = false
        walk = true
       player.anim = "arSoldierWalk1"
    }
    if(player.velX < 0.1 && player.velX > -0.1 && player.anim.includes("Walk")) {
        idle = true
        walk = false 
        player.anim = "arSoldierIdle1"
    }
    if(shoot == true && num == 1) {
        player.anim = `arSoldierShoot1`
    } else if(shoot == true && num == 2) {
        player.anim = `arSoldierShoot2`
    } else if(shoot == true && num == 3) {
        player.anim = `arSoldierShoot3`
    } else if(shoot == true && num == 4) {
        player.anim = `arSoldierShoot4`
    }
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("idle", idle)
    window.sessionStorage.setItem("walk", walk)
}   

function drawEnemy() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext('2d')    
    var enemys = JSON.parse(window.sessionStorage.getItem("enemys"))
    var image = document.getElementById("test1")
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    for(var i = 0; i < enemys.length; i++) {
        var enemy = new Enemy(enemys[i][0], enemys[i][1], enemys[i][2], enemys[i][3], enemys[i][4], enemys[i][5], enemys[i][6], enemys[i][7])
        var short = `${enemy.type}${enemy.anim.charAt(0).toUpperCase()}${enemy.anim.substring(1)}`
        if(player.x < enemy.x) {
            ctx.save()
            ctx.scale(-1, 1);
            ctx.translate((-enemy.x * 2) , 0)
            ctx.drawImage(image, getData(short, "sx"), getData(short, "sy"), getData(short, "width"), getData(short, "height"), enemy.x, enemy.y, getData(short, "width") * 1.25, getData(short, "height") * 1.25)            
            ctx.restore()
        } else {
            ctx.drawImage(image, getData(short, "sx"), getData(short, "sy"), getData(short, "width"), getData(short, "height"), enemy.x, enemy.y, getData(short, "width") * 1.25, getData(`${enemy.type}${enemy.anim.charAt(0).toUpperCase()}${enemy.anim.substring(1)}`, "height") * 1.25)
        }
    }
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
    var direction = window.sessionStorage.getItem("direction")
    var img = document.getElementById("test1")
    ctx.moveTo(0, 0)    
    //ctx.fillStyle  = "red"
    //ctx.fillRect(player.x, player.y, 50, 100)
    ctx.save()
    ctx.translate(player.x, player.y)
    if(direction == "left") {
        ctx.scale(-1, 1); 
        ctx.translate(-getData(player.anim, "width"), 0)
    } 
    ctx.drawImage(img, getData(player.anim, "sx"), getData(player.anim, "sy"), getData(player.anim, "width"), getData(player.anim, "height"), 0, 0, getData(player.anim, "width") * 1.25, getData(player.anim, "height") * 1.25)
    player.width = getData(player.anim, "width") * 1.25
    player.height = getData(player.anim, "height") * 1.25
    ctx.restore();
}

function drawPlatforms() {
    var platforms = JSON.parse(window.sessionStorage.getItem("platforms"))
    for(let i = 0; i < platforms.length; i++) {
        var platform = new Platform(platforms[i][0], platforms[i][1], platforms[i][2], platforms[i][3])
        var canvas = document.getElementById("playarea")
        var ctx = canvas.getContext('2d')    
        ctx.fillStyle  = platforms[i][4]
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height)
    }
}

function drawBullet() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext('2d')
    var img = document.getElementById("test1")
    var bullets = JSON.parse(window.sessionStorage.getItem("bullets"))
    for(var i = 0; i < bullets.length; i++) {
        if(bullets[i][3] == 0) {
            bullets.splice(i, 1)
            window.sessionStorage.setItem("bullets", JSON.stringify(bullets))
            return
        } else {
            bullets[i][3] -= 1
        }
        if(bullets[i][2] == "left") {
            var x = bullets[i][0] -= 10
        } else if(bullets[i][2] == "right") {
            var x = bullets[i][0] += 10
        }       
        var y = bullets[i][1]
        var direction = bullets[i][2]
        ctx.drawImage(img, getData(`bullet${direction.charAt(0).toUpperCase()}`, "sx"), getData(`bullet${direction.charAt(0).toUpperCase()}`, "sy"), getData(`bullet${direction.charAt(0).toUpperCase()}`, "width"), getData(`bullet${direction.charAt(0).toUpperCase()}`, "height"), x, y, getData(`bullet${direction.charAt(0).toUpperCase()}`, "width")/2, getData(`bullet${direction.charAt(0).toUpperCase()}`, "height")/2) 
    }   
    window.sessionStorage.setItem("bullets", JSON.stringify(bullets))
}

class Enemy {
    constructor(x, y, type, health, damage, anim, velX, velY, pathx1, pathx2) {
        this.x = x
        this.y = y
        this.type = type
        this.health = health
        this.damage = damage
        this.anim = anim
        this.velX = velX
        this.velY = velY
        this.pathx1 = pathx1
        this.pathx2 = pathx2
    }
}

class Ally {
    constructor(x, y, type, health, damage, anim, velX, velY, weapon) {
        this.x = x
        this.y = y
        this.type = type
        this.health = health
        this.damage = damage
        this.anim = anim
        this.velX = velX
        this.velY = velY
        this.weapon = weapon
    }
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
                this.anim = "arSoldierIdle1"        
            } else if(this.anim.includes("2")) {
                this.anim = "arSoldierIdle3"
            } else if(this.anim.includes("3")) {
                this.anim = "arSoldierIdle4"
            } else if(this.anim.includes("4")) {
                this.anim = "arSoldierIdle5"
            } else if(this.anim.includes("5")) {
                this.anim = "arSoldierIdle6"
            } else if(this.anim.includes("6")) {
                this.anim = "arSoldierIdle1"
            }
        }
        if (this.anim.includes("Walk")) {
            if(this.anim.includes("1")) {
                this.anim = "arSoldierWalk2"        
            } else if(this.anim.includes("2")) {
                this.anim = "arSoldierWalk3"
            } else if(this.anim.includes("3")) {
                this.anim = "arSoldierWalk4"
            } else if(this.anim.includes("4")) {
                this.anim = "arSoldierWalk5"
            } else if(this.anim.includes("5")) {
                this.anim = "arSoldierWalk6"
            } else if(this.anim.includes("6")) {
                this.anim = "arSoldierWalk7"
            } else if(this.anim.includes("7")) {
                this.anim = "arSoldierWalk1"
            }
        }
        if(this.anim.includes("Run")) {
            if(this.anim.includes("1")) {
                this.anim = "arSoldierRun1"        
            } else if(this.anim.includes("2")) {
                this.anim = "arSoldierRun3"
            } else if(this.anim.includes("3")) {
                this.anim = "arSoldierRun4"
            } else if(this.anim.includes("4")) {
                this.anim = "arSoldierRun5"
            } else if(this.anim.includes("5")) {
                this.anim = "arSoldierRun6"
            } else if(this.anim.includes("6")) {
                this.anim = "arSoldierRun7"
            } else if(this.anim.includes("7")) {
                this.anim = "arSoldierRun8"
            } else if(this.anim.includes("8")) {
                this.anim = "arSoldierRun1"
            }
        }
        if(this.anim.includes("Shoot")) {
            if(this.anim.includes("1")) {
                this.anim = "arSoldierShoot2"        
            } else if(this.anim.includes("2")) {
                this.anim = "arSoldierShoot3"
            } else if(this.anim.includes("3")) {
                this.anim = "arSoldierShoot4"
            } else if(this.anim.includes("4")) {
                this.anim = "arSoldierIdle1"
            }
        }
        return this.anim
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

function randomPlatform() {
    var platforms = JSON.parse(window.sessionStorage.getItem("platforms"))
    platforms.push([Math.random() * 1500, Math.random() * (850 - 200) + 200, 50, 50, "gray"])
    window.sessionStorage.setItem("platforms", JSON.stringify(platforms))   
}

function drawHitboxes() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext('2d')
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    var enemys = JSON.parse(window.sessionStorage.getItem("enemys"))
    var bullets = JSON.parse(window.sessionStorage.getItem("bullets"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    ctx.strokeStyle = "red"
    ctx.strokeRect(0, 0, player.width, player.height)
    for(var i = 0; i < enemys.length; i++) {
        var enemy = new Enemy(enemys[i][0], enemys[i][1], enemys[i][2], enemys[i][3], enemys[i][4], enemys[i][5], enemys[i][6], enemys[i][7])
        ctx.strokeRect(enemy.x, enemy.y, 50, 100)
    }
    for(var i = 0; i < bullets.length; i++) {
        ctx.strokeRect(bullets[i][0], bullets[i][1], 10, 10)
    }
}