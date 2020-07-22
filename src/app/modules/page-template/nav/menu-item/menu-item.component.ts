import {
  Component,
  OnInit,
  Input,
  HostBinding,
  Output,
  EventEmitter,
  HostListener,
} from "@angular/core";
import { fade } from "src/app/modules/ui/animations";
import { INavItem } from "../nav-item/nav-item.component";
import { environment } from "src/environments/environment";

@Component({
  animations: [fade],
  selector: "showu-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.scss"],
})
export class MenuItemComponent implements OnInit {
  @HostBinding("class.active")
  private _active: boolean = false;
  @Output() activeChange = new EventEmitter();

  set active(val: boolean) {
    this._active = val;
    this.activeChange.emit(this._active);
  }

  @Input() get active(): boolean {
    return this._active;
  }

  @Input() host = environment.hoststatic;
  @Input() value: INavItem;

  constructor() {}

  ngOnInit(): void {}
}
