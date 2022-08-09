import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
// import { MatCalendar } from '@angular/material/datepicker';
// import { DateAdapter, MAT_DATE_FORMATS, MatDateFormats } from '@angular/material/core';
// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']

})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'testProject';
  selectedValue: string = 'Выберите город';
  cities: any[] = [
    'Одесса',
    'Киев',
    'Днепр',
    'Львов',
    'Херсон',
    'Николаев',
  ];
  bannerName = '';
  dateStart: any;
  dateEnd: any;
  timeStart: any;
  timeEnd: any;

  @ViewChild('picker1') picker1: any;
  @ViewChild('picker2') picker2: any;

  ngOnInit() {
    console.log(this.picker1);
  }
  ngAfterViewInit() {
    console.log(this.picker1);
    
  }

  // onChenge(event: any) {
  //   console.log({event});
  // }
  onPicker1(event: any) {

    this.dateStart = this.picker1.datepickerInput.getStartValue();
  }

  onPicker2(event: any) {
    const pic2Date = this.picker2.datepickerInput.getStartValue();
    this.dateEnd = pic2Date;
    // if(this.dateStart.getTime() < this.dateEnd.getTime() ){
    //   console.log('ALL OK')  
    // } else {
    //   console.error('dateStart have to be less then dateEnd!!!')
    // }
    // console.log({pic2Date});
  }
  onGoForward(){
    console.log({
      bannerName: this.bannerName,
      dateStart: this.dateStart,
      dateEnd: this.dateEnd,
      timeStart: this.timeStart,
      timeEnd: this.timeEnd
    })
  }

}