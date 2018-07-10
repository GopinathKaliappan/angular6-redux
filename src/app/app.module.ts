import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { createLogger } from 'redux-logger';

import { IAppState, rootReducer, INITIAL_STATE } from './reducers/rootReducers';
import { StoreService } from './store.service';
import { ServiceForStoreComponent } from './service-for-store/service-for-store.component';
import { ReversePipe } from './reverse.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    ServiceForStoreComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    MatButtonModule,
    MatInputModule,
    AngularFontAwesomeModule,
    MatCardModule,
    MatBadgeModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})

export class AppModule { 

      ngRedux : NgRedux<IAppState>;
      constructor(ngRedux: NgRedux<IAppState>) {

            this.ngRedux = ngRedux;
            ngRedux.configureStore(rootReducer, INITIAL_STATE, [ createLogger() ]);
       }
}
