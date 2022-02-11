import { EmployeService } from './../../../shared/services/employe.service';
import { Component, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PositionEmployee } from 'src/app/interfaces';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  
  public positions: any;
  public fg: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    position: new FormControl(''),
    statusWork: new FormControl(''),
    dateOfBirth: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, private newEmployeeService: EmployeService) { }

  ngOnInit(): void {
    this.fg = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      position: ['', Validators.required],
      statusWork: ['', Validators.required],
    });
    this.newEmployeeService.getListPosition().subscribe(resp =>{
      console.log('data',resp);
      this.positions = resp.positions;
    })
  }
  
  public validFields(field: string){
    return this.fg.controls[field].errors && this.fg.controls[field].touched 
  }

  public newEmployee() {
    console.log(this.fg.value);
    if (this.fg.invalid) return;
    
    this.newEmployeeService.addEmployee({
      ...this.fg.value,
    });
  }
}
