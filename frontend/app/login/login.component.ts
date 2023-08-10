import { Component } from '@angular/core';
import { ServService } from '../serv.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  f: FormGroup;
  submitted: boolean = false;
  EmployeeId: any = 0;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ServService,
    private actiateRoute: ActivatedRoute
  ) {
    this.f = this.fb.group({
      Name: ['', Validators.required],
      Dob: ['', Validators.required],
      experience: ['', Validators.required],
      Number: ['', Validators.required],
      Email: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.actiateRoute.snapshot.queryParamMap.get('employeeId') != null) {
      this.EmployeeId =
        this.actiateRoute.snapshot.queryParamMap.get('employeeId');

      this.GetEmployeeDetailsById();
    }
  }

  GetEmployeeDetailsById() {
    this.service
      .GetemployeeDetailsById(this.EmployeeId)
      .subscribe((data: any) => {
        this.f.patchValue({
          Name: data.employee[0].name,
          Dob: data.employee[0].dob,
          experience: data.employee[0].experience,
          Number: data.employee[0].number,
          Email: data.employee[0].emailId,
        });
      });
  }

  submit() {
    this.submitted = true;
    if (this.f.invalid) {
      return;
    }

    this.postEmployee();
  }

  postEmployee() {
    let x = {
      // id: 0,
      employeeId: this.EmployeeId,
      name: this.f.controls['Name'].value,
      dob: this.f.controls['Dob'].value,
      experience: String(this.f.controls['experience'].value),
      number: String(this.f.controls['Number'].value),
      emailId: String(this.f.controls['Email'].value),
    };
    console.log(x);
    this.service.postEmployee(x).subscribe((data: any) => {
      alert(JSON.stringify(data));
      if (data.success == true) {
        this.router.navigateByUrl('/home');
      }
    });
  }
}
// if (this.submitted == true) {
//  this.router.navigateByUrl('/home');
//}

//  console.log(this.f.value);
// console.log(this.f.controls['Name'].value);
