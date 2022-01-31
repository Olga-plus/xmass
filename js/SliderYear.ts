import { Filter } from './interfaces';
import * as noUiSlider from 'nouislider';
const filtrRunge: HTMLElement = document.querySelector(".filters-range") as HTMLElement;

import { API } from "nouislider";

export class SliderFilterYear implements Filter {
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
        this.countSlider.set([1940, 2020])
    }

    createSlaider() {

        const year = document.createElement('div');
        year.className = 'year';
        filtrRunge.appendChild(year);

        const nameYear = document.createElement('span');
        nameYear.className = 'control-span';
        nameYear.innerText = 'Год приобретения:';
        year.appendChild(nameYear);

        const countContainer = document.createElement('div');
        countContainer.className = 'count-slider-container';
        year.appendChild(countContainer);

        const outputYearStart = document.createElement('output');
        outputYearStart.className = 'slider-output';
        outputYearStart.innerText = '1940';
        countContainer.appendChild(outputYearStart);

        const sliderYear = document.createElement('div');
        sliderYear.className = 'year-slider';
        sliderYear.id = 'year-slider';
        countContainer.appendChild(sliderYear);

        const outputYearFin = document.createElement('output');
        outputYearFin.className = 'slider-output';
        outputYearFin.innerText = '2020';
        countContainer.appendChild(outputYearFin);

        this.countSlider = noUiSlider.create(document.getElementById('year-slider'), {
            start: [1940, 2020],
            tooltips: true,
            connect: true,
            padding: 0,
            range: {
                'min': 1940,
                'max': 2020
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
            a[2].innerHTML = `${values[0]}`;
            a[3].innerHTML = `${values[1]}`;
            this.callback();
        })
    }
}