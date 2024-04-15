function enemyAI() {
    var enemys = JSON.parse(window.sessionStorage.getItem("enemys"))
    for(var i = 0; i < enemys.length; i++) {
        var enemy = new Enemy(enemys[i][0], enemys[i][1], enemys[i][2], enemys[i][3], enemys[i][4], enemys[i][5], enemys[i][6], enemys[i][7])
        if(enemy.type == "zombieThree") {
            if(enemy.health > 0) {
                if(enemy.velX == 0) {
                    if(enemy.anim == "idle1") {
                        //enemy.anim = "idle2"
                    } else {
                        enemy.anim = "idle1"
                    }
                } else {
                    if(enemy.anim == "walk1") {
                        //enemy.anim = "walk2"
                    } else {
                        //enemy.anim = "walk1"
                    }
                }
            } else {
                //enemy.anim = "dead"
            }
        }
        enemys[i] = [enemy.x, enemy.y, enemy.type, enemy.health, enemy.damage, enemy.anim, enemy.velX, enemy.velY]
    }
    window.sessionStorage.setItem("enemys", JSON.stringify(enemys))
}