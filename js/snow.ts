const treeContainer: HTMLDivElement = document.querySelector('#section-tree');
let controlsContainer: HTMLDivElement =  document.querySelector('#controls-snow-audio');

export class Snow {
    snowContainer: HTMLDivElement;
    snow: HTMLDivElement;
    snowButton: HTMLDivElement;

    constructor(){
        this.createSnow();
    }

    createSnow(){

        this.snowButton = document.createElement('div');
        this.snowButton.className = 'snow-control menu-item';
        this.snowButton.style.backgroundImage = `url(/assets/svg/snow.svg)`;
        controlsContainer.appendChild(this.snowButton);
        
        this.snowButton.onclick = this.onOff.bind(this);

        this.snowContainer = document.createElement('div');
        this.snowContainer.className = 'snow-blocks none';
        treeContainer.appendChild(this.snowContainer);

        for(let i = 0; i < 100; i++) {
            this.snow = document.createElement('div');
            this.snow.className = 'snow';
            this.snowContainer.appendChild(this.snow);
        }
    }

    onOff(){
        // cont.classList.toggle("none");
        this.snowContainer.classList.toggle("none");
        // this.snow.forEach(item => item.classList.toggle("none"))
    }

}

export function snowOn() {
    let snowPlay = new Snow();
}