import { shapeFormaa, cardContauner, cards } from "./app";

export let filtersNames = {
    shape: ["шар", "колокольчик", "шишка", "снежинка", "фигурка"],
    shapeName: ['ball', 'bell', 'cone', 'snowFl', 'toy'],
    color: ["белый", "желтый", "красный", "синий", "зелёный"],
    size: ["большой", "средний", "малый"]
 };
 const filtersValue: HTMLDivElement = document.querySelector('.filters-value');
 console.log(filtersValue)
 const shapeName = ['ball', 'bell', 'cone', 'snowFl', 'toy'];
export class ShapeFilter {
    selectorShape: Set<string>;
    // nameBall: string;
    // nameBell: string;
    // nameCone: string;
    // nameSnowF: string;
    // nameToy: string;

    // shape: HTMLElement;
    // buttonBall: HTMLButtonElement;
    buttonBell: HTMLButtonElement;
    buttonCone: HTMLButtonElement;
    buttonSnowF: HTMLButtonElement;
    buttonToy: HTMLButtonElement;
 

    constructor() {
        this.selectorShape = new Set();
    }

    renderButtons() {
        // this.nameBall = `шар`;
        // this.nameBell = `колокольчик`;
        // this.nameCone = `шишка`;
        // this.nameSnowF = `снежинка`;
        // this.nameToy = `фигурка`;

        const nameBall = `шар`;
        const nameBell = `колокольчик`;
        const nameCone = `шишка`;
        const nameSnowF = `снежинка`;
        const nameToy = `фигурка`;

        let shape = document.createElement('div');
        shape.className = 'shape';
        shape.innerText = `Форма`;
        filtersValue.appendChild(shape);

        let buttonBall = document.createElement('button');
        buttonBall.setAttribute(`data-filter`, `${nameBall}`);

        let buttonBell = document.createElement('button');
        buttonBell.setAttribute(`data-filter`, `${nameBell}`);

        let buttonCone = document.createElement('button');
        buttonCone.setAttribute(`data-filter`, `${nameCone}`);

        let buttonSnowF = document.createElement('button');
        buttonSnowF.setAttribute(`data-filter`, `${nameSnowF}`);
        
        let buttonToy = document.createElement('button');
        buttonToy.setAttribute(`data-filter`, `${nameToy}`);

        shape.appendChild(buttonBall);
        shape.appendChild(buttonBell);
        shape.appendChild(buttonCone);
        shape.appendChild(buttonSnowF);
        shape.appendChild(buttonToy);
        buttonSnowF.onclick = this.filterShapes.bind(this, buttonSnowF);
        buttonToy.onclick = this.filterShapes.bind(this, buttonToy);
        buttonCone.onclick = this.filterShapes.bind(this, buttonCone);
        buttonBell.onclick = this.filterShapes.bind(this, buttonBell);
        buttonBall.onclick = this.filterShapes.bind(this, buttonBall);
    }



filterShapes(a: HTMLButtonElement) : void{
    let b = this;
    a.classList.toggle("active");
    let i = a.getAttribute('data-filter');
    cardContauner.innerHTML = '';
    console.log(b, i , this.selectorShape);
     if (!this.selectorShape.has(i)){
        this.selectorShape.add(i); 
         cards.filter(elem => this.selectorShape.has(elem.shape)).forEach(item => cardContauner.appendChild(item.card))
     } else
     if (this.selectorShape.has(i) && this.selectorShape.size > 0){
        this.selectorShape.delete(i) ; 
         cards.filter(elem => this.selectorShape.has(elem.shape)).forEach(item => cardContauner.appendChild(item.card))
     }  
     if (this.selectorShape.size === 0){
        this.selectorShape.delete(i) ; 
         cards.forEach(item => cardContauner.appendChild(item.card))
     } 
 } 

}



// let sert = new Set();
// export function filterShapes(i: string) : void{
//    cardContauner.innerHTML = '';
//     if (!sert.has(i)){
//         sert.add(i); 
//         cards.filter(elem => sert.has(elem.shape)).forEach(item => cardContauner.appendChild(item.card))
//     } else
//     if (sert.has(i) && sert.size > 0){
//         sert.delete(i) ; 
//         cards.filter(elem => sert.has(elem.shape)).forEach(item => cardContauner.appendChild(item.card))
//     }  
//     if (sert.size === 0){
//         sert.delete(i) ; 
//         cards.forEach(item => cardContauner.appendChild(item.card))
//     } 
// } 

// export function filtersShape(): ShapeFilter[] {
//     return filtersNames.shape.map(function(item, i) {
//         const filters = new ShapeFilter(item, shapeName[i]);
//         filters.renderButtons();
//         return filters;
//     } )
// }