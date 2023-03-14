import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { DisplayQRComponent } from './pages/display-qr/display-qr.component';
import { ScanQRComponent } from './pages/scan-qr/scan-qr.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayQRComponent,
    ScanQRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
