import {
  Component,
  OnInit,
  NgModule,

} from '@angular/core';
import { RecipeService } from '../../service'
import { AppState } from '../../app.service'
import { Image } from './image.interface';

@Component({
  selector: 'slider',
  styleUrls: ['./slider.component.scss'],
  templateUrl: './slider.component.html',
  providers: [RecipeService],
})
export class SliderComponent implements OnInit {
  recipes: any[]
  constructor(private recipeService: RecipeService, private appState: AppState) { }

  public ngOnInit() {
    this.appState.recipeForWeek.subscribe(res => {
      this.recipes = res
      this.load()
    });

  }
  load() {
    if (this.recipes.length == 0) {
      this.recipeService.GetRecipeForWeek().subscribe(res => {
        this.appState.recipeForWeek.next(res)
      });
    }

  }
}
