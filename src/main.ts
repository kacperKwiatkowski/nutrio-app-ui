import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, withDebugTracing} from "@angular/router";
import {HomeComponent} from "./app/component/home/home.component";
import {CreateIngredientComponent} from "./app/component/create-ingredient/create-ingredient.component";
import {IngredientListComponent} from "./app/component/ingredient-list/ingredient-list.component";
import {RecipeListComponent} from "./app/component/recipe-list/recipe-list.component";
import {provideHttpClient} from "@angular/common/http";

const routes = [
  { path: '', component: HomeComponent },         // Default route
  { path: 'create-ingredient', component: CreateIngredientComponent },         // Default route
  { path: 'ingredients', component: IngredientListComponent },   // About page
  { path: 'recipes', component: RecipeListComponent }, // Contact page
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes, withDebugTracing()) // <-- provides routing
  ]
}).then(appRef => {
  console.log('Angular 20 app bootstrapped!', appRef);
});
