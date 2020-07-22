import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { ContactUs } from "../contact";
import { fadeHeight } from "../../ui/animations";

@Component({
  animations: [fadeHeight],
  selector: "app-contact-us-form",
  templateUrl: "./contact-us-form.component.html",
  styleUrls: ["./contact-us-form.component.scss"],
})
export class ContactUsFormComponent implements OnInit {
  @Output() formSubmit = new EventEmitter();

  private _model: ContactUs;
  @Output() modelChange = new EventEmitter();

  set model(val: ContactUs) {
    this._model = val;
    this.modelChange.emit(this._model);
  }

  @Input() get model(): ContactUs {
    return this._model;
  }

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.formSubmit.emit();
  }
}
