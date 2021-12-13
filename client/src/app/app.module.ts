import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/components/sidebar/sidebar.component';
import { HeaderComponent } from './admin/components/header/header.component';
import { FooterComponent } from './admin/components/footer/footer.component';
import { StudentComponent } from './admin/components/contents/student/student.component';
import { RoomComponent } from './admin/components/contents/room/room.component';
import { EmployeeComponent } from './admin/components/contents/employee/employee.component';
import { BillsComponent } from './admin/components/contents/bills/bills.component';
import { ContractComponent } from './admin/components/contents/contract/contract.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SidebarComponent,
    HeaderComponent,
    StudentComponent,
    FooterComponent,
    RoomComponent,
    EmployeeComponent,
    BillsComponent,
    ContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule {}
