import { Component, OnInit } from '@angular/core';
import { ClientMenuService } from '../../client-menu/client-menu.service';
import { FormGroup, FormControl } from '@angular/forms';
import {CallbackDialogComponent} from '../../dialogs/callback-dialog/callback-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {FooterSubscribeDialogComponent} from '../../dialogs/footer-subscribe-dialog/footer-subscribe-dialog.component';
import {FooterService} from '../services/footer.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public subscribeForm: FormGroup;
  public userDataSubscribe;
  public  solialArr=[];
  constructor(
    public clientMenu: ClientMenuService,
    public dialog: MatDialog,
    public  footerService: FooterService,
  ) { }

  ngOnInit(): void {
    this.generateSubscribeForm();
    this.getSoliaNet()
  }

  public generateSubscribeForm(): void {
    this.subscribeForm = new FormGroup({
      userSubscription: new FormControl('', [])
    })
  }

  public sendUserSubscription(): void {
    const dialogRef = this.dialog.open(FooterSubscribeDialogComponent, {

    });
  //   dialogRef.afterClosed().subscribe(res => {});
  // }

    this.userDataSubscribe = {
      "subscriptions_type_id": 1,
      "email": this.subscribeForm.get('userSubscription').value,
      "first_name": null,
      "last_name": null,
      "telephone": null,
      "password": null,
      // "subscrition": true
  }
    this.subscribeForm.reset();
    this.clientMenu.sendSubscription(this.userDataSubscribe).subscribe((res) => {

    })
  }

  getSoliaNet():void{
    this.footerService.getSolical().subscribe(data=>{
      console.log('solialNet====>',data)
      this.solialArr=data.data

    })
  }
}
