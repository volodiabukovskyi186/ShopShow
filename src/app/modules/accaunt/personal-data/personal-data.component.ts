import {Component, OnInit} from '@angular/core';
import {AccauntService} from '../accaunt.service';
import jwt_decode from "jwt-decode";
import { PersonalDataService } from '../personal-data/services/personal-data.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-personal-data',
    templateUrl: './personal-data.component.html',
    styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
    personStatus = false;
    clientId: number;
    public personalDataForm: FormGroup;

    constructor(
        public accaunt: AccauntService,
        public personalDataService: PersonalDataService
    ) {}

    ngOnInit(): void {
        this.accaunt.getUser().subscribe((data) => {
            this.clientId = data.data.user.id;

            this.accaunt.current = data.data;
            this.accaunt.onCurrent();
        });

        this.generatepersonalDataForm();
    }

    public generatepersonalDataForm(): void {
        this.personalDataForm = new FormGroup({
            firstName: new FormControl('', []),
            lastName: new FormControl('', []),
            phone: new FormControl('', []),
            email: new FormControl('', []),
            country: new FormControl('', []),
            city: new FormControl('', []),
            detailsForTheCourierOne: new FormControl('', []),
            detailsForTheCourierTwo: new FormControl('', []),
            novaPoshtaDataOne: new FormControl('', []),
            novaPoshtaDataTwo: new FormControl('', []),
        });
    }

    changeStatus() {
        const data = this.personalDataForm.value;

        console.log(data);
  
        this.personalDataService.getUserWishlistByClientId(this.clientId, data).subscribe((res) => {
            console.log(res);
        })
        this.personStatus == false ? this.personStatus = true : this.personStatus = false;
    }

}
