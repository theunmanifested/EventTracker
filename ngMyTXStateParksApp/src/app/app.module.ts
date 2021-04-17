import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkVisitService } from './services/park-visit.service';
import { ParkVisitListComponent } from './components/park-visit-list/park-visit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ParkVisitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ParkVisitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
