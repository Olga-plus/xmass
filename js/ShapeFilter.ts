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

    buttonBall: HTMLButtonElement;
    buttonBell: HTMLButtonElement;
    buttonCone: HTMLButtonElement;
    buttonToy: HTMLButtonElement;
    buttonSnowF: HTMLButtonElement;

    constructor(callback: () => void) {
        this.callback = callback;
         this.selectorShape = new Set();
    }

    checkFilterIsSelected(shape: string): boolean {
        console.log( this.selectorShape,'iz select');
        return this.selectorShape.has(shape);
    }

    reset() {
        this.selectorShape.clear();
        this.buttonBall.classList.remove("active");
        this.buttonBell.classList.remove("active");
        this.buttonCone.classList.remove("active");
        this.buttonSnowF.classList.remove("active");
        this.buttonToy.classList.remove("active");

        // Убрать выделение на кнопках
    }

    renderButtons() {
        const shape = document.createElement('div');
        shape.className = 'shape';
        shape.innerText = `Форма`;
        filtersValue.appendChild(shape);

        this.buttonBall = document.createElement('button');
        this.buttonBall.setAttribute(`data-filter`, `шар`);

        this.buttonBell = document.createElement('button');
        this.buttonBell.setAttribute(`data-filter`, `колокольчик`);

        this.buttonCone = document.createElement('button');
        this.buttonCone.setAttribute(`data-filter`, `шишка`);

        this.buttonSnowF = document.createElement('button');
        this.buttonSnowF.setAttribute(`data-filter`, `снежинка`);
        
        this.buttonToy = document.createElement('button');
        this.buttonToy.setAttribute(`data-filter`, `фигурка`);

        shape.appendChild(this.buttonBall);
        shape.appendChild(this.buttonBell);
        shape.appendChild(this.buttonCone);
        shape.appendChild(this.buttonSnowF);
        shape.appendChild(this.buttonToy);

        this.buttonBell.onclick = this.filterShapes.bind(this, this.buttonBell);
        this.buttonBall.onclick = this.filterShapes.bind(this, this.buttonBall);
        this.buttonCone.onclick = this.filterShapes.bind(this, this.buttonCone);
        this.buttonSnowF.onclick = this.filterShapes.bind(this, this.buttonSnowF);
        this.buttonToy.onclick = this.filterShapes.bind(this, this.buttonToy);
    }

    filterShapes(a: HTMLButtonElement) : void{
        a.classList.toggle("active");
        let dataFilter = a.getAttribute('data-filter');
        if (!this.selectorShape.has(dataFilter)){
            this.selectorShape.add(dataFilter); 
            console.log(this.selectorShape);
        } else
        if (this.selectorShape.has(dataFilter) && this.selectorShape.size > 0){
            this.selectorShape.delete(dataFilter) ; 
        }
        this.callback(); 
    }
}