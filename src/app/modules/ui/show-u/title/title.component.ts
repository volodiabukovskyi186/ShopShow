import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'show-u-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title = "Title";
  @Input() subtitle = null;

  constructor() { }

  ngOnInit(): void {
  }

}
