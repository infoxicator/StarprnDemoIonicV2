[@ionic-native/star-prnt](../README.md) > ["index.d"](../modules/_index_d_.md) > [StarPRNT](../classes/_index_d_.starprnt.md)

# Class: StarPRNT

*__name__*: StarPRNT

*__description__*: *   Ionic Native wrappers for the starprnt cordova plugin for Star Micronics Bluetooth/LAN printers

*__usage__*:     import { StarPRNT } from '@ionic-native/star-prnt';
    
    
    constructor(private starprnt: StarPRNT) { }
    
    ...
    
    
    this.starprnt.portDiscovery('all')
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));

## Hierarchy

 `IonicNativePlugin`

**↳ StarPRNT**

## Index

### Properties

* [AlignmentPosition](_index_d_.starprnt.md#alignmentposition)
* [BarcodeSymbology](_index_d_.starprnt.md#barcodesymbology)
* [BarcodeWidth](_index_d_.starprnt.md#barcodewidth)
* [BitmapConverterRotation](_index_d_.starprnt.md#bitmapconverterrotation)
* [BlackMarkType](_index_d_.starprnt.md#blackmarktype)
* [CodePageType](_index_d_.starprnt.md#codepagetype)
* [CutPaperAction](_index_d_.starprnt.md#cutpaperaction)
* [Emulation](_index_d_.starprnt.md#emulation)
* [Encoding](_index_d_.starprnt.md#encoding)
* [FontStyleType](_index_d_.starprnt.md#fontstyletype)
* [InternationalType](_index_d_.starprnt.md#internationaltype)
* [LogoSize](_index_d_.starprnt.md#logosize)
* [QrCodeLevel](_index_d_.starprnt.md#qrcodelevel)
* [QrCodeModel](_index_d_.starprnt.md#qrcodemodel)
* [install](_index_d_.starprnt.md#install)
* [platforms](_index_d_.starprnt.md#platforms)
* [plugin](_index_d_.starprnt.md#plugin)
* [pluginName](_index_d_.starprnt.md#pluginname)
* [pluginRef](_index_d_.starprnt.md#pluginref)
* [repo](_index_d_.starprnt.md#repo)

### Methods

* [checkStatus](_index_d_.starprnt.md#checkstatus)
* [connect](_index_d_.starprnt.md#connect)
* [disconnect](_index_d_.starprnt.md#disconnect)
* [getStatus](_index_d_.starprnt.md#getstatus)
* [openCashDrawer](_index_d_.starprnt.md#opencashdrawer)
* [portDiscovery](_index_d_.starprnt.md#portdiscovery)
* [print](_index_d_.starprnt.md#print)
* [printImage](_index_d_.starprnt.md#printimage)
* [printRasterReceipt](_index_d_.starprnt.md#printrasterreceipt)
* [printRawText](_index_d_.starprnt.md#printrawtext)
* [getPlugin](_index_d_.starprnt.md#getplugin)
* [getPluginInstallName](_index_d_.starprnt.md#getplugininstallname)
* [getPluginName](_index_d_.starprnt.md#getpluginname)
* [getPluginRef](_index_d_.starprnt.md#getpluginref)
* [getSupportedPlatforms](_index_d_.starprnt.md#getsupportedplatforms)
* [installed](_index_d_.starprnt.md#installed)

---

## Properties

<a id="alignmentposition"></a>

###  AlignmentPosition

**●  AlignmentPosition**:  *`object`* 

*Defined in [index.d.ts:690](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L690)*

Constant for possible AlignmentPosition

#### Type declaration

 Center: `string`

 Left: `string`

 Right: `string`

___

<a id="barcodesymbology"></a>

###  BarcodeSymbology

**●  BarcodeSymbology**:  *`object`* 

*Defined in [index.d.ts:707](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L707)*

Constant for possible BarcodeSymbology

#### Type declaration

 Code128: `string`

 Code39: `string`

 Code93: `string`

 ITF: `string`

 JAN13: `string`

 JAN8: `string`

 NW7: `string`

 UPCA: `string`

 UPCE: `string`

___

<a id="barcodewidth"></a>

###  BarcodeWidth

**●  BarcodeWidth**:  *`object`* 

*Defined in [index.d.ts:721](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L721)*

Constant for possible BarcodeWidth

#### Type declaration

 Mode1: `string`

 Mode2: `string`

 Mode3: `string`

 Mode4: `string`

 Mode5: `string`

 Mode6: `string`

 Mode7: `string`

 Mode8: `string`

 Mode9: `string`

___

<a id="bitmapconverterrotation"></a>

###  BitmapConverterRotation

**●  BitmapConverterRotation**:  *`object`* 

*Defined in [index.d.ts:751](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L751)*

Constant for possible BitmapConverterRotation

#### Type declaration

 Left90: `string`

 Normal: `string`

 Right90: `string`

 Rotate180: `string`

___

<a id="blackmarktype"></a>

###  BlackMarkType

**●  BlackMarkType**:  *`object`* 

*Defined in [index.d.ts:682](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L682)*

Constant for possible BlackMarkType

#### Type declaration

 Invalid: `string`

 Valid: `string`

 ValidWithDetection: `string`

___

<a id="codepagetype"></a>

###  CodePageType

**●  CodePageType**:  *`object`* 

*Defined in [index.d.ts:601](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L601)*

CodePageType constants

#### Type declaration

 Blank: `string`

 CP1001: `string`

 CP1250: `string`

 CP1251: `string`

 CP1252: `string`

 CP2001: `string`

 CP3001: `string`

 CP3002: `string`

 CP3011: `string`

 CP3012: `string`

 CP3021: `string`

 CP3041: `string`

 CP3840: `string`

 CP3841: `string`

 CP3843: `string`

 CP3845: `string`

 CP3846: `string`

 CP3847: `string`

 CP3848: `string`

 CP737: `string`

 CP772: `string`

 CP774: `string`

 CP851: `string`

 CP852: `string`

 CP855: `string`

 CP857: `string`

 CP858: `string`

 CP860: `string`

 CP861: `string`

 CP862: `string`

 CP863: `string`

 CP864: `string`

 CP865: `string`

 CP869: `string`

 CP874: `string`

 CP928: `string`

 CP932: `string`

 CP999: `string`

 UTF8: `string`

___

<a id="cutpaperaction"></a>

###  CutPaperAction

**●  CutPaperAction**:  *`object`* 

*Defined in [index.d.ts:673](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L673)*

Constant for possible CutPaperAction

#### Type declaration

 FullCut: `string`

 FullCutWithFeed: `string`

 PartialCut: `string`

 PartialCutWithFeed: `string`

___

<a id="emulation"></a>

###  Emulation

**●  Emulation**:  *`object`* 

*Defined in [index.d.ts:577](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L577)*

Constant for Emulation

#### Type declaration

 EscPos: `string`

 EscPosMobile: `string`

 StarDotImpact: `string`

 StarGraphic: `string`

 StarLine: `string`

 StarPRNT: `string`

 StarPRNTL: `string`

___

<a id="encoding"></a>

###  Encoding

**●  Encoding**:  *`object`* 

*Defined in [index.d.ts:589](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L589)*

Constant for possible Encoding

#### Type declaration

 Big5: `string`

 GB2312: `string`

 ShiftJIS: `string`

 USASCII: `string`

 UTF8: `string`

 Windows1251: `string`

 Windows1252: `string`

___

<a id="fontstyletype"></a>

###  FontStyleType

**●  FontStyleType**:  *`object`* 

*Defined in [index.d.ts:666](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L666)*

Constant for possible FontStyleType

#### Type declaration

 A: `string`

 B: `string`

___

<a id="internationaltype"></a>

###  InternationalType

**●  InternationalType**:  *`object`* 

*Defined in [index.d.ts:645](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L645)*

Constant for possible InternationalType

#### Type declaration

 Denmark: `string`

 Denmark2: `string`

 France: `string`

 Germany: `string`

 Ireland: `string`

 Italy: `string`

 Japan: `string`

 Korea: `string`

 LatinAmerica: `string`

 Legal: `string`

 Norway: `string`

 Spain: `string`

 Spain2: `string`

 Sweden: `string`

 UK: `string`

 USA: `string`

___

<a id="logosize"></a>

###  LogoSize

**●  LogoSize**:  *`object`* 

*Defined in [index.d.ts:698](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L698)*

Constant for possible LogoSize

#### Type declaration

 DoubleHeight: `string`

 DoubleWidth: `string`

 DoubleWidthDoubleHeight: `string`

 Normal: `string`

___

<a id="qrcodelevel"></a>

###  QrCodeLevel

**●  QrCodeLevel**:  *`object`* 

*Defined in [index.d.ts:742](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L742)*

Constant for possible QrCodeLevel

#### Type declaration

 H: `string`

 L: `string`

 M: `string`

 Q: `string`

___

<a id="qrcodemodel"></a>

###  QrCodeModel

**●  QrCodeModel**:  *`object`* 

*Defined in [index.d.ts:735](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L735)*

Constant for possible QrCodeModel

#### Type declaration

 No1: `string`

 No2: `string`

___

<a id="install"></a>

### `<Static>` install

**●  install**:  *`string`* 

*Inherited from IonicNativePlugin.install*

*Defined in /Users/rcasas/Desktop/cordovaplugins/StarprnDemoIonicV2/node_modules/@ionic-native/core/ionic-native-plugin.d.ts:7*

___

<a id="platforms"></a>

### `<Static>` platforms

**●  platforms**:  *`string`[]* 

*Inherited from IonicNativePlugin.platforms*

*Defined in /Users/rcasas/Desktop/cordovaplugins/StarprnDemoIonicV2/node_modules/@ionic-native/core/ionic-native-plugin.d.ts:6*

___

<a id="plugin"></a>

### `<Static>` plugin

**●  plugin**:  *`string`* 

*Inherited from IonicNativePlugin.plugin*

*Defined in /Users/rcasas/Desktop/cordovaplugins/StarprnDemoIonicV2/node_modules/@ionic-native/core/ionic-native-plugin.d.ts:4*

___

<a id="pluginname"></a>

### `<Static>` pluginName

**●  pluginName**:  *`string`* 

*Inherited from IonicNativePlugin.pluginName*

*Defined in /Users/rcasas/Desktop/cordovaplugins/StarprnDemoIonicV2/node_modules/@ionic-native/core/ionic-native-plugin.d.ts:2*

___

<a id="pluginref"></a>

### `<Static>` pluginRef

**●  pluginRef**:  *`string`* 

*Inherited from IonicNativePlugin.pluginRef*

*Defined in /Users/rcasas/Desktop/cordovaplugins/StarprnDemoIonicV2/node_modules/@ionic-native/core/ionic-native-plugin.d.ts:3*

___

<a id="repo"></a>

### `<Static>` repo

**●  repo**:  *`string`* 

*Inherited from IonicNativePlugin.repo*

*Defined in /Users/rcasas/Desktop/cordovaplugins/StarprnDemoIonicV2/node_modules/@ionic-native/core/ionic-native-plugin.d.ts:5*

___

## Methods

<a id="checkstatus"></a>

###  checkStatus

▸ **checkStatus**(port: *`string`*, emulation: *`string`*): `Promise`.<[PrinterStatus](../interfaces/_index_d_.printerstatus.md)>

*Defined in [index.d.ts:769](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L769)*

Checks the status of the printer

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| port | `string`   |  Printer name i.e BT:StarMicronics |
| emulation | `string`   |  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact" |

**Returns:** `Promise`.<[PrinterStatus](../interfaces/_index_d_.printerstatus.md)>
Returns a promise that resolves with the PrinterStatus object

___

<a id="connect"></a>

###  connect

▸ **connect**(port: *`string`*, emulation: *`string`*): `Observable`.<`any`>

*Defined in [index.d.ts:815](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L815)*

Allows you to connect to the printer, keep the connection alive and receive status updates through an observable

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| port | `string`   |  printer name i.e BT:StarMicronics. |
| emulation | `string`   |  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact" |

**Returns:** `Observable`.<`any`>
Success! if connected or error message string returned by the SDK.

___

<a id="disconnect"></a>

###  disconnect

▸ **disconnect**(): `Promise`.<`any`>

*Defined in [index.d.ts:826](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L826)*

Allows to disconnect (close the connection to the peripherals), this is useful to avoid keeping alive a connection when not in the app to save device battery (energy consumption). You should call this function when the app is paused or closed.

**Returns:** `Promise`.<`any`>
Success! if connected or error message string returned by the SDK.

___

<a id="getstatus"></a>

###  getStatus

▸ **getStatus**(): `Observable`.<`any`>

*Defined in [index.d.ts:820](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L820)*

Returns an observable with the device status events. Only fires when a printer is connnected through the connect() function

**Returns:** `Observable`.<`any`>
dataType: printerOnline, printerOffline, printerImpossible, printerPaperEmpty, printerPaperNearEmpty, printerPaperReady, printerCoverOpen, printerCoverClose, cashDrawerOpen, cashDrawerClose

___

<a id="opencashdrawer"></a>

###  openCashDrawer

▸ **openCashDrawer**(port: *`string`*, emulation: *`string`*): `Promise`.<`any`>

*Defined in [index.d.ts:800](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L800)*

sends an appendPeripheral command to the printer for channels No1 and No2

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| port | `string`   |  Printer name i.e BT:StarMicronics. Send null to use a printer connected via StarIOExtManager using the connect() function |
| emulation | `string`   |  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact" |

**Returns:** `Promise`.<`any`>
Success! if opened or error message string returned by the SDK.

___

<a id="portdiscovery"></a>

###  portDiscovery

▸ **portDiscovery**(type: *`string`*): `Promise`.<[Printers](../interfaces/_index_d_.printers.md)>

*Defined in [index.d.ts:762](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L762)*

Find available printers

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| type | `string`   |  Interface Type: All, LAN, Bluetooth, USB |

**Returns:** `Promise`.<[Printers](../interfaces/_index_d_.printers.md)>
Returns a promise that resolves with an array of printers

___

<a id="print"></a>

###  print

▸ **print**(port: *`string`*, emulation: *`string`*, commandsArray: *[CommandsArray](../interfaces/_index_d_.commandsarray.md)*): `Promise`.<`any`>

*Defined in [index.d.ts:808](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L808)*

Sends an Array of commands to the command buffer using the Android ICommandBuilderInterface or iOS ISCBBuilderInterface

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| port | `string`   |  Printer name i.e BT:StarMicronics. Send null to use a printer connected via StarIOExtManager using the connect() function |
| emulation | `string`   |  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact" |
| commandsArray | [CommandsArray](../interfaces/_index_d_.commandsarray.md)   |  each command in the array should be an instance of the PrintCommand object. Example \[{append:"text"}, {"openCashDrawer: 1"}\] |

**Returns:** `Promise`.<`any`>
Success! if printed correctly or error message string returned by the SDK.

___

<a id="printimage"></a>

###  printImage

▸ **printImage**(port: *`string`*, emulation: *`string`*, imageObj: *[ImageObj](../interfaces/_index_d_.imageobj.md)*): `Promise`.<`any`>

*Defined in [index.d.ts:793](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L793)*

Gets an image from a string URI and converts it to bitmap to send it to the printer

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| port | `string`   |  Printer name i.e BT:StarMicronics. Send null to use a printer connected via StarIOExtManager using the connect() function |
| emulation | `string`   |  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact" |
| imageObj | [ImageObj](../interfaces/_index_d_.imageobj.md)   |  uri:string, paperWidth?:number, cutReceipt?:boolean, openCashDrawer?:boolean |

**Returns:** `Promise`.<`any`>
Success! if printed correctly or error message string returned by the SDK.

___

<a id="printrasterreceipt"></a>

###  printRasterReceipt

▸ **printRasterReceipt**(port: *`string`*, emulation: *`string`*, rasterObj: *[RasterObj](../interfaces/_index_d_.rasterobj.md)*): `Promise`.<`any`>

*Defined in [index.d.ts:785](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L785)*

Converts the text into a bitmap image and sends it to the printer

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| port | `string`   |  Printer name i.e BT:StarMicronics. Send null to use a printer connected via StarIOExtManager using the connect() function |
| emulation | `string`   |  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact" |
| rasterObj | [RasterObj](../interfaces/_index_d_.rasterobj.md)   |  text:string, cutReceipt?:boolean, openCashDrawer?:boolean, fontSize:number, paperWidth:number |

**Returns:** `Promise`.<`any`>
Success! if printed correctly or error message string returned by the SDK.

___

<a id="printrawtext"></a>

###  printRawText

▸ **printRawText**(port: *`string`*, emulation: *`string`*, printObj: *[PrintObj](../interfaces/_index_d_.printobj.md)*): `Promise`.<`any`>

*Defined in [index.d.ts:777](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L777)*

Prints plain text

**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| port | `string`   |  Printer name i.e BT:StarMicronics. Send null to use a printer connected via StarIOExtManager using the connect() function |
| emulation | `string`   |  StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact" |
| printObj | [PrintObj](../interfaces/_index_d_.printobj.md)   |  text:string, cutReceipt?:boolean, openCashDrawer?:boolean |

**Returns:** `Promise`.<`any`>
Success! if printed correctly or error message string returned by the SDK.

___

<a id="getplugin"></a>

### `<Static>` getPlugin

▸ **getPlugin**(): `any`

*Inherited from IonicNativePlugin.getPlugin*

*Defined in /Users/rcasas/Desktop/cordovaplugins/StarprnDemoIonicV2/node_modules/@ionic-native/core/ionic-native-plugin.d.ts:16*

Returns the original plugin object

**Returns:** `any`

___

<a id="getplugininstallname"></a>

### `<Static>` getPluginInstallName

▸ **getPluginInstallName**(): `string`

*Inherited from IonicNativePlugin.getPluginInstallName*

*Defined in /Users/rcasas/Desktop/cordovaplugins/StarprnDemoIonicV2/node_modules/@ionic-native/core/ionic-native-plugin.d.ts:28*

Returns the plugin's install name

**Returns:** `string`

___

<a id="getpluginname"></a>

### `<Static>` getPluginName

▸ **getPluginName**(): `string`

*Inherited from IonicNativePlugin.getPluginName*

*Defined in /Users/rcasas/Desktop/cordovaplugins/StarprnDemoIonicV2/node_modules/@ionic-native/core/ionic-native-plugin.d.ts:20*

Returns the plugin's name

**Returns:** `string`

___

<a id="getpluginref"></a>

### `<Static>` getPluginRef

▸ **getPluginRef**(): `string`

*Inherited from IonicNativePlugin.getPluginRef*

*Defined in /Users/rcasas/Desktop/cordovaplugins/StarprnDemoIonicV2/node_modules/@ionic-native/core/ionic-native-plugin.d.ts:24*

Returns the plugin's reference

**Returns:** `string`

___

<a id="getsupportedplatforms"></a>

### `<Static>` getSupportedPlatforms

▸ **getSupportedPlatforms**(): `string`[]

*Inherited from IonicNativePlugin.getSupportedPlatforms*

*Defined in /Users/rcasas/Desktop/cordovaplugins/StarprnDemoIonicV2/node_modules/@ionic-native/core/ionic-native-plugin.d.ts:32*

Returns the plugin's supported platforms

**Returns:** `string`[]

___

<a id="installed"></a>

### `<Static>` installed

▸ **installed**(): `boolean`

*Inherited from IonicNativePlugin.installed*

*Defined in /Users/rcasas/Desktop/cordovaplugins/StarprnDemoIonicV2/node_modules/@ionic-native/core/ionic-native-plugin.d.ts:12*

Returns a boolean that indicates whether the plugin is installed

**Returns:** `boolean`

___

