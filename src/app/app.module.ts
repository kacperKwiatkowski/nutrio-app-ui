import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {IngredientListComponent} from "./component/ingredient-list/ingredient-list.component";
import {RecipeListComponent} from "./component/recipe-list/recipe-list.component";
import {HeaderComponent} from "./layout/header/header.component";
import {ContentComponent} from "./layout/content/content.component";
import {HttpClientModule} from "@angular/common/http";
import { IngredientComponent } from './component/ingredient/ingredient.component';
import {CapitalizeEverySecondLetterPipe} from "./pipe/capitalize-every-second-letter.pipe";
import { CreateIngredientComponent } from './component/create-ingredient/create-ingredient.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    IngredientListComponent,
    RecipeListComponent,
    IngredientComponent,
    CapitalizeEverySecondLetterPipe,
    CreateIngredientComponent,
    CapitalizePipe,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
