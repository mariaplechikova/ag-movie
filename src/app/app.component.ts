import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-simple';
  InitCounter = 5522
  style: any = {
    'backgroundColor': 'red',
    'color': 'blue',
    'display': 'block'
  }
  buttonName = "Скрыть"

  ShowBlock() {
    if (this.style.display === 'none') {
      this.style.display='block'
      this.buttonName = 'Скрыть'
    } else {
      this.style.display = 'none'
      this.buttonName = 'Показать'
    }
     
  }

  incCounter (value: number) {
    this.InitCounter = this.InitCounter + value
  }
}
