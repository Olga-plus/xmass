import { Filter } from './interfaces';
const filtersValue: HTMLDivElement = document.querySelector('.filters-value');

//  export class ColorFilter implements Filter {
export class ColorFilter implements Filter{
    private selectorColor: Set<string>;
    buttonWhite: HTMLButtonElement;
    buttonYellow: HTMLButtonElement;
    buttonRed: HTMLButtonElement;
    buttonBlue: HTMLButtonElement;
    buttonGreen: HTMLButtonElement;
    callback: () => void;
    selected: boolean = false;

    constructor(callback: () => void) {
        this.callback = callback
        this.selectorColor = new Set();
    }

    checkFilter() {
        if (this.selectorColor.size > 0){
        return this.selected = true;
        } else
        if (this.selectorColor.size === 0){
            return this.selected = false;
        }
    }

    checkFilterIsSelected(color: string): boolean {
        if (this.selectorColor.size === 0) {
            return true;
        };
        return this.selectorColor.has(color);
    }

    reset() {
        this.selected = false;
        this.selectorColor.clear();
        this.buttonWhite.classList.remove("active");
        this.buttonYellow.classList.remove("active");
        this.buttonRed.classList.remove("active");
        this.buttonBlue.classList.remove("active");
        this.buttonGreen.classList.remove("active");
        // Убрать выделение на кнопках
    }

    renderButtons() {

        const color = document.createElement('div');
        color.className = 'color';
        color.innerText = `Цвет`;
        filtersValue.appendChild(color);

        this.buttonWhite = document.createElement('button');
        this.buttonWhite.setAttribute(`data-filter`, `белый`);

        this.buttonYellow = document.createElement('button');
        this.buttonYellow.setAttribute(`data-filter`, `желтый`);

        this.buttonRed = document.createElement('button');
        this.buttonRed.setAttribute(`data-filter`, `красный`);

        this.buttonBlue = document.createElement('button');
        this.buttonBlue.setAttribute(`data-filter`, `синий`);
        
        this.buttonGreen = document.createElement('button');
        this.buttonGreen.setAttribute(`data-filter`, `зелёный`);

        color.appendChild(this.buttonWhite);
        color.appendChild(this.buttonYellow);
        color.appendChild(this.buttonRed);
        color.appendChild(this.buttonBlue);
        color.appendChild(this.buttonGreen);

        this.buttonWhite.onclick = this.filterColor.bind(this, this.buttonWhite);
        this.buttonYellow.onclick = this.filterColor.bind(this, this.buttonYellow);
        this.buttonRed.onclick = this.filterColor.bind(this, this.buttonRed);
        this.buttonBlue.onclick = this.filterColor.bind(this, this.buttonBlue);
        this.buttonGreen.onclick = this.filterColor.bind(this, this.buttonGreen);
    }

    filterColor(a: HTMLButtonElement) : void{
        a.classList.toggle("active");
        let dataFilter = a.getAttribute('data-filter');
        if (!this.selectorColor.has(dataFilter)){
            this.selectorColor.add(dataFilter); 
            this.checkFilter();
        } else
        if (this.selectorColor.has(dataFilter) && this.selectorColor.size > 0){
            this.selectorColor.delete(dataFilter) ; 
            this.checkFilter();
        }
        
        this.callback(); 
    }

}