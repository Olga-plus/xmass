import { Card } from './card';

export class ChristmasState {
    private favoriteToys = new Set<Card>();

    selectCard(card: Card): void {
        this.favoriteToys.add(card);
        console.log('Hej!')
    }

    deselectCard(card: Card): void {
        this.favoriteToys.delete(card);
        console.log('Bye!')
    }

    getFavoriteTous(){
        return
    }
}

export const state = new ChristmasState();

