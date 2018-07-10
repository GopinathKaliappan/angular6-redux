import { Injectable } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './reducers/rootReducers';

@Injectable({
  providedIn: 'root',
})

export class StoreService {
  
  // ngRedux : NgRedux<IAppState>;
  @select() todos; 
  
  constructor() {

  }

  getTodos(key) {
  	return this[key];
  }
}
