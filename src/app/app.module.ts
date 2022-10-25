import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DynamicComponent } from './dynamic.component.ts/dynamic.component';
import { AddDirective } from './add.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  ],
  declarations: [ AppComponent, HelloComponent, DynamicComponent, AddDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
