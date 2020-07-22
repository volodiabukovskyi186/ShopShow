import { Component, OnInit } from "@angular/core";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
// import { NgxUiLoaderService } from "ngx-ui-loader";
import { CollectionService } from "src/app/modules/collection/collection.service";
import { ActivatedRoute } from "@angular/router";
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-collection-view-page",
  templateUrl: "./collection-view-page.component.html",
  styleUrls: ["./collection-view-page.component.scss"],
})
export class CollectionViewPageComponent implements OnInit {
  breadcrumbs: Array<NavLink> = [
    {
      link: "/",
      title: "Homepage",
    },
    {
      link: "collections",
      title: "Collections",
    },
  ];

  id: number = 0;

  constructor(
    // private ngxService: NgxUiLoaderService,
    public collection: CollectionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      this.id = data["id"];
      // this.ngxService.start();
      this.collection.getBy(this.id).subscribe(this.collectionHandler);
    });
  }

  host = environment.hoststatic;

  collectionHandler = (data) => {
    // this.ngxService.stopAll();
    this.collection.item = data.data;

    this.breadcrumbs.push({
      link: `collections/${this.id}`,
      title: this.collection.item.description?.title,
    });
  };
}
