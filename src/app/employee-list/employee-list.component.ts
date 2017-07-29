import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { EmployeesService } from "../employees.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[];
  errorMessage: string;

  constructor (private _service : EmployeesService) {    // DEPENDENCY INJECTION
  }

  ngOnInit() {
    //this.employees = this._service.getAll();
     this._service.getAll().subscribe(emp => this.employees = emp,
      error => this.errorMessage = <any>error);
  }


}
