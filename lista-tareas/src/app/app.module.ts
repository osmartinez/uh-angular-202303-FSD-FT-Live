import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTareasComponent } from './components/lista-tareas/lista-tareas.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { InputTareaComponent } from './components/input-tarea/input-tarea.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,
    TareaComponent,
    InputTareaComponent
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
