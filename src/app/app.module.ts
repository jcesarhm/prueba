import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// * Componentes */

import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { EventComponent } from './components/event/event.component';
import { SelectorComponent } from './components/selector/selector.component';
import { TwowaydatabidingComponent } from './components/twowaydatabiding/twowaydatabiding.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    EventComponent,
    SelectorComponent,
    TwowaydatabidingComponent,
    GaleriaComponent,
    UserListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
