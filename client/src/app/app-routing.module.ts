import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { RoomComponent } from './admin/components/contents/room/room.component';
import { StudentComponent } from './admin/components/contents/student/student.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'phong', component: RoomComponent },
  { path: 'sinh-vien', component: StudentComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
