import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public infoForm: {} = {};
  constructor( ){
  }
  ngOnInit(): void {
   
  }
  
  public fillForm(info: Employee){
    this.infoForm = info;
  }

}
