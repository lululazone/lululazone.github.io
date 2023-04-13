import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {DockModule} from "primeng/dock";
import {ImageModule} from "primeng/image";
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { ProjetsComponent } from './projets/projets.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProjetsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    DockModule,
    ImageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
