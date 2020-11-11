import {Component, OnInit, Input, OnChanges} from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import {environment} from 'src/environments/environment';
import {connectableObservableDescriptor} from 'rxjs/internal/observable/ConnectableObservable';
import { GaleryProductFotoDialogComponent } from '../../../dialogs/galery-product-foto-dialog/galery-product-foto-dialog.component';

@Component({
    selector: "product-image-view",
    templateUrl: "./image-view.component.html",
    styleUrls: ["./image-view.component.scss"],
})
export class ImageViewComponent implements OnInit, OnChanges {
    _images: Array<any> = [];
    hoststatic = environment.hoststatic;
    public getCurrentProduct;
    current: any;
    @Input()
    public set images(v: Array<any>) {
        this._images = v;
        if (this.images && this.images.length > 0) this.current = this.main;
    }

    public get images(): Array<any> {

        return this._images;
    }

    ngOnChanges(res) {

        this.current = res?.main?.currentValue ? res?.main?.currentValue: res?.main?.currentValue;
        console.log('this.current',this.current)
    }

    @Input()
    host: string;

    @Input()
    main: string;



    constructor(
        public dialog: MatDialog
    ) {}

    public ngOnInit(): void {}

    setCurrent(img: string) {
        this.current = img;
    }

    public openProductModal(productData, current): void {
        productData.forEach((product) => {
            if (product.image.src === current) {
                this.getCurrentProduct = product;
            }
        })

        const dialogRef = this.dialog.open(GaleryProductFotoDialogComponent, {
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
                product: productData,
                currentImg: current,
                currentProduct: this.getCurrentProduct,
            },
        });
        dialogRef.afterClosed().subscribe(res => {});
    }
}
