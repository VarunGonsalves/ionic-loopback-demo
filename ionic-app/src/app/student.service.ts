import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  apiBaseUrl:string='';

  constructor(public http: HttpClient) {
    this.apiBaseUrl = 'http://127.0.0.1:3000/';
  }

  getStudent(USN: any) {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl+'students/'+USN).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

  getStudents() {
    return new Promise(resolve => {
      this.http.get(this.apiBaseUrl+'students/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

  addStudent(student: any) {
    return new Promise(resolve => {
      this.http.post(this.apiBaseUrl+'students/', student).subscribe(data => {
        resolve(data);
      })
    });
  }

  updateStudent(USN: any, student: any) {
    return new Promise(resolve => {
      this.http.put(this.apiBaseUrl+'students/'+USN, student).subscribe(data => {
        resolve(data);
      })
    });
  }

  deleteStudent(USN: any) {
    return new Promise(resolve => {
      this.http.delete(this.apiBaseUrl+'students/'+USN).subscribe(data => {
        resolve(data);
      })
    });
  }
}
