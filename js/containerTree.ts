const sectiontreeContainer = document.querySelector('.maine');

export class TreeContainer {

    treeContainer: HTMLDivElement;
    treeImg: HTMLImageElement;
    map: HTMLMapElement;
    constructor(){
        this.createConteiner();
    }

    createConteiner() {
        this.treeContainer = document.createElement('div');
        this.treeContainer.className = 'main-tree-container';
        this.treeContainer.style.backgroundImage = `url('../assets/bg/2.webp')`;
        sectiontreeContainer.appendChild(this.treeContainer);

        
        this.map = document.createElement('map');
        this.map.setAttribute('name', 'tree-map' );
        const area = document.createElement('area');
        area.setAttribute('coords', '365,699,189,706,113,683,31,608,2,555,2,539,18,437,73,351,106,224,161,134,243,-1,306,75,353,144,399,221,424,359,452,459,496,550,444,664')
        area.setAttribute('shape', 'poly');
        this.map.appendChild(area);
       this.treeContainer.appendChild(this.map);

        this.treeImg = new Image();
        this.treeImg.className = "christmas-tree";
        this.treeImg.src = `../assets/tree/2.webp`;
        this.treeImg.setAttribute('usemap', '#tree-map')
        this.treeImg.setAttribute('alt', 'tree')
        this.treeContainer.appendChild(this.treeImg);

        this.map.ondragover = this.dragOver_.bind(this);
        this.map.ondrop = this.dragDrop_.bind(this);
    }

    dragOver_(event: Event): void{
        event.preventDefault();
    }

    // dragEnter_(event: any): void{
    //     event.preventDefault();
    //     console.log('Enter', this)
    // }
    dragDrop_(ev: DragEvent): void{
        console.log(ev, 'tytyt');
        const treeContainerRect = this.treeContainer.getBoundingClientRect();
        const data = ev.dataTransfer.getData("text");
        console.log(ev.offsetX, ev.offsetY , document.getElementById(data))
        document.getElementById(data).style.top = `${ev.clientY - treeContainerRect.top}px`;
        document.getElementById(data).style.left = `${ev.clientX - treeContainerRect.left}px`;
        document.getElementById(data).setAttribute('data-local', '0')
        this.treeContainer.append(document.getElementById(data)); //section
    }
}
export  function contTree() {
    const tree = new TreeContainer();
    return tree;
}

export const containTree = contTree();