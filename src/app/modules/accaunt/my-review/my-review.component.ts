import { Component, OnInit } from '@angular/core';
import { AccauntService } from '../../accaunt/accaunt.service';
import { MyReviewService } from './services/my-review.service';

@Component({
  selector: 'app-my-review',
  templateUrl: './my-review.component.html',
  styleUrls: ['./my-review.component.scss']
})
export class MyReviewComponent implements OnInit {
  public myReviews: any[] = [];
  public clientId: number;

  constructor(
    public accauntService: AccauntService,
    public myReviewService: MyReviewService
  ) { }

  ngOnInit(): void {
    this.getOrdersByClientId();
  }

  public getOrdersByClientId() {
    this.accauntService.getUser().subscribe((res) => {
        this.clientId = res.data.user.id;
          console.log(this.clientId);
  
          this.myReviewService.getUserReviewsByClientId(this.clientId).subscribe((res) => {
            this.myReviews = res.data;
            //this.allReviews = res;

            console.log(res);
            console.log(this.myReviews);
          })
    });
  }
}
