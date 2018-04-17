import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PrinterService } from "../../services/printer.service";
import { AlertService } from '../../services/alert.service';
import { PrintObj, RasterObj, ImageObj } from '@ionic-native/star-prnt';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  defaultPrinter:any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private printerService:PrinterService, private camera:Camera, public modalCtrl: ModalController,
    private alertService: AlertService) { }
  
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
  }

  selectRasterReceipt(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Select Paper Size');

    alert.addInput({type: 'radio', label: '2" (384dots)', value: '2', checked: true });
    alert.addInput({type: 'radio', label: '3" (576dots)', value: '3' });
    alert.addInput({type: 'radio', label: '4" (832dots)', value: '4' });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: paperSize => {
        let rasterObj = this.printerService.rasterReceiptExample(paperSize);
        this.printRasterReceipt(rasterObj);
      }
    });
    alert.present();

  }

  printRasterReceipt(rasterObj){

    let loading = this.alertService.createLoading("Communicating...");
    loading.present();  

    this.printerService.printRasterReceipt(this.defaultPrinter.portName, this.defaultPrinter.emulation, rasterObj)
      .then(result => {
      loading.dismiss();
      this.alertService.createAlert("Success!", "Communication Result: ") })
      .catch(error => {
        loading.dismiss();
        this.alertService.createAlert(error) })
  }

  printImage(uri:string){

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
      this.alertService.createAlert(err, 'Library Error: ');
    });
  }

  showPrinterStatus(){
    this.navCtrl.push('page-status', {
      portName: this.defaultPrinter.portName,
      emulation: this.defaultPrinter.emulation
    });
  }

  ionViewDidEnter() {
    this.printerService.getDefaultPrinter()
    .then(printer => {
      console.log(printer);
      this.defaultPrinter = printer});
  }

}
