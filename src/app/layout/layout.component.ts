import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  constructor(private router: Router) {}

  logout(): void {
    // Eliminar el token del almacenamiento
    localStorage.removeItem('token');
    
    // Redirigir a la página de login
    this.router.navigate(['/login']);
  }
}
