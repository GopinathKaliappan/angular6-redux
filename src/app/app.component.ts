import { Component } from '@angular/core';
import { select } from '@angular-redux/store';
import { NgRedux } from '@angular-redux/store';
import { StoreService } from './store.service';
import { IAppState } from './reducers/rootReducers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

 @select() todos;  // Selecting Obervables  
 ngRedux : NgRedux<IAppState>;
 task = ''; 

  constructor (NgRedux: NgRedux<IAppState>) {
  
    this.ngRedux = NgRedux;
    this.addTodo = this.addTodo.bind(this);
   
  }
  addTodo() { // Add todo through Redux Actions 

    this.ngRedux.dispatch({  
        type: 'ADD_TODO', 
        todo: {
          id:  Number(this.ngRedux.getState().todos.length) + 1, 
          name: this.task, 
          isCompleted: false
        }
     });
  
  }
}
