import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import {RapModule} from '../ui/rap/rap.module';


@NgModule({
  declarations: [BlogPageComponent, BlogItemComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    RapModule,

  ]
})
export class BlogModule { }
