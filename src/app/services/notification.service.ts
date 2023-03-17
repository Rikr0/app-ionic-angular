import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  tokenString = '';
  permisos = '';
  constructor(public plataform: Platform,
    public router: Router) { }
  
  requesPermission(){
    console.log('Initializing HomePage');

    // Request permission to use push notifications
    // iOS will prompt user and return if they granted permission or not
    // Android will just grant without prompting
    if(this.plataform.is('capacitor')){
      PushNotifications.requestPermissions().then(result => {
        if (result.receive === 'granted') {
          console.log('permisos concedidos');
          this.permisos = 'true---' + result.receive;
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register();
        } else {
          // Show some error
          this.permisos = 'false';
        }
      });
    }else{
      console.log('no es movil')
    }
  }
  addListeners(){
    // Registro de token del dispositivo
    PushNotifications.addListener('registration',
      (token: Token) => {
        console.log('Push registration success, token: ' + token.value);
        this.tokenString = token.value;
      }
    );

    // Error en el registro
    PushNotifications.addListener('registrationError',
      (error: any) => {
        console.log('Error on registration: ' + JSON.stringify(error));
      }
    );

    // recibir notificación push
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );

    // Metodo caundo se de clic en una notificaíon push
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        console.log('Push action performed: ' + JSON.stringify(notification));
        this.router.navigate(['/push-notificatiosn']);
      }
    );
  }
}

