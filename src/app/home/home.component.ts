import { Component, OnInit, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { select } from '@angular-redux/store';
import { IAppState } from '../reducers/rootReducers';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {


 @select() todos;  // Selecting Obervables  


 constructor (NgRedux: NgRedux<IAppState>) {
  
    this.ngRedux = NgRedux;
    this.addTodo = this.addTodo.bind(this);

  }


  ngOnInit() { }


  addTodo() { // Add todo through Redux Actions 

    this.ngRedux.dispatch({  
        type: 'ADD_TODO', 
        todo: {
          id:  Number(this.ngRedux.getState().todos.length) + 1, 
          name: this.name
        }
     });
  
  }

}
