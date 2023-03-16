import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { DisplayQRComponent } from './pages/display-qr/display-qr.component';
import { ScanQRComponent } from './pages/scan-qr/scan-qr.component';
import { HomeComponent } from './pages/home/home.component';
import { QRCodeModule } from 'angularx-qrcode';
import { SendImageComponent } from './pages/send-image/send-image.component';

import { AngularFireModule } from '@angular/fire/compat';
import { firebaseConfig } from 'src/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    DisplayQRComponent,
    ScanQRComponent,
    HomeComponent,
    SendImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    QRCodeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    // BarcodeScanner,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
