import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  usn: any='';
  name: any='';
  course: any='';
  student: any;

  constructor(private router: Router, private route: ActivatedRoute, private studentService: StudentService) {
    this.usn = this.route.snapshot.params['USN'];
    this.getStudent(this.usn);
  }

  ngOnInit() {
  }

  getStudent(USN: any) {
    this.studentService.getStudent(USN).then(data => {
      this.student=data;
      this.name=this.student.Name;
      this.course=this.student.Course;
    });
  }

  update() {
    this.router.navigate(['update']);
  }

  delete() {
    
  }

}
