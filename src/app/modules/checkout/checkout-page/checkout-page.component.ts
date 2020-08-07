import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/modules/ui/rap/nav-item/nav-link';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  breadcrumbs: Array<NavLink> = [
    {
      link: "/",
      title: "Homepage"
    },
    {
      link: "/checkout",
      title: "Checkout"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
