import { Component, OnInit } from '@angular/core';
import { NavLink } from 'src/app/modules/ui/rap/nav-item/nav-link';
import { AppLangService } from '../../core/app-lang.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {
  breadcrumbs: Array<NavLink> = [
    {
      link: "/",
      title: "Homepage",
    },
    {
      link: "/accaunt/login",
      title: "Login",
    },
  ];

  constructor(public appLang: AppLangService) { }

  ngOnInit(): void {
  }

}
