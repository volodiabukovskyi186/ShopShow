import { Component, OnInit } from "@angular/core";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { fadeHeight, slideLeft } from "src/app/modules/ui/animations";

@Component({
  animations: [fadeHeight, slideLeft],
  selector: "app-signup-page",
  templateUrl: "./signup-page.component.html",
  styleUrls: ["./signup-page.component.scss"],
})
export class SignupPageComponent implements OnInit {
  breadcrumbs: Array<NavLink> = [
    {
      link: "/",
      title: "Homepage",
    },
    {
      link: "register",
      title: "Create accaunt",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
