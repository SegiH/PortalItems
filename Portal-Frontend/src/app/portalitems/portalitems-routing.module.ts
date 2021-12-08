import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalItemsPage } from './portalitems.page';

const routes: Routes = [
  {
     path: '',
     component: PortalItemsPage,
  }
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule]
})
export class PortalItemsPageRoutingModule {}
