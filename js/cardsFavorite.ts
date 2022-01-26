const containerFavorite = document.querySelector('.favorites-container');
let dragElem; // 
export class FavoriteCard {
    cardFavoriteImg: HTMLImageElement;
    count: string;
    num: string;
    cardFavorite: HTMLDivElement;
    countFavorite: HTMLParagraphElement;
    treeContainer: HTMLDivElement;

    constructor (count: string, num: string){
        this.count = count;
        this.num = num;
        this.createFavoriteCard()
    }

    createFavoriteCard () {
        this.cardFavorite = document.createElement('div');
        this.cardFavorite.className = 'favorites-card';
        this.cardFavorite.setAttribute(`data-num`, `${this.num}`);
        containerFavorite.appendChild(this.cardFavorite);

        this.countFavorite = document.createElement('p');
        this.countFavorite.className = 'favorites-count';
        this.countFavorite.innerText = `${this.count}`
        this.cardFavorite.appendChild(this.countFavorite);

        for (let i = 0; i < Number(this.count); i++){

            this.cardFavoriteImg = new Image();
            this.cardFavoriteImg.className = 'favorites-card-img';
            this.cardFavoriteImg.id = `${this.num}-${i}`;
            this.cardFavoriteImg.setAttribute(`draggable`, `true`);
            this.cardFavoriteImg.setAttribute(`alt`, `toy`);
            this.cardFavoriteImg.setAttribute(`data-local`, '1');
            this.cardFavoriteImg.src = `../assets/toys/${this.num}.webp`
            this.cardFavorite.appendChild(this.cardFavoriteImg); 
            this.cardFavoriteImg.ondragstart = this.dragstart_.bind(this);
            this.cardFavoriteImg.ondragend = this.dragEnd_.bind(this);
        }
    }

    dragstart_(ev: any): void{ //DragEvent
        ev.dataTransfer.setData(`text/plain`, ev.target.id)
        console.log ('start',  ev.target.id);
    }

    dragEnd_(event: DragEvent): void {
        dragElem = event.target as HTMLElement;
        if ( event.dataTransfer.dropEffect === 'none' && this.cardFavoriteImg.getAttribute('data-local') === '0'){
            dragElem.style.removeProperty('top');
            dragElem.style.removeProperty('left');
            dragElem.setAttribute('data-local', '1');
            this.cardFavorite.appendChild(dragElem); 
        } else {
           this.cardFavoriteImg.setAttribute('data-local', '0'); 
        }
        const countToy = this.cardFavorite.querySelectorAll('.favorites-card-img');
        this.countFavorite.innerText = `${countToy.length}`
    }

}