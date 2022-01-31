const filtersSort: HTMLDivElement = document.querySelector('.filters-sort');
export class SearchFilter {
    selectorSearch: Set<string>;
    headerSerach: HTMLInputElement;
    callback: () => void;

    constructor(callback: () => void,) {
        this.callback = callback;
        this.selectorSearch = new Set();
        this.createSerch();
    }

    checkFilterSearchIsSelected(str: string): boolean {
    
        return str.toLowerCase().includes(this.headerSerach.value.toLowerCase())
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
        this.headerSerach.oninput = this.filterSearch.bind(this)
    }

    filterSearch(){
        if(this.selectorSearch.size === 0){
            this.selectorSearch.add('1');
        }
        else if (this.selectorSearch.size > 0){
            this.selectorSearch.clear();
        }
        this.callback();
    }
}