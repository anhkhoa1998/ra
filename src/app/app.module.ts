import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './reducer/counter.reducer';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment'; // Angular CLI environment
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ anhkhoa: counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, 
      logOnly: !environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
