import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'tp1';
  subInterval: any;
  ngOnInit(): void {

    this.subInterval = setInterval(() => { console.log('App log')}, 1000 );

  }
  ngOnDestroy(): void {

    clearInterval(this.subInterval);

  }

  getMin(a: number, b: number): number {
    if (a < b) {
      return a
    }
    return b
  }
}
