import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipesComponent} from './recepies/recipes.component';
import {RecipeListComponent} from './recepies/recipe-list/recipe-list.component';
import {RecipeDetailComponent} from './recepies/recipe-detail/recipe-detail.component';
import {RecipeItemComponent} from './recepies/recipe-list/recipe-item/recipe-item.component';
import {ShoppingEditComponent} from './shopping-list/shopping-edit/shopping-edit.component';
import {DropdownDirective} from './shared/dropdown.directive';

import {AppRoutingModule} from './app-routing.module';
import {RecipeStartComponent} from './recepies/recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recepies/recipe-edit/recipe-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
