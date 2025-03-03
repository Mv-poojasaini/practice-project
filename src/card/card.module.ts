import { NgModule } from "@angular/core";
import { CardComponent } from "./card.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { GreetingsComponent } from "src/app/greetings/greetings.component";

@NgModule({
  declarations: [CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
   providers: [],
  bootstrap: [CardComponent]
})
export class CardModule { }