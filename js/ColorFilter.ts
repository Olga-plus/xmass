import { Filter } from './interfaces';
const filtersValue: HTMLDivElement = document.querySelector('.filters-value');

//  export class ColorFilter implements Filter {
export class ColorFilter implements Filter{
    private localStorageKey = 'colorFilter';
    private selectorColor: Set<string>;
    buttonWhite: HTMLButtonElement;
    buttonYellow: HTMLButtonElement;
    buttonRed: HTMLButtonElement;
    buttonBlue: HTMLButtonElement;
    buttonGreen: HTMLButtonElement;
    callback: () => void;
    selected = false;

    constructor(callback: () => void) {
        this.callback = callback;
        const local = localStorage.getItem(this.localStorageKey)
        if (!local){
           this.selectorColor = new Set(); 
        }
        else {
            this.selectorColor = new Set(JSON.parse(local));
        }
        this.renderButtons();
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
        }
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
        localStorage.clear();
        // Убрать выделение на кнопках
    }

    renderButtons() {

        const color = document.createElement('div');
        color.className = 'color';
        color.innerText = `Цвет`;
        filtersValue.appendChild(color);

        this.buttonWhite = document.createElement('button');
        this.buttonWhite.setAttribute(`data-filter`, `белый`);
        if (this.selectorColor.has(`белый`)){
            this.buttonWhite.classList.add("active");
        }

        this.buttonYellow = document.createElement('button');
        this.buttonYellow.setAttribute(`data-filter`, `желтый`);
        if (this.selectorColor.has(`желтый`)){
            this.buttonYellow.classList.add("active");
        }

        this.buttonRed = document.createElement('button');
        this.buttonRed.setAttribute(`data-filter`, `красный`);
        if (this.selectorColor.has(`красный`)){
            this.buttonRed.classList.add("active");
        }

        this.buttonBlue = document.createElement('button');
        this.buttonBlue.setAttribute(`data-filter`, `синий`);
        if (this.selectorColor.has(`синий`)){
            this.buttonBlue.classList.add("active");
        }
        
        this.buttonGreen = document.createElement('button');
        this.buttonGreen.setAttribute(`data-filter`, `зелёный`);
        if (this.selectorColor.has(`зелёный`)){
            this.buttonGreen.classList.add("active");
        }

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
        const dataFilter = a.getAttribute('data-filter');
        if (!this.selectorColor.has(dataFilter)){
            this.selectorColor.add(dataFilter); 
            this.checkFilter();
        } else
        if (this.selectorColor.has(dataFilter) && this.selectorColor.size > 0){
            this.selectorColor.delete(dataFilter) ; 
            this.checkFilter();
        }

        localStorage.setItem(this.localStorageKey, JSON.stringify(Array.from(this.selectorColor)));
        
        this.callback(); 
    }

}