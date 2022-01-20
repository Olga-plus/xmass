import {containTree} from './containerTree';

const favoritesMenu = document.querySelector('.favorites-menu');

export class BackgroundCard {
    bgTree: HTMLDivElement;

    constructor(){
        this.createBG();
    }

    createBG(){

        const treeContainers =  document.createElement('div');
        treeContainers.className = 'bg-container menu-container';
        favoritesMenu.appendChild( treeContainers);

        for(let i = 1; i < 11; i++){
            this.bgTree = document.createElement('div');
            this.bgTree.className = 'bg menu-item';
            this.bgTree.setAttribute(`data-bg`, `${i}`);
            this.bgTree.style.backgroundImage = `url('../assets/bg/${i}.webp')`;
            treeContainers.appendChild(this.bgTree);
            this.bgTree.onclick = this.checkBG.bind(this, (i));
        }
    }

    checkBG(i: number){
        containTree.treeContainer.style.backgroundImage = `url('../assets/bg/${i}.webp')`;
    }
}

export function backG() {
    let bg = new BackgroundCard();
}