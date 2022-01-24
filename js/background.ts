import {containTree} from './containerTree';

const favoritesMenu = document.querySelector('.favorites-menu');

export class BackgroundCard {
    bgTree: HTMLDivElement;
    treeContainers: HTMLDivElement;

    constructor(){
        this.createBG();
    }

    createBG(){

        this.treeContainers =  document.createElement('div');
        this.treeContainers.className = 'bg-container menu-container';
        favoritesMenu.appendChild( this.treeContainers);

        for(let i = 1; i < 11; i++){
            this.bgTree = document.createElement('div');
            this.bgTree.className = 'bg menu-item';
            this.bgTree.setAttribute(`data-bg`, `${i}`);
            this.bgTree.style.backgroundImage = `url('../assets/bg/${i}.webp')`;
            this.treeContainers.appendChild(this.bgTree);
            this.bgTree.onclick = this.checkBG.bind(this, (i));
        }
    }

    checkBG(i: number){
        containTree.treeContainer.style.backgroundImage = `url('../assets/bg/${i}.webp')`;
    }
}

export function backG() {
    const bg = new BackgroundCard();
    return bg;
}