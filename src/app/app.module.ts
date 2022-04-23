import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './pages/list/list.component';
import { RoomComponent } from './pages/room/room.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ListComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
