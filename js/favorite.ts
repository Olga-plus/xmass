import { cardContauner, cards } from "./app";
import {ChristmasState} from "./state";
const filtersValue: HTMLDivElement = document.querySelector('.filters-value');
// const inFav: HTMLDivElement = document.querySelector('.select');
const headerControls = document.querySelector('.header__controls');
export class Favorite extends ChristmasState{
    private favoriteValue: boolean = false;
    callback: () => void;
    favoriteCount: HTMLSpanElement;

    constructor(callback: () => void) {
        super();
        this.callback = callback;
    }

    checkFun (){
        return this.favoriteValue;
    }

    create() {
        const inFav = document.createElement('div');
        inFav.className = 'select';
        headerControls.appendChild(inFav);

        this.favoriteCount = document.createElement('span');
        this.favoriteCount.innerText = `${cards.filter(elem => elem.favorite === true).length}`
        inFav.appendChild(this.favoriteCount);

        const favoriteContainer = document.createElement('div');
        favoriteContainer.className = 'favorite-container';
        favoriteContainer.innerText = `Только любимые:`;
        filtersValue.appendChild(favoriteContainer);

        const favoriteCheck = document.createElement('div');
        favoriteCheck.className = 'form-group';
        favoriteContainer.appendChild(favoriteCheck);

        const favoriteInput = document.createElement('input');
        favoriteInput.type = "checkbox";
        favoriteInput.value = "false";
        favoriteInput.id = "checkbox";
        favoriteInput.className = 'favorite-input';
        favoriteCheck.appendChild(favoriteInput);

        const favoriteLabel = document.createElement('label');
        favoriteLabel.setAttribute('for', 'checkbox');
        favoriteLabel.className = 'favorite-input-label';
        favoriteCheck.appendChild(favoriteLabel);
        
        favoriteInput.onclick = this.changCard.bind(this);

    }

    changCard(): void {
    this.favoriteValue = !this.favoriteValue;
    cardContauner.innerHTML = ''; 
        if(this.favoriteValue){
            let a = cards.filter(elem => elem.favorite === true)
            a.forEach(item => {cardContauner.appendChild(item.card)})
            console.log(a.length)
            this.favoriteCount.innerText = `${a.length}`
        }
        else if(!this.favoriteValue){
            let a = cards.filter(elem => elem.favorite === true)
            cards.forEach(item => {cardContauner.appendChild(item.card)})
            console.log(cards.length)
            this.favoriteCount.innerText = `${a.length}`
        }

    }
}