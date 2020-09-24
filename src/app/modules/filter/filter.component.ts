import {Component, OnInit, Output, EventEmitter, ChangeDetectorRef, Input} from '@angular/core';
import {NavLink} from 'src/app/modules/ui/rap/nav-item/nav-link';
import {environment} from 'src/environments/environment';
import {ActivatedRoute} from '@angular/router';
import {FilterService, ICategoryFilterResponse, ICategoryFilter} from './filter.service';
import {Options} from 'ng5-slider';
import {ClientMenuService} from '../client-menu/client-menu.service';
import {AppLangService} from 'src/app/modules/core/app-lang.service';
import {slideLeft} from '../ui/animations';

export interface IFilters {
    categories: number[];
    manufacturers: number[];
    minPrice: number;
    maxPrice: number;
}

@Component({
    animations: [slideLeft],
    selector: 'app-filter-page',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
    @Output() filterChanged = new EventEmitter<IFilters>();
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

    openedFilter = false;

    constructor(
        private route: ActivatedRoute,
        private filterService: FilterService,
        public clientMenu: ClientMenuService,
        public appLang: AppLangService,
        private ref: ChangeDetectorRef
    ) {
    }

    public ngOnInit(): void {
        this.filterService.getCategory().subscribe((res: ICategoryFilterResponse) => {
            this.categories = res.data;
        });

        this.getPriceFilter();
        this.getClientMenus();
        this.getAllManufactures();
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
        //this.manufacturersSelectedIds.push(Number(this.manufacturerPageId));

        //console.log(this.manufacturersSelectedIds);
        console.log(this.selectedManufacturerIds);

        if (this.isManufacturerPage) {
            this.filterChanged.emit({
                categories: this.selectedCategoryIds,
                manufacturers: [Number(this.manufacturerPageId)],
                minPrice: this.value,
                maxPrice: this.highValue
            });
            //this.selectedManufacturerIds = this.manufacturerPageId;
        }

        if (!this.isManufacturerPage) {
            this.filterChanged.emit({
                categories: this.selectedCategoryIds,
                manufacturers: this.selectedManufacturerIds,
                minPrice: this.value,
                maxPrice: this.highValue
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
