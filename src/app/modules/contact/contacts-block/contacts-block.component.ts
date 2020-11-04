import { Component, OnInit } from "@angular/core";
import { ContactService } from "../contact.service";
import { IContactLink } from '../contact-card/contact-card.component';
import { MatDialog } from '@angular/material/dialog';
import { CallbackSuccessDialogComponent } from '../../dialogs/callback-success-dialog/callback-success-dialog.component';
import { UIService } from '../../../modules/ui/services/ui.service';

@Component({
  selector: "app-contacts-block",
  templateUrl: "./contacts-block.component.html",
  styleUrls: ["./contacts-block.component.scss"],
})
export class ContactsBlockComponent implements OnInit {
  public siteData: any;
  public siteDataDesctionByLang: any;

  constructor(
    public contact: ContactService,
    public dialog: MatDialog,
    public uiservice: UIService
  ) {}

  ngOnInit(): void {
    this.getSiteSettingsData();
    this.getSiteDescriptionsData();
  }
 
  onSubmit(event) {
    this.contact.sendContactFormData(event);

    const dialogRef = this.dialog.open(CallbackSuccessDialogComponent, {
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
          contactData: event,
          // currentImg: current,
          // currentProduct: this.getCurrentProduct,
      },
    });

    dialogRef.afterClosed().subscribe(res => {});
    // alert("Mail send");
  }

  public getSiteSettingsData(): void {
    this.uiservice.getSiteSettingsValues().subscribe((res) => {
      this.siteData = res.data[0];
      console.log(this.siteData);
    })
  }

  public getSiteDescriptionsData(): void {
    this.uiservice.getSiteDescriptions().subscribe((res) => {
      console.log(res);

      this.siteDataDesctionByLang = res.data[0];
    })
  }

  zoom: number = 15;

  public darkStyle = [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#f5f5f5",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#dadada",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "transit.line",
      elementType: "geometry",
      stylers: [
        {
          color: "#e5e5e5",
        },
      ],
    },
    {
      featureType: "transit.station",
      elementType: "geometry",
      stylers: [
        {
          color: "#eeeeee",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#c9c9c9",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
  ];
}
