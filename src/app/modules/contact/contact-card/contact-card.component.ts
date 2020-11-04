import { Component, OnInit, Input } from '@angular/core';

export interface IContactLink {
  title: string;
  type: string;
  link: string;
} 

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  @Input() title: string = null;
  @Input() src: string = null;
  @Input() links: Array<IContactLink> = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.links);
    console.log(this.title);
  }

}
