import {Component, OnInit, Input, Output, EventEmitter, OnDestroy, HostListener, ElementRef} from "@angular/core";
import {INavItem} from "../nav-item/nav-item.component";
import {fade} from 'src/app/modules/ui/animations';
import {HelperService} from "../../../core/helper.service";
import {Subject} from "rxjs/internal/Subject";

@Component({
    animations: [fade],
    selector: "showu-menu-sub-item",
    templateUrl: "./menu-sub-item.component.html",
    styleUrls: ["./menu-sub-item.component.scss"],
})
export class MenuSubItemComponent implements OnInit {
    active: boolean = true;
    hideMenu: any;

    @Input() value: INavItem;
    @Output() onItemClick = new EventEmitter();

    constructor(private helperService: HelperService, private eRef: ElementRef) {
    }

    ngOnInit(): void {
    }

    over(item) {
        this.helperService.updatedMenuImg(item.image.src);
    }

    out(item) {
        console.log(item);
    }

    onItemClicked(): void {       
        this.onItemClick.emit();
    }
}
