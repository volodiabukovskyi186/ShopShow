import { Component, OnInit, Input } from "@angular/core";
import { INavItem } from "../nav-item/nav-item.component";
import { fade } from 'src/app/modules/ui/animations';

@Component({
  animations: [fade],
  selector: "showu-menu-sub-item",
  templateUrl: "./menu-sub-item.component.html",
  styleUrls: ["./menu-sub-item.component.scss"],
})
export class MenuSubItemComponent implements OnInit {
  active: boolean = true;

  @Input() value: INavItem;

  constructor() {}

  ngOnInit(): void {}
}
