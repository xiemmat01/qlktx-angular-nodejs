import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BillsComponent } from './admin/components/contents/bills/bills.component';
import { ContractComponent } from './admin/components/contents/contract/contract.component';
import { DangkythueComponent } from './admin/components/contents/dangkythue/dangkythue.component';
import { EmployeeComponent } from './admin/components/contents/employee/employee.component';
import { KhoaComponent } from './admin/components/contents/khoa/khoa.component';
import { LopComponent } from './admin/components/contents/lop/lop.component';
import { RoomComponent } from './admin/components/contents/room/room.component';
import { StudentComponent } from './admin/components/contents/student/student.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'dang-ky-thue-phong', pathMatch: 'full' },
      { path: 'dang-ky-thue-phong', component: UserComponent },
      {
        path: 'admin',
        component: AdminComponent,
        children: [
          { path: '', redirectTo: 'phong', pathMatch: 'full' },
          { path: 'phong', component: RoomComponent },
          { path: 'nhan-vien', component: EmployeeComponent },
          { path: 'sinh-vien', component: StudentComponent },
          { path: 'tien-dien-nuoc', component: BillsComponent },
          { path: 'hop-dong', component: ContractComponent },
          { path: 'ql-thue-phong', component: DangkythueComponent },
          { path: 'khoa', component: KhoaComponent },
          { path: 'lop', component: LopComponent },
        ],
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
