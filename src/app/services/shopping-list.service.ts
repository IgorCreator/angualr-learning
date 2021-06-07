import {Ingredient} from '../shared/ingredient.module';
import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ShoppingListService {
  startedEditing = new Subject<number>();
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15)
  ];

  getIngredient(idx: number): Ingredient {
    return this.ingredients.slice()[idx];
  }

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  setIngredients(value: Ingredient[]): void {
    this.ingredients = value;
  }

  addIngredient(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(newIngredients: Ingredient[]): void {
    this.ingredients.push(... newIngredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(idx: number, newIng: Ingredient): void{
    this.ingredients[idx] = newIng;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredient(idx: number): void {
    this.ingredients.splice(idx, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  removeIngredients(ingredient: Ingredient): void {
    this.getIngredients().forEach((ing, index) => {
      if (ing.name === ingredient.name) {
        this.ingredients.splice(index, 1);
      }
    });
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
