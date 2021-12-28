import { Card } from './card';

class ChristmasState {
    private favoriteToys = new Set<Card>();

    selectCard(card: Card): void {

    }

    deselectCard(card: Card): void {

    }
}

export const state = new ChristmasState();
