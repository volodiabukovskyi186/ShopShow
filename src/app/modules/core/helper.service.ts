import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HelperService {
    private menuImg: BehaviorSubject<string> = new BehaviorSubject<string>('');
    private menuImg$: Observable<any> = this.menuImg.asObservable();

    private loginStatusStream$: Subject<any> = new Subject();
    
    constructor() {}

    updatedMenuImg(src: string) {
        this.menuImg.next(src);
    }

    getMenuImg() {
        return this.menuImg$;
    }

    public updatedLoginStatus$(message: any) {
        this.loginStatusStream$.next(message);
    }

    public getLoginStatus$() {
        return this.loginStatusStream$;
    }
}
