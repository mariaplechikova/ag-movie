import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './movie/counter.component.html'
  
})
export class CounterComponent {
    @Input() value = {}
  
}
