import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search/search.component';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule} from '@angular/router';
import {ClickOutsideModule} from 'ng-click-outside';


@NgModule({
    declarations: [SearchComponent],
    exports: [SearchComponent],
    imports: [
        CommonModule,
        TranslateModule,
        RouterModule,
        ClickOutsideModule
    ]
})
export class SearchModule {
}
