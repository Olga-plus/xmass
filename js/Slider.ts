import { Card } from "./card";
import { Filter } from './interfaces';
import * as noUiSlider from 'nouislider';
const cardContauner: HTMLElement = document.querySelector(".card-container") as HTMLElement;
const filtrRunge: HTMLElement = document.querySelector(".filters-range") as HTMLElement;

import { API } from "nouislider";

export class SliderFilterCount implements Filter {
    countSlider: API;
    callback: () => void;
    constructor(callback: () => void) {
        this.callback = callback;
        this.createSlaider();
    }

    checkFilterIsSelected(filter: number): boolean {
        let values = this.countSlider.get() as number[];
        return values[0] <= filter && values[1] >= filter;
    }

    reset(){
        this.countSlider.set([1, 12])
    }

    createSlaider() {
        let count = document.createElement('div');
        count.className = 'count';
        filtrRunge.appendChild(count);

        let nameCount = document.createElement('span');
        nameCount.className = 'control-span';
        nameCount.innerText = 'Колличество экземпляров:';
        count.appendChild(nameCount);

        let countContainer = document.createElement('div');
        countContainer.className = 'count-slider-container';
        count.appendChild(countContainer);

        let outputCountStart = document.createElement('output');
        outputCountStart.className = 'slider-output';
        outputCountStart.innerText = '1';
        countContainer.appendChild(outputCountStart);

        let sliderCount = document.createElement('div');
        sliderCount.className = 'count-slider';
        sliderCount.id = 'slider';
        countContainer.appendChild(sliderCount);

        let outputCountFin = document.createElement('output');
        outputCountFin.className = 'slider-output';
        outputCountFin.innerText = '12';
        countContainer.appendChild(outputCountFin);


        // let year = document.createElement('div');
        // count.className = 'year';
        // filtrRunge.appendChild(year);

        // let nameYear = document.createElement('span');
        // nameYear.className = 'control-span';
        // nameYear.innerText = 'Год приобретения:';
        // year.appendChild(nameYear);

        // let countContainer = document.createElement('div');
        // countContainer.className = 'count-slider-container';
        // count.appendChild(countContainer);

        // let outputYearStart = document.createElement('output');
        // outputYearStart.className = 'slider-output';
        // outputYearStart.innerText = '1940';
        // countContainer.appendChild(outputYearStart);

        // let sliderYear = document.createElement('div');
        // sliderYear.className = 'year-slider';
        // sliderYear.id = 'year-slider';
        // countContainer.appendChild(sliderYear);

        // let outputYearFin = document.createElement('output');
        // outputYearFin.className = 'slider-output';
        // outputYearFin.innerText = '2020';
        // countContainer.appendChild(outputYearFin);

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
            let a = document.querySelectorAll('.slider-output');
            a[0].innerHTML = `${values[0]}`;
            a[1].innerHTML = `${values[1]}`;
            this.callback();
        })
    }
}