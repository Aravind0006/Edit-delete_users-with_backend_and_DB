import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServService } from '../serv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private router: Router, private service: ServService) {}

  ngOnInit(): void {
    this.GetEmployee();
  }
  EmployeeDatas: any;

  GetEmployee() {
    this.service.Getemployee().subscribe((data: any) => {
      this.EmployeeDatas = data.employee;
    });
  }
  Delete(EmployeeId: any) {
    let x = {
      employeeId: EmployeeId,
    };
    this.service.DeleteEmployee(x).subscribe((data: any) => {
      alert('Deleted Successfully');
      this.GetEmployee();
    });
  }
}
