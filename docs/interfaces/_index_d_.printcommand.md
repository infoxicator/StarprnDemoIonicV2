[@ionic-native/star-prnt](../README.md) > ["index.d"](../modules/_index_d_.md) > [PrintCommand](../interfaces/_index_d_.printcommand.md)

# Interface: PrintCommand

## Hierarchy

**PrintCommand**

## Index

### Properties

* [BarcodeSymbology](_index_d_.printcommand.md#barcodesymbology)
* [BarcodeWidth](_index_d_.printcommand.md#barcodewidth)
* [QrCodeLevel](_index_d_.printcommand.md#qrcodelevel)
* [QrCodeModel](_index_d_.printcommand.md#qrcodemodel)
* [absolutePosition](_index_d_.printcommand.md#absoluteposition)
* [alignment](_index_d_.printcommand.md#alignment)
* [append](_index_d_.printcommand.md#append)
* [appendAbsolutePosition](_index_d_.printcommand.md#appendabsoluteposition)
* [appendAlignment](_index_d_.printcommand.md#appendalignment)
* [appendBarcode](_index_d_.printcommand.md#appendbarcode)
* [appendBitmap](_index_d_.printcommand.md#appendbitmap)
* [appendBlackMark](_index_d_.printcommand.md#appendblackmark)
* [appendCharacterSpace](_index_d_.printcommand.md#appendcharacterspace)
* [appendCutPaper](_index_d_.printcommand.md#appendcutpaper)
* [appendEmphasis](_index_d_.printcommand.md#appendemphasis)
* [appendFontStyle](_index_d_.printcommand.md#appendfontstyle)
* [appendHorizontalTabPosition](_index_d_.printcommand.md#appendhorizontaltabposition)
* [appendInternational](_index_d_.printcommand.md#appendinternational)
* [appendInvert](_index_d_.printcommand.md#appendinvert)
* [appendLineFeed](_index_d_.printcommand.md#appendlinefeed)
* [appendLineSpace](_index_d_.printcommand.md#appendlinespace)
* [appendLogo](_index_d_.printcommand.md#appendlogo)
* [appendMultiple](_index_d_.printcommand.md#appendmultiple)
* [appendQrCode](_index_d_.printcommand.md#appendqrcode)
* [appendRaw](_index_d_.printcommand.md#appendraw)
* [appendUnderline](_index_d_.printcommand.md#appendunderline)
* [appendUnitFeed](_index_d_.printcommand.md#appendunitfeed)
* [bothScale](_index_d_.printcommand.md#bothscale)
* [cell](_index_d_.printcommand.md#cell)
* [diffusion](_index_d_.printcommand.md#diffusion)
* [height](_index_d_.printcommand.md#height)
* [hri](_index_d_.printcommand.md#hri)
* [logoSize](_index_d_.printcommand.md#logosize)
* [openCashDrawer](_index_d_.printcommand.md#opencashdrawer)
* [rotation](_index_d_.printcommand.md#rotation)
* [width](_index_d_.printcommand.md#width)

---

## Properties

<a id="barcodesymbology"></a>

### `<Optional>` BarcodeSymbology

**●  BarcodeSymbology**:  *`string`* 

*Defined in index.d.ts:203*

Property to be used with the appendBarcode command. Choose the format of the return value defined in StarPRNT.BarcodeSymbology or the BarcodeSymbology enum. 'Code128' | 'Code39' | 'Code93' | 'ITF' | 'JAN8' | 'JAN13' | 'NW7' | 'UPCA' | 'UPCE' | Example: {appendBarcode:'{BStar', BarcodeSymbology:BarcodeSymbology.Code128}

___

<a id="barcodewidth"></a>

### `<Optional>` BarcodeWidth

**●  BarcodeWidth**:  *`string`* 

*Defined in index.d.ts:210*

Property to be used with the appendBarcode command. Choose the format of the return value defined in StarPRNT.BarcodeWidth or the BarcodeWidth enum. Mode1 | Mode2 | Mode3 | Mode4 | Mode5 | Mode6 | Mode7 | Mode8 | Mode9 Example: {appendBarcode:'{BStar', BarcodeWidth:BarcodeWidth.Mode2}

___

<a id="qrcodelevel"></a>

### `<Optional>` QrCodeLevel

**●  QrCodeLevel**:  *`string`* 

*Defined in index.d.ts:269*

Property to be used with the appendQrCode command. Choose the format of the return value defined in StarPRNT.QrCodeLevel or the QrCodeLevel enum. 'No1' | 'No2'. Default 'H' Example: {appendQrCode:'{BStar', QrCodeLevel:QrCodeLevel.H}

___

<a id="qrcodemodel"></a>

### `<Optional>` QrCodeModel

**●  QrCodeModel**:  *`string`* 

*Defined in index.d.ts:263*

Property to be used with the appendQrCode command. Choose the format of the return value defined in StarPRNT.QrCodeModel or the QrCodeModel enum. 'No1' | 'No2' Default 'No2' Example: {appendQrCode:'{BStar', QrCodeModel:QrCodeModel.No1}

___

<a id="absoluteposition"></a>

### `<Optional>` absolutePosition

**●  absolutePosition**:  *`number`* 

*Defined in index.d.ts:235*

Property to be used with the appendBitmap command, the appendBarcode command, or the appendQrCode command (Units:Dots) appendBitmap Example: {appendBitmap:uri, absolutePosition:40}. appendBarcode Example: {appendBarcode:'{BStar', absolutePosition:40}. appendQrCode Example: {appendQrCode:'{BStar', absolutePosition:40}.

___

<a id="alignment"></a>

### `<Optional>` alignment

**●  alignment**:  *`string`* 

*Defined in index.d.ts:243*

Property to be used with the appendBitmap command, the appendBarcode command, or the appendQrCode command (Units:Dots) Choose the format of the return value defined in StarPRNT.AlignmentPosition or the AlignmentPosition enum. 'Left' | 'Center' | 'Right'. appendBitmap Example: {appendBitmap:uri, alignment:AlignmentPosition.Center}. appendBarcode Example: {appendBarcode:'{BStar', alignment:AlignmentPosition.Center}. appendQrCode Example: {appendQrCode:'{BStar', alignment:AlignmentPosition.Center}.

___

<a id="append"></a>

### `<Optional>` append

**●  append**:  *`string`* 

*Defined in index.d.ts:98*

Data (Text and Command) is added to the command buffer. Example: {append:"Star Clothing Boutique\\n123 Star Road\\nCity, State 12345\\n\\n"}

___

<a id="appendabsoluteposition"></a>

### `<Optional>` appendAbsolutePosition

**●  appendAbsolutePosition**:  *`number`* 

*Defined in index.d.ts:161*

Absolute position command is generated and added to the command buffer. (Unit: Dots). Send in conjunction with the data property to append absolute position just to that string Example1: Append data with Absolute position {appendAbsolutePosition:40, data: "Text with absolute position"} Example2: Append absolute position to subsequent commands: {appendAbsolutePosition:40}

___

<a id="appendalignment"></a>

### `<Optional>` appendAlignment

**●  appendAlignment**:  *`string`* 

*Defined in index.d.ts:168*

Alignment command is generated and added to the command buffer. Send in conjunction with the data property to append alignment position just to that string Choose the format of the return value defined in StarPRNT.AlignmentPosition or the AlignmentPosition enum. 'Left' | 'Center' | 'Right'. Example1 Append data with Alignment position: {appendAlignment:AlignmentPosition.Center, data: "Text with centered position"} Example2 Append absolute position to subsequent commands: {appendAlignment:AlignmentPosition.Center}

___

<a id="appendbarcode"></a>

### `<Optional>` appendBarcode

**●  appendBarcode**:  *`string`* 

*Defined in index.d.ts:196*

Print command of the barcode is generated and added to the command buffer. Additional Properties: BarcodeSymbology, BarcodeWidth, height, hri, absolutePosition, alignment. Example: {appendBarcode:"{BStar", BarcodeSymbology:BarcodeSymbology.Code128, BarcodeWidth:BarcodeWidth.Mode2, height:40, hri:true } Example with absolutePosition: {appendBarcode:"{BStar", BarcodeSymbology:BarcodeSymbology.Code128, BarcodeWidth:BarcodeWidth.Mode2, height:40, hri:true, absolutePosition:40 } Example with alignment:{appendBarcode:"{BStar", BarcodeSymbology:BarcodeSymbology.Code128, BarcodeWidth:BarcodeWidth.Mode2, height:40, hri:true, alignment:alignment:AlignmentPosition.Center }

___

<a id="appendbitmap"></a>

### `<Optional>` appendBitmap

**●  appendBitmap**:  *`string`* 

*Defined in index.d.ts:283*

Print command of the bitmap is generated and added to the command buffer. Takes a string image URI this can be obtained via the camera or photo library or as a static resource saved on the phone memory. Additional Properties: diffusion, width, bothScale, rotation, absolutePosition, alignment. Example: {appendBitmap:uri, diffusion: true, width:576, bothScale: true} Example with absolutePosition: {appendBitmap:uri, diffusion: true, width:576, bothScale: true, absolutePosition: 40 }. Example with alignment: {appendBitmap:uri, diffusion: true, width:576, bothScale: true, alignment:"Center" }.

___

<a id="appendblackmark"></a>

### `<Optional>` appendBlackMark

**●  appendBlackMark**:  *`string`* 

*Defined in index.d.ts:155*

Black mark command is generated and added to the command buffer. Choose the format of the return value defined in StarPRNT.BlackMarkType or the BlackMarkType enum. 'Valid' | 'Invalid' | 'ValidWithDetection' Example: {appendBlackMark: BlackMarkType.Valid}

___

<a id="appendcharacterspace"></a>

### `<Optional>` appendCharacterSpace

**●  appendCharacterSpace**:  *`number`* 

*Defined in index.d.ts:106*

Set command of the character space is generated and added to the command buffer. Character Spacs (Unit: Dots) Example: 4

___

<a id="appendcutpaper"></a>

### `<Optional>` appendCutPaper

**●  appendCutPaper**:  *`string`* 

*Defined in index.d.ts:149*

Paper cut command is generated and added to the command buffer. Choose the format of the return value defined in StarPRNT.CutPaperAction or the CutPaperAction enum. 'FullCut' | 'FullCutWithFeed' | 'PartialCut' | 'PartialCutWithFeed' Example: {appendCutPaper:CutPaperAction.PartialCutWithFeed}

___

<a id="appendemphasis"></a>

### `<Optional>` appendEmphasis

**●  appendEmphasis**:  *`string`* 

*Defined in index.d.ts:110*

Select command of the emphasis mode is generated and added to the command buffer. Example: {appendEmphasis:"SALE\\n"}

___

<a id="appendfontstyle"></a>

### `<Optional>` appendFontStyle

**●  appendFontStyle**:  *`string`* 

*Defined in index.d.ts:143*

Select command of the font style is generated and added to the command buffer. Choose the format of the return value defined in StarPRNT.FontStyleType or the FontStyleType enum. 'A' | 'B' Example: {appendFontStyle:FontStyleType.A}

___

<a id="appendhorizontaltabposition"></a>

### `<Optional>` appendHorizontalTabPosition

**●  appendHorizontalTabPosition**:  *`Array`.<`number`>* 

*Defined in index.d.ts:175*

Horizontal tab set/clear command is generated and added to the command buffer. (Only works for certain printer models, check the starSDK documentation for details) Array of horizontal tab positions (Units: ANK character pitch). Specifying empty array deletes all currently set horizontal tab positions. Example: {appendHorizontalTabPosition:\[15, 35\]} Delete positions Example: {appendHorizontalTabPosition:\[\]}

___

<a id="appendinternational"></a>

### `<Optional>` appendInternational

**●  appendInternational**:  *`string`* 

*Defined in index.d.ts:125*

Select command of the international character mode is generated and added to the command buffer. Choose the format of the return value Defined in StarPRNT.InternationalType or the InternationalType enum. 'UK' | 'USA' | 'France' | 'Germany' | 'Denmark' | 'Sweden' | 'Italy' | 'Spain' | 'Japan' | 'Norway' | 'Denmark2' | 'Spain2' | 'LatinAmerica' | 'Korea' | 'Ireland' | 'Legal' Example {appendInternational:InternationalType.UK}

___

<a id="appendinvert"></a>

### `<Optional>` appendInvert

**●  appendInvert**:  *`string`* 

*Defined in index.d.ts:114*

Select command of the invert mode is generated and added to the command buffer. Example: {appendInvert:"Refunds and Exchanges\\n"}

___

<a id="appendlinefeed"></a>

### `<Optional>` appendLineFeed

**●  appendLineFeed**:  *`number`* 

*Defined in index.d.ts:129*

Line feed command is generated and added to the command buffer. Paper feed units (Units: Lines) Example: 2

___

<a id="appendlinespace"></a>

### `<Optional>` appendLineSpace

**●  appendLineSpace**:  *`number`* 

*Defined in index.d.ts:137*

Set command of the line space is generated and added to the command buffer. Line spaces (Units: Dots) Example: 32

___

<a id="appendlogo"></a>

### `<Optional>` appendLogo

**●  appendLogo**:  *`number`* 

*Defined in index.d.ts:182*

Print command of the logo is generated and added to the command buffer. The logo has to be uploaded to the printer using the Star Print utility. Send in conjuction with the logoSize property to set the logo size Example: {appendLogo:1} Example with LogoSize: {appendLogo:1, logoSize:LogoSize.DoubleWidthDoubleHeight}

___

<a id="appendmultiple"></a>

### `<Optional>` appendMultiple

**●  appendMultiple**:  *`string`* 

*Defined in index.d.ts:249*

Select command of the multiple mode is generated and added to the command buffer. Additional properties: width:number, height:number Example: {appendMultiple:" $156.95\\n", width:2, height:2}.

___

<a id="appendqrcode"></a>

### `<Optional>` appendQrCode

**●  appendQrCode**:  *`string`* 

*Defined in index.d.ts:257*

Print command of the QR code is generated and added to the command buffer. Additional Properties: QrCodeModel, QrCodeLevel, cell, absolutePosition, alignment. Example: {appendQrCode:"{BStar", QrCodeModel:"No2", QrCodeLevel:"L", cell: 8}. Example with absolutePosition: {appendQrCode:"{BStar", QrCodeModel:"No2", QrCodeLevel:"L", cell: 8, absolutePosition: 40 }. Example with alignment: {appendQrCode:"{BStar", QrCodeModel:"No2", QrCodeLevel:"L", cell: 8, alignment:"Center" }.

___

<a id="appendraw"></a>

### `<Optional>` appendRaw

**●  appendRaw**:  *`string`* 

*Defined in index.d.ts:102*

Data (Text and Command) is added to the command buffer. Example: {appendRaw:"Star Clothing Boutique\\n123 Star Road\\nCity, State 12345\\n\\n"}

___

<a id="appendunderline"></a>

### `<Optional>` appendUnderline

**●  appendUnderline**:  *`string`* 

*Defined in index.d.ts:118*

Select command of the under line mode is generated and added to the command buffer. Example: {appendUnderline:"30 days"}

___

<a id="appendunitfeed"></a>

### `<Optional>` appendUnitFeed

**●  appendUnitFeed**:  *`number`* 

*Defined in index.d.ts:133*

Unit feed command is generated and added to the command buffer. Paper feed units (Units: Dots) Example: 64

___

<a id="bothscale"></a>

### `<Optional>` bothScale

**●  bothScale**:  *`boolean`* 

*Defined in index.d.ts:294*

Property to be used with the appendBitmap command. Height is changed according to the conversion rate of the width property. true = Valid, false = Invalid. Default true. Example: {appendBitmap:uri, bothScale: true }

___

<a id="cell"></a>

### `<Optional>` cell

**●  cell**:  *`number`* 

*Defined in index.d.ts:274*

Property to be used with the appendQrCode command. QRCode Cell size. Default 4. Example: {appendQrCode:'{BStar', cell:8}

___

<a id="diffusion"></a>

### `<Optional>` diffusion

**●  diffusion**:  *`boolean`* 

*Defined in index.d.ts:288*

Property to be used with the appendBitmap command. Random dither: true = Valid, false = Invalid. Default true. Example: {appendBitmap:uri, diffusion: false }

___

<a id="height"></a>

### `<Optional>` height

**●  height**:  *`number`* 

*Defined in index.d.ts:222*

Property to be used with the appendBarcode command or the appendMultiple command (Units:Dots) appendBarcode Example: {appendBarcode:'{BStar', height:40} appendMultiple: {appendMultiple:'text to print', height:40}

___

<a id="hri"></a>

### `<Optional>` hri

**●  hri**:  *`boolean`* 

*Defined in index.d.ts:216*

Property to be used with the appendBarcode command. Under-bar characters. true = Valid, false = Invalid Example: {appendBarcode:'{BStar', hri:true}

___

<a id="logosize"></a>

### `<Optional>` logoSize

**●  logoSize**:  *`string`* 

*Defined in index.d.ts:188*

Property to be used with the appendLogo command. Choose the format of the return value defined in StarPRNT.LogoSize or the LogoSize enum. 'Normal' | 'DoubleWidth' | 'DoubleHeight' | 'DoubleWidthDoubleHeight'; Example: {appendLogo:1, logoSize:LogoSize.DoubleWidthDoubleHeight}

___

<a id="opencashdrawer"></a>

### `<Optional>` openCashDrawer

**●  openCashDrawer**:  *`number`* 

*Defined in index.d.ts:305*

sends a appendPeripheral command to the printer for channel number: Example: 1 = No1, 2 = No2

___

<a id="rotation"></a>

### `<Optional>` rotation

**●  rotation**:  *`string`* 

*Defined in index.d.ts:301*

Property to be used with the appendBitmap command. Choose the format of the return value defined in StarPRNT.BitmapConverterRotation or the BitmapConverterRotation enum. 'Normal' | 'Left90' | 'Right90' | 'Rotate180' Example: {appendBitmap:uri, rotation: BitmapConverterRotation.Left90 }

___

<a id="width"></a>

### `<Optional>` width

**●  width**:  *`number`* 

*Defined in index.d.ts:228*

Property to be used with the appendBitmap command or the appendMultiple command (Units:Dots) appendBitmap Example: {appendBitmap:uri, width:576} appendMultiple: {appendMultiple:'text to print', width:40}

___

