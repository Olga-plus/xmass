import { cardContauner, cards } from "./app";
import { ChristmasState } from "./state";

const filtersValue: HTMLDivElement = document.querySelector('.filters-value');

export class SizeFilter {

    selectorSize: Set<string>;
    constructor() {
        this.selectorSize = new Set();
    }

    renderButtons() {
        const size = document.createElement('div');
        size.className = 'size';
        size.innerText = `Размер`;
        filtersValue.appendChild(size);

        let buttonBig = document.createElement('button');
        buttonBig.setAttribute(`data-filter`, `большой`);

        let buttonMedium = document.createElement('button');
        buttonMedium.setAttribute(`data-filter`, `средний`);

        let buttonSmall = document.createElement('button');
        buttonSmall.setAttribute(`data-filter`, `малый`);

        size.appendChild(buttonBig);
        size.appendChild(buttonMedium);
        size.appendChild(buttonSmall);

        buttonBig.onclick = this.filterSize.bind(this, buttonBig);
        buttonMedium.onclick = this.filterSize.bind(this, buttonMedium);
        buttonSmall.onclick = this.filterSize.bind(this, buttonSmall);
    }

    filterSize(a: HTMLButtonElement) : void{
        a.classList.toggle("active");
        let i = a.getAttribute('data-filter');
        console.log(this.selectorSize)
        cardContauner.innerHTML = '';

        if (!this.selectorSize.has(i)){
            this.selectorSize.add(i); 
            cards.filter(elem => this.selectorSize.has(elem.size)).forEach(item => cardContauner.appendChild(item.card))
        } else
        if (this.selectorSize.has(i) && this.selectorSize.size > 0){
            this.selectorSize.delete(i) ; 
            cards.filter(elem => this.selectorSize.has(elem.size)).forEach(item => cardContauner.appendChild(item.card))
        }  
        if (this.selectorSize.size === 0){
            this.selectorSize.delete(i) ; 
            cards.forEach(item => cardContauner.appendChild(item.card))
        } 
    } 
}
