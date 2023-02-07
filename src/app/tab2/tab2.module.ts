import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';

import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
