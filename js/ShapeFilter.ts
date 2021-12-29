import { cardContauner, cards } from "./app";
import { ChristmasState } from "./state";

export let filtersNames = {
    shape: ["шар", "колокольчик", "шишка", "снежинка", "фигурка"],
    shapeName: ['ball', 'bell', 'cone', 'snowFl', 'toy'],
    color: ["белый", "желтый", "красный", "синий", "зелёный"],
    size: ["большой", "средний", "малый"]
 };
 const filtersValue: HTMLDivElement = document.querySelector('.filters-value');
export class ShapeFilter {

    selectorShape: Set<string>;
    constructor() {
        this.selectorShape = new Set();
    }

    renderButtons() {

        const shape = document.createElement('div');
        shape.className = 'shape';
        shape.innerText = `Форма`;
        filtersValue.appendChild(shape);

        let buttonBall = document.createElement('button');
        buttonBall.setAttribute(`data-filter`, `шар`);

        let buttonBell = document.createElement('button');
        buttonBell.setAttribute(`data-filter`, `колокольчик`);

        let buttonCone = document.createElement('button');
        buttonCone.setAttribute(`data-filter`, `шишка`);

        let buttonSnowF = document.createElement('button');
        buttonSnowF.setAttribute(`data-filter`, `снежинка`);
        
        let buttonToy = document.createElement('button');
        buttonToy.setAttribute(`data-filter`, `фигурка`);

        shape.appendChild(buttonBall);
        shape.appendChild(buttonBell);
        shape.appendChild(buttonCone);
        shape.appendChild(buttonSnowF);
        shape.appendChild(buttonToy);
        buttonSnowF.onclick = this.filterShapes.bind(this, buttonSnowF);
        buttonToy.onclick = this.filterShapes.bind(this, buttonToy);
        buttonCone.onclick = this.filterShapes.bind(this, buttonCone);
        buttonBell.onclick = this.filterShapes.bind(this, buttonBell);
        buttonBall.onclick = this.filterShapes.bind(this, buttonBall);
    }

    filterShapes(a: HTMLButtonElement) : void{
        a.classList.toggle("active");
        let i = a.getAttribute('data-filter');
        console.log(this.selectorShape)
        cardContauner.innerHTML = '';

        if (!this.selectorShape.has(i)){
            this.selectorShape.add(i); 
            cards.filter(elem => this.selectorShape.has(elem.shape)).forEach(item => cardContauner.appendChild(item.card))
        } else
        if (this.selectorShape.has(i) && this.selectorShape.size > 0){
            this.selectorShape.delete(i) ; 
            cards.filter(elem => this.selectorShape.has(elem.shape)).forEach(item => cardContauner.appendChild(item.card))
        }  
        if (this.selectorShape.size === 0){
            this.selectorShape.delete(i) ; 
            cards.forEach(item => cardContauner.appendChild(item.card))
        } 
    } 

}