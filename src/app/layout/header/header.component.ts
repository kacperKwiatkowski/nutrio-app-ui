import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

}
