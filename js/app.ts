import "../sass/style.scss";
import data from '../assets/data.js';
import {Card, cardXs} from '../js/card'

// const page = document.querySelector(".page");
const cardContauner: HTMLElement = document.querySelector(".card-container") as HTMLElement;


const home = document.querySelector('#home');
const tous = document.querySelector('#tous');
const titleBtn = document.querySelector('#title-btn');
const tree = document.querySelector('#tree');
const mainePage = document.querySelector('#main-page');
const homePage = document.querySelector('#start-page');

cardXs();

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
}

let filterShape = ["шар", "колокольчик", "шишка", "снежинка", "фигурка"]

function ChangCard(): void {
    console.log(!favoriteValue)
    if(!favoriteValue){
        favoriteValue = !favoriteValue;
        cardContauner.innerText = '';
        data.filter(elem => elem.favorite === true).forEach(item => {
        let cardX = new Card (item);
        cardX.render();
        })
    }
    else if(favoriteValue){
        favoriteValue = !favoriteValue;
        cardContauner.innerText = '';
        cardXs();
    }
}
 class Filter {
     forma: string;
     shapeConst: boolean;
     selector: string;

     private btn: HTMLDivElement;
     constructor (forma: string, shapeConst: boolean, selector: string ){
      this.forma = forma; 
      this.shapeConst = shapeConst;
      this.selector = selector
     }

     createEl () {
        this.btn = document.querySelector(this.selector);
        this.btn.onclick = this.filterShape.bind(this);
     }
     
     filterShape(){
        if (!this.shapeConst){
            this.shapeConst = !this.shapeConst;
            cardContauner.innerText = '';
            data.filter(elem => elem.shape === this.forma).forEach(item => {
            let cardX = new Card (item);
            cardX.render();
            
        })  
        } else
        if (this.shapeConst) {
            this.shapeConst = !this.shapeConst;
            cardContauner.innerText = '';
            cardXs();
        } 
     }
 }
 let ball = new Filter (filterShape[0], filterShapeConst.shapeBall, '.data-ball');
 ball.createEl();
 let bell = new Filter (filterShape[1], filterShapeConst.shapeBell, '.data-bell');
 bell.createEl();
 let cone = new Filter (filterShape[2], filterShapeConst.shapeCone, '.data-cone');
 cone.createEl();
 let snowflake = new Filter (filterShape[3], filterShapeConst.shapeSnowFlake, '.data-snowflake' );
 snowflake.createEl();
 let toy = new Filter (filterShape[4], filterShapeConst.shapeToy, '.data-toy' );
 toy.createEl();