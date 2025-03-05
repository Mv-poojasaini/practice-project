import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from 'src/card/card.component';
import { HomeComponent } from 'src/input-output-decorator/home/home.component';

const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
