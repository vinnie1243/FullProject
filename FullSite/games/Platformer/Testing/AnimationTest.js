function main() {
    var canvas = document.getElementById("playarea")
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    setVals()
    setInterval(() => {
        loop()
    }, 16.6);
    //window.sessionStorage.setItem("steps", JSON.stringify(steps))
    //arSoldier
    window.sessionStorage.setItem("arSoldierIdleRunning", false)
    window.sessionStorage.setItem("arSoldierWalkRunning", false)
    window.sessionStorage.setItem("arSoldierRunRunning", false)
    window.sessionStorage.setItem("arSoldierHipfireRunning", false)
    window.sessionStorage.setItem("arSoldierHangRunning", false)
    window.sessionStorage.setItem("arSoldierShootRunning", false)
    //whiteCopMale
    window.sessionStorage.setItem("whiteCopMaleIdleRunning", false)
}

function setVals() {
    //arSoldier
    window.sessionStorage.setItem("arSoldierIdle", JSON.stringify({x: 60, y: 5, anim: "arSoldierIdle1", size: 0.5}))
    window.sessionStorage.setItem("arSoldierWalk", JSON.stringify({x: 95, y: 5, anim: "arSoldierWalk1", size: 0.5}))
    window.sessionStorage.setItem("arSoldierRun", JSON.stringify({x: 125, y: 5, anim: "arSoldierRun1", size: 0.5}))
    window.sessionStorage.setItem("arSoldierHipfire", JSON.stringify({x: 160, y: 5, anim: "arSoldierHipfire1", size: 0.5}))
    window.sessionStorage.setItem("arSoldierHang", JSON.stringify({x: 210, y: 5, anim: "arSoldierHang1", size: 0.5}))
    window.sessionStorage.setItem("arSoldierShoot", JSON.stringify({x: 230, y: 5, anim: "arSoldierShoot1", size: 0.5}))
    //whiteCopMale
    window.sessionStorage.setItem("whiteCopMaleIdle", JSON.stringify({x: 85, y: 70, anim: "whiteCopMaleIdle1", size: 0.5}))
}

function loop() {
    clearBoard()
    //arSoldier
    drawText("arSoldier", 4, 30)
    arSoldierIdle()
    arSoldierWalk()
    arSoldierRun()
    arSoldierHipfire()
    arSoldierHang()
    arSoldierShoot()
    //whiteCopMale
    drawText("whiteCopMale", 4, 96)
    whiteCopMaleIdle()
    display()
}

function drawText(text, x, y) {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext("2d")
    ctx.fontsize = "1px"
    ctx.font = "12px Arial";
    ctx.fillText(text, x, y);
}

function display() {
    //arSoldier
    var arSoldierIdle = JSON.parse(window.sessionStorage.getItem("arSoldierIdle"))
    var arSoldierWalk = JSON.parse(window.sessionStorage.getItem("arSoldierWalk"))
    var arSoldierRun = JSON.parse(window.sessionStorage.getItem("arSoldierRun"))
    var arSoldierHipfire = JSON.parse(window.sessionStorage.getItem("arSoldierHipfire"))
    var arSoldierHang = JSON.parse(window.sessionStorage.getItem("arSoldierHang"))
    var arSoldierShoot = JSON.parse(window.sessionStorage.getItem("arSoldierShoot"))
    //whiteCopMale
    var whiteCopMaleIdle = JSON.parse(window.sessionStorage.getItem("whiteCopMaleIdle"))
    //arSoldier
    displayAnimation(arSoldierIdle.anim, arSoldierIdle.x, arSoldierIdle.y, arSoldierIdle.size)
    displayAnimation(arSoldierWalk.anim, arSoldierWalk.x, arSoldierWalk.y, arSoldierWalk.size)
    displayAnimation(arSoldierRun.anim, arSoldierRun.x, arSoldierRun.y, arSoldierRun.size)
    displayAnimation(arSoldierHipfire.anim, arSoldierHipfire.x, arSoldierHipfire.y, arSoldierHipfire.size)
    displayAnimation(arSoldierHang.anim, arSoldierHang.x, arSoldierHang.y, arSoldierHang.size)
    displayAnimation(arSoldierShoot.anim, arSoldierShoot.x, arSoldierShoot.y, arSoldierShoot.size)
    //whiteCopMale
    displayAnimation(whiteCopMaleIdle.anim, whiteCopMaleIdle.x, whiteCopMaleIdle.y, whiteCopMaleIdle.size)
}

function displayAnimation(anim, x, y, size) {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext('2d')
    var img = document.getElementById("spritesheet")
    ctx.drawImage(img, getData(anim, "sx"), getData(anim, "sy"), getData(anim, "width"), getData(anim, "height"), x, y, getData(anim, "width") * size, getData(anim, "height") * size)
}

function clearBoard() {
    var canvas = document.getElementById("playarea")
    var ctx = canvas.getContext("2d")
    ctx.reset()
}

class Animate {
    constructor(x, y, anim, size) {
        this.x = x
        this.y = y
        this.anim = anim
        this.size = size
    }

    getAnim() {
        if(this.anim.includes("Idle")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle2" 
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleIdle2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle3"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleIdle3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle4"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleIdle4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle5"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleIdle5"
                }
            } else if(this.anim.includes("5")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle6"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleIdle6"
                }
            } else if(this.anim.includes("6")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle7"
                } else if(this.anim.includes("whiteCopMale")) {
                    this.anim = "whiteCopMaleIdle1"
                }
            } else if(this.anim.includes("7")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierIdle1"
                } else if(this.anim.includes("whiteCopMale")) {
                    console.error("Error impossible animation")
                }
            }
        }
        if (this.anim.includes("Walk")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk5"
                }
            } else if(this.anim.includes("5")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk6"
                }
            } else if(this.anim.includes("6")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk7"
                }
            } else if(this.anim.includes("7")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierWalk1"
                }
            }
        }
        if(this.anim.includes("Run")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun5"
                }
            } else if(this.anim.includes("5")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun6"
                }
            } else if(this.anim.includes("6")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun7"
                }
            } else if(this.anim.includes("7")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun8"
                }
            } else if(this.anim.includes("8")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierRun1"
                }
            }
        }
        if(this.anim.includes("Hipfire")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHipfire2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHipfire3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHipfire4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHipfire1"
                }
            }
        }
        if(this.anim.includes("Hang")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHang2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHang3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHang4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHang5"
                }
            } else if(this.anim.includes("5")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierHang1"
                }
            }
        }
        if(this.anim.includes("Shoot")) {
            if(this.anim.includes("1")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierShoot2"
                }
            } else if(this.anim.includes("2")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierShoot3"
                }
            } else if(this.anim.includes("3")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierShoot4"
                }
            } else if(this.anim.includes("4")) {
                if(this.anim.includes("arSoldier")) {
                    this.anim = "arSoldierShoot1"
                }
            }
        }
        return this.anim
    }
}