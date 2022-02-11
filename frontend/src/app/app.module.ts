import { DataTablesModule } from 'angular-datatables';
//////////////////
// Modules
/////////////////
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
/////////////////
// Components
////////////////
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TableEmployeesComponent } from './shared/components/table-employees/table-employees.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    TableEmployeesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, DataTablesModule, DataTablesModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule {}
