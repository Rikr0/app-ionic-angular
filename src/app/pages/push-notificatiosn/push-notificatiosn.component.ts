import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
@Component({
  selector: 'app-push-notificatiosn',
  templateUrl: './push-notificatiosn.component.html'
})
export class PushNotificatiosnComponent implements OnInit{
  tokenString = '';
  permisos = '';
  
  constructor(private notificationService: NotificationService){}
  async ngOnInit() {
    await this.notificationService.requesPermission();
    this.notificationService.addListeners();
    this.tokenString = this.notificationService.tokenString;
    this.permisos = this.notificationService.permisos;
  }
  
}
