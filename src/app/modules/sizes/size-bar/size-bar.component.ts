import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {changeValueHighlight, changeValueScale, fade, fadeHeight, slideRight} from '../../ui/animations';

@Component({
  animations: [fade, slideRight, fadeHeight, changeValueHighlight, changeValueScale],
  selector: 'app-size-bar',
  templateUrl: './size-bar.component.html',
  styleUrls: ['./size-bar.component.scss']
})
export class SizeBarComponent implements OnInit {
    @Input() sizesModal;
    @Output() sizeClose = new EventEmitter();
  arrSizes = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }
  close(): void {
    this.sizesModal = false;
    this.sizeClose.emit(this.sizesModal);
  }

}
