import { Filter } from "./interfaces";
import { ChristmasState } from "./state";

const filtersValue: HTMLDivElement = document.querySelector('.filters-value');

export class SizeFilter extends ChristmasState implements Filter {
    private callback: () => void;

    selectorSize: Set<string>;
    buttonBig: HTMLButtonElement;
    buttonMedium: HTMLButtonElement;
    buttonSmall: HTMLButtonElement;
    selected: boolean = false;

    constructor(callback: () => void) {
        super();
        this.selectorSize = new Set();
        this.callback = callback;
    }

    checkFilter(){
        if (this.selectorSize.size > 0){
        console.log(this.selectorSize.size)
        return this.selected = true;
        } else
        if (this.selectorSize.size === 0){
            console.log(this.selectorSize.size)
            return this.selected = false;
        }
    }

    checkFilterIsSelected(shape: string): boolean {
        if (this.selectorSize.size === 0) {
            return true;
        };
        return this.selectorSize.has(shape);
    }

    reset() {
        this.selected = false;
        this.selectorSize.clear();
        this.buttonBig.classList.remove("active");
        this.buttonMedium.classList.remove("active");
        this.buttonSmall.classList.remove("active");
    }

    renderButtons() {
        const size = document.createElement('div');
        size.className = 'size';
        size.innerText = `Размер`;
        filtersValue.appendChild(size);

        this.buttonBig = document.createElement('button');
        this.buttonBig.setAttribute(`data-filter`, `большой`);

        this.buttonMedium = document.createElement('button');
        this.buttonMedium.setAttribute(`data-filter`, `средний`);

        this.buttonSmall = document.createElement('button');
        this.buttonSmall.setAttribute(`data-filter`, `малый`);

        size.appendChild(this.buttonBig);
        size.appendChild(this.buttonMedium);
        size.appendChild(this.buttonSmall);

        this.buttonBig.onclick = this.filterSize.bind(this, this.buttonBig);
        this.buttonMedium.onclick = this.filterSize.bind(this, this.buttonMedium);
        this.buttonSmall.onclick = this.filterSize.bind(this, this.buttonSmall);
    }

    filterSize(a: HTMLButtonElement) : void{
        a.classList.toggle("active");
        let dataFilter = a.getAttribute('data-filter');
        if (!this.selectorSize.has(dataFilter)){
            this.selectorSize.add(dataFilter); 
            this.checkFilter()
        } else
        if (this.selectorSize.has(dataFilter) && this.selectorSize.size > 0){
            this.selectorSize.delete(dataFilter);
            this.checkFilter() 
        }
        this.callback(); 
    }
}
