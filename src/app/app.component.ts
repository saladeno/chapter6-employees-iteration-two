import { Component } from '@angular/core';
import { EmployeesService } from "./employees.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeesService]

})
export class AppComponent {
  title = 'app';
}
