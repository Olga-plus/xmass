import { Card } from '../js/card';
import { cardContauner, colorsFilters, filtersShape, sizeFilters, cards } from "./app";



export function filterCards(): void | Card[] {
    cardContauner.innerHTML = '';
    if (colorsFilters.selected && filtersShape.selected && sizeFilters.selected) {
        cards.filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
        return cards.filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size));
    }
    else if (colorsFilters.selected && sizeFilters.selected) {
        cards.filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
        return cards.filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && sizeFilters.checkFilterIsSelected(elem.size));
    }
    else if (filtersShape.selected && sizeFilters.selected) {
        return cards.filter(elem => filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size)).forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (colorsFilters.selected && filtersShape.selected) {
        return cards.filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape)).forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (colorsFilters.selected) {
        return cards.filter(elem => colorsFilters.checkFilterIsSelected(elem.color)).forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (filtersShape.selected) {
        return cards.filter(elem => filtersShape.checkFilterIsSelected(elem.shape)).forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (sizeFilters.selected) {
        return cards.filter(elem => sizeFilters.checkFilterIsSelected(elem.size)).forEach(item => { cardContauner.appendChild(item.card); });
    } else {
        return cards.forEach(item => { cardContauner.appendChild(item.card); });
    }
}
