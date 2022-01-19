import { FavoriteCard } from "./cardsFavorite";

const sectiontreeContainer = document.querySelector('.maine');

export class TreeContainer {

    treeContainer: HTMLDivElement;
    constructor(){
        this.createConteiner();
    }

    createConteiner() {
        this.treeContainer = document.createElement('div');
        this.treeContainer.className = 'main-tree-container';
        this.treeContainer.style.backgroundImage = `url('../assets/bg/2.webp')`;
        sectiontreeContainer.appendChild(this.treeContainer);
        const map = document.createElement('map');
        map.setAttribute('name',"tree-map" );
        const area = document.createElement('area');
        area.setAttribute('coords', '365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664')
        area.setAttribute('shape', 'poly');
        map.appendChild(area);
        this.treeContainer.appendChild(map);

        this.treeContainer.ondragover = this.dragOver_.bind(this);
        this.treeContainer.ondrop = this.dragDrop_.bind(Event);
    }

    dragOver_(event: Event): void{
        event.preventDefault();
    }

    // dragEnter_(event: any): void{
    //     event.preventDefault();
    //     console.log('Enter', this)
    // }
    dragDrop_(ev: DragEvent): void{
        console.log(ev);
        let data = ev.dataTransfer.getData("text");
        console.log(ev.offsetX)
        document.getElementById(data).style.top = `${ev.offsetY}px`;
        document.getElementById(data).style.left = `${ev.offsetX}px`;
        sectiontreeContainer.append(document.getElementById(data)); //section
        ev.dataTransfer.clearData();
    }
}
export function contTree() {
    const tree = new TreeContainer();
    return tree;
}

export let containTree = contTree();