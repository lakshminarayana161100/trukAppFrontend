import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AddTrucksPageRoutingModule } from './add-trucks-routing.module';

import { AddTrucksPage } from './add-trucks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddTrucksPageRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    ReactiveFormsModule
  ],
  declarations: [AddTrucksPage]
})
export class AddTrucksPageModule {}
