import { Component, OnInit } from "@angular/core";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { CollectionService } from "src/app/modules/collection/collection.service";
// import { NgxUiLoaderService } from "ngx-ui-loader";

@Component({
  selector: "app-collection-page",
  templateUrl: "./collection-page.component.html",
  styleUrls: ["./collection-page.component.scss"],
})
export class CollectionPageComponent implements OnInit {
  breadcrumbs: Array<NavLink> = [
    {
      link: "/",
      title: "Homepage",
    },
    {
      link: "collection",
      title: "Collection",
    },
  ];

  constructor(
    // private ngxService: NgxUiLoaderService,
    public collection: CollectionService
  ) {}

  ngOnInit(): void {
    this.collection.get().subscribe(this.collectionHandler);
  }

  collectionHandler = (data) => {
    this.collection.list = data.data;
    // this.ngxService.stopAll();
  };
}
