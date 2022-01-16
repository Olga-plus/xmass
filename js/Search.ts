const filtersSort: HTMLDivElement = document.querySelector('.filters-sort');
const wrapperControls: HTMLDivElement = document.querySelector('.wrapper-controls');

export class SearchFilter {
    headerSerach: HTMLInputElement;
    callback: () => void;

    constructor(callback: () => void,) {
        this.callback = callback;
        this.createSerch();
    }

    createSerch(){
        this.headerSerach = document.createElement('input');
        this.headerSerach.className = 'search input-search';
        this.headerSerach.setAttribute('type', 'text');
        this.headerSerach.id = 'input';
        this.headerSerach.value = '';
        this.headerSerach.autocomplete = 'off';
        this.headerSerach.autofocus = true;

        filtersSort.insertBefore(this.headerSerach, filtersSort.firstChild);

        const sorryWrapp = document.createElement('div');
        sorryWrapp.className = 'wrapper sorry-centr none';
        const sorryText = document.createElement('div');
        sorryText.className = 'sorry';
        sorryText.innerText = "Извините, совпадений не обнаружено ;)";
        sorryWrapp.appendChild(sorryText);
        wrapperControls.appendChild(sorryWrapp);

        this.headerSerach.oninput = this.filterSearch.bind(this)
    }

    filterSearch(){
        this.callback();
    }
}