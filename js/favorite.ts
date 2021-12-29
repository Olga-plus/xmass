import { cardContauner, cards } from "./app";
import {ChristmasState} from "./state";
const filtersValue: HTMLDivElement = document.querySelector('.filters-value');

export class Favorite extends ChristmasState{
    private favoriteValue: boolean = false;

    create() {
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
            cards.filter(elem => elem.favorite === true).forEach(item =>  {cardContauner.appendChild(item.card); this.selectCard(item)} )
        }
        else if(!this.favoriteValue){
            
            cards.forEach(item => {cardContauner.appendChild(item.card); this.deselectCard(item)})
        }
    }
}