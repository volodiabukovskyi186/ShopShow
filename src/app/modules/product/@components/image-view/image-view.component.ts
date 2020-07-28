import { Component, OnInit, Input } from "@angular/core";
import { environment } from 'src/environments/environment';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: "product-image-view",
  templateUrl: "./image-view.component.html",
  styleUrls: ["./image-view.component.scss"],
})
export class ImageViewComponent implements OnInit {
  _images: Array<any> = [];
  hoststatic = environment.hoststatic;
  @Input()
  public set images(v: Array<any>) {
    this._images = v;
    if (this.images && this.images.length > 0) this.current = this.images[0].image;
  }

  public get images(): Array<any> {
    return this._images;
  }

  @Input()
  host: string;

  current: any;

  constructor() {}

  ngOnInit() {}

  setCurrent(img: string) {
    this.current = img;

  }
}
