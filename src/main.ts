// Esta línea importa la función bootstrapApplication de @angular/platform-browser, 
// que se utiliza para iniciar la aplicación Angular en un navegador.
import { bootstrapApplication } from '@angular/platform-browser';


// importa la configuración de la aplicación desde el archivo app.config.ts, 
// que probablemente contiene configuraciones globales o de inicialización para tu aplicación.
import { appConfig } from './app/app.config';

// importa el componente principal de la aplicación, AppComponent, desde el archivo app.component.ts. 
// Este componente suele ser el componente raíz de la aplicación.
import { AppComponent } from './app/app.component';


// se llama a la función bootstrapApplication, pasando el componente principal 
// AppComponent y la configuración de la aplicación appConfig. 
// Esto inicia la aplicación Angular en el navegador
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));


// En resumen, main.ts se utiliza para configurar y arrancar la aplicación Angular,
// importando el componente principal y cualquier configuración necesaria. 
// Es esencialmente el punto de inicio de la aplicación.