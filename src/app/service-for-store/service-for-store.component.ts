import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../reducers/rootReducers';
import { StoreService } from '../store.service';


@Component({
  selector: 'app-service-for-store',
  templateUrl: './service-for-store.component.html',
  styleUrls: ['./service-for-store.component.css'],
  providers: [ StoreService ]
})

export class ServiceForStoreComponent implements OnInit {

  todos = []
  constructor (NgRedux: NgRedux<IAppState>, private store: StoreService) {

    this.store = store;
    this.todos = [];
  
  }

  ngOnInit() {

    this.todos = this.store.getTodos('todos');

  }
}
