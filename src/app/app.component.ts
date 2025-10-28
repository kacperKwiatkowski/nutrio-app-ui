import { Component } from '@angular/core';
import {ContentComponent} from "./layout/content/content.component";
import {HeaderComponent} from "./layout/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    ContentComponent,
    HeaderComponent,
  ],
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'nutrio-app-ui';
}
