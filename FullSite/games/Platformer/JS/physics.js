function physics() {
    var enemys = JSON.parse(window.sessionStorage.getItem("enemys"))
    var leng = enemys.length
    clearBoard()
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    var platforms = JSON.parse(window.sessionStorage.getItem("platforms"))
    if(player.velY < 10) {
        player.velY += 1
    }
    var win = JSON.parse(window.sessionStorage.getItem("hasWon"))
    var jumping = JSON.parse(window.sessionStorage.getItem("jumping"))
    for(var i = 0; i < platforms.length; i++) {
        var plat = new Platform(platforms[i][0], platforms[i][1], platforms[i][2], platforms[i][3])
        var width = getData(player.anim, "width") * 1.25
        var height = getData(player.anim, "height") * 1.25
        if(player.x < plat.x + plat.width && player.x + width > plat.x && player.y < plat.y + plat.height && player.y + height > plat.y) {
            if(platforms[i][5] == "W") {
                if(win == false) {
                    window.sessionStorage.setItem("hasWon", true)
                    winner()
                }
            } else {
                player.velY = 0
                player.y -= 1
            }
            jumping = false
        }   
        var right = 0
        var left = 0
        var top = 0
        var bottom = 0
        //rightFace
        if(player.x < plat.x + plat.width) {
            right = 1
        }
        //leftFace
        if(player.x + width > plat.x) {
            left = 1
        }
        //topFace
        if(player.y + height > plat.y * 1.009) {
            top = 1
        }
        //bottomFace 
        if(player.y < plat.y + plat.height) {
            bottom = 1
        }
        var coll = 0
        if(right == 1 && left == 1 && top == 1 && bottom == 1) {
            coll = 1
        }

        //d1 = right
        //d2 = left
        //d3 = top
        //d4 = bottom
        var d1 = 0
        var d2 = 0
        var d3 = 0
        var d4 = 0
        var win = JSON.parse(window.sessionStorage.getItem("hasWon"))
        if(coll == 1) {
            d1 = Math.abs(player.x - (plat.x + plat.width))
            d2 = Math.abs((player.x + width) - plat.x)
            d3 = Math.abs((player.y + height) - plat.y) 
            d4 = Math.abs(player.y - (plat.y + plat.height))
        }
        if(d1 < d2 && d1 < d3 && d1 < d4) {
            if(platforms[i][5] != "W") {
                player.x = (plat.x + plat.width) + 4
                player.velX = 0
            }
        } else if(d2 < d1 && d2 < d3 && d2 < d4) {
            if(platforms[i][5] != "W") {
                player.x = (plat.x - width) - 4
                player.velX = 0
            }
        } else if(d3 < d1 && d3 < d2 && d3 < d4) {
            if(platforms[i][5] != "W") {
                player.y = plat.y - height
                player.velY = 0
            }
        } else if(d4 < d1 && d4 < d2 && d4 < d3) {
            if(platforms[i][5] != "W") {
                player.y = plat.y + plat.height
                player.velY = 0
            }
        }
    }
    width = null
    height = null
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("jumping", jumping)   
    var bullets = JSON.parse(window.sessionStorage.getItem("bullets"))
    for(var i = 0; i < bullets.length; i++) {
        var bull = new Bullet(bullets[i][0], bullets[i][1], bullets[i][2])
        var width = getData(`bullet${bull.direction.charAt(0).toUpperCase()}`, "width") * 1.25
        var height = getData(`bullet${bull.direction.charAt(0).toUpperCase()}`, "height") * 1.25
        for(var j = 0; j < platforms.length; j++) {
            var plat = new Platform(platforms[j][0], platforms[j][1], platforms[j][2], platforms[j][3])
            var right = 0
            var left = 0
            var top = 0
            var bottom = 0
            //rightFace
            if(bull.x < plat.x + plat.width) {
                right = 1
            }
            //leftFace
            if(bull.x + width > plat.x) {
                left = 1
            }
            //topFace
            if(bull.y + height > plat.y * 1.009) {
                top = 1
            }
            //bottomFace 
            if(bull.y < plat.y + plat.height) {
                bottom = 1
            }
            var coll = 0
            if(right == 1 && left == 1 && top == 1 && bottom == 1) {
                coll = 1
            }
    
            //d1 = right
            //d2 = left
            //d3 = top
            //d4 = bottom
            var d1 = 0
            var d2 = 0
            var d3 = 0
            var d4 = 0
            if(coll == 1) {
                d1 = Math.abs(bull.x - (plat.x + plat.width))
                d2 = Math.abs((bull.x + width) - plat.x)
                d3 = Math.abs((bull.y + height) - plat.y) 
                d4 = Math.abs(bull.y - (plat.y + plat.height))
            }
            if(d1 < d2 && d1 < d3 && d1 < d4) {
                bullets.splice(j, 1)
            } else if(d2 < d1 && d2 < d3 && d2 < d4) {
                bullets.splice(j, 1)
            } else if(d3 < d1 && d3 < d2 && d3 < d4) {
                bullets.splice(j, 1)
            } else if(d4 < d1 && d4 < d2 && d4 < d3) {
                bullets.splice(j, 1)
            }
        }
    }
    //enemys
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    for(var i = 0; i < enemys.length; i++) {
        if(enemys[i][7] < 10) {
            enemys[i][7] += 1
        }
    }
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    for(var j = 0; j < leng; j++) {
        var short = `${enemys[j][2]}${enemys[j][5].charAt(0).toUpperCase()}${enemys[j][5].substring(1)}`
        var enemy = new Enemy(enemys[j][0], enemys[j][1], enemys[j][2], enemys[j][3], enemys[j][4], enemys[j][5], enemys[j][6], enemys[j][7])
        var width2 = getData(short, "width") * 1.25
        var height2 = getData(short, "height") * 1.25

        var direction2
        if(enemy.x < plat.x + plat.width && enemy.x + width2 > plat.x && enemy.y < plat.y + plat.height && enemy.y + height2 > plat.y) {
            enemy.velY = 0
            enemy.y = plat.y - height2
            jumping = false
        }   
        if(player.x > enemys[j][0]) {
            direction2 = "left"
        } else {
            direction2 = "right"
        }
        for(var i = 0; i < platforms.length; i++) {
            var plat = new Platform(platforms[i][0], platforms[i][1], platforms[i][2], platforms[i][3])
            if(enemy.x < plat.x + plat.width && enemy.x + width2 > plat.x && enemy.y < plat.y + plat.height && enemy.y + height2 > plat.y) {
                enemy.velY = 0
                enemy.y -= 1
                jumping = false
            }   
            var right = 0
            var left = 0
            var top = 0
            var bottom = 0
            //rightFace
            if(direction2 == "right") {
                if(enemy.x - width2 < plat.x + plat.width) {
                    right = 1
                }
            } else {
                if(enemy.x < plat.x + plat.width) {
                    right = 1
                }
            }
            leng = enemys.length
            //leftFace
            if(direction2 == "right") {
                if(enemy.x + width2 > plat.x) {
                    left = 1
                }
            } else {
                if(enemy.x - width2 > plat.x) {
                    left = 1
                }
            }
            //topFace
            if(enemy.y + height2 > plat.y * 1.009) {
                top = 1
            }
            //bottomFace 
            if(enemy.y < plat.y + plat.height) {
                bottom = 1
            }
            var coll = 0
            if(right == 1 && left == 1 && top == 1 && bottom == 1) {
                coll = 1
            }
    
            //d1 = right
            //d2 = left
            //d3 = top
            //d4 = bottom
            var da1 = 0
            var da2 = 0
            var da3 = 0
            var da4 = 0
            if(coll == 1) {
                da1 = Math.abs(enemy.x - (plat.x + plat.width))
                da2 = Math.abs((enemy.x + width) - plat.x)
                da3 = Math.abs((enemy.x + height) - plat.y) 
                da4 = Math.abs(enemy.x - (plat.y + plat.height))
            }
            if(da1 < da2 && da1 < da3 && da1 < da4) {
                enemy.x = (plat.x + plat.width) + 4
                enemy.velX = 0
            } else if(da2 < da1 && da2 < da3 && da2 < da4) {
                enemy.x = (plat.x - width) - 4
                enemy.velX = 0
            } else if(da3 < da1 && da3 < da2 && da3 < da4) {
                enemy.y = plat.y - height2  
                enemy.velY = 0
            } else if(da4 < da1 && da4 < da2 && da4 < da3) {
                enemy.y = plat.y - height2
                enemy.velY = 0
            }
        }
        enemys[j] = [enemy.x, enemy.y, enemy.type, enemy.health, enemy.damage, enemy.anim, enemy.velX, enemy.velY]
        if(enemys[j][1] > 1000) {
            enemys.splice(j, 1)
        }
        window.sessionStorage.setItem("enemys", JSON.stringify(enemys))
    }
}