import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';
// import { Plugin } from '@ionic-native/core';
// import { FileSharer } from '@byteowls/capacitor-filesharer';

@Component({
  selector: 'app-send-image',
  templateUrl: './send-image.component.html'
})
export class SendImageComponent {
  selectedImage: any;

  constructor(){}
  checkPlatformForWeb(){
    if(Capacitor.getPlatform() == 'web') return true;
    return false;
  }
  async getPicture(){
    let resultType = this.checkPlatformForWeb() ? CameraResultType.DataUrl : CameraResultType.Uri;
    const image = await Camera.getPhoto({
      quality: 90,
      source: CameraSource.Prompt,
      width: 600,
      resultType: resultType
    });
    console.log('image', image);
    this.selectedImage = image;
    if(this.checkPlatformForWeb()) this.selectedImage.webPath = image.dataUrl;
  }
  async share(){
    await Share.share({
      title: 'Compartir imágen',
      text: '¡Mira esta imágen!',
      url: this.selectedImage.path,
      dialogTitle: 'Comparte a redes sociales',
    });
  }

  /*
  async shareImage(){
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
    await Share.share({
      title: '¡Mira esta imagen!',
      url: image.path
    })
  }
  */
  // async onButton1Click() {
  //   alert('hola')
  //   console.log('Button 1 clicked');
  //   const input = document.getElementById('file-input') as HTMLInputElement;
  //   input.click();
  // }

  // async onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   if (!file) {
  //     return;
  //   }
  //   // https://wa.me/2471381203/
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     const imageBase64 = reader.result as string;
  //     const whatsappLink = `https://wa.me/2471381203/?text=${encodeURIComponent(imageBase64)}`;
  //     window.location.href = whatsappLink;
  //   };
  //   reader.onerror = (error) => {
  //     console.log('Error: ', error);
  //   };
  // }
}
