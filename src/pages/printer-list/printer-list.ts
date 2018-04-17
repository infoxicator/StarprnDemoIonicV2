import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PrinterService } from "../../services/printer.service";
import { AlertService } from '../../services/alert.service';
import { Printer, Printers } from '@ionic-native/star-prnt';

@IonicPage({
  name:'printer-list',
  segment:'printer-list'
})
@Component({
  selector: 'page-printer-list',
  templateUrl: 'printer-list.html',
})
export class PrinterListPage {
portType: string;
printerList: Printers = [];
selectedPrinter: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private printerService:PrinterService, private alertService: AlertService) {
    
    this.portType = navParams.get('portType');

    if(this.portType != null){
      this.portDiscovery(this.portType);
    }else{
      this.portDiscovery('All');
    }  
    
  }

  portDiscovery(portType: string){
    let loading = this.alertService.createLoading('Communicating');
    loading.present();     
    this.printerService.portDiscovery(portType)
    .then(Printers =>{
      loading.dismiss();
      this.printerList = [];
      this.printerList = Printers;
      console.log(this.printerList);
    })
    .catch(error =>{
      loading.dismiss();
      alert('Error finding printers ' + error);
    });
  }

    /**
     * Get the emulation type for a particular printer model. 
     */
  selected(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Confirm. What is your printer?');

    alert.addInput({ type: 'radio', label: 'mPOP', value: 'StarPRNT' });
    alert.addInput({ type: 'radio', label: 'FVP10', value: 'StarLine' });
    alert.addInput({ type: 'radio', label: 'TSP100', value: 'StarGraphic' });
    alert.addInput({ type: 'radio', label: 'TSP650II', value: 'StarLine' });
    alert.addInput({ type: 'radio', label: 'TSP650II', value: 'StarLine' });
    alert.addInput({ type: 'radio', label: 'TSP700II', value: 'StarLine' });
    alert.addInput({ type: 'radio', label: 'TSP800II', value: 'StarLine' });
    alert.addInput({ type: 'radio', label: 'SP700', value: 'StarDotImpact' });
    alert.addInput({ type: 'radio', label: 'SM-S210i', value: 'EscPosMobile' });
    alert.addInput({ type: 'radio', label: 'SM-S220i', value: 'EscPosMobile' });
    alert.addInput({ type: 'radio', label: 'SM-S230i', value: 'EscPosMobile' });
    alert.addInput({ type: 'radio', label: 'SM-T300i/T300', value: 'EscPosMobile' });
    alert.addInput({ type: 'radio', label: 'SM-T400i', value: 'EscPosMobile' });
    alert.addInput({ type: 'radio', label: 'SM-L200', value: 'StarPRNT' });
    alert.addInput({ type: 'radio', label: 'SM-L300', value: 'StarPRNT' });
    alert.addInput({ type: 'radio', label: 'BSC10', value: 'EscPos' });
    alert.addInput({ type: 'radio', label: 'SM-S210i StarPRNT', value: 'StarPRNT' });
    alert.addInput({ type: 'radio', label: 'SM-S220i StarPRNT', value: 'StarPRNT' });
    alert.addInput({ type: 'radio', label: 'SM-S230i StarPRNT', value: 'StarPRNT' });
    alert.addInput({ type: 'radio', label: 'SM-T300i/T300 StarPRNT', value: 'StarPRNT' });
    alert.addInput({ type: 'radio', label: 'SM-T400i StarPRNT', value: 'StarPRNT' });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: emulation => {
        this.savePrinter(emulation);        
      }
    });
    alert.present();
  }

  savePrinter(emulation){
    if(this.selectedPrinter.printer){
    this.printerService.saveDefaultPrinter(this.selectedPrinter.printer, emulation);
    this.navCtrl.pop();
    }else{
      alert('Please select the printer ');
    }    
  }

}
