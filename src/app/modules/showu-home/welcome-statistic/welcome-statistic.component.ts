import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-welcome-statistic",
  templateUrl: "./welcome-statistic.component.html",
  styleUrls: ["./welcome-statistic.component.scss"],
})
export class WelcomeStatisticComponent implements OnInit {
  @Input() list = [
    {
      icon: "assets/icons/delivery.svg",
      title: "main.QUICK_SHIPPING_WORLDWIDE",
      description: "main.order_from",
    },
    {
      icon: "assets/icons/returns.svg",
      title: "main.DAYS_RETURN",
      description: "main.order_from",
    },
    {
      icon: "assets/icons/safety.svg",
      title: "main.SHOP_WITH_CONFIDENCE",
      description: "main.order_from",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
