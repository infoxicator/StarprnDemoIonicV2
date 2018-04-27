var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';
/**
 * Emulation constants
 */
export var Emulation;
(function (Emulation) {
    /** mPOP, SM-L200, SM-L300, SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["StarPRNT"] = "StarPRNT";
    /** SM-L200, SM-L300 */
    Emulation["StarPRNTL"] = "StarPRNTL";
    /** FVP10, TSP650II, TSP700II, TSP800II */
    Emulation["StarLine"] = "StarLine";
    /** TSP100 */
    Emulation["StarGraphic"] = "StarGraphic";
    /** BSC10 */
    Emulation["EscPos"] = "EscPos";
    /** SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["EscPosMobile"] = "EscPosMobile";
    /** SP700 */
    Emulation["StarDotImpact"] = "StarDotImpact";
})(Emulation || (Emulation = {}));
/**
 * Encoding constants
 */
export var Encoding;
(function (Encoding) {
    /** English */
    Encoding["USASCII"] = "US-ASCII";
    /** French, German, Portuguese, Spanish */
    Encoding["Windows1252"] = "Windows-1252";
    /** Japanese */
    Encoding["ShiftJIS"] = "Shift-JIS";
    /** Russian */
    Encoding["Windows1251"] = "Windows-1251";
    /** Simplified Chinese */
    Encoding["GB2312"] = "GB2312";
    /** Traditional Chinese */
    Encoding["Big5"] = "Big5";
    /** UFT8 */
    Encoding["UTF8"] = "UTF-8";
})(Encoding || (Encoding = {}));
/**
 * CodePageType constants
 */
export var CodePageType;
(function (CodePageType) {
    CodePageType["CP737"] = "CP737";
    CodePageType["CP772"] = "CP772";
    CodePageType["CP774"] = "CP774";
    CodePageType["CP851"] = "CP851";
    CodePageType["CP852"] = "CP852";
    CodePageType["CP855"] = "CP855";
    CodePageType["CP857"] = "CP857";
    CodePageType["CP858"] = "CP858";
    CodePageType["CP860"] = "CP860";
    CodePageType["CP861"] = "CP861";
    CodePageType["CP862"] = "CP862";
    CodePageType["CP863"] = "CP863";
    CodePageType["CP864"] = "CP864";
    CodePageType["CP865"] = "CP865";
    CodePageType["CP869"] = "CP869";
    CodePageType["CP874"] = "CP874";
    CodePageType["CP928"] = "CP928";
    CodePageType["CP932"] = "CP932";
    CodePageType["CP999"] = "CP999";
    CodePageType["CP1001"] = "CP1001";
    CodePageType["CP1250"] = "CP1250";
    CodePageType["CP1251"] = "CP1251";
    CodePageType["CP1252"] = "CP1252";
    CodePageType["CP2001"] = "CP2001";
    CodePageType["CP3001"] = "CP3001";
    CodePageType["CP3002"] = "CP3002";
    CodePageType["CP3011"] = "CP3011";
    CodePageType["CP3012"] = "CP3012";
    CodePageType["CP3021"] = "CP3021";
    CodePageType["CP3041"] = "CP3041";
    CodePageType["CP3840"] = "CP3840";
    CodePageType["CP3841"] = "CP3841";
    CodePageType["CP3843"] = "CP3843";
    CodePageType["CP3845"] = "CP3845";
    CodePageType["CP3846"] = "CP3846";
    CodePageType["CP3847"] = "CP3847";
    CodePageType["CP3848"] = "CP3848";
    CodePageType["UTF8"] = "UTF8";
    CodePageType["Blank"] = "Blank";
})(CodePageType || (CodePageType = {}));
/**
 * InternationalType constants
 */
