import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-option-checkbox-item',
    templateUrl: './option-checkbox-item.component.html',
    styleUrls: ['./option-checkbox-item.component.scss']
})
export class OptionCheckboxItemComponent implements OnInit {
    @Input() option;
    @Input() currentItem;
    @Output() optionItem = new EventEmitter();
    public host = environment.hoststatic;

    constructor() {
    }

    ngOnInit(): void {
        if (this.option.id == this.currentItem.current_item) {
            this.option.selected = true;
        }
    }

    selectOption(): void {
        this.currentItem.current_item = this.option.id;
        this.optionItem.emit(this.option);
        // console.log('true===>', this.currentItem.current_item);
    }

}
