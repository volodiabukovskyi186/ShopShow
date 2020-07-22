import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactsBlockComponent } from "./contacts-block/contacts-block.component";

// import { AgmCoreModule } from "@agm/core";
import { UiModule } from "../ui/ui.module";
import { ContactUsFormComponent } from "./contact-us-form/contact-us-form.component";
import { FormsModule } from "@angular/forms";
import { ContactCardComponent } from "./contact-card/contact-card.component";
import { ContactsPageComponent } from "./contacts-page/contacts-page.component";
import { ContactsRoutingModule } from "./contact-routing.module";

@NgModule({
  declarations: [
    ContactsBlockComponent,
    ContactUsFormComponent,
    ContactCardComponent,
    ContactsPageComponent,
  ],
  exports: [ContactsBlockComponent],
  imports: [
    CommonModule,
    FormsModule,
    UiModule,
    ContactsRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey: "AIzaSyBvi88oOOInhDNFct0hsMpWv7ytTTrXThg",
    // }),
  ],
})
export class ContactModule {}
