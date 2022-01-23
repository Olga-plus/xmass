const favoritesMenu = document.querySelector('.favorites-menu');
const sectionTree = document.querySelector('#section-tree');
export class LightRope {
    buttonMulti: HTMLButtonElement;
    buttonYellow: HTMLButtonElement;
    buttonRed: HTMLButtonElement;
    buttonBlue: HTMLButtonElement;
    buttonGreen: HTMLButtonElement;
    button: HTMLButtonElement;
    light: HTMLLIElement;
    colorLight: string;
    lightContainer: HTMLUListElement;


    constructor(){
        this.createLightcontainer()
        // this.createLight();
        
    }

    createLightcontainer(){

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
        this.buttonBlue.setAttribute(`data-color`, `turquoise`);
        
        this.buttonGreen = document.createElement('button');
        this.buttonGreen.className = 'color-btn green-btn';
        this.buttonGreen.setAttribute(`data-color`, `lawngreen`);

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

        this.lightContainer = document.createElement('ul');
        this.lightContainer.className = 'lightrope';
        lightSection.appendChild(this.lightContainer);
        sectionTree.appendChild(lightSection);

        garlandContainer.append(this.buttonGreen, this.buttonBlue, this.buttonRed, this.buttonYellow, this.buttonMulti);
        this.buttonMulti.onclick = this.checkLight.bind(this, this.buttonMulti);
        this.buttonYellow.onclick = this.checkLight.bind(this, this.buttonYellow);
        this.buttonRed.onclick = this.checkLight.bind(this, this.buttonRed);
        this.buttonBlue.onclick = this.checkLight.bind(this, this.buttonBlue);
        this.buttonGreen.onclick = this.checkLight.bind(this, this.buttonGreen);
        
        cheskboxOnOff.onclick = this.checkLight.bind(this, cheskboxOnOff);
    }

    checkLight(button: HTMLButtonElement){
        if (button.getAttribute('data-color') === null) {
            this.lightContainer.classList.toggle("none");
        } 
        if (button.getAttribute('data-color') === 'multicolor') {
            this.colorLight = button.getAttribute('data-color');
            this.lightContainer.innerHTML = '';
            this.createMulticolorLight();
        } 
        else {
            this.colorLight = button.getAttribute('data-color');
            this.lightContainer.innerHTML = '';
            this.createLight();
        }
    }

    createLight(): void{
        let countsection =  25;
        for (let j = 0; j < 11; j++) {            
            countsection = countsection + 60;
            
            for (let i = 0; i < ((j * 2)+2); i++) {
              
                this.light = document.createElement('li');
                this.light.className = 'lightrope_move';
                this.light.style.backgroundColor = `${this.colorLight}`;
                this.light.style.boxShadow = `0px 0.6px 14px 3px ${this.colorLight}`;
                this.light.style.transformOrigin = '0% 50%';
                this.light.style.animationDuration = `2s`;

                if (i === 0) {
                    
                    this.light.style.transform = `rotate(0.3deg) translate(0px, ${countsection}px )`; 
                }
                if (i === 1) {
        
                    this.light.style.transform = `rotate(-1.3deg) translate(0px, ${countsection}px )`; 
                }

                if (i % 2 > 0 && i > 1) {

                    this.light.style.transform = `rotate(${-i}deg) translate(0px, ${countsection}px )`; 
                }
                if (i % 2 === 0 && i > 0) {

                    this.light.style.transform = `rotate(${i}deg) translate(0px, ${countsection}px)`; 
                }
            
                this.lightContainer.appendChild(this.light);
            }

        }
    }

    createMulticolorLight(): void{
        let countsection =  25;
        for (let j = 0; j < 11; j++) {
            
            countsection = countsection + 60;
            
            for (let i = 0; i < ((j * 2)+2); i++) {
                this.colorLight = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
                this.light = document.createElement('li');
                this.light.className = 'lightrope_move';
                this.light.style.backgroundColor = `${this.colorLight}`;
                this.light.style.boxShadow = `0px 0.6px 14px 3px ${this.colorLight}`;
                this.light.style.transformOrigin = '0% 50%';
                this.light.style.animationDuration = `2s`;

                if (i === 0) {
                    
                    this.light.style.transform = `rotate(0.3deg) translate(0px, ${countsection}px )`; 
                }
                if (i === 1) {
        
                    this.light.style.transform = `rotate(-1.3deg) translate(0px, ${countsection}px )`; 
                }

                if (i % 2 > 0 && i > 1) {

                    this.light.style.transform = `rotate(${-i}deg) translate(0px, ${countsection}px )`; 
                }
                if (i % 2 === 0 && i > 0) {

                    this.light.style.transform = `rotate(${i}deg) translate(0px, ${countsection}px)`; 
                }
            
                this.lightContainer.appendChild(this.light);
            }

        }
    }
}





export function light() {
    let light = new LightRope();
}