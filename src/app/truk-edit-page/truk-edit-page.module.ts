import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { TrukEditPagePageRoutingModule } from './truk-edit-page-routing.module';

import { TrukEditPagePage } from './truk-edit-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrukEditPagePageRoutingModule,
    NgMultiSelectDropDownModule,
    ReactiveFormsModule
  ],
  declarations: [TrukEditPagePage]
})
export class TrukEditPagePageModule {}
