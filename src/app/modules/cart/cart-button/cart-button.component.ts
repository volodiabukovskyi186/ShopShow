import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { changeValueScale } from "../../ui/animations";
import {element} from "protractor";

@Component({
  animations: [changeValueScale],
  selector: "app-cart-button",
  templateUrl: "./cart-button.component.html",
  styleUrls: ["./cart-button.component.scss"],
})
export class CartButtonComponent implements OnInit {
  sreenwidth:boolean;
  constructor(public cart: CartService) {}
  ngOnInit(): void {

  }
  
  onResize(event) {
      if (event.currentTarget.innerWidth >= 768) {
        this.sreenwidth = false;
      } else {
        this.sreenwidth = true;
      }
  }
}
