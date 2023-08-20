import { Component } from '@angular/core';
import { Employee } from '../../../Models/emolyee.model';
import { EmployeesService } from 'src/app/Services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {
employees: Employee[] = [];


// [

//   {
//     id:'53',
//    name:'name test',
//    email:'email@gmail.com',
//    phone: 8654,
//    salary:800,
//    department:'dep'

//   }
// ];
constructor(private employeesService: EmployeesService){}
ngOnInit():void{
  this.employeesService.getAllEmployees().subscribe({
    next: (employees)=>{
      this.employees=employees;
      console.log(employees);
    }
    ,error:(response)=>{

      console.log(response);
    }

  })

// this.employees.push()
}
}
