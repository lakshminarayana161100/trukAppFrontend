import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IonicModule } from '@ionic/angular';


import { AddNewTrukDetailsPageRoutingModule } from './add-new-truk-details-routing.module';

import { AddNewTrukDetailsPage } from './add-new-truk-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewTrukDetailsPageRoutingModule,
    NgMultiSelectDropDownModule
  ],
  declarations: [AddNewTrukDetailsPage]
})
export class AddNewTrukDetailsPageModule {}
