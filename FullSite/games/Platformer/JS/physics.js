function physics() {
    clearBoard()
    var player = JSON.parse(window.sessionStorage.getItem("player"))
    player = new Player(player.x, player.y, player.anim, player.velX, player.velY)
    var platforms = JSON.parse(window.sessionStorage.getItem("platforms"))
    if(player.velY < 1.5) {
        player.velY += 1.5
    }
    for(var i = 0; i < platforms.length; i++) {
        var plat = new Platform(platforms[i][0], platforms[i][1], platforms[i][2], platforms[i][3])
        //if player x is less than the platforms x + the platforms width and the player x + the player width is greater than the platforms x and the player y is greater than the platforms y + the platforms height and the player y + the player height is less than the platforms y
        console.log(player.anim)
        player.width = getData(player.anim, "width") * 1.25
        player.height = getData(player.anim, "height") * 1.25
        if(player.x < plat.x + plat.width && player.x + player.width > plat.x && player.y < plat.y + plat.height && player.y + player.height > plat.y) {
            player.velY = 0
    
        }
    }
    player.width = null
    player.height = null
    window.sessionStorage.setItem("player", JSON.stringify(player))
}