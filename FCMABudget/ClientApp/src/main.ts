import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

//export function getBackendUrl() {
//  return 'https://fcmabudgetappservice.azurewebsites.net/';
//}
export function getBackendUrl() {
  var url:string = 'https://localhost:7142/';
  if (environment.production) {
    url = 'https://fcmabudgetappservice.azurewebsites.net/'
  }
  return url;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  { provide: 'BACKEND_URL', useFactory: getBackendUrl, deps: [] }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
