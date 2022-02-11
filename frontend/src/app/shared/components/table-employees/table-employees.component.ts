import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { EmployeService } from '../../services/employe.service';
import { DataTableDirective } from 'angular-datatables';
import { Employee } from 'src/app/interfaces';

@Component({
  selector: 'app-table-employees',
  templateUrl: './table-employees.component.html',
  styleUrls: ['./table-employees.component.css']
})
export class TableEmployeesComponent implements OnInit, OnDestroy{
  public listEmployees: Employee[] = []
  public isDtInitialized: boolean = false;
  public dtOptions: DataTables.Settings = {};
  public data: any[] = [];
  public dtElement!: DataTableDirective;

  public dtTrigger: Subject<any> = new Subject<any>();

  constructor( private employeeService: EmployeService) { }

  ngOnInit(): void {
    this.employeeService.newEmployee$.subscribe( resp => {
      console.log('esta es la respuesta',resp);
      this.listEmployees = resp;
      if (this.isDtInitialized) {
        // validating rendering
        this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          dtInstance.destroy();
        });
      } else {
        this.isDtInitialized = true;
      }
      this.dtTrigger.next(this.listEmployees);
    })
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
