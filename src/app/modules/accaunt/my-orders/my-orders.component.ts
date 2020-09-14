import {Component, OnInit} from '@angular/core';
import { MyOrdersService } from './services/my-orders.service';
import { environment } from 'src/environments/environment';
import { AccauntService } from '../../accaunt/accaunt.service';

@Component({
    selector: 'app-my-orders',
    templateUrl: './my-orders.component.html',
    styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {
    itemStatus = false;
    orders: any[] = [];
    clientId: number;
    clientOrders: any;

    constructor(
        public myOrdersService: MyOrdersService,
        public accauntService: AccauntService
    ) {}

    ngOnInit(): void {
        // this.getMyOrders();
        // console.log(this.getMyOrders());
        // console.log(this.orders);

        this.getUserClientId();
    }

    public getUserClientId(): void {
        this.accauntService.getUser().subscribe((res) => {
          console.log(res);

          this.clientId = res.data.user.id;
          console.log(this.clientId);

          this.myOrdersService.getOrderById(this.clientId).subscribe((res) => {
            console.log(res);
            this.clientOrders = res;
          })
        })
    }    

    itemDrop(): void {
        this.itemStatus == false ? this.itemStatus = true : this.itemStatus = false;
        console.log(this.itemStatus);
    }

    // modifyDate() {
        
    // }

    // public getOrderById(id) {
    //     return `${environment.host}/order/${id}`;
    // }
    
    // public getMyOrders(): void {
    //     this.myOrdersService.myOrders.subscribe((res) => {
    //         console.log(res);
    //         //this.orders.push(res);

    //         //console.log(this.orders);
    //     })
    //     console.log(this.myOrdersService.myOrders.value);
    // }

}
