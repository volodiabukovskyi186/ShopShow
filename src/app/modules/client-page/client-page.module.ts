import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPageRoutingModule } from './client-page-routing.module';
import { UiModule } from '../ui/ui.module';
import { ClientPagePageComponent } from './client-page-page/client-page-page.component';



@NgModule({
  declarations: [ClientPagePageComponent],
  imports: [
    CommonModule,
    UiModule,
    ClientPageRoutingModule
  ]
})
export class ClientPageModule { }
