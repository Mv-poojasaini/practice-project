import { Component, OnInit } from "@angular/core";
import { inject } from "@angular/core/testing";
import { CardsService } from "src/service/cards.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  constructor(private cardsService: CardsService) { }
  filterText = "";
  title = "Card";
  cards = this.cardsService.getCard();
  customer = this.cardsService.getCustomerDetail();
  // cards = [
  //   {
  //     title: 'Card 1',
  //     description: 'This is the description for Card 1.',
  //   },
  //   {
  //     title: 'Card 2',
  //     description: 'This is the description for Card 2.',   
  //   },
  //   {
  //     title: 'Card 3',
  //     description: 'This is the description for Card 3.',  
  //   }
  // ];
  showData = false;
  image = "https://example.com/logo.png";
  onClick() {
    this.showData = !this.showData;
    
    console.log("Showing data")
  }

  submitForm() {
    console.log("Submitting form", this.customer);

  }
  
  ngOnInit(): void {}
}