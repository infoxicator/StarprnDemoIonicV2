import { Injectable } from '@angular/core';
import { StarPRNT, RasterObj, CommandsArray } from '@ionic-native/star-prnt';

@Injectable()
export class ReceiptService {
    constructor (private starprnt: StarPRNT){  }

    /**
     * Generates and Returns a RasterObject example depending on the paper size
     * @param paperSize {string} '2', '3', '4' inches
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
            
        };
    
        /**
         * Returns the CommandsArray with the printCommand objects example
         * @param paperSize {string} '2', '3', '4' inches
         * @param horizontalTab {boolean} Generate receipt using the appendHorizontalTabs command
         * @param qrCodeExample {boolean} Generate QRCode at the end of the receipt
         * @return {CommandsArray} 
         */
        getExampleReceipt(paperSize:string, horizontalTab?:boolean, qrCodeExample?:boolean ): CommandsArray{
    
            /* Two Inches receipt*/
          
        let twoInchReceipt: CommandsArray = [];
            twoInchReceipt.push({appendInternational: this.starprnt.InternationalType.UK});
            twoInchReceipt.push({appendCharacterSpace:0});
            twoInchReceipt.push({appendAlignment: this.starprnt.AlignmentPosition.Center});
            twoInchReceipt.push({append:
                "Star Clothing Boutique\n" +
                "123 Star Road\n" +
                "City, State 12345\n" +
                "\n"});
            twoInchReceipt.push({appendAlignment: this.starprnt.AlignmentPosition.Left});
            twoInchReceipt.push({append:
            "Date:MM/DD/YYYY    Time:HH:MM PM\n" +
            "--------------------------------\n" +
            "\n"});
            twoInchReceipt.push({appendEmphasis:"SALE\n"});
            twoInchReceipt.push({append:
            "SKU         Description    Total\n" +
            "300678566   PLAIN T-SHIRT  10.99\n" +
            "300692003   BLACK DENIM    29.99\n" +
            "300651148   BLUE DENIM     29.99\n" +
            "300642980   STRIPED DRESS  49.99\n" +
            "300638471   BLACK BOOTS    35.99\n" +
            "\n" +
            "Subtotal                  156.95\n" +
            "Tax                         0.00\n" +
            "--------------------------------\n"});
            twoInchReceipt.push({append:"Total     "});
            twoInchReceipt.push({appendMultiple:"   $156.95\n", width:2, height:2});
            twoInchReceipt.push({append:
            "--------------------------------\n" +
            "\n" +
            "Charge\n" +
            "156.95\n" +
            "Visa XXXX-XXXX-XXXX-0123\n" +
            "\n"});
            twoInchReceipt.push({appendInvert:"Refunds and Exchanges\n"});
            twoInchReceipt.push({append:"Within "});
            twoInchReceipt.push({appendUnderline:"30 days"});
            twoInchReceipt.push({append:" with receipt\n"});
            twoInchReceipt.push({append:
            "And tags attached\n" +
            "\n"});
            twoInchReceipt.push({appendAlignment:this.starprnt.AlignmentPosition.Center});
            if(qrCodeExample){ //print QRCode
                twoInchReceipt.push({appendQrCode:"{BStar",
                                        QrCodeModel:"No2",
                                        QrCodeLevel:"L",
                                        cell: 8 });
            }else{ //print normal Barcode
            twoInchReceipt.push({appendBarcode:"{BStar.", 
                                    BarcodeSymbology:this.starprnt.BarcodeSymbology.Code128,
                                    BarcodeWidth:this.starprnt.BarcodeWidth.Mode2,
                                    height:40,
                                    hri:true});
            }
            twoInchReceipt.push({appendLineFeed:2});
        twoInchReceipt.push({appendCutPaper:this.starprnt.CutPaperAction.PartialCutWithFeed});
    
            /* Three Inches receipt*/

        let threeInchReceipt: CommandsArray = [];
            threeInchReceipt.push({appendInternational: this.starprnt.InternationalType.UK});
            threeInchReceipt.push({appendCharacterSpace:0});
            threeInchReceipt.push({appendAlignment: this.starprnt.AlignmentPosition.Center});
            threeInchReceipt.push({append:
                "Star Clothing Boutique\n" +
                "123 Star Road\n" +
                "City, State 12345\n" +
                "\n"});
            threeInchReceipt.push({appendAlignment: this.starprnt.AlignmentPosition.Left});
            threeInchReceipt.push({append:
                "Date:MM/DD/YYYY                    Time:HH:MM PM\n" +
                "------------------------------------------------\n" +
                "\n"});
            threeInchReceipt.push({appendEmphasis:"SALE\n"});

            if(horizontalTab){ 
                //Only works for certain printers, check the StarSDK command compatiblity chart
                threeInchReceipt.push({appendHorizontalTabPosition:[15,40]});
                threeInchReceipt.push({append:"\n*Tab Position:\t15, \t40*\n"});
                threeInchReceipt.push({append:"SKU\tDescription\tTotal\n"});
                threeInchReceipt.push({append:"300678566\tPLAIN T-SHIRT\t10.99\n"});
                threeInchReceipt.push({append:"300692003\tBLACK DENIM\t29.99\n"});
                threeInchReceipt.push({append:"300651148\tBLUE DENIM\t29.99\n"});
                threeInchReceipt.push({append:"300642980\tSTRIPED DRESS\t49.99\n"});
                threeInchReceipt.push({append:"300638471\tBLACK BOOTS\t35.99\n"});
                threeInchReceipt.push({appendHorizontalTabPosition:[]}); //Clear the horizontal tab postion

                threeInchReceipt.push({appendLineFeed:1});
                threeInchReceipt.push({appendHorizontalTabPosition:[40]});
                threeInchReceipt.push({append:"Subtotal\t156.95\n"});
                threeInchReceipt.push({append:"Tax\t  0.00\n"});
                threeInchReceipt.push({append:"---------------------------------------------\n"});
                
                threeInchReceipt.push({appendHorizontalTabPosition:[]}); //Clear the horizontal tab postion

            }else{
            threeInchReceipt.push({append:
                "SKU               Description              Total\n" +
                "300678566         PLAIN T-SHIRT            10.99\n" +
                "300692003         BLACK DENIM              29.99\n" +
                "300651148         BLUE DENIM               29.99\n" +
                "300642980         STRIPED DRESS            49.99\n" +
                "300638471         BLACK BOOTS              35.99\n" +
                "\n" +
                "Subtotal                                  156.95\n" +
                "Tax                                         0.00\n" +
                "------------------------------------------------\n"});
            }
            threeInchReceipt.push({append:"Total                       "});
            threeInchReceipt.push({appendMultiple:"   $156.95\n", width:2, height:2});
            threeInchReceipt.push({append:
                "------------------------------------------------\n" +
                "\n" +
                "Charge\n" +
                "156.95\n" +
                "Visa XXXX-XXXX-XXXX-0123\n" +
                "\n"});
            threeInchReceipt.push({appendInvert:"Refunds and Exchanges\n"});
            threeInchReceipt.push({append:"Within "});
            threeInchReceipt.push({appendUnderline:"30 days"});
            threeInchReceipt.push({append:" with receipt\n"});
            threeInchReceipt.push({append:
            "And tags attached\n" +
            "\n"});
            threeInchReceipt.push({appendAlignment:this.starprnt.AlignmentPosition.Center});
            if(qrCodeExample){ //print QRCode
                threeInchReceipt.push({appendQrCode:"{BStar",
                                        QrCodeModel:"No2",
                                        QrCodeLevel:"L",
                                        cell: 8 });
            }else{ //print normal Barcode
            threeInchReceipt.push({appendBarcode:"{BStar.", 
                                    BarcodeSymbology:this.starprnt.BarcodeSymbology.Code128,
                                    BarcodeWidth:this.starprnt.BarcodeWidth.Mode2,
                                    height:40,
                                    hri:true});
            threeInchReceipt.push({appendLineFeed:2});
            }
        threeInchReceipt.push({appendCutPaper:this.starprnt.CutPaperAction.PartialCutWithFeed});
        

        /* Four Inches receipt*/
                                              
        let fourInchReceipt: CommandsArray = [];
            fourInchReceipt.push({appendInternational: this.starprnt.InternationalType.UK});
            fourInchReceipt.push({appendCharacterSpace:0});
            fourInchReceipt.push({appendAlignment: this.starprnt.AlignmentPosition.Center});
            fourInchReceipt.push({append:
                "Star Clothing Boutique\n" +
                "123 Star Road\n" +
                "City, State 12345\n" +
                "\n"});
            fourInchReceipt.push({appendAlignment: this.starprnt.AlignmentPosition.Left});
            fourInchReceipt.push({append:
                "Date:MM/DD/YYYY                                         Time:HH:MM PM\n" +
                            "---------------------------------------------------------------------\n" +
                            "\n"});
            fourInchReceipt.push({appendEmphasis:"SALE\n"});
            fourInchReceipt.push({append:
                "SKU                        Description                          Total\n" +
                            "300678566                  PLAIN T-SHIRT                        10.99\n" +
                            "300692003                  BLACK DENIM                          29.99\n" +
                            "300651148                  BLUE DENIM                           29.99\n" +
                            "300642980                  STRIPED DRESS                        49.99\n" +
                            "300638471                  BLACK BOOTS                          35.99\n" +
                            "\n" +
                            "Subtotal                                                       156.95\n" +
                            "Tax                                                              0.00\n" +
                            "---------------------------------------------------------------------\n"});
            fourInchReceipt.push({append:"Total                                            "});
            fourInchReceipt.push({appendMultiple:"   $156.95\n", width:2, height:2});
            fourInchReceipt.push({append:
                "---------------------------------------------------------------------\n" +
                            "\n" +
                            "Charge\n" +
                            "156.95\n" +
                            "Visa XXXX-XXXX-XXXX-0123\n" +
                            "\n"});
            fourInchReceipt.push({appendInvert:"Refunds and Exchanges\n"});
            fourInchReceipt.push({append:"Within "});
            fourInchReceipt.push({appendUnderline:"30 days"});
            fourInchReceipt.push({append:" with receipt\n"});
            fourInchReceipt.push({append:
            "And tags attached\n" +
            "\n"});
            fourInchReceipt.push({appendAlignment:this.starprnt.AlignmentPosition.Center});
            if(qrCodeExample){ //print QRCode
                fourInchReceipt.push({appendQrCode:"{BStar",
                                        QrCodeModel:"No2",
                                        QrCodeLevel:"L",
                                        cell: 8 });
            }else{ //print normal Barcode
            fourInchReceipt.push({appendBarcode:"{BStar.", 
                                    BarcodeSymbology:this.starprnt.BarcodeSymbology.Code128,
                                    BarcodeWidth:this.starprnt.BarcodeWidth.Mode2,
                                    height:40,
                                    hri:true});
            }
            fourInchReceipt.push({appendLineFeed:2});
        fourInchReceipt.push({appendCutPaper:this.starprnt.CutPaperAction.PartialCutWithFeed});             
                  
                switch(paperSize){
                    case '2':
                    return twoInchReceipt 
                    case '3':
                    return threeInchReceipt 
                    case '4':
                    return fourInchReceipt
                    default:
                    return threeInchReceipt 
                }       
                
            }
    
}