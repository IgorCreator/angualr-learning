import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from '../recepies/recipe.model';
import {Ingredient} from '../shared/ingredient.module';
import {ShoppingListService} from './shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelector = new EventEmitter<Recipe>();

  constructor(private slService: ShoppingListService) {
  }


  private recipes: Recipe[] = [
    new Recipe('Stroganov', 'Delish', 'https://www.recipetineats.com/wp-content/uploads/2018/01/Beef-Stroganoff_2-1-1.jpg', [new Ingredient('Meat', 1), new Ingredient('Mushrooms', 5)]),
    new Recipe('French Toast', 'Tasty', 'https://recipetineats.com/wp-content/uploads/2014/06/French-Toast_3.jpg', [new Ingredient('White Bread', 4), new Ingredient('Cinammon', 1)])
  ];

  addRecipe(newRecipe: Recipe): void {
    this.recipes.push(newRecipe);
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(id: number): Recipe {
    return this.recipes.slice()[id]; // Give copy of recipes and after get id from copy
  }
}
