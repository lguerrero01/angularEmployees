import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  
  constructor(){
    
  }
  ngOnInit(): void {
  }

  listCitias: any[] = [];


  agregarCita(cita: any) {
    this.listCitias.push(cita);
    console.log(this.listCitias);
  }

  eliminarCitaListado(index: number) {
    this.listCitias.splice(index, 1);
  }

}
