import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dangkythue',
  templateUrl: './dangkythue.component.html',
  styleUrls: ['./dangkythue.component.css'],
})
export class DangkythueComponent implements OnInit {
  constructor() {}

  dsDangKyThue: any = [];
  ngOnInit(): void {
    this.dsDangKyThue = JSON.parse(localStorage.getItem('dsDangKy') || '');
    console.log(
      this.dsDangKyThue.filter((item: any) => item.hoten == '12312312')
    );
  }
  selectRowValue(item: any) {}
  delete(id: any) {}
}
