import { Injectable } from '@angular/core';
import { cardItem, customerDetail } from 'src/model/card.type';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cards: cardItem[] = [
    {
      cardId: 1,
      title: 'Card 1',
      description: 'This is a detailed description for Card 1. It provides more information about what this card represents and how it can be useful.',
      timestamp: 1677949350
    },
    {
      cardId: 2,
      title: 'Card 2',
      description: 'Card 2 is a great resource for learning more about Angular components, directives, and services.',
      timestamp: 1678049350 
    },
    {
      cardId: 3,
      title: 'Card 3',
      description: 'Card 3 covers advanced topics in Angular like lazy loading, route guards, and more.',
      timestamp: 1678159350
    }
  ];

  customerDetail: customerDetail = {
    name: "",
    address: ""
  }
  getCard() {
    return this.cards;
  }
  getCustomerDetail() {
    return this.customerDetail;
  }

  submitForm() {
    console.log("submitting form")
  }
  constructor() { }
}
