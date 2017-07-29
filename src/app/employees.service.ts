import { Injectable } from '@angular/core';
import { Employee } from "./employee";

import {Http} from '@angular/http';
import {Response} from '@angular/http';

import { Observable } from "rxjs/Observable";
import  "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class EmployeesService {

   //employees: Observable<Employee[]>;

  getAll() : Observable<Employee[]>
  {
    // return this._http.
    //       get("http://localhost:3000/employees").
    //       map(resp => <Employee[]>resp.json());

    return this._http.get('http://localhost:3000/employees').
       map((result: Response) => <Employee[]>result.json()).
       do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);;
  }

  constructor(private _http :Http) {  
  }
  private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}
