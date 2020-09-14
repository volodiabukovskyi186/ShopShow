import {Component, OnInit} from '@angular/core';
import {AccauntService} from '../accaunt.service';
import jwt_decode from "jwt-decode";

@Component({
    selector: 'app-personal-data',
    templateUrl: './personal-data.component.html',
    styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
    personStatus = false;

    constructor(public accaunt: AccauntService) {
    }

    ngOnInit(): void {
        this.accaunt.getUser().subscribe((data) => {
            this.accaunt.current = data.data;
            this.accaunt.onCurrent();
        });
    }

    changeStatus(): void {
        this.personStatus == false ? this.personStatus = true : this.personStatus = false;
    }

}
