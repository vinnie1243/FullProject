function main() {
    var canvas = document.getElementById("playarea")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    var steps = {
        "whiteCopIdleR": 1,
        "whiteCopIdleL": 1,
        "whiteCopIdleMax": 1,
    }
    window.sessionStorage.setItem("steps", JSON.stringify(steps))
    setTimes()
}

function setTimes() {
    setInterval(() => {
        whiteCopIdle("right")
    }, 170);
    setInterval(() => {
        //whiteCopWalk("right")
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
    //ctx.reset()
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
                this.anim = "whiteCopIdle1"        
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