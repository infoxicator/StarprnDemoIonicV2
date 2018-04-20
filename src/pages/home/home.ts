import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PrinterService } from "../../services/printer.service";
import { ReceiptService } from '../../services/receipt.service';
import { AlertService } from '../../services/alert.service';
import { PrintObj, ImageObj, CommandsArray, RasterObj, CutPaperAction } from '@ionic-native/star-prnt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  defaultPrinter:any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private printerService:PrinterService, private camera:Camera, public modalCtrl: ModalController,
    private alertService: AlertService,  private receiptService: ReceiptService) {  }
  
  printerTypePopup() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Select Interface');

    alert.addInput({
      type: 'radio',
      label: 'LAN',
      value: 'LAN',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Bluetooth',
      value: 'Bluetooth'
    });
    alert.addInput({
      type: 'radio',
      label: 'USB',
      value: 'USB'
    });
    alert.addInput({
      type: 'radio',
      label: 'All',
      value: 'All'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: portType => {
        this.navCtrl.push('printer-list', {
          portType: portType
        });    
      }
    });
    alert.present();
  }

  printRawText(){
    if(this.defaultPrinter){
    let loading = this.alertService.createLoading("Communicating...");
    loading.present();

    let printObj:PrintObj = {
      text:"Star Clothing Boutique\n123 Star Road\nCity, State 12345\n\n",
      cutReceipt:true,
      openCashDrawer:false
    }

    this.printerService.printRawText(this.defaultPrinter.portName, this.defaultPrinter.emulation, printObj)
      .then(result => {
      loading.dismiss();
      this.alertService.createAlert("Success!", "Communication Result: ") })
      .catch(error => {
        loading.dismiss();
        this.alertService.createAlert(error) })
      }else{
        this.alertService.createAlert("Please select a printer!");
      }
  }

  selectPaperSize():Promise<any>{
    return new Promise((resolve, reject) => {
      let alert = this.alertCtrl.create();
      alert.setTitle('Select Paper Size');
      alert.addInput({type: 'radio', label: '2" (384dots)', value: '2', checked: true });
      alert.addInput({type: 'radio', label: '3" (576dots)', value: '3' });
      alert.addInput({type: 'radio', label: '4" (832dots)', value: '4' });
      alert.addButton('Cancel');
      alert.addButton({
        text: 'OK',
        handler: paperSize => {
          alert.dismiss().then(() => { resolve(paperSize); });
          return false;
        }
      });
      alert.present();
    });
  }

  printRasterReceipt(){
    if(this.defaultPrinter){
    this.selectPaperSize().then(paperSize => {
      let rasterObj:RasterObj = this.receiptService.rasterReceiptExample(paperSize);

        let loading = this.alertService.createLoading("Communicating...");
        loading.present();  

        this.printerService.printRasterReceipt(this.defaultPrinter.portName, this.defaultPrinter.emulation, rasterObj)
          .then(result => {
            loading.dismiss();
            this.alertService.createAlert("Success!", "Communication Result: ") })
          .catch(error => {
            loading.dismiss();
            this.alertService.createAlert(error) })
      })   
      }else{
        this.alertService.createAlert("Please select a printer!");
      }
  }

  printImage(uri:string){
    if(this.defaultPrinter){
    let loading = this.alertService.createLoading("Communicating...");
    loading.present();

    let imageObj:ImageObj = {
      uri:uri,
      paperWidth:576,      
      cutReceipt:true,
      openCashDrawer:false
    }

    this.printerService.printImage(this.defaultPrinter.portName, this.defaultPrinter.emulation, imageObj)
      .then(result => {
      loading.dismiss();
      this.alertService.createAlert("Success!", "Communication Result: ") })
      .catch(error => {
        loading.dismiss();
        this.alertService.createAlert(error) })
      }else{
        this.alertService.createAlert("Please select a printer!");
      }
  }

  printFromCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((uri) => {
      this.printImage(uri);
    }, (err) => {
      this.alertService.createAlert(err, 'Camera Error: ');
    });
  }

  printFromLibrary(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((uri) => {
      this.printImage(uri);
    }, (err) => {
      this.alertService.createAlert(err, 'Photo Library Error: ');
    });
  }

  print(){
    if(this.defaultPrinter){

      this.selectPaperSize().then(paperSize => {
        let commands:CommandsArray = this.receiptService.getExampleReceipt(paperSize);    

        let loading = this.alertService.createLoading("Communicating...");
        loading.present();   
    
        this.printerService.print(this.defaultPrinter.portName, this.defaultPrinter.emulation, commands)
          .then(result => {
            loading.dismiss();
            this.alertService.createAlert("Success!", "Communication Result: ") })
          .catch(error => {
            loading.dismiss();
            this.alertService.createAlert(error) 
          })
        })
      }else{
      this.alertService.createAlert("Please select a printer!");
    }
  }

  printHorizontalTab(){
    if(this.defaultPrinter){

        //generate Commands for a 3 inches receipt using horizontal tabs
        let commands:CommandsArray = this.receiptService.getExampleReceipt('3', true);    

        let loading = this.alertService.createLoading("Communicating...");
        loading.present();   
    
        this.printerService.print(this.defaultPrinter.portName, this.defaultPrinter.emulation, commands)
          .then(result => {
            loading.dismiss();
            this.alertService.createAlert("Success!", "Communication Result: ") })
          .catch(error => {
            loading.dismiss();
            this.alertService.createAlert(error) 
          })
      }else{
      this.alertService.createAlert("Please select a printer!");
      }
  }

  printQRCode(){
    if(this.defaultPrinter){

      this.selectPaperSize().then(paperSize => {
        //generate Commands receipts using QrCodes
        let commands:CommandsArray = this.receiptService.getExampleReceipt(paperSize, false, true);    

        let loading = this.alertService.createLoading("Communicating...");
        loading.present();   
    
        this.printerService.print(this.defaultPrinter.portName, this.defaultPrinter.emulation, commands)
          .then(result => {
            loading.dismiss();
            this.alertService.createAlert("Success!", "Communication Result: ") })
          .catch(error => {
            loading.dismiss();
            this.alertService.createAlert(error) 
          })
        })
    }else{
      this.alertService.createAlert("Please select a printer!");
    }

  }

  appendBitmap(){
    if(this.defaultPrinter){

          const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
          }

          this.selectPaperSize().then(paperSize => {
            let imageWidth:number = 576;
            if(paperSize == '2') { imageWidth = 384 }
            else if (paperSize == '3') { imageWidth = 576 }
            else if (paperSize == '4') { imageWidth = 832 }

          this.camera.getPicture(options).then((uri) => {
            
            let commands:CommandsArray = [];
            commands.push({appendBitmap:uri, diffusion:true, width:imageWidth, bothScale:true });
            commands.push({appendCutPaper:CutPaperAction.PartialCutWithFeed});       

                let loading = this.alertService.createLoading("Communicating...");
                loading.present();   
            
                this.printerService.print(this.defaultPrinter.portName, this.defaultPrinter.emulation, commands)
                  .then(result => {
                    loading.dismiss();
                    this.alertService.createAlert("Success!", "Communication Result: ") 
                  }).catch(error => {
                    loading.dismiss();
                    this.alertService.createAlert(error) 
                  })
          }).catch(err => {
            this.alertService.createAlert(err);
          });
        });    

    }else{
      this.alertService.createAlert("Please select a printer!");
    }  
  }

  showStarIOExtManagerPage(){
    this.navCtrl.push('ext-manager');    
  }

  openCashDrawer(){
    if(this.defaultPrinter){

    let loading = this.alertService.createLoading("Communicating...");
    loading.present();

    this.printerService.openCashDrawer(this.defaultPrinter.portName, this.defaultPrinter.emulation)
    .then(result => {
      loading.dismiss();
      this.alertService.createAlert("Success!", "Communication Result: ") })
      .catch(error => {
        loading.dismiss();
        this.alertService.createAlert(error) })
    }else{
    this.alertService.createAlert("Please select a printer!");
    }
  }

  showPrinterStatus(){
    if(this.defaultPrinter){
    this.navCtrl.push('page-status', {
      portName: this.defaultPrinter.portName,
      emulation: this.defaultPrinter.emulation
    });
    }else{
      this.alertService.createAlert("Please select a printer!");
    }
  }

  ionViewDidEnter() {
    this.printerService.getDefaultPrinter()
    .then(printer => {
      console.log(printer);
      this.defaultPrinter = printer});
  }

}
