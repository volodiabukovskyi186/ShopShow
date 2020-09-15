import {Component, OnInit} from '@angular/core';
import {NavLink} from '../../ui/rap/nav-item/nav-link';
import {slideLeft} from '../../ui/animations';
import {BlogService} from '../blog.service';

@Component({
    animations: [slideLeft],
    selector: 'app-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
    blogSmallStatus = false;
    arrPost: Array <any>;
    breadcrumbs: Array<NavLink> = [
        {
            link: '/',
            title: 'Homepage'
        },
        {
            link: '/blog',
            title: 'Blog'
        }
    ];

    constructor(private blogServise: BlogService) {
    }

    ngOnInit(): void {
        this.getBlog();
    }
    getBlog(): void {
        this.blogServise.getPost().subscribe(data => {
            this.arrPost = data.data ;
            console.log(this.arrPost);
        });
    }

}
