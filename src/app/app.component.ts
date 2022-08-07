import { Component } from '@angular/core';
// import { MatCalendar } from '@angular/material/datepicker';
// import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent {
  title = 'testProject';
  selectedValue: string = 'Выберите город';
  foods: any[] = [
    'Одесса',
    'Киев',
    'Днепр',
    'Львов',
    'Херсон',
    'Николаев',
  ]
}