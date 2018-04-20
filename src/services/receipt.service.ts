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
          
        let twoInchRasterImage: CommandsArray = [];
            twoInchRasterImage.push({appendInternational: this.starprnt.InternationalType.UK});
            twoInchRasterImage.push({appendCharacterSpace:0});
            twoInchRasterImage.push({appendAlignment: this.starprnt.AlignmentPosition.Center});
            twoInchRasterImage.push({append:
                "Star Clothing Boutique\n" +
                "123 Star Road\n" +
                "City, State 12345\n" +
                "\n"});
            twoInchRasterImage.push({appendAlignment: this.starprnt.AlignmentPosition.Left});
            twoInchRasterImage.push({append:
            "Date:MM/DD/YYYY    Time:HH:MM PM\n" +
            "--------------------------------\n" +
            "\n"});
            twoInchRasterImage.push({appendEmphasis:"SALE\n"});
            twoInchRasterImage.push({append:
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
            twoInchRasterImage.push({append:"Total     "});
            twoInchRasterImage.push({appendMultiple:"   $156.95\n", width:2, height:2});
            twoInchRasterImage.push({append:
            "--------------------------------\n" +
            "\n" +
            "Charge\n" +
            "156.95\n" +
            "Visa XXXX-XXXX-XXXX-0123\n" +
            "\n"});
            twoInchRasterImage.push({appendInvert:"Refunds and Exchanges\n"});
            twoInchRasterImage.push({append:"Within "});
            twoInchRasterImage.push({appendUnderline:"30 days"});
            twoInchRasterImage.push({append:" with receipt\n"});
            twoInchRasterImage.push({append:
            "And tags attached\n" +
            "\n"});
            twoInchRasterImage.push({appendAlignment:this.starprnt.AlignmentPosition.Center});
            if(qrCodeExample){ //print QRCode
                twoInchRasterImage.push({appendQrCode:"{BStar",
                                        QrCodeModel:"No2",
                                        QrCodeLevel:"L",
                                        cell: 8 });
            }else{ //print normal Barcode
            twoInchRasterImage.push({appendBarcode:"{BStar.", 
                                    BarcodeSymbology:this.starprnt.BarcodeSymbology.Code128,
                                    BarcodeWidth:this.starprnt.BarcodeWidth.Mode2,
                                    height:40,
                                    hri:true});
            }
            twoInchRasterImage.push({appendLineFeed:2});
        twoInchRasterImage.push({appendCutPaper:this.starprnt.CutPaperAction.PartialCutWithFeed});
    
            /* Three Inches receipt*/

        let threeInchRasterImage: CommandsArray = [];
            threeInchRasterImage.push({appendInternational: this.starprnt.InternationalType.UK});
            threeInchRasterImage.push({appendCharacterSpace:0});
            threeInchRasterImage.push({appendAlignment: this.starprnt.AlignmentPosition.Center});
            threeInchRasterImage.push({append:
                "Star Clothing Boutique\n" +
                "123 Star Road\n" +
                "City, State 12345\n" +
                "\n"});
            threeInchRasterImage.push({appendAlignment: this.starprnt.AlignmentPosition.Left});
            threeInchRasterImage.push({append:
                "Date:MM/DD/YYYY                    Time:HH:MM PM\n" +
                "------------------------------------------------\n" +
                "\n"});
            threeInchRasterImage.push({appendEmphasis:"SALE\n"});

            if(horizontalTab){ 
                //Only works for certain printers, check the StarSDK command compatiblity chart
                threeInchRasterImage.push({appendHorizontalTabPosition:[15,40]});
                threeInchRasterImage.push({append:"\n*Tab Position:\t15, \t40*\n"});
                threeInchRasterImage.push({append:"SKU\tDescription\tTotal\n"});
                threeInchRasterImage.push({append:"300678566\tPLAIN T-SHIRT\t10.99\n"});
                threeInchRasterImage.push({append:"300692003\tBLACK DENIM\t29.99\n"});
                threeInchRasterImage.push({append:"300651148\tBLUE DENIM\t29.99\n"});
                threeInchRasterImage.push({append:"300642980\tSTRIPED DRESS\t49.99\n"});
                threeInchRasterImage.push({append:"300638471\tBLACK BOOTS\t35.99\n"});
                threeInchRasterImage.push({appendHorizontalTabPosition:[]}); //Clear the horizontal tab postion

                threeInchRasterImage.push({appendLineFeed:1});
                threeInchRasterImage.push({appendHorizontalTabPosition:[40]});
                threeInchRasterImage.push({append:"Subtotal\t156.95\n"});
                threeInchRasterImage.push({append:"Tax\t  0.00\n"});
                threeInchRasterImage.push({append:"---------------------------------------------\n"});
                
                threeInchRasterImage.push({appendHorizontalTabPosition:[]}); //Clear the horizontal tab postion

            }else{
            threeInchRasterImage.push({append:
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
            threeInchRasterImage.push({append:"Total                       "});
            threeInchRasterImage.push({appendMultiple:"   $156.95\n", width:2, height:2});
            threeInchRasterImage.push({append:
                "------------------------------------------------\n" +
                "\n" +
                "Charge\n" +
                "156.95\n" +
                "Visa XXXX-XXXX-XXXX-0123\n" +
                "\n"});
            threeInchRasterImage.push({appendInvert:"Refunds and Exchanges\n"});
            threeInchRasterImage.push({append:"Within "});
            threeInchRasterImage.push({appendUnderline:"30 days"});
            threeInchRasterImage.push({append:" with receipt\n"});
            threeInchRasterImage.push({append:
            "And tags attached\n" +
            "\n"});
            threeInchRasterImage.push({appendAlignment:this.starprnt.AlignmentPosition.Center});
            if(qrCodeExample){ //print QRCode
                threeInchRasterImage.push({appendQrCode:"{BStar",
                                        QrCodeModel:"No2",
                                        QrCodeLevel:"L",
                                        cell: 8 });
            }else{ //print normal Barcode
            threeInchRasterImage.push({appendBarcode:"{BStar.", 
                                    BarcodeSymbology:this.starprnt.BarcodeSymbology.Code128,
                                    BarcodeWidth:this.starprnt.BarcodeWidth.Mode2,
                                    height:40,
                                    hri:true});
            threeInchRasterImage.push({appendLineFeed:2});
            }
        threeInchRasterImage.push({appendCutPaper:this.starprnt.CutPaperAction.PartialCutWithFeed});
        

        /* Four Inches receipt*/
                                              
        let fourInchRasterImage: CommandsArray = [];
            fourInchRasterImage.push({appendInternational: this.starprnt.InternationalType.UK});
            fourInchRasterImage.push({appendCharacterSpace:0});
            fourInchRasterImage.push({appendAlignment: this.starprnt.AlignmentPosition.Center});
            fourInchRasterImage.push({append:
                "Star Clothing Boutique\n" +
                "123 Star Road\n" +
                "City, State 12345\n" +
                "\n"});
            fourInchRasterImage.push({appendAlignment: this.starprnt.AlignmentPosition.Left});
            fourInchRasterImage.push({append:
                "Date:MM/DD/YYYY                                         Time:HH:MM PM\n" +
                            "---------------------------------------------------------------------\n" +
                            "\n"});
            fourInchRasterImage.push({appendEmphasis:"SALE\n"});
            fourInchRasterImage.push({append:
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
            fourInchRasterImage.push({append:"Total                                            "});
            fourInchRasterImage.push({appendMultiple:"   $156.95\n", width:2, height:2});
            fourInchRasterImage.push({append:
                "---------------------------------------------------------------------\n" +
                            "\n" +
                            "Charge\n" +
                            "156.95\n" +
                            "Visa XXXX-XXXX-XXXX-0123\n" +
                            "\n"});
            fourInchRasterImage.push({appendInvert:"Refunds and Exchanges\n"});
            fourInchRasterImage.push({append:"Within "});
            fourInchRasterImage.push({appendUnderline:"30 days"});
            fourInchRasterImage.push({append:" with receipt\n"});
            fourInchRasterImage.push({append:
            "And tags attached\n" +
            "\n"});
            fourInchRasterImage.push({appendAlignment:this.starprnt.AlignmentPosition.Center});
            if(qrCodeExample){ //print QRCode
                fourInchRasterImage.push({appendQrCode:"{BStar",
                                        QrCodeModel:"No2",
                                        QrCodeLevel:"L",
                                        cell: 8 });
            }else{ //print normal Barcode
            fourInchRasterImage.push({appendBarcode:"{BStar.", 
                                    BarcodeSymbology:this.starprnt.BarcodeSymbology.Code128,
                                    BarcodeWidth:this.starprnt.BarcodeWidth.Mode2,
                                    height:40,
                                    hri:true});
            }
            fourInchRasterImage.push({appendLineFeed:2});
        fourInchRasterImage.push({appendCutPaper:this.starprnt.CutPaperAction.PartialCutWithFeed});             
                  
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