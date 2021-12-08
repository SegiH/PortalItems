import { Component } from '@angular/core';
import { DataService } from '../dataService.service';

@Component({
     selector: 'app-portalitems',
     templateUrl: 'portalitems.page.html',
     styleUrls: ['portalitems.page.scss'],
})
export class PortalItemsPage {     
     items: [];

     ngOnInit(){ }

     constructor(private dataService: DataService) {
          this.getItems(null);
     }

     async getItems(event) { // event is provided when pull to refresh is initiated so pull to refresh can be marked as completed
          const authParam = this.dataService.getAuthParam();
     
          if (await authParam == '' || authParam == null) {
               this.items=[];

               alert("Please set the Auth key");               

               if (event != null)
                    event.target.complete();

               return;
          } else {
               this.dataService.getItems().subscribe((response) => {
                    this.items=response;

                    if (event != null)
                         event.target.complete();
               },
               error => {
                    alert(`An error occurred getting the items with the error ${error.error}`)
               });
          }
     }
}