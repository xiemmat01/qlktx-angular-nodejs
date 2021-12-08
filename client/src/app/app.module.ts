import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SidebarComponent } from './admin/components/sidebar/sidebar.component';
import { HeaderComponent } from './admin/components/header/header.component';
import { ContentComponent } from './admin/components/content/content.component';
import { StudentComponent } from './admin/components/content/pages/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    StudentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
