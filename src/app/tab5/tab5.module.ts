import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { IonicModule } from '@ionic/angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Tab5PageRoutingModule } from './tab5-routing.module';

import { Tab5Page } from './tab5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab5PageRoutingModule,
    MatButtonToggleModule,
    NgMultiSelectDropDownModule
  ],
  declarations: [Tab5Page]
})
export class Tab5PageModule {}
