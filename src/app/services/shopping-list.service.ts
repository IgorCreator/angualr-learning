import {Ingredient} from '../shared/ingredient.module';
import {Subject} from 'rxjs';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15)
  ];

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  setIngredients(value: Ingredient[]): void {
    this.ingredients = value;
  }

  // TODO: Add logic to delete duplications
  addIngredient(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  // TODO: Add logic to delete duplications
  addIngredients(newIngredients: Ingredient[]): void {
    this.ingredients.push(... newIngredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(ingredient: Ingredient): void {
    this.getIngredients().forEach((ing, index) => {
      if (ing.name === ingredient.name) {
        this.ingredients.splice(index, 1);
      }
    });
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
