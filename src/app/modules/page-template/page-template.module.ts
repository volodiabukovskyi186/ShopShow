import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageTemplateRoutingModule } from "./page-template-routing.module";
import { PageTemplateComponent } from "./page-template/page-template.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { UiModule } from "../ui/ui.module";
import { TopPanelComponent } from "./top-panel/top-panel.component";
import { FooterComponent } from "./footer/footer.component";
import { TranslateModule } from "@ngx-translate/core";
import { NavComponent } from "./nav/nav.component";
import { NavItemComponent } from "./nav/nav-item/nav-item.component";
import { MenuSubItemComponent } from "./nav/menu-sub-item/menu-sub-item.component";
import { MenuItemComponent } from "./nav/menu-item/menu-item.component";
import { HeaderComponent } from "./header/header.component";
import { AccauntModule } from "../accaunt/accaunt.module";
import { CartModule } from '../cart/cart.module';
import { SearchModule } from '../search/search.module';
import { NavListComponent } from './nav/nav-list/nav-list.component';

@NgModule({
  declarations: [
    PageTemplateComponent,
    NotFoundComponent,
    TopPanelComponent,
    FooterComponent,
    NavComponent,
    NavItemComponent,
    MenuSubItemComponent,
    MenuItemComponent,
    HeaderComponent,
    NavListComponent,
  ],
  imports: [
    CommonModule,
    PageTemplateRoutingModule,
    UiModule,
    TranslateModule,
    AccauntModule,
    SearchModule,
    CartModule
  ],
})
export class PageTemplateModule {}
