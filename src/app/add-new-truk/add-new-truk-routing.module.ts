import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewTrukPage } from './add-new-truk.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewTrukPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewTrukPageRoutingModule {}
