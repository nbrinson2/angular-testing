import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlunderComponent } from './blunder/blunder.component';
import { CryptoComponent } from './crypto/crypto.component';

@NgModule({
  declarations: [
    AppComponent,
    BlunderComponent,
    CryptoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
