
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';

/**
 * @name Starprnt
 * @description
 * Ionic Native wrappers for the starprnt cordova plugin for Star Micronics bluetooth/LAN printers
 *
 * @usage
 * ```typescript
 * import { Starprnt } from '@ionic-native/starprnt';
 *
 *
 * constructor(private starprnt: Starprnt) { }
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
@Plugin({
  pluginName: 'StarPRNT',
  plugin: 'cordova-plugin-starprnt', // npm package name, example: cordova-plugin-camera
  pluginRef: 'StarPRNT', // the variable reference to call the plugin, example: navigator.geolocation
  repo: 'https://github.com/infoxicator/starprnt', // the github repository URL for the plugin
  install: '', // OPTIONAL install command, in case the plugin requires variables
  installVariables: [], // OPTIONAL the plugin requires variables
  platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
})
@Injectable()
export class Starprnt extends IonicNativePlugin {

  /**
   * Returns an array of available printers
   * @param type {string} Iterface Type: All, LAN, Bluetooth, USB
   * @return {Promise<any>} Returns a promise that resolves with an array of available printers
   */
  @Cordova()
  portDiscovery(type: string): Promise<any> {
    return;
  }
   /**
   * Checks the status of the printer 
   * @param port {string} Port(printer name)
   * @param emulation {string} StarPrinter Emulation type: "StarPRNT", "StarPRNTL", "StarLine", "StarGraphic", "EscPos", "EscPosMobile", "StarDotImpact"
   * @return {Promise<any>} Returns a promise that resolves with the printer status object
   */
  @Cordova()
  checkStatus(port: string, emulation: string): Promise<any> {
    return;
  }

}
