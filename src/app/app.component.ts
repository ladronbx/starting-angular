import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'Valencia';
}



// El archivo app.component.ts es un componente principal en una aplicación Angular. 
// Aquí tienes una explicación detallada de cada parte de este archivo:

// Importaciones:

// Component: Se importa desde @angular/core para permitir la definición de componentes Angular.

// RouterOutlet: Se importa desde @angular/router y se utiliza para renderizar componentes 
// asociados con rutas en la aplicación.

// Decorador @Component:

// selector: Especifica el selector CSS que Angular utilizará para identificar dónde 
// renderizar este componente en la plantilla HTML. En este caso, el selector es app-root, 
// lo que significa que este componente se renderizará en el lugar donde se encuentre el 
// elemento <app-root></app-root> en la plantilla HTML.

// standalone: Esta propiedad es específica de AngularJS (Angular 1.x) y no tiene ningún 
// efecto en Angular (Angular 2+). Puedes eliminarla de la definición del componente en Angular.

// imports: Esta propiedad no es parte del decorador @Component. No se debe utilizar en 
// esta sección del componente. Parece que se ha incluido accidentalmente.

// templateUrl: Especifica la ubicación del archivo HTML que contiene la plantilla del componente.
// En este caso, la plantilla se encuentra en el archivo app.component.html.

// styleUrls: Especifica la ubicación del archivo CSS que contiene los estilos del componente.
// En este caso, los estilos se encuentran en el archivo app.component.css.

// Clase AppComponent
// Esta es la clase que define el comportamiento y la lógica del componente.
// En este ejemplo, la clase AppComponent tiene una propiedad title que está 
// inicializada con el valor 'angular-project'. Esta propiedad se puede utilizar en 
// la plantilla HTML del componente para mostrar el título en la interfaz de usuario.

// En resumen, app.component.ts define el componente principal de la aplicación Angular. 
// Este archivo contiene la lógica del componente y establece la relación entre el 
// componente y su plantilla HTML y archivos de estilo CSS asociados.