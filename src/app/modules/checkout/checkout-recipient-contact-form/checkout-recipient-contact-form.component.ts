import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ViewChild,
} from "@angular/core";
import { ICheckoutContact } from "../checkout.service";
import { NgForm } from "@angular/forms";
import { fadeHeight } from '../../ui/animations';

@Component({
  animations: [fadeHeight],
  selector: "app-checkout-recipient-contact-form",
  templateUrl: "./checkout-recipient-contact-form.component.html",
  styleUrls: ["./checkout-recipient-contact-form.component.scss"],
})
export class CheckoutRecipientContactFormComponent implements OnInit {
  @ViewChild("form") public userFrm: NgForm;
  // @Output() formSubmit = new EventEmitter();
  @Output() valid: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.userFrm.statusChanges.subscribe((e) => {
      this.onValid(this.userFrm.valid);
    });
  }

  onValid(valid: boolean) {
    this.valid.emit(valid);
  }

  // onSubmit() {
  //   this.formSubmit.emit();
  // }
}
