import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test', 'Description', 'https://ca-times.brightspotcdn.com/dims4/default/9587383/2147483647/strip/true/crop/3000x2000+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2c%2F81%2Ffcf6a0a04032869986b92e136c2c%2Fla-times-recipe-database-cooking-newsletter.jpg'),
    new Recipe('Test', 'Description', 'https://ca-times.brightspotcdn.com/dims4/default/9587383/2147483647/strip/true/crop/3000x2000+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F2c%2F81%2Ffcf6a0a04032869986b92e136c2c%2Fla-times-recipe-database-cooking-newsletter.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
