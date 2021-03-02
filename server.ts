import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

import 'localstorage-polyfill';

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./src/main.server`);

// The Express app is exported so that it can be used by serverless Functions.
export function app() {
  const domino = require('domino');
  const win = domino.createWindow('');

  const server = express();
  const distFolder = join(process.cwd(), 'dist/showu-client/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  global['window'] = win;
  global['Node'] = win.Node;
  global['DOMTokenList'] = win.DOMTokenList;
  global['navigator'] = win.navigator;
  global['Event'] = win.Event;
  global['KeyboardEvent'] = win.Event;
  global['MouseEvent'] = win.Event;
  global['WheelEvent'] = win.Event;
  global['Event']['prototype'] = win.Event.prototype;
  global['document'] = win.document;
  global['localStorage'] = localStorage;
  global['Text'] = win.Text;
  global['HTMLElement'] = win.HTMLElement;
  global['navigator'] = win.navigator;
  global['XMLHttpRequest'] = require('xmlhttprequest').XMLHttpRequest;
  
  (global as any).FocusEvent = win.FocusEvent;
  (global as any).PointerEvent = win.PointerEvent;

  Object.defineProperty(win.document.body.style, 'transform', {
    value: () => {
      return {
        enumerable: true,
        configurable: true
      };
    },
  });
  
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // app.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // Server static files from /browser
  server.get('*.*', express.static(join(distFolder, 'browser')));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.sendFile(join(distFolder, 'index.html'));
  });

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }], preboot: true });
  });

  return server;
}

process.on('warning', (warning) => {
  console.log(warning.stack);
});

function run() {
  const port = process.env.PORT || 4200;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
