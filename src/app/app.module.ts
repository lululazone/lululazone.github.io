import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiButtonModule} from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
import { MainComponent } from './main/main.component';
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {TuiInputModule, TuiProgressModule, TuiTextAreaModule} from "@taiga-ui/kit";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProjetsComponent,
    ContactComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    DockModule,
    ImageModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    FormsModule,
    TuiInputModule,
    TuiTextAreaModule,
    TuiProgressModule
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
