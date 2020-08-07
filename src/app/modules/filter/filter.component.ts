import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NavLink } from "src/app/modules/ui/rap/nav-item/nav-link";
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from "@angular/router";
import { FilterService, ICategoryFilterResponse, ICategoryFilter } from './filter.service';
import { Options } from 'ng5-slider';

export interface IFilters {
  categories: number[];
  manufacturers: number[];
  minPrice: number;
  maxPrice: number;
}

@Component({
  selector: "app-filter-page",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"],
})
export class FilterComponent implements OnInit {
  @Output() filterChanged = new EventEmitter<IFilters>();

  public isOpenManufactures: boolean = false;
  public isOpenPrices: boolean = false;
  public isOpenCategoriesMan: boolean = false;
  public isOpenCategoriesWoman: boolean = false;
  public isOpenFirstSubCategoryMan: boolean = false;
  public isOpenFirstSubCategoryWoman: boolean = false;
  public manufacturers: any;
  public categoriesMan;
  public categoriesWoman;
  public categoriesManName;
  public categoriesWomanName;

  value: number;
  highValue: number;
  options: Options = {
    floor: 0,
    ceil: 200
  };

  // breadcrumbs: Array<NavLink> = [
  //   {
  //     link: "/",
  //     title: "Homepage",
  //   },
  //   {
  //     link: "/manufacturers",
  //     title: "Manufacturers",
  //   },
  // ];

  host = environment.hoststatic;

  public categories: ICategoryFilter[];
  private selectedCategoryIds: number[] = [];
  private selectedManufacturerIds: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private filterService: FilterService,
  ) {}

  public ngOnInit(): void {
    // this.categotyIdMan = 10;
    // this.categotyIdWoman = 7;

    this.route.params.subscribe((params) => {
      console.log(params);
      //this.categotyId = params.id;
    });

    this.filterService.getCategory().subscribe((res: ICategoryFilterResponse) => {
      this.categories = res.data;

      // this.categoriesManName = res.data[0].name;
      // this.categoriesWomanName = res.data[1].name;
      
      // this.categoriesMan = res.data[0].sub[0].name;
      // this.categoriesWoman = res.data[1].sub[0].name;

      // console.log(this.categoriesMan);
      // console.log(this.categoriesWoman);
    })
    this.getPriceFilter();
  }

  getPriceFilter() {
    this.filterService.getPriceFilter().subscribe(this.getPriceFilterHandler)
  }
  getPriceFilterHandler = data => {
    // this.filterService.price = data.data;
    // this.filterService.priceModel.max = data.data.max;
    // this.filterService.priceModel.min = data.data.min;

    this.options.floor = +data.data.min;
    this.options.ceil = +data.data.max;
    this.value = +data.data.min;
    this.highValue = +data.data.max;
  }

  public onCategoryFilterSelected(categoryId: number){
    if (!this.selectedCategoryIds.some(c => c == categoryId)) {
      this.selectedCategoryIds.push(categoryId);
    }

    this.onFilterChanged();
  }

  public onCategoryFilterDeselected(categoryId: number) {
    this.selectedCategoryIds = this.selectedCategoryIds.filter(c => c !== categoryId);

    this.onFilterChanged();
  }

  public onManufacturerFilterSelected(manufacturerId: number) {
    if (!this.selectedManufacturerIds.some(c => c == manufacturerId)) {
      this.selectedManufacturerIds.push(manufacturerId);
    }

    this.onFilterChanged();
  }

  public onManufacturerFilterDeselected(manufacturerId: number) {
    this.selectedManufacturerIds = this.selectedManufacturerIds.filter(c => c !== manufacturerId);

    this.onFilterChanged();
  }

  private onFilterChanged() {
    this.filterChanged.emit({ categories: this.selectedCategoryIds, manufacturers: this.selectedManufacturerIds, minPrice: this.value, maxPrice: this.highValue});
  }

  public onPriceFilterApplied() {
    this.onFilterChanged();
  }

  public openManufactures(event): void {
    if (event.target) {
      this.isOpenManufactures = !this.isOpenManufactures;
    } else {
      this.isOpenManufactures = false;
    }

    this.getAllManufactures();
  }

  public openPrices(event): void {
    if (event.target) {
      this.isOpenPrices = !this.isOpenPrices;
    } else {
      this.isOpenPrices = false;
    }
  }

  public openCategoriesMan(event): void {
    if (event.target) {
      this.isOpenCategoriesMan = !this.isOpenCategoriesMan;
    } else {
      this.isOpenCategoriesMan = false;
    }

    this.filterService.getCategory().subscribe((res: any) => {
      // if (this.categoriesMan) {
      //   this.categoriesMan = res.data[0];
      // }
    })
  }

  public getAllManufactures(): void {
    this.filterService.getManufactures().subscribe((res) => {
      this.manufacturers = res.data;
      console.log(res);
    })
  }

  public openCategoriesWoman(event): void {
    if (event.target) {
      this.isOpenCategoriesWoman = !this.isOpenCategoriesWoman;
    } else {
      this.isOpenCategoriesWoman = false;
    }

    // this.filterService.getCategory().subscribe((res: any) => {
    //   // if (this.categoriesWoman) {
    //   //   this.categoriesWoman = res.data[1];
    //   // }
    // })
  }

  public onCheckboxChange(event) {
    console.log(event);
  }

  public openFirstSubCategoryMan(event) {
    if (event.target) {
      this.isOpenFirstSubCategoryMan = !this.isOpenFirstSubCategoryMan;
    } else {
      this.isOpenFirstSubCategoryMan = false;
    }
  }

}
