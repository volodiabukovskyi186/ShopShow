import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CurrencyService } from "../../currency/currency.service";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    isActiveResults: boolean = false;
    public isPressEnter: boolean;
    private searchText: string;
    host = environment.hoststatic;

    constructor(
        public search: SearchService, 
        private router: Router,
        public currency: CurrencyService
    ) {}

    ngOnInit(): void {
    }

    time = 500;
    timer;

    onInput(e) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            let v: string = e.target.value;

            if (v.length < 3) return this.isActiveResults = false

            this.searchText = v;
            this.search.search(v).subscribe(this.searchHandler);

        }, this.time)
    }

    searchHandler = data => {
        this.search.list = data.data;
        this.isActiveResults = !!this.search.list.length;
        console.log(this.search.list);

    }

    public pressEnter(event) {
        console.log(event);
        if (event.key === 'Enter') {
            this.router.navigate(['/products/list'], { queryParams: { search: this.searchText } });
        }
    }
}
