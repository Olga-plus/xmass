import { shapeFormaa, cardContauner, cards } from "./app";

export class Render {

}
export class ShapeFilter implements Render {
    selectorShape: Set<string>;
    nameAtribute: string;
    filter: HTMLDivElement;
    shape: HTMLDivElement;
    button: HTMLButtonElement;
    select: string;
    shapeConst: boolean;
    attribute: string;
    name: string;
    fillName: string;

    constructor(name: string, fillName: string) {
        this.name = name;
        this.fillName = fillName;
        this.selectorShape = new Set();
    }

    renderButtons() {

        this.button = document.createElement('button');
        this.button.id = `${this.fillName}`;
        this.button.setAttribute(`data-filter`, `${this.name}`);

        shapeFormaa.appendChild(this.button); // -------------------- ????????????
        this.button.onclick = this.getData.bind(this);
    }

    getData() {
        this.button.classList.toggle("active");
        console.log(this.selectorShape.size);
        if (this.selectorShape.size === 0) {
            console.log(this.selectorShape.add(this.name), 'add');
            return this.selectorShape.add(this.name);
        }
        if (this.selectorShape.size !== 0) {
            console.log(this.selectorShape, 'delete');
            return this.selectorShape.delete(this.name);

        }
    };

}

let sert = new Set();
export function filterShapes(i: string) : void{
   cardContauner.innerHTML = '';
    if (!sert.has(i)){
        sert.add(i); 
        cards.filter(elem => sert.has(elem.shape)).forEach(item => cardContauner.appendChild(item.card))
    } else
    if (sert.has(i) && sert.size > 0){
        sert.delete(i) ; 
        cards.filter(elem => sert.has(elem.shape)).forEach(item => cardContauner.appendChild(item.card))
    }  
    if (sert.size === 0){
        sert.delete(i) ; 
        cards.forEach(item => cardContauner.appendChild(item.card))
    } 
} 
