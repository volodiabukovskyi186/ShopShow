import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    isActiveResults: boolean = false;

    constructor(public search: SearchService) {
    }

    ngOnInit(): void {
    }

    time = 500;
    timer;

    onInput(e) {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            let v: string = e.target.value;

            if (v.length < 3) return this.isActiveResults = false

            this.search.search(v).subscribe(this.searchHandler)

        }, this.time)
    }

    searchHandler = data => {
        this.search.list = data.data;
        this.isActiveResults = !!this.search.list.length;
        console.log(this.search.list);

    }

}
