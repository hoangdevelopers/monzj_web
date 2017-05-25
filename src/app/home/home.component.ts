import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { LayoutComponent } from '../layout';

@Component({
  selector: 'home',
  providers: [
  ],
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  /**
   * Set our default values
   */
  public localState = { value: '' };
  /**
   * TypeScript public modifiers
   */
  constructor(
    public appState: AppState,
  ) {}

  public ngOnInit() {
    console.log('hello `Home` component');
    /**
     * this.title.getData().subscribe(data => this.data = data);
     */
  }

}
