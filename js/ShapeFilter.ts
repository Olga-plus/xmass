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

        this.buttonBell = document.createElement('button');
 
        this.buttonBell.setAttribute(`data-filter`, `${nameBell}`);

        this.buttonCone = document.createElement('button');

        this.buttonCone.setAttribute(`data-filter`, `${nameCone}`);

        this.buttonSnowF = document.createElement('button');

        this.buttonSnowF.setAttribute(`data-filter`, `${nameSnowF}`);
        
        this.buttonToy = document.createElement('button');

        this.buttonToy.setAttribute(`data-filter`, `${nameToy}`);

        shape.appendChild(buttonBall);
        shape.appendChild(this.buttonBell);
        shape.appendChild(this.buttonCone);
        shape.appendChild(this.buttonSnowF);
        shape.appendChild(this.buttonToy);
        this.buttonSnowF.onclick = this.filterShapes.bind(this, nameSnowF);
        this.buttonToy.onclick = this.filterShapes.bind(this, nameToy);
        this.buttonCone.onclick = this.filterShapes.bind(this, nameCone);
        this.buttonBell.onclick = this.filterShapes.bind(this, nameBell);
        buttonBall.onclick = this.filterShapes.bind(this, nameBall);
       
    }


filterShapes(i: string) : void{
    let a = this;
    cardContauner.innerHTML = '';
    console.log(a, i , this.selectorShape);
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
    // getData() {
    //     this.button.classList.toggle("active");
    //     console.log(this.selectorShape.size);
    //     if (this.selectorShape.size === 0) {
    //         console.log(this.selectorShape.add(this.name), 'add');
    //         return this.selectorShape.add(this.name);
    //     }
    //     if (this.selectorShape.size !== 0) {
    //         console.log(this.selectorShape, 'delete');
    //         return this.selectorShape.delete(this.name);

    //     }
    // };

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