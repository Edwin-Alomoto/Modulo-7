import { Injectable } from '@angular/core';
import { Course } from '../Model/Course';
import { CourseData } from '../data/courseData';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  //*CONEXION CON LA DATA
  private ServiceCourse: Course= CourseData;
  constructor() { }
  
  //*METODO GET
  getCourse(): Course {
    return this.ServiceCourse;
  }
}
