import { Component, OnInit } from '@angular/core';
import {AccauntService} from '../accaunt.service';

@Component({
  selector: 'app-personal-data',
  templateUrl: './personal-data.component.html',
  styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {

  constructor(public accaunt: AccauntService) { }

  ngOnInit(): void {
    this.accaunt.getUser().subscribe((data) => {
      this.accaunt.current = data.data;
      this.accaunt.onCurrent();
    });
  }

}
