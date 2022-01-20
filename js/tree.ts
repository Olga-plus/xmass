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
        area.setAttribute('coords', '243,2,250,40,260,33,260,51,281,57,262,68,288,72,282,87,290,98,291,107,310,128,300,135,325,149,310,154,339,175,307,177,331,202,315,214,338,214,367,235,329,238,365,268,338,265,354,271,352,290,399,315,372,322,407,346,403,357,355,348,359,356,387,366,423,405,416,422,402,425,408,434,400,442,423,442,447,462,405,466,391,473,403,477,399,490,418,486,422,502,451,518,446,526,432,529,407,526,403,537,419,536,417,545,425,547,427,560,443,562,456,580,460,591,495,617,471,616,460,610,468,622,440,612,463,648,415,645,444,702,413,694,407,702,366,672,354,697,342,668,330,665,338,682,319,678,331,699,300,684,271,696,263,712,255,712,245,693,219,692,215,680,204,688,195,688,201,672,188,677,183,665,174,666,174,683,166,686,159,672,148,666,123,678,112,700,107,685,80,709,86,674,75,667,62,668,64,657,57,650,7,663,30,646,0,637,30,622,22,612,20,603,34,602,35,595,1,599,38,578,43,570,49,546,40,539,81,483,29,484,106,400,56,407,76,390,82,372,110,363,86,360,101,327,127,322,125,312,78,320,100,301,112,286,136,246,162,214,118,209,165,189,166,160,144,150,173,138,191,89,208,64')
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