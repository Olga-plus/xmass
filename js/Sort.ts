import { cardContauner, cards } from "./app";
import { ShapeFilter } from "./ShapeFilter";

const filtersSort: HTMLDivElement = document.querySelector('.filters-sort');

export class FiltersSort {


    selectorSort: Set<string>;
    callback: () => void;
    constructor(callback: () => void) {
        this.callback = callback;
        this.selectorSort = new Set();
    }

    renderButtons() {

        const titleSortControls = document.createElement('div');
        titleSortControls.className = 'title-controls';
        titleSortControls.innerText = 'Сортировка';
        filtersSort.appendChild(titleSortControls);

        const sortSelect = document.createElement('select');
        sortSelect.className = 'sort-select';
        titleSortControls.appendChild(sortSelect);

        sortSelect.options[0] = new Option ( 'По названию от «А» до «Я»', 'sort-name-max',  true, false);
        sortSelect.options[1] = new Option ( 'По названию от «Я» до «А»', 'sort-name-min',  false, false);
        sortSelect.options[2] = new Option ( 'По количеству по возрастанию', 'sort-count-max',  false, false);
        sortSelect.options[3] = new Option ( 'По количеству по убыванию', 'sort-count-min',  false, false);

        sortSelect.onclick = this.sortToys.bind(this, sortSelect);

        let buttonReset = document.createElement('button');
        buttonReset.className = 'reset';
        buttonReset.innerText = 'Сброс фильтров';
        titleSortControls.appendChild(buttonReset);
        buttonReset.onclick = this.resetSettings.bind(this, sortSelect);

    }

    sortToys (a: HTMLOptionElement) {
        cardContauner.innerHTML = '';
        console.log(this, a.value);
       
        if (a.value === 'sort-name-max'){
            cards.sort((a, b) => a.name.localeCompare(b.name)).forEach(item => cardContauner.appendChild(item.card));
        }
        if (a.value === 'sort-name-min'){
            cards.sort((a, b) => b.name.localeCompare(a.name)).forEach(item => cardContauner.appendChild(item.card));
        }
        if (a.value === 'sort-count-max'){
            cards.sort((a, b) => a.count.localeCompare(b.count, undefined, {numeric: true})).forEach(item => cardContauner.appendChild(item.card));
        }

        if (a.value === 'sort-count-min'){
            cards.sort((a, b) => b.count.localeCompare(a.count, undefined, {numeric: true})).forEach(item => cardContauner.appendChild(item.card));
        }

    }

    resetSettings(a: HTMLOptionElement){
        console.log('RESET');
        this.callback();
    }
}

