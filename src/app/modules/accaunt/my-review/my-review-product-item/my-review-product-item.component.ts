import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-review-product-item',
  templateUrl: './my-review-product-item.component.html',
  styleUrls: ['./my-review-product-item.component.scss']
})
export class MyReviewProductItemComponent implements OnInit {
  @Input() review: any;
  @Input() hoststatic = environment.hoststatic;

  constructor(private location: Location) { }

  ngOnInit(): void {
    console.log(this.review);
    console.log(this.location.path());
  }
}
