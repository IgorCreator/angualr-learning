import {Component} from '@angular/core';
import {DataStorageService} from '../services/data-storage.service';
import {RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorage: DataStorageService, private recipeService: RecipeService) {
  }

  onSaveData(): void {
    this.dataStorage.storeRecipes();
  }

  onFetchData(): void {
    this.dataStorage.getRecipes().subscribe(recipes => {
      console.log(recipes);
    });
  }
}
