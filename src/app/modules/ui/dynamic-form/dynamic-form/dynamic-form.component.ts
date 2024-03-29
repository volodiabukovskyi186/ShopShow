import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { QuestionBase } from "..";
import { FormGroup } from "@angular/forms";
import { QuestionControlService } from "../question-control.service";

@Component({
  selector: "rap-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.scss"]
})
export class DynamicFormComponent implements OnInit {
  // @Input() questions: QuestionBase<string>[] = [];
  @Input() isSubmitButton: boolean = true;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();


  private _questions: QuestionBase<string>[];
  @Output() questionsChange = new EventEmitter();
  
  set questions(val: QuestionBase<string>[]) {
    this._questions = val;
    this.questionsChange.emit(this._questions);
  }
  
  @Input() get questions(): QuestionBase<string>[] {
    return this._questions;
  }
  


  form: FormGroup;

  constructor(private qcs: QuestionControlService) {}

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    let data = this.form.getRawValue();
    this.formSubmit.emit(data);
  }
}
