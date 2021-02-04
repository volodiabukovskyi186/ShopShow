import { Injectable, Inject, PLATFORM_ID, OnChanges } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { environment } from "src/environments/environment";
import {AccauntService} from '../accaunt/accaunt.service';
import { AuthService } from '../core/auth/auth.service';
import { WishlistService } from '../../modules/accaunt/wishlist/services/wishlist.service';
import { ProductService } from '../../modules/product/product.service';
@Injectable({
  providedIn: "root",
})
export class CartService implements OnChanges {
  isCartView: boolean = false;
  fLanth: any;
  favoritelenth = new Subject();
  mode: "cart" | "favorite" = "cart";

  list: Array<any> = [];
  favorite: Array<any> = [];
  arrBasket: Array<any> = [];
  productsInBasket = [];
  productFavorites = [];
  userId: number;

  private wishlistStream$: Subject<any> = new Subject();

  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
    private http: HttpClient,
    private accaunt: AccauntService,
    public authService: AuthService,
    public wishlistService: WishlistService,
    public productService: ProductService
  ) {
    // this.body = document.querySelector("body");

    this.copyFromSession();
    this.calcTotalPrice();

    if (localStorage.hasOwnProperty('token')) {
      this.getUserId();
      //this.getUserWishlist();
    }
  }

  ngOnChanges() {
    //debugger;
    this.authService.logOutSub.subscribe(() => { this.getUserId(); });
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

  public getUserId(): void {
    this.accaunt.getUser().subscribe((res) => {
      this.userId = res.data.user.id;
      this.getUserWishlist(this.userId);
    })
  }

  public getUserWishlist(userIdToSend) {
    this.authService.logOutSub.subscribe(() => { this.getUserId(); });
    this.wishlistService.getUserWishlistByClientId(userIdToSend)
      .subscribe((resp) => {
        this.favorite = resp.data;
      })
  }

  addProductToWishlist(data): Observable<any> {
    // this.whishlistSub.next(true);
    return this.http.post(`${environment.host}wishlist`, data);
  }

  public updatedWishlist$(message: any) {
    this.wishlistStream$.next(message);
  }

  public getWishlist$() {
    return this.wishlistStream$ as Observable<any>;
  }

  public addToBaseBaslet(arrBasket: Array<any>): Observable<any> {
    console.log(arrBasket);
    //this.getUserId();
    //debugger;

    return this.http.put<any>(`${environment.addbasket}/${this.userId}`, arrBasket);
  }

  addToCart(prod: any, count: number = 1) {

    // let prodIndex = this.searchProduct(prod, this.list);
    // if (prodIndex >= 0) {
    //   let oldCount: number = this.list[prodIndex].count;
    //   let newCount: number = parseInt(oldCount + "") + parseInt(count + "");
    //   this.list[prodIndex].count = newCount;
    //
    // } else {
    //   this.list.push({
    //     product: prod,
    //     count: count,
    //     id: prod.id
    //   });
    //   this.arrBasket.push(prod);
    //   this.addToBaseBaslet(this.list);
    //   console.log('mmmmmm==>', this.list);
    // }
    this.list.push({
      product: prod,
      count: count,
      id: prod.id
    });

    this.arrBasket.push(prod);

    console.log('oooooo=>>>>', this.list);

    const getProductIds = this.list.map((val) => { return val.product.id });

    this.addToBaseBaslet(getProductIds)
      .subscribe((res) => {
        console.log(res);
      })

    this.copyToSession();
    this.calcTotalPrice();
    this.calcTotalCount();
  }

  
  addToFavourite(prod: any) {
    const filteredWishlist = this.favorite.map((resp) => { return resp.product.id });

    if (!this.authService.getToken()) {
      if (!filteredWishlist.includes(prod.id)) {
        this.favorite.push({
          product: prod,
          id: prod.id
        })
    
        this.productFavorites.push(prod);
    
        this.copyToSession();
      }
    } else {
      if (!filteredWishlist.includes(prod.id)) {
        this.getUserId();
        this.addProductToWishlist({
            product_id: prod?.description?.product_id,
            user_id: this.userId
        }).subscribe((res) => {
            console.log(res);
        })
    } 
    }
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

  public deleteFromArray(object: Object, array: Array<any>): boolean {
    const index: number = array.indexOf(object);
    if (index !== -1) {
      array.splice(index, 1);

      this.productsInBasket.push(array);

      this.productsInBasket = array?.map((product) => {
        return product.id;
      })

      if (this.authService.getToken()) {
        this.addToBaseBaslet(this.productsInBasket).subscribe((res) => {
          console.log(res);
        })
      }

      return true;
    }
    return false;
  }

  totalPrice: number = 0;
  totalCount: number = 0;

  delete(cartItem: any, list: Array<any>) {
    this.deleteFromArray(cartItem, list);

    // copy to session
    this.copyToSession();

    // calc total price
    this.calcTotalPrice();
  }

  deleteFromFavorites(favoriveItem: any, list: Array<any>) {
    this.deleteFromFavoritesArr(favoriveItem, list);
    // copy to session
    this.copyToSession();
  }

  public deleteFromFavoritesArr(object: any, array: Array<any>): boolean {
    const index: number = array.indexOf(object);
    if (index !== -1) {
      array.splice(index, 1);

      this.productFavorites.push(array);

      this.productFavorites = array?.map((product) => {
        return product.id;
      })

      if (this.authService.getToken()) {
        this.wishlistService.deleteWishList(object.id).subscribe((res) => {
          console.log(res);
        });
        
        //this.allwishlistData = this.allwishlistData.filter((resp) => { return resp.id !== wishlistItem.id });
        // this.addToBaseBaslet(this.productFavorites).subscribe((res) => {
        //   console.log(res);
        // })
      }

      return true;
    }
    return false;
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
  
  copyToSession() {
    let prodListJson = JSON.stringify(this.list);
    let prodListFavJson = JSON.stringify(this.favorite);
    //this.favorite = [];
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
