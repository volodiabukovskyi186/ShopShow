import {
    Component,
    OnInit,
    Input,
    HostBinding,
    Output,
    EventEmitter,
    HostListener, OnDestroy,
} from "@angular/core";
import {fade} from "src/app/modules/ui/animations";
import {INavItem} from "../nav-item/nav-item.component";
import {environment} from "src/environments/environment";
import {HelperService} from "../../../core/helper.service";
import {Subject} from "rxjs/internal/Subject";
import {takeUntil} from "rxjs/operators";

@Component({
    animations: [fade],
    selector: "showu-menu-item",
    templateUrl: "./menu-item.component.html",
    styleUrls: ["./menu-item.component.scss"],
})
export class MenuItemComponent implements OnInit, OnDestroy {
    private onDestroyed: Subject<void> = new Subject<void>();
    @HostBinding("class.active")
    private _active: boolean = false;
    @Output() activeChange = new EventEmitter();

    set active(val: boolean) {
        this._active = val;
        this.activeChange.emit(this._active);
    }

    @Input() get active(): boolean {
        return this._active;
    }

    @Input() host = environment.hoststatic;
    @Input() value: INavItem;

    currentImg: string;

    constructor(private helperService: HelperService) {
    }

    ngOnInit(): void {
        this.currentImg = this.value.image.src;
        this.helperService.getMenuImg().pipe( takeUntil(this.onDestroyed)).subscribe(res => {
            if(res) this.currentImg = res;
        });
    }

    over(item):void {
        this.currentImg = item.image.src;
    }

    ngOnDestroy(): void {
        this.onDestroyed.next();
        this.onDestroyed.complete();
    }
}
