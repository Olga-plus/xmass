import "../sass/style.scss";
import {cardXs} from '../js/card'
import { ShapeFilter } from "./ShapeFilter";
import { ColorFilter } from "./ColorFilter";
import { Favorite } from "./favorite";
import { FavoriteCard } from "./cardsFavorite";
import { ChristmasState } from "./state";
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
const containerFavorite = document.querySelector('.favorites-container');


export const cards = cardXs(); //---!!!!!!!!!!!!!!
cards.forEach(item => cardContauner.appendChild(item.card));

home.addEventListener('click', () => { startPage()});
titleBtn.addEventListener('click', () => { tousPage()});
tous.addEventListener('click', () => { tousPage()});
tree.addEventListener('click', () => {teePage()});

function startPage(): void {
    mainePage.className = 'none';
    favoritPage.className = 'none';
    homePage.className = 'page start-page';
}

function tousPage(): void {
    homePage.className = 'none';
    favoritPage.className = 'none';
    mainePage.className = 'page main-page';
}

function teePage(): void {
    mainePage.className = 'none';
    homePage.className = 'none';
    favoritPage.className = 'page favorites-page';
    containerFavorite.innerHTML = '';
    let favoritToys = state.getFavoriteTous();
    // favoritToys.forEach(item => cardContauner.appendChild(item.card));
    // cardFs();
}


const selectedF = new FiltersSort(resetFun, filterCards);

function arrShapes (): ShapeFilter{
    const filtersShape = new ShapeFilter(filterCards);
    filtersShape.renderButtons();
    return filtersShape;
}
export const filtersShape = arrShapes();

function arrColors (){
    const colorsFilters = new ColorFilter(filterCards);
    colorsFilters.renderButtons();
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

function filterCards() {
    cardContauner.innerHTML = '';
    cards.filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape) 
        && sizeFilters.checkFilterIsSelected(elem.size) && sliderCount.checkFilterIsSelected(Number(elem.count))
        && sliderYear.checkFilterIsSelected(Number(elem.year))).sort((a,b )=> selectedF.checkSortNameIsSelected(a.name, b.name) 
        || selectedF.checkSortCountIsSelected(a.count, b.count))
        .forEach(item => cardContauner.appendChild(item.card));
}

filterCards();

function resetFun(){
    cardContauner.innerHTML = '';
    filtersShape.reset();
    colorsFilters.reset();
    sizeFilters.reset();
    sliderCount.reset();
    sliderYear.reset();
    cards.forEach(item => {
        cardContauner.appendChild(item.card)});
}


let search = new SearchFilter(inputSearch);
search.createSerch();

function inputSearch() {
}

const favoriteFilter = new Favorite(createFavorite);
favoriteFilter.create();
const state = new ChristmasState()
function createFavorite() {
    console.log('ffff')
}

export function cardFs(): FavoriteCard[]{
    return cards.map((item) => {
        if (item.favorite === true){
        let cardsFavorite = new FavoriteCard(item.count, item.num);
        cardsFavorite.createFavoriteCard();
        return cardsFavorite;
        }
    });
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

