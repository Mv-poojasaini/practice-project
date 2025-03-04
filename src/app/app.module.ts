import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from 'src/card/card.component';
import { GreetingsComponent } from 'src/app/greetings/greetings.component';
import { SentenceCasePipe } from 'src/helper/pipes/sentence-case.pipe';
import { HighlightDirective } from 'src/helper/directives/highlight.directive';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../helper/pipes/filter.pipe';
import { DateConversion } from 'src/helper/pipes/date.pipe';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GreetingsComponent,
    SentenceCasePipe,
    HighlightDirective,
    FilterPipe,
    DateConversion
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
