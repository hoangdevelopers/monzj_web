import {
  Component,
  OnInit,
  NgModule
} from '@angular/core';
import { RecipeService } from '../../service'
import {Menu} from './menu.interface';

@Component({
  selector: 'menu',
  styleUrls: ['./menu.component.scss'],
  templateUrl: './menu.component.html',
  providers: [RecipeService],
})
export class MenuComponent implements OnInit {
  menus: any[]
  constructor(private recipeService: RecipeService) { }

  public ngOnInit() {
    this.menus = this.recipeService.GetMenu()
  }
  
}
