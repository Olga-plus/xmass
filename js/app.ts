import "../sass/style.scss";
import card, {cardXs} from '../js/card'
import { ShapeFilter } from "./ShapeFilter";
import * as noUiSlider from 'nouislider';
import { ColorFilter } from "./ColorFilter";
import { Favorite } from "./favorite";
import { FavoriteCard } from "./cardsFavorite";
import { state } from "./state";
import { SizeFilter } from "./SizeFilter";
import { FiltersSort } from "./Sort";
import { playAudio } from "./Player";

playAudio();
// const page = document.querySelector(".page");
let slider = document.getElementById('slider');
let b = noUiSlider.create(slider, {
    start: [1, 12],
    connect: true,
    range: {
        'min': 1,
        'max': 12
    }
});

const one = document.querySelector('.slider-output');

let sliderYear = document.getElementById('year-slider');

noUiSlider.create(sliderYear, {
    start: [1940, 2020],
    connect: true,
    range: {
        'min': 1940,
        'max': 2020
    }
});


let snow = document.querySelector('.snow-control')
let cont = document.querySelector('.main-tree-container');
let one1 = document.querySelector('.snow-blocks');
let one2 = document.querySelectorAll('.snow');
let sneg = 0
snow.addEventListener('click', () =>{onOff()});

function onOff(){
    // cont.classList.toggle("none");
    one1.classList.toggle("none");
    one2.forEach(item => item.classList.toggle("none"))
  
}
export const cardContauner: HTMLElement = document.querySelector(".card-container") as HTMLElement;

const home: HTMLElement  = document.querySelector('#home');
const tous : HTMLElement = document.querySelector('#tous');
const titleBtn: HTMLElement  = document.querySelector('#title-btn');
const tree: HTMLElement  = document.querySelector('#tree');
const mainePage: HTMLElement  = document.querySelector('#main-page');
const homePage: HTMLElement  = document.querySelector('#start-page');
const favoritPage: HTMLElement  = document.querySelector('#favorie-page');


export const cards = cardXs(); //---!!!!!!!!!!!!!!

cards.forEach(item => cardContauner.appendChild(item.card) );

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
}

 const containerControls: HTMLDivElement = document.querySelector('.controls');

// const shapeFormaa: HTMLDivElement = document.querySelector('.shape');



const colorsFilters = new ColorFilter();
colorsFilters.renderButtons();

const sizeFilters = new SizeFilter();
sizeFilters.renderButtons();

const favoriteFilter = new Favorite();
favoriteFilter.create();


export function cardFs(): FavoriteCard[]{
    return cards.map(function (item, index) {
        // console.log('tytytyt', item)
        if (item.favorite === true){
        let cardsFavorite = new FavoriteCard(item.count, item.num);
        cardsFavorite.createFavoriteCard();
            return cardsFavorite; 
        }

    });
} 

let favoriteCardsTree = cardFs();


let selectedF = new FiltersSort(resetFun);
selectedF.renderButtons();

function arrShapes (){
    const filtersShape = new ShapeFilter(filterCards);
    filtersShape.renderButtons();
    return filtersShape;
}
const filtersShape = arrShapes();

console.log(filtersShape, 'ghjkl;');
function filterCards() {
    cardContauner.innerHTML = '';
    let fillArr = cards.filter(elem => filtersShape.checkFilterIsSelected(elem.shape))
    if (fillArr.length > 0) {
        fillArr.forEach(item => {cardContauner.appendChild(item.card)});
    } else if (fillArr.length === 0) {
        cards.forEach(item => {cardContauner.appendChild(item.card)});
    }
    
}

function resetFun(){
    cardContauner.innerHTML = '';
    filtersShape.reset();
    cards.forEach(item => {cardContauner.appendChild(item.card)});
}
