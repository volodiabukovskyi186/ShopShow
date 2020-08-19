import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HelperService {
    private menuImg: BehaviorSubject<string> = new BehaviorSubject<string>('');
    private menuImg$: Observable<any> = this.menuImg.asObservable();
    
    constructor() {}

    updatedMenuImg(src: string) {
        this.menuImg.next(src);
    }

    getMenuImg() {
        return this.menuImg$;
    }
}
