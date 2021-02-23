import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
});


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .then(() => {
//     console.log('LOADED');
//     // hide loading here dom.remove()
//   })
//   .catch(err => console.log(err));
