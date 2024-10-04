import { Component } from '@angular/core';
//*COMPONENTE NUEVO
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //*ATRIBUTO
  name: string = 'santiaguito';
  age: number = 45;
}
