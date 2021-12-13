import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Quản lý nhân viên');
  }

  ngOnInit(): void {
    $('#employee').DataTable({
      scrollX: true,
      language: {
        lengthMenu: 'Hiện thị _MENU_',
        zeroRecords: 'Không tìm thấy dữ liệu',
        info: 'Hiện thị trang _PAGE_ của _PAGES_',
        infoEmpty: '',
        infoFiltered: '',
        search: 'Tìm kiếm:',
        paginate: {
          previous: '<<',
          next: '>>',
        },
      },
    });
  }
}
