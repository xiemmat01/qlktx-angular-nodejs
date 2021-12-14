import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Website Quản lý ký túc xá';
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        switch (event.url) {
          case '/phong':
            this.currentRoute = 'Quản lý phòng';
            break;
          case '/nhan-vien':
            this.currentRoute = 'Quản lý nhân viên';
            break;
          case '/sinh-vien':
            this.currentRoute = 'Quản lý sinh viên';
            break;
          case '/tien-dien-nuoc':
            this.currentRoute = 'Quản lý tiền điện - nước';
            break;
          case '/hop-dong':
            this.currentRoute = 'Quản lý hợp đồng';
            break;
          default:
            break;
        }
      });
  }
}
