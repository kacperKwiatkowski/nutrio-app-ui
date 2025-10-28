import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Ingredient} from "../../model/Ingredient";

@Component({
  selector: 'ingredient-component',
  templateUrl: './ingredient.component.html',
  standalone: true,
  styleUrls: ['./ingredient.component.sass']
})
export class IngredientComponent {

  @Input() ingredient: Ingredient = {
    name: '',
    weight: 0,
    protein: 0,
    fat: 0,
    carbohydrates: 0
  };
  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  message: string = 'Hello from Child!';

  addIngredient(ingredientToAdd: Ingredient) {
    this.ingredientAdded.emit(ingredientToAdd);
  }

  sayHello() {
    alert('Hello from the Child Component!');
  }

  updateMessage(newMessage: string) {
    this.message = newMessage;
    alert("Message updated to: " + this.message)
  }
}
