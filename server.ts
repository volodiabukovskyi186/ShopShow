import 'zone.js/dist/zone-node';
import 'reflect-metadata';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { resolve } from 'path';
import { enableProdMode } from '@angular/core';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import { renderModuleFactory } from '@angular/platform-server';
// import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import 'localstorage-polyfill';

const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require(`./src/main.server`);
// const { AppServerModuleNgFactory } = (module as any).exports;

// renderModuleFactory(AppServerModuleNgFactory, {
//   document: '<app-root></app-root>',
//   url: '/',
//   extraProviders: [
//     provideModuleMap(LAZY_MODULE_MAP)
//   ]
// })

// import * as xhr2 from 'xhr2';
// import * as parse5 from 'parse5'
// xhr2.prototype._restrictedHeaders = {};

// var XMLHttpRequest = require('xhr2');
// var XMLHttpRequestUpload = XMLHttpRequest.XMLHttpRequestUpload;
// import * as Cookie from 'cookiejar';
// XMLHttpRequest.cookieJar = Cookie.CookieJar();

// The Express app is exported so that it can be used by serverless Functions.
export function app() {
  const domino = require('domino');
  const win = domino.createWindow('');

  const server = express();
  const distFolder = join(process.cwd(), 'dist/showu-client/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
  const requestIp = require('request-ip');
  // const fs = require('fs');
  // const template = fs.readFileSync(join(distFolder , 'index.html')).toString();
  // const win = domino.createWindow(template);
  //const Buffer = require('safe-buffer').Buffer;
  // const Buffer = require('buffer/').Buffer;
  // const toBuffer = require('typedarray-to-buffer');
  // const blobToBuffer = require('blob-to-buffer');
  // let blob = new Blob([ Buffer ], { type: 'text/html' });

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
  
  // var buffer = Buffer.from(toBuffer);
  // var arrayBuffer = buffer.buffer.slice(
  //   buffer.byteOffset, buffer.byteOffset + buffer.byteLength
  // )

  // global['Buffer'] = buffer;
  
  (global as any).FocusEvent = win.FocusEvent;
  (global as any).PointerEvent = win.PointerEvent;
  // (global as any).WebSocket = require('ws');
  // (global as any).XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

  // enableProdMode();
  // (global as any).DOMTokenList = win.DOMTokenList;

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
  // server.engine('html', ngExpressEngine({
  //   bootstrap: AppServerModule,
  //   providers: [provideModuleMap(LAZY_MODULE_MAP)]
  // }));

  // server.use(cors());
  // server.use(requestIp.mw());
  // server.use(bodyParser.urlencoded({ extended: true }));
  // server.use(bodyParser.json());

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // server.get('*', (req, res) => {
  //   res.render('index', { req });
  // });

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
