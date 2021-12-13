import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './admin/components/contents/bills/bills.component';
import { EmployeeComponent } from './admin/components/contents/employee/employee.component';
import { RoomComponent } from './admin/components/contents/room/room.component';
import { StudentComponent } from './admin/components/contents/student/student.component';

const routes: Routes = [
  { path: '', redirectTo: 'phong', pathMatch: 'full' },
  { path: 'phong', component: RoomComponent },
  { path: 'nhan-vien', component: EmployeeComponent },
  { path: 'sinh-vien', component: StudentComponent },
  { path: 'tien-dien-nuoc', component: BillsComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
