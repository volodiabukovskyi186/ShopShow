import { Component, OnInit, Input } from '@angular/core';

export interface IContactLink {
  title: any;
  type: string;
  link: any;
} 

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() title;
  @Input() src;
  @Input() links: Array<IContactLink>;

  constructor() { }

  ngOnInit(): void {
    console.log(this.links);
    console.log(this.title);
  }

  checkIfItsString(itemTitle): boolean {
    if (typeof(itemTitle) === 'string') {
      return true;
    }

    return false;
  }

  test(item, arr, i) {
    console.log(item, arr, i);
  }

}
