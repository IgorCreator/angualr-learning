import {Component, OnInit, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() onAddIngredientEvent = new EventEmitter<Ingredient>();
  @Output() onDeleteIngredientEvent = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.onAddIngredientEvent.emit(newIngredient);
  }


  onDeleteIng() {
    const oldIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
    this.onDeleteIngredientEvent.emit(oldIngredient);
  }
}
