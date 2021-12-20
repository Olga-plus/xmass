import "../sass/style.scss";
import data from '../assets/data.js';

const page = document.querySelector(".page");
const cardContauner: HTMLElement = document.querySelector(".card-container") as HTMLElement;
let favotiteNum: any = {};

class Card {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;

    constructor({ num, name, count, year, shape, color, size, favorite }: { num: string; name: string; count: string; year: string; shape: string; color: string; size: string; favorite: boolean; }) {
        this.num = num;
        this.name = name;
        this.count = count;
        this.year = year;
        this.shape = shape;
        this.color = color;
        this.size = size;
        this.favorite = favorite;
    }
    toggleFavorit(){
        this.favorite = !this.favorite
        return this.favorite;
    }
}

// const createImage = (src: string) => new Promise((res, rej) => {
//     const img = new Image();
//     img.onload = () => res(img);
//     img.onerror = rej;
//     img.src = src;
//   });

// let cardX = new Card ({ name: data[0].name, size: data[0].size, favorite: data[0].favorite })
// console.log(cardX);

data.forEach(item => {
    let cardX = new Card ({ num: item.num, name: item.name, count: item.count, year: item.year, shape: item.shape, color: item.color, size: item.size, favorite: item.favorite })
    let card = document.createElement('div');
    card.className = 'card';
    card.setAttribute(`data-num`, `${cardX.num}`);
    cardContauner.appendChild(card);

    let cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.innerHTML = cardX.name; 
    card.appendChild(cardTitle);
    

    let cardImg = new Image();
    cardImg.className = 'card-img';
    cardImg.src = `../assets/toys/${cardX.num}.webp`
    card.appendChild(cardImg);


    let cardDescription = document.createElement('div');
    cardDescription.className = 'card-description';
    card.appendChild(cardDescription);

    let cardCount = document.createElement('p');
    cardCount.className = `count`;
    cardCount.innerHTML = `Kолличество: ${cardX.count}`; 
    cardDescription.appendChild(cardCount);

    let cardYear = document.createElement('p');
    cardYear.className = `year`;
    cardYear.innerHTML = `Год: ${cardX.year}`; 
    cardDescription.appendChild(cardYear);

    let cardShape = document.createElement('p');
    cardShape.className = `shape`;
    cardShape.innerHTML = `Форма: ${cardX.shape}`; 
    cardDescription.appendChild(cardShape);

    let cardColor = document.createElement('p');
    cardColor.className = `color`;
    cardColor.innerHTML = `Цвет: ${cardX.color}`; 
    cardDescription.appendChild(cardColor);

    let cardSize = document.createElement('p');
    cardSize.className = `size`;
    cardSize.innerHTML = `Размер: ${cardX.size}`; 
    cardDescription.appendChild(cardSize);

    let cardFavor= document.createElement('p');
    cardFavor.className = `favorite`;
    let yes = 'да';
    let no = 'нет';
    if (cardX.favorite === false) {
        cardFavor.innerHTML = `Любимая: ${no}`; 
    } else
    if (cardX.favorite === true) {
        cardFavor.innerHTML = `Любимая: ${yes}`; 
    }
    
    cardDescription.appendChild(cardFavor);
    let cardRibbon = document.createElement('div');
   
    cardRibbon.className = 'ribbon';
    if (cardX.favorite === true) {
        card.classList.add('active')
        cardRibbon.classList.add('active')
    } else {
        card.className = ('card');
    }
    card.appendChild(cardRibbon);
})


cardContauner.onclick = function(event: any) { //question???
    console.log(event.target.dataset);
    if (event.target.className === 'card') {
        event.target.classList.add('active');
    } else if (event.target.className === 'card active')
    {
        event.target.classList.remove('active');

    }
    return;
}