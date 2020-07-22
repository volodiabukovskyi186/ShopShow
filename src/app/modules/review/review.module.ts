import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReviewListComponent } from "./review-list/review-list.component";
import { ReviewCardComponent } from "./review-card/review-card.component";
import { UiModule } from "../ui/ui.module";
import { RewiewBlockComponent } from "./rewiew-block/rewiew-block.component";
import { TranslateModule } from '@ngx-translate/core';

const components = [
  ReviewListComponent,
  ReviewCardComponent,
  RewiewBlockComponent,
];

@NgModule({
  declarations: [...components],
  exports: [...components],
  imports: [CommonModule, UiModule, TranslateModule],
})
export class ReviewModule {}
