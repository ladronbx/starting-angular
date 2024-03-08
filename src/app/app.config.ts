import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};


// Este archivo proporciona la configuración de la aplicación Angular, en particular, 
// la configuración del enrutador de la aplicación utilizando las rutas
//  definidas en app.routes.ts. Esto se hace utilizando la función 
//  provideRouter para configurar el enrutador de la aplicación con
//   las rutas definidas en app.routes.ts