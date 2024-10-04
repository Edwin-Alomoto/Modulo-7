import { Component, Input } from '@angular/core';
import { Course } from '../../Model/Course';

@Component({
  selector: 'app-course-view',
  standalone: true,
  imports: [],
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent {
  @Input()course!:Course;
}
