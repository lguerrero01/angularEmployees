import { EmployeService } from './../../../shared/services/employe.service';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit, OnChanges {
  @Input() infoForm: any;
  public positions: any;
  public editForm: boolean = false;

  public fg: FormGroup = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    position: new FormControl(''),
    statusWork: new FormControl(''),
    dateOfBirth: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private newEmployeeService: EmployeService,
    private toastr: ToastrService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.fillField();
  }

  ngOnInit(): void {
    this.fg = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      position: ['', Validators.required],
      statusWork: ['', Validators.required],
    });
    this.newEmployeeService.getListPosition().subscribe((resp) => {
      this.positions = resp.positions;
    });
  }

  public validFields(field: string) {
    return this.fg.controls[field].errors && this.fg.controls[field].touched;
  }

  public newEmployee() {
    if (this.fg.invalid) return;

    this.newEmployeeService.addEmployee({
      ...this.fg.value,
    });
    this.fg.reset();
    this.toastr.success('Added employee', 'Succes');

  }

  public fillField() {
    if (!this.infoForm.employee) {
      return;
    }
    this.editForm = true;
    this.fg.patchValue({
      name: this.infoForm.employee.name,
      lastName: this.infoForm.employee.lastName,
      position: this.infoForm.employee.position,
      statusWork: this.infoForm.employee.statusWork,
      dateOfBirth: this.infoForm.employee.dateOfBirth,
    });
  }

  public updateListEmployees() {
    this.newEmployeeService.editEmployee(this.fg.value, this.infoForm.index);
    this.fg.reset();
    this.editForm = false;
    this.toastr.info('Employee edited', 'Succes');

  }
}
