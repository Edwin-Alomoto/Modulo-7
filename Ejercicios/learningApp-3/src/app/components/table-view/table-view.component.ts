import { Component, Input } from '@angular/core';
import { Course } from '../../Model/Course';
import { ItemViewComponent } from "../item-view/item-view.component";

@Component({
  selector: 'app-table-view',
  standalone: true,
  imports: [ItemViewComponent],
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.css'
})
export class TableViewComponent {
    @Input()courseTable!:Course;
}
