import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { ICheckoutContact } from "../checkout.service";
import { fadeHeight } from '../../ui/animations';

@Component({
  animations: [fadeHeight],
  selector: "app-checkout-contact-form",
  templateUrl: "./checkout-contact-form.component.html",
  styleUrls: ["./checkout-contact-form.component.scss"],
})
export class CheckoutContactFormComponent implements OnInit {

  @Output() formSubmit = new EventEmitter();


  private _model: ICheckoutContact;
  @Output() modelChange = new EventEmitter();

  set model(val: ICheckoutContact) {
    this._model = val;
    this.modelChange.emit(this._model);
  }

  @Input() get model(): ICheckoutContact {
    return this._model;
  }

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.formSubmit.emit();
  }
}
