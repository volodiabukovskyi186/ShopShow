import { Component, OnInit } from '@angular/core';
import { ClientMenuService } from '../../client-menu/client-menu.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public subscribeForm: FormGroup;
  public userDataSubscribe;
  
  constructor(
    public clientMenu: ClientMenuService
  ) { }

  ngOnInit(): void {
    this.generateSubscribeForm();
  }

  public generateSubscribeForm(): void {
    this.subscribeForm = new FormGroup({
      userSubscription: new FormControl('', [])
    })
  }

  public sendUserSubscription(): void {
    console.log(this.subscribeForm.value);

    this.userDataSubscribe = {
      "subscriptions_type_id": 1,
      "email": this.subscribeForm.get('userSubscription').value,
      "first_name": null,
      "last_name": null,
      "telephone": null,
      "password": null,
      "subscrition": true
  }

    this.clientMenu.sendSubscription(this.userDataSubscribe).subscribe((res) => {
      console.log(res);
    })
  }
}
