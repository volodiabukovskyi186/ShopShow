import { Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AppLangService} from '../../core/app-lang.service';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../cart/cart.service';
import {AuthService} from '../../core/auth/auth.service';
import {AccauntService} from '../../accaunt/accaunt.service';
import {slideLeft} from '../../ui/animations';

@Component({
  animations: [slideLeft],
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  @Input() categories: Array<any> = [];
  @ViewChild('nav') public nav: ElementRef<any>;
  // @Input() value: INavItem;
  burgerStatus = false;
  links2: Array<any> = [
    { link: '/promotions', name: 'Promotions' },
    { link: '/manufacturers', name: 'Manufacturers' },
    { link: '/sales', name: 'Sales' }
  ];
  public categorySet: Set<number> = new Set<number>();

  public get isMobile(): boolean {
    console.log('dsjkfhksd');
    return this.nav?.nativeElement?.offsetWidth < 500;
  }


  constructor(public appLang: AppLangService,
              private route: ActivatedRoute,
              public cart: CartService,
              public auth: AuthService,
              public accaunt: AccauntService) {}

  ngOnInit(): void {
    this.initTranslate();
    this.route.params.subscribe((data) => {
      this.initTranslate();
    });
  }
  public toggle(id: number) {
    if (this.categorySet.has(id)) {
      this.categorySet.delete(id);
    } else {
      this.categorySet.add(id);
    }
  }
  initTranslate() {
    this.appLang.translate
      .get(['nav.promotion', 'nav.manufacturer', 'nav.sales'])
      .subscribe((tr: any) => {
        // this.msgAdded = tr['category.msgAdded'];
        this.links2 = [
          { link: '/promotions', name: tr['nav.promotion'] },
          { link: '/manufacturers', name: tr['nav.manufacturer'] },
          { link: '/sales', name: tr['nav.sales'] },
        ];
      });
  }

  public burgerMenu(status: boolean = false): void {
    this.burgerStatus = status;
  }

}
