import { Component } from '@angular/core';
import { faHome, faCalculator, faCalendar, faSmile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  faHome= faHome;
  faCalculator= faCalculator;
  faCalendar = faCalendar;
  faSmile = faSmile;
}
