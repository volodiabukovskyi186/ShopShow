import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { AppLangService } from '../../core/app-lang.service';
import { AuthService } from '../../core/auth/auth.service';
import { AccauntService } from '../../accaunt/accaunt.service';
import { CartService } from '../../cart/cart.service';
import { CallbackDialogComponent } from '../../dialogs/callback-dialog/callback-dialog.component';
import { UIService } from '../../ui/services/ui.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public sitePhones: any;
  public siteData: any;
  hoststatic = environment.hoststatic;

  constructor(
    public cart: CartService,
    public auth: AuthService,
    public appLang: AppLangService,
    public accaunt: AccauntService,
    public dialog: MatDialog,
    public uiservice: UIService
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.auth.auth.subscribe((_) => {
      this.getUser();
    });

    this.getSiteData();
  }

  getUser() {
    if (this.auth.authenticated)
      this.accaunt.getUser().subscribe((data) => {
        this.accaunt.current = data.data;
        this.accaunt.onCurrent();
      });
  }

  getSiteData(): void {
    this.uiservice.getSiteSettingsValues().subscribe((res) => {
      this.sitePhones = res.data[0].phones;
      this.siteData = res.data[0];
    })
  }

  openCallBackModal() {
    const dialogRef = this.dialog.open(CallbackDialogComponent, {
      data: {
        title: 'Select unit prices to add',
        actions: [
          {
            param: 'closeIcon',
            label: 'Cancel',
          },
          {
            param: 'add',
            label: 'Add',
          },
        ],
      },
    });
    dialogRef.afterClosed().subscribe(res => {});
  }
}
