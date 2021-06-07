import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recepies/recipe.model';
import {RecipeService} from './recipe.service';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {
  error = new Subject<string>();
  dbUrl = 'https://ng-recipe-book-ea8f4-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {
  }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(this.dbUrl, recipes)
      .subscribe(res => {
      console.log(res);
    });
  }

  getRecipes() {
    return this.http.get<Recipe[]>(this.dbUrl)
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }),
        tap( recipes => {
            this.recipeService.setRecipes(recipes);
          })
      );
  }
}
