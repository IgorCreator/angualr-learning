import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../../services/recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  subscription: Subscription;

  constructor(private recipesService: RecipeService,
              private activatedRoute: ActivatedRoute,
              private route: Router) { }

  ngOnInit(): void {
    this.subscription = this.recipesService.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipe(): void {
    this.route.navigate(['new'], {relativeTo: this.activatedRoute});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
