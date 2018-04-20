import { Injectable } from '@angular/core';
import { StarPRNT, Printer, Printers, PrinterStatus, PrintObj, RasterObj, ImageObj, CommandsArray } from '@ionic-native/star-prnt';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PrinterService {
    constructor (private starprnt: StarPRNT, private storage: Storage){  }

    /**
     * Find printers available
     * @param type {string} Iterface Type: All, LAN, Bluetooth, USB
     * @return {Promise<Printers>} Returns a promise that resolves with an array of printers
     */
    portDiscovery(type: string): Promise<Printers>{
       return this.starprnt.portDiscovery(type);
    }

     /**
     * Checks the status of the printer 
     * @param port {string} printer name i.e BT:StarMicronics
     * @param emulation {string} StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @return {Promise<PrinterStatus>} Returns a promise that resolves with the printer status object
     */
    checkStatus(port: string, emulation:string): Promise<PrinterStatus>{
        return this.starprnt.checkStatus(port, emulation);
    }

      /**
     * Prints plain text 
     * @param port {string} printer name i.e BT:StarMicronics
     * @param emulation {string} StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @param printObj {PrintObj} text:string, cutReceipt?:boolean, openCashDrawer?:boolean
     * @return {Promise<any>} Success! if printed correctly or error message string returned by the SDK.
     */
    printRawText(port: string, emulation:string, printObj:PrintObj): Promise<any>{
        return this.starprnt.printRawText(port, emulation, printObj);
    }

    /**
     * Converts the text into a bitmap image and sends it to the printer
     * @param port {string} printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function
     * @param emulation {string} StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @param rasterObj {RasterObj} text:string, cutReceipt?:boolean, openCashDrawer?:boolean, fontSize:number, paperWidth:number
     * @return {Promise<any>} Success! if printed correctly or error message string returned by the SDK.
     */
    printRasterReceipt(port: string, emulation: string, rasterObj: RasterObj): Promise<any> { 
        return this.starprnt.printRasterReceipt(port, emulation, rasterObj);
    }

    /**
     * Gets an image from a string URI and converts it to bitmap to send it to the printer
     * @param port {string} printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function
     * @param emulation {string} StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @param imageObj {ImageObj} uri:string, paperWidth:number, cutReceipt?:boolean, openCashDrawer?:boolean
     * @return {Promise<any>} Success! if printed correctly or error message string returned by the SDK.
     */
    printImage(port: string, emulation: string, imageObj: ImageObj): Promise<any> { 
        return this.starprnt.printImage(port, emulation, imageObj);
    }

       /**
     * Sends an Array of commands to the command buffer using the Android ICommandBuilderInterface or iOS ISCBBuilderInterface
     * @param port {string} printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function
     * @param emulation {string} StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @param commandsArray {CommandsArray} each command in the array should be an instance of the PrintCommand object. Example [{append:"text"}, {"openCashDrawer: 1"}]
     * @return {Promise<any>} Success! if printed correctly or error message string returned by the SDK.
     */
    print(port: string, emulation: string, commandsArray: CommandsArray): Promise<any> { 
        return this.starprnt.print(port, emulation, commandsArray); 
    }

    /**
     * sends an appendPeripheral command to the printer for channels No1 and No2
     * @param port {string} printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function
     * @param emulation {string} StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @return {Promise<any>} Success! if opened or error message string returned by the SDK.
     */
    openCashDrawer(port: string, emulation: string): Promise<any> { 
        return this.starprnt.openCashDrawer(port, emulation);
    }

    /**
     * Allows you to connect to the printer, keep the connection alive and receive status updates through an observable
     * @param port {string} printer name i.e BT:StarMicronics.
     * @param emulation {string} StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @return {Observable<any>} Success! if connected or error message string returned by the SDK.
     */
      connect(port: string, emulation: string): Observable<any> { 
         return this.starprnt.connect(port, emulation);        
        }
  
      /**
       * Allows to disconnect (close the connection to the peripherals), this is useful to avoid keeping alive a connection when not in the app to save device battery 
       * (energy consumption). You should call this function when the app is paused or closed.
       * @return {Promise<any>} Success! if connected or error message string returned by the SDK.
       */
      disconnect(): Promise<any> { 
          return this.starprnt.disconnect(); 
        }

        /**
       * Returns an observable with the device status events. Only fires when a printer is connnected through the connect() function
       * @return {Observable<any>} Events: printerOnline, printerOffline, printerImpossible, printerPaperEmpty, printerPaperNearEmpty, printerPaperReady, printerCoverOpen, printerCoverClose, cashDrawerOpen, cashDrawerClose
       */
      getStatus(): Observable<any> { 
        return this.starprnt.getStatus(); 
      }

    /**
     * Save the printer object and emulation to Local Storage
     * @param printer {Printer} modelName:string, portName:string, macAddress:string
     * @param emulation {string} StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @return void
     */
    saveDefaultPrinter(printer:Printer, emulation:string){
      this.storage.set('printer', 
      { modelName:printer.modelName, 
        portName:printer.portName,
        macAddress:printer.macAddress,
        emulation:emulation
       }); 
    }

    /**
     * Returns the printer object and emulation from Local Storage
     * @return {Promise<any>} printer: modelName:string, portName:string, macAddress:string, emulation:string
     */
    getDefaultPrinter(): Promise<any>{
        return this.storage.get('printer');
    }

}