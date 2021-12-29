import { count } from "console";
import { state } from "./state";

const containerFavorite = document.querySelector('.favorites-container');
const treeContainer = document.querySelector('.main-tree-container');

export class FavoriteCard {
    count: string;
    num: string;
    cardFavorite: HTMLDivElement;

    constructor (count: string, num: string){
        this.count = count;
        this.num = num;
    }

    createFavoriteCard () {
        this.cardFavorite = document.createElement('div');
        this.cardFavorite.className = 'favorites-card';
        this.cardFavorite.setAttribute(`data-num`, `${this.num}`);
        containerFavorite.appendChild(this.cardFavorite);

        let countFavorite = document.createElement('p');
        countFavorite.className = 'favorites-count';
        countFavorite.innerText = `${this.count}`
        this.cardFavorite.appendChild(countFavorite);

            let cardFavoriteImg = new Image();
            cardFavoriteImg.className = 'favorites-card-img';
            cardFavoriteImg.id = `${this.num}-${this.num}`;
            cardFavoriteImg.setAttribute(`data-imgnum`, `${this.num}`);
            cardFavoriteImg.setAttribute(`draggable`, `true`);
            cardFavoriteImg.setAttribute(`alt`, `toy`);
            cardFavoriteImg.src = `../assets/toys/${this.num}.webp`
            this.cardFavorite.appendChild(cardFavoriteImg);
            cardFavoriteImg.ondragstart = this.dragstart_.bind(this)

    }

    dragstart_(){

    }
}