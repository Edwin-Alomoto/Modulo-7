import { Component, OnInit } from '@angular/core';
import { Course } from '../../Model/Course';
import { CourseService } from '../../services/course.service';
import { CourseViewComponent } from "../course-view/course-view.component";
import { TableViewComponent } from "../table-view/table-view.component";

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CourseViewComponent, TableViewComponent],
  templateUrl: './learning.component.html',
  styleUrl: './learning.component.css',
})
export class LearningComponent implements OnInit {
  //*ATRIBUTO
  course!: Course;
  //*CONSTRUCTOR - INSTANCIANDO SERVICIO
  constructor(private service: CourseService) { }
  //*EVENTO DEL COMPONENTE
  ngOnInit(): void {
    this.course = this.service.getCourse();
  }
}
