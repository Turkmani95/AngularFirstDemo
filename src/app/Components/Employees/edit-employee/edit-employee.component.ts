import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from 'src/app/Models/emolyee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''

  };
  constructor(private router:Router,private employeeService: EmployeesService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.employeeService.getEmployee(id).subscribe({
            next: (response) => {
              this.employeeDetails = response;

            }
          })

        }
      }

    })
  }
  updateEmployee(){
this.employeeService.updateEmployee(this.employeeDetails.id,this.employeeDetails).subscribe({
  next: (response) => {
    this.employeeDetails = response;
    this.router.navigate(['employees']);

  }
})

  }

  deleteEmployee(id:string){
    this.employeeService.deleteEmployee(id).subscribe({
      next:(Response) => {
    this.router.navigate(['employees']);
        
      }
    });

  }

}
