import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PortalItemsPage } from './portalitems.page';

import { PortalItemsPageRoutingModule } from './portalitems-routing.module';


@NgModule({
     imports: [CommonModule, FormsModule, IonicModule, PortalItemsPageRoutingModule ],
     declarations: [PortalItemsPage]
})
export class PortalItemsPageModule {}
