import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertusModule } from './certus/certus.module';
import { HomeComponent } from './certus/home/home.component';
import { LoginComponent } from './certus/login/login.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CertusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
