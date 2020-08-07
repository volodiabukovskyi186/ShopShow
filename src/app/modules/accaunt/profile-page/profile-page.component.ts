import { Component, OnInit } from "@angular/core";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { AccauntService } from "src/app/modules/accaunt/accaunt.service";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile-page.component.html",
  styleUrls: ["./profile-page.component.scss"],
})
export class ProfilePageComponent implements OnInit {
  breadcrumbs: Array<NavLink> = [
    {
      link: "/",
      title: "Homepage",
    },
    {
      link: "/profile",
      title: "Profile",
    },
  ];

  constructor(public accaunt: AccauntService) {}

  ngOnInit(): void {
    this.accaunt.getUser().subscribe((data) => {
      this.accaunt.current = data.data;
      this.accaunt.onCurrent();
    });
  }
}
