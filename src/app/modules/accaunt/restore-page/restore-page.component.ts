import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/modules/ui/rap/nav-item/nav-link';

@Component({
  selector: 'app-restore-page',
  templateUrl: './restore-page.component.html',
  styleUrls: ['./restore-page.component.scss']
})
export class RestorePageComponent implements OnInit {
  public isResetBtnClicked: boolean;

  breadcrumbs: Array<NavLink> = [
    {
      link: "/",
      title: "Homepage",
    },
    {
      link: "/accaunt/restore",
      title: "Lost password",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public resetBtnClicked(event): void {
    console.log(event);
    this.isResetBtnClicked = event;
  }

}
