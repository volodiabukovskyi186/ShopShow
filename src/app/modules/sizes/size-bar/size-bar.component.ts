import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {changeValueHighlight, changeValueScale, fade, fadeHeight, slideRight} from '../../ui/animations';
import {SizeService} from '../size/size.service';

@Component({
  animations: [fade, slideRight, fadeHeight, changeValueHighlight, changeValueScale],
  selector: 'app-size-bar',
  templateUrl: './size-bar.component.html',
  styleUrls: ['./size-bar.component.scss']
})
export class SizeBarComponent implements OnInit {
    @Input() sizesModal;
    @Input() selectedProd;
    @Output() sizeClose = new EventEmitter();
  arrTableParams = [];
  arrTableSizes = [];
  arrSize = [];
  arrSizeParams = [];
  arrSizesValue = [];
  allTable;
  constructor(private  sizeService: SizeService) { }

  ngOnInit(): void {
    this.getSizeTable();
  }

  close(): void {
    this.sizesModal = false;
    this.sizeClose.emit(this.sizesModal);
  }

  getSizeTable(): void {
    this.arrTableParams = [];
    this.arrTableSizes = [];
    this.arrSize = [];
    this.arrSizeParams = [];
    this.arrSizesValue = [];
    this.allTable = '';
    this.sizeService.getSizeTable(this.selectedProd.size_group_id, this.selectedProd.manufactured.id).subscribe(data => {
      this.allTable = data.data;
      this.arrTableParams = data.data.params;
      this.arrTableSizes = data.data.sizes;
      this.arrSize = data.data.sizes;
      this.arrSizeParams = data.data.params;

      const arrValues = data.data.values;
      for (let i = 0; i < Math.ceil(arrValues.length / this.arrTableParams.length); i++) {
        this.arrSizesValue[i] = arrValues.slice((i * this.arrTableParams.length), ( i * this.arrTableParams.length) + this.arrTableParams.length);
      }
    });

  }

}
