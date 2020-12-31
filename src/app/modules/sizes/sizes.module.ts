import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeBarComponent } from './size-bar/size-bar.component';



@NgModule({
    declarations: [SizeBarComponent],
    exports: [
        SizeBarComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SizesModule { }
