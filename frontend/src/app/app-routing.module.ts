import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/////////////////////////////////
// Components
/////////////////////////////////
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('src/app/components/employee/employee.module').then(
        (m) => m.EmployeeModule
      ),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
