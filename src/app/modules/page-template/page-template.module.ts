import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PageTemplateRoutingModule } from "./page-template-routing.module";
import { PageTemplateComponent } from "./page-template/page-template.component";

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
import { ClickOutsideModule } from "ng-click-outside";
import { CallbackDialogComponent } from '../dialogs/callback-dialog/callback-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {FooterSubscribeDialogComponent} from '../dialogs/footer-subscribe-dialog/footer-subscribe-dialog.component';
import {NotFoundModule} from '../not-found/not-found.module';
// import { FooterSubscribeDialogComponent } from './modules/dialogs/footer-subscribe-dialog/footer-subscribe-dialog.component';
@NgModule({
  declarations: [
    PageTemplateComponent,
    TopPanelComponent,
    FooterComponent,
    NavComponent,
    NavItemComponent,
    MenuSubItemComponent,
    MenuItemComponent,
    HeaderComponent,
    NavListComponent,
    CallbackDialogComponent,
    FooterSubscribeDialogComponent

  ],
  imports: [
    CommonModule,
    PageTemplateRoutingModule,
    UiModule,
    TranslateModule,
    AccauntModule,
    SearchModule,
    CartModule,
    ClickOutsideModule,
    FormsModule,
    ReactiveFormsModule,
    NotFoundModule
  ],
})
export class PageTemplateModule {}
