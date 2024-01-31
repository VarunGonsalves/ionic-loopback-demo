import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  studentList: any;

  constructor(private router: Router, private studentService: StudentService) {
    this.getStudents();
  }

  getStudents() {
    this.studentService.getStudents().then(data => {
      this.studentList=data;
    })
  }

  view(USN: any) {
    this.router.navigate(['view', {USN: USN}]);
  }

  add() {
    this.router.navigate(['add']);
  }

}
