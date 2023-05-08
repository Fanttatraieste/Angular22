import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Ciorba de fasole', 'Foarte buna', 'https://upload.wikimedia.org/wikipedia/commons/3/35/Fasole_cu_ciolan.jpg') 
  ];    //ca un fel de struct in c++
}
