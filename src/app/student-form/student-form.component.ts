import { Component } from '@angular/core';
import {CreateStudentRequest} from "../model/student";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  request: CreateStudentRequest = { // domyślne wartości formularza
    firstName: "",
    lastName: "",
    age: 20
  }

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  send(): void {
    this.httpClient.post("http://localhost:8080/student", this.request)
      .subscribe({
        next: dane => {
          this.router.navigate(['/home'])
        },
        error: err => {
          console.log("Error: " + err)
        }
      });
  }
}
