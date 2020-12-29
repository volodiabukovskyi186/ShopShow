import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionCheckboxComponent } from './option-checkbox/option-checkbox.component';
import { OptionCheckboxItemComponent } from './option-checkbox-item/option-checkbox-item.component';



@NgModule({
  declarations: [OptionCheckboxComponent, OptionCheckboxItemComponent],
  exports: [
    OptionCheckboxComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OptionModule { }
