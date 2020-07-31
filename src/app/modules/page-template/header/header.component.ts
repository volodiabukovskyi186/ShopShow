import { Component, OnInit } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { AppLangService } from '../../core/app-lang.service';
import { AuthService } from '../../core/auth/auth.service';
import { AccauntService } from '../../accaunt/accaunt.service';
import { CartService } from '../../cart/cart.service';
import { CallbackDialogComponent } from '../../dialogs/callback-dialog/callback-dialog.component';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  constructor(
    public cart: CartService,
    public auth: AuthService,
    public appLang: AppLangService,
    public accaunt: AccauntService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.auth.auth.subscribe((_) => {
      this.getUser();
    });
  }

  getUser() {
    if (this.auth.authenticated)
      this.accaunt.getUser().subscribe((data) => {
        this.accaunt.current = data.data;
        this.accaunt.onCurrent();
      });
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
