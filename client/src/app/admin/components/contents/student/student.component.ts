import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

declare var $: any;
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Quản lý sinh viên');
  }

  ngOnInit(): void {
    $('#student').DataTable({
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
