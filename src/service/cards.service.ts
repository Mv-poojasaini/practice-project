import { Injectable } from '@angular/core';
import { cardItem } from 'src/model/card.type';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cards: cardItem[] = [
    {
      cardId: 1,
      title: 'Card 1',
      description: 'this is the Card Template 1.',
    },
    {
      cardId: 2,
      title: 'Card 2',
      description: 'this is the Card Template  2.',   
    },
    {
      cardId: 3,
      title: 'Card 3',
      description: 'this Is The Card Template  3.',  
    }
  ];
  getCard() {
    return this.cards;
  }
  constructor() { }
}
