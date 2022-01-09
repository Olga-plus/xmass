import "../sass/style.scss";
import card, {cardXs, Card} from '../js/card'
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





playAudio();
// const page = document.querySelector(".page");
let slider = document.getElementById('slider');
noUiSlider.create(slider, {
    start: [1, 12],
    snap: true,
    connect: true,
    range: {
        'min': 1,
        '5%': 2,
        '10%': 3,
        '15%': 4,
        '20%': 5,
        '25%': 6,
        '30%': 7,
        '35%': 8,
        '40%': 9,
        '45%': 10,
        '50%': 11,
        'max': 12
    }
});
console.log(noUiSlider.PipsType.LargeValue, 'hhhhhhhhhhhh')

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
const containerFavorite = document.querySelector('.favorites-container');


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
    containerFavorite.innerHTML = '';
    let a = cards.filter(elem => elem.favorite === true);
    cardFs();

}

const containerControls: HTMLDivElement = document.querySelector('.controls');

// const shapeFormaa: HTMLDivElement = document.querySelector('.shape');


let selectedF = new FiltersSort(resetFun);
selectedF.renderButtons();

function arrShapes (){
    const filtersShape = new ShapeFilter(filterCards);
    filtersShape.renderButtons();
    return filtersShape;
}
const filtersShape = arrShapes();

function arrColors (){
    const colorsFilters = new ColorFilter(filterCards);
    colorsFilters.renderButtons();
    return colorsFilters;
}
const colorsFilters = arrColors();

function arrSize (){
    const sizeFilters = new SizeFilter(filterCards);
    sizeFilters.renderButtons();
    return sizeFilters;
}
const sizeFilters = arrSize();


function filterCards() {
    cardContauner.innerHTML = '';
  
    if (colorsFilters.selected && filtersShape.selected && sizeFilters.selected){
        cards.filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size)).forEach(item => {cardContauner.appendChild(item.card)});
    } else
    if (colorsFilters.selected && sizeFilters.selected){
        cards.filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && sizeFilters.checkFilterIsSelected(elem.size)).forEach(item => {cardContauner.appendChild(item.card)});
    } else
    if (filtersShape.selected && sizeFilters.selected){
        cards.filter(elem => filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size)).forEach(item => {cardContauner.appendChild(item.card)});
    } else
    if (colorsFilters.selected && filtersShape.selected){
        cards.filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape)).forEach(item => {cardContauner.appendChild(item.card)});
    } else
    if (colorsFilters.selected){
        cards.filter(elem => colorsFilters.checkFilterIsSelected(elem.color)).forEach(item => {cardContauner.appendChild(item.card)});
    } else 
    if (filtersShape.selected){
        cards.filter(elem => filtersShape.checkFilterIsSelected(elem.shape)).forEach(item => {cardContauner.appendChild(item.card)});
    } else 
    if (sizeFilters.selected){
        cards.filter(elem => sizeFilters.checkFilterIsSelected(elem.size)).forEach(item => {cardContauner.appendChild(item.card)});
    } else {
        cards.forEach(item => {cardContauner.appendChild(item.card)});
        // let fillArr = cards.filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size) )
        // if (fillArr.length > 0) {
        //     fillArr.forEach(item => {cardContauner.appendChild(item.card)});
        //     } else if (fillArr.length === 0) {
        //         cards.forEach(item => {cardContauner.appendChild(item.card)});
        //     } 
        }  
}

function resetFun(){
    cardContauner.innerHTML = '';
    filtersShape.reset();
    colorsFilters.reset();
    sizeFilters.reset();
    cards.forEach(item => {cardContauner.appendChild(item.card)});
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
function contTree (){
  const tree = new TreeContainer();
  tree.createConteiner();
}

contTree ();

// let dropContainer =  document.querySelector('.main-tree-container');
// let containerToys = document.querySelector('.favorites-container');
// const toyDrag = document.querySelector('#select2');
// console.log(toyDrag, dropContainer, 'fgfgfgfgfgfgfg');


