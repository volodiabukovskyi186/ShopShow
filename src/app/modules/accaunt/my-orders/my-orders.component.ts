import {Component, OnInit} from '@angular/core';
import { MyOrdersService } from './services/my-orders.service';
import { environment } from 'src/environments/environment';
import { AccauntService } from '../../accaunt/accaunt.service';
import { ProductService } from "src/app/modules/product/product.service";

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
    public cardNumbers: any[] = [];
    selectedCardNumber: number;
    selectedSorting: string;
    promotions: any[] = [];
    myOrders: any[] = [];
    allOrders: any;
    Math = Math;
    isSuccessOrders: boolean = false;
    //page: number = 1;
    //take: number = 10;

    constructor(
        public myOrdersService: MyOrdersService,
        public accauntService: AccauntService,
        public product: ProductService
    ) {}

    ngOnInit(): void {
        // this.getMyOrders();
        // console.log(this.getMyOrders());
        console.log(this.myOrders);

        this.getUserClientId();
        this.cardNumbers = [3, 6, 9, 12, 15, 17, 20, 100];
        this.getOrdersByClientId();
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

    public onSortingChanged(sorting: string) {
        this.selectedSorting = sorting;
        this.myOrdersService.getUserOrdersByClientId(this.clientId, this.selectedCardNumber, this.selectedSorting).subscribe((res) => {
            if (this.selectedSorting !== 'promotions') {
                this.myOrders = res.data;
                this.allOrders = res;
            }
        
            if (this.selectedSorting === 'promotions') {
                //console.log(this.product.products.data.products);
                
                res.data.products.forEach((val) => {
                if (val.promotion) {
                    this.promotions.unshift(val);
                }
                if (val.promotion === null) {
                    this.promotions.push(val);
                }
                })
        
                this.myOrders = this.promotions;
            }
        });
      }
    
    public onCardNumberChanged(cardNumber: number) {
        this.selectedCardNumber = cardNumber;
        this.myOrdersService.getUserOrdersByClientId(this.clientId, this.selectedCardNumber, this.selectedSorting).subscribe((res) => {
          this.myOrders = res.data;
          this.allOrders = res;
        });
    }

    public getOrdersByClientId() {
        this.accauntService.getUser().subscribe((res) => {
            this.clientId = res.data.user.id;
              console.log(this.clientId);
      
              this.myOrdersService.getUserOrdersByClientId(this.clientId, this.selectedCardNumber).subscribe((res) => {
                setTimeout(() => {
                  this.isSuccessOrders = true;
                }, 1000);

                //this.myOrders = res.data[0].orders;
                this.myOrders = res.data;
                this.allOrders = res;

                console.log(res);
                console.log(this.myOrders);
              })
      
            // this.accaunt.current = data.data;
            // this.accaunt.onCurrent();
            // console.log(data.data);
        });
    }

    public pageChangedHandler(page: number): void {
        console.log(page);
        this.myOrdersService.page = page;
        this.getOrdersByClientId();
      }

    // public changeMaterialCategory(event, cardNumber?: number) {
    //     console.log(event);
    //     console.log(cardNumber);

    //     this.product.sortBy(event.value, cardNumber).subscribe((res) => {
    //       this.product.products.data.products = res.data.products;
    //     });
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
