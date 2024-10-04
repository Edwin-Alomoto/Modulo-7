import { Component, Input } from '@angular/core';
import { Students } from '../../Model/Student';

@Component({
  selector: 'app-item-view',
  standalone: true,
  imports: [],
  templateUrl: './item-view.component.html',
  styleUrl: './item-view.component.css'
})
export class ItemViewComponent {
    @Input()itemView!:Students;
}
