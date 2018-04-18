import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarIoExtManagerPage } from './star-io-ext-manager';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    StarIoExtManagerPage,    
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(StarIoExtManagerPage),
  ],
  entryComponents:[
    StarIoExtManagerPage
  ]

})
export class StarIoExtManagerPageModule {}
