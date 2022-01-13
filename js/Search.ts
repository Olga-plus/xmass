import { cardContauner, cards } from "./app";

const headerControls = document.querySelector('.header__controls');

export class SearchFilter {
    headerSerach: HTMLInputElement;
    callback: () => void;

    constructor(callback: () => void,) {
        this.callback = callback;
    }


    createSerch(){
        this.headerSerach = document.createElement('input');
        this.headerSerach.className = 'search input-search';
        this.headerSerach.setAttribute('type', 'text');
        this.headerSerach.id = 'input';
        this.headerSerach.value = '';
        this.headerSerach.autocomplete = 'off';
        this.headerSerach.autofocus = true;

        headerControls.appendChild(this.headerSerach);
        
        // const select = document.createElement('div');
        // select.className = 'select';
        // headerControls.appendChild(select);

        this.headerSerach.oninput = this.filterSearch.bind(this)
    }

    filterSearch(){
        console.log(this.headerSerach.value, 'jjjjjjjjjjjjjjjjjjjj')
        cardContauner.innerHTML = '';
        // cards.filter(elem => elem.name.toLowerCase().includes(this.headerSerach.value.toLowerCase()))
        // .forEach(item => {cardContauner.appendChild(item.card)});
        const result = cards.filter(elem => elem.name.toLowerCase().includes(this.headerSerach.value.toLowerCase()));
        if (result.length === 0){
            const sorryWrapp = document.createElement('div');
            sorryWrapp.className = 'wrapper sorry-centr';
            const sorryText = document.createElement('div');
            sorryText.className = 'sorry';
            sorryText.innerText = "Извините, совпадений не обнаружено ;)";
            sorryWrapp.appendChild(sorryText);
            cardContauner.appendChild(sorryWrapp);
        } else{
            result.forEach(item => {cardContauner.appendChild(item.card)}); 
        }
        
        this.callback();
    }
}