export var InternationalType;
(function (InternationalType) {
    InternationalType["UK"] = "UK";
    InternationalType["USA"] = "USA";
    InternationalType["France"] = "France";
    InternationalType["Germany"] = "Germany";
    InternationalType["Denmark"] = "Denmark";
    InternationalType["Sweden"] = "Sweden";
    InternationalType["Italy"] = "Italy";
    InternationalType["Spain"] = "Spain";
    InternationalType["Japan"] = "Japan";
    InternationalType["Norway"] = "Norway";
    InternationalType["Denmark2"] = "Denmark2";
    InternationalType["Spain2"] = "Spain2";
    InternationalType["LatinAmerica"] = "LatinAmerica";
    InternationalType["Korea"] = "Korea";
    InternationalType["Ireland"] = "Ireland";
    InternationalType["Legal"] = "Legal";
})(InternationalType || (InternationalType = {}));
/**
 * FontStyleType constants.
 */
export var FontStyleType;
(function (FontStyleType) {
    /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
    FontStyleType["A"] = "A";
    /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
    FontStyleType["B"] = "B";
})(FontStyleType || (FontStyleType = {}));
/**
 * CutPaperAction constants.
 */
export var CutPaperAction;
(function (CutPaperAction) {
    CutPaperAction["FullCut"] = "FullCut";
    CutPaperAction["FullCutWithFeed"] = "FullCutWithFeed";
    CutPaperAction["PartialCut"] = "PartialCut";
    CutPaperAction["PartialCutWithFeed"] = "PartialCutWithFeed";
})(CutPaperAction || (CutPaperAction = {}));
/**
 * BlackMarkType constants.
 */
export var BlackMarkType;
(function (BlackMarkType) {
    BlackMarkType["Valid"] = "Valid";
    BlackMarkType["Invalid"] = "Invalid";
    BlackMarkType["ValidWithDetection"] = "ValidWithDetection";
})(BlackMarkType || (BlackMarkType = {}));
/**
 * LogoSize constants
 */
export var LogoSize;
(function (LogoSize) {
    LogoSize["Normal"] = "Normal";
    LogoSize["DoubleWidth"] = "DoubleWidth";
    LogoSize["DoubleHeight"] = "DoubleHeight";
    LogoSize["DoubleWidthDoubleHeight"] = "DoubleWidthDoubleHeight";
})(LogoSize || (LogoSize = {}));
/**
 * AlignmentPosition constants
 */
export var AlignmentPosition;
(function (AlignmentPosition) {
    AlignmentPosition["Left"] = "Left";
    AlignmentPosition["Center"] = "Center";
    AlignmentPosition["Right"] = "Right";
})(AlignmentPosition || (AlignmentPosition = {}));
/**
 * BarcodeSymbology constants
 */
export var BarcodeSymbology;
(function (BarcodeSymbology) {
    BarcodeSymbology["Code128"] = "Code128";
    BarcodeSymbology["Code39"] = "Code39";
    BarcodeSymbology["Code93"] = "Code93";
    BarcodeSymbology["ITF"] = "ITF";
    BarcodeSymbology["JAN8"] = "JAN8";
    BarcodeSymbology["JAN13"] = "JAN13";
    BarcodeSymbology["NW7"] = "NW7";
    BarcodeSymbology["UPCA"] = "UPCA";
    BarcodeSymbology["UPCE"] = "UPCE";
})(BarcodeSymbology || (BarcodeSymbology = {}));
/**
 * BarcodeWidth constants
 */
export var BarcodeWidth;
(function (BarcodeWidth) {
    BarcodeWidth["Mode1"] = "Mode1";
    BarcodeWidth["Mode2"] = "Mode2";
    BarcodeWidth["Mode3"] = "Mode3";
    BarcodeWidth["Mode4"] = "Mode4";
    BarcodeWidth["Mode5"] = "Mode5";
    BarcodeWidth["Mode6"] = "Mode6";
    BarcodeWidth["Mode7"] = "Mode7";
    BarcodeWidth["Mode8"] = "Mode8";
    BarcodeWidth["Mode9"] = "Mode9";
})(BarcodeWidth || (BarcodeWidth = {}));
/**
 * QrCodeModel constants
 */
export var QrCodeModel;
(function (QrCodeModel) {
    QrCodeModel["No1"] = "No1";
    QrCodeModel["No2"] = "No2";
})(QrCodeModel || (QrCodeModel = {}));
/**
 * QrCodeLevel constants
 */
