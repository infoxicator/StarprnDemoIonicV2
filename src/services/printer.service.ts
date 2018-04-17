import { Injectable } from '@angular/core';
import { StarPRNT, Printer, Printers, PrinterStatus, PrintObj, RasterObj, ImageObj } from '@ionic-native/star-prnt';
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

    /**
     * Returns the printer object and emulation from Local Storage
     * @param paperSize {string} 2, 3, 4 inches
     * @return {RasterObj} 
     */
    rasterReceiptExample(paperSize:string): RasterObj{

    let twoInchRasterImage: RasterObj = {
        text:" Star Clothing Boutique\n" +
        "        123 Star Road\n" +
        "      City, State 12345\n" +
        "\n" +
        "Date:MM/DD/YYYY Time:HH:MM PM\n" +
        "-----------------------------\n" +
        "SALE\n" +
        "SKU       Description   Total\n" +
        "300678566 PLAIN T-SHIRT 10.99\n" +
        "300692003 BLACK DENIM   29.99\n" +
        "300651148 BLUE DENIM    29.99\n" +
        "300642980 STRIPED DRESS 49.99\n" +
        "30063847  BLACK BOOTS   35.99\n" +
        "\n" +
        "Subtotal               156.95\n" +
        "Tax                      0.00\n" +
        "-----------------------------\n" +
        "Total                 $156.95\n" +
        "-----------------------------\n" +
        "\n" +
        "Charge\n" +
        "156.95\n" +
        "Visa XXXX-XXXX-XXXX-0123\n" +
        "Refunds and Exchanges\n" +
        "Within 30 days with receipt\n" +
        "And tags attached\n",
        paperWidth:384,
        fontSize:22,       
        cutReceipt:true,
        openCashDrawer:false
      };
    let threeInchRasterImage: RasterObj= {
        text: "    Star Clothing Boutique\n" +
        "             123 Star Road\n" +
        "           City, State 12345\n" +
        "\n" +
        "Date:MM/DD/YYYY          Time:HH:MM PM\n" +
        "--------------------------------------\n" +
        "SALE\n" +
        "SKU            Description       Total\n" +
        "300678566      PLAIN T-SHIRT     10.99\n" +
        "300692003      BLACK DENIM       29.99\n" +
        "300651148      BLUE DENIM        29.99\n" +
        "300642980      STRIPED DRESS     49.99\n" +
        "30063847       BLACK BOOTS       35.99\n" +
        "\n" +
        "Subtotal                        156.95\n" +
        "Tax                               0.00\n" +
        "--------------------------------------\n" +
        "Total                          $156.95\n" +
        "--------------------------------------\n" +
        "\n" +
        "Charge\n" +
        "156.95\n" +
        "Visa XXXX-XXXX-XXXX-0123\n" +
        "Refunds and Exchanges\n" +
        "Within 30 days with receipt\n" +
        "And tags attached\n",
        paperWidth:576,
        fontSize:25,       
        cutReceipt:true,
        openCashDrawer:false
      };
    let fourInchRasterImage: RasterObj= {
        text:"               Star Clothing Boutique\n" +
        "                        123 Star Road\n" +
        "                      City, State 12345\n" +
        "\n" +
        "Date:MM/DD/YYYY                             Time:HH:MM PM\n" +
        "---------------------------------------------------------\n" +
        "SALE\n" +
        "SKU                     Description                 Total\n" +
        "300678566               PLAIN T-SHIRT               10.99\n" +
        "300692003               BLACK DENIM                 29.99\n" +
        "300651148               BLUE DENIM                  29.99\n" +
        "300642980               STRIPED DRESS               49.99\n" +
        "300638471               BLACK BOOTS                 35.99\n" +
        "\n" +
        "Subtotal                                           156.95\n" +
        "Tax                                                  0.00\n" +
        "---------------------------------------------------------\n" +
        "Total                                             $156.95\n" +
        "---------------------------------------------------------\n" +
        "\n" +
        "Charge\n" +
        "156.95\n" +
        "Visa XXXX-XXXX-XXXX-0123\n" +
        "Refunds and Exchanges\n" +
        "Within 30 days with receipt\n" +
        "And tags attached\n",
        paperWidth:832,
        fontSize:23,       
        cutReceipt:true,
        openCashDrawer:false
      };

        switch(paperSize){
            case '2':
            return twoInchRasterImage 
            case '3':
            return threeInchRasterImage 
            case '4':
            return fourInchRasterImage
            default:
            return threeInchRasterImage 
        }       
        
    }

}