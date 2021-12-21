import "../sass/style.scss";
import data from '../assets/data.js';
import Card from '../js/card'

const page = document.querySelector(".page");
const cardContauner: HTMLElement = document.querySelector(".card-container") as HTMLElement;


const home = document.querySelector('#home');
const tous = document.querySelector('#tous');
const titleBtn = document.querySelector('#title-btn');
const tree = document.querySelector('#tree');
const mainePage = document.querySelector('#main-page');
const homePage = document.querySelector('#start-page');
home.addEventListener('click', () => { startPage()});
titleBtn.addEventListener('click', () => {  tousPage()});
tous.addEventListener('click', () => { tousPage()});


let cardX =  data.forEach(item => {
    let cardX = new Card (item);
    cardX.render();
});

function startPage(): void {
    mainePage.className = 'none';
    homePage.className = 'page start-page';
}

function tousPage(): void {
    homePage.className = 'none';
    mainePage.className = 'page main-page';
}