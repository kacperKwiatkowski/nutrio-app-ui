import {Component, OnInit, ViewChild} from '@angular/core';
import {IngredientService} from "../../service/ingredient.service";
import {Ingredient} from "../../model/Ingredient";
import {IngredientComponent} from "../ingredient/ingredient.component";
import {SharedDataService} from "../../service/shared-data.service";
import {CapitalizePipe} from "../../pipe/capitalize.pipe";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'ingredient-list-component',
  templateUrl: './ingredient-list.component.html',
  standalone: true,
  imports: [
    IngredientComponent,
    CapitalizePipe,
    CommonModule
  ],
  styleUrls: ['./ingredient-list.component.sass']
})
export class IngredientListComponent implements OnInit{

  public ingredients: Ingredient[] = [];
  public addedIngredients: Ingredient[] = [];
  public recipes: any = [];
  public errorMessageForIngredients: any;
  public errorMessageForRecipes: any;



  @ViewChild(IngredientComponent) child!: IngredientComponent;

  constructor(
    private _ingredientService: IngredientService,
    private _sharedDataService: SharedDataService
  ) {
  }

  ngOnInit() {
    this._ingredientService.getAllRecipes()
      .subscribe(data => {
          console.log(data);
          this.recipes = data
        }
      )

    this._ingredientService.getAllIngredients()
      .subscribe(
        (data: Ingredient[]) => {
          console.log(data);
          this.ingredients = data;
        }
      )
  }

  receivedIngredients(receivedIngredients: Ingredient) {
    this.addedIngredients.push(receivedIngredients);
  }

  callChildMethod() {
    this.child.sayHello();
  }

  changeChildMessage() {
    this.child.updateMessage('Updated from Parent!');
  }

  changeBehaviouralMessage() {
    this._sharedDataService.changeBehaviouralSubjectMessage('Updated from Ingredient List: Behavioural Subject!');
  }

  changeReplayMessages() {
    this._sharedDataService.changeReplaySubjectMessage('Update from ingredient list: Replay Subject ' + Date.now());
  }
}
