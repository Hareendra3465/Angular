import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material'

import { AppComponent } from './app.component';
import { SportstableComponent } from './sportstable/sportstable.component';


@NgModule({
  declarations: [
    AppComponent,
    SportstableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
