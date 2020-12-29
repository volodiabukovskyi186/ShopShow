import { Injectable, Inject, PLATFORM_ID } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from "src/environments/environment";
import {AccauntService} from '../accaunt/accaunt.service';
@Injectable({
  providedIn: "root",
})
export class CartService {
  isCartView: boolean = false;
  fLanth:any;
  favoritelenth= new Subject();
  mode: "cart" | "favorite" = "cart";

  list: Array<any> = [];
  favorite: Array<any> = [];
  arrBasket: Array<any> = [];

  // body: HTMLBodyElement;

  constructor(@Inject(PLATFORM_ID) private platformId: string,
              private http: HttpClient,
              private accaunt: AccauntService) {
    // this.body = document.querySelector("body");
    this.copyFromSession();
    this.calcTotalPrice();
  }

  openCartView() {
    this.mode = "cart";
    this.isCartView = true;
  }
  openFavoriteView() {
    this.mode = "favorite";
    this.isCartView = true;
  }
  closeCartView() {
    this.isCartView = false;
  }
  public addToBaseBaslet( arrBasket: Array <number>): Observable <any> {
    return this.http.put<any>( `${environment.addbasket}/76`, arrBasket);
  }


  addToCart(prod: any, count: number = 1) {
      console.log('oooooo=>>>>', prod);
    let prodIndex = this.searchProduct(prod, this.list);
    if (prodIndex >= 0) {
      let oldCount: number = this.list[prodIndex].count;
      let newCount: number = parseInt(oldCount + "") + parseInt(count + "");
      this.list[prodIndex].count = newCount;
    } else {
      this.list.push({
        product: prod,
        count: count,
        id: prod.id
      });
      this.arrBasket.push(prod);
      this.addToBaseBaslet(this.list);
      console.log('mmmmmm==>', this.list);
    }

    // copy to session
    this.copyToSession();

    // calc total price
    this.calcTotalPrice();
    this.calcTotalCount();
  }


  public get total(): number {
    this.copyToSession();
    this.calcTotalPrice();
    return this.totalPrice;
  }
  public get count(): number {
    this.copyToSession();
    this.calcTotalCount();
    return this.totalCount;
  }

  public searchProduct(prod: any, list: Array<any>): number {
    for (let i = 0; i < list.length; i++) {
      const p: any = list[i].product;
      // if (ProductsService.equalsProduct(p, prod)) return i;
      if (p.id === prod.id) return i;
    }

    return -1;
  }

  public deleteFromArray(object: Object, array: Array<Object>): boolean {
    console.log('arrayarray==>',array)
    const index: number = array.indexOf(object);
    if (index !== -1) {
      array.splice(index, 1);
      return true;
    }
    return false;
  }

  //
  //
  //
  totalPrice: number = 0;
  totalCount: number = 0;

  delete(cartItem: any, list: Array<any>) {
    this.deleteFromArray(cartItem, list);

    // copy to session
    this.copyToSession();

    // calc total price
    this.calcTotalPrice();
  }

  calcTotalPrice() {
    this.totalPrice = 0;
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      if (!element?.product?.discont?.price) {
        let sum = element?.product?.price * element?.count;
        this.totalPrice += sum;
      }

      if (element?.product?.discont?.price) {
        let sum = element?.product?.discont?.price * element?.count;
        this.totalPrice += sum;
      }
    }
  }
  calcTotalCount() {
    this.totalCount = 0;
    for (let i = 0; i < this.list.length; i++) {
      const element = this.list[i];
      this.totalCount += element.count;
    }
  }

  //
  //
  //

  copyToSession() {
    let prodListJson = JSON.stringify(this.list);
    let prodListFavJson = JSON.stringify(this.favorite);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem("cart_showu", prodListJson);
      localStorage.setItem("favorite_showu", prodListFavJson);
    }
  }

  public copyFromSession() {
    if (isPlatformBrowser(this.platformId)) {
      let cart = localStorage.getItem("cart_showu");

      if (cart) {
        let res: Array<any> = JSON.parse(cart);
        if (res != undefined) this.list = res;
      }

      let fav = localStorage.getItem("favorite_showu");
      if (fav) {
        let resf: Array<any> = JSON.parse(fav);
        if (resf != undefined) this.favorite = resf;
      }
    }
  }
}
