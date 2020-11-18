import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { langMatcher } from './lang.matcher';
import { AppComponent } from './app.component';
import {NotFoundComponent} from './modules/not-found/not-found/not-found.component';


const routes: Routes = [
  {
    // path: "en",
    matcher: langMatcher,
    component: AppComponent,
    loadChildren: () =>
      import("src/app/modules/page-template/page-template.module")
        .then((m) => m.PageTemplateModule),
  },
  {
    path: "",
    component: AppComponent,
    loadChildren: () =>
      import("src/app/modules/page-template/page-template.module")
        .then((m) => m.PageTemplateModule),
  },
  { path: '**', redirectTo: '/notfound' },




];

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      scrollPositionRestoration: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
