import "../sass/style.scss";
import card, {cardXs} from '../js/card'
import { ShapeFilter } from "./ShapeFilter";
import * as noUiSlider from 'nouislider';
import { ColorFilter } from "./ColorFilter";
import { Favorite } from "./favorite";
import { FavoriteCard } from "./cardsFavorite";
import { state } from "./state";
import { SizeFilter } from "./SizeFilter";

// const page = document.querySelector(".page");
let slider = document.getElementById('slider');
noUiSlider.create(slider, {
    start: [1, 12],
    connect: true,
    range: {
        'min': 1,
        'max': 12
    }
});

const one = document.querySelector('.slider-output');
one.innerHTML

let sliderYear = document.getElementById('year-slider');
console.log(sliderYear)
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
export const cards = cardXs();
console.log(cards);

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



 export let filtersNames = {
    shape: ["шар", "колокольчик", "шишка", "снежинка", "фигурка"],
    shapeName: ['ball', 'bell', 'cone', 'snowFl', 'toy'],
    color: ["белый", "желтый", "красный", "синий", "зелёный"],
    size: ["большой", "средний", "малый"]
 };
 const containerControls: HTMLDivElement = document.querySelector('.controls');
// class ShapeFilter implements Render {
export const shapeFormaa: HTMLDivElement = document.querySelector('.shape');

const filters = new ShapeFilter();
filters.renderButtons();

const colorsFilters = new ColorFilter();
colorsFilters.renderButtons();

const sizeFilters = new SizeFilter();
sizeFilters.renderButtons();

const favoriteFilter = new Favorite();
favoriteFilter.create();


export function cardFs(): FavoriteCard[]{
    return cards.map(function (item, index) {
        console.log('tytytyt', item)
        if (item.favorite === true){
        let cardsFavorite = new FavoriteCard(item.count, item.num);
        cardsFavorite.createFavoriteCard();
            return cardsFavorite; 
        }

        });
} 

let fff = cardFs();
// let cardsFavorite = new FavoriteCard('2', '1');
// cardsFavorite.createFavoriteCard();