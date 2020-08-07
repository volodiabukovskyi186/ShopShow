import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/modules/ui/rap/nav-item/nav-link';

@Component({
  selector: 'app-restore-page',
  templateUrl: './restore-page.component.html',
  styleUrls: ['./restore-page.component.scss']
})
export class RestorePageComponent implements OnInit {
  breadcrumbs: Array<NavLink> = [
    {
      link: "/",
      title: "Homepage",
    },
    {
      link: "/restore",
      title: "Restore password",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
