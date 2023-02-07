import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewTrukPageRoutingModule } from './add-new-truk-routing.module';

import { AddNewTrukPage } from './add-new-truk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewTrukPageRoutingModule
  ],
  declarations: [AddNewTrukPage]
})
export class AddNewTrukPageModule {}
