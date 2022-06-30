
/*start of slider*/
let current = 0;
showCard(current);

function nextCard(m) {
    current += 1;
    showCard(current);
}

function prevCard(m) {
    current -= 1;
    showCard(current);
}

function currCard(m) {
    current = m;
    showCard(current);
}

function showCard(m) {
    let cards = document.getElementsByClassName("box-container");
    if (m < 0) {
        m = 0;
        
    }
    if (m > cards.length - 1) {
        m = cards.length - 1;
       
    }
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    cards[m].style.display = "block";
}
/*end of slider*/