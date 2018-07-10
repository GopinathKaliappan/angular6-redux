import { Component, OnInit, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { select } from '@angular-redux/store';
import { StoreService } from '../store.service';
import { IAppState } from '../reducers/rootReducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StoreService]
})


export class HomeComponent  {

 ngRedux : NgRedux<IAppState>;
 @select() todos;  // Selecting Obervables  
 
  constructor (NgRedux: NgRedux<IAppState>) {
    this.ngRedux = NgRedux;
 }
 toggleTask(value , index, key) {
    this.ngRedux.dispatch({
      type: 'TOGGLE_TODO',
      payload: {
        index: index,
        [key] : !value  
      }
    })
 }
}
