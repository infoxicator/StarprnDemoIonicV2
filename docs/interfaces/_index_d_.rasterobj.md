[@ionic-native/star-prnt](../README.md) > ["index.d"](../modules/_index_d_.md) > [RasterObj](../interfaces/_index_d_.rasterobj.md)

# Interface: RasterObj

## Hierarchy

 [PrintObj](_index_d_.printobj.md)

**↳ RasterObj**

## Index

### Properties

* [cutReceipt](_index_d_.rasterobj.md#cutreceipt)
* [fontSize](_index_d_.rasterobj.md#fontsize)
* [openCashDrawer](_index_d_.rasterobj.md#opencashdrawer)
* [paperWidth](_index_d_.rasterobj.md#paperwidth)
* [text](_index_d_.rasterobj.md#text)

---

## Properties

<a id="cutreceipt"></a>

### `<Optional>` cutReceipt

**●  cutReceipt**:  *`boolean`* 

*Inherited from [PrintObj](_index_d_.printobj.md).[cutReceipt](_index_d_.printobj.md#cutreceipt)*

*Defined in [index.d.ts:60](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L60)*

Sends a PartialCutWithFeed command to the printer, defaults to true

___

<a id="fontsize"></a>

### `<Optional>` fontSize

**●  fontSize**:  *`number`* 

*Defined in [index.d.ts:70](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L70)*

Font size number, defaults to 25

___

<a id="opencashdrawer"></a>

### `<Optional>` openCashDrawer

**●  openCashDrawer**:  *`boolean`* 

*Inherited from [PrintObj](_index_d_.printobj.md).[openCashDrawer](_index_d_.printobj.md#opencashdrawer)*

*Defined in [index.d.ts:64](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L64)*

sends a appendPeripheral command to the printer for channels No1 and No2 - Defaults to true

___

<a id="paperwidth"></a>

### `<Optional>` paperWidth

**●  paperWidth**:  *`number`* 

*Defined in [index.d.ts:74](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L74)*

Paper width (Units: Dots). 2 inches: 384, 3 inches: 576, 4 inches: 832, ESCPos 3 inches: 512, Dot 3 inches: 210. Defaults to 576

___

<a id="text"></a>

###  text

**●  text**:  *`string`* 

*Inherited from [PrintObj](_index_d_.printobj.md).[text](_index_d_.printobj.md#text)*

*Defined in [index.d.ts:56](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L56)*

string containing the text to print, Example: "Star Clothing Boutique\\n123 Star Road\\nCity, State 12345\\n\\n"

___

