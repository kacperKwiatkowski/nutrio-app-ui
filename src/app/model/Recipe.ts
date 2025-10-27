import {Ingredient} from "./Ingredient";

export class Recipe {
  private name: string;
  private instructions: string;
  private comments: string;
  private ingredients: Ingredient[];


  constructor(name: string, instructions: string, comments: string, ingredients: Ingredient[]) {
    this.name = name;
    this.instructions = instructions;
    this.comments = comments;
    this.ingredients = ingredients;
  }
}
