import { cardContauner } from "./app";

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
    
        // if (str.toLowerCase().includes(this.headerSerach.value.toLowerCase()) === false){
        //     const sorryWrapp = document.createElement('div');
        //     sorryWrapp.className = 'wrapper sorry-centr';
        //     const sorryText = document.createElement('div');
        //     sorryText.className = 'sorry';
        //     sorryText.innerText = "Извините, совпадений не обнаружено ;)";
        //     sorryWrapp.appendChild(sorryText);
        //     cardContauner.appendChild(sorryWrapp);
        // } else {
            return str.toLowerCase().includes(this.headerSerach.value.toLowerCase())
        // }
        // if ( this.selectorSearch.size > 0 && searschStr){
        //     console.log(str, str.toLowerCase().includes(this.headerSerach.value.toLowerCase()), 'YYYYYYYYYYYY')
            
        // }
        // else if (this.selectorSearch.size > 0 && str.length > 0 && !searschStr){
        //     const sorryWrapp = document.createElement('div');
        //         sorryWrapp.className = 'wrapper sorry-centr';
        //         const sorryText = document.createElement('div');
        //         sorryText.className = 'sorry';
        //         sorryText.innerText = "Извините, совпадений не обнаружено ;)";
        //         sorryWrapp.appendChild(sorryText);
        //         cardContauner.appendChild(sorryWrapp);
        //     return true;
        // }
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