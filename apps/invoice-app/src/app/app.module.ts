import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import {SharedUiModule} from '@customer-portal/shared-ui';

@NgModule({
  declarations: [AppComponent, DataTableComponent],
  imports: [BrowserModule, SharedUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
