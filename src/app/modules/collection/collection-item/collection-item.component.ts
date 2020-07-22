import { Component, OnInit, Input } from "@angular/core";
import { environment } from 'src/environments/environment';

type Ratio = "imax" | "square" | "r3x1";


@Component({
  selector: "app-collection-item",
  templateUrl: "./collection-item.component.html",
  styleUrls: ["./collection-item.component.scss"],
})
export class CollectionItemComponent implements OnInit {
  @Input() item: any;
  @Input() buttonText: string = "View";
  @Input() routerLinks: Array<string> = [];
  @Input() ratio: Ratio = "imax";

  @Input() host = environment.hoststatic;

  constructor() {}

  ngOnInit(): void {}

  public get routerLinksWithId(): Array<string> {
    return this.item.id != null
      ? [...this.routerLinks, this.item.id]
      : this.routerLinks;
  }
}
