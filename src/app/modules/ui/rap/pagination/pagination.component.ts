import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnInit {
  @Input()
  page: number; // current page
  @Input()
  total: number; // total page
  @Input()
  loading: boolean;

  @Input()
  pagesToShow: number = 10;

  @Output()
  goPrev = new EventEmitter<boolean>();
  @Output()
  goNext = new EventEmitter<boolean>();
  @Output()
  goPage = new EventEmitter<number>();

  @Output()
  pageChanged = new EventEmitter<number>();

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log(this.total);

    this.route.queryParams.subscribe(params => {
      this.page = +params['page'] || 1;

      this.pageChanged.emit(this.page);
      console.log(params);
      console.log(this.page);
    })
  }

  onPage(n: number): void {  
    this.page = n;
    this.changePage();
  }

  onPrev(): void {
    this.page--;
    this.goPrev.emit(true);
    this.changePage();
  }

  onNext(): void {
    this.page++;
    this.goNext.emit(true);
    this.changePage();
  }

  private changePage(): void {
    const queryParams: Params = { page: this.page };

    this.router.navigate(
        [], 
        {
          relativeTo: this.route,
          queryParams: queryParams, 
          queryParamsHandling: 'merge', // remove to replace all query params by provided
        });
    this.pageChanged.emit(this.page);
  }

  pageList(): Array<number> {
    const c = this.total;
    const p = this.page || 1;
    const pagesToShow = this.pagesToShow || 9;
    const pages: number[] = [];
    pages.push(p);

    for (let i = 0; i < pagesToShow; i++) {
      if (pages.length < pagesToShow) {
        if (Math.min.apply(null, pages) > 2) {
          pages.push(Math.min.apply(null, pages) - 1);
        }

        if (Math.max.apply(null, pages) < c - 1) {
          pages.push(Math.max.apply(null, pages) + 1);
        }
      }
    }

    if (p != 1) pages.push(1);
    if (p != c) pages.push(c);

    pages.sort((a, b) => a - b);
    return pages;
  }
}
