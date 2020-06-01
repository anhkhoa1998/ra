import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../actions/counter.action';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  count$: Observable<{ count: number, name: string }>;

  ngOnInit(): void {
  }

  constructor(private store: Store<any>) {
    this.count$ = store.pipe(select('anhkhoa'));
    this.count$.subscribe(anhkhoa => {
      console.log(anhkhoa.count);
      
    });
  }
 
  increment() {
    this.store.dispatch(increment());
  }
 
  decrement() {
    this.store.dispatch(decrement());
  }
 
  reset() {
    this.store.dispatch(reset());
  }
}
