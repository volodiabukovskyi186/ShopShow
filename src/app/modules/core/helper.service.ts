import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
    providedIn: 'root'
})
export class HelperService {
    private menuImg: BehaviorSubject<string>;

    constructor() {
        this.menuImg = new BehaviorSubject<string>('');
    }

    updatedMenuImg(src: string) {
        this.menuImg.next(src);
    }

    getMenuImg() {
        return this.menuImg;
    }
}
