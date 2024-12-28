import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'Oscar'; // Define la propiedad usada en el HTML
  mensaje: string = ''; // Propiedad para manejar eventos

  mostrarMensaje() {
    this.mensaje = '¡Has hecho clic!';
  }
}
