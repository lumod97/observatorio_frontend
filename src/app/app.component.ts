import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LayoutComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'observatorio_frontend';
  
  constructor(private router: Router) {}

  // Método que verifica si la ruta actual es /login
  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }

  logout(): void {
    // Eliminar el token del almacenamiento
    localStorage.removeItem('token');
    
    // Redirigir a la página de login
    this.router.navigate(['/login']);
    
  }
}
