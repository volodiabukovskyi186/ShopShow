import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { langMatcher } from './lang.matcher';
import { AppComponent } from './app.component';

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: "enabled",
      scrollPositionRestoration: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
