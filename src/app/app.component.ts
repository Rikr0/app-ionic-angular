import { Component } from '@angular/core';
// import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'residentia-app';
  /*
  scannedResult: any;
  async checkPermission() {
    try {
      // check or request permission
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        // the user granted permission
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
      return false;
    }
  }
  */
} 
