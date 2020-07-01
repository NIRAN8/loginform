import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppBoostrapModule } from './app-bootstrap/app-bootstrap.module';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppBoostrapModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
