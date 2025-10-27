import {Component, OnInit} from '@angular/core';
import {SharedDataService} from "../../service/shared-data.service";

@Component({
  selector: 'recipe-list-component',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.sass']
})
export class RecipeListComponent implements OnInit {

  message: string = "";

  constructor(
    private _sharedDataService: SharedDataService
  ) {
  }

  ngOnInit() {
    this._sharedDataService.currentBehaviouralMessage.subscribe(message => this.message = message);
  }

  changeMessage() {
    this._sharedDataService.changeBehaviouralSubjectMessage('Updated from Recipe List: Behavioural Subject');
  }

  changeReplayMessages() {
    this._sharedDataService.changeReplaySubjectMessage('Update from recipe list: Replay Subject ' + Date.now());
  }
}
