import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICategoryFilter } from '../filter.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

interface IFilterItem {
  id: number;
  name: string;
  count:number;
  description;
  sub?: IFilterItem[];
}

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit {
  @Input() filter: IFilterItem;
  @Output() filterSelected = new EventEmitter<number>();
  @Output() filterDeselected = new EventEmitter<number>();
  @Output() filteradd = new EventEmitter<number>();
  @Output() filterCategory = new EventEmitter<IFilterItem>();
  public isExpanded = false;

  constructor() { }

  ngOnInit(): void {
    // console.log('filter====>', this.filter);
  }

  public hasSubFilters(filter: IFilterItem) {
    return filter.sub && filter.sub.length > 0;
  }


  public onCheckboxChange(event: MatCheckboxChange) {
     if (event.checked) {
       this.filterSelected.emit(this.filter.id);
     } else {
       this.filterDeselected.emit(this.filter.id);
     }
  }

  public onChildFilterSelected(filterId: number) {
    this.filterSelected.emit(filterId);
  }

  public onChildFilterDeselected(filterId: number) {
    this.filterDeselected.emit(filterId);
  }

  add():void{
    this.isExpanded = true;
    this.filteradd.emit(this.filter.id);
    this.filterCategory.emit(this.filter);
  }

}
