import { FavoriteCard } from "./cardsFavorite";

const sectiontreeContainer = document.querySelector('.maine');
export class TreeContainer {

    treeContainer: HTMLDivElement;

    // constructor (){

    // }

    createConteiner() {
        this.treeContainer = document.createElement('div');
        this.treeContainer.className = 'main-tree-container';
        sectiontreeContainer.appendChild(this.treeContainer);
        this.treeContainer.ondragover = this.dragOver_.bind(this);
        // this.treeContainer.ondragenter = this.dragEnter_.bind(this);
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
        console.log(ev.dataTransfer)
        sectiontreeContainer.append(document.getElementById(data)); //section
        ev.dataTransfer.clearData();
    }


}

