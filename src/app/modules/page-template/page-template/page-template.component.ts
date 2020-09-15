import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppLangService } from "../../core/app-lang.service";
import { ClientMenuService } from "../../client-menu/client-menu.service";
import { CategoryService } from '../../category/category.service';

@Component({
  selector: "app-page-template",
  templateUrl: "./page-template.component.html",
  styleUrls: ["./page-template.component.scss"],
})
export class PageTemplateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public appLang: AppLangService,
    public clientMenu: ClientMenuService,
    public category: CategoryService,
  ) {}
  ngOnInit(): void {
    this.routeSetLang();
  }
  getClientMenus(l: string = this.appLang.current) {
    this.clientMenu.getMain(l).subscribe(this.getClientMenuMainHandler);
    this.clientMenu.getHelp(l).subscribe(this.getClientMenuHelpHandler);
    this.clientMenu.getShop(l).subscribe(this.getClientMenuShopHandler);
  }
  getCategory(l: string = this.appLang.current) {
    this.category.get(l).subscribe(this.getCategoryHandler);
  }
  getCategoryHandler = (data) => {
    this.category.list = data.data;
  };
  getClientMenuMainHandler = (data) => {
    this.clientMenu.listMain = data.data;
  };
  getClientMenuHelpHandler = (data) => {
    this.clientMenu.listHelp = data.data;
  };
  getClientMenuShopHandler = (data) => {
    this.clientMenu.listShop = data.data;
  };

  routeSetLang() {
    this.route.params.subscribe(this.routeSetLangHandler);
  }

  routeSetLangHandler = (data) => {
    // set lang
    let lang = data["lang"];
    // console.log("LANG IN PageTemplate! ", lang);

    if (lang) this.appLang.use(data["lang"]);
    this.getClientMenus(lang);
    this.getCategory(lang);
  };
}
