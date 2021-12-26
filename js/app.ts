import "../sass/style.scss";
import data from '../assets/data.js';
import {Card, cardXs} from '../js/card'
import { node, SourceMapDevToolPlugin } from "webpack";
import { filterShapes, ShapeFilter } from "./ShapeFilter";

// const page = document.querySelector(".page");
export const cardContauner: HTMLElement = document.querySelector(".card-container") as HTMLElement;

const home = document.querySelector('#home');
const tous = document.querySelector('#tous');
const titleBtn = document.querySelector('#title-btn');
const tree = document.querySelector('#tree');
const mainePage = document.querySelector('#main-page');
const homePage = document.querySelector('#start-page');

export const cards = cardXs();
console.log(cards);

cards.forEach(item => cardContauner.appendChild(item.card) );

home.addEventListener('click', () => { startPage()});
titleBtn.addEventListener('click', () => { tousPage()});
tous.addEventListener('click', () => { tousPage()});

function startPage(): void {
    mainePage.className = 'none';
    homePage.className = 'page start-page';
}

function tousPage(): void {
    homePage.className = 'none';
    mainePage.className = 'page main-page';
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
    console.log(!favoriteValue)
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

export class Render {

}
//     filterShape (): void{
//     cards.filter(elem => this.salectorShape.has(elem.shape)).forEach(item => cardContauner.appendChild(item.card))
// }

const shape= ["шар", "колокольчик", "шишка", "снежинка", "фигурка"];
const shapeName = ['ball', 'bell', 'cone', 'snowFl', 'toy'];

function filtersShape(): ShapeFilter[] {
    return filtersNames.shape.map(function(item, i) {
        const filters = new ShapeFilter(item, shapeName[i]);
        filters.renderButtons();
        return filters;
    } )
}

let shapeFilters = filtersShape();

shapeFilters.forEach(elem => console.log(elem))
const ballshape = document.querySelector('#ball');
const bellshape = document.querySelector('#bell');
const coneshape = document.querySelector('#cone');
const snowFlshape = document.querySelector('#snowFl');
const toyshape = document.querySelector('#toy');
ballshape.addEventListener('click', () => {filterShapes('шар')});
bellshape.addEventListener('click', () => {filterShapes('колокольчик')});
coneshape.addEventListener('click', () => {filterShapes('шишка')});
snowFlshape.addEventListener('click', () => {filterShapes('снежинка')});
toyshape.addEventListener('click', () => {filterShapes('фигурка')});

console.log(shapeFilters)
