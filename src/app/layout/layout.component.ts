import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../app.service';

@Component({
  selector: 'layout',
  styleUrls: ['./layout.component.scss'],
  templateUrl: 'layout.component.html'
})
export class LayoutComponent implements OnInit {
  showLoader: boolean
  public localState: any;
  public logo = 'assets/img/logo.png';
  public url = 'assets/img/logo.png';
  constructor(
    private appState: AppState,
    public route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        this.localState = data.yourData;
      });
    this.appState.loader.subscribe((show) =>{
      this.showLoader = show;
    })
    console.log('hello `About` component');
  }

}
