import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Website Quản lý ký túc xá';

  constructor(private titleService: Title) {
    this.titleService.setTitle('Đăng ký thuê phòng');
  }

  ngOnInit(): void {}
}
