import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarStaringPage } from './star-staring.page';

const routes: Routes = [
  {
    path: '',
    component: StarStaringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarStaringPageRoutingModule {}
