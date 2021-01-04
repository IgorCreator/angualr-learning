import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Exer1Component } from './exer1/exer1.component';
import { Exer2Component } from './exer2/exer2.component';
import { Exer3Module} from './exer3/exer3.module';

@NgModule({
  declarations: [
    AppComponent,
    Exer1Component,
    Exer2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Exer3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
