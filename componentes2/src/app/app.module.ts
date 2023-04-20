import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { PadreComponent } from './components/padre/padre.component';
import { MiBotonComponent } from './components/mi-boton/mi-boton.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    PadreComponent,
    MiBotonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
