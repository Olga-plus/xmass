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

        this.treeContainer.ondragover = this.dragOver_.bind(this);
        this.treeContainer.ondrop = this.dragDrop_.bind(Event);
        this.treeContainer.onmousemove = this.dragDrop_.bind(Event);
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
        const data = ev.dataTransfer.getData("text");
        console.log(ev.offsetX, ev.offsetY , document.getElementById(data))
        document.getElementById(data).style.top = `${Math.abs(ev.offsetY)}px`;
        document.getElementById(data).style.left = `${ev.offsetX}px`;

        // document.getElementById(data).style.top = ev.pageX -  document.getElementById(data).offsetWidth/2 + 'px';
        // document.getElementById(data).style.left = ev.pageY -  document.getElementById(data).offsetHeight/2 + 'px';
        sectiontreeContainer.append(document.getElementById(data)); //section
        ev.dataTransfer.clearData();
    }
}
export  function contTree() {
    const tree = new TreeContainer();
    return tree;
}

export const containTree = contTree();