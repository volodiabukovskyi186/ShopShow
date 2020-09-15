import {Component, Input, OnInit} from '@angular/core';
import {BlogService} from '../blog.service';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
    readMoreStatus = false;
    @Input() item;

    blog=[{name:'one'},{name:'two'},{name:'three'}]
    constructor() {
    }

    ngOnInit(): void {
    }

}
