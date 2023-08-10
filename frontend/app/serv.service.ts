import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServService {
  constructor(private http: HttpClient) {}

  postEmployee(go: any) {
    return this.http.post('https://localhost:7259/POST/POSTEMPLOYEE', go);
  }

  Getemployee() {
    return this.http.get('https://localhost:7259/Login/GetEmployeeDetails');
  }

  GetemployeeDetailsById(EmployeeId: any) {
    return this.http.get(
      'https://localhost:7259/Login/GetEmployeeDetailsById?EmployeeId=' +
        EmployeeId
    );
  }

  DeleteEmployee(go: any) {
    return this.http.post(
      'https://localhost:7259/Employee/DeleteEmployeeDetails',
      go
    );
  }
}
