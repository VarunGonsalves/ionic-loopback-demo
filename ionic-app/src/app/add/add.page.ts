import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  usn: any='';
  name: any='';
  course: any='';

  constructor(private router: Router, private studentService: StudentService) { }

  ngOnInit() {
  }

  addStudent() {
    let student = {
      USN: this.usn,
      Name: this.name,
      Course: this.course
    };
    if(this.usn!='' && this.name!='') {
      this.studentService.addStudent(student).then(data => {
        console.log(data);
      });
    }
    this.router.navigate(['home']);
  }

}
