import "../sass/style.scss";
import card, {cardXs} from '../js/card'
import { ShapeFilter } from "./ShapeFilter";
import * as noUiSlider from 'nouislider';
import { ColorFilter } from "./ColorFilter";
import { Favorite } from "./favorite";
import { FavoriteCard } from "./cardsFavorite";
import { ChristmasState } from "./state";
import { SizeFilter } from "./SizeFilter";
import { FiltersSort } from "./Sort";
import { playAudio } from "./Player";
import { TreeContainer } from "./containerTree";
import { Snow } from "./snow";
import { filterCards } from "./filterCards";
import { sortCards } from "./sortCards";

let countSlider = noUiSlider.create(document.getElementById('r-slider'), {
    start: [1, 12],
    tooltips: true,
    connect: true,
    padding: 0,
    range: {
        'min': 1,
        'max': 12
    },
    format:{
        to: function(value){
            return Math.round(value);
        },
        from: function(value){
            return parseInt(value);
        },
    },
});

countSlider.on('change', (values, handle) => {
    console.log(values);
})



let sliderYear = document.getElementById('year-slider');

noUiSlider.create(sliderYear, {
    start: [1940, 2020],
    connect: true,
    range: {
        'min': 1940,
        'max': 2020
    }
});


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
    let a = cards.filter(elem => elem.favorite === true);
    cardFs();
}


const selectedF = new FiltersSort(resetFun, sortCards, filterCards);
selectedF.renderButtons();

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

filterCards();

function resetFun(){
    cardContauner.innerHTML = '';
    filtersShape.reset();
    colorsFilters.reset();
    sizeFilters.reset();
    cards.forEach(item => {cardContauner.appendChild(item.card)});
}

sortCards;

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

