import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import  {FormsModule} from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatCardModule} from '@angular/material/card';

import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

//import { HasRoleDirective } from './directives/has-role.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
@NgModule({
  declarations: [AppComponent, 
   // HasRoleDirective
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,BrowserAnimationsModule,MatExpansionModule,NgMultiSelectDropDownModule.forRoot(),MatMenuModule,MatCardModule,MatIconModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },FormsModule,CommonModule,ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
