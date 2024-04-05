function main() {
    var canvas = document.getElementById("playarea")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    var steps = {
        "whiteCopIdleR": 1,
        "whiteCopIdleL": 1,
        "whiteCopIdleMax": 6,
        "whiteCopWalkR": 1,
        "whiteCopWalkL": 1,
        "whiteCopWalkMax": 8,
        "whiteCopRunR": 1,
        "whiteCopRunL": 1,
        "whiteCopRunMax": 8,
        "whiteCopJumpR": 1,
        "whiteCopJumpL": 1,
        "whiteCopJumpMax": 8,
        "whiteCopShootR": 1,
        "whiteCopShootL": 1,
        "whiteCopShootMax": 4,
        "whiteCopTaserR": 1,
        "whiteCopTaserL": 1,
        "whiteCopTaserMax": 7,
    }
    window.sessionStorage.setItem("steps", JSON.stringify(steps))
    setTimes()
}

function setTimes() {
    setInterval(() => {
        //whiteCopIdle("right")
    }, 170);
    setInterval(() => {
        whiteCopWalk("right")
    }, 130)
}

function displayAnimation(anim, x, y, direction, size) {
    var steps = JSON.parse(window.sessionStorage.getItem("steps"))
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext('2d')
    var img = document.getElementById("spritesheet")
    var data = `${anim}${steps[`${anim}${direction.charAt(0).toUpperCase()}`]}${direction.charAt(0).toUpperCase()}`
    ctx.drawImage(img, getData(data, "sx"), getData(data, "sy"), getData(data, "width"), getData(data, "height"), x, y, getData(data, "width") * size, getData(data, "height") * size)
    upData(anim, direction)
}

function upData(anim, direction) {
    var steps = JSON.parse(window.sessionStorage.getItem("steps"))
    if (steps[`${anim}Max`] == steps[`${anim}${direction.charAt(0).toUpperCase()}`]) {
        steps[`${anim}${direction.charAt(0).toUpperCase()}`] = 1
    } else {
        steps[`${anim}${direction.charAt(0).toUpperCase()}`]++
    }
    window.sessionStorage.setItem("steps", JSON.stringify(steps))
}

function clearBoard() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext("2d")
    ctx.reset()
}