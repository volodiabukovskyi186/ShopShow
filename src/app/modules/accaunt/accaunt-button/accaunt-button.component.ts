import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import { fadeHeight } from "../../ui/animations";
import {AuthService} from '../../core/auth/auth.service';

@Component({
  animations: [fadeHeight],
  selector: "app-accaunt-button",
  templateUrl: "./accaunt-button.component.html",
  styleUrls: ["./accaunt-button.component.scss"],
})
export class AccauntButtonComponent implements OnInit , OnChanges{
  active: boolean = false;

  @Input() title: string = "Profile";

  constructor( public auth: AuthService) {}

  toggle() {
    this.active = !this.active;
  }

  ngOnInit(): void {
    if ( !this.auth.authenticated) {
      this.active = false;
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    if ( !this.auth.authenticated) {
      this.active = false;
    }



  }
}
