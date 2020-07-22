import { Component, OnInit } from "@angular/core";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
// import { NgxUiLoaderService } from "ngx-ui-loader";
import { ContactService } from "src/app/modules/contact/contact.service";
import { Contact } from "src/app/modules/contact/contact";

@Component({
  selector: "app-contacts-page",
  templateUrl: "./contacts-page.component.html",
  styleUrls: ["./contacts-page.component.scss"],
})
export class ContactsPageComponent implements OnInit {
  breadcrumbs: Array<NavLink> = [
    {
      link: "/",
      title: "Homepage",
    },
    {
      link: "contacts",
      title: "Contacts",
    },
  ];

  constructor(
    // private ngxService: NgxUiLoaderService,
    public contact: ContactService
  ) {}

  ngOnInit(): void {
    // this.ngxService.start();

    this.contact.get().subscribe(this.getHandler);
  }

  getHandler = (data: Contact) => {
    // this.ngxService.stopAll();
    this.contact.contacts = data;
  };
  
}
