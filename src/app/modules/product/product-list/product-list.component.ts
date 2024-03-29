import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  @Input() products: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}

}
