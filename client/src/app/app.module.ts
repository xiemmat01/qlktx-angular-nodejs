import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

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
import {
  NoopAnimationsModule,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { viLocale } from 'ngx-bootstrap/locale';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { DangkythueComponent } from './admin/components/contents/dangkythue/dangkythue.component';

defineLocale('vi', viLocale);

registerLocaleData(localeVi);

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
    UserComponent,
    LoginComponent,
    DangkythueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [Title, { provide: LOCALE_ID, useValue: 'vi-VN' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
