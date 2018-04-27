[@ionic-native/star-prnt](../README.md) > ["index.d"](../modules/_index_d_.md) > [PrintObj](../interfaces/_index_d_.printobj.md)

# Interface: PrintObj

## Hierarchy

**PrintObj**

↳  [RasterObj](_index_d_.rasterobj.md)

## Index

### Properties

* [cutReceipt](_index_d_.printobj.md#cutreceipt)
* [openCashDrawer](_index_d_.printobj.md#opencashdrawer)
* [text](_index_d_.printobj.md#text)

---

## Properties

<a id="cutreceipt"></a>

### `<Optional>` cutReceipt

**●  cutReceipt**:  *`boolean`* 

*Defined in [index.d.ts:60](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L60)*

Sends a PartialCutWithFeed command to the printer, defaults to true

___

<a id="opencashdrawer"></a>

### `<Optional>` openCashDrawer

**●  openCashDrawer**:  *`boolean`* 

*Defined in [index.d.ts:64](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L64)*

sends a appendPeripheral command to the printer for channels No1 and No2 - Defaults to true

___

<a id="text"></a>

###  text

**●  text**:  *`string`* 

*Defined in [index.d.ts:56](https://github.com/infoxicator/StarprnDemoIonicV2/blob/985c5ea/star-prnt/index.d.ts#L56)*

string containing the text to print, Example: "Star Clothing Boutique\\n123 Star Road\\nCity, State 12345\\n\\n"

___

