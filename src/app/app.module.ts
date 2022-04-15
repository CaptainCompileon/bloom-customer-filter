import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerFilterComponent } from './components/customer-filter/customer-filter.component';
import { FilterStepComponent } from './components/filter-step/filter-step.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFilterComponent,
    FilterStepComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
