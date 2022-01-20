import {containTree} from './containerTree';

const favoritesMenu = document.querySelector('.favorites-manu');
const sectionTree = document.querySelector('#section-tree');
export class LightRope {
    buttonMulti: HTMLButtonElement;
    buttonYellow: HTMLButtonElement;
    buttonRed: HTMLButtonElement;
    buttonBlue: HTMLButtonElement;
    buttonGreen: HTMLButtonElement;
    button: HTMLButtonElement;


    constructor(){
        this.createLight();
    }

    createLight(){

        const menuGirland = document.createElement('div');
        menuGirland.className = 'garland-container menu-container';
        favoritesMenu.appendChild( menuGirland);
        const garlandContainer =  document.createElement('div');
        garlandContainer.className = 'garland-btns';
        menuGirland.appendChild( garlandContainer);

        
        this.buttonMulti = document.createElement('button');
        this.buttonMulti.className = 'color-btn multicolor-btn';
        this.buttonMulti.setAttribute(`data-color`, `multicolor`);
 
        this.buttonYellow = document.createElement('button');
        this.buttonYellow.className = 'color-btn yellow-btn';
        this.buttonYellow.setAttribute(`data-color`, `yellow`);

        this.buttonRed = document.createElement('button');
        this.buttonRed.className = 'color-btn red-btn';
        this.buttonRed.setAttribute(`data-color`, `red`);

        this.buttonBlue = document.createElement('button');
        this.buttonBlue.className = 'color-btn blue-btn';
        this.buttonBlue.setAttribute(`data-color`, `blue`);
        
        this.buttonGreen = document.createElement('button');
        this.buttonGreen.className = 'color-btn green-btn';
        this.buttonGreen.setAttribute(`data-color`, `green`);

        const onOff = document.createElement('div');
        onOff.className = 'onoffswitch';
        menuGirland.appendChild( onOff);

        const cheskboxOnOff = document.createElement('input');
        cheskboxOnOff.type = "checkbox";
        cheskboxOnOff.checked = true;
        cheskboxOnOff.id = "myonoffswitch";
        cheskboxOnOff.className = 'onoffswitch-checkbox';
        cheskboxOnOff.setAttribute('name', 'onoffswitch')
        onOff.appendChild(cheskboxOnOff);

        const onOffLabel = document.createElement('label');
        onOffLabel.setAttribute('for', 'myonoffswitch');
        onOffLabel.className = 'onoffswitch-label';
        menuGirland.appendChild(onOffLabel);

        const lightSection = document.createElement('div');
        lightSection.className = 'lightrope-section';

        for (let j = 0; j < 10; j++){
            const lightContainer = document.createElement('ul');
            lightContainer.className = 'lightrope';
            lightSection.appendChild(lightContainer);
            sectionTree.appendChild(lightSection);
            
            let countLight = j + 5;

            for (let i = 0; i < (countLight + (j*3.5)); i++){
                const light = document.createElement('div');
                light.className = 'lightrope_move';
                if (i === 0) {
                    light.style.transform = `rotate(0deg) translate(0px, 250px)`; 
                }
                if (i === 1) {
                    light.style.transform = `rotate(-2deg) translate(0px, 250px)`; 
                }
                if (i % 2 > 0 && i > 1) {
                    light.style.transform = `rotate(${-1-i}deg) translate(0px, 250px)`; 
                }
                if (i % 2 === 0 && i > 1) {
                    light.style.transform = `rotate(${1+i}deg) translate(0px, 250px)`; 
                }
                lightContainer.appendChild(light);
            }

    }

        garlandContainer.append(this.buttonGreen, this.buttonBlue, this.buttonRed, this.buttonYellow, this.buttonMulti);
        this.buttonMulti.onclick = this.checkLight.bind(this, this.buttonMulti);
        this.buttonYellow.onclick = this.checkLight.bind(this, this.buttonYellow);
        this.buttonRed.onclick = this.checkLight.bind(this, this.buttonRed);
        this.buttonBlue.onclick = this.checkLight.bind(this, this.buttonBlue);
        this.buttonGreen.onclick = this.checkLight.bind(this, this.buttonGreen);
        
        cheskboxOnOff.onclick = this.checkLight.bind(this);
    }

    checkLight(button: HTMLButtonElement){
        console.log(button.getAttribute('data-color'));
    }
}

export function light() {
    let light = new LightRope();
}