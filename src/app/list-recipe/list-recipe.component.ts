import {
  Component,
  OnInit,
} from '@angular/core';

import { AppState } from '../app.service';
import { LayoutComponent } from '../layout';
import { RecipeService } from '../service'

@Component({
  selector: 'home',
  providers: [RecipeService],
  styleUrls: ['./list-recipe.component.scss'],
  templateUrl: './list-recipe.component.html',
  
})
export class ListRecipeComponent implements OnInit {
  menus:any[]
  constructor( private recipeService: RecipeService ) { }

  public ngOnInit() {
    this.menus = this.recipeService.GetMenu()
  }
}
