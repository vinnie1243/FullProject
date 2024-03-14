function main() {
    renderGame()
    window.sessionStorage.setItem("playerDeck", [])
    window.sessionStorage.setItem("computerDeck", [])
    window.sessionStorage.setItem("playP", [])
    window.sessionStorage.setItem("playC", [])
    window.sessionStorage.setItem("playerDiscard", [])
    window.sessionStorage.setItem("computerDiscard", [])
    //var decks = window.prompt("how many decks do you want in the game?", 1)
    var decks = 5
    var cards = genCards(decks)
    dealCards(cards)
    loop()
}

function renderGame() {
    //container
    var con = document.getElementById("con")
    //hold
    var holder = document.createElement("div")
    holder.style.display = "flex"
    holder.style.flexDirection = "column"
    //computer cards
    var oppCards = document.createElement("div")
    oppCards.style.width = "70vw"
    oppCards.style.height = "33vh"
    oppCards.style.float = "top"
    oppCards.style.backgroundColor = "blue"
    var cardsC = document.createElement("div")
    cardsC.style.width = "15%"
    cardsC.style.height = "80%"
    cardsC.style.marginLeft = "45%"
    cardsC.style.marginTop = "2%"
    var cardsImg = document.createElement("img")
    cardsImg.classList.add("cback")
    cardsImg.src = "Media/Images/cardback.jfif"
    cardsC.appendChild(cardsImg)
    oppCards.appendChild(cardsC)
    //playarea
    var playArea = document.createElement("div")
    playArea.style.width = "70vw"
    playArea.style.height = "34vh"
    playArea.id = "play"
    playArea.style.backgroundColor = "green"
    playArea.style.display = "flex"
    var play = document.createElement("div") 
    play.id = "player"
    play.style.width = "15%"
    play.style.marginLeft = "34.5%"
    play.style.marginTop = "3.5%"
    play.style.height = "80%"
    play.style.backgroundColor = "gold"
    playArea.appendChild(play)
    var play2 = document.createElement("div") 
    play2.id = "computer"
    play2.style.width = "15%"
    play2.style.marginLeft = "6%"
    play2.style.marginTop = "3.5%"
    play2.style.height = "80%"
    play2.style.backgroundColor = "gold"
    playArea.appendChild(play2)
    //player cards
    var cards = document.createElement("div")
    cards.style.width = "70vw"
    cards.style.height = "33vh"
    cards.style.float = "top"
    cards.style.backgroundColor = "red"
    var cardsP = document.createElement("div")
    cardsP.style.width = "15%"
    cardsP.style.height = "80%"
    cardsP.style.marginLeft = "45%"
    var cardImg = document.createElement("img")
    cardImg.classList.add("cback")
    cardImg.src = "Media/Images/cardback.jfif"
    cardImg.setAttribute("onclick", "play()")
    cardImg.style.cursor = "pointer"
    cardsP.style.marginTop = "2%"
    cardsP.appendChild(cardImg)
    cards.appendChild(cardsP)
    //cardcount1
    var cardCount1 = document.createElement("div")
    cardCount1.style.width = "10vw"
    cardCount1.style.height = "100vh"
    cardCount1.style.float = "left"
    cardCount1.style.textAlign = "center"
    var c1H = document.createElement("div")
    var pText = document.createElement("h2")
    pText.innerHTML = "Player"
    var c1Num = document.createElement("h3")
    c1Num.id = "plaNum"
    c1Num.innerHTML = "Count: 0"
    c1H.appendChild(pText)
    c1H.appendChild(c1Num)
    cardCount1.appendChild(c1H)
    //cardcount2
    var cardCount2 = document.createElement("div")
    cardCount2.style.width = "10vw"
    cardCount2.style.height = "100vh"
    cardCount2.style.float = "right"
    cardCount2.style.textAlign = "center"
    var c2H = document.createElement("div")
    var cText = document.createElement("h2")
    cText.innerHTML = "Computer"
    var c2Num = document.createElement("h3")
    c2Num.id = "comNum"
    c2Num.innerHTML = "Count: 0"
    c2H.appendChild(cText)
    c2H.appendChild(c2Num)
    cardCount2.appendChild(c2H)
    holder.appendChild(oppCards)
    holder.appendChild(playArea)
    holder.appendChild(cards)
    con.appendChild(cardCount1)
    con.appendChild(holder)
    con.appendChild(cardCount2)
}

function del() {

}

function genCards(decks) {
    /*
    a = ace
    j = jack
    q = queen
    k = king
    H = hearts
    S = spades
    C = clubs
    D = diamonds
    */
    const CARDARR = ["aH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "jH", "qH", "kH", "aS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "jS", "qS", "kS", "aC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "jC", "qC", "kC", "aD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "jD", "qD", "kD"]
    var cards = []
    for(var i = 0; i < decks; i++) {
        for(var j = 0; j < 52; j++) {
            cards.push(CARDARR[j])
            cards = shuffle(cards)
        }
    }
    return cards
}

function dealCards(cards) {
    var pDeck = []
    var cDeck = []
    var last = 1
    console.log(cards)
    for(var i = 0; i < cards.length; i++) {
        if(last == 1) {
            pDeck.push(cards[i])
            last = 0
        } else {
            cDeck.push(cards[i])
            last = 1
        }
    }
    window.sessionStorage.setItem("playerDeck", JSON.stringify(pDeck))
    window.sessionStorage.setItem("computerDeck", JSON.stringify(cDeck))
}

function loop() {
    displayCounts()
    setTimeout(() => {
        loop()
    }, 10);
}

function displayCounts() {
    var pDeck = JSON.parse(window.sessionStorage.getItem("playerDeck"))
    var cDeck = JSON.parse(window.sessionStorage.getItem("computerDeck"))
    var pCount = 0
    var cCount = 0
    for(var i = 0; i < pDeck.length; i++) {
        pCount++
    }
    for(var i = 0; i < cDeck.length; i++) {
        cCount++
    }
    document.getElementById("plaNum").innerHTML = `Count: ${pCount}`
    document.getElementById("comNum").innerHTML = `Count: ${cCount}`
}

function play() {
    del()
    var pDeck = JSON.parse(window.sessionStorage.getItem("playerDeck"))
    var cDeck = JSON.parse(window.sessionStorage.getItem("computerDeck"))
    if(pDeck.length == 0) {

    } else if(cDeck.length == 0) {

    }
    try {
        var playP = JSON.parse(window.sessionStorage.getItem("playP"))
        var playC = JSON.parse(window.sessionStorage.getItem("playC"))
    } catch (error) {
        
    }
    if(playP == undefined) {
        playP = []
    }
    if(playC == undefined) {
        playC = []
    }

    var card1 = pDeck[0]
    var card2 = cDeck[0]
    playP.push(pDeck[0])
    playC.push(cDeck[0])
    pDeck.shift()
    cDeck.shift()
    window.sessionStorage.setItem("playerDeck", JSON.stringify(pDeck))
    window.sessionStorage.setItem("computerDeck", JSON.stringify(cDeck))
    var card1El = makeCard(card1)
    var card2El = makeCard(card2)
    spawnCard(card1El, card2El)
}

function makeCard(card) {
    var src = document.getElementById(card).src
    var el = document.createElement("img")
    el.src = src
    return el
}

function spawnCard(c1, c2) {
    var player = document.getElementById("player")
    var computer = document.getElementById("computer")
    player.appendChild(c1)
    computer.appendChild(c2)
    check()
}

function check() {

}

function take() {

}

function war() {

}

function collect() {

}

const shuffle = (array) => { 
    return array.sort(() => Math.random() - 0.5); 
}; 