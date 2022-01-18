import "../sass/style.scss";
import {cardXs} from '../js/card'
import { ShapeFilter } from "./ShapeFilter";
import { ColorFilter } from "./ColorFilter";
import { Favorite } from "./favorite";
import { FavoriteCard } from "./cardsFavorite";
import { state } from "./state";
import { SizeFilter } from "./SizeFilter";
import { FiltersSort } from "./Sort";
import { playAudio } from "./Player";
import { TreeContainer } from "./containerTree";
import { Snow } from "./snow";
import { SearchFilter } from "./Search";
import { SliderFilterCount } from "./Slider";
import { SliderFilterYear } from "./SliderYear";

export const cardContauner: HTMLElement = document.querySelector(".card-container") as HTMLElement;

const home: HTMLElement  = document.querySelector('#home');
const tous : HTMLElement = document.querySelector('#tous');
const titleBtn: HTMLElement  = document.querySelector('#title-btn');
const tree: HTMLElement  = document.querySelector('#tree');
const mainePage: HTMLElement  = document.querySelector('#main-page');
const homePage: HTMLElement  = document.querySelector('#start-page');
const favoritPage: HTMLElement  = document.querySelector('#favorie-page');
const containerFavorite: HTMLElement = document.querySelector('.favorites-container');
const favoriteCount: HTMLElement = document.getElementById('count-favorite');


home.addEventListener('click', () => { startPage()});
titleBtn.addEventListener('click', () => { tousPage()});
tous.addEventListener('click', () => { tousPage()});
tree.addEventListener('click', () => {teePage()});

export const cards = cardXs(); //---!!!!!!!!!!!!!!

function startPage(): void {
    mainePage.className = 'none';
    favoritPage.className = 'none';
    homePage.className = 'page start-page';
}

function tousPage(): void {
    homePage.className = 'none';
    favoritPage.className = 'none';
    mainePage.className = 'page main-page';
    filterCards();
    favoriteCount.innerText = `${cards.filter(elem => elem.favorite === true).length}`;
}

function teePage(): void {
    mainePage.className = 'none';
    homePage.className = 'none';
    favoritPage.className = 'page favorites-page';
    containerFavorite.innerHTML = '';
    cardFs();
}

function cardFs(): FavoriteCard[]{
    let favoritToys = state.getFavoriteTous();
    return favoritToys.map((item) => {
        let cardsFavorite = new FavoriteCard(item.count, item.num);
        return cardsFavorite;
    });
}

function arrShapes (): ShapeFilter{
    const filtersShape = new ShapeFilter(filterCards);
    filtersShape.renderButtons();
    return filtersShape;
}
export const filtersShape = arrShapes();

function arrColors (){
    const colorsFilters = new ColorFilter(filterCards);
    // colorsFilters.renderButtons();
    return colorsFilters;
}
export const colorsFilters = arrColors();

function arrSize (){
    const sizeFilters = new SizeFilter(filterCards);
    sizeFilters.renderButtons();
    return sizeFilters;
}

export const sizeFilters = arrSize();
const sliderCount = new SliderFilterCount(filterCards);
const sliderYear = new SliderFilterYear(filterCards);

const selectedF = new FiltersSort(resetFun, filterCards);
const checkFavorite = new Favorite(filterCards);

const search = new SearchFilter(filterCards);

function filterCards() {
    cardContauner.innerHTML = '';
    let arrSize = cards.filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape) 
        && sizeFilters.checkFilterIsSelected(elem.size) && sliderCount.checkFilterIsSelected(Number(elem.count))
        && sliderYear.checkFilterIsSelected(Number(elem.year)) && checkFavorite.checkFilterOnlyIsSelected(elem.favorite)
        && search.checkFilterSearchIsSelected(elem.name))
        .sort((a,b )=> selectedF.checkSortNameIsSelected(a.name, b.name) 
        || selectedF.checkSortCountIsSelected(a.count, b.count));
        arrSize.forEach(item => cardContauner.appendChild(item.card));
    if (arrSize.length === 0){
        const sorryWrapp = document.createElement('div');
        sorryWrapp.className = 'wrapper sorry-centr';
        const sorryText = document.createElement('div');
        sorryText.className = 'sorry';
        sorryText.innerText = "Извините, совпадений не обнаружено ;)";
        sorryWrapp.appendChild(sorryText);
        cardContauner.appendChild(sorryWrapp);
    }
}

filterCards();

export function resetFun(){
    cardContauner.innerHTML = '';
    filtersShape.reset();
    colorsFilters.reset();
    sizeFilters.reset();
    sliderCount.reset();
    sliderYear.reset();
    cards.forEach(item => cardContauner.appendChild(item.card));
}



function inputSearch() {
    // cardContauner.innerHTML = '';
    // const result = cards.filter(elem => elem.name.toLowerCase().includes(this.headerSerach.value.toLowerCase()));
    // if (result.length === 0){
    //     const sorryWrapp = document.createElement('div');
    //     sorryWrapp.className = 'wrapper sorry-centr';
    //     const sorryText = document.createElement('div');
    //     sorryText.className = 'sorry';
    //     sorryText.innerText = "Извините, совпадений не обнаружено ;)";
    //     sorryWrapp.appendChild(sorryText);
    //     cardContauner.appendChild(sorryWrapp);
    // } else {
    //     result.forEach(item => {cardContauner.appendChild(item.card)}); 
    // }
}

function contTree() {
  const tree = new TreeContainer();
  tree.createConteiner();
}
contTree ();

function snowOn() {
    let snowPlay = new Snow();
    snowPlay.createSnow();
}

snowOn();
playAudio();