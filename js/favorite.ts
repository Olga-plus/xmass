import { cardContauner } from "./app";
const filtersValue: HTMLDivElement = document.querySelector('.filters-value');
export class Favorite {
    private favoriteValue = false;
    callback: () => void;
    favoriteCount: HTMLSpanElement;
    selectorOnly: Set<string>

    constructor(callback: () => void) {
        this.callback = callback;
        this.selectorOnly = new Set();
        this.create();
    }

    checkFilterOnlyIsSelected(check: boolean): boolean {
        
        if ( this.selectorOnly.size > 0 && check === true){
            return true;
        }
        else if (this.selectorOnly.size === 0){
            return true;
        }
    }

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
    if (this.selectorOnly.size === 0){
        this.selectorOnly.add("1"); 
    } else
    if (this.selectorOnly.size > 0){
        this.selectorOnly.clear() ; 
    }
        this.callback();
    }
}