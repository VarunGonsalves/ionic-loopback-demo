import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  apiBaseUrl:string='';

  constructor(public http: HttpClient) {
    this.apiBaseUrl = 'http://127.0.0.1:3000/';
  }

  getStudent(id: string) {

  }

  getStudents() {

  }

  addStudent(student: object) {

  }

  updateStudent(id: string, student: object) {

  }

  deleteStudent(id: string) {

  }
}
