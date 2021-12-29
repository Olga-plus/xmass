// renderButtons() {

//     this.buttonBall = document.createElement('button');
//     this.buttonBall.setAttribute(`data-filter`, `${this.name}`);

//     let buttonw = document.createElement('button');
//     buttonw.setAttribute(`data-filter`, `шар`);

//     shapeFormaa.appendChild(this.button); // -------------------- ????????????
//     this.button.onclick = this.getData.bind(this);
// }


    // getSelector() {
    //     let selector = elem.getAttribute(this.nameAtribute)
    // }

    // filterShape (): void{
    //     cards.filter(elem => this.salectorShape.has(elem.shape)).forEach(item => cardContauner.appendChild(item.card))
    // }
    // renderBlock(){
    //     this.filter = document.createElement('div');
    //     this.filter.className = 'filter filters-value';
        

    //     let controlsTitle = document.createElement('div');
    //     controlsTitle.className = 'controls-title';
    //     controlsTitle.innerText = 'Фильтры по значению';
    //     this.filter.appendChild(controlsTitle);


    // }
    
            // this.controlsTitle = document.createElement('div');
        // this.controlsTitle.className = 'controls-title';
        // this.controlsTitle.innerText = 'Фильтры по значению';
        // filtersValue.appendChild(this.controlsTitle);


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

// let filterShape = [
//     "шар", "колокольчик", "шишка", "снежинка", "фигурка", 
//     "белый", "желтый", "красный", "синий", "зелёный",
//     "большой", "средний", "малый"
// ]

// const checkFavorite = document.querySelector('input[id="checkbox"]');
// checkFavorite.addEventListener('click', () => {ChangCard()});

// let favoriteValue: boolean = false;

// function ChangCard(): void {
//     favoriteValue = !favoriteValue;
//     cardContauner.innerHTML = '';
//     if(favoriteValue){
//         cards.filter(elem => elem.favorite === true).forEach(item => cardContauner.appendChild(item.card) )
//     }
//     else if(!favoriteValue){
        
//         cards.forEach(item => cardContauner.appendChild(item.card) )
//     }
// }
