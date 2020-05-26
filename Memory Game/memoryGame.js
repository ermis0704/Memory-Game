document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'acmilan',
            img: 'images/acmilan.jpg'
        },
        {
            name: 'acmilan',
            img: 'images/acmilan.jpg'
        },
        {
            name: 'barcelona',
            img: 'images/barcelona.jpg'
        },
        {
            name: 'barcelona',
            img: 'images/barcelona.jpg'
        },
        {
            name: 'juventus',
            img: 'images/juventus.jpg'
        },
        {
            name: 'juventus',
            img: 'images/juventus.jpg'
        },
        {
            name: 'manchestercity',
            img: 'images/manchestercity.jpg'
        },
        {
            name: 'manchestercity',
            img: 'images/manchestercity.jpg'
        },
        {
            name: 'manchesterunited',
            img: 'images/manchesterunited.jpg'
        },
        {
            name: 'manchesterunited',
            img: 'images/manchesterunited.jpg'
        },
        {
            name: 'realmardrid',
            img: 'images/realmadrid.jpg'
        },
        {
            name: 'realmardrid',
            img: 'images/realmadrid.jpg'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random());


    const resultDisplay = document.querySelector("#result");
    const grid = document.querySelector('.grid');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

    //create your board
    function createBaord() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/ball.jpg');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }



    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]) {
            alert('You found a team');
            cards[optionOneId].setAttribute('src', 'images/ground.jpg');
            cards[optionTwoId].setAttribute('src', 'images/ground.jpg');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/ball.jpg');
            cards[optionTwoId].setAttribute('src', 'images/ball.jpg');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found all teams';
        }
    }



    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id');
        
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }




createBaord();











































})