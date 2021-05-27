import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.module';
import {ShoppingListService} from '../../services/shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form', {static: false}) slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIdx: number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editItemIdx = index;
      this.editedItem = this.shoppingListService.getIngredient(index);
      this.slForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      });
    });
  }

  onSubmit(form: NgForm): void {
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIdx, newIng);
    } else {
      this.shoppingListService.addIngredient(newIng);
    }
    this.editMode = false;
    form.reset();
  }

  onDeleteIng(): void {
    this.onClearAction();
    this.shoppingListService.removeIngredient(this.editItemIdx);
  }

  onClearAction(): void {
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
