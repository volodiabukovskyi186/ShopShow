import { Component, OnInit, Input, EventEmitter, Output, HostListener } from "@angular/core";
import { fade } from '../../animations';

@Component({
  selector: "rap-delete-button",
  animations: [fade],
  templateUrl: "./delete-button.component.html",
  styleUrls: ["./delete-button.component.scss"]
})
export class DeleteButtonComponent implements OnInit {
  @Input() src: string;

  isShowConfirm: boolean = false;

  @Output() confirmed = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  @HostListener('click', ['$event'])
  toggle($event: Event) {
    $event.preventDefault();
    this.isShowConfirm = !this.isShowConfirm;
  }

  onConfirmed = () => {
    this.confirmed.emit();
  };
}
