import { Card } from './card';
const favoriteCount = document.getElementById('count-favorite');

export class ChristmasState {
    favoriteToys = new Set<Card>();

    constructor(){
        this.valueFavorite();
    }

    selectCard(card: Card): void {
        this.favoriteToys.add(card);
    }

    deselectCard(card: Card): void {
        this.favoriteToys.delete(card);
    }

    valueFavorite(){
        let favoritesToy = this.getFavoriteTous();
        favoriteCount.innerText = `${favoritesToy.length}`;
    }

    getFavoriteTous(){
        let favoritesToy = Array.from(this.favoriteToys);
        return favoritesToy;
    }
}

export const state = new ChristmasState();
