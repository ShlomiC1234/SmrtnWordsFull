import { Component } from '@angular/core';
import {NgPipesModule} from 'ngx-pipes';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  name = 'Angular';
  term: string;
  filterFunction = function(value) {
    return value.endsWith(this.term);
  };
}