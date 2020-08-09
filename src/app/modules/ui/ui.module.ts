import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShowUModule } from "./show-u/show-u.module";
import { RapModule } from './rap/rap.module';
import { DynamicFormModule } from './dynamic-form/dynamic-form.module';
import { TranslateModule } from "@ngx-translate/core";

import { FilterComponent } from '../filter/filter.component';
import { FilterItemComponent } from '../filter/filter-item/filter-item.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { Ng5SliderModule } from 'ng5-slider';

const COMPONENTS = [ FilterComponent, FilterItemComponent ];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule, 
    DynamicFormModule,
    TranslateModule,
    MatCheckboxModule,
    MatSliderModule,
    Ng5SliderModule,
  ],
  exports: [...COMPONENTS, ShowUModule, RapModule, DynamicFormModule]
})
export class UiModule {}
