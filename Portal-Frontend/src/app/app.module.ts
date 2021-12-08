import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataService } from './dataService.service';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
     declarations: [AppComponent],
     entryComponents: [],
     imports: [BrowserModule, FormsModule, HttpClientModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule],
     providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DataService],
     bootstrap: [AppComponent],
})
export class AppModule {}
