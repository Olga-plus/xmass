import { Filter } from './interfaces';
import * as noUiSlider from 'nouislider';
import { API } from "nouislider";

const filtrRunge: HTMLElement = document.querySelector(".filters-range") as HTMLElement;
export class SliderFilterCount implements Filter {
    countSlider: API;
    callback: () => void;
    constructor(callback: () => void) {
        this.callback = callback;
        this.createSlaider();
    }

    checkFilterIsSelected(filter: number): boolean {
        const values = this.countSlider.get() as number[];
        return values[0] <= filter && values[1] >= filter;
    }

    reset(){
        this.countSlider.set([1, 12])
    }

    createSlaider() {
        const count = document.createElement('div');
        count.className = 'count';
        filtrRunge.appendChild(count);

        const nameCount = document.createElement('span');
        nameCount.className = 'control-span';
        nameCount.innerText = 'Количество экземпляров:';
        count.appendChild(nameCount);

        const countContainer = document.createElement('div');
        countContainer.className = 'count-slider-container';
        count.appendChild(countContainer);

        const outputCountStart = document.createElement('output');
        outputCountStart.className = 'slider-output';
        outputCountStart.innerText = '1';
        countContainer.appendChild(outputCountStart);

        const sliderCount = document.createElement('div');
        sliderCount.className = 'count-slider';
        sliderCount.id = 'slider';
        countContainer.appendChild(sliderCount);

        const outputCountFin = document.createElement('output');
        outputCountFin.className = 'slider-output';
        outputCountFin.innerText = '12';
        countContainer.appendChild(outputCountFin);

        this.countSlider = noUiSlider.create(document.getElementById('slider'), {
            start: [1, 12],
            tooltips: true,
            connect: true,
            padding: 0,
            range: {
                'min': 1,
                'max': 12
            },
            format:{
                to: function(value){
                    return Math.round(value);
                },
                from: function(value){
                    return parseInt(value);
                },
            },
        });

        this.countSlider.on('change', (values) => {
            const a = document.querySelectorAll('.slider-output');
            a[0].innerHTML = `${values[0]}`;
            a[1].innerHTML = `${values[1]}`;
            this.callback();
        })
    }
}