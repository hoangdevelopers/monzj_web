import {
  Component,
  OnInit,
  NgModule
} from '@angular/core';
import { RecipeService } from '../../service'
import {Image} from './image.interface';

@Component({
  selector: 'slider',
  styleUrls: ['./slider.component.scss'],
  templateUrl: './slider.component.html',
  providers: [RecipeService],
})
export class SliderComponent implements OnInit {
  recipes: any[]
  total_image = 7
  constructor(private recipeService: RecipeService) { }

  public ngOnInit() {
    
    this.recipeService.GetRecipeForWeek().subscribe((response:any)=>{
      var IMAGES: Image[] = response
      this.recipes = IMAGES
    })
  }
  slider_postion(position){
    switch (position){
      case "NEXT":
        break
      case "PREV":
        break
      case 2:
        break
      case 3:
        break
      case 5:
        break
      case 6:
        break
      case 7:
        break
      case "CN":
        break
      
    }
  }
  
}
