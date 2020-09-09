import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileFilterComponent } from './mobile-filter/mobile-filter.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import { FilterItemComponent } from './filter-item/filter-item.component';

@NgModule({
    declarations: [MobileFilterComponent],
    exports: [
        MobileFilterComponent
    ],
    imports: [
        CommonModule,
        MatCheckboxModule
    ]
})
export class FilterModule { }
