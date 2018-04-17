import { Injectable } from '@angular/core';
import { StarPRNT, Printer, Printers, PrinterStatus } from '@ionic-native/star-prnt';
import { Storage } from '@ionic/storage';

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
     * Save the printer object and emulation to Local Storage
     * @param printer {Printer} 
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

    getDefaultPrinter(){
        return this.storage.get('printer');
    }    
}