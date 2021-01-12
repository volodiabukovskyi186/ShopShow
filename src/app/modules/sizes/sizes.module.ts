import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeBarComponent } from './size-bar/size-bar.component';
import {TranslateModule} from '@ngx-translate/core';



@NgModule({
    declarations: [SizeBarComponent],
    exports: [
        SizeBarComponent
    ],
    imports: [
        CommonModule,
        TranslateModule
    ]
})
export class SizesModule { }
