import { Card } from './card';

export class ChristmasState {
    favoriteToys = new Set<Card[]>();

    selectCard(card: Card[]): void {
        this.favoriteToys.add(card);
        console.log('Hej!',this.favoriteToys)
    }

    deselectCard(card: Card[]): void {
        this.favoriteToys.delete(card);
        console.log('Bye!', this.favoriteToys)
    }

    getFavoriteTous(){
        let favoritesToy = Array.from(this.favoriteToys);
        console.log(favoritesToy[0], 'ffffffffffffffffffffff')
        return favoritesToy[0];
    }
}

export const state = new ChristmasState()


