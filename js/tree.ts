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

        const map = document.createElement('map');
        map.setAttribute('name', 'tree-map' );
        const area = document.createElement('area');
        area.setAttribute('coords', '365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664')
        area.setAttribute('shape', 'poly');
        map.appendChild(area);
        containTree.treeContainer.appendChild(map);

        this.treeImg = new Image();
        this.treeImg.className = "christmas-tree";
        this.treeImg.src = `../assets/tree/2.webp`;
        this.treeImg.setAttribute('usemap', '#tree-map')
        this.treeImg.setAttribute('alt', 'tree')
        containTree.treeContainer.appendChild(this.treeImg);
    }

    checkTree(i: number) {
        this.treeImg.src = `../assets/tree/${i}.webp`;
    }
}

export function createTreesCard () {
    let treeCards = new TreeCard;
}