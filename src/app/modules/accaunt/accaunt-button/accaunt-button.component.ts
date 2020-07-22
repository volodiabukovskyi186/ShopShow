import { Component, OnInit, Input } from "@angular/core";
import { fadeHeight } from "../../ui/animations";

@Component({
  animations: [fadeHeight],
  selector: "app-accaunt-button",
  templateUrl: "./accaunt-button.component.html",
  styleUrls: ["./accaunt-button.component.scss"],
})
export class AccauntButtonComponent implements OnInit {
  active: boolean = false;

  @Input() title: string = "Profile";

  constructor() {}

  toggle() {
    this.active = !this.active;
  }

  ngOnInit(): void {}
}
