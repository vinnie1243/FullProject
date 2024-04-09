function physics() {
    clearBoard()
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    var platforms = JSON.parse(window.sessionStorage.getItem("platforms"))
    if(player.velY < 3) {
        player.velY += 3
    }
    var jumping = JSON.parse(window.sessionStorage.getItem("jumping"))
    for(var i = 0; i < platforms.length; i++) {
        var plat = new Platform(platforms[i][0], platforms[i][1], platforms[i][2], platforms[i][3])
        var width = getData(player.anim, "width") * 1.25
        var height = getData(player.anim, "height") * 1.25
        if(player.x < plat.x + plat.width && player.x + width > plat.x && player.y < plat.y + plat.height && player.y + height > plat.y) {
            player.velY = 0
            jumping = false
            player.y = plat.y - height
        }   
    }
    width = null
    height = null
    window.sessionStorage.setItem("player", JSON.stringify(player))
    window.sessionStorage.setItem("jumping", jumping)
}