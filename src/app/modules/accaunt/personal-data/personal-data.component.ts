import {Component, OnInit} from '@angular/core';
import {AccauntService} from '../accaunt.service';
import jwt_decode from "jwt-decode";
import { PersonalDataService } from '../personal-data/services/personal-data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-personal-data',
    templateUrl: './personal-data.component.html',
    styleUrls: ['./personal-data.component.scss']
})
export class PersonalDataComponent implements OnInit {
    personStatus = false;
    public userId: number;
    public personalDataForm: FormGroup;
    public isSaveClickedBtn: boolean = true;
    public userPersonalDataToUpdate: any;
    public isCancelClickedBtn: boolean = true;
    public isEditMode: boolean = false;
    public isUpdateBtnClicked: boolean = false;
    public isChangePassBtnClicked: boolean = false;
    public changePasswordForm: FormGroup;
    public isPassSuccessMessage: boolean = false;

    constructor(
        public accaunt: AccauntService,
        public personalDataService: PersonalDataService
    ) {}

    ngOnInit(): void {
        this.getUserAccauntData();
        this.generatepersonalDataForm();
        this.generateChangePasswordForm();
    }

    public getUserAccauntData(): void {
        this.accaunt.getUser().subscribe((data) => {
            this.userId = data.data.user.id;

            this.accaunt.current = data.data;

            console.log(this.accaunt.current);

            this.personalDataForm.setValue({
                firstName: this.accaunt.current.user.first_name,
                lastName: this.accaunt.current.user.last_name,
                email: this.accaunt.current.user.email,
                phone: this.accaunt.current.user.tel,
                country: this.accaunt.current.user.country,
                city: this.accaunt.current.user.city,
                delivery_adress: this.accaunt.current.user.delivery_adress
            })

            this.accaunt.onCurrent();
        });
    }

    public generatepersonalDataForm(): void {
        this.personalDataForm = new FormGroup({
            firstName: new FormControl('', []),
            lastName: new FormControl('', []),
            email: new FormControl('', []),
            phone: new FormControl('', []),
            country: new FormControl('', []),
            city: new FormControl('', []),
            delivery_adress: new FormControl('', [])
        });
    }

    get formAuthControls(): any {
        return this.personalDataForm['controls'];
    }

    public changeStatus(): void {
        this.isEditMode = true;
        this.isUpdateBtnClicked = false;
        this.personStatus == false ? this.personStatus = true : this.personStatus = false;

        this.getUserAccauntData();
    }

    public updateUserPersonalData(): void {
        this.isUpdateBtnClicked = true;
        
        const data = this.personalDataForm.value;

        this.userPersonalDataToUpdate = {
            role_id: 3,
            //id: this.userId,
            email: data.email,
            permissions: [],
            first_name: data.firstName,
            last_name: data.lastName,
            phone: data.phone,
            city: data.city,
            //secret: "secret",
            country: data.country,
            delivery_adress: data.delivery_adress,
            is_subscription: true
        }

        console.log('this.userPersonalDataToUpdate', this.userPersonalDataToUpdate);

        this.personalDataService.updateUserPersonalDataByUserId(this.userId, this.userPersonalDataToUpdate).subscribe((res) => {
            console.log(res);
            this.getUserAccauntData();
        })
    }

    public changePassword() {
        this.isChangePassBtnClicked = true;
        this.isPassSuccessMessage = false;

        this.changePasswordForm.setValue({
            oldPassword: '',
            newPassword: '',
            confirmPassword: ''
        })

        //this.personStatus == false ? this.personStatus = true : this.personStatus = false;
    }

    public generateChangePasswordForm() {
        this.changePasswordForm = new FormGroup({
            oldPassword: new FormControl('', []),
            newPassword: new FormControl('', []),
            confirmPassword: new FormControl('', [])
        })
    }

    public updatePassword() {
        console.log(this.changePasswordForm.value);

        if (this.changePasswordForm.value.newPassword === this.changePasswordForm.value.confirmPassword) {
            this.personalDataService.changeUserPassword({ 
                oldPassword: this.changePasswordForm.value.oldPassword,
                newPassword: this.changePasswordForm.value.newPassword
            }).subscribe((resp) => {
                if (resp) {
                    this.isPassSuccessMessage = true;
                }
            })
        }
    }

    public changeStatusPassword() {
        this.isEditMode = false;
        this.isChangePassBtnClicked = false;
    }

}
