import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Ingredient} from "../model/Ingredient";
import {Recipe} from "../model/Recipe";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private INGREDIENT_BACKEND_URL: string = "http://localhost:8080/ingredient-service/ingredient";
  private RECIPES_BACKEND_URL: string = "http://localhost:8080/ingredient-service/recipe";

  constructor(
    private http: HttpClient
  ) {
  }

  getAllIngredients(): Observable<Ingredient[]> {
    return this.http
      .get<Ingredient[]>(this.INGREDIENT_BACKEND_URL + '/all')
      .pipe(
        catchError((err: any) => {
            throw new Error(err);
          }
        )
      )
  }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http
      .get<Recipe[]>(this.RECIPES_BACKEND_URL + '/all')
      .pipe(
        catchError((err: any) => {
            throw new Error(err);
          }
        )
      )
  }
}
