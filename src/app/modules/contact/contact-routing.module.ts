import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContactsPageComponent } from './contacts-page/contacts-page.component';

const routes: Routes = [
  {
    path: "",
    component: ContactsPageComponent,
  },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
