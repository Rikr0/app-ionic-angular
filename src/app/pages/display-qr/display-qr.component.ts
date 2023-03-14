import { Component } from '@angular/core';


@Component({
  selector: 'app-display-qr',
  templateUrl: './display-qr.component.html',
  styleUrls: ['./display-qr.component.scss']
})
export class DisplayQRComponent {
  public qrCode: string = '';
  constructor(){
    this.alerta();
  }
  alerta(){
  }
  genQrCode() {
    const code = Math.floor(1000000000 + Math.random() * 9000000000).toString(); // Generar código de 10 dígitos
    this.qrCode = code;
    
  }
}

