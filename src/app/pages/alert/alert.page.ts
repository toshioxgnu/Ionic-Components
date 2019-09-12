import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  title: string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'changue title',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'title',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'title',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            console.log('title = placeholder', data);
            this.title = data.title;
          }
        },

      ]
      });
    await alert.present();
    }



  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Boton cancelar');
          }
        },
        {
            text: 'oK',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Boton OK');
            }
        }
      ]
    });
    await alert.present();
  }


}
