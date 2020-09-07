import {Component, OnInit, Input} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    @Input() products: Array<any> = [];

    constructor(private title: Title) {
    }

    ngOnInit(): void {
        this.updateMeta();
    }

    updateMeta() {
        const title = `Categories | ShowU`;
        this.title.setTitle(title);
    }
}
