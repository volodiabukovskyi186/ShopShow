import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowuHomeRoutingModule } from './showu-home-routing.module';
import { ShowuHomePageComponent } from './showu-home-page/showu-home-page.component';
import { CoreModule } from '../core/core.module';
import { UiModule } from '../ui/ui.module';
import { TranslateModule } from '@ngx-translate/core';
import { CollectionModule } from '../collection/collection.module';
import { WelcomeStatisticComponent } from './welcome-statistic/welcome-statistic.component';
import { ReviewModule } from '../review/review.module';
import { ManufacturersModule } from '../manufacturers/manufacturers.module';
import { ProductModule } from '../product/product.module';
import { SallersModule } from '../sallers/sallers.module';
import {NotFoundModule} from '../not-found/not-found.module';
import {SalesModule} from '../sales/sales.module';


@NgModule({
  declarations: [ShowuHomePageComponent, WelcomeStatisticComponent],
  imports: [
    CommonModule,
    ShowuHomeRoutingModule,
    CoreModule,
    UiModule,
    TranslateModule,
    CollectionModule,
    ReviewModule,
    ManufacturersModule,
    ProductModule,
    SalesModule,
    SallersModule,
    NotFoundModule
  ]
})
export class ShowuHomeModule { }
