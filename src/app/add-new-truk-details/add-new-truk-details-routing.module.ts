import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewTrukDetailsPage } from './add-new-truk-details.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewTrukDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewTrukDetailsPageRoutingModule {}
