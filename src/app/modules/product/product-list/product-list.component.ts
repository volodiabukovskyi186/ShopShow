import {Component, OnInit, Input} from '@angular/core';
import {Title} from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    @Input() products: Array<any> = [];
    public isSalesPage: boolean = false;

    constructor(private title: Title, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        console.log(this.products);

        // this.route.params.subscribe((data) => {
        //     console.log(data);
        //     if (data.id === "sales") {
        //         this.isSalesPage = true;
        //     }
        // });

        this.updateMeta();
    }



    updateMeta() {
        const title = `Categories | ShowU`;
        this.title.setTitle(title);
    }
}
