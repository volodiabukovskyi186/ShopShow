import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent implements OnInit {
  @Input() selectedCategorySet: Set<number> = new Set<number>();
  @Input() categories: any[];
  @Output() showMore = new EventEmitter<number>();
  @Output() goTo = new EventEmitter<void>();
  constructor(public router: Router) {
  }

  ngOnInit(): void {

  }

  goToRoute(id: number) {
    this.selectedCategorySet.clear();
    this.router.navigate(['/', 'products', id]);
    this.goTo.emit();
  }

}
