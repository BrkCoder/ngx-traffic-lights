import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { TrafficLightsComponent } from './featured/traffic-lights/traffic-lights.component';
import { reducers, metaReducers } from './store';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightsComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
