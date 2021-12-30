import { cardContauner, cards } from "./app";
import { Filter } from './interfaces';


export let filtersNames = {
    shape: ["шар", "колокольчик", "шишка", "снежинка", "фигурка"],
    shapeName: ['ball', 'bell', 'cone', 'snowFl', 'toy'],
    color: ["белый", "желтый", "красный", "синий", "зелёный"],
    size: ["большой", "средний", "малый"]
 };

 const filtersValue: HTMLDivElement = document.querySelector('.filters-value');

//  export class ColorFilter implements Filter {
export class ColorFilter {
    private selectorShape: Set<string>;

    constructor() {
        this.selectorShape = new Set();
    }

    renderButtons() {

        const color = document.createElement('div');
        color.className = 'color';
        color.innerText = `Цвет`;
        filtersValue.appendChild(color);

        let buttonWhite = document.createElement('button');
        buttonWhite.setAttribute(`data-filter`, `белый`);

        let buttonYellow = document.createElement('button');
        buttonYellow.setAttribute(`data-filter`, `желтый`);

        let buttonRed = document.createElement('button');
        buttonRed.setAttribute(`data-filter`, `красный`);

        let buttonBlue = document.createElement('button');
        buttonBlue.setAttribute(`data-filter`, `синий`);
        
        let buttonGreen = document.createElement('button');
        buttonGreen.setAttribute(`data-filter`, `зелёный`);

        color.appendChild(buttonWhite);
        color.appendChild(buttonYellow);
        color.appendChild(buttonRed);
        color.appendChild(buttonBlue);
        color.appendChild(buttonGreen);
        buttonWhite.onclick = this.filterColor.bind(this, buttonWhite);
        buttonYellow.onclick = this.filterColor.bind(this, buttonYellow);
        buttonRed.onclick = this.filterColor.bind(this, buttonRed);
        buttonBlue.onclick = this.filterColor.bind(this, buttonBlue);
        buttonGreen.onclick = this.filterColor.bind(this, buttonGreen);
    }

    filterColor(a: HTMLButtonElement) : void{
        a.classList.toggle("active");
        let i = a.getAttribute('data-filter');
        console.log(this.selectorShape)
        cardContauner.innerHTML = '';

        if (!this.selectorShape.has(i)){
            this.selectorShape.add(i); 
            cards.filter(elem => this.selectorShape.has(elem.color)).forEach(item => cardContauner.appendChild(item.card))
        } else
        if (this.selectorShape.has(i) && this.selectorShape.size > 0){
            this.selectorShape.delete(i) ; 
            cards.filter(elem => this.selectorShape.has(elem.color)).forEach(item => cardContauner.appendChild(item.card))
        }  
        if (this.selectorShape.size === 0){
            this.selectorShape.delete(i) ; 
            cards.forEach(item => cardContauner.appendChild(item.card))
        } 
    } 

}