import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

/////////////////
// Interfaces
////////////////
import { Employee, PositionEmployee } from 'src/app/interfaces';
/////////////////
// Enviroment
////////////////
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {
  private urlAPI = `${environment.urlAPI}`;

  newEmployee$: BehaviorSubject<Employee[]> = new BehaviorSubject<Employee[]>([]);
  
  constructor(private http :HttpClient) {}

  public addEmployee(employee: Employee): void {
    this.newEmployee$.next([
      ...this.newEmployee$.getValue(),
      { ...employee},
    ]);
  }

 public getListPosition(): Observable<PositionEmployee> {
    return this.http.get<PositionEmployee>(this.urlAPI).pipe(
      map((resp: PositionEmployee) => resp)
    );
  }
}
