import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PrinterService } from "../../services/printer.service";
import { PrinterListPage } from "../printer-list/printer-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  defaultPrinter:any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private printerService:PrinterService, private camera:Camera, public modalCtrl: ModalController) { }
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
    console.log('raw text');

  }
  printRasterReceipt(){
    console.log('raster receipt');
  }

  printFromCamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
    }, (err) => {
     alert('Camera Error: ' + err);
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
    
    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
    }, (err) => {
     alert('Camera Error: ' + err);
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
