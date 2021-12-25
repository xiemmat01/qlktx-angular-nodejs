import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  currentRoute: string = '';
  tennv: any;
  manv: any;
  avatar: any;

  constructor(private router: Router) {
    this.tennv = sessionStorage.getItem('tennv');
    this.manv = sessionStorage.getItem('manv');
    this.avatar = this.tennv.slice(0, 1);
  }
  ngOnInit(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event) => {
        console.log(event.url);
        switch (event.url) {
          case '/admin/phong':
            this.currentRoute = 'Quản lý phòng';
            break;
          case '/admin/nhan-vien':
            this.currentRoute = 'Quản lý nhân viên';
            break;
          case '/admin/sinh-vien':
            this.currentRoute = 'Quản lý sinh viên';
            break;
          case '/admin/tien-dien-nuoc':
            this.currentRoute = 'Quản lý tiền điện - nước';
            break;
          case '/admin/hop-dong':
            this.currentRoute = 'Quản lý hợp đồng';
            break;
          default:
            break;
        }
      });
  }
}
