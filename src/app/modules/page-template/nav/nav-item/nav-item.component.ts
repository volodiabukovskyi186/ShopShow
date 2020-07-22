import { Component, OnInit, Input } from "@angular/core";
import { slideTop, fade } from "src/app/modules/ui/animations";

export interface INavItem {
  id: number;
  link?: string;
  name: string;
  lang: object;
  sub: Array<INavItem>;
  image?: {
    src: string;
    src_mini: string;
  };
}

@Component({
  animations: [fade],
  selector: "app-nav-item",
  templateUrl: "./nav-item.component.html",
  styleUrls: ["./nav-item.component.scss"],
})
export class NavItemComponent implements OnInit {
  active: boolean = false;

  @Input() value: INavItem;
  constructor() {}

  ngOnInit(): void {}
}
