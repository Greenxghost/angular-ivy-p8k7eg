import { Component } from '@angular/core';
import { pic } from '../assets/exercise';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pic = pic;
}
