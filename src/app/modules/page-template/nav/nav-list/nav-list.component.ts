import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
  @Input() selectedCategorySet: Set<number> = new Set<number>();
  @Input() categories: any[];
  @Output() onClick = new EventEmitter<number>();
  constructor() {
  }

  ngOnInit(): void {

  }

}
