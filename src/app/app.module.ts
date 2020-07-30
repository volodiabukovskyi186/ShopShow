import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { serverErrorInterceptorProviders, authInterceptorProviders } from "./modules/core";

import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';



import { registerLocaleData } from "@angular/common";
import localePl from "@angular/common/locales/pl";
import localeEn from "@angular/common/locales/en";
import localeRu from "@angular/common/locales/ru";
import localeUa from "@angular/common/locales/uk";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
registerLocaleData(localeEn, "en");
registerLocaleData(localePl, "pl");
registerLocaleData(localeRu, "ru");
registerLocaleData(localeUa, "ua");

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
import { PrebootModule } from "preboot";
import { UiModule } from './modules/ui/ui.module';
// import { OnEnterSearchComponent } from './modules/on-enter-search/on-enter-search.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    // PrebootModule.withConfig({ appRoot: "app-root" }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    UiModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MatDialogModule,
  ],
  providers: [serverErrorInterceptorProviders, authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
