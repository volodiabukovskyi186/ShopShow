import { Component, OnInit } from "@angular/core";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { ActivatedRoute } from "@angular/router";
// import { NgxUiLoaderService } from "ngx-ui-loader";
import { ClientPageService } from "src/app/modules/client-page/client-page.service";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "app-client-page-page",
  templateUrl: "./client-page-page.component.html",
  styleUrls: ["./client-page-page.component.scss"],
})
export class ClientPagePageComponent implements OnInit {
  alias: string = null;

  breadcrumbs: Array<NavLink>;

  constructor(
    private route: ActivatedRoute,
    // private ngxService: NgxUiLoaderService,
    public clientPage: ClientPageService,

    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.initBreadcrumbs();

    this.route.params.subscribe((data) => {
      this.alias = data["alias"];
      this.getByAlias();
    });
  }

  getByAlias() {
    // this.ngxService.start();
    this.clientPage.getByAlias(this.alias).subscribe(this.getByAliasHandler);
  }

  getByAliasHandler = (data) => {
    // this.ngxService.stopAll();
    this.clientPage.page = data.data;
    this.updateMeta();
    this.updateBreadcrumbs();
  };

  initBreadcrumbs() {
    this.breadcrumbs = [
      {
        link: "/",
        title: "Homepage",
      },
    ];
  }

  updateBreadcrumbs() {
    this.initBreadcrumbs();
    this.breadcrumbs.push({
      link: `/page/${this.clientPage.page.alias}`,
      title: this.clientPage.page?.description?.title,
    });
  }

  updateMeta() {
    let title = this.clientPage.page?.description?.title + ` | ShowU`;
    let desc = this.clientPage.page?.description?.meta_description;
    let keys = this.clientPage.page?.description?.meta_keywords;
    this.title.setTitle(title);
    this.meta.updateTag({ name: "description", content: desc });
    this.meta.updateTag({ name: "keywords", content: keys });
  }
}
