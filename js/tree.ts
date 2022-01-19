import {containTree} from './containerTree';

const favoritesMenu = document.querySelector('.favorites-manu');
// const treeContainer = document.querySelector('#main-for-tree');
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

        for(let i = 0; i < 6; i++){
            this.tree = document.createElement('div');
            this.tree.className = 'tree menu-item';
            this.tree.setAttribute(`data-tree`, `${i + 1}`);
            this.tree.style.backgroundImage = `url('../assets/tree/${i + 1}.webp')`;
            treeContainers.appendChild(this.tree);
            this.tree.onclick = this.checkTree.bind(this, (i + 1));
        }

        this.treeImg = new Image();
        this.treeImg.src = `../assets/tree/2.webp`;
        containTree.treeContainer.appendChild(this.treeImg);
        // console.log('kekek')
    }

    checkTree(i: number){
        console.log(this.tree.getAttribute('data-tree'), i)//-----?????????????
        this.treeImg.src = `../assets/tree/${i}.webp`;

    }
}