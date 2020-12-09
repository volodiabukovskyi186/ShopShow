import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { Ng5SliderModule } from 'ng5-slider';
import { SalesRoutingModule } from './sales-routing.module';
import { UiModule } from "../ui/ui.module";
import { SalesComponent } from './sales/sales.component';
import {ProductModule} from '../product/product.module';

@NgModule({
  declarations: [SalesComponent],
  imports: [
    UiModule,
    CommonModule,
    SalesRoutingModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatSliderModule,
    Ng5SliderModule,
    TranslateModule,
    ProductModule
  ]
})
export class SalesModule { }
