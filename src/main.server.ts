import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { environment } from './environments/environment';
import { AppServerModule } from './app/app.server.module';

if (environment.production) {
  enableProdMode();
  platformBrowser().bootstrapModule(AppServerModule) 
    .catch(err => console.log(err));
}

export { AppServerModule } from './app/app.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
