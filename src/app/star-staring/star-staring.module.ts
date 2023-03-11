import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StarStaringPageRoutingModule } from './star-staring-routing.module';

import { StarStaringPage } from './star-staring.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarStaringPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StarStaringPage]
})
export class StarStaringPageModule {}
