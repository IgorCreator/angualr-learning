import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.module';
import {ShoppingListService} from '../services/shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private idChangeSub : Subscription;

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingList.getIngredients();
    this.idChangeSub = this.shoppingList.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {this.ingredients = ingredients});
  }

  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe();
  }

  onEditItem(i: number): void {
    this.shoppingList.startedEditing.next(i);
  }
}
