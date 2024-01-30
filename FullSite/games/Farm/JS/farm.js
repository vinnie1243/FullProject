function main() {
    var size = window.innerWidth
    var off = size / 10
    var s = size - off
    s = s / 14.6
    for(var i = 0; i < 330; i++) {
        var con = document.getElementById("con")
        var sq = document.createElement("div")
        sq.style.width = "100%"
        sq.style.height = "100%"
        sq.style.backgroundColor = "#751D0A"
        sq.style.border = "1px solid black"
        sq.id = i + 1
        con.style.border = "3px solid black"
        con.appendChild(sq)
    } 
}

function renderFoods() {

}

function renderMachines() {

}

function renderAnimals() {

}

function spawnCrop(food) {
    switch (food) {
        case "tomato":
            if(lockChck()) {
                var plant = document.createElement("img")
                plant.src = "Media/Crops/T1/tomato.png"
                plant.classList.add("cropImage")
                var check = 1;
                while(check == 1) {
                    var num = Math.floor((Math. random() * 330) + 1);
                    var el = document.getElementById(num)
                    if(el.children.length != 1) {
                        el.appendChild(plant)
                        console.log("test")
                        check = 0
                    }
                }
            }
        break;
    }
}

function spawnBuilding() {

}

function spawnPen() {

}

function gameLoop() {

    gameLoop()
}

function updataCropVals() {

}

function lockChck() {
    return true;
}

function merge() {
    
}