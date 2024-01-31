import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  usn: any='';
  name: any='';
  course: any='';

  constructor(private router:Router, private route: ActivatedRoute, private studentService: StudentService) {
    this.usn = this.route.snapshot.params['USN'];
    this.name = this.route.snapshot.params['Name'];
    this.course = this.route.snapshot.params['Course'];
    console.log(this.usn, this.name, this.course);
  }

  ngOnInit() {
  }

  updateStudent() {
    let student = {
      USN: this.usn,
      Name: this.name,
      Course: this.course
    };
    if(this.course!=''){
      this.studentService.updateStudent(this.usn, student);
    }
    this.router.navigate(['home']);
  }
}