export var QrCodeLevel;
(function (QrCodeLevel) {
    QrCodeLevel["H"] = "H";
    QrCodeLevel["L"] = "L";
    QrCodeLevel["M"] = "M";
    QrCodeLevel["Q"] = "Q";
})(QrCodeLevel || (QrCodeLevel = {}));
/**
 * BitmapConverterRotation constants
 */
export var BitmapConverterRotation;
(function (BitmapConverterRotation) {
    BitmapConverterRotation["Normal"] = "Normal";
    BitmapConverterRotation["Left90"] = "Left90";
    BitmapConverterRotation["Right90"] = "Right90";
    BitmapConverterRotation["Rotate180"] = "Rotate180";
})(BitmapConverterRotation || (BitmapConverterRotation = {}));
/**
 * @name StarPRNT
 * @description
 * * Ionic Native wrappers for the starprnt cordova plugin for Star Micronics Bluetooth/LAN printers
 *
 * @usage
 * ```typescript
 * import { StarPRNT } from '@ionic-native/star-prnt';
 *
 *
 * constructor(private starprnt: StarPRNT) { }
 *
 * ...
 *
 *
 * this.starprnt.portDiscovery('all')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var StarPRNT = (function (_super) {
    __extends(StarPRNT, _super);
    function StarPRNT() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for Emulation
         */
        _this.Emulation = {
            StarPRNT: 'StarPRNT',
            StarPRNTL: 'StarPRNTL',
            StarLine: 'StarLine',
            StarGraphic: 'StarGraphic',
            EscPos: 'EscPos',
            EscPosMobile: 'EscPosMobile',
            StarDotImpact: 'StarDotImpact',
        };
        /**
         * Constant for possible Encoding
         */
        _this.Encoding = {
            USASCII: 'US-ASCII',
            Windows1252: 'Windows-1252',
            ShiftJIS: 'Shift-JIS',
            Windows1251: 'Windows-1251',
            GB2312: 'GB2312',
            Big5: 'Big5',
            UTF8: 'UTF-8'
        };
        /**
         * CodePageType constants
         */
        _this.CodePageType = {
            CP737: 'CP737',
            CP772: 'CP772',
            CP774: 'CP774',
            CP851: 'CP851',
            CP852: 'CP852',
            CP855: 'CP855',
            CP857: 'CP857',
            CP858: 'CP858',
            CP860: 'CP860',
            CP861: 'CP861',
            CP862: 'CP862',
            CP863: 'CP863',
            CP864: 'CP864',
            CP865: 'CP865',
            CP869: 'CP869',
            CP874: 'CP874',
            CP928: 'CP928',
            CP932: 'CP932',
            CP999: 'CP999',
            CP1001: 'CP1001',
            CP1250: 'CP1250',
            CP1251: 'CP1251',
            CP1252: 'CP1252',
            CP2001: 'CP2001',
            CP3001: 'CP3001',
            CP3002: 'CP3002',
            CP3011: 'CP3011',
            CP3012: 'CP3012',
            CP3021: 'CP3021',
            CP3041: 'CP3041',
            CP3840: 'CP3840',
            CP3841: 'CP3841',
            CP3843: 'CP3843',
            CP3845: 'CP3845',
            CP3846: 'CP3846',
            CP3847: 'CP3847',
            CP3848: 'CP3848',
            UTF8: 'UTF8',
            Blank: 'Blank'
        };
        /**
         * Constant for possible InternationalType
         */
        _this.InternationalType = {
            UK: 'UK',
            USA: 'USA',
            France: 'France',
            Germany: 'Germany',
            Denmark: 'Denmark',
            Sweden: 'Sweden',
            Italy: 'Italy',
            Spain: 'Spain',
            Japan: 'Japan',
            Norway: 'Norway',
            Denmark2: 'Denmark2',
            Spain2: 'Spain2',
            LatinAmerica: 'LatinAmerica',
            Korea: 'Korea',
            Ireland: 'Ireland',
            Legal: 'Legal'
        };
        /**
         * Constant for possible FontStyleType
         */
        _this.FontStyleType = {
            /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
            A: 'A',
            /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
            B: 'B'
        };
        /**
         * Constant for possible CutPaperAction
         */
        _this.CutPaperAction = {
            FullCut: 'FullCut',
            FullCutWithFeed: 'FullCutWithFeed',
            PartialCut: 'PartialCut',
            PartialCutWithFeed: 'PartialCutWithFeed'
        };
        /**
         * Constant for possible BlackMarkType
         */
        _this.BlackMarkType = {
            Valid: 'Valid',
            Invalid: 'Invalid',
            ValidWithDetection: 'ValidWithDetection'
        };
        /**
         * Constant for possible AlignmentPosition
         */
        _this.AlignmentPosition = {
            Left: 'Left',
            Center: 'Center',
            Right: 'Right'
        };
        /**
         * Constant for possible LogoSize
         */
        _this.LogoSize = {
            Normal: 'Normal',
            DoubleWidth: 'DoubleWidth',
            DoubleHeight: 'DoubleHeight',
            DoubleWidthDoubleHeight: 'DoubleWidthDoubleHeight'
        };
        /**
         * Constant for possible BarcodeSymbology
         */
        _this.BarcodeSymbology = {
            Code128: 'Code128',
            Code39: 'Code39',
            Code93: 'Code93',
            ITF: 'ITF',
            JAN8: 'JAN8',
            JAN13: 'JAN13',
            NW7: 'NW7',
            UPCA: 'UPCA',
            UPCE: 'UPCE'
        };
        /**
         * Constant for possible BarcodeWidth
         */
        _this.BarcodeWidth = {
            Mode1: 'Mode1',
            Mode2: 'Mode2',
            Mode3: 'Mode3',
            Mode4: 'Mode4',
            Mode5: 'Mode5',
            Mode6: 'Mode6',
            Mode7: 'Mode7',
            Mode8: 'Mode8',
            Mode9: 'Mode9'
        };
        /**
         * Constant for possible QrCodeModel
         */
        _this.QrCodeModel = {
            No1: 'No1',
            No2: 'No2'
        };
        /**
         * Constant for possible QrCodeLevel
         */
        _this.QrCodeLevel = {
            H: 'H',
            L: 'L',
            M: 'M',
            Q: 'Q'
        };
        /**
         * Constant for possible BitmapConverterRotation
         */
        _this.BitmapConverterRotation = {
            Normal: 'Normal',
            Left90: 'Left90',
            Right90: 'Right90',
            Rotate180: 'Rotate180'
        };
        return _this;
    }
    /**
     * Find available printers
     * @param {string} type  Interface Type: All, LAN, Bluetooth, USB
     * @return {Promise<Printers>} Returns a promise that resolves with an array of printers
     */
    StarPRNT.prototype.portDiscovery = function (type) {
        return;
    };
    /**
     * Checks the status of the printer
     * @param {string} port  Printer name i.e BT:StarMicronics
     * @param {string} emulation  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @return {Promise<PrinterStatus>} Returns a promise that resolves with the PrinterStatus object
     */
    StarPRNT.prototype.checkStatus = function (port, emulation) {
        return;
    };
    /**
     * Prints plain text
     * @param {string} port  Printer name i.e BT:StarMicronics. Send null to use a printer connected via StarIOExtManager using the connect() function
     * @param {string} emulation  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @param {PrintObj} printObj  text:string, cutReceipt?:boolean, openCashDrawer?:boolean
     * @return {Promise<any>} Success! if printed correctly or error message string returned by the SDK.
     */
    StarPRNT.prototype.printRawText = function (port, emulation, printObj) {
        return;
    };
    /**
     * Converts the text into a bitmap image and sends it to the printer
     * @param {string} port  Printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function
     * @param {string} emulation  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @param {RasterObj} rasterObj  text:string, cutReceipt?:boolean, openCashDrawer?:boolean, fontSize:number, paperWidth:number
     * @return {Promise<any>} Success! if printed correctly or error message string returned by the SDK.
     */
    StarPRNT.prototype.printRasterReceipt = function (port, emulation, rasterObj) {
        return;
    };
    /**
     * Gets an image from a string URI and converts it to bitmap to send it to the printer
     * @param {string} port Printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function
     * @param {string} emulation  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @param {ImageObj} imageObj  uri:string, paperWidth?:number, cutReceipt?:boolean, openCashDrawer?:boolean
     * @return {Promise<any>} Success! if printed correctly or error message string returned by the SDK.
     */
    StarPRNT.prototype.printImage = function (port, emulation, imageObj) {
        return;
    };
    /**
     * sends an appendPeripheral command to the printer for channels No1 and No2
     * @param {string} port  Printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function
     * @param {string} emulation  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @return {Promise<any>} Success! if opened or error message string returned by the SDK.
     */
    StarPRNT.prototype.openCashDrawer = function (port, emulation) {
        return;
    };
    /**
     * Sends an Array of commands to the command buffer using the Android ICommandBuilderInterface or iOS ISCBBuilderInterface
     * @param {string} port  Printer name i.e BT:StarMicronics.  Send null to use a printer connected via StarIOExtManager using the connect() function
     * @param {string} emulation  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @param {CommandsArray} commandsArray  each command in the array should be an instance of the PrintCommand object. Example [{append:"text"}, {"openCashDrawer: 1"}]
     * @return {Promise<any>} Success! if printed correctly or error message string returned by the SDK.
     */
    StarPRNT.prototype.print = function (port, emulation, commandsArray) {
        return;
    };
    /**
     * Allows you to connect to the printer, keep the connection alive and receive status updates through an observable
     * @param {string} port  printer name i.e BT:StarMicronics.
     * @param {string} emulation  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
     * @return {Observable<any>} Success! if connected or error message string returned by the SDK.
     */
    StarPRNT.prototype.connect = function (port, emulation) {
        return;
    };
    /**
     * Returns an observable with the device status events. Only fires when a printer is connnected through the connect() function
     * @return {Observable<any>} dataType: printerOnline, printerOffline, printerImpossible, printerPaperEmpty, printerPaperNearEmpty, printerPaperReady, printerCoverOpen, printerCoverClose, cashDrawerOpen, cashDrawerClose
     */
    StarPRNT.prototype.getStatus = function () {
        return;
    };
    /**
     * Allows to disconnect (close the connection to the peripherals), this is useful to avoid keeping alive a connection when not in the app to save device battery
     * (energy consumption). You should call this function when the app is paused or closed.
     * @return {Promise<any>} Success! if connected or error message string returned by the SDK.
     */
    StarPRNT.prototype.disconnect = function () {
        return;
    };
    StarPRNT.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    StarPRNT.ctorParameters = function () { return []; };
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], StarPRNT.prototype, "portDiscovery", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], StarPRNT.prototype, "checkStatus", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], StarPRNT.prototype, "printRawText", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], StarPRNT.prototype, "printRasterReceipt", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], StarPRNT.prototype, "printImage", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Promise)
    ], StarPRNT.prototype, "openCashDrawer", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Object]),
        __metadata("design:returntype", Promise)
    ], StarPRNT.prototype, "print", null);
    __decorate([
        Cordova({
            observable: true,
            callbackStyle: 'node'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", Observable)
    ], StarPRNT.prototype, "connect", null);
    __decorate([
        Cordova({
            eventObservable: true,
            event: 'starPrntData'
        }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Observable)
    ], StarPRNT.prototype, "getStatus", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], StarPRNT.prototype, "disconnect", null);
    StarPRNT = __decorate([
        Plugin({
            pluginName: 'StarPRNT',
            plugin: 'cordova-plugin-starprnt',
            pluginRef: 'starprnt',
            repo: 'https://github.com/auctifera-josed/starprnt',
            platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], StarPRNT);
    return StarPRNT;
}(IonicNativePlugin));
export { StarPRNT };
//# sourceMappingURL=index.js.map