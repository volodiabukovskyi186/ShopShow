import { Component, OnInit } from '@angular/core';
import { ClientMenuService } from '../../client-menu/client-menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  constructor(
    public clientMenu: ClientMenuService
    ) { }

  ngOnInit(): void {
  }

}
