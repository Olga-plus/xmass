import "../sass/style.scss";
import {cardXs} from '../js/card'
import { ShapeFilter } from "./ShapeFilter";
// import { filterShapes, filtersShape, ShapeFilter } from "./ShapeFilter";

// const page = document.querySelector(".page");
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

const checkFavorite = document.querySelector('input[id="checkbox"]');
checkFavorite.addEventListener('click', () => {ChangCard()});

let favoriteValue: boolean = false;

let filterShapeConst = {
    shapeBall: false,
    shapeBell: false,
    shapeCone: false,
    shapeSnowFlake: false,
    shapeToy: false,
    colorWhite: false,
    colorYellow: false,
    colorRed: false,
    colorBlue: false,
    colorGreen: false,
    sizeBig: false,
    sizeMiddle: false,
    sizeSmall: false,
}

// let filterShape = [
//     "шар", "колокольчик", "шишка", "снежинка", "фигурка", 
//     "белый", "желтый", "красный", "синий", "зелёный",
//     "большой", "средний", "малый"
// ]

function ChangCard(): void {
    favoriteValue = !favoriteValue;
    cardContauner.innerHTML = '';
    if(favoriteValue){
        cards.filter(elem => elem.favorite === true).forEach(item => cardContauner.appendChild(item.card) )
    }
    else if(!favoriteValue){
        
        cards.forEach(item => cardContauner.appendChild(item.card) )
    }
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

//     filterShape (): void{
//     cards.filter(elem => this.salectorShape.has(elem.shape)).forEach(item => cardContauner.appendChild(item.card))
// }

const shape = ["шар", "колокольчик", "шишка", "снежинка", "фигурка"];
const shapeName = ['ball', 'bell', 'cone', 'snowFl', 'toy'];



// let shapeFilters = filtersShape();

// shapeFilters.forEach(elem => console.log(elem))
// const ballshape = document.querySelector('#ball');
// const bellshape = document.querySelector('#bell');
// const coneshape = document.querySelector('#cone');
// const snowFlshape = document.querySelector('#snowFl');
// const toyshape = document.querySelector('#toy');
// ballshape.addEventListener('click', () => {filterShapes('шар')});
// bellshape.addEventListener('click', () => {filterShapes('колокольчик')});
// coneshape.addEventListener('click', () => {filterShapes('шишка')});
// snowFlshape.addEventListener('click', () => {filterShapes('снежинка')});
// toyshape.addEventListener('click', () => {filterShapes('фигурка')});

// console.log(shapeFilters)
const filters = new ShapeFilter();
filters.renderButtons();