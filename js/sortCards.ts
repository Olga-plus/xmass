import { colorsFilters, filtersShape, sizeFilters, cards, cardContauner } from "./app";

export function sortCards(a: string) {

    if (a === 'sort-name-max' && colorsFilters.selected && filtersShape.selected && sizeFilters.selected) {
        cards.sort((a, b) => a.name.localeCompare(b.name))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => cardContauner.appendChild(item.card));
    }
    else if (a === 'sort-name-max' && colorsFilters.selected && sizeFilters.selected) {
        cards.sort((a, b) => a.name.localeCompare(b.name))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-name-max' && filtersShape.selected && sizeFilters.selected) {
        cards.sort((a, b) => a.name.localeCompare(b.name))
            .filter(elem => filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-name-max' && colorsFilters.selected && filtersShape.selected) {
        cards.sort((a, b) => a.name.localeCompare(b.name))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-name-max' && colorsFilters.selected) {
        cards.sort((a, b) => a.name.localeCompare(b.name))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-name-max' && filtersShape.selected) {
        cards.sort((a, b) => a.name.localeCompare(b.name))
            .filter(elem => filtersShape.checkFilterIsSelected(elem.shape))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-name-max' && sizeFilters.selected) {
        cards.sort((a, b) => a.name.localeCompare(b.name))
            .filter(elem => sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }

    else if (a === 'sort-name-min' && colorsFilters.selected && filtersShape.selected && sizeFilters.selected) {
        cards.sort((a, b) => b.name.localeCompare(a.name))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => cardContauner.appendChild(item.card));
    }

    else if (a === 'sort-name-min' && colorsFilters.selected && sizeFilters.selected) {
        cards.sort((a, b) => b.name.localeCompare(a.name))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-name-min' && filtersShape.selected && sizeFilters.selected) {
        cards.sort((a, b) => b.name.localeCompare(a.name))
            .filter(elem => filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-name-min' && colorsFilters.selected && filtersShape.selected) {
        cards.sort((a, b) => b.name.localeCompare(a.name))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-name-min' && colorsFilters.selected) {
        cards.sort((a, b) => b.name.localeCompare(a.name))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-name-min' && filtersShape.selected) {
        cards.sort((a, b) => b.name.localeCompare(a.name))
            .filter(elem => filtersShape.checkFilterIsSelected(elem.shape))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-name-min' && sizeFilters.selected) {
        cards.sort((a, b) => b.name.localeCompare(a.name))
            .filter(elem => sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-count-max' && colorsFilters.selected && filtersShape.selected && sizeFilters.selected) {
        cards.sort((a, b) => a.count.localeCompare(b.count, undefined, { numeric: true }))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => cardContauner.appendChild(item.card));
    }
    else if (a === 'sort-count-max' && colorsFilters.selected && sizeFilters.selected) {
        cards.sort((a, b) => a.count.localeCompare(b.count, undefined, { numeric: true }))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-count-max' && filtersShape.selected && sizeFilters.selected) {
        cards.sort((a, b) => a.count.localeCompare(b.count, undefined, { numeric: true }))
            .filter(elem => filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-count-max' && colorsFilters.selected && filtersShape.selected) {
        cards.sort((a, b) => a.count.localeCompare(b.count, undefined, { numeric: true }))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-count-max' && colorsFilters.selected) {
        cards.sort((a, b) => a.count.localeCompare(b.count, undefined, { numeric: true }))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-count-max' && filtersShape.selected) {
        cards.sort((a, b) => a.count.localeCompare(b.count, undefined, { numeric: true }))
            .filter(elem => filtersShape.checkFilterIsSelected(elem.shape))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-count-max' && sizeFilters.selected) {
        cards.sort((a, b) => a.count.localeCompare(b.count, undefined, { numeric: true }))
            .filter(elem => sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-count-min' && colorsFilters.selected && filtersShape.selected && sizeFilters.selected) {
        cards.sort((a, b) => b.count.localeCompare(a.count, undefined, { numeric: true }))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => cardContauner.appendChild(item.card));
    }
    else if (a === 'sort-count-min' && colorsFilters.selected && sizeFilters.selected) {
        cards.sort((a, b) => b.count.localeCompare(a.count, undefined, { numeric: true }))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-count-min' && filtersShape.selected && sizeFilters.selected) {
        cards.sort((a, b) => b.count.localeCompare(a.count, undefined, { numeric: true }))
            .filter(elem => filtersShape.checkFilterIsSelected(elem.shape) && sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-count-min' && colorsFilters.selected && filtersShape.selected) {
        cards.sort((a, b) => b.count.localeCompare(a.count, undefined, { numeric: true }))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color) && filtersShape.checkFilterIsSelected(elem.shape))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-count-min' && colorsFilters.selected) {
        cards.sort((a, b) => b.count.localeCompare(a.count, undefined, { numeric: true }))
            .filter(elem => colorsFilters.checkFilterIsSelected(elem.color))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-count-min' && filtersShape.selected) {
        cards.sort((a, b) => b.count.localeCompare(a.count, undefined, { numeric: true }))
            .filter(elem => filtersShape.checkFilterIsSelected(elem.shape))
            .forEach(item => { cardContauner.appendChild(item.card); });
    }
    else if (a === 'sort-count-min' && sizeFilters.selected) {
        cards.sort((a, b) => b.count.localeCompare(a.count, undefined, { numeric: true }))
            .filter(elem => sizeFilters.checkFilterIsSelected(elem.size))
            .forEach(item => { cardContauner.appendChild(item.card); });
    } else
    if (a === 'sort-name-max'){
        cards.sort((a, b) => a.name.localeCompare(b.name)).forEach(item => cardContauner.appendChild(item.card));
    } else
    if (a=== 'sort-name-min'){
        cards.sort((a, b) => b.name.localeCompare(a.name)).forEach(item => cardContauner.appendChild(item.card));
    } else
    if (a === 'sort-count-max'){
        cards.sort((a, b) => a.count.localeCompare(b.count, undefined, {numeric: true})).forEach(item => cardContauner.appendChild(item.card));
    } else
    if (a === 'sort-count-min'){
        cards.sort((a, b) => b.count.localeCompare(a.count, undefined, {numeric: true})).forEach(item => cardContauner.appendChild(item.card));
    }
}
