import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'content-component',
  templateUrl: './content.component.html',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  styleUrls: ['./content.component.sass']
})
export class ContentComponent {

}
