import { Card } from "./card";
import * as noUiSlider from 'nouislider';
const cardContauner: HTMLElement = document.querySelector(".card-container") as HTMLElement;
const filtrRunge: HTMLElement = document.querySelector(".filters-range") as HTMLElement;

export class SliderFilter  {
   


    constructor() {

    }

    createSlaider(){

        let count = document.createElement('div');
        count.className = 'count';
        filtrRunge.appendChild(count);

        let nameCount = document.createElement('span');
        nameCount.className = 'control-span';
        nameCount.innerText = 'Колличество экземпляров:';
        count.appendChild(nameCount);

        let outputCountStart = document.createElement('output');
        outputCountStart.className = 'slider-output';
        outputCountStart.innerText = '1';
        count.appendChild(outputCountStart);

        let sliderCount = document.createElement('div');
        sliderCount.className = 'count-slider';
        sliderCount.id = 'slider';
        count.appendChild(sliderCount);

        let outputCountFin = document.createElement('output');
        outputCountFin.className = 'slider-output';
        outputCountFin.innerText = '12';
        count.appendChild(outputCountFin);


        let year = document.createElement('div');
        count.className = 'year';
        filtrRunge.appendChild(year);

        let nameYear = document.createElement('span');
        nameYear.className = 'control-span';
        nameYear.innerText = 'Год приобретения:';
        year.appendChild(nameYear);

        let outputYearStart = document.createElement('output');
        outputYearStart.className = 'slider-output';
        outputYearStart.innerText = '1940';
        count.appendChild(outputYearStart);

        let sliderYear = document.createElement('div');
        sliderYear.className = 'year-slider';
        sliderYear.id = 'year-slider';
        count.appendChild(sliderYear);

        let outputYearFin = document.createElement('output');
        outputYearFin.className = 'slider-output';
        outputYearFin.innerText = '2020';
        count.appendChild(outputYearFin);

    //     let countSlider = noUiSlider.create(sliderCount, {
    //         start: [1, 12],
    //         tooltips: true,
    //         connect: true,
    //         padding: 0,
    //         range: {
    //             'min': 1,
    //             'max': 12
    //         },
    //         format:{
    //             to: function(value){
    //                 return Math.round(value);
    //             },
    //             from: function(value){
    //                 return parseInt(value);
    //             },
    //         },
    //     });

    //     countSlider.on = this.rangeSlider.bind(this)
    // }

    // rangeSlider(){
    //     console.log(this)
    // }
}

}
