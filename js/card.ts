import "../sass/style.scss";
import data from '../assets/data.js';

const page = document.querySelector(".page");
const cardContauner: HTMLElement = document.querySelector(".card-container") as HTMLElement;

export class Card {
    num: string;
    name: string;
    count: string;
    year: string;
    shape: string;
    color: string;
    size: string;
    favorite: boolean;

    private cardFavor: HTMLParagraphElement;
    private cardRibbon: HTMLDivElement;
    private card: HTMLDivElement;

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

    toggleFavorite() {
        this.favorite = !this.favorite
        return this.favorite;
    }

    render(): void {
        // TODO add rendering
        this.card = document.createElement('div');
        this.card.className = 'card';
        this.card.setAttribute(`data-num`, `${this.num}`);
        cardContauner.appendChild(this.card);

        let cardTitle = document.createElement('h2');
        cardTitle.className = 'card-title';
        cardTitle.innerHTML = this.name; 
        this.card.appendChild(cardTitle);

        let cardImg = new Image();
        cardImg.className = 'card-img';
        cardImg.src = `../assets/toys/${this.num}.webp`
        this.card.appendChild(cardImg);

        let cardDescription = document.createElement('div');
        cardDescription.className = 'card-description';
        this.card.appendChild(cardDescription);

        let cardCount = document.createElement('p');
        cardCount.className = `count`;
        cardCount.innerHTML = `Kолличество: ${this.count}`; 
        cardDescription.appendChild(cardCount);

        let cardYear = document.createElement('p');
        cardYear.className = `year`;
        cardYear.innerHTML = `Год: ${this.year}`; 
        cardDescription.appendChild(cardYear);

        let cardShape = document.createElement('p');
        cardShape.className = `shape`;
        cardShape.innerHTML = `Форма: ${this.shape}`; 
        cardDescription.appendChild(cardShape);

        let cardColor = document.createElement('p');
        cardColor.className = `color`;
        cardColor.innerHTML = `Цвет: ${this.color}`; 
        cardDescription.appendChild(cardColor);

        let cardSize = document.createElement('p');
        cardSize.className = `size`;
        cardSize.innerHTML = `Размер: ${this.size}`; 
        cardDescription.appendChild(cardSize);


        this.cardFavor= document.createElement('p');

        this.cardFavor.className = `favorite`;
        let yes = 'да';
        let no = 'нет';
        if (this.favorite === false) {
            this.cardFavor.innerHTML = `Любимая: ${no}`; 
        } else
        if (this.favorite === true) {
            this.cardFavor.innerHTML = `Любимая: ${yes}`; 
        }
        
        cardDescription.appendChild(this.cardFavor);

        this.cardRibbon = document.createElement('div');
       
        this.cardRibbon.className = 'ribbon';
        if (this.favorite === true) {
            this.card.classList.add('active')
            this.cardRibbon.classList.add('active')
        } else {
            this.card.className = ('card');
        }
        this.card.appendChild(this.cardRibbon);

        this.card.onclick = this.clicked.bind(this);
    }

    clicked(): void {
        console.log(this.card);
        if(this.favorite === false){
            this.favorite = this.toggleFavorite();
            this.cardFavor.innerText= 'Любимая: да';
            this.cardRibbon.classList.add('active')
            this.card.classList.add('active')
        } else  if(this.favorite === true){
            this.favorite = this.toggleFavorite();
            this.cardFavor.innerText= 'Любимая: нет';
            this.cardRibbon.classList.remove('active');
            this.card.classList.remove('active')
        } 
    }
}


export function cardXs(): void{
    data.forEach(item => {
    let cardX = new Card (item);
    cardX.render();
});
} 

export default {Card, cardXs};

// let cardX =  data.forEach(item => {
//     let cardX = new Card (item);
//     cardX.render();
// });
