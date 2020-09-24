import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-review-product-item',
  templateUrl: './my-review-product-item.component.html',
  styleUrls: ['./my-review-product-item.component.scss']
})
export class MyReviewProductItemComponent implements OnInit {
  @Input() review: any;
  @Input() hoststatic = environment.hoststatic;

  constructor() { }

  ngOnInit(): void {
    console.log(this.review);
  }
}
