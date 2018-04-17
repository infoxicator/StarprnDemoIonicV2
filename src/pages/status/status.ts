import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrinterService } from '../../services/printer.service';
import { AlertService } from '../../services/alert.service';

@IonicPage({
  name:'page-status',
  segment:'status'
})
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  printerStatus: any;
  portName: string;
  emulation: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private printerService: PrinterService, private alertService: AlertService) {
     this.portName = this.navParams.get('portName');
     this.emulation = this.navParams.get('emulation');
  }

  checkStatus(){
    if(this.portName != null && this.emulation != null){
      let loading = this.alertService.createLoading("Communicating...");
      loading.present();
      this.printerService.checkStatus(this.portName, this.emulation)
      .then(PrinterStatus => {
        loading.dismiss();
        this.printerStatus = PrinterStatus;
        console.log(PrinterStatus);
      })
      .catch(error => {
        loading.dismiss();
        this.alertService.createAlert(error);
      });
    }else{
      this.alertService.createAlert("No printer selected");
    }
  }

  ionViewDidEnter() {
    this.checkStatus();
  }

}
