import { Component, OnInit, Input } from "@angular/core";
import { AppLangService } from "../../core/app-lang.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
  @Input() categories: Array<any> = [];
  links2: Array<any> = [
    { link: "/promotions", name: "Promotions" },
    { link: "/manufacturers", name: "Manufacturers" },
    // { link: "/sales", name: "Sales" }
  ];

  constructor(public appLang: AppLangService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initTranslate();
    this.route.params.subscribe((data) => {
      this.initTranslate();
    });
  }

  initTranslate() {
    this.appLang.translate
      .get(["nav.promotion", "nav.manufacturer", "nav.sales"])
      .subscribe((tr: any) => {
        // this.msgAdded = tr["category.msgAdded"];
        this.links2 = [
          { link: "/promotions", name: tr["nav.promotion"] },
          { link: "/manufacturers", name: tr["nav.manufacturer"] },
          { link: "/sales", name: tr["nav.sales"] },
        ];
      });
  }
}
