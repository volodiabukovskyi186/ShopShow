import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-option-checkbox',
    templateUrl: './option-checkbox.component.html',
    styleUrls: ['./option-checkbox.component.scss']
})
export class OptionCheckboxComponent implements OnInit {
    @Input() option;
    @Output() currentItem = new EventEmitter();

    constructor() {
    }

    ngOnInit(): void {
    }

    checkItems(item): void {
        this.option.values.forEach(elem => {
            elem.selected = false;
        });
        item.selected = true;
        this.currentItem.emit(item);
    }
}
