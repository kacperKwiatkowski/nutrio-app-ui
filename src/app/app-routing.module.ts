import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateIngredientComponent} from "./component/create-ingredient/create-ingredient.component";
import {IngredientComponent} from "./component/ingredient/ingredient.component";
import {RecipeListComponent} from "./component/recipe-list/recipe-list.component";
import {IngredientListComponent} from "./component/ingredient-list/ingredient-list.component";
import {HomeComponent} from "./component/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },         // Default route
  { path: 'create-ingredient', component: CreateIngredientComponent },         // Default route
  { path: 'ingredients', component: IngredientListComponent },   // About page
  { path: 'recipes', component: RecipeListComponent } // Contact page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
