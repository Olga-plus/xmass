import { Filter } from './interfaces';

export let filtersNames = {
    shape: ["шар", "колокольчик", "шишка", "снежинка", "фигурка"],
    shapeName: ['ball', 'bell', 'cone', 'snowFl', 'toy'],
    color: ["белый", "желтый", "красный", "синий", "зелёный"],
    size: ["большой", "средний", "малый"]
 };
const filtersValue: HTMLDivElement = document.querySelector('.filters-value');

export class ShapeFilter implements Filter {
    private callback: () => void;
    private selectorShape: Set<string> = new Set();

    constructor(callback: () => void) {
        this.callback = callback;
         this.selectorShape = new Set();
    }

    checkFilterIsSelected(shape: string): boolean {
        return this.selectorShape.has(shape);
    }

    reset() {
        this.selectorShape.clear();
        // Убрать выделение на кнопках
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
        this.callback(); 
    }
}