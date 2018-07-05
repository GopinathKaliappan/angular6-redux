import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { select } from '@angular-redux/store';
import { IAppState } from '../reducers/rootReducers';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {
  
  @select() todos; // Selecting Observables

  constructor (NgRedux: NgRedux<IAppState>) {

  }

}
