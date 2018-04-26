# StarPRNT Plugin Ionic 2/3 Demo Application

Application Demo using the [@ionic-native/star-prnt](https://ionicframework.com/docs/native/starprnt/) wrappers for the [cordova plugin StarPRNT](https://github.com/auctifera-josed/starprnt)


# Install
Install the Cordova and Ionic Native plugins:

`cordova plugin add cordova-plugin-starprnt`

`npm install --save @ionic-native/star-prnt`

**Important** 


The ionic-native plugin is not available through npm yet, in the meantime download a copy here [star-prnt](star-prnt) and place it in your app node_modules/@ionic-native directory


Add this plugin to your app's module

**usage**:     import { StarPRNT } from '@ionic-native/star-prnt';
    
    
    constructor(private starprnt: StarPRNT) { }
    
    ...
    
    
    this.starprnt.portDiscovery('all')
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));


## SMPort Example:

```typescript

let printObj:PrintObj = {
      text:"Star Clothing Boutique\n123 Star Road\nCity, State 12345\n\n",
      cutReceipt:true,
      openCashDrawer:false
    }

 this.starprnt.printRawText('BT:StarMicronics', 'EscPosMobile', printObj)
  .then(result => {
  console.log('Success!');
 })
 ```
      
          
## StarIOExtManager:
 
 *Connect to the printer before start sending commands:*
 
 ```typescript
 
    this.starprnt.connect('BT:StarMicronics', 'EscPosMobile')
    .subscribe(result =>{
      console.log(result); //Success!
    }, error => {
      alert("Communication Error: ");
    }) 
  ```
  **Notes:**
  
  -You need to connect before printing if using StarIOExtManager  
  -You should call this function on app resume event if you have disconnected on pause event  
  -After connecting the getStatus observable starts firing with the printer status
    
  *Send Commands to the connected printer setting the port to null*
  
  ```typescript
  
  let printObj:PrintObj = {
      text:"Star Clothing Boutique\n123 Star Road\nCity, State 12345\n\n",
      cutReceipt:true,
      openCashDrawer:false
    }
    
    this.starprnt.printRawText(null, 'StarLine', printObj)
      .then(result => {
      alert("Success!")
      }).catch(error => {
        alert("communication error") 
      })
   ```
      
## getStatus Observable Example:
  
  **Only starts firing after the connect() function has been called**
  
  ```typescript
  
    this.printerStatusSuscription = this.starprnt.getStatus()
      .subscribe(printerStatus =>{
        this.zone.run(() => {
          console.log(printerStatus.dataType);     
         });
      });
  ```
  
**Printer Events**

- Printer cover open: printerCoverOpen
- Printer cover close: printerCoverClose
- Printer impossible: printerImpossible
- Printer online: printerOnline
- Printer offline: printerOffline
- Printer paper empty: printerPaperEmpty
- Printer paper near empty: printerPaperNearEmpty
- Printer paper ready: printerPaperReady


## API Reference


### Classes

* [StarPRNT](docs/classes/_index_d_.starprnt.md)

### Interfaces

* [CommandsArray](docs/interfaces/_index_d_.commandsarray.md)
* [ImageObj](docs/interfaces/_index_d_.imageobj.md)
* [PrintCommand](docs/interfaces/_index_d_.printcommand.md)
* [PrintObj](docs/interfaces/_index_d_.printobj.md)
* [Printer](docs/interfaces/_index_d_.printer.md)
* [PrinterStatus](docs/interfaces/_index_d_.printerstatus.md)
* [Printers](docs/interfaces/_index_d_.printers.md)
* [RasterObj](docs/interfaces/_index_d_.rasterobj.md)

### Enumerations

* [AlignmentPosition](docs/enums/_index_d_.alignmentposition.md)
* [BarcodeSymbology](docs/enums/_index_d_.barcodesymbology.md)
* [BarcodeWidth](docs/enums/_index_d_.barcodewidth.md)
* [BitmapConverterRotation](docs/enums/_index_d_.bitmapconverterrotation.md)
* [BlackMarkType](docs/enums/_index_d_.blackmarktype.md)
* [CutPaperAction](docs/enums/_index_d_.cutpaperaction.md)
* [FontStyleType](docs/enums/_index_d_.fontstyletype.md)
* [InternationalType](docs/enums/_index_d_.internationaltype.md)
* [LogoSize](docs/enums/_index_d_.logosize.md)
* [QrCodeLevel](docs/enums/_index_d_.qrcodelevel.md)
* [QrCodeModel](docs/enums/_index_d_.qrcodemodel.md)

---



