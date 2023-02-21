import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExistingLoadPage } from './existing-load.page';

const routes: Routes = [
  {
    path: '',
    component: ExistingLoadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExistingLoadPageRoutingModule {}
