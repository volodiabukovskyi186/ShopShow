import {Component, OnInit, Output, EventEmitter, ChangeDetectorRef, Input, OnChanges, SimpleChanges} from '@angular/core';
import {NavLink} from 'src/app/modules/ui/rap/nav-item/nav-link';
import {environment} from 'src/environments/environment';
import {ActivatedRoute} from '@angular/router';
import {FilterService, ICategoryFilterResponse, ICategoryFilter} from './filter.service';
import {Options} from 'ng5-slider';
import {ClientMenuService} from '../client-menu/client-menu.service';
import {AppLangService} from 'src/app/modules/core/app-lang.service';
import {slideLeft} from '../ui/animations';
import {Router, NavigationEnd, Event} from '@angular/router';

export interface IFilters {
    categories: number[];
    manufacturers: number[];
    minPrice: number;
    maxPrice: number;
    sortPrice?: string;
}
interface IFilterItem {
    id: number;
    name: string;
    sub?: IFilterItem[];
}

@Component({
    animations: [slideLeft],
    selector: 'app-filter-page',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnChanges {
    @Output() filterChanged = new EventEmitter<IFilters>();
    @Output() categoryBread = new EventEmitter <any> ();
    @Input() isManufacturerPage: boolean = false;
    @Input() manufacturerPageId: number;

    public isOpenManufactures: boolean = true;
    public isOpenPrices: boolean = true;
    public isOpenFirstSubCategoryMan: boolean = false;
    public isOpenFirstSubCategoryWoman: boolean = false;
    public manufacturers: any;
    public manufacturersTitle;

    public value: number;
    public highValue: number;
    public minMaxValues: any;
    public options: Options;

    host = environment.hoststatic;

    public categories: ICategoryFilter[];
    private selectedCategoryIds: number[] = [];
    private selectedManufacturerIds: number[] = [];
    public selectedCategoryBread: Array <IFilterItem> = [];
    openedFilter = false;

    constructor(
        private route: ActivatedRoute,
        private filterService: FilterService,
        public clientMenu: ClientMenuService,
        public appLang: AppLangService,
        private ref: ChangeDetectorRef,
        private router: Router,
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                const id = +this.route.snapshot.paramMap.get('id');
                this.selectedCategoryIds = [id ] ;
                this.filterService.getSelectedCategory(id).subscribe(data => {
                    this.categories = data.data;
                });

            }
        });
    }

    public ngOnInit(): void {
        // this.filterService.getCategory().subscribe((res: ICategoryFilterResponse) => {
        //     this.categories = res.data;
        // });

        this.getPriceFilter();
        this.getClientMenus();
        this.getAllManufactures();
        this.getDefaultCategory();
        this.moveToCategory();
        this.options = {
            floor: 0,
            ceil: 0,
        };
        this.filterService.getMinMaxPrice().subscribe((res) => {
            this.minMaxValues = res.data;

            if (this.minMaxValues) {
                this.options = {
                    floor: this.minMaxValues.min,
                    ceil: this.minMaxValues.max
                };

                this.value = this.options.floor;
                this.highValue = this.options.ceil;

                this.ref.detectChanges();
            }
        });
    }

    ngOnChanges(changes: SimpleChanges) {

    }
    getBreadCrumbs(bread): void {
        this.selectedCategoryBread.push(bread);

    }


    getDefaultCategory(): void {
        this.filterService.SCategory.subscribe(data => {
            const id = +this.route.snapshot.paramMap.get('id');
            this.filterService.getSelectedCategory(id).subscribe(data => {
                this.categories = data.data;

            });
        });
    }

    public getClientMenus(l: string = this.appLang.current) {
        this.clientMenu.getShop(l).subscribe((res) => {
            this.manufacturersTitle = res.data[0];
        });
    }

    getPriceFilter() {
        this.filterService.getPriceFilter().subscribe(this.getPriceFilterHandler);
    }

    getPriceFilterHandler = data => {
        this.options = {
            floor: +data.data.min,
            ceil: +data.data.max
        };

        this.value = +data.data.min;
        this.highValue = +data.data.max;
    };

    public onCategoryFilterSelected(categoryId: number) {
        if (!this.selectedCategoryIds.some(c => c == categoryId)) {
            this.selectedCategoryIds.push(categoryId);
        }

        this.onFilterChanged();
    }

    public getNewCategory(categoryId: number) {
        this.filterService.getSelectedCategory(categoryId).subscribe(data => {
            this.categories = data.data;
        });
        const mainId: number = categoryId;
        this.onCategoryFilterSelected(mainId);
        this.categoryBread.emit(mainId);



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

    moveToCategory(): void {
        this.filterService.SCategory.subscribe(data => {
            const id = +this.route.snapshot.paramMap.get('id');
            this.selectedCategoryIds = [];
            this.selectedCategoryIds.push(id);
            this.onFilterChanged();
        });
    }

    private onFilterChanged() {
        const id = +this.route.snapshot.paramMap.get('id');
        this.selectedCategoryIds.forEach((elem, index) => {
            if (elem == id) {
                this.selectedCategoryIds.splice(index, 1);
            }
        });
        if (this.isManufacturerPage) {
            this.filterChanged.emit({
                categories: this.selectedCategoryIds,
                manufacturers: [Number(this.manufacturerPageId)],
                minPrice: this.value,
                maxPrice: this.highValue,
                sortPrice: '',
            });
        }

        if (!this.isManufacturerPage) {
            this.filterChanged.emit({
                categories: this.selectedCategoryIds,
                manufacturers: this.selectedManufacturerIds,
                minPrice: this.value,
                maxPrice: this.highValue,
                sortPrice: '',
            });
        }
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
    }

    public openPrices(event): void {
        if (event.target) {
            this.isOpenPrices = !this.isOpenPrices;
        } else {
            this.isOpenPrices = false;
        }
    }

    public getAllManufactures(): void {
        this.filterService.getManufactures().subscribe((res) => {
            this.manufacturers = res.data;
        });
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
