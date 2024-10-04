import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent], //* ENLAZAR CON EL OTRO COMPONENTE
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //* ATRIBUTO - INVOCARLO DESDE HTML
  title: string = 'tarea-1';
  autor: string = 'Edwin Alomoto';
}
