import {containTree} from './containerTree';
const favoritesMenu = document.querySelector('.favorites-menu');

export class TreeCard {
    tree: HTMLDivElement;
    treeImg: HTMLImageElement;

    constructor(){
        this.createTrees();
    }

    createTrees(){

        const treeContainers =  document.createElement('div');
        treeContainers.className = 'tree-container menu-container';
        favoritesMenu.appendChild( treeContainers);

        for (let i = 0; i < 6; i++) {
            this.tree = document.createElement('div');
            this.tree.className = 'tree menu-item';
            this.tree.setAttribute(`data-tree`, `${i + 1}`);
            this.tree.style.backgroundImage = `url('../assets/tree/${i + 1}.webp')`;
            treeContainers.appendChild(this.tree);
            this.tree.onclick = this.checkTree.bind(this, (i + 1));
        }
    }

    checkTree(i: number) {
        containTree.treeImg.src= `../assets/tree/${i}.webp`;
    }
}

export function createTreesCard () {
    const treeCards = new TreeCard;
}