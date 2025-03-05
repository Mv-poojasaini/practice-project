import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from 'src/card/card.component';
import { SentenceCasePipe } from 'src/helper/pipes/sentence-case.pipe';
import { HighlightDirective } from 'src/helper/directives/highlight.directive';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../helper/pipes/filter.pipe';
import { DateConversion } from 'src/helper/pipes/date.pipe';
import { DatePipe } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AddItemsComponent } from 'src/input-output-decorator/add-items/add-items.component';
import { HomeComponent } from 'src/input-output-decorator/home/home.component';
import { ProductComponent } from 'src/input-output-decorator/product/product.component';
import { GreetingsComponent } from './greetings/greetings.component';



@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SentenceCasePipe,
    HighlightDirective,
    FilterPipe,
    DateConversion,
    AddItemsComponent,
    ProductComponent,
    HomeComponent,
    GreetingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
