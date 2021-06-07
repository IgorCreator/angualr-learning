import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Recipe} from './recipe.model';
import {DataStorageService} from '../services/data-storage.service';
import {Observable} from 'rxjs';
import {RecipeService} from '../services/recipe.service';

@Injectable({providedIn: 'root'})
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorage: DataStorageService, private recipes: RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe[]> | Promise<Recipe[]> | Recipe[] {
    const recipes = this.recipes.getRecipes();
    if (recipes.length === 0) {
      return this.dataStorage.getRecipes();
    }
    else {
      return recipes;
    }
  }

}
