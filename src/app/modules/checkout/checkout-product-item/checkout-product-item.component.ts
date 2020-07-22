import { Component, OnInit, Input } from "@angular/core";
import { changeValueHighlight } from "../../ui/animations";
import { environment } from 'src/environments/environment';
import { CurrencyService } from '../../currency/currency.service';

@Component({
  animations: [changeValueHighlight],
  selector: "app-checkout-product-item",
  templateUrl: "./checkout-product-item.component.html",
  styleUrls: ["./checkout-product-item.component.scss"],
})
export class CheckoutProductItemComponent implements OnInit {
  @Input() value: any;
  host = environment.hoststatic;

  constructor(public currency: CurrencyService) {}

  ngOnInit(): void {}
}
