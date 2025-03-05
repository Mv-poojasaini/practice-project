import { Component } from '@angular/core';
import { Product } from 'src/model/product.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
//   template: `
//   <h1>{{ title }}</h1>
//   <app-card></app-card> 
// `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-jetblue';

}
