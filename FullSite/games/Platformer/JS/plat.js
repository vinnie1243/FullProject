function main() {
    gameLoop()
    drawPlayer()
}

function gameLoop() {
    
}

function drawPlayer() {
    var ctx = document.getElementById('playarea').getContext('2d');
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function drawPlatforms() {
    
}