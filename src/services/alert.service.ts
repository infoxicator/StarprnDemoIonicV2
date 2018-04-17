import { Injectable } from '@angular/core';
import { LoadingController, AlertController } from 'ionic-angular';

@Injectable()
export class AlertService {

  constructor(private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

  
  createAlert(error:string, message?:string){
      console.log('create alert');
      let subTitle = message?message:"Something went wrong...";
        const alert = this.alertCtrl.create({
        subTitle: subTitle +'<br /><p class=\'error-details\'>' + error + '</p>',
        buttons: ['Ok']
        });    
        return alert.present();
    }

    createLoading(loadingText: string){
        return this.loadingCtrl.create({
            content: loadingText
          });
    }
    
}