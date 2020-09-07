import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-my-orders',
    templateUrl: './my-orders.component.html',
    styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
    itemStatus = false;

    constructor() {
    }

    ngOnInit(): void {
    }


    itemDrop(): void {
        this.itemStatus == false ? this.itemStatus = true : this.itemStatus = false;
        console.log(this.itemStatus);
    }

}
