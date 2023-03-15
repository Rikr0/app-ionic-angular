import { Component } from '@angular/core';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-scan-qr',
  templateUrl: './scan-qr.component.html'
})
export class ScanQRComponent {
  // export class ScanQRComponent implements OnDestroy {
  data: any;
  photos: string[] = [];
  scannedResult: any;
  content_visibility = '';
  constructor() {}
  // ngOnDestroy(): void {
  //     this.stopScan();
  // }
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
  async startScan() {
    try {
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility = '';
      if(result?.hasContent) {
        this.scannedResult = result.content;
        console.log(this.scannedResult);
      }
    } catch(e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

  





  async addNewPhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    if (photo.webPath) {
      this.photos.unshift(photo.webPath);
    }
  }
  // async scan() {
  //   console.log('Button 3 clicked');
  //   try {
  //     const result = await BarcodeScanner.scan();
  //     alert(`El código QR escaneado es: ${result.text}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // scan() {
  //   this.data = null;
  //   this.barcodeScanner.scan().then(barcodeData => {
  //     console.log('Barcode data', barcodeData);
  //     this.data = barcodeData;
  //   }).catch(err => {
  //     console.log('Error', err);
  //   });
  // }
}
