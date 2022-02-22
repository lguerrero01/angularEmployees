import { EmployeService } from './../../../shared/services/employe.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  @Output() editEm = new EventEmitter<any>();
  public listEmployees: any[] = [];

  constructor(private employeeService: EmployeService,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    this.showList();
  }

  public showList() {
    this.employeeService.newEmployee$.subscribe((resp) => {
      this.listEmployees = resp;
    });
  }

  public deleteEmployee(index: number) {
    this.listEmployees.splice(index, 1);
    this.employeeService.newEmployee$.next(this.listEmployees);
    this.toastr.error('Deleted Employee', 'Succes');

  }

  public editEmployee(employee: any, index: any) {
    const info = {
      employee,
      index
    }
    this.editEm.emit(info);
  }
}
