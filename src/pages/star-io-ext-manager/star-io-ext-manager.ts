import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { PrinterService } from '../../services/printer.service';
import { ReceiptService } from '../../services/receipt.service';
import { AlertService } from '../../services/alert.service';
import { PrintObj, ImageObj, RasterObj, CommandsArray, CutPaperAction } from '@ionic-native/star-prnt';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage({
  name:'ext-manager',
  segment:'ext-manager'
})
@Component({
  selector: 'page-star-io-ext-manager',
  templateUrl: 'star-io-ext-manager.html',
})
export class StarIoExtManagerPage {

  defaultPrinter:any;
  printerStatusSuscription: any;
  status = '';
  paperStatus = '';
  coverStatus = '';
  drawerStatus = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private printerService:PrinterService, private alertService: AlertService, 
    private zone: NgZone, private platform: Platform, public alertCtrl: AlertController, private camera:Camera, private receiptService: ReceiptService) { 

    this.printerStatusSuscription = this.printerService.getStatus()
      .subscribe(printerStatus =>{
        this.zone.run(() => {
          this.updateStatus(printerStatus.dataType);     
         });
      });

      this.platform.pause.subscribe(() => {
        console.log('[INFO] App paused, closing the connection');
        this.disconnect();
       });

      this.platform.resume.subscribe(() => {
        console.log('[INFO] App resumed, re-connecting to the printer');
        this.connect();          
      });
  }

  updateStatus(printerStatus: string){
    switch (printerStatus) {
      case 'printerOnline':
      this.status = 'Online'
      break;

      case 'printerOffline':
      this.status = 'Offline'
      break;

      case 'printerImpossible':
      this.status = 'Impossible'
      break;

      case 'printerPaperEmpty':
      this.paperStatus = 'Empty'
      break;

      case 'printerPaperNearEmpty':
      this.paperStatus = 'Near Empty'
      break;

      case 'printerPaperReady':
      this.paperStatus = 'Ready'
      break;

      case 'printerCoverOpen':
      this.coverStatus = 'Open'
      break;

      case 'printerCoverClose':
      this.coverStatus = 'Closed'
      break;

      case 'cashDrawerOpen':
      this.drawerStatus = 'Open'
      break;

      case 'cashDrawerClose':
      this.drawerStatus = 'Closed'
      break;

      default:
      break;
      }
  }

  connect(){
    console.log('Connect');
    let loading = this.alertService.createLoading("Communicating...");
    loading.present();
    this.printerService.connect(this.defaultPrinter.portName, this.defaultPrinter.emulation)
    .subscribe(result =>{
      loading.dismiss();
      console.log(result);
    }, error => {
      loading.dismiss();
      this.alertService.createAlert(error, "Communication Error: ");
    })
  }

  disconnect(){
    console.log('Disconnect');
    let loading = this.alertService.createLoading("Communicating...");
    loading.present();
    this.printerService.disconnect()
     .then(result => {
       loading.dismiss();
       if(this.printerStatusSuscription){ this.printerStatusSuscription.unsuscribe; }       
       console.log(result);
    })
     .catch(error => {
       loading.dismiss();
       if(this.printerStatusSuscription){ this.printerStatusSuscription.unsuscribe; }
       this.alertService.createAlert(error, "Communication Error: ");
    });
  }

  printRawText(){
    let loading = this.alertService.createLoading("Communicating...");
    loading.present();

    let printObj:PrintObj = {
      text:"Star Clothing Boutique\n123 Star Road\nCity, State 12345\n\n",
      cutReceipt:true,
      openCashDrawer:false
    }
    /*Send portName null here to use the connected printer through StarIOExtManager instead of creating a new SMPort instance*/ 
    this.printerService.printRawText(null, this.defaultPrinter.emulation, printObj)
      .then(result => {
      loading.dismiss();
      this.alertService.createAlert("Success!", "Communication Result: ") })
      .catch(error => {
        loading.dismiss();
        this.alertService.createAlert(error) })
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
      this.selectPaperSize().then(paperSize => {
        let rasterObj:RasterObj = this.receiptService.rasterReceiptExample(paperSize);
  
          let loading = this.alertService.createLoading("Communicating...");
          loading.present();

          /*Send portName null here to use the connected printer through StarIOExtManager instead of creating a new SMPort instance*/  
          this.printerService.printRasterReceipt(null, this.defaultPrinter.emulation, rasterObj)
            .then(result => {
              loading.dismiss();
              this.alertService.createAlert("Success!", "Communication Result: ") })
            .catch(error => {
              loading.dismiss();
              this.alertService.createAlert(error) })
        })   
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

    this.printerService.printImage(null, this.defaultPrinter.emulation, imageObj)
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

      this.selectPaperSize().then(paperSize => {
        let commands:CommandsArray = this.receiptService.getExampleReceipt(paperSize);    

        let loading = this.alertService.createLoading("Communicating...");
        loading.present();   
    
        /*Send portName null here to use the connected printer through StarIOExtManager instead of creating a new SMPort instance*/ 
        this.printerService.print(null, this.defaultPrinter.emulation, commands)
          .then(result => {
            loading.dismiss();
            this.alertService.createAlert("Success!", "Communication Result: ") })
          .catch(error => {
            loading.dismiss();
            this.alertService.createAlert(error) 
          })
        })
  }

  printHorizontalTab(){
    
        //generate Commands for a 3 inches receipt using horizontal tabs
        let commands:CommandsArray = this.receiptService.getExampleReceipt('3', true);    

        let loading = this.alertService.createLoading("Communicating...");
        loading.present();   
    
        /*Send portName null here to use the connected printer through StarIOExtManager instead of creating a new SMPort instance*/ 
        this.printerService.print(null, this.defaultPrinter.emulation, commands)
          .then(result => {
            loading.dismiss();
            this.alertService.createAlert("Success!", "Communication Result: ") })
          .catch(error => {
            loading.dismiss();
            this.alertService.createAlert(error) 
          })
  }

  printQRCode(){
   
    this.selectPaperSize().then(paperSize => {
        //generate Commands receipts using QrCodes
        let commands:CommandsArray = this.receiptService.getExampleReceipt(paperSize, false, true);    

        let loading = this.alertService.createLoading("Communicating...");
        loading.present();

        /*Send portName null here to use the connected printer through StarIOExtManager instead of creating a new SMPort instance*/ 
        this.printerService.print(null, this.defaultPrinter.emulation, commands)
          .then(result => {
            loading.dismiss();
            this.alertService.createAlert("Success!", "Communication Result: ") })
          .catch(error => {
            loading.dismiss();
            this.alertService.createAlert(error) 
          })
        })
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
                   
              /*Send portName null here to use the connected printer through StarIOExtManager instead of creating a new SMPort instance*/ 
                this.printerService.print(null, this.defaultPrinter.emulation, commands)
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

  openCashDrawer(){
    if(this.defaultPrinter){
      
    let loading = this.alertService.createLoading("Communicating...");
    loading.present();

    this.printerService.openCashDrawer(null, this.defaultPrinter.emulation)
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

  ionViewDidEnter() {
    this.printerService.getDefaultPrinter()
    .then(printer => {
      if(printer){
        this.defaultPrinter = printer;
        this.connect();    
      }else{
        this.alertService.createAlert('Please select a printer');
      }
    })
  }

  ionViewWillLeave(){
    this.disconnect();
  }
  
}
