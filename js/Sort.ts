import { Filter } from './interfaces';
import { Card } from "./card";
const cardContauner: HTMLElement = document.querySelector(".card-container") as HTMLElement;
const filtersSort: HTMLDivElement = document.querySelector('.filters-sort');

export class FiltersSort {
    sortSelect: any;
    callback: () => void;
    filterCards: () => void;
    

    constructor(callback: () => void, filterCards: () => void) {
        this.callback = callback;
        this.filterCards = filterCards;
        this.renderButtons();
    }

    checkSortNameIsSelected(a: string, b: string): number {
        if (this.sortSelect.value === 'sort-name-max'){
            console.log(a.localeCompare(b))
            return a.localeCompare(b)
        }
        if (this.sortSelect.value === 'sort-name-min'){
            console.log(b.localeCompare(a))
            return b.localeCompare(a)
        }
    }

    checkSortCountIsSelected(a: string, b: string): number {
        if (this.sortSelect.value === 'sort-count-max'){
            return a.localeCompare(b, undefined, {numeric: true});
        }
        if (this.sortSelect.value === 'sort-count-min'){
            return b.localeCompare(a, undefined, {numeric: true});
        }
    }

    reset (){
        this.callback();
    }

    renderButtons() {
        const titleSortControls = document.createElement('div');
        titleSortControls.className = 'title-controls';
        titleSortControls.innerText = 'Сортировка';
        filtersSort.appendChild(titleSortControls);

       this.sortSelect = document.createElement('select');
       this.sortSelect.className = 'sort-select';
        titleSortControls.appendChild(this.sortSelect);

        this.sortSelect.options[0] = new Option ( 'По названию от «А» до «Я»', 'sort-name-max',  true, false);
        this.sortSelect.options[1] = new Option ( 'По названию от «Я» до «А»', 'sort-name-min',  false, false);
        this.sortSelect.options[2] = new Option ( 'По количеству по возрастанию', 'sort-count-max',  false, false);
        this.sortSelect.options[3] = new Option ( 'По количеству по убыванию', 'sort-count-min',  false, false);

        this.sortSelect.onclick = this.sortToys.bind(this, this.sortSelect);

        let buttonReset = document.createElement('button');
        buttonReset.className = 'reset';
        buttonReset.innerText = 'Сброс фильтров';
        titleSortControls.appendChild(buttonReset);
        buttonReset.onclick = this.reset.bind(this, this.sortSelect);
    }

    sortToys (a: HTMLOptionElement) {
        cardContauner.innerHTML = '';
        console.log('sssss', a.value, this.sortSelect.value);

        // if (this.selectorSort.size === 0){
        //     this.selectorSort.add(a.value); 
        // } else
        // if (this.selectorSort.size > 0){
        //     this.selectorSort.clear() ; 
        //     this.selectorSort.add(a.value);
        // }
        //         if (a.value === 'sort-name-max'){
        //     cards.sort((a, b) => a.name.localeCompare(b.name)).forEach(item => cardContauner.appendChild(item.card));
        // }
        // if (a.value === 'sort-name-min'){
        //     cards.sort((a, b) => b.name.localeCompare(a.name)).forEach(item => cardContauner.appendChild(item.card));
        // }
        // if (a.value === 'sort-count-max'){
        //     cards.sort((a, b) => a.count.localeCompare(b.count, undefined, {numeric: true})).forEach(item => cardContauner.appendChild(item.card));
        // }

        // if (a.value === 'sort-count-min'){
        //     cards.sort((a, b) => b.count.localeCompare(a.count, undefined, {numeric: true})).forEach(item => cardContauner.appendChild(item.card));
        // }
        this.filterCards();
    }


}