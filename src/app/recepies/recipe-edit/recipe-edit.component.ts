import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../../services/recipe.service';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private activeRouter: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        this.initForm();
      }
    );
  }

  private initForm(): void {
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDesc = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipeDesc = recipe.description;
      if (recipe.ingredients){
        for (const ing of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name : new FormControl(ing.name, Validators.required),
              amount : new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      description: new FormControl(recipeDesc, Validators.required),
      imageUrl: new FormControl(recipeImgPath, Validators.required),
      ingredients : recipeIngredients
    });
  }

  onSubmit(): void {
    const recipe = new Recipe(
      this.recipeForm.valid['name'],
      this.recipeForm.valid['description'],
      this.recipeForm.valid['imageUrl'],
      this.recipeForm.valid['ingredients']
    );
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, recipe);
    } else {
      this.recipeService.addRecipe(recipe);
    }

    this.onCancel();
  }

  onCancel(): void {
    this.router.navigate(['../'], {relativeTo: this.activeRouter});
  }

  onAddIngredient(): void {
    (this.recipeForm.get('ingredients') as FormArray).push(new FormControl({
      'name' : new FormControl(null, Validators.required),
      'amount' : new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  onDeleteIngredient(idx: number): void {
    (this.recipeForm.get('ingredients') as FormArray).removeAt(idx);
  }
}